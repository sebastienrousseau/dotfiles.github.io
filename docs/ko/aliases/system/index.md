---
title: System 별칭 | Dotfiles
description: Dotfiles v0.2.495의 System 별칭을 살펴보세요. macOS, Linux, WSL용 짧고 기억하기 쉬운 system 명령어.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System 별칭 | Dotfiles preview
canonical: /ko/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System 별칭
pageType: docs
schemaType: WebPage
metaTitle: System 별칭 | Dotfiles
permalink: /ko/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, 별칭, 셸, Bash, Zsh, Dotfiles, Chezmoi, system 명령어
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495의 System 별칭. 짧고 기억하기 쉬운 system 명령어.
  - name: twitter:title
    content: System 별칭 | Dotfiles
  - name: og:title
    content: System 별칭 | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495의 System 별칭. 짧고 기억하기 쉬운 system 명령어.
  - name: og:image:alt
    content: Dotfiles – 당신의 셸 라이프에 맞게 설계
  - name: og:locale
    content: ko_KR
---

# System 별칭

짧은 system 명령어.

이 페이지에서는 별칭 그룹과 자주 사용하는 명령어 단축키를 소개합니다. 먼저 이 페이지를 읽고 명명 규칙, 예상 입력, 안전한 실행 패턴을 이해하세요. 그런 다음 레퍼런스 부록을 열어 전체 명령어 목록과 정확한 구문을 확인하세요. 이 별칭들은 반복 입력을 줄이고 macOS, Linux, WSL에서 일관된 워크플로를 유지합니다.

## 사용 시기

예측 가능한 명령어 패턴이 필요한 일상적인 셸 작업 전에 이 페이지를 활용하세요.

## 포함 내용

- 별칭: 24
- 헬퍼 함수: 0
- 소스 파일: 1

## 빠른 예제

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## 다음 단계

전체 목록 열기:

- [System 레퍼런스 부록](./reference.md)
