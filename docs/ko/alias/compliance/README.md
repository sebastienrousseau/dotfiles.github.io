---
description: 터미널 환경에서 규정 준수, 개인정보 보호 적용 및 구성 감사를 위한 셸 별칭.
lang: ko-KR
metaTitle: 규정 준수 별칭 - Dotfiles (KR)
permalink: /alias/compliance/
sidebar: true

meta:
  - name: keywords
    content: compliance aliases, privacy mode, telemetry disable, audit trail, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 터미널 환경에서 규정 준수, 개인정보 보호 적용 및 구성 감사를 위한 셸 별칭.
  - name: twitter:title
    content: 규정 준수 별칭 - Dotfiles
  - name: og:title
    content: 규정 준수 별칭 - Dotfiles
  - name: og:description
    content: 터미널 환경에서 규정 준수, 개인정보 보호 적용 및 구성 감사를 위한 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 규정 준수 별칭

규정 준수 및 개인정보 보호 적용을 위한 셸 도구.

## 개요

규정 준수 별칭은 셸 환경에서 개인정보를 관리하고 감사 추적을 유지하기 위한 필수 제어 기능을 제공합니다. 이 별칭은 일반 CLI 도구의 텔레메트리를 비활성화하고 규정 준수 요구 사항에 대한 구성 변경을 추적하는 데 도움이 됩니다.

## 참조

### 제어

| 별칭 | 설명 |
|:---|:---|
| `privacy-mode` | 현재 세션에서 CLI 도구(Homebrew, Dotnet, Azure 등)의 텔레메트리를 비활성화합니다. |
| `dot-audit` | 최근 구성 감사 추적(Git 히스토리 또는 감사 로그)을 표시합니다. |
