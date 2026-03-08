---
title: Bí Danh Interactive | Dotfiles
description: Lệnh shell tương tác rút gọn. Tổng quan cho Dotfiles v0.2.495.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Bí Danh Interactive | Dotfiles preview
canonical: /vi/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Bí danh Interactive
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/interactive/
---

# Bí Danh Interactive

Lệnh shell tương tác rút gọn.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh thường dùng.
Đọc trang này trước để hiểu quy ước đặt tên, đầu vào mong đợi và mẫu thực thi an toàn.
Sau đó mở phụ lục tham khảo để xem toàn bộ danh sách lệnh và cú pháp chính xác.
Các bí danh này giảm việc gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi Nào Sử Dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần mẫu lệnh dự đoán được.

## Bao Gồm

- Bí danh: 8
- Hàm hỗ trợ: 0
- Tệp nguồn: 1

## Ví Dụ Nhanh

- `bin` → `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash`
- `cp` → `cp -vi`
- `del` → `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi`
- `diff` → `diff -u`
- `ln` → `ln -vi`
- `mkdir` → `mkdir -pv`
- `mv` → `mv -vi`
- `rm` → `rm -vi`

## Bước Tiếp Theo

Mở danh sách đầy đủ:

