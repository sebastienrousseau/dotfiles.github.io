#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0 OR MIT
# Semantic Version: v0.0.1
# Pre-compress static assets using Gzip, Brotli, and Zstandard
set -euo pipefail

TARGET_DIR="${1:-public}"

if [ ! -d "${TARGET_DIR}" ]; then
  if [ -d "docs" ]; then
    TARGET_DIR="docs"
  else
    echo "Directory ${TARGET_DIR} not found. Skipping asset pre-compression."
    exit 0
  fi
fi

echo "=== Pre-compressing static assets in ${TARGET_DIR} ==="

# Compress matching web artifacts
find "${TARGET_DIR}" -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.svg" -o -name "*.json" -o -name "*.xml" -o -name "*.txt" \) | while read -r file; do
  # 1. Gzip (-9 best compression)
  gzip -9 -c "${file}" > "${file}.gz"
  
  # 2. Brotli (-q 11 maximum quality) if available
  if command -v brotli &>/dev/null; then
    brotli -q 11 -f -k "${file}"
  fi
  
  # 3. Zstandard (-19 high compression) if available
  if command -v zstd &>/dev/null; then
    zstd -19 -q -f -k "${file}" -o "${file}.zst"
  fi
done

echo "Asset pre-compression completed successfully."
