# GitHub Hosting Setup Guide

Follow these steps to host your Galaxy Web Dev website on GitHub Pages.

## Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up.

## Step 2: Create a New Repository

### Option A: User/Organization Site (Recommended for Portfolio)
1. Go to github.com and click **New** to create a repository
2. Name it: `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
3. Make it **Public**
4. Click **Create repository**

### Option B: Project Repository
1. Go to github.com and click **New**
2. Name it: `galaxy-web-dev` (or any name you prefer)
3. Make it **Public**
4. Click **Create repository**

## Step 3: Install Git
Download and install Git from [git-scm.com](https://git-scm.com)

## Step 4: Set Up Your Local Repository

Open Command Prompt (Windows) or Terminal (Mac/Linux) and run these commands:

```bash
# Navigate to your project folder
cd c:\xampp\htdocs\galaxy-web-dev

# Initialize git repository
git init

# Configure git (use your GitHub email and name)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Galaxy Web Dev website"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin main
```

## Step 5: Enable GitHub Pages

### For `username.github.io` Repository:
1. Your site is **automatically live** at `https://username.github.io`
2. Changes pushed to `main` branch deploy automatically

### For Project Repository:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Your site will be live at `https://username.github.io/galaxy-web-dev`

Wait 1-5 minutes for GitHub to build and deploy your site.

## Step 6: Verify Your Site

Visit your GitHub Pages URL to see your live website:
- User site: `https://username.github.io`
- Project site: `https://username.github.io/repository-name`

## Making Updates

After you've set up everything, to push new changes:

```bash
# Make changes to your files

# Stage changes
git add .

# Commit with a message
git commit -m "Update website content"

# Push to GitHub
git push
```

Your changes will be live within seconds!

## Custom Domain (Optional)

To use your own domain instead of github.io:

1. Get a domain from [Namecheap](https://www.namecheap.com) or [GoDaddy](https://www.godaddy.com)
2. Go to GitHub Settings → Pages
3. Under "Custom domain", enter your domain
4. Update your domain's DNS records to point to GitHub Pages

## Troubleshooting

### Site not showing up?
- Make sure repository is **Public**
- Wait 5 minutes for initial build
- Check Settings → Pages to see build status
- Look for email from GitHub if there's a build error

### Only seeing 404?
- Make sure you have `index.html` in the root folder
- For project repos, check that root folder is selected in Settings

### Changes not updating?
- Wait a minute for GitHub to rebuild
- Clear your browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

## Need Help?

- GitHub Pages Help: https://docs.github.com/en/pages
- Git Tutorial: https://git-scm.com/book/en/v2
- Contact support through GitHub

---

**Your Galaxy Web Dev website is now live on GitHub! 🚀**
