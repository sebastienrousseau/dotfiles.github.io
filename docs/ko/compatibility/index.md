---
title: 크로스 플랫폼 호환성 매트릭스 | Dotfiles
description: Dotfiles v0.2.495의 셸, 도구, 터미널 및 별칭 카테고리에 대한 테스트된 플랫폼 지원.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 크로스 플랫폼 호환성 매트릭스 preview
canonical: /ko/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 호환성
pageType: docs
schemaType: TechArticle
permalink: /ko/compatibility/
---

# 크로스 플랫폼 호환성 매트릭스

이 페이지는 macOS, Linux, WSL2에서 Dotfiles v0.2.495의 테스트된 플랫폼 지원을 문서화합니다.

## 배지 범례

| 배지 | 의미 |
|-------|---------|
| ✅ | 완전히 테스트되고 지원됨 |
| ⚠️ | 부분 지원 — 참고 사항 확인 |
| ❌ | 지원되지 않음 |
| — | 해당 없음 |

## 셸 환경

| 구성 요소 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 참고 |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS는 Homebrew Bash 필요 |
| Zsh 5.9+ | ✅ | ✅ | ✅ | macOS 기본값 |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | 제한된 별칭 지원 |
| PowerShell | — | — | ⚠️ | WSL 상호 운용만 |

## 모던 코어 도구

| 도구 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 설치 |
|------|:---:|:---:|:---:|---------|
| Atuin (history) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (fuzzy) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (file mgr) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (mux) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## 터미널 에뮬레이터

| 터미널 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 참고 |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Linux에서 네이티브 Wayland |
| Alacritty | ✅ | ✅ | ⚠️ | GPU 가속 |
| WezTerm | ✅ | ✅ | ✅ | Lua 구성 |
| iTerm2 | ✅ | — | — | macOS 전용 |
| Windows Terminal | — | — | ✅ | WSL 호스트 |

## 패키지 관리자

| 관리자 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 참고 |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | macOS 기본 |
| apt | — | ✅ | ✅ | 시스템 패키지 |
| Cargo | ✅ | ✅ | ✅ | Rust 도구 |
| npm / pnpm | ✅ | ✅ | ✅ | Node 도구 |
| pip / pipx | ✅ | ✅ | ✅ | Python 도구 |

## 보안 및 서명

| 기능 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 참고 |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | 네이티브, GPG 불필요 |
| age encryption | ✅ | ✅ | ✅ | Chezmoi 통합 |
| SOPS | ✅ | ✅ | ✅ | age 또는 GPG 백엔드 |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL에 브리지 필요 |
| git-secrets | ✅ | ✅ | ✅ | 프리커밋 훅 |

## 별칭 카테고리

| 카테고리 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 참고 |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | API 키 필요 |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Docker 필요 |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | 헤드리스에서 제한 |
| gcloud | ✅ | ✅ | ✅ | SDK 필요 |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS에 coreutils 필요 |
| Go | ✅ | ✅ | ✅ | Go 필요 |
| Heroku | ✅ | ✅ | ✅ | CLI 필요 |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | kubectl 필요 |
| Lua | ✅ | ✅ | ✅ | Lua 필요 |
| macOS | ✅ | — | — | macOS 전용 |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust 대체 도구 |
| npm | ✅ | ✅ | ✅ | Node 필요 |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | pnpm 필요 |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Python 필요 |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Rust 필요 |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | svn 필요 |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Terraform 필요 |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Yarn 필요 |

## 관련 페이지

- [소개](/ko/about/)
- [별칭](/ko/aliases/)
- [시크릿 관리 모범 사례](/ko/guides/secret-management/)
