import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getGenAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not configured.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '25mb' }));

  // 1. Start Video Generation (Veo 3.1 Fast)
  app.post('/api/generate-video', async (req, res) => {
    try {
      const { prompt, imageBase64, mimeType, aspectRatio } = req.body;

      if (!imageBase64 || !mimeType) {
        res.status(400).json({ error: 'Please upload a photo to animate into a video.' });
        return;
      }

      const validAspectRatio = aspectRatio === '9:16' ? '9:16' : '16:9';
      const ai = getGenAIClient();

      const operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt:
          prompt && prompt.trim()
            ? prompt.trim()
            : 'Smooth, natural camera motion bringing this business photo to life for a social media promotional video.',
        image: {
          imageBytes: imageBase64,
          mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: validAspectRatio,
        },
      });

      res.json({ operationName: operation.name });
    } catch (error: unknown) {
      console.error('Error starting video generation:', error);
      const message =
        error instanceof Error ? error.message : 'Failed to start video generation.';
      res.status(500).json({ error: message });
    }
  });

  // 2. Poll Video Generation Status
  app.post('/api/video-status', async (req, res) => {
    try {
      const { operationName } = req.body;
      if (!operationName) {
        res.status(400).json({ error: 'Missing operationName' });
        return;
      }

      const ai = getGenAIClient();
      const op = new GenerateVideosOperation();
      op.name = operationName;
      const updated = await ai.operations.getVideosOperation({ operation: op });

      if (updated.error) {
        res.status(500).json({
          done: true,
          error:
            (updated.error as { message?: string })?.message ||
            'Video generation encountered an error.',
        });
        return;
      }

      res.json({ done: Boolean(updated.done) });
    } catch (error: unknown) {
      console.error('Error checking video status:', error);
      const message =
        error instanceof Error ? error.message : 'Failed to check video status.';
      res.status(500).json({ error: message });
    }
  });

  // 3. Download Completed Video
  app.post('/api/video-download', async (req, res) => {
    try {
      const { operationName } = req.body;
      if (!operationName) {
        res.status(400).json({ error: 'Missing operationName' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY || '';
      const ai = getGenAIClient();
      const op = new GenerateVideosOperation();
      op.name = operationName;
      const updated = await ai.operations.getVideosOperation({ operation: op });

      const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
      if (!uri) {
        res.status(404).json({ error: 'Generated video URI not found.' });
        return;
      }

      const videoRes = await fetch(uri, {
        headers: {
          'x-goog-api-key': apiKey,
        },
      });

      if (!videoRes.ok || !videoRes.body) {
        res.status(502).json({ error: 'Failed to download generated video stream.' });
        return;
      }

      res.setHeader('Content-Type', 'video/mp4');
      await videoRes.body.pipeTo(
        new WritableStream({
          write(chunk) {
            res.write(chunk);
          },
          close() {
            res.end();
          },
        })
      );
    } catch (error: unknown) {
      console.error('Error downloading video:', error);
      const message =
        error instanceof Error ? error.message : 'Failed to download generated video.';
      if (!res.headersSent) {
        res.status(500).json({ error: message });
      } else {
        res.end();
      }
    }
  });

  const publicPath = path.join(__dirname, 'public');
  app.use(express.static(publicPath));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Bright Digitals server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
