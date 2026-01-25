---
description: Bash, Zsh, Git, SSH 및 서버 구성 파일을 단일 명령으로 여는 셸 별칭.
lang: ko-KR
metaTitle: 구성 별칭 - Dotfiles (KR)
permalink: /alias/configuration/
sidebar: true

meta:
  - name: keywords
    content: configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: 구성 별칭 - Dotfiles
  - name: twitter:description
    content: Bash, Zsh, Git, SSH 및 서버 구성 파일을 단일 명령으로 여는 셸 별칭.
  - name: og:title
    content: 구성 별칭 - Dotfiles
  - name: og:description
    content: Bash, Zsh, Git, SSH 및 서버 구성 파일을 단일 명령으로 여는 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 구성 별칭

단일 명령으로 기본 편집기에서 구성 파일을 엽니다.

## 개요

구성 별칭은 자주 편집하는 구성 파일을 여는 단축키를 제공합니다. 이 별칭은 `configuration.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

각 별칭은 해당 파일을 시스템의 기본 텍스트 편집기에서 실행하여 파일 경로를 기억하거나 긴 명령을 입력할 필요가 없습니다.

## 참조

### 셸 구성

| 별칭 | 설명 |
|:---|:---|
| `bshrc` | Bash 구성 파일 열기 (~/.bashrc) |
| `bshp` | Bash 프로필 열기 (~/.bash_profile) |
| `zshrc` | Zsh 구성 파일 열기 (~/.zshrc) |
| `zshp` | Zsh 프로필 열기 (~/.zprofile) |

### 버전 관리

| 별칭 | 설명 |
|:---|:---|
| `gcfg` | Git 구성 파일 열기 (~/.gitconfig) |
| `gign` | Git ignore 파일 열기 (~/.gitignore) |

### 네트워크 및 서버

| 별칭 | 설명 |
|:---|:---|
| `apconf` | Apache 구성 파일 열기 |
| `ngconf` | Nginx 구성 파일 열기 |
| `sshconf` | SSH 구성 파일 열기 (~/.ssh/config) |
| `hosts` | hosts 파일 열기 (/etc/hosts) |

### 개발 도구

| 별칭 | 설명 |
|:---|:---|
| `dockcomp` | Docker Compose 파일 열기 |
| `eddir` | 기본 편집기에서 현재 디렉토리 열기 |
