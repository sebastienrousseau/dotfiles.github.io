---
title: System Bí danh | Dotfiles
description: Khám phá bí danh System trong Dotfiles v0.2.495. Các lệnh system ngắn gọn và dễ nhớ cho macOS, Linux và WSL.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Bí danh | Dotfiles preview
canonical: /vi/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Bí danh
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/system/
---

# System Bí danh

Các lệnh system ngắn gọn.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh phổ biến. Đọc trang này trước để hiểu quy ước đặt tên, đầu vào dự kiến và các mẫu thực thi an toàn. Sau đó mở phụ lục tham chiếu để xem danh sách lệnh đầy đủ và cú pháp chính xác. Các bí danh này giảm thao tác gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi nào sử dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần các mẫu lệnh có thể dự đoán được.

## Nội dung bao gồm

- Bí danh: 24
- Hàm hỗ trợ: 0
- Tệp nguồn: 1

## Ví dụ nhanh

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Bước tiếp theo

Mở danh sách đầy đủ:

- [Phụ lục tham chiếu System](./reference.md)
