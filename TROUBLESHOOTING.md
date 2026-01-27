# 🔧 Troubleshooting Blank Page

## Problem: Browser shows blank page at http://localhost:5173

## ✅ Quick Fix Steps:

### 1. **Hard Refresh Your Browser**
- **Mac**: `Cmd + Shift + R`
- **Windows/Linux**: `Ctrl + Shift + R`
- **Alternative**: `Ctrl + F5`

### 2. **Clear Browser Cache**
1. Press `F12` to open Developer Tools
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### 3. **Open in Incognito/Private Window**
- **Chrome**: `Cmd/Ctrl + Shift + N`
- **Firefox**: `Cmd/Ctrl + Shift + P`
- Then go to: `http://localhost:5173`

### 4. **Check Browser Console for Errors**
1. Press `F12` to open Developer Tools
2. Click the **"Console"** tab
3. Look for RED error messages
4. Common errors to look for:
   - "Failed to fetch module"
   - "Unexpected token"
   - "Cannot find module"
   - Any React errors

### 5. **Verify Server is Running**
In your terminal, you should see:
```
VITE v7.2.4  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

If you don't see this, restart the server:
```bash
cd /Users/vinvivek/vivek-profile/react-portfolio
npm run dev
```

### 6. **Check for Multiple Servers**
Stop all servers and start fresh:
```bash
# Stop all
pkill -f vite

# Wait 2 seconds
sleep 2

# Start fresh
cd /Users/vinvivek/vivek-profile/react-portfolio
npm run dev
```

### 7. **Test in Different Browser**
Try opening in a different browser:
- Chrome
- Firefox
- Safari
- Edge

## 🔍 Advanced Debugging:

### Check What's Being Served:
```bash
curl http://localhost:5173 | head -30
```

You should see HTML with `<div id="root"></div>`

### Check for Port Conflicts:
```bash
lsof -i:5173
```

### Rebuild the Project:
```bash
cd /Users/vinvivek/vivek-profile/react-portfolio
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📸 What You SHOULD See:

When working correctly, you'll see:
1. ✨ Gradient progress bar at top
2. 🎨 Dark header with navigation
3. 🌓 Moon/Sun icon (dark mode toggle)
4. 👤 Hero section with typing animation
5. 📷 Your profile photo
6. All your content sections

## ❌ Common Issues:

| Issue | Solution |
|-------|----------|
| **Black/blank page** | Hard refresh (Cmd+Shift+R) |
| **Old content showing** | Clear cache completely |
| **"Cannot GET /"** | Server not running, restart it |
| **Port already in use** | Kill the process on that port |
| **Console errors** | Check browser console (F12) |

## 🆘 Still Not Working?

1. Take a screenshot of:
   - The browser window
   - The browser console (F12 → Console tab)
   - Your terminal with server output

2. Check if these files exist:
   ```bash
   ls -la /Users/vinvivek/vivek-profile/react-portfolio/src/
   ```

3. Make sure you're in the correct directory:
   ```bash
   pwd
   # Should show: /Users/vinvivek/vivek-profile/react-portfolio
   ```

## ✅ Final Checklist:

- [ ] Server is running (see "ready" message in terminal)
- [ ] Using correct URL: `http://localhost:5173` (not 5174, 5179, etc.)
- [ ] Browser cache cleared
- [ ] Hard refresh done (Cmd/Ctrl+Shift+R)
- [ ] Checked browser console for errors
- [ ] Tried incognito/private window

---

**Still having issues? The server IS working - it's likely a browser cache problem!**

