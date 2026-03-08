---
title: Thực Hành Quản Lý Bí Mật Tốt Nhất | Dotfiles
description: Cách quản lý bí mật, API key và thông tin xác thực an toàn trong dotfiles sử dụng age, SOPS và 1Password CLI.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Thực Hành Quản Lý Bí Mật Tốt Nhất preview
canonical: /vi/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Quản lý bí mật
pageType: article
schemaType: TechArticle
permalink: /vi/guides/secret-management/
---

# Thực Hành Quản Lý Bí Mật Tốt Nhất

Giữ bí mật ngoài kho dotfiles. Hướng dẫn này bao gồm ba phương pháp đã kiểm tra để quản lý thông tin xác thực an toàn với Chezmoi.

## Tại Sao Điều Này Quan Trọng

Kho dotfiles thường là công khai. Một API key, token hoặc mật khẩu duy nhất bị commit có thể dẫn đến:

- **Xâm phạm tài khoản** trong vài phút sau khi push.
- **Lạm dụng thanh toán đám mây** từ thông tin cloud bị lộ.
- **Tấn công chuỗi cung ứng** khi CI token bị lộ.

## Nguyên Tắc Vàng

1. **Không bao giờ lưu bí mật dạng văn bản thuần trong quản lý phiên bản.**
2. **Mã hóa khi lưu trữ** — sử dụng age, SOPS hoặc trình quản lý bí mật.
3. **Xác minh trước mỗi commit** — tự động hóa bằng hook pre-commit.

## Phương Pháp 1: Chezmoi + age (Khuyến Nghị)

age là công cụ mã hóa tệp đơn giản, hiện đại. Chezmoi có tích hợp gốc.

### Thiết Lập

```bash
# Cài đặt age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Tạo cặp khóa
age-keygen -o ~/.config/chezmoi/key.txt

# Cấu hình Chezmoi sử dụng khóa
chezmoi edit-config
```

Thêm vào `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Mã Hóa Tệp

```bash
# Thêm tệp bí mật dạng mã hóa
chezmoi add --encrypt ~/.config/gh/hosts.yml

# Tệp được lưu mã hóa trong thư mục nguồn
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Bí Mật Trong Template

```bash
# Sử dụng template Chezmoi cho bí mật inline
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Phương Pháp 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) mã hóa các khóa cụ thể trong tệp YAML/JSON, giữ cấu trúc hiển thị.

### Thiết Lập

```bash
# Cài đặt SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Tạo cấu hình SOPS
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Mã Hóa

```bash
# Tạo tệp bí mật
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Mã hóa bằng SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Sử Dụng Trong Template

Thêm vào `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Phương Pháp 3: 1Password CLI

1Password CLI (`op`) lấy bí mật tại thời điểm áp dụng mà không lưu cục bộ.

### Thiết Lập

```bash
# Cài đặt 1Password CLI
brew install --cask 1password-cli   # macOS

# Đăng nhập
op signin
```

### Sử Dụng Trong Template Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Ưu Điểm

- Bí mật không bao giờ chạm đĩa dạng không mã hóa.
- Chia sẻ nhóm qua kho 1Password.
- Hỗ trợ xoay vòng tự động.

## Lưới An Toàn Pre-commit

### git-secrets

```bash
# Cài đặt
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Cấu hình cho repo
git secrets --install
git secrets --register-aws

# Thêm mẫu tùy chỉnh
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Luôn loại trừ đường dẫn nhạy cảm:

```text
# Bí mật - không bao giờ commit
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Ngăn Chezmoi quản lý tệp nhạy cảm:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Danh Sách Kiểm Tra

- [ ] Không có bí mật dạng thuần trong trạng thái nguồn: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Khóa age **không** được commit: `git ls-files | grep key.txt` trả về rỗng
- [ ] Hook git-secrets đang hoạt động: `git secrets --scan`
- [ ] `.gitignore` bao gồm `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` thành công không có cảnh báo
- [ ] Tệp mã hóa SOPS giải mã đúng: `sops --decrypt chezmoi-data.yaml`

## Đã Kiểm Tra Trên

| Nền tảng | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Liên Quan

- [Giới thiệu](/vi/about/)
- [Ma trận tương thích](/vi/compatibility/)
- [Bí danh bảo mật](/vi/aliases/security/)
