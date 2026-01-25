---
description: 앱, 데이터베이스, 파이프라인, 배포를 위한 200개 이상의 Heroku CLI 별칭으로 워크플로를 가속화합니다.
lang: ko-KR
metaTitle: Heroku 별칭 - Dotfiles (KR)
permalink: /alias/heroku/
sidebar: true

meta:
  - name: keywords
    content: heroku aliases, heroku cli shortcuts, heroku shell commands, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Heroku 별칭 - Dotfiles
  - name: twitter:description
    content: 앱, 데이터베이스, 파이프라인, 배포를 위한 200개 이상의 Heroku CLI 별칭.
  - name: og:title
    content: Heroku 별칭 - Dotfiles
  - name: og:description
    content: 앱, 데이터베이스, 파이프라인, 배포를 위한 200개 이상의 Heroku CLI 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Heroku 별칭

Heroku CLI를 위한 셸 단축키. `heroku.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 개요

이 컬렉션은 앱 관리, 애드온, 데이터베이스, 파이프라인, 컨테이너 등을 위한 200개 이상의 Heroku CLI 별칭을 제공합니다.

## 참조

### 일반 명령

| 별칭 | 설명 |
|:---|:---|
| `hkk` | Heroku CLI 명령 단축키 |
| `hkh` | Heroku 도움말 표시 |
| `hkl` | 모든 명령 나열 |
| `hklg` | 최근 로그 출력 표시 |
| `hks` | Heroku 플랫폼의 현재 상태 표시 |
| `hku` | Heroku CLI 업데이트 |

### 앱

| 별칭 | 설명 |
|:---|:---|
| `hkapc` | 새 앱 생성 |
| `hkapi` | 상세 앱 정보 표시 |
| `hkapk` | 앱 영구 삭제 |
| `hkapl` | 앱 나열 |
| `hkapo` | 웹 브라우저에서 앱 열기 |

### PostgreSQL

| 별칭 | 설명 |
|:---|:---|
| `hkpg` | 데이터베이스 정보 표시 |
| `hkpgpsql` | 데이터베이스에 psql 셸 열기 |
| `hkpgbk` | 데이터베이스 백업 나열 |
| `hkpgbkc` | 새 백업 캡처 |

### 파이프라인

| 별칭 | 설명 |
|:---|:---|
| `hkpipe` | 접근 가능한 파이프라인 나열 |
| `hkpipec` | 새 파이프라인 생성 |
| `hkpipep` | 최신 릴리스를 다운스트림 앱으로 프로모트 |
