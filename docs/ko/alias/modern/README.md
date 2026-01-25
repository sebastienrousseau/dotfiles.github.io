---
description: eza, bat, ripgrep을 위한 현대적 셸 별칭. 레거시 Unix 도구를 더 빠른 Rust 기반 대안으로 교체합니다.
lang: ko-KR
metaTitle: Modern Tooling 별칭 - Dotfiles (KR)
permalink: /alias/modern/
sidebar: true

meta:
  - name: keywords
    content: modern aliases, eza, bat, ripgrep, rust cli tools, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: eza, bat, ripgrep을 위한 현대적 셸 별칭. 더 빠른 Rust 기반 대안.
  - name: twitter:title
    content: Modern Tooling 별칭 - Dotfiles
  - name: og:title
    content: Modern Tooling 별칭 - Dotfiles
  - name: og:description
    content: eza, bat, ripgrep을 위한 현대적 셸 별칭. 더 빠른 Rust 기반 대안.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Modern Tooling 별칭

레거시 Unix 명령어를 위한 더 빠르고 스마트한 대체품.

## 개요

`modern.aliases.sh`에 정의된 modern 별칭은 전통적인 Unix 도구의 Rust 기반 대안을 제공합니다. 이 별칭은 chezmoi에 의해 자동으로 로드되며 최신 도구가 없을 때 표준 명령어로 우아하게 폴백합니다.

## 참조

### eza를 사용한 파일 목록

`eza`가 설치된 경우 `ls`를 대체합니다.

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `ls` | `eza --icons` | 아이콘과 함께 파일 목록 |
| `ll` | `eza -alF` | 긴 목록 형식 |
| `la` | `eza -a` | 숨김 파일 포함 모든 파일 목록 |
| `lt` | `eza --tree` | 디렉토리 트리 표시 |

`eza`가 설치되지 않은 경우 표준 `ls`로 폴백합니다.

### bat을 사용한 파일 내용

`bat`이 설치된 경우 `cat`을 대체합니다.

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `cat` | `bat` | 구문 강조와 함께 파일 내용 표시 |

### ripgrep을 사용한 검색

`rg`가 설치된 경우 `grep`을 대체합니다.

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `grep` | `rg` | Ripgrep으로 파일 내용 검색 |
