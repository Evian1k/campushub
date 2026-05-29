# CampusHub 🎓

**The Operating System for Student Life**

> Production-ready, billion-dollar startup quality student super-platform combining social media, academics, marketplace, messaging, and networking.

## 🎯 Vision

CampusHub is an all-in-one ecosystem that solves:
- Academic struggles
- Student isolation
- Lack of opportunities
- Campus communication
- Resource sharing
- Study productivity

## ✨ Core Features

### 🏠 Social Feed
- Real-time posts with algorithmic ranking
- Trending algorithm & personalization
- Polls, events, announcements
- Double-tap likes & reactions
- Nested comments & quote replies
- Hashtags, mentions, trending topics

### 🍵 Tea / Community
- Anonymous confessions & real-name posts
- Campus gossip & debates
- Viral ranking system
- AI moderation & spam prevention

### 📚 Notes & Study Hub
- PDF, DOCX, PPT, image uploads
- AI summaries, flashcards, quizzes
- Past papers & course categories
- Contributor leaderboards
- Study planner, CGPA calculator
- Gamification (XP, levels, achievements)

### 🛍️ Marketplace
- Product listings with multiple images
- Seller profiles & verification
- Nearby listings & campus-only
- Wishlist & saved items
- Real-time inventory updates

### 💬 Real-time Messaging
- One-to-one & group chats
- Voice notes & media sharing
- Typing indicators & read receipts
- Emoji reactions & message replies
- Lightning-fast performance

### 💼 Hustles / Jobs
- Gig posting & applications
- Freelancer profiles
- Rating & review system
- Scam prevention

### 📅 Events
- Event posting & RSVP
- Ticket system
- Maps integration
- Event reminders

### 👤 Profile System
- Customizable avatars & bios
- XP levels & achievement badges
- Followers/following
- Activity history
- Verification badges

## 🎨 Design System

- **Inspiration**: iOS 18, Apple Music, Telegram, Linear
- **Theme**: Apple-inspired luxury minimalism
- **Colors**: Matte black, graphite, frosted glass, soft electric blue
- **Typography**: SF Pro Display, Inter
- **Animations**: Framer Motion with iPhone-quality spring physics
- **Feel**: Calm, intelligent, sophisticated, addictive

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI**: React 18 with Tailwind CSS
- **Animation**: Framer Motion
- **State**: Zustand + React Query
- **PWA**: next-pwa for offline support

### Backend
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth + OAuth
- **Real-time**: Supabase Realtime
- **Storage**: Supabase Storage
- **AI**: OpenAI API
- **Payments**: Stripe
- **Email**: Resend

### Security
- Row-level security (RLS) policies
- Rate limiting & anti-spam
- File validation & secure uploads
- Input sanitization
- Content moderation pipeline

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- OpenAI API key
- Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/Evian1k/campushub.git
cd campushub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
campushub/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   ├── lib/              # Utilities and helpers
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand state management
│   ├── types/            # TypeScript definitions
│   └── styles/           # Global styles
├── public/               # Static assets
├── supabase/             # Database migrations & RLS policies
├── .env.example          # Environment variables template
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS config
└── tsconfig.json         # TypeScript config
```

## 🔐 Security

- Strong RLS policies on all tables
- Rate limiting on API routes
- File type validation
- XSS & CSRF protection
- Secure password hashing
- JWT token management
- Abuse detection & reporting

## ⚡ Performance

- Mobile-first optimization
- Image optimization with Next.js
- Lazy loading & virtualization
- Efficient database indexing
- Cursor pagination
- Offline support with Service Workers
- Battery-efficient code

## 📊 Database Schema

### Core Tables
- `users` - User profiles
- `posts` - Social feed posts
- `comments` - Nested comments
- `notes` - Academic notes
- `marketplace_items` - Product listings
- `messages` - Chat messages
- `hustles` - Job listings
- `events` - Campus events
- `notifications` - User notifications

## 🚢 Deployment

Optimized for:
- Vercel (recommended for Next.js)
- AWS
- Google Cloud
- Self-hosted

## 📝 License

MIT License - See LICENSE file for details

## 👥 Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Built with ❤️ for students, by students.**
