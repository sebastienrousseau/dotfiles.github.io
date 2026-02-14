---
description: 차세대 셸 구성. 고성능, 보안, AI 네이티브. Chezmoi로 관리됩니다.
lang: ko-KR
metaTitle: Dotfiles 소개 - Dotfiles (KR)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuration, automation, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 차세대 셸 구성. 고성능, 보안, AI 네이티브. Chezmoi로 관리됩니다.
  - name: twitter:title
    content: Dotfiles 소개
  - name: og:title
    content: Dotfiles 소개
  - name: og:description
    content: 차세대 셸 구성. 고성능, 보안, AI 네이티브. Chezmoi로 관리됩니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Dotfiles 소개

셸 구성의 현대적 표준. 안전한 크로스 플랫폼 환경 관리를 위해 **Chezmoi** 기반으로 구축되었습니다.

## 발견하기

Dotfiles v0.2.481는 터미널을 강력하고 통합된 작업 공간으로 변환합니다. 복잡한 Makefile이나 심볼릭 링크 스크립트에 의존하는 레거시 dotfiles와 달리, Dotfiles는 원자적이고 빠르며 재현 가능한 템플릿 기반 접근 방식을 사용합니다.

### 새로운 기능

- **모던 코어** — 고성능 Rust 대안으로 레거시 Unix 도구를 대체:
  - **Atuin** 셸 히스토리
  - **Yazi** 파일 관리
  - **Zellij** 터미널 멀티플렉싱
  - **Ghostty** GPU 가속 터미널
  - **NeoVim** 모던 에디팅
- **네이티브 보안** — 서드파티 에이전트 없는 완전 네이티브 SSH 서명
- **인터랙티브 모드** — 새로운 `dot learn` 명령으로 기능 안내

## 시작하기

### 요구 사항

- **macOS**, **Linux (Ubuntu/Debian)**, 또는 **Windows (WSL)**
- **Curl** 및 **Git**
- **Chezmoi** (자동 설치)
- **Nerd Font** (터미널 아이콘용)

### 설치

단일 명령으로 전체 스위트를 설치합니다:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
```

설치 프로그램은 다음을 수행합니다:

1. `chezmoi` 바이너리 설치
2. 저장소 복제
3. Homebrew (macOS) 또는 Apt (Linux)를 통해 필요한 패키지 설치
4. 구성 적용

### 탐색

설치 후 터미널을 다시 시작하고 실행합니다:

```bash
dot learn
```

새 환경의 인터랙티브 투어가 시작됩니다.

## 사용자화

구성은 `~/.local/share/chezmoi`에 있습니다:

```
~/.local/share/chezmoi
├── dot_zshenv              # 셸 진입점
├── dot_config/             # XDG Base Config (~/.config)
│   ├── atuin/              # 셸 히스토리
│   ├── ghostty/            # 터미널 에뮬레이터
│   ├── git/                # Git 구성
│   ├── yazi/               # 파일 관리자
│   ├── zellij/             # 터미널 멀티플렉서
│   ├── zsh/                # Zsh 구성
│   └── shell/              # 공유 별칭 및 경로
├── provision/              # 라이프사이클 스크립트
├── install.sh              # 범용 설치 프로그램
└── docs/                   # 문서
```

## 기여

커뮤니티에 참여하세요. [행동 강령][code-of-conduct-url] 및 [기여 가이드라인][contributing-url]을 검토해 주세요.

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
