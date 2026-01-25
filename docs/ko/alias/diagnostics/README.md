---
description: dotfiles 환경에서 시스템 진단, 상태 점검, 드리프트 감지 및 자가 복구를 위한 셸 별칭.
lang: ko-KR
metaTitle: 진단 별칭 - Dotfiles (KR)
permalink: /alias/diagnostics/
sidebar: true

meta:
  - name: keywords
    content: diagnostics aliases, system health check, dotfiles doctor, chezmoi verify, self-healing shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: dotfiles 환경에서 시스템 진단, 상태 점검, 드리프트 감지 및 자가 복구를 위한 셸 별칭.
  - name: twitter:title
    content: 진단 별칭 - Dotfiles
  - name: og:title
    content: 진단 별칭 - Dotfiles
  - name: og:description
    content: dotfiles 환경에서 시스템 진단, 상태 점검, 드리프트 감지 및 자가 복구를 위한 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 진단 별칭

자가 복구 및 시스템 상태 점검을 위한 도구.

## 개요

진단 별칭은 시스템 상태를 모니터링하고, 구성 드리프트를 감지하고, dotfiles 환경을 자동으로 복구하기 위한 명령을 제공합니다. 이 유틸리티는 chezmoi와 통합되어 로컬 파일이 관리되는 상태와 동기화되도록 합니다.

## 참조

### 상태 및 복구

| 별칭 | 설명 |
|:---|:---|
| `doc`, `dot-doctor` | 시스템 상태 점검 스크립트 (`doctor.sh`) 실행. |
| `drift`, `dot-drift` | 로컬 파일이 관리되는 상태에서 드리프트되었는지 확인 (`chezmoi verify`). |
| `heal`, `dot-heal` | 드리프트 복구를 위해 관리되는 상태 적용 (`chezmoi apply`). |
| `doc-full` | 확장 경로 디버깅 정보와 함께 doctor 실행. |
