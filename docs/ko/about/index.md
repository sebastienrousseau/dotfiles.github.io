---
title: Dotfiles 소개
description: 차세대 셸 구성. 고성능, 보안, AI 네이티브. Chezmoi로 관리됩니다.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dotfiles 소개 preview
canonical: /ko/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Dotfiles 소개
pageType: docs
schemaType: WebPage
metaTitle: Dotfiles 소개 - Dotfiles (KR)
permalink: /ko/about/
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

Dotfiles v0.2.495는 터미널을 강력하고 통합된 작업 공간으로 변환합니다. 복잡한 Makefile이나 심볼릭 링크 스크립트에 의존하는 레거시 dotfiles와 달리, Dotfiles는 원자적이고 빠르며 재현 가능한 템플릿 기반 접근 방식을 사용합니다.

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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
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

## 핵심 명령어

`dot` CLI는 53개의 명령어를 카테고리별로 제공합니다.

### 코어

- `dot apply` — 구성 변경 사항을 적용합니다.
- `dot sync` — 최신 저장소 상태를 가져와 적용합니다.
- `dot update` — 저장소를 업데이트하고 캐시를 예열합니다.
- `dot add` — 새 파일을 Chezmoi 소스에 추가합니다.
- `dot diff` — 적용 전 보류 중인 변경 사항을 표시합니다.
- `dot status` — 관리 대상 파일 상태를 표시합니다.
- `dot remove` — 파일 관리를 해제하고 소스 항목을 삭제합니다.
- `dot cd` — Chezmoi 소스 디렉토리에서 셸을 엽니다.
- `dot edit` — 관리 대상 파일을 편집기에서 엽니다.
- `dot clean-cache` — 임시 캐시를 삭제합니다.
- `dot prewarm` — 빠른 셸 시작을 위해 캐시를 미리 채웁니다.

### 진단

- `dot doctor` — 경로, 도구 및 셸 상태를 검증합니다.
- `dot heal` — 누락되거나 손상된 상태를 자동으로 복구합니다.
- `dot health` — 경량 헬스 프로브를 실행합니다.
- `dot verify` — 소스 대비 파일 무결성을 확인합니다.
- `dot scorecard` — 구성 품질 점수를 출력합니다.
- `dot snapshot` — 나중 비교를 위해 현재 상태를 캡처합니다.
- `dot smoke-test` — 핵심 도구 체인을 엔드투엔드로 검증합니다.
- `dot chaos` — 자가 치유 테스트를 위해 장애를 주입합니다.
- `dot bundle` — 이식 가능한 구성 번들을 내보냅니다.
- `dot rollback` — 이전 스냅샷으로 되돌립니다.
- `dot drift` — 관리 대상 파일의 예기치 않은 변경을 감지합니다.
- `dot history` — apply/sync 히스토리 로그를 표시합니다.
- `dot benchmark` — 셸 시작 시간을 측정합니다.
- `dot perf` — 느린 셸 초기화를 프로파일링합니다.

### 외관

- `dot theme` — 터미널 색상 테마를 전환합니다.
- `dot wallpaper` — 바탕 화면 배경을 설정합니다 (macOS).
- `dot fonts` — Nerd Fonts를 설치하거나 업데이트합니다.
- `dot tune` — UI 밀도와 프롬프트 스타일을 조정합니다.

### 보안

- `dot backup` — 암호화된 구성 백업을 생성합니다.
- `dot encrypt-check` — 저장된 시크릿의 암호화를 확인합니다.
- `dot firewall` — 호스트 방화벽 규칙을 구성합니다.
- `dot telemetry` — 익명 사용 텔레메트리를 제어합니다.
- `dot dns-doh` — DNS-over-HTTPS를 활성화합니다.
- `dot lock-screen` — 화면을 즉시 잠급니다.
- `dot usb-safety` — USB 대용량 저장소 자동 마운트를 제한합니다.

### 시크릿

- `dot secrets-init` — 시크릿 백엔드를 초기화합니다 (age / GPG).
- `dot secrets` — 암호화된 시크릿 항목을 나열합니다.
- `dot secrets-create` — 새 암호화된 시크릿을 생성합니다.
- `dot ssh-key` — SSH 키 쌍을 생성하거나 교체합니다.
- `dot ssh-cert` — CA에서 SSH 인증서를 요청합니다.

### AI

- `dot ai` — 대화형 AI 어시스턴트 세션을 엽니다.
- `dot ai-setup` — AI 제공업체의 API 키를 구성합니다.
- `dot ai-query` — AI 모델에 일회성 프롬프트를 전송합니다.
- AI 도구 래퍼: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### 도구

- `dot tools` — 번들된 CLI 대체 도구와 상태를 나열합니다.
- `dot new` — 새 별칭 또는 함수 파일을 생성합니다.
- `dot sandbox` — 일회용 샌드박스 셸을 엽니다.
- `dot keys` — 현재 키 바인딩을 표시합니다.
- `dot learn` — 대화형 튜토리얼을 시작합니다.

### 메타

- `dot upgrade` — Dotfiles를 최신 릴리스로 업그레이드합니다.
- `dot packages` — Dotfiles가 관리하는 설치된 패키지를 나열합니다.
- `dot version` / `dot help` — 버전 또는 사용법 정보를 출력합니다

## 기여

커뮤니티에 참여하세요. [행동 강령][code-of-conduct-url] 및 [기여 가이드라인][contributing-url]을 검토해 주세요.

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
