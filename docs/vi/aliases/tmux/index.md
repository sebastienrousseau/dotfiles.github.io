---
title: Bí Danh Tmux | Dotfiles
description: Lệnh tmux rút gọn. Tổng quan cho Dotfiles v0.2.495. Tương thích với macOS, Linux và WSL qua Dotfiles.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Bí Danh Tmux | Dotfiles preview
canonical: /vi/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Bí danh Tmux
pageType: docs
schemaType: WebPage
permalink: /vi/aliases/tmux/
---

# Bí Danh Tmux

Lệnh tmux rút gọn.

Trang này giới thiệu một nhóm bí danh và các phím tắt lệnh thường dùng.
Đọc trang này trước để hiểu quy ước đặt tên, đầu vào mong đợi và mẫu thực thi an toàn.
Sau đó mở phụ lục tham khảo để xem toàn bộ danh sách lệnh và cú pháp chính xác.
Các bí danh này giảm việc gõ lặp lại và duy trì hành vi quy trình làm việc nhất quán trên macOS, Linux và WSL.

## Khi Nào Sử Dụng

Sử dụng trang này trước công việc shell hàng ngày khi bạn cần mẫu lệnh dự đoán được.

## Bao Gồm

- Bí danh: 11
- Hàm hỗ trợ: 1
- Tệp nguồn: 1

## Ví Dụ Nhanh

- `tma` → `'tmux attach-session'     # Gắn vào phiên cuối`
- `tmat` → `'tmux attach-session -t' # Gắn vào phiên cụ thể`
- `tmi` → `'tmux info' # Hiện thông tin tmux`
- `tmka` → `'tmux kill-server'     # Hủy tất cả phiên (server)`
- `tmks` → `'tmux kill-session -a' # Hủy tất cả phiên trừ phiên hiện tại`
- `tml` → `'tmux list-sessions'    # Liệt kê tất cả phiên`
- `tmlp` → `'tmux list-panes'   # Liệt kê ngăn`
- `tmls` → `'tmux list-windows' # Liệt kê cửa sổ`
- `tmn` → `'tmux new-session'    # Phiên mới không tên`
- `tmr` → `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # Tải lại cấu hình`
- `tms` → `'tmux new-session -s' # Phiên mới có tên`

## Bước Tiếp Theo

Mở danh sách đầy đủ:

