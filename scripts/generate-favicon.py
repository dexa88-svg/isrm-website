#!/usr/bin/env python3
"""
Generate the full favicon/icon set for ismr.online.

Outputs to public/:
  favicon.ico            (16x16 + 32x32 + 48x48 multi-size)
  favicon.svg            (SVG – written separately, not by this script)
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png   (180x180)
  icon-192.png
  icon-512.png
  og-image.png           (1200x630 social card)
"""

from PIL import Image, ImageDraw
import math
import os

# ── Brand colours ─────────────────────────────────────────────────────────────
BG      = (26, 35, 50)        # #1a2332
ORANGE  = (255, 107, 53)      # #ff6b35
TEAL    = (0, 168, 204)       # #00a8cc
WHITE   = (245, 245, 245)     # #f5f5f5
DARK    = (15, 20, 25)        # #0f1419

PUBLIC = os.path.join(os.path.dirname(__file__), "..", "public")


# ── Drawing helpers ────────────────────────────────────────────────────────────

def draw_rounded_rect(draw, bbox, radius, fill):
    """Draw a rounded rectangle."""
    draw.rounded_rectangle(bbox, radius=radius, fill=fill)


def draw_wheel(draw, cx, cy, s, *, n_spokes=5):
    """Draw the scooter wheel icon at scale s (canvas dimension)."""
    rim_r      = s * 0.38
    rim_stroke = max(2, int(s * 0.070))
    rim_inner  = s * 0.295
    rim_thin   = max(1, int(s * 0.018))
    spoke_w    = max(1, int(s * 0.030))
    hub_r      = s * 0.105
    dot_r      = s * 0.038

    # Outer tyre ring
    draw.ellipse(
        [cx - rim_r, cy - rim_r, cx + rim_r, cy + rim_r],
        outline=ORANGE, width=rim_stroke
    )

    # Inner rim line
    draw.ellipse(
        [cx - rim_inner, cy - rim_inner, cx + rim_inner, cy + rim_inner],
        outline=ORANGE, width=rim_thin
    )

    # Spokes (evenly spaced, starting from top)
    for i in range(n_spokes):
        angle = math.radians(i * 360 / n_spokes - 90)
        cos_a, sin_a = math.cos(angle), math.sin(angle)
        x1 = cx + hub_r  * cos_a
        y1 = cy + hub_r  * sin_a
        x2 = cx + rim_inner * cos_a
        y2 = cy + rim_inner * sin_a
        draw.line([(x1, y1), (x2, y2)],
                  fill=ORANGE, width=spoke_w)

    # Hub (teal filled circle)
    draw.ellipse(
        [cx - hub_r, cy - hub_r, cx + hub_r, cy + hub_r],
        fill=TEAL
    )

    # Centre bolt dot
    draw.ellipse(
        [cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r],
        fill=BG
    )


def create_icon(size, *, n_spokes=5):
    """Return a square RGBA icon at `size` px, drawn 4× oversampled."""
    scale = 4
    s = size * scale
    cx = cy = s // 2

    img  = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background
    draw_rounded_rect(draw, [0, 0, s - 1, s - 1],
                      radius=s // (5 if size >= 180 else 6),
                      fill=BG)

    draw_wheel(draw, cx, cy, s, n_spokes=n_spokes)

    return img.resize((size, size), Image.LANCZOS)


def create_og_image():
    """1200×630 social-card banner."""
    W, H = 1200, 630
    img  = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Full background (no rounding for og-image)
    draw.rectangle([0, 0, W, H], fill=DARK)

    # Subtle gradient stripe (lighter band across middle)
    for y in range(H):
        alpha = max(0, 30 - abs(y - H // 2) // 5)
        draw.line([(0, y), (W, y)], fill=(*BG, alpha))

    # Large wheel on the right side
    wheel_size = 4
    ws = H * 0.72
    wx = int(W * 0.78)
    wy = H // 2
    draw_wheel(draw, wx, wy, ws * wheel_size, n_spokes=5)
    # Downscale the wheel portion would be complex; instead draw directly at H scale
    # Redo: draw wheel at actual pixel size
    img2  = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw2 = ImageDraw.Draw(img2)
    draw2.rectangle([0, 0, W, H], fill=DARK)
    draw_wheel(draw2, wx, wy, int(H * 0.72), n_spokes=5)

    # Small wheel logo top-left
    logo_s = 90
    draw_wheel(draw2, logo_s, logo_s, logo_s * 1.6, n_spokes=5)

    # Text: ISMR (large)
    # Without truetype font, draw block-letter proxy using rectangles
    # Instead just save; real text needs font loading which is optional
    img2 = img2.convert("RGB")
    return img2


# ── Main ───────────────────────────────────────────────────────────────────────

sizes = [16, 32, 48, 180, 192, 512]

icons = {}
for sz in sizes:
    icons[sz] = create_icon(sz)
    print(f"  generated {sz}×{sz}")

# favicon.ico  (multi-size: 16, 32, 48)
# Pillow resizes from the source image, so pass the 48px icon as base.
ico_path = os.path.join(PUBLIC, "favicon.ico")
icons[48].save(ico_path,
               format="ICO",
               sizes=[(16, 16), (32, 32), (48, 48)])
print(f"  wrote {ico_path}")

# Individual PNGs
for name, sz in [
    ("favicon-16x16.png",    16),
    ("favicon-32x32.png",    32),
    ("apple-touch-icon.png", 180),
    ("icon-192.png",         192),
    ("icon-512.png",         512),
]:
    path = os.path.join(PUBLIC, name)
    icons[sz].convert("RGB").save(path, format="PNG", optimize=True)
    print(f"  wrote {path}")

# og-image
og = create_og_image()
og_path = os.path.join(PUBLIC, "og-image.jpg")
og.save(og_path, format="JPEG", quality=90)
print(f"  wrote {og_path}")

print("\nDone.")
