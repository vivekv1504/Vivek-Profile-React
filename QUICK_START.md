# 🚀 Quick Start Guide

Get your React portfolio running in 5 minutes!

## Step 1: Navigate to the React Portfolio

```bash
cd react-portfolio
```

## Step 2: Start the Development Server

The dependencies are already installed! Just run:

```bash
npm run dev
```

You should see:
```
  VITE v6.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Step 3: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

🎉 **Your portfolio is now running!**

---

## 🎨 Try These Features Right Away

### 1. Toggle Dark Mode
- Click the moon/sun icon in the top-right corner
- Your preference is automatically saved

### 2. Navigate Between Sections
- Click any link in the navigation bar
- Experience smooth scrolling

### 3. Open Mobile Menu
- Resize your browser to mobile size
- Click the hamburger menu icon

### 4. Test Animations
- Scroll down the page
- Watch sections animate into view
- Hover over project cards

### 5. Try the Contact Form
- Scroll to the contact section
- Try submitting without filling fields
- See validation in action

---

## ✏️ Make Your First Edit

Let's change your name in the hero section!

1. Open `src/components/Hero.jsx` in your editor

2. Find this line (around line 32):
```jsx
const fullText = 'Vivekananda';
```

3. Change it to whatever you want:
```jsx
const fullText = 'Your Name Here';
```

4. Save the file

5. Watch it update automatically in the browser! 🎉

---

## 📝 Next Steps

### Essential Updates

1. **Add Your Resume**
   ```bash
   # Create the folder
   mkdir -p public/resumes
   
   # Copy your resume there
   cp ~/path/to/your/resume.pdf public/resumes/VIVEKANANDA_RESUME.pdf
   ```

2. **Update Your GitHub Link**
   - Open `src/components/Footer.jsx`
   - Replace `YOUR_GITHUB_ID` with your username

3. **Update Contact Email**
   - Open `src/components/Contact.jsx`
   - Replace `vinthavivek19@gmail.com` with your email

### Customize Content

Edit these files to update your info:

- `src/components/Hero.jsx` - About you
- `src/components/Education.jsx` - Your education
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Certifications.jsx` - Your certifications

All changes appear instantly while `npm run dev` is running!

---

## 🌐 Ready to Deploy?

When you're happy with your portfolio:

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Easiest)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repo
5. Click "Deploy"
6. Done! ✨

---

## 🆘 Need Help?

- **Detailed Guide**: See `MIGRATION_GUIDE.md`
- **Feature List**: See `FEATURES.md`
- **Full Documentation**: See `README.md`

---

## 💡 Pro Tips

1. **Keep Dev Server Running** while editing - changes appear instantly!
2. **Check Browser Console** (F12) if something doesn't work
3. **Test Mobile View** using Chrome DevTools (Ctrl+Shift+M)
4. **Commit Often** to Git as you make changes

---

## 🎯 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop the dev server
# Press Ctrl + C in the terminal
```

---

**That's it! You're ready to build an amazing portfolio! 🚀**

Any questions? Check the other documentation files or the browser console for help.

Happy coding! 😊

