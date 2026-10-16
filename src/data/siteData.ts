export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  includedItems: string[];
  bestFor: string;
  iconName: 'share' | 'megaphone' | 'pen' | 'palette' | 'video';
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface BusinessTypeItem {
  name: string;
  tagline: string;
  howWeHelp: string;
  keyServices: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  focus: string;
  skills?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string;
  deliverables: string[];
}

export interface PackageCategory {
  title: string;
  iconName: 'social' | 'content' | 'strategy' | 'live' | 'community' | 'ads' | 'influencer';
  items: string[];
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  price?: string;
  currency?: string;
  billingPeriod?: string;
  badge?: string;
  highlightNote: string;
  categories: PackageCategory[];
  isPopular?: boolean;
  hasCrown?: boolean;
}

export interface StrategicPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface CreativeVideoItem {
  id: string;
  title: string;
  category: string;
  client?: string;
  description?: string;
  videoUrl?: string; // Direct clean video file or hosted URL (.mp4, .webm)
  posterUrl?: string; // Optional cover thumbnail image
  aspectRatio?: '9:16' | '16:9';
  tag?: string;
}

export const WHATSAPP_PRIMARY_NUMBER = '251975785777';
export const WHATSAPP_SECONDARY_NUMBER = '251973073299';

export function getWhatsAppUrl(customMessage?: string, useSecondary = false): string {
  const phone = useSecondary ? WHATSAPP_SECONDARY_NUMBER : WHATSAPP_PRIMARY_NUMBER;
  const text =
    customMessage ||
    'Hello Bright Digitals! I have a business in Ethiopia and would like to talk to your team about digital marketing.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    title: 'Real Results Only',
    subtitle: 'Practical Business Focus',
    description:
      'We focus on customer inquiries, store visits, and real sales—not empty likes or fake metrics.',
  },
  {
    title: 'Made for Ethiopia',
    subtitle: 'Local Market Expertise',
    description:
      'Content, messaging, and ad timing created specifically for Addis Ababa and local customer habits.',
  },
  {
    title: 'Clear Monthly Work',
    subtitle: 'Clear Work Schedule',
    description:
      'You always know exactly what posts, designs, ads, and reports are scheduled and delivered every week.',
  },
  {
    title: 'Dedicated Local Team',
    subtitle: 'Direct Communication',
    description:
      'Direct WhatsApp access to your content strategist, designer, and marketing lead without bureaucratic layers.',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Business Audit',
    shortDesc: 'Understanding your business, offerings, and customers',
    details:
      'We begin with an in-depth conversation about your products, ideal customers, current social profiles, and what makes your business distinct in Addis Ababa or across Ethiopia.',
    deliverables: [
      'Current social media presence review',
      'Target customer & competitor landscape overview',
      'Core brand messaging angles',
    ],
  },
  {
    step: '02',
    title: 'Strategy & Content Roadmap',
    shortDesc: 'Defining what to post, when to post, and ad direction',
    details:
      'We formulate a clear monthly plan outlining content pillars, posting frequency, visual theme, and targeted ad budget recommendations that fit your exact budget.',
    deliverables: [
      'Monthly editorial calendar',
      'Content themes (Educational, Promotional, Behind-the-Scenes)',
      'Facebook & Instagram ads target audience setup',
    ],
  },
  {
    step: '03',
    title: 'Creative Production & Launch',
    shortDesc: 'Crafting clean graphics, videos, and compelling copy',
    details:
      'Our creative director and content strategists produce clean, branded social media posts, short vertical videos/Reels, and clear copy in both English and Amharic.',
    deliverables: [
      'High-resolution branded post & story graphics',
      'Engaging short videos / Reels with captions & audio',
      'Targeted campaign setup with direct WhatsApp call-to-actions',
    ],
  },
  {
    step: '04',
    title: 'Management, Review & Optimization',
    shortDesc: 'Consistent execution and ongoing adjustments',
    details:
      'We keep your pages active, monitor ad spend to ensure every Birr works effectively, and hold regular check-ins to review what worked best and iterate for continuous progress.',
    deliverables: [
      'Scheduled weekly publishing',
      'Ad campaign budget & performance monitoring',
      'Transparent monthly review & next-month action plan',
    ],
  },
];

export const TRANSPARENT_PACKAGES: PackageTier[] = [
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Strategy • Content • Growth',
    price: '10,000',
    currency: 'ETB',
    billingPeriod: '/month',
    badge: 'Starter',
    highlightNote: 'Essential presence for growing businesses & startups',
    categories: [
      {
        title: 'Social Media Management',
        iconName: 'social',
        items: [
          'Instagram',
          'TikTok',
          'Content scheduling',
        ],
      },
      {
        title: 'Content Creation',
        iconName: 'content',
        items: [
          '16 posts/month',
          'Graphic design posts',
          'Captions & hashtags',
          'Story content',
        ],
      },
      {
        title: 'Growth & Strategy',
        iconName: 'strategy',
        items: [
          'Basic social media strategy',
          'Hashtag research',
          'Content calendar',
        ],
      },
    ],
    isPopular: false,
    hasCrown: false,
  },
  {
    id: 'standard',
    name: 'STANDARD',
    subtitle: 'Strategy • Content • Growth',
    price: '15,000',
    currency: 'ETB',
    billingPeriod: '/month',
    badge: 'Most Popular',
    highlightNote: 'Accelerated visibility, engagement & consistent short videos',
    categories: [
      {
        title: 'Social Media Management',
        iconName: 'social',
        items: [
          'Facebook Page',
          'Instagram',
          'TikTok',
          'Profile optimization',
          'Content scheduling',
          'Account monitoring',
        ],
      },
      {
        title: 'Content Creation',
        iconName: 'content',
        items: [
          '24 posts/month',
          'Reels & short videos',
          'Story design',
          'Carousel posts',
          'Captions & hashtags',
          'Product showcase content',
        ],
      },
      {
        title: 'Growth & Strategy',
        iconName: 'strategy',
        items: [
          'Advanced social media strategy',
          'Competitor analysis',
          'Audience research',
          'Hashtag research',
          'Trend research',
          'Content calendar',
        ],
      },
    ],
    isPopular: true,
    hasCrown: false,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    subtitle: 'Strategy • Content • Growth',
    price: '22,000',
    currency: 'ETB',
    billingPeriod: '/month',
    badge: 'Full Service',
    highlightNote: 'Complete end-to-end management, live streaming & paid ads',
    categories: [
      {
        title: 'Social Media Management',
        iconName: 'social',
        items: [
          'Facebook',
          'Instagram',
          'TikTok',
          'Content scheduling',
          'Account monitoring',
        ],
      },
      {
        title: 'Content Creation',
        iconName: 'content',
        items: [
          '28 posts/month',
          'Reels & short videos',
          'Professional designs',
          'Story design',
          'Carousel posts',
          'Captions & hashtags',
          'Product showcase content',
        ],
      },
      {
        title: 'Live Streaming',
        iconName: 'live',
        items: [
          'Setup & support',
          'Real-time engagement support',
          'Post-live content management',
        ],
      },
      {
        title: 'Growth & Strategy',
        iconName: 'strategy',
        items: [
          'Full social media strategy',
          'Competitor analysis',
          'Audience research',
          'Hashtag research',
          'Trend research',
          'Content calendar',
        ],
      },
      {
        title: 'Community Management',
        iconName: 'community',
        items: [
          'Comments & direct messages',
          'Customer engagement',
          'Questions & FAQs',
          'Review & feedback monitoring',
        ],
      },
      {
        title: 'Social Media Advertising',
        iconName: 'ads',
        items: [
          'Campaign setup & monitoring',
          'Audience targeting',
          'Ad creative preparation',
          'Performance optimization',
        ],
      },
      {
        title: 'Influencer & Brand Promotion',
        iconName: 'influencer',
        items: [
          'Influencer research',
          'Collaboration planning',
          'Brand awareness campaigns',
          'UGC strategy',
          'Product promotion content',
        ],
      },
    ],
    isPopular: false,
    hasCrown: true,
  },
];

export const PACKAGE_GOALS = [
  { label: 'Increase Brand Awareness', icon: 'sparkles' },
  { label: 'Grow Your Audience', icon: 'users' },
  { label: 'Boost Engagement', icon: 'trending' },
  { label: 'Turn Followers into Customers', icon: 'cart' },
  { label: 'Build a Strong Online Presence', icon: 'shield' },
];

export const PACKAGE_DISCLAIMER =
  'Advertising Budget & Influencer Fees: Not included in the package price. You can pay them separately, directly to the platforms and influencers.';


