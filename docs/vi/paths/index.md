---
title: Đường Dẫn | Dotfiles
description: Tổng quan thứ tự ưu tiên PATH và các mục từ Dotfiles v0.2.495. Tương thích với macOS, Linux và WSL qua Dotfiles.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Đường Dẫn | Dotfiles preview
canonical: /vi/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Đường dẫn
pageType: docs
schemaType: WebPage
permalink: /vi/paths/
---

# Đường Dẫn

Dotfiles thiết lập thứ tự PATH trong một template và thêm các mục theo thứ tự ưu tiên.

## Thứ Tự Ưu Tiên

1. Bắt đầu với đường dẫn hệ thống.
2. Thêm đường dẫn runtime và trình quản lý gói phía trước.
3. Thêm đường dẫn người dùng cục bộ cuối cùng để có ưu tiên cao nhất.
4. Loại bỏ trùng lặp trong khi giữ kết quả khớp đầu tiên.

## Các Mục Được Khai Báo

- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${BUN_INSTALL}/bin"`
- `"${HOME}/.node_modules/bin"`
- `"${HOME}/.luarocks/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/.local/share/mise/shims"`
- `"${HOME}/bin"`
