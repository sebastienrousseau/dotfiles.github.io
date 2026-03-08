---
title: Giới Thiệu Dotfiles | Dotfiles
description: Khám phá tổng quan kỹ thuật về Dotfiles v0.2.495. Tương thích với macOS, Linux và WSL qua Dotfiles.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Giới Thiệu Dotfiles | Dotfiles preview
canonical: /vi/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Giới thiệu
pageType: docs
schemaType: WebPage
permalink: /vi/about/
---

# Giới Thiệu Dotfiles

Dotfiles v0.2.495 là cấu hình shell đa nền tảng được quản lý bởi Chezmoi.

## Cài Đặt

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## Xác Minh

```bash
dot doctor
```

## Các Lệnh Cốt Lõi

- `dot apply` áp dụng các thay đổi cấu hình.
- `dot update` cập nhật repo và làm ấm cache.
- `dot doctor` kiểm tra đường dẫn, công cụ và tình trạng shell.
- `dot heal` sửa chữa trạng thái bị thiếu hoặc hỏng.
- `dot smoke-test` kiểm tra các chuỗi công cụ cốt lõi.

## Liên Quan

- [Bí danh](/vi/aliases/)
- [Hàm](/vi/functions/)
- [Đường dẫn](/vi/paths/)
