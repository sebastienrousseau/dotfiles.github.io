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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
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

## Lệnh chính

CLI `dot` cung cấp 53 lệnh được tổ chức theo danh mục.

### Lõi

- `dot apply` — áp dụng các thay đổi cấu hình.
- `dot sync` — lấy trạng thái repo mới nhất và áp dụng.
- `dot update` — cập nhật repo và làm ấm bộ nhớ đệm.
- `dot add` — thêm tệp mới vào nguồn Chezmoi.
- `dot diff` — hiển thị các thay đổi đang chờ trước khi áp dụng.
- `dot status` — hiển thị trạng thái tệp được quản lý.
- `dot remove` — hủy quản lý tệp và xóa mục nguồn.
- `dot cd` — mở shell trong thư mục nguồn Chezmoi.
- `dot edit` — mở tệp được quản lý trong trình soạn thảo.
- `dot clean-cache` — xóa bộ nhớ đệm tạm thời.
- `dot prewarm` — nạp trước bộ nhớ đệm để khởi động shell nhanh hơn.

### Chẩn đoán

- `dot doctor` — xác thực đường dẫn, công cụ và trạng thái shell.
- `dot heal` — tự động sửa chữa trạng thái bị thiếu hoặc hỏng.
- `dot health` — chạy kiểm tra sức khỏe nhẹ.
- `dot verify` — kiểm tra tính toàn vẹn tệp so với nguồn.
- `dot scorecard` — in điểm chất lượng cấu hình.
- `dot snapshot` — ghi lại trạng thái hiện tại để so sánh sau.
- `dot smoke-test` — xác thực chuỗi công cụ chính từ đầu đến cuối.
- `dot chaos` — chèn lỗi để kiểm tra tự sửa chữa.
- `dot bundle` — xuất gói cấu hình di động.
- `dot rollback` — quay lại snapshot trước đó.
- `dot drift` — phát hiện thay đổi bất thường trên tệp được quản lý.
- `dot history` — hiển thị nhật ký lịch sử apply/sync.
- `dot benchmark` — đo thời gian khởi động shell.
- `dot perf` — phân tích khởi tạo shell chậm.

### Giao diện

- `dot theme` — chuyển đổi bảng màu terminal.
- `dot wallpaper` — đặt hình nền desktop (macOS).
- `dot fonts` — cài đặt hoặc cập nhật Nerd Fonts.
- `dot tune` — điều chỉnh mật độ giao diện và kiểu prompt.

### Bảo mật

- `dot backup` — tạo bản sao lưu cấu hình được mã hóa.
- `dot encrypt-check` — xác minh mã hóa bí mật khi lưu trữ.
- `dot firewall` — cấu hình quy tắc tường lửa máy chủ.
- `dot telemetry` — kiểm soát telemetry sử dụng ẩn danh.
- `dot dns-doh` — bật DNS-over-HTTPS.
- `dot lock-screen` — khóa màn hình ngay lập tức.
- `dot usb-safety` — hạn chế tự động gắn USB mass-storage.

### Bí mật

- `dot secrets-init` — khởi tạo backend bí mật (age / GPG).
- `dot secrets` — liệt kê các mục bí mật được mã hóa.
- `dot secrets-create` — tạo bí mật được mã hóa mới.
- `dot ssh-key` — tạo hoặc xoay vòng cặp khóa SSH.
- `dot ssh-cert` — yêu cầu chứng chỉ SSH từ CA.

### AI

- `dot ai` — mở phiên trợ lý AI tương tác.
- `dot ai-setup` — cấu hình khóa API cho nhà cung cấp AI.
- `dot ai-query` — gửi prompt một lần đến mô hình AI.
- Wrapper công cụ AI: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Công cụ

- `dot tools` — liệt kê công cụ CLI thay thế đi kèm và trạng thái.
- `dot new` — tạo tệp bí danh hoặc hàm mới.
- `dot sandbox` — mở shell sandbox dùng một lần.
- `dot keys` — hiển thị phím tắt hiện tại.
- `dot learn` — bắt đầu hướng dẫn tương tác.

### Thông tin

- `dot upgrade` — nâng cấp Dotfiles lên bản phát hành mới nhất.
- `dot packages` — liệt kê các gói đã cài đặt do Dotfiles quản lý.
- `dot version` / `dot help` — hiển thị thông tin phiên bản hoặc cách sử dụng
