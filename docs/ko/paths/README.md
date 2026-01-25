---
description: Dotfiles가 PATH 계층을 관리하여 올바른 도구가 올바른 순서로 로드되도록 하는 방법.
lang: ko-KR
metaTitle: 경로 - Dotfiles (KR)
permalink: /paths/

meta:
  - name: keywords
    content: path, environment, variables, hierarchy, dotfiles, chezmoi, shell, configuration
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles가 PATH 계층을 관리하여 올바른 도구가 올바른 순서로 로드되도록 하는 방법.
  - name: twitter:title
    content: 경로 - Dotfiles
  - name: og:title
    content: 경로 - Dotfiles
  - name: og:description
    content: Dotfiles가 PATH 계층을 관리하여 올바른 도구가 올바른 순서로 로드되도록 하는 방법.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 경로

모듈식 `PATH` 관리. 올바른 도구가 올바른 순서로 로드되도록 합니다.

## 발견하기

경로 구성은 우선순위 기반 파일로 분할됩니다. `chezmoi apply` 중에:

1. 이 디렉토리의 파일이 알파벳순으로 스캔됩니다
2. 내용이 `~/.config/shell/paths.sh`로 집계됩니다
3. 시작 시 `.zshrc`에서 소스됩니다

## 참조

| 스크립트 | 설명 |
|:---|:---|
| `00-default.paths.sh` | 기본 시스템 경로 (`/usr/bin`, `/sbin`) 및 Homebrew. 먼저 로드됩니다. |
| `99-custom.paths.sh` | 사용자 정의 경로 (언어 SDK, 로컬 바이너리). 우선순위를 위해 마지막에 로드됩니다. |

## 시작하기

### 사용자 경로 추가

1. `99-custom.paths.sh`를 편집하거나 새 파일을 생성합니다 (예: `50-myproject.paths.sh`)
2. 경로를 추가합니다:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. 변경 사항을 적용합니다:
   ```bash
   chezmoi apply
   ```
4. 확인합니다:
   ```bash
   echo $PATH
   ```
