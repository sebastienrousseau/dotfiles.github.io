---
title: Bí Danh Dig | Dotfiles
description: Lệnh truy vấn DNS rút gọn. Tổng quan cho Dotfiles v0.2.495.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Bí Danh Dig | Dotfiles preview
canonical: /vi/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Bí danh Dig
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/dig/
---

# Bí Danh Dig

Lệnh truy vấn DNS rút gọn.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh thường dùng.
Đọc trang này trước để hiểu quy ước đặt tên, đầu vào mong đợi và mẫu thực thi an toàn.
Sau đó mở phụ lục tham khảo để xem toàn bộ danh sách lệnh và cú pháp chính xác.
Các bí danh này giảm việc gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi Nào Sử Dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần mẫu lệnh dự đoán được.

## Bao Gồm

- Bí danh: 10
- Hàm hỗ trợ: 0
- Tệp nguồn: 1

## Ví Dụ Nhanh

- `d` → `dig`
- `d4` → `dig +short -4`
- `d6` → `dig +short -6`
- `dga` → `dig +all ANY`
- `dgs` → `dig +short`
- `digg` → `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` → `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` → `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` → `ip4; ip6`
- `wip` → `dig +short myip.opendns.com @resolver1.opendns.com`

## Bước Tiếp Theo

Mở danh sách đầy đủ:

