export const APP_NAME = 'CampusHub';
export const APP_DESCRIPTION = 'The operating system for student life';

export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    ONBOARDING: '/auth/onboarding',
    RESET_PASSWORD: '/auth/reset-password',
  },
  TAB: {
    HOME: '/home',
    TEA: '/tea',
    NOTES: '/notes',
    MARKETPLACE: '/marketplace',
    INBOX: '/inbox',
    PROFILE: '/profile',
  },
  SETTINGS: '/settings',
  EXPLORE: '/explore',
  SEARCH: '/search',
};

export const CATEGORIES = {
  MARKETPLACE: [
    'electronics',
    'fashion',
    'sneakers',
    'gaming',
    'furniture',
    'food',
    'beauty',
    'services',
  ],
  HUSTLES: ['tutoring', 'freelance', 'delivery', 'online', 'creative'],
  EVENTS: ['academic', 'social', 'networking', 'workshop', 'competition'],
  TEA: ['relationship', 'academic', 'gossip', 'hot-take'],
};

export const FILE_TYPES = {
  NOTES: ['pdf', 'docx', 'ppt', 'image'],
  IMAGES: ['jpg', 'jpeg', 'png', 'webp'],
  VIDEO: ['mp4', 'webm', 'mov'],
  AUDIO: ['mp3', 'wav', 'm4a'],
};

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

export const PAGINATION = {
  PER_PAGE: 20,
  MAX_PER_PAGE: 100,
};

export const CACHE_TIME = {
  THIRTY_SECONDS: 30 * 1000,
  ONE_MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
  ONE_DAY: 24 * 60 * 60 * 1000,
};

export const XP_REWARDS = {
  POST: 10,
  COMMENT: 5,
  LIKE: 1,
  NOTE_UPLOAD: 50,
  MARKETPLACE_SALE: 25,
  HUSTLE_COMPLETION: 100,
  EVENT_ATTENDANCE: 20,
  ACHIEVEMENT: 50,
};

export const LEVEL_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 5000, 10000];
