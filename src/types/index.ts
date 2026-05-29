// Core User Types
export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  avatar_url: string | null;
  bio: string | null;
  school_id: string | null;
  course_id: string | null;
  year: number | null;
  verified: boolean;
  xp: number;
  level: number;
  created_at: string;
  updated_at: string;
}

export interface School {
  id: string;
  name: string;
  abbreviation: string;
  location: string;
  logo_url: string | null;
  created_at: string;
}

export interface Course {
  id: string;
  school_id: string;
  code: string;
  name: string;
  description: string | null;
  lecturer_id: string | null;
  created_at: string;
}

// Posts & Feed
export interface Post {
  id: string;
  author_id: string;
  content: string;
  image_urls: string[];
  is_anonymous: boolean;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  reposts_count: number;
  likes: string[];
  tags: string[];
  mentions: string[];
  created_at: string;
  updated_at: string;
  author?: User;
}

export interface Comment {
  id: string;
  post_id: string;
  author_id: string;
  parent_comment_id: string | null;
  content: string;
  likes_count: number;
  created_at: string;
  updated_at: string;
  author?: User;
  replies?: Comment[];
}

export interface Poll {
  id: string;
  post_id: string;
  question: string;
  options: PollOption[];
  ends_at: string;
  created_at: string;
}

export interface PollOption {
  id: string;
  poll_id: string;
  text: string;
  votes: number;
  voted: boolean;
}

// Tea / Community
export interface Confession {
  id: string;
  author_id: string | null;
  content: string;
  category: 'relationship' | 'academic' | 'gossip' | 'hot-take' | 'other';
  is_anonymous: boolean;
  likes_count: number;
  comments_count: number;
  sentiment_score: number;
  created_at: string;
  updated_at: string;
  author?: User | null;
}

// Notes
export interface Note {
  id: string;
  author_id: string;
  title: string;
  description: string;
  file_url: string;
  file_type: 'pdf' | 'docx' | 'ppt' | 'image';
  course_id: string | null;
  lecturer_id: string | null;
  school_id: string;
  semester: string | null;
  downloads_count: number;
  rating: number;
  review_count: number;
  is_past_paper: boolean;
  created_at: string;
  updated_at: string;
  author?: User;
  course?: Course;
}

export interface NoteReview {
  id: string;
  note_id: string;
  author_id: string;
  rating: number;
  comment: string;
  created_at: string;
}

// Marketplace
export interface MarketplaceItem {
  id: string;
  seller_id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: 'electronics' | 'fashion' | 'sneakers' | 'gaming' | 'furniture' | 'food' | 'beauty' | 'services' | 'other';
  condition: 'new' | 'like-new' | 'good' | 'fair';
  image_urls: string[];
  video_url: string | null;
  location: string;
  is_campus_only: boolean;
  status: 'available' | 'sold' | 'pending';
  views_count: number;
  saved_count: number;
  rating: number;
  created_at: string;
  updated_at: string;
  seller?: User;
}

export interface MarketplaceReview {
  id: string;
  item_id: string;
  buyer_id: string;
  seller_id: string;
  rating: number;
  comment: string;
  created_at: string;
}

// Messaging
export interface Conversation {
  id: string;
  participants: string[];
  is_group: boolean;
  name: string | null;
  last_message_at: string;
  unread_count: number;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  author_id: string;
  content: string;
  media_urls: string[];
  message_type: 'text' | 'image' | 'video' | 'voice' | 'file';
  replied_to_message_id: string | null;
  reactions: MessageReaction[];
  read_by: string[];
  created_at: string;
  updated_at: string;
  author?: User;
}

export interface MessageReaction {
  user_id: string;
  emoji: string;
}

// Hustles / Jobs
export interface Hustle {
  id: string;
  creator_id: string;
  title: string;
  description: string;
  category: 'tutoring' | 'freelance' | 'delivery' | 'online' | 'creative' | 'other';
  payment_type: 'fixed' | 'hourly' | 'negotiable';
  payment_amount: number | null;
  currency: string;
  deadline: string | null;
  skills_required: string[];
  applications_count: number;
  status: 'open' | 'in-progress' | 'completed' | 'closed';
  created_at: string;
  updated_at: string;
  creator?: User;
}

export interface HustleApplication {
  id: string;
  hustle_id: string;
  applicant_id: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  created_at: string;
  updated_at: string;
  applicant?: User;
}

// Events
export interface Event {
  id: string;
  creator_id: string;
  title: string;
  description: string;
  image_url: string | null;
  start_date: string;
  end_date: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
  category: 'academic' | 'social' | 'networking' | 'workshop' | 'competition' | 'other';
  capacity: number | null;
  rsvp_count: number;
  has_ticket: boolean;
  ticket_price: number | null;
  is_campus_only: boolean;
  created_at: string;
  updated_at: string;
  creator?: User;
}

export interface EventRSVP {
  id: string;
  event_id: string;
  user_id: string;
  status: 'going' | 'interested' | 'not-going';
  created_at: string;
}

export interface EventTicket {
  id: string;
  event_id: string;
  user_id: string;
  ticket_number: string;
  status: 'valid' | 'used' | 'cancelled';
  created_at: string;
}

// Notifications
export interface Notification {
  id: string;
  user_id: string;
  type: 'like' | 'comment' | 'follow' | 'message' | 'mention' | 'reply' | 'event' | 'hustle' | 'achievement';
  title: string;
  body: string;
  image_url: string | null;
  action_url: string | null;
  read: boolean;
  created_at: string;
  actor_id?: string;
  actor?: User;
}

// Gamification
export interface Achievement {
  id: string;
  user_id: string;
  title: string;
  description: string;
  icon_url: string;
  xp_reward: number;
  unlocked_at: string;
}

export interface UserStreak {
  id: string;
  user_id: string;
  type: 'study' | 'social' | 'notes';
  current_streak: number;
  longest_streak: number;
  last_activity_at: string;
}

// Admin
export interface Report {
  id: string;
  reporter_id: string;
  reported_item_id: string;
  reported_item_type: 'post' | 'comment' | 'user' | 'message' | 'item';
  reason: string;
  status: 'pending' | 'reviewed' | 'actioned' | 'dismissed';
  action_taken: string | null;
  created_at: string;
  resolved_at: string | null;
}

export interface AbuseLog {
  id: string;
  user_id: string;
  action: string;
  reason: string;
  severity: 'low' | 'medium' | 'high';
  created_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
  message: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  has_more: boolean;
}

// Auth
export interface AuthSession {
  user: User;
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

export interface AuthError {
  message: string;
  code: string;
}
