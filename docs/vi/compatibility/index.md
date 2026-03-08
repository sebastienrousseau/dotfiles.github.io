---
title: Ma Trận Tương Thích Đa Nền Tảng | Dotfiles
description: Hỗ trợ nền tảng đã kiểm tra cho shell, công cụ, terminal và danh mục bí danh trong Dotfiles v0.2.495.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Ma Trận Tương Thích Đa Nền Tảng preview
canonical: /vi/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tương thích
pageType: docs
schemaType: TechArticle
permalink: /vi/compatibility/
---

# Ma Trận Tương Thích Đa Nền Tảng

Trang này ghi nhận hỗ trợ nền tảng đã kiểm tra cho Dotfiles v0.2.495 trên macOS, Linux và WSL2.

## Chú Giải Huy Hiệu

| Huy hiệu | Ý nghĩa |
|-----------|----------|
| ✅ | Đã kiểm tra đầy đủ và được hỗ trợ |
| ⚠️ | Hỗ trợ một phần — xem ghi chú |
| ❌ | Không được hỗ trợ |
| — | Không áp dụng |

## Môi Trường Shell

| Thành phần | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Ghi chú |
|------------|:---:|:---:|:---:|---------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS cần Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Mặc định trên macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Hỗ trợ bí danh hạn chế |
| PowerShell | — | — | ⚠️ | Chỉ tương tác WSL |

## Công Cụ Lõi Hiện Đại

| Công cụ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Cài đặt |
|---------|:---:|:---:|:---:|---------|
| Atuin (lịch sử) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (fuzzy) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (quản lý tệp) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (mux) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## Trình Giả Lập Terminal

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Ghi chú |
|----------|:---:|:---:|:---:|---------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland gốc trên Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Tăng tốc GPU |
| WezTerm | ✅ | ✅ | ✅ | Cấu hình Lua |
| iTerm2 | ✅ | — | — | Chỉ macOS |
| Windows Terminal | — | — | ✅ | Host WSL |

## Trình Quản Lý Gói

| Trình quản lý | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Ghi chú |
|----------------|:---:|:---:|:---:|---------|
| Homebrew | ✅ | ✅ | ✅ | Chính cho macOS |
| apt | — | ✅ | ✅ | Gói hệ thống |
| Cargo | ✅ | ✅ | ✅ | Công cụ Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Công cụ Node |
| pip / pipx | ✅ | ✅ | ✅ | Công cụ Python |

## Bảo Mật & Ký

| Tính năng | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Ghi chú |
|-----------|:---:|:---:|:---:|---------|
| Ký commit SSH | ✅ | ✅ | ✅ | Gốc, không cần GPG |
| Mã hóa age | ✅ | ✅ | ✅ | Tích hợp Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age hoặc GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL cần bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Danh Mục Bí Danh

| Danh mục | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Ghi chú |
|----------|:---:|:---:|:---:|---------|
| AI | ✅ | ✅ | ✅ | Cần API key |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Cần Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Hạn chế trên headless |
| gcloud | ✅ | ✅ | ✅ | Cần SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS cần coreutils |
| Go | ✅ | ✅ | ✅ | Cần Go |
| Heroku | ✅ | ✅ | ✅ | Cần CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Cần kubectl |
| Lua | ✅ | ✅ | ✅ | Cần Lua |
| macOS | ✅ | — | — | Chỉ macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Thay thế Rust |
| npm | ✅ | ✅ | ✅ | Cần Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Cần pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Cần Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Cần Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Cần svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Cần Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Cần Yarn |

## Liên Quan

- [Giới thiệu](/vi/about/)
- [Bí danh](/vi/aliases/)
- [Thực hành quản lý bí mật tốt nhất](/vi/guides/secret-management/)
