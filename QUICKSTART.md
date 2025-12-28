# 🎯 Quick Start Guide - Contact Form

## ⚡ 3 Simple Steps to Get Started

### 1️⃣ Get Your Gmail App Password

```
1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Search for "App passwords"
4. Create new app password for "Mail" → "Other (Portfolio)"
5. Copy the 16-character password
```

### 2️⃣ Update .env.local File

Open `.env.local` in your project and update:

```env
EMAIL_USER=arjunmudaliyar99@gmail.com
EMAIL_PASSWORD=paste-your-16-char-password-here
```

**Remove all spaces from the password!**

### 3️⃣ Run Your Portfolio

```bash
npm run dev
```

Open `http://localhost:3000` and scroll to the **Contact** section!

---

## ✅ What's Been Added

### 🎨 Beautiful Contact Section
- Space-themed design
- Purple/cyan gradients
- Smooth animations
- Fully responsive

### 📋 Form Fields
- ✅ Name (required)
- ✅ Email (validated)
- ✅ Phone (validated)
- ✅ Message (required)

### 📧 Email Features
- **You receive:** Professional email with all contact details
- **Visitor receives:** Automatic thank you reply
- **Both emails:** Beautifully formatted HTML templates

### 🔗 Navigation
- "Contact" link added to navbar
- Smooth scroll to contact section

---

## 🎉 Try It Out!

1. Start dev server: `npm run dev`
2. Scroll down to Contact section
3. Fill the form with test data
4. Hit "Send Message"
5. Check your email: arjunmudaliyar99@gmail.com

---

## 📁 Files Created

```
components/main/contact.tsx          ← Contact form UI
app/api/contact/route.ts             ← Email sending logic
.env.local                           ← Your email credentials
CONTACT_SETUP.md                     ← Detailed setup guide
QUICKSTART.md                        ← This file
```

---

## 🚨 Remember

- ❌ **DON'T** use your regular Gmail password
- ✅ **DO** use the 16-character App Password
- ❌ **DON'T** commit `.env.local` to Git
- ✅ **DO** restart server after changing `.env.local`

---

## 💡 Need Help?

Check [CONTACT_SETUP.md](./CONTACT_SETUP.md) for:
- Detailed troubleshooting
- Email template customization
- Deployment instructions
- Security best practices

---

**🎊 You're ready to receive messages from visitors!**
