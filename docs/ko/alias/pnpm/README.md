---
description: 설치, 빌드, 테스트, Node.js 의존성 관리를 위한 pnpm 별칭으로 워크플로를 간소화합니다.
lang: ko-KR
metaTitle: Pnpm 별칭 - Dotfiles (KR)
permalink: /alias/pnpm/
sidebar: true

meta:
  - name: keywords
    content: pnpm aliases, package manager, node.js, npm alternative, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 설치, 빌드, 테스트, Node.js 의존성 관리를 위한 pnpm 별칭.
  - name: twitter:title
    content: Pnpm 별칭 - Dotfiles
  - name: og:title
    content: Pnpm 별칭 - Dotfiles
  - name: og:description
    content: 설치, 빌드, 테스트, Node.js 의존성 관리를 위한 pnpm 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Pnpm 별칭

빠르고 디스크 효율적인 패키지 관리자를 위한 단축키.

## 개요

이 별칭은 `pnpm.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다. Node.js 패키지 관리를 위한 일반적인 [pnpm](https://pnpm.io/) 명령어에 빠르게 접근할 수 있습니다.

## 참조

### 프로젝트 초기화

| 별칭 | 설명 |
|:---|:---|
| `pni` | 새 프로젝트 초기화 |
| `pnc` | 새 프로젝트 생성 |
| `pnin` | 프로젝트 의존성 설치 |
| `pnun` | 프로젝트 의존성 제거 |

### 개발

| 별칭 | 설명 |
|:---|:---|
| `pnb` | 프로젝트 빌드 |
| `pnrun` | 프로젝트에서 스크립트 실행 |
| `pnd` | 개발 모드로 프로젝트 실행 |
| `pns` | serve 모드로 프로젝트 실행 |
| `pnst` | 프로젝트 시작 |
| `pnsv` | server 모드로 프로젝트 실행 |

### 테스트 및 품질

| 별칭 | 설명 |
|:---|:---|
| `pnt` | 프로젝트 테스트 |
| `pntc` | 커버리지와 함께 프로젝트 테스트 |
| `pnln` | 프로젝트 린트 |
| `pndoc` | 프로젝트 문서 생성 |

### 의존성 관리

| 별칭 | 설명 |
|:---|:---|
| `pnls` | 모든 의존성 나열 |
| `pnout` | 오래된 의존성 확인 |
| `pnwhy` | 의존성이 설치된 이유 확인 |
| `pnad` | 개발 의존성 추가 |
| `pnap` | 피어 의존성 추가 |
| `pnrm` | 의존성 제거 |
| `pnup` | 의존성 업데이트 |
| `pnui` | 대화형으로 의존성 업데이트 |
| `pnuil` | 대화형으로 최신 버전으로 의존성 업데이트 |

### 전역 패키지

| 별칭 | 설명 |
|:---|:---|
| `pnga` | 전역 의존성 추가 |
| `pngls` | 모든 전역 의존성 나열 |
| `pngrm` | 전역 의존성 제거 |
| `pngu` | 전역 의존성 업데이트 |

### 게시 및 유틸리티

| 별칭 | 설명 |
|:---|:---|
| `pnpub` | 프로젝트 게시 |
| `pnx` | pnpx 단축형 |
| `pnh` | 도움말 표시 |
