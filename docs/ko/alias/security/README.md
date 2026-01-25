---
description: 파일 불변성 및 구성 보호를 위한 Security 별칭. 중요한 셸 파일을 잠그고 잠금 해제합니다.
lang: ko-KR
metaTitle: Security 별칭 - Dotfiles (KR)
permalink: /alias/security/
sidebar: true

meta:
  - name: keywords
    content: security, immutability, file lock, shell aliases, dotfiles, configuration protection
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 파일 불변성 및 구성 보호를 위한 Security 별칭.
  - name: twitter:title
    content: Security 별칭 - Dotfiles
  - name: og:title
    content: Security 별칭 - Dotfiles
  - name: og:description
    content: 파일 불변성 및 구성 보호를 위한 Security 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Security 별칭

불변성 제어로 중요한 구성 파일을 보호합니다.

## 개요

이 별칭은 `security.aliases.sh`에 정의되어 있으며 Chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 불변성

| 별칭 | 설명 |
|:---|:---|
| `lock-configs` | 수정 방지를 위해 중요 파일 잠금 |
| `unlock-configs` | 편집을 위해 중요 파일 잠금 해제 |
| `check-locks` | 중요 파일의 잠금 상태 확인 |
