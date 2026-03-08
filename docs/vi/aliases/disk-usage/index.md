---
title: Bí Danh Disk Usage | Dotfiles
description: Lệnh sử dụng đĩa rút gọn. Tổng quan cho Dotfiles v0.2.495.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Bí Danh Disk Usage | Dotfiles preview
canonical: /vi/aliases/disk-usage/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Bí danh Disk Usage
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/disk-usage/
---

# Bí Danh Disk Usage

Lệnh sử dụng đĩa rút gọn.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh thường dùng.
Đọc trang này trước để hiểu quy ước đặt tên, đầu vào mong đợi và mẫu thực thi an toàn.
Sau đó mở phụ lục tham khảo để xem toàn bộ danh sách lệnh và cú pháp chính xác.
Các bí danh này giảm việc gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi Nào Sử Dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần mẫu lệnh dự đoán được.

## Bao Gồm

- Bí danh: 7
- Hàm hỗ trợ: 0
- Tệp nguồn: 1

## Ví Dụ Nhanh

- `du` → `du -h`
- `du1` → `du -hxd 1 | sort -h`
- `ducks` → `du -cks * .* | sort -rn | head -n 10`
- `duh` → `du`
- `dus` → `du -hs *`
- `dusym` → `du * -hsLc`
- `dut` → `dus`

## Bước Tiếp Theo

Mở danh sách đầy đủ:

