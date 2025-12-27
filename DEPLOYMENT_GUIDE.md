# Portfolio Deployment Guide

Your portfolio is ready to deploy! Follow these steps:

## 🚀 Quick Deploy to Vercel (Recommended - FREE)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)

2. **Sign Up/Login**: Use your GitHub account to sign in

3. **Import Project**:
   - Click "Add New" → "Project"
   - Click "Import Git Repository"
   - Authorize Vercel to access your GitHub

4. **Create GitHub Repository First**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it: `portfolio` or `arjun-portfolio`
   - Keep it Public (for free deployment)
   - DON'T initialize with README

5. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

6. **Import to Vercel**:
   - Select your `portfolio` repository
   - Click "Import"
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

7. **Done!** Your site will be live at: `https://your-portfolio.vercel.app`

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Answer questions about your project
   - Your site will be deployed!

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## 🌐 Alternative: Deploy to Netlify

1. **Go to Netlify**: Visit [netlify.com](https://netlify.com)

2. **Sign Up/Login**: Use your GitHub account

3. **Add New Site**:
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your portfolio repository

4. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

---

## 🔧 Before Deploying - Checklist

✅ Git repository initialized (DONE)
✅ All files committed (DONE)
✅ Resume PDF in public folder (DONE)
✅ GitHub links updated (DONE)
✅ Personal information updated (DONE)

---

## 📝 Post-Deployment Steps

1. **Custom Domain** (Optional):
   - In Vercel/Netlify dashboard → Settings → Domains
   - Add your custom domain (e.g., arjunmudaliyar.com)
   - Update DNS settings as instructed

2. **Update Links**:
   - Update your LinkedIn with portfolio URL
   - Add to your resume
   - Share with recruiters!

3. **Monitor**:
   - Vercel provides analytics
   - Check deployment logs if issues occur

---

## 🔄 Future Updates

To update your deployed site:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel/Netlify will auto-deploy the changes!
```

---

## 🆘 Troubleshooting

**Build fails?**
- Check terminal for errors
- Run `npm run build` locally first
- Ensure all dependencies are in package.json

**Site not updating?**
- Clear Vercel/Netlify cache
- Trigger manual redeploy
- Check deployment logs

**Resume not loading?**
- Ensure `resume.pdf` is in `/public` folder
- Check file name is exact: `resume.pdf`
- Commit and push the file

---

## 📧 Your Portfolio Info

- **Name**: Arjun Ramasamy Mudaliyar
- **GitHub**: github.com/arjunmudaliyar99-design
- **Email**: arjunmudaliyar99@gmail.com
- **LinkedIn**: linkedin.com/in/arjun-ramasamy-mudaliyar

---

**Ready to Deploy? Start with Vercel - it's the easiest!** 🚀