export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media-management',
    number: '01',
    title: 'Social Media Management',
    shortDescription:
      'We help manage your social media and keep your business active online.',
    extendedDescription:
      'Running your day-to-day business takes all your time. We take care of your Facebook, Instagram, and TikTok pages so your customers always see an active, trustworthy business when they search for you.',
    includedItems: [
      'Setting up and organizing your social media pages professionally',
      'Planning and publishing regular updates every week',
      'Writing simple, clear captions in English or Amharic',
      'Keeping your page active, modern, and consistent for local customers',
    ],
    bestFor: 'Restaurants · Clinics · Retail Shops · Growing Local Brands',
    iconName: 'share',
  },
  {
    id: 'facebook-ads',
    number: '02',
    title: 'Facebook Ads',
    shortDescription:
      'We help businesses reach more people through Facebook and Instagram ads.',
    extendedDescription:
      'We create targeted Facebook and Instagram advertising campaigns focused on Addis Ababa and across Ethiopia so your promotions reach people who are actually interested in buying from you.',
    includedItems: [
      'Targeting the right audience by location, demographics, and interest in Ethiopia',
      'Designing clear, high-converting ad images, videos, and headlines',
      'Setting up message ads that bring customers straight to your phone or WhatsApp',
      'Monitoring ad spend closely so every Birr delivers genuine business impact',
    ],
    bestFor: 'E-commerce · Clothing Shops · Dental Clinics · Special Promotions',
    iconName: 'megaphone',
  },
  {
    id: 'content-creation',
    number: '03',
    title: 'Content Creation',
    shortDescription:
      'We create simple and attractive content for your business.',
    extendedDescription:
      'Good content helps customers understand what you sell and why they should trust you. We plan and create photo ideas, post concepts, and clear messages that show off your products and services naturally.',
    includedItems: [
      'Creative post concepts tailored to your products or services',
      'Product and service photography direction and formatting',
      'Clear storytelling that explains your business simply and honestly',
      'Educational and helpful posts that build real customer trust over time',
    ],
    bestFor: 'Startups · Businesses · Cafes & Restaurants · Service Providers',
    iconName: 'pen',
  },
  {
    id: 'graphic-design',
    number: '04',
    title: 'Graphic Design',
    shortDescription:
      'We create social media posts, advertisements, and other designs.',
    extendedDescription:
      'Clean, attractive design makes your business stand out on a busy feed. We design easy-to-read social media graphics, promotional flyers, banners, and brand visuals that match your style.',
    includedItems: [
      'Social media post and story graphics with consistent branding',
      'Promotional posters and digital flyers for discounts, events, or launches',
      'Clean menu layouts, price lists, and business profile covers',
      'Consistent brand colors and typography so people recognize your business instantly',
    ],
    bestFor: 'Retail Shops · Clothing Shops · Clinics · New Startups',
    iconName: 'palette',
  },
  {
    id: 'video-and-reels',
    number: '05',
    title: 'Video & Reels',
    shortDescription:
      'We create short videos and Reels for social media.',
    extendedDescription:
      'Short vertical videos on Instagram Reels, TikTok, and Facebook capture the most attention online today. We create simple, engaging short videos that showcase your shop, team, or products in action.',
    includedItems: [
      'Short vertical videos ready for Instagram Reels, TikTok, and Facebook',
      'Clean editing with readable captions, sound design, and music',
      'Product showcases, behind-the-scenes clips, and shop tours',
      'Simple video ads designed to grab attention in the first three seconds',
    ],
    bestFor: 'Restaurants · Clothing Shops · E-commerce · Dental & Medical Clinics',
    iconName: 'video',
  },
];

export const WHY_BRIGHT_DIGITALS: WhyPoint[] = [
  {
    title: 'Affordable',
    description: 'Marketing that fits small-business budgets.',
  },
  {
    title: 'Creative',
    description: 'Fresh ideas and attractive content.',
  },
  {
    title: 'For Businesses',
    description: 'We focus on helping local businesses grow online.',
  },
];

