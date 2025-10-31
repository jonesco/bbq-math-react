# Deployment Guide

Quick guide to deploy BBQ Math to GitHub and Vercel.

## Step 1: Push to GitHub

### Option A: Using GitHub CLI (Easiest)

```bash
# Authenticate with GitHub
gh auth login

# Create repository and push
gh repo create bbq-math-react --public --source=. --remote=origin --push
```

### Option B: Manual Steps

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `bbq-math-react`
   - Choose Public or Private
   - DO NOT initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bbq-math-react.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Vercel Website (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your `bbq-math-react` repository
   - Click "Import"

3. **Configure Project:**
   - Vercel auto-detects Vite!
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Framework Preset: Vite (auto-detected)
   - Click "Deploy"

4. **Done!**
   - Your app will be live in ~2 minutes
   - Get a URL like: `https://bbq-math-react.vercel.app`
   - Every push to `main` auto-deploys

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? bbq-math-react
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

## Vercel Configuration

Your app is already optimized! Vercel will use:
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`
- ✅ Development Command: `npm run dev`

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS setup instructions

## Environment Variables (Not Needed)

This app doesn't require any environment variables. Pure client-side React! 🎉

## Continuous Deployment

Every push to your `main` branch triggers:
- ✅ Automatic build
- ✅ Automatic deployment
- ✅ Preview URLs for PRs

## Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# Check for errors
npm run lint
```

### Tailwind Not Working
```bash
# Ensure Tailwind is installed
npm install tailwindcss postcss autoprefixer

# Verify configs exist
ls tailwind.config.js postcss.config.js
```

### Deployment URL Not Loading
- Wait 2-3 minutes after deployment
- Check Vercel dashboard for build logs
- Verify all files are in `dist/` folder

## Next Steps

✅ App is deployed!
- Share your URL: `https://your-app.vercel.app`
- Update README with live link
- Add to portfolio

## Support

- Vercel Docs: https://vercel.com/docs
- Vite Deploy: https://vitejs.dev/guide/static-deploy.html
- GitHub Actions: https://github.com/actions

Happy deploying! 🚀

