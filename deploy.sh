#!/bin/bash

# BBQ Math React - Deployment Script
# This script helps you deploy to GitHub and Vercel

set -e

echo "🔥 BBQ Math React - Deployment Helper"
echo "======================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project directory?"
    exit 1
fi

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "📦 Step 1: Checking Git status..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not a git repository. Run 'git init' first."
    exit 1
fi

UNCOMMITTED=$(git status --porcelain)
if [ -n "$UNCOMMITTED" ]; then
    echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes${NC}"
    echo "Files with changes:"
    git status --short
    echo ""
    read -p "Commit changes now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "Pre-deployment commit"
        echo -e "${GREEN}✅ Changes committed${NC}"
    fi
fi

echo ""
echo "🐙 Step 2: GitHub Repository Setup"
echo "=================================="

REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")

if [ -z "$REMOTE_URL" ]; then
    echo "No GitHub remote found."
    echo ""
    echo "To add GitHub remote manually, run:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/bbq-math-react.git"
    echo ""
    
    # Check if gh CLI is available
    if command -v gh &> /dev/null; then
        echo -e "${GREEN}GitHub CLI detected!${NC}"
        read -p "Create repository on GitHub now with gh CLI? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            if gh auth status &> /dev/null; then
                gh repo create bbq-math-react --public --source=. --remote=origin --push
                echo -e "${GREEN}✅ Repository created and pushed!${NC}"
            else
                echo "Need to authenticate first. Run: gh auth login"
                exit 1
            fi
        else
            echo "Please set up GitHub repository manually (see QUICKSTART.md)"
        fi
    else
        echo "To install GitHub CLI: brew install gh"
        echo ""
        echo "OR create repo manually:"
        echo "1. Go to https://github.com/new"
        echo "2. Create 'bbq-math-react' repository"
        echo "3. Run: git remote add origin https://github.com/YOUR_USERNAME/bbq-math-react.git"
        echo "4. Run: git push -u origin main"
    fi
else
    echo -e "${GREEN}✅ Remote found: $REMOTE_URL${NC}"
fi

echo ""
echo "🚀 Step 3: Vercel Deployment"
echo "============================="

if command -v vercel &> /dev/null; then
    VERCEL_USER=$(vercel whoami 2>/dev/null || echo "")
    if [ -n "$VERCEL_USER" ]; then
        echo -e "${GREEN}✅ Logged in to Vercel as: $VERCEL_USER${NC}"
        echo ""
        read -p "Deploy to Vercel now? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            vercel --prod
            echo -e "${GREEN}✅ Deployed to Vercel!${NC}"
        fi
    else
        echo "Not logged in to Vercel. Run: vercel login"
    fi
else
    echo "Vercel CLI not installed."
    echo "Install with: npm install -g vercel"
    echo ""
    echo "OR deploy via website:"
    echo "1. Go to https://vercel.com"
    echo "2. Import your GitHub repository"
    echo "3. Click Deploy"
fi

echo ""
echo "======================================"
echo -e "${GREEN}✨ Setup Complete!${NC}"
echo ""
echo "Next steps:"
echo "- View your repo: Check GitHub for your repository"
echo "- View your site: Check Vercel dashboard for your URL"
echo "- Auto-deploys: Push to main branch = automatic deploy"
echo ""
echo "Need help? Check QUICKSTART.md or DEPLOYMENT.md"

