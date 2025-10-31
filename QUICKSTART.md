# Quick Start - Deploy to GitHub & Vercel

Follow these steps to get your app live in 5 minutes! 🚀

## Step 1: Create GitHub Repository (2 minutes)

### Option A: GitHub Website (Easiest)

1. **Go to GitHub:**
   - Open https://github.com/new
   - Sign in if needed

2. **Create Repository:**
   - Repository name: `bbq-math-react`
   - Description: "Responsive React app for calculating perfect BBQ orders"
   - Choose: **Public** (for free hosting)
   - **IMPORTANT:** Do NOT check any boxes (no README, .gitignore, or license)
   - Click **"Create repository"**

3. **Push Your Code:**
   
   Copy and run these commands in your terminal:
   
   ```bash
   cd "/Users/wes/Desktop/BBQ Math React"
   
   git remote add origin https://github.com/YOUR_USERNAME/bbq-math-react.git
   git branch -M main
   git push -u origin main
   ```
   
   ⚠️ **Replace `YOUR_USERNAME` with your actual GitHub username!**

### Option B: GitHub CLI (If authenticated)

```bash
cd "/Users/wes/Desktop/BBQ Math React"
gh repo create bbq-math-react --public --source=. --remote=origin --push
```

If not authenticated, run: `gh auth login`

## Step 2: Deploy to Vercel (2 minutes)

### Easy Way: Vercel Website

1. **Go to Vercel:**
   - Open https://vercel.com
   - Click **"Sign Up"** or **"Login"**
   - Sign in with **GitHub**

2. **Import Your Project:**
   - Click **"Add New..."** → **"Project"**
   - Select your `bbq-math-react` repository
   - Click **"Import"**

3. **Deploy:**
   - Vercel auto-detects everything! ✨
   - Just click **"Deploy"**
   - Wait ~2 minutes...

4. **🎉 DONE!**
   - Your app is live!
   - Get URL like: `https://bbq-math-react.vercel.app`

### Alternative: Vercel CLI

```bash
cd "/Users/wes/Desktop/BBQ Math React"
vercel
# Follow prompts
vercel --prod  # for production
```

## Step 3: Share Your App! 

Your app is now:
- ✅ On GitHub at: `https://github.com/YOUR_USERNAME/bbq-math-react`
- ✅ Live on Vercel at: `https://bbq-math-react.vercel.app`
- ✅ Auto-deploys on every push to `main`

## What Happens Next?

**Automatic Deployments:**
- Push to GitHub → Automatic deploy to Vercel
- Create a PR → Get a preview URL
- Deploy is live in seconds!

**Free Forever:**
- GitHub: Free public repos
- Vercel: Free hosting for hobby projects
- Custom domain: Add your own anytime

## Troubleshooting

**"Repository not found":**
- Double-check the GitHub username
- Make sure repo name is exactly: `bbq-math-react`

**"Permission denied":**
- Authenticate with GitHub: `gh auth login`
- Or use SSH instead of HTTPS

**Vercel build fails:**
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally

## Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Vercel docs: https://vercel.com/docs
- GitHub docs: https://docs.github.com

---

**Ready? Let's deploy! Follow Step 1 above.** 🚀

