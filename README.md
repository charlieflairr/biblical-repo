# 📖 Scripture Cards

A Duolingo-style Bible verse learning app that works offline on your iPhone!

## 📲 Installing on iPhone

### Method 1: Progressive Web App (Recommended - No App Store needed!)

1. **Host the app** on any web server (or use a service like Netlify, Vercel, or GitHub Pages)

2. **Open Safari on your iPhone** and navigate to your hosted app URL

3. **Tap the Share button** (the square with an arrow pointing up)

4. **Scroll down and tap "Add to Home Screen"**

5. **Name your app** "Scripture Cards" and tap "Add"

6. **Done!** The app icon will appear on your home screen and work offline!

### Method 2: Local Testing

1. Start a local server on your computer:
   ```bash
   cd /Users/jmay/local/learn/prac/duo
   python3 -m http.server 8080
   ```

2. Find your computer's IP address:
   ```bash
   ipconfig getifaddr en0  # Wi-Fi
   ```

3. On your iPhone (same Wi-Fi network), open Safari and go to:
   ```
   http://YOUR_COMPUTER_IP:8080
   ```

4. Follow steps 3-6 from Method 1 above

---

## 🚀 Deploying to the Web

### Option A: Netlify (Free & Easy)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `duo` folder to deploy
3. Get your URL (e.g., `https://your-app.netlify.app`)

### Option B: GitHub Pages (Free)

1. Create a GitHub repository
2. Push this code to the repo
3. Enable GitHub Pages in Settings
4. Access at `https://yourusername.github.io/repo-name`

### Option C: Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your project
3. Deploy with one click

---

## 🍎 Building a Native iOS App (Optional)

If you want a true `.ipa` package for distribution:

### Using Capacitor

1. Install dependencies:
   ```bash
   npm init -y
   npm install @capacitor/core @capacitor/cli @capacitor/ios
   ```

2. Initialize Capacitor:
   ```bash
   npx cap init "Scripture Cards" com.scripturecards.app
   ```

3. Add iOS platform:
   ```bash
   npx cap add ios
   ```

4. Copy web assets:
   ```bash
   npx cap copy ios
   ```

5. Open in Xcode:
   ```bash
   npx cap open ios
   ```

6. Build and run on your device!

**Note:** You'll need:
- macOS with Xcode installed
- Apple Developer account ($99/year) for App Store distribution
- Or use personal team for free testing on your own device

---

## ✨ Features

- 📚 **10 Bible books** with 10 verses each per difficulty level
- 🎯 **3 Difficulty levels**: Beginner, Intermediate, Hard
- 🎤 **Voice recognition** for Hard mode
- 💾 **Offline support** - Works without internet
- 📱 **Standalone app** - No browser bar when installed
- 🔄 **Progress tracking** - Remembers your streaks

---

## 📁 Project Structure

```
duo/
├── index.html          # Main app
├── styles.css          # Styling
├── app.js              # App logic
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline caching
├── mascot.jpg          # Your mascot image
└── icons/
    ├── icon.svg        # Vector icon
    ├── icon-72.png     # Android icon
    ├── icon-152.png    # iPad icon
    ├── icon-180.png    # iPhone icon
    ├── icon-192.png    # Android icon
    └── icon-512.png    # Large icon
```

---

## 🙏 God Bless Your Scripture Journey!

*"Thy word have I hid in mine heart, that I might not sin against thee."* — Psalm 119:11

