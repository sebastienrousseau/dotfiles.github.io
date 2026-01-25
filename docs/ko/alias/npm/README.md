---
description: 설치, 빌드, 테스트, 게시 명령어를 위한 직관적인 셸 별칭으로 npm 워크플로를 가속화합니다.
lang: ko-KR
metaTitle: NPM 별칭 - Dotfiles (KR)
permalink: /alias/npm/
sidebar: true

meta:
  - name: keywords
    content: npm aliases, node package manager, npm shortcuts, shell aliases, dotfiles, npm commands
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 설치, 빌드, 테스트, 게시를 위한 직관적인 셸 별칭으로 npm 워크플로를 가속화합니다.
  - name: twitter:title
    content: NPM 별칭 - Dotfiles
  - name: og:title
    content: NPM 별칭 - Dotfiles
  - name: og:description
    content: 설치, 빌드, 테스트, 게시를 위한 직관적인 셸 별칭으로 npm 워크플로를 가속화합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# NPM 별칭

npm 패키지 관리자를 위한 간결한 명령어로 Node.js 개발을 간소화합니다.

## 개요

이 별칭은 `npm.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다. 일반적인 npm 작업에 빠르게 접근할 수 있습니다.

## 참조

### 패키지 관리

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `npi` | `npm install` | npm 패키지 설치 |
| `npg` | `npm install -g` | 전역 npm 패키지 |
| `nprm` | `npm uninstall` | npm 패키지 제거 |
| `npu` | `npm update` | npm 패키지 업데이트 |
| `npl` | `npm list` | npm 패키지 나열 |
| `npc` | `npm cache` | npm 패키지 캐시 |

### 스크립트

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `npr` | `npm run` | npm 스크립트 실행 |
| `nps` | `npm start` | npm start 스크립트 |
| `npb` | `npm run build` | npm build 스크립트 |
| `npd` | `npm run dev` | npm dev 스크립트 |
| `npt` | `npm test` | npm test 스크립트 |
| `nprw` | `npm run watch` | npm watch 스크립트 실행 |
| `npsv` | `npm run serve` | npm serve 스크립트 |

### 게시 및 분석

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `npp` | `npm publish` | npm 패키지 게시 |
| `npa` | `npm audit` | npm 패키지 감사 |
| `npx` | `npm exec` | npm 패키지 실행 |
| `npy` | `npm why` | npm 패키지 이유 확인 |
