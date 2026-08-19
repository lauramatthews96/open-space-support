"""Key a flat background colour out of a logo image, preserving anti-aliased edges."""

import sys

from PIL import Image


def make_transparent(src, dst, tol_low=28.0, tol_high=70.0):
    img = Image.open(src).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Sample the corners to work out the background colour.
    corners = [
        pixels[0, 0],
        pixels[width - 1, 0],
        pixels[0, height - 1],
        pixels[width - 1, height - 1],
    ]
    bg_r = sum(c[0] for c in corners) / 4
    bg_g = sum(c[1] for c in corners) / 4
    bg_b = sum(c[2] for c in corners) / 4

    span = tol_high - tol_low

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            dist = ((r - bg_r) ** 2 + (g - bg_g) ** 2 + (b - bg_b) ** 2) ** 0.5

            if dist <= tol_low:
                alpha = 0
            elif dist >= tol_high:
                alpha = a
            else:
                alpha = int(a * (dist - tol_low) / span)

            pixels[x, y] = (r, g, b, alpha)

    img.save(dst, "PNG", optimize=True)
    print(f"{dst}: background rgb({bg_r:.0f}, {bg_g:.0f}, {bg_b:.0f}) removed")


if __name__ == "__main__":
    make_transparent(sys.argv[1], sys.argv[2])
