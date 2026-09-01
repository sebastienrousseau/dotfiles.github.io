#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0 OR MIT
# Semantic Version: v0.0.1
# WCAG 2.2 Level AAA Mathematical Contrast Ratio Validator
import sys

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip("#")
    if len(hex_str) == 3:
        hex_str = "".join([c*2 for c in hex_str])
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

def relative_luminance(rgb):
    def channel_lum(val):
        s = val / 255.0
        return s / 12.92 if s <= 0.03928 else ((s + 0.055) / 1.055) ** 2.4
    r, g, b = rgb
    return 0.2126 * channel_lum(r) + 0.7152 * channel_lum(g) + 0.0722 * channel_lum(b)

def contrast_ratio(hex1, hex2):
    l1 = relative_luminance(hex_to_rgb(hex1))
    l2 = relative_luminance(hex_to_rgb(hex2))
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

tokens = [
    ("Light Mode Body Text", "#0f172a", "#ffffff", 7.0),
    ("Light Mode Headings", "#020617", "#ffffff", 4.5),
    ("Light Mode Links", "#1e40af", "#ffffff", 7.0),
    ("Light Mode Focus Ring", "#1d4ed8", "#f1f5f9", 3.0),
    ("Dark Mode Body Text", "#f8fafc", "#090d16", 7.0),
    ("Dark Mode Headings", "#ffffff", "#090d16", 4.5),
    ("Dark Mode Links", "#93c5fd", "#090d16", 7.0),
    ("Dark Mode Focus Ring", "#60a5fa", "#0f172a", 3.0),
]

all_pass = True
print("=== WCAG 2.2 Level AAA Color Contrast Audit ===")
for name, fg, bg, threshold in tokens:
    ratio = contrast_ratio(fg, bg)
    status = "PASS" if ratio >= threshold else "FAIL"
    print(f"[{status}] {name:25s} | FG:{fg} BG:{bg} | Ratio:{ratio:5.2f}:1 (Target: >={threshold}:1)")
    if ratio < threshold:
        all_pass = False

sys.exit(0 if all_pass else 1)
