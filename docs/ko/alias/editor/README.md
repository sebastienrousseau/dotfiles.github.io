---
description: 편집기 별칭으로 텍스트 편집기를 빠르게 실행합니다. VS Code, Neovim, Vim 등을 위한 단축키.
lang: ko-KR
metaTitle: 에디터 별칭 - Dotfiles (KR)
permalink: /alias/editor/
sidebar: true

meta:
  - name: keywords
    content: editor aliases, text editor, vscode aliases, neovim, vim aliases, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 편집기 별칭으로 텍스트 편집기를 빠르게 실행합니다. VS Code, Neovim, Vim 등을 위한 단축키.
  - name: twitter:title
    content: 에디터 별칭 - Dotfiles
  - name: og:title
    content: 에디터 별칭 - Dotfiles
  - name: og:description
    content: 편집기 별칭으로 텍스트 편집기를 빠르게 실행합니다. VS Code, Neovim, Vim 등을 위한 단축키.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 에디터 별칭

선호하는 텍스트 편집기로 파일을 여는 단축키.

## 개요

이 별칭은 `editor.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 범용

| 별칭 | 설명 |
|:---|:---|
| `e` | 빠른 편집 명령 |
| `edit` | 표준 편집 명령 |
| `editor` | 전체 편집기 명령 |
| `n` | 짧은 편집 별칭 |
| `v` | Vim 스타일 편집 별칭 |

### VS Code

| 별칭 | 설명 |
|:---|:---|
| `vsc` | VS Code 단축키 |
| `vsca` | 폴더를 현재 창에 추가 |
| `vscd` | 두 파일 비교 |
| `vscn` | 새 창 열기 |

### 구성 편집

```bash
editrc bash     # ~/.bashrc 편집
editrc zsh      # ~/.zshrc 편집
editrc vim      # ~/.vimrc 편집
editrc git      # ~/.gitconfig 편집
```

## 지원 편집기

- **Neovim** - 향상된 Vim의 현대적 버전
- **Visual Studio Code** - 확장 기능이 풍부한 코드 편집기
- **Vim** - 높은 설정 가능성의 텍스트 편집기
- **Nano** - 간단하고 사용하기 쉬운 터미널 편집기
- **Emacs** - 확장 가능하고 사용자화 가능한 텍스트 편집기
- **Sublime Text** - 정교한 코드용 텍스트 편집기
