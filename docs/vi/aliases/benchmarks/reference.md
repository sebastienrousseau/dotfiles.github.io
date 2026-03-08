---
title: Phụ lục tham chiếu Benchmarks | Dotfiles
description: Tham chiếu đầy đủ bí danh và hàm hỗ trợ cho Benchmarks trong Dotfiles v0.2.495. Bao gồm mọi phím tắt, ví dụ sử dụng và hàm shell cho macOS, Linux và WSL.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Phụ lục tham chiếu Benchmarks | Dotfiles preview
canonical: /vi/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/benchmarks/reference/
---

# Phụ lục tham chiếu Benchmarks

## Tệp nguồn

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Tham chiếu bí danh

| Bí danh | Lệnh |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Xác thực

- Chạy `chezmoi apply` sau khi cập nhật bí danh.
- Chạy `dot doctor` để xác thực trạng thái shell.
