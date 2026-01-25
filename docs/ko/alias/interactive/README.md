---
description: rm, mv, cp와 같은 파괴적 작업 전에 확인 프롬프트를 추가하는 셸 별칭. 실수로 인한 파일 삭제를 방지합니다.
lang: ko-KR
metaTitle: Interactive 별칭 - Dotfiles (KR)
permalink: /alias/interactive/
sidebar: true

meta:
  - name: keywords
    content: interactive aliases, shell safety, rm confirmation, cp interactive, mv prompt, dotfiles, bash aliases
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Interactive 별칭 - Dotfiles
  - name: twitter:description
    content: rm, mv, cp와 같은 파괴적 작업 전에 확인 프롬프트를 추가하는 셸 별칭.
  - name: og:title
    content: Interactive 별칭 - Dotfiles
  - name: og:description
    content: rm, mv, cp와 같은 파괴적 작업 전에 확인 프롬프트를 추가하는 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Interactive 별칭

파괴적 작업 전에 확인 프롬프트를 추가하는 안전한 셸 명령.

## 개요

Interactive 별칭은 파일을 영구적으로 수정하거나 삭제할 수 있는 일반적인 셸 명령에 확인 프롬프트를 추가합니다. `interactive.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 파일 작업

| 별칭 | 설명 |
|:---|:---|
| `cp` | 상세 출력과 함께 파일과 디렉토리를 대화형으로 복사. 기존 파일 덮어쓰기 전 확인. |
| `mv` | 상세 출력과 함께 파일을 대화형으로 이동. 기존 파일 덮어쓰기 전 확인. |
| `ln` | 상세 출력과 함께 심볼릭 링크를 대화형으로 생성. 기존 링크 덮어쓰기 전 확인. |

### 파일 삭제

| 별칭 | 설명 |
|:---|:---|
| `rm` | 상세 출력과 함께 파일이나 디렉토리를 대화형으로 삭제. 각 삭제 전 확인. |
| `del` | 상세 출력과 함께 파일이나 디렉토리를 대화형으로 재귀 삭제. 각 삭제 전 확인. |
| `zap` | `rm`의 별칭. 상세 출력과 함께 파일이나 디렉토리를 대화형으로 삭제. |

### 휴지통 관리

| 별칭 | 설명 |
|:---|:---|
| `bin` | 휴지통 디렉토리 (`~/.Trash`)의 모든 파일을 강제로 재귀 삭제. |

### 권한 및 유틸리티

| 별칭 | 설명 |
|:---|:---|
| `chmod` | 상세 출력과 함께 파일이나 디렉토리 권한 변경. |
| `chown` | 상세 출력과 함께 파일이나 디렉토리 소유자 및 그룹 변경. |
| `diff` | 두 파일을 통합 형식으로 비교하고 차이 표시. |
| `grep` | 줄 번호와 함께 대소문자 무시하여 파일이나 출력에서 패턴 검색. |
| `mkdir` | 필요시 부모 디렉토리 포함 상세 출력과 함께 새 디렉토리 생성. |
