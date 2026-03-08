---
title: Bí Danh Chmod | Dotfiles
description: Lệnh quyền truy cập rút gọn. Tổng quan cho Dotfiles v0.2.495. Tương thích với macOS, Linux và WSL qua Dotfiles.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Bí Danh Chmod | Dotfiles preview
canonical: /vi/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Bí danh Chmod
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/chmod/
---

# Bí Danh Chmod

Lệnh quyền truy cập rút gọn.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh thường dùng.
Đọc trang này trước để hiểu quy ước đặt tên, đầu vào mong đợi và mẫu thực thi an toàn.
Sau đó mở phụ lục tham khảo để xem toàn bộ danh sách lệnh và cú pháp chính xác.
Các bí danh này giảm việc gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi Nào Sử Dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần mẫu lệnh dự đoán được.

## Bao Gồm

- Bí danh: 17
- Hàm hỗ trợ: 0
- Tệp nguồn: 1

## Ví Dụ Nhanh

- `chmod_000` → `change_permission 000`
- `chmod_1755` → `'change_permission 1755' # Sticky bit + 755`
- `chmod_2755` → `'change_permission 2755' # Setgid + 755`
- `chmod_400` → `'change_permission 400' # Chỉ đọc cho chủ sở hữu`
- `chmod_444` → `'change_permission 444' # Chỉ đọc cho tất cả`
- `chmod_4755` → `'change_permission 4755' # Setuid + 755`
- `chmod_600` → `'change_permission 600' # Đọc/ghi cho chủ sở hữu`
- `chmod_644` → `'change_permission 644' # Đọc/ghi chủ sở hữu, đọc cho người khác`
- `chmod_664` → `'change_permission 664' # Đọc/ghi chủ sở hữu và nhóm, đọc cho người khác`
- `chmod_666` → `'change_permission 666' # Đọc/ghi cho tất cả`
- `chmod_700` → `'change_permission 700' # Toàn quyền chỉ chủ sở hữu`
- `chmod_744` → `'change_permission 744' # Toàn quyền chủ sở hữu, đọc cho người khác`

## Bước Tiếp Theo

Mở danh sách đầy đủ:

