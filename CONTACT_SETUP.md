# 📧 Contact Form Setup Instructions

## Overview
Your portfolio now has a beautiful, functional contact form that sends emails directly to your inbox using Gmail!

## 🚀 Quick Start

### Step 1: Configure Email Credentials

1. Open the `.env.local` file in your project root
2. You'll see:
   ```env
   EMAIL_USER=arjunmudaliyar99@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password-here
   ```

### Step 2: Generate Gmail App Password

**Important:** You CANNOT use your regular Gmail password. You need an "App Password".

#### Follow these steps:

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/

2. **Enable 2-Step Verification** (if not already enabled)
   - Click "Security" in the left sidebar
   - Scroll to "How you sign in to Google"
   - Click "2-Step Verification"
   - Follow the setup wizard

3. **Generate App Password**
   - After enabling 2-Step Verification, go back to "Security"
   - Scroll to "How you sign in to Google"
   - Click "App passwords" (you might need to search for it)
   - Select **"Mail"** for the app dropdown
   - Select **"Other"** for the device and name it "Portfolio Contact Form"
   - Click **"Generate"**
   - You'll see a 16-character password like: `xxxx xxxx xxxx xxxx`

4. **Copy and Paste**
   - Copy the 16-character password (remove spaces)
   - Paste it in your `.env.local` file:
     ```env
     EMAIL_PASSWORD=xxxxxxxxxxxxxxxx
     ```

5. **Save the file**

### Step 3: Start Your Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` and scroll to the Contact section!

## ✨ Features

### What You Get:

1. **Beautiful UI** 🎨
   - Space-themed design matching your portfolio
   - Smooth animations with Framer Motion
   - Responsive on all devices
   - Purple/cyan gradient styling

2. **Form Validation** ✅
   - Required fields check
   - Email format validation
   - Phone number validation
   - Real-time error messages

3. **Email Functionality** 📬
   - Visitor fills the form
   - You receive a formatted email with all details
   - Visitor receives an auto-reply thank you email
   - Professional HTML email templates

4. **User Experience** 🚀
   - Loading state while sending
   - Success/error messages
   - Form clears after successful submission
   - Smooth scroll to contact section

## 📁 Files Created/Modified

### New Files:
- `components/main/contact.tsx` - Contact form component
- `app/api/contact/route.ts` - API endpoint for email sending
- `.env.local` - Environment variables (KEEP SECRET!)
- `CONTACT_SETUP.md` - This file

### Modified Files:
- `app/page.tsx` - Added Contact component
- `constants/index.ts` - Added Contact navigation link

## 🔒 Security Notes

⚠️ **IMPORTANT:**

1. **NEVER** share your App Password
2. **NEVER** commit `.env.local` to Git (it's already in `.gitignore`)
3. If exposed, revoke immediately at: https://myaccount.google.com/apppasswords
4. Keep your `.env.local` file private

## 🎯 How It Works

```
User fills form → Submit → 
  ↓
Next.js API Route (app/api/contact/route.ts) →
  ↓
Nodemailer sends 2 emails:
  1. To you (with contact details)
  2. To visitor (auto-reply thank you)
  ↓
Success message shown
```

## 📧 Email Details

### You Receive:
- **Subject:** "Portfolio Contact: New Message from [Name]"
- **Contains:**
  - Visitor's name
  - Visitor's email (clickable)
  - Visitor's phone (clickable)
  - Their message
  - Timestamp

### Visitor Receives:
- **Subject:** "Thanks for reaching out! - Arjun Ramaswamy Mudaliyar"
- **Contains:**
  - Thank you message
  - Copy of their message
  - Your contact info
  - Professional branding

## 🐛 Troubleshooting

### "Email service is not configured" error:
- Make sure `.env.local` file exists
- Check that EMAIL_USER and EMAIL_PASSWORD are set
- Restart your dev server after changing `.env.local`

### Emails not sending:
- Verify App Password is correct (16 characters, no spaces)
- Check 2-Step Verification is enabled
- Make sure you're using App Password, not regular password
- Check console for errors

### Form validation issues:
- Email must be valid format
- Phone must contain only numbers, +, -, (), spaces
- All fields are required

## 🎨 Customization

### Change Colors:
Edit `components/main/contact.tsx`:
- Search for gradient colors: `from-purple-500 to-cyan-500`
- Change to your preferred colors

### Change Email Template:
Edit `app/api/contact/route.ts`:
- Modify the HTML in `mailOptionsToYou` and `mailOptionsToSender`

### Add More Fields:
1. Add input in `components/main/contact.tsx`
2. Add to FormData interface
3. Add to API route validation

## 📱 Testing

1. Fill out the form with test data
2. Submit
3. Check your email (arjunmudaliyar99@gmail.com)
4. Check the visitor's email for auto-reply

## 🚀 Deployment

When deploying (Vercel/Netlify):

1. Add environment variables in your hosting platform:
   - `EMAIL_USER` = arjunmudaliyar99@gmail.com
   - `EMAIL_PASSWORD` = your-app-password

2. **Vercel:**
   - Project Settings → Environment Variables
   - Add both variables

3. **Netlify:**
   - Site Settings → Environment → Environment Variables
   - Add both variables

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Verify all steps are completed
3. Check browser console for errors
4. Check terminal for server errors

## 🎉 You're All Set!

Your contact form is ready to use! Visitors can now easily reach out to you, and you'll receive professional email notifications.

**Remember:** Keep your `.env.local` file secret and never commit it to Git!

---

**Made with ❤️ for your portfolio**
