---
title: Bí Danh Default | Dotfiles
description: Bí danh shell hàng ngày chính. Tổng quan cho Dotfiles v0.2.495. Tương thích với macOS, Linux và WSL qua Dotfiles.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Bí Danh Default | Dotfiles preview
canonical: /vi/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Bí danh Default
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/default/
---

# Bí Danh Default

Bí danh shell hàng ngày chính.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh thường dùng.
Đọc trang này trước để hiểu quy ước đặt tên, đầu vào mong đợi và mẫu thực thi an toàn.
Sau đó mở phụ lục tham khảo để xem toàn bộ danh sách lệnh và cú pháp chính xác.
Các bí danh này giảm việc gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi Nào Sử Dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần mẫu lệnh dự đoán được.

## Bao Gồm

- Bí danh: 17
- Hàm hỗ trợ: 2
- Tệp nguồn: 1

## Ví Dụ Nhanh

- `clearasl` → `clear_asl_logs`
- `ctf` → `echo $(ls -1 | wc -l)`
- `da` → `date "+%Y-%m-%d %A %T %Z"`
- `halt` → `sudo shutdown -h now`
- `history` → `'fc -il 1' # Hiện lịch sử với dấu thời gian ISO 8601 (zsh)`
- `ipinfo` → `ip -br addr`
- `ping` → `ping -c 5`
- `poweroff` → `sudo shutdown -h now`
- `q` → `quit`
- `qfind` → `find . -name `
- `quit` → `exit`

## Bước Tiếp Theo

Mở danh sách đầy đủ:

