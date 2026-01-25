---
description: 라이선스 스캔, 저작권 헤더, dotfiles 귀속 관리를 위한 셸 별칭.
lang: ko-KR
metaTitle: Legal 별칭 - Dotfiles (KR)
permalink: /alias/legal/
sidebar: true

meta:
  - name: keywords
    content: legal aliases, license scanning, copyright headers, open source compliance, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 라이선스 스캔, 저작권 헤더, dotfiles 귀속 관리를 위한 셸 별칭.
  - name: twitter:title
    content: Legal 별칭 - Dotfiles
  - name: og:title
    content: Legal 별칭 - Dotfiles
  - name: og:description
    content: 라이선스 스캔, 저작권 헤더, dotfiles 귀속 관리를 위한 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Legal 별칭

오픈소스 컴플라이언스, 라이선스 스캔, 귀속 관리를 위한 셸 도구.

## 개요

legal 별칭은 프로젝트 전반에서 오픈소스 컴플라이언스를 유지하기 위한 간소화된 워크플로를 제공합니다. 이 도구들은 라이선스 스캔, 저작권 헤더 관리, 의존성 귀속을 처리합니다.

## 참조

### 라이선스 스캔

| 별칭 | 설명 | 유형 |
|:---|:---|:---|
| `fossology-start` | 포트 8081에서 로컬 FOSSology 서버 시작 | Docker |
| `fossology-stop` | FOSSology 서버 중지 | Docker |
| `license-scan` | 현재 디렉토리의 빠른 라이선스 스캔 (Trivy) | Binary |

### 저작권 헤더

| 별칭 | 설명 | 유형 |
|:---|:---|:---|
| `add-headers` | 모든 소스 파일에 MIT 라이선스 헤더 재귀적 추가 | Docker (google/addlicense) |

### 귀속

| 별칭 | 설명 | 유형 |
|:---|:---|:---|
| `gen-notice` | 의존성에 대한 NOTICE 파일 생성 (초기 Go 지원) | Docker |

### 기여

| 별칭 | 설명 | 유형 |
|:---|:---|:---|
| `check-cla` | CLA 상태를 포함한 GitHub PR 체크 모니터링 | CLI (gh) |

## 요구사항

- **Docker** - 컴플라이언스 도구 격리에 필요
- **GitHub CLI (gh)** - PR 및 CLA 체크에 필요
- **Trivy** - 빠른 스캔을 위해 자동 설치 또는 제안
