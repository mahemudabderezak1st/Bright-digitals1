import React, { useRef, useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface CleanVideoPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  description?: string;
  category?: string;
  client?: string;
  aspectRatio?: '9:16' | '16:9';
  autoPlayOnHover?: boolean;
  className?: string;
  showInfoOverlay?: boolean;
}

export const CleanVideoPlayer: React.FC<CleanVideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
  description,
  category,
  client,
  aspectRatio = '9:16',
  className = '',
  showInfoOverlay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!videoRef.current || !videoUrl) return;

    if (hasEnded) {
      videoRef.current.currentTime = 0;
      setHasEnded(false);
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      return;
    }

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Playback error:', err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) {
        setControlsVisible(false);
      }
    }, 2800);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setControlsVisible(false);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const isNineSixteen = aspectRatio === '9:16';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={videoUrl ? togglePlay : undefined}
      className={`relative select-none overflow-hidden rounded-2xl bg-[#06152D] border border-sky-500/20 group transition-all duration-200 ${
        isNineSixteen ? 'aspect-[9/16]' : 'aspect-[16/9]'
      } ${videoUrl ? 'cursor-pointer hover:border-[#00D2FF]/60 hover:shadow-[0_12px_36px_rgba(0,210,255,0.2)]' : ''} ${className}`}
    >
      {/* 1. Direct Video Element (No third-party wrappers, 100% clean) */}
      {videoUrl && !hasError ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl || undefined}
          playsInline
          muted={isMuted}
          preload="metadata"
          onTimeUpdate={() => {
            if (videoRef.current) {
              setCurrentTime(videoRef.current.currentTime);
            }
          }}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setDuration(videoRef.current.duration);
              setHasError(false);
            }
          }}
          onEnded={() => {
            setIsPlaying(false);
            setHasEnded(true);
            setControlsVisible(true);
          }}
          onError={() => {
            setHasError(true);
            setIsPlaying(false);
          }}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Sleek Bright Digitals Placeholder when awaiting direct video URL */
        <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#091E44] via-[#061633] to-[#040E22] text-center select-none relative overflow-hidden">
          {/* Ambient cyan background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 40%, rgba(0, 210, 255, 0.16) 0%, rgba(4, 14, 34, 0) 75%)',
            }}
          />

          {/* Top Tag */}
          <div className="relative z-10 w-full flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#030D20]/90 text-[#00D2FF] border border-sky-400/30">
              <Sparkles className="w-3 h-3" />
              <span>{category || 'Vertical Reel 9:16'}</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              9:16 HD
            </span>
          </div>

          {/* Middle Graphic */}
          <div className="relative z-10 flex flex-col items-center my-auto">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#2563EB]/30 border border-[#00D2FF]/50 flex items-center justify-center text-[#00D2FF] mb-4 shadow-[0_0_24px_rgba(0,210,255,0.25)] group-hover:scale-105 transition-transform">
              <Play className="w-7 h-7 fill-[#00D2FF] ml-1" />
            </div>
            <h4 className="text-base font-bold text-white px-2 leading-snug">
              {title || 'Creative Video'}
            </h4>
            {client && (
              <span className="text-xs font-semibold text-[#00D2FF] mt-1">
                {client}
              </span>
            )}
            <p className="mt-2 text-xs text-slate-300 max-w-[220px] leading-relaxed line-clamp-3">
              {description || 'Custom vertical social reel for Ethiopian businesses.'}
            </p>
          </div>

          {/* Bottom helper prompt */}
          <div className="relative z-10 w-full pt-3 border-t border-sky-500/20">
            <span className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-[#00D2FF] bg-[#030D20]/80 py-2 rounded-xl border border-sky-400/25">
              <span>Ready for Video File</span>
            </span>
          </div>
        </div>
      )}

      {/* Central Play / Pause Button Overlay */}
      {videoUrl && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-200 ${
            !isPlaying || controlsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#030C1E]/85 backdrop-blur-md border border-[#00D2FF]/60 flex items-center justify-center text-white shadow-[0_0_24px_rgba(0,210,255,0.4)] group-hover:scale-110 transition-transform">
            {hasEnded ? (
              <RotateCcw className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D2FF]" />
            ) : isPlaying ? (
              <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D2FF] fill-[#00D2FF] ml-1" />
            )}
          </div>
        </div>
      )}

      {/* 4. Bottom Video Info Overlay (Title & Description) */}
      {videoUrl && showInfoOverlay && (
        <div
          className={`absolute bottom-14 left-0 right-0 p-4 bg-gradient-to-t from-[#030C1E]/95 via-[#030C1E]/75 to-transparent z-15 pointer-events-none transition-opacity duration-200 ${
            controlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {client && (
            <span className="text-[11px] font-semibold text-[#00D2FF] block mb-0.5">
              {client}
            </span>
          )}
          {title && (
            <h4 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md">
              {title}
            </h4>
          )}
          {description && (
            <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed drop-shadow">
              {description}
            </p>
          )}
        </div>
      )}

      {/* 5. Custom Bottom Controls Bar */}
      {videoUrl && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#030C1E] to-transparent z-20 flex flex-col gap-1.5 transition-opacity duration-200 ${
            controlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Progress Timeline Scrubber */}
          <div className="relative w-full flex items-center group/scrub">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Seek video progress"
              className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-[#00D2FF] focus:outline-none"
              style={{
                background: `linear-gradient(to right, #00D2FF ${progressPercent}%, rgba(51, 65, 85, 0.7) ${progressPercent}%)`,
              }}
            />
          </div>

          {/* Lower buttons: Play, Time, Mute, Fullscreen */}
          <div className="flex items-center justify-between text-xs text-slate-200 pt-0.5">
            <div className="flex items-center gap-2.5">
              {/* Play / Pause button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="p-1 text-white hover:text-[#00D2FF] transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
              </button>

              {/* Time display */}
              <span className="font-mono text-[11px] text-slate-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Audio Mute / Unmute */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                className="p-1 text-white hover:text-[#00D2FF] transition-colors cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#00D2FF]" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
