const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 72, 96, 128, 144, 152, 167, 180, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function drawIcon(ctx, size) {
    const scale = size / 512;
    
    // Background circle
    ctx.fillStyle = '#8B5E3C';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner cream circle
    ctx.fillStyle = '#FDF6E3';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 * 0.86, 0, Math.PI * 2);
    ctx.fill();
    
    // Bible/Book shape
    const bookX = 140 * scale;
    const bookY = 100 * scale;
    const bookW = 232 * scale;
    const bookH = 312 * scale;
    const bookR = 12 * scale;
    
    ctx.fillStyle = '#D4A574';
    roundRect(ctx, bookX, bookY, bookW, bookH, bookR);
    ctx.fill();
    
    // Book inner
    ctx.fillStyle = '#FDF6E3';
    roundRect(ctx, bookX + 12*scale, bookY + 12*scale, bookW - 24*scale, bookH - 24*scale, 8*scale);
    ctx.fill();
    
    // Cross vertical
    ctx.fillStyle = '#8B5E3C';
    roundRect(ctx, 244*scale, 150*scale, 24*scale, 200*scale, 4*scale);
    ctx.fill();
    
    // Cross horizontal
    roundRect(ctx, 194*scale, 200*scale, 124*scale, 24*scale, 4*scale);
    ctx.fill();
    
    // Book spine
    ctx.fillStyle = '#C17F59';
    roundRect(ctx, bookX, bookY, 16*scale, bookH, 4*scale);
    ctx.fill();
    
    // Decorative circle
    ctx.fillStyle = '#8B5E3C';
    ctx.beginPath();
    ctx.arc(256*scale, 380*scale, 8*scale, 0, Math.PI * 2);
    ctx.fill();
}

console.log('Generating icons...');

sizes.forEach(size => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    drawIcon(ctx, size);
    
    const filename = path.join(iconsDir, `icon-${size}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
    console.log(`Created: icon-${size}.png`);
});

console.log('All icons generated successfully!');

