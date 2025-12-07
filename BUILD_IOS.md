# 📱 Building Scripture Cards for iPhone

This guide will help you compile and install Scripture Cards on your iPhone.

## Prerequisites

1. **macOS** (required for iOS development)
2. **Xcode** (free from App Store)
3. **Apple ID** (free - for personal device testing)

---

## Step 1: Install Xcode

1. Open the **App Store** on your Mac
2. Search for **"Xcode"**
3. Click **Get** / **Install** (it's free, ~12GB download)
4. Wait for installation to complete
5. Open Xcode once and accept the license agreement

### After Xcode Installation

Open Terminal and run:
```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

Install CocoaPods (if not installed):
```bash
sudo gem install cocoapods
```

---

## Step 2: Build the iOS App

Navigate to the project folder and run:

```bash
cd /Users/jmay/local/learn/prac/duo

# Sync web files to iOS project
npx cap sync ios

# Open in Xcode
npx cap open ios
```

---

## Step 3: Configure Xcode for Your iPhone

1. In Xcode, click on **"App"** in the left sidebar (the project)
2. Click the **"Signing & Capabilities"** tab
3. Check **"Automatically manage signing"**
4. Select your **Team** (your Apple ID)
   - If no team appears, click "Add Account" and sign in with your Apple ID

### First Time Setup
- Xcode will create a free development certificate
- This allows testing on your personal devices for 7 days

---

## Step 4: Connect Your iPhone

1. Connect your iPhone to your Mac with a USB cable
2. On your iPhone, tap **"Trust"** when prompted
3. In Xcode, select your iPhone from the device dropdown (top toolbar)

---

## Step 5: Build & Install

1. Click the **▶ Play button** in Xcode (or press ⌘R)
2. Wait for the build to complete
3. The app will be installed on your iPhone!

### First Time on Device
On your iPhone:
1. Go to **Settings → General → VPN & Device Management**
2. Tap your Apple ID / Developer certificate
3. Tap **"Trust"**
4. Now you can open the app!

---

## 🎉 Done!

The app is now installed on your iPhone. It will work for **7 days** with a free Apple ID.

### To Refresh (After 7 Days)
Just rebuild and reinstall from Xcode.

### For Permanent Installation
You need an Apple Developer account ($99/year) or distribute via TestFlight.

---

## Troubleshooting

### "No signing certificate found"
- Add your Apple ID in Xcode → Settings → Accounts

### "Could not find Developer Disk Image"
- Your iOS version might be newer than your Xcode
- Update Xcode to the latest version

### "App installation failed - iPhone is busy"
- Wait a moment and try again
- Make sure iPhone screen is unlocked

### "untrusted developer"
- Follow Step 5's "First Time on Device" instructions

---

## Alternative: Cloud Build Services

If you don't want to install Xcode, you can use cloud services:

### Codemagic (Free tier available)
1. Push code to GitHub
2. Connect to [codemagic.io](https://codemagic.io)
3. Build in the cloud
4. Download .ipa file

### Expo EAS Build
1. Convert project to Expo
2. Use `eas build --platform ios`
3. Requires Apple Developer account

---

## Project Structure

```
duo/
├── ios/                    # ← Xcode project (open this)
│   └── App/
│       └── App/
│           └── public/     # Web files copied here
├── www/                    # Web files for iOS
├── capacitor.config.json   # Capacitor config
└── package.json            # Node dependencies
```

---

*"Thy word have I hid in mine heart, that I might not sin against thee."* — Psalm 119:11 📖

