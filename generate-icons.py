#!/usr/bin/env python3
"""
Generate PNG icons from SVG for Scripture Cards PWA.
Uses cairosvg if available, otherwise creates simple colored icons.
"""

import os
import struct
import zlib

ICONS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'icons')
SIZES = [16, 32, 72, 96, 128, 144, 152, 167, 180, 192, 384, 512]

# Colors
BROWN = (139, 94, 60)      # #8B5E3C
CREAM = (253, 246, 227)    # #FDF6E3
SAND = (212, 165, 116)     # #D4A574
TERRACOTTA = (193, 127, 89) # #C17F59

def create_png(width, height, pixels):
    """Create a PNG file from pixel data."""
    def write_chunk(chunk_type, data):
        chunk = chunk_type + data
        return struct.pack('>I', len(data)) + chunk + struct.pack('>I', zlib.crc32(chunk) & 0xffffffff)
    
    # PNG signature
    signature = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr = write_chunk(b'IHDR', ihdr_data)
    
    # IDAT chunk (image data)
    raw_data = b''
    for y in range(height):
        raw_data += b'\x00'  # Filter type (none)
        for x in range(width):
            r, g, b = pixels[y * width + x]
            raw_data += bytes([r, g, b])
    
    compressed = zlib.compress(raw_data, 9)
    idat = write_chunk(b'IDAT', compressed)
    
    # IEND chunk
    iend = write_chunk(b'IEND', b'')
    
    return signature + ihdr + idat + iend

def draw_circle(pixels, width, cx, cy, radius, color):
    """Draw a filled circle."""
    for y in range(max(0, int(cy - radius)), min(width, int(cy + radius + 1))):
        for x in range(max(0, int(cx - radius)), min(width, int(cx + radius + 1))):
            dx, dy = x - cx, y - cy
            if dx*dx + dy*dy <= radius*radius:
                pixels[y * width + x] = color

def draw_rect(pixels, width, height, x1, y1, x2, y2, color):
    """Draw a filled rectangle."""
    for y in range(max(0, int(y1)), min(height, int(y2))):
        for x in range(max(0, int(x1)), min(width, int(x2))):
            pixels[y * width + x] = color

def generate_icon(size):
    """Generate a single icon."""
    scale = size / 512
    pixels = [CREAM] * (size * size)  # Start with cream background
    
    # Background circle (brown)
    draw_circle(pixels, size, size/2, size/2, size/2, BROWN)
    
    # Inner cream circle
    draw_circle(pixels, size, size/2, size/2, size/2 * 0.86, CREAM)
    
    # Book background (sand color)
    book_x1 = int(140 * scale)
    book_y1 = int(100 * scale)
    book_x2 = int(372 * scale)
    book_y2 = int(412 * scale)
    draw_rect(pixels, size, size, book_x1, book_y1, book_x2, book_y2, SAND)
    
    # Book inner (cream)
    inner_x1 = int(152 * scale)
    inner_y1 = int(112 * scale)
    inner_x2 = int(360 * scale)
    inner_y2 = int(400 * scale)
    draw_rect(pixels, size, size, inner_x1, inner_y1, inner_x2, inner_y2, CREAM)
    
    # Cross vertical (brown)
    cross_v_x1 = int(244 * scale)
    cross_v_y1 = int(150 * scale)
    cross_v_x2 = int(268 * scale)
    cross_v_y2 = int(350 * scale)
    draw_rect(pixels, size, size, cross_v_x1, cross_v_y1, cross_v_x2, cross_v_y2, BROWN)
    
    # Cross horizontal (brown)
    cross_h_x1 = int(194 * scale)
    cross_h_y1 = int(200 * scale)
    cross_h_x2 = int(318 * scale)
    cross_h_y2 = int(224 * scale)
    draw_rect(pixels, size, size, cross_h_x1, cross_h_y1, cross_h_x2, cross_h_y2, BROWN)
    
    # Book spine (terracotta)
    spine_x1 = int(140 * scale)
    spine_y1 = int(100 * scale)
    spine_x2 = int(156 * scale)
    spine_y2 = int(412 * scale)
    draw_rect(pixels, size, size, spine_x1, spine_y1, spine_x2, spine_y2, TERRACOTTA)
    
    # Small decorative circle at bottom
    draw_circle(pixels, size, 256 * scale, 380 * scale, 8 * scale, BROWN)
    
    return create_png(size, size, pixels)

def main():
    # Create icons directory if it doesn't exist
    os.makedirs(ICONS_DIR, exist_ok=True)
    
    print("Generating icons...")
    
    for size in SIZES:
        filename = os.path.join(ICONS_DIR, f'icon-{size}.png')
        png_data = generate_icon(size)
        
        with open(filename, 'wb') as f:
            f.write(png_data)
        
        print(f"Created: icon-{size}.png")
    
    print("\nAll icons generated successfully!")
    print(f"Icons saved to: {ICONS_DIR}")

if __name__ == '__main__':
    main()