export const WHO_WE_HELP: BusinessTypeItem[] = [
  {
    name: 'Businesses',
    tagline: 'Neighborhood & city-wide service businesses',
    howWeHelp:
      'We help local businesses build a clean online presence, establish trust, and attract steady neighborhood and city-wide customers.',
    keyServices: ['Social Media Management', 'Graphic Design', 'Local Ads'],
  },
  {
    name: 'Startups & Emerging Brands',
    tagline: 'New ventures launching products or services',
    howWeHelp:
      'We help new startups in Ethiopia introduce their brand clearly, explain their offering simply, and reach their very first customers efficiently.',
    keyServices: ['Brand Strategy', 'Content Creation', 'Launch Campaigns'],
  },
  {
    name: 'Restaurants & Cafes',
    tagline: 'Food, beverage & hospitality venues',
    howWeHelp:
      'We showcase your food, atmosphere, and daily specials with appetizing photos, short Reels, menu designs, and local awareness ads.',
    keyServices: ['Video & Reels', 'Graphic Design', 'Instagram Ads'],
  },
  {
    name: 'E-commerce & Online Sellers',
    tagline: 'Brands selling products directly to consumers',
    howWeHelp:
      'We create product graphics, video showcases, and targeted Facebook & Instagram ads that drive direct orders and WhatsApp inquiries.',
    keyServices: ['Facebook Ads', 'Video & Reels', 'Content Creation'],
  },
  {
    name: 'Clinics & Healthcare',
    tagline: 'Medical practices, wellness & specialty centers',
    howWeHelp:
      'We share trustworthy health tips, introduce your doctors and services, and make it simple for patients to contact and book appointments.',
    keyServices: ['Content Creation', 'Social Media Management', 'Graphic Design'],
  },
  {
    name: 'Dental Clinics',
    tagline: 'Dental healthcare & aesthetic dentistry',
    howWeHelp:
      'We highlight dental care services, your friendly clinic environment, and patient education to bring in more consultations and appointments.',
    keyServices: ['Social Media Management', 'Targeted Ads', 'Educational Posts'],
  },
  {
    name: 'Clothing Shops & Boutiques',
    tagline: 'Fashion, apparel & footwear retailers',
    howWeHelp:
      'We turn new arrivals and seasonal collections into eye-catching lookbook posts, TikTok/Reels videos, and direct-message promotional ads.',
    keyServices: ['Video & Reels', 'Social Media Management', 'Facebook Ads'],
  },
  {
    name: 'Retail Shops',
    tagline: 'Electronics, beauty, home goods & general retail',
    howWeHelp:
      'We keep your customers updated on available items, prices, and seasonal promotions so more shoppers visit your store or order for delivery.',
    keyServices: ['Graphic Design', 'Facebook Ads', 'Content Creation'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mahemud',
    name: 'Mahemud Abderezak',
    role: 'Creative Director & Content Strategist',
    initials: 'MA',
    focus:
      'Leads creative direction, brand copywriting, visual storytelling, and engaging short-form video reels.',
    skills: [
      'Creative Direction',
      'Brand Copywriting',
      'Visual Storytelling',
      'Short-Form Video & Reels',
      'Brand Identity',
    ],
  },
  {
    id: 'rihana',
    name: 'Rihana Seid',
    role: 'Marketing Strategist & Operations Lead',
    initials: 'RS',
    focus:
      'Drives campaign strategy, audience growth, client communication, and end-to-end project operations & delivery.',
    skills: [
      'Marketing Strategy',
      'Client Communications',
      'Project Operations',
      'Audience Growth',
      'Campaign Planning',
    ],
  },
  {
    id: 'kalkidan',
    name: 'Kalkidan Adnew',
    role: 'Digital Marketing Lead',
    initials: 'KA',
    focus:
      'Manages social media channels, targeted ad campaigns, publishing schedules, and ongoing client support.',
    skills: [
      'Social Media Management',
      'Facebook & IG Ads',
      'Ad Optimization',
      'Publishing Schedules',
      'Client Support',
    ],
  },
];

export const CONTACT_DETAILS = {
  phones: ['0975785777', '0973073299'],
  whatsapp: ['0975785777', '0973073299'],
  email: 'brightdigitalssmarketing@gmail.com',
  address: 'Addis Ababa, Ethiopia',
  socials: [
    {
      platform: 'Instagram',
      handle: '@brightdigitalss',
      url: 'https://instagram.com/brightdigitalss',
    },
    {
      platform: 'Facebook',
      handle: '@brightdigitalss',
      url: 'https://www.facebook.com/share/19TZbjYhx9/',
    },
    {
      platform: 'TikTok',
      handle: '@brightdigitalss',
      url: 'https://tiktok.com/@brightdigitalss',
    },
  ],
};

export function getGmailComposeUrl(subject = '', body = ''): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: CONTACT_DETAILS.email,
  });
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function getEmailMailtoUrl(subject = '', body = ''): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${CONTACT_DETAILS.email}${query ? `?${query}` : ''}`;
}

export const CREATIVE_WORK_VIDEOS: CreativeVideoItem[] = [
  {
    id: 'video-food-showcase',
    title: 'Restaurant Food & Dining Reel',
    category: 'Restaurants & Cafes',
    description: 'High-energy 9:16 vertical video capturing signature dishes and vibrant dining experience.',
    videoUrl: '/videos/black-canvas-food.mp4',
    posterUrl: '/videos/black-canvas-food-cover.jpg',
    aspectRatio: '9:16',
    tag: 'Reel 9:16',
  },
  {
    id: 'video-caramel-latte',
    title: 'Caramel Latte & Specialty Coffee',
    category: 'Restaurants & Cafes',
    description: 'Specialty coffee showcase featuring artisan latte preparation and cafe ambiance.',
    videoUrl: '/videos/black-canvas-latte.mp4',
    posterUrl: '/videos/black-canvas-latte-cover.jpg',
    aspectRatio: '9:16',
    tag: 'Reel 9:16',
  },
  {
    id: 'video-restaurant-ambiance',
    title: 'Restaurant Atmosphere & Welcome Tour',
    category: 'Restaurants & Cafes',
    description: 'Atmospheric hospitality reel inviting guests to experience the cozy seating and modern dining space.',
    videoUrl: '/videos/black-canvas-ambiance.mp4',
    posterUrl: '/videos/black-canvas-ambiance-cover.jpg',
    aspectRatio: '9:16',
    tag: 'Reel 9:16',
  },
];

