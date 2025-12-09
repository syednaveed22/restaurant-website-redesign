# Safar Kitchen - Restaurant Website

A modern, responsive restaurant website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Deployment to Vercel

### Prerequisites
- Node.js 18+ installed
- Vercel account
- Git repository

### Quick Deploy

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Manual Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production build locally
npm start
```

### Environment Variables

Create a `.env.local` file (if needed):
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔒 Security Features

- ✅ Security headers (CSP, XSS Protection, Frame Options)
- ✅ HTTPS enforcement
- ✅ No sensitive data in code
- ✅ TypeScript strict mode
- ✅ Production optimizations enabled
- ✅ Image optimization enabled
- ✅ Content Security Policy configured

## 📦 Build Configuration

- **Framework**: Next.js 16.0.7
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run type-check

# Lint
npm run lint
```

## 📝 Notes

- All images are optimized automatically
- Security headers are configured in `next.config.mjs`
- The site is fully responsive and mobile-optimized
- No API keys or secrets are hardcoded

## 🌐 Production Checklist

- [x] Security headers configured
- [x] Image optimization enabled
- [x] TypeScript errors resolved
- [x] No console.logs in production code
- [x] Environment variables documented
- [x] Build script tested
- [x] .gitignore configured
- [x] Metadata and SEO optimized

