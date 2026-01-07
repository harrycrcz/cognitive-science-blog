# CogniScience Blog

A modern blogging platform built with Next.js, featuring real-time interactive comments powered by Firebase. Designed to demonstrate advanced Next.js patterns including Server Components, static generation, and dynamic routing.

## 🌐 Live Demo

**[View Live](https://your-blog.vercel.app)** ← Update with your Vercel URL

## ✨ Features

- **Server-Side Rendering (SSR)** - Optimized for SEO with static generation at build time
- **Dynamic Blog Posts** - Support for markdown-like formatting with proper heading hierarchy
- **Real-Time Comments** - Interactive comment system with author names and timestamps
- **Like System** - Users can like comments with persistent count updates
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Firebase Integration** - Cloud-based Firestore database for comments
- **Modern Architecture** - Next.js App Router with Server and Client Components

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Static typing (optional, not used in this version)

### Backend

- **Firebase Firestore** - NoSQL cloud database
- **Next.js API Routes** - Serverless functions for API endpoints

### Tools & Infrastructure

- **Git** - Version control
- **Vercel** - Hosting and deployment
- **Node.js** - Runtime environment

## 📋 Project Structure

```
blog-cognitiva/
├── app/
│   ├── layout.js              # Root layout with metadata
│   ├── page.js                # Home page with navigation
│   ├── globals.css            # Global styles and Tailwind
│   ├── about/
│   │   └── page.js            # About page
│   ├── blog/
│   │   ├── page.js            # Blog listing page
│   │   └── [slug]/
│   │       └── page.js        # Individual post page with comments
│   └── api/
│       └── comments/
│           ├── route.js       # GET/POST comments endpoints
│           └── [commentId]/
│               └── like/
│                   └── route.js  # POST endpoint for likes
├── components/
│   ├── CommentForm.js         # Comment input form (Client)
│   └── CommentsSection.js     # Comments display & logic (Client)
├── data/
│   └── posts.js               # Blog posts content
├── lib/
│   └── db.js                  # Firebase configuration
├── public/                    # Static assets
├── .env.local                 # Environment variables (not in git)
├── .gitignore
├── package.json
├── next.config.js
└── tailwind.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account (free tier works)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/blog-cognitiva.git
   cd blog-cognitiva
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Create a Firestore database
   - Create a collection named `comments`
   - Go to Project Settings and copy your config

4. **Configure environment variables**

   Create `.env.local` in the project root:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run development server**

   ```bash
   npm run dev
   ```

6. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Key Concepts Demonstrated

### Server Components vs Client Components

- **Blog pages** (`app/blog/page.js`, `app/blog/[slug]/page.js`) are Server Components

  - Pre-rendered at build time with `generateStaticParams()`
  - Optimal for performance and SEO
  - Cannot use React hooks

- **Comment features** (`CommentsSection.js`, `CommentForm.js`) are Client Components
  - Use `"use client"` directive
  - Can use React hooks (useState, useEffect)
  - Handle interactive features like form submission

### Static Generation with Dynamic Routes

```javascript
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
```

This generates all blog post pages at build time, making them blazingly fast in production.

### API Routes

RESTful API endpoints handle:

- `GET /api/comments?postSlug=xxx` - Fetch comments for a post
- `POST /api/comments` - Create new comment
- `POST /api/comments/[id]/like` - Increment comment likes

## 🧪 Features in Detail

### Comments System

1. **Fetch Comments**

   - Loads all comments for a post on component mount
   - Sorted by newest first
   - Displays author name and creation date

2. **Add Comment**

   - Form validation (min 5 chars for comment, min 2 for name)
   - Backend validation on API
   - Returns created comment immediately
   - Form clears on successful submission

3. **Like Comments**

   - Click heart icon to like
   - Counter updates in real-time
   - Persists to database

4. **Error Handling**
   - User-friendly error messages
   - Try/catch blocks on all API calls
   - Graceful fallbacks if Firebase is down

## 🔐 Security Considerations

- API keys are prefixed with `NEXT_PUBLIC_` (safe for frontend)
- Backend validation on all API endpoints
- Firestore runs in "test mode" for development
- Production should implement proper authentication

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Breakpoints: sm, md, lg, xl
- Touch-friendly button sizes
- Readable text sizes on all screens

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "feat: complete blog project"
   git push
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **View your site**
   - Vercel provides a live URL
   - Your blog is now online!

## 📊 What I Learned Building This

- **Next.js App Router** - Modern way to build React apps with file-based routing
- **Server vs Client Components** - When and why to use each
- **Static Site Generation** - Pre-rendering pages for performance
- **Firebase Firestore** - Cloud database with real-time capabilities
- **API Routes** - Building serverless backend functions
- **Tailwind CSS** - Rapid UI development with utility classes
- **Component Architecture** - Building reusable, modular components
- **Error Handling** - Proper error states and user feedback
- **Git & GitHub** - Version control and collaboration

## 🔮 Future Enhancements

- [ ] User authentication for comments
- [ ] Comment editing and deletion
- [ ] Comment threads/nested replies
- [ ] Rich text editor (Markdown or WYSIWYG)
- [ ] Search functionality
- [ ] Comment moderation system
- [ ] Dark mode toggle
- [ ] Analytics dashboard

## 📖 Resources Used

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Firestore Docs](https://firebase.google.com/docs/firestore)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 💡 Challenges & Solutions

### Challenge 1: Pre-rendering dynamic routes

**Solution:** Used `generateStaticParams()` to generate all post pages at build time.

### Challenge 2: Real-time comment updates

**Solution:** Fetched comments on component mount and updated local state after new comments.

### Challenge 3: Timestamp conversion from Firebase

**Solution:** Used `.toDate().toISOString()` to convert Firestore timestamps to readable dates.

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Questions?

Feel free to reach out or open an issue on GitHub.

---

**Built by:** Renato 'Harry' Cristaldo.
**Last Updated:** January 2025  
**Status:** Active Development
