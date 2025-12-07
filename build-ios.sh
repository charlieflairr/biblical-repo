#!/bin/bash

# Scripture Cards iOS Build Script
# This script helps build and install the app on your iPhone

echo "📖 Scripture Cards iOS Build Script"
echo "===================================="
echo ""

# Check for Xcode
if ! command -v xcodebuild &> /dev/null; then
    echo "❌ Xcode is not installed or not configured."
    echo ""
    echo "Please install Xcode from the App Store, then run:"
    echo "  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer"
    echo ""
    exit 1
fi

echo "✅ Xcode found"

# Check for CocoaPods
if ! command -v pod &> /dev/null; then
    echo "⚠️  CocoaPods not found. Installing..."
    sudo gem install cocoapods
fi

echo "✅ CocoaPods ready"

# Navigate to project directory
cd "$(dirname "$0")"

# Sync web files
echo ""
echo "📦 Syncing web files to iOS project..."
npx cap sync ios

if [ $? -ne 0 ]; then
    echo "❌ Sync failed. Please check the error above."
    exit 1
fi

echo "✅ Sync complete"

# Open Xcode
echo ""
echo "🚀 Opening Xcode..."
echo ""
echo "Next steps in Xcode:"
echo "  1. Select your iPhone from the device dropdown"
echo "  2. Click the ▶ Play button to build and install"
echo "  3. Trust the developer on your iPhone (Settings → General → VPN & Device Management)"
echo ""

npx cap open ios

echo "Done! Follow the on-screen instructions in Xcode."

