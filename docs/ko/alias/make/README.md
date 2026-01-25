---
description: Make 명령어 단축 별칭. 빌드, 테스트, 프로젝트 자동화를 간소화합니다.
lang: ko-KR
metaTitle: Make 별칭 - Dotfiles (KR)
permalink: /alias/make/
sidebar: true

meta:
  - name: keywords
    content: make aliases, makefile shortcuts, build automation, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Make 명령어 단축 별칭. 빌드, 테스트, 프로젝트 자동화를 간소화합니다.
  - name: twitter:title
    content: Make 별칭 - Dotfiles
  - name: og:title
    content: Make 별칭 - Dotfiles
  - name: og:description
    content: Make 명령어 단축 별칭. 빌드, 테스트, 프로젝트 자동화를 간소화합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Make 별칭

간결한 명령어로 빌드 워크플로를 간소화합니다.

## 개요

이 별칭은 일반적인 Make 타겟에 빠르게 접근할 수 있게 해줍니다. `make.aliases.sh`에 정의되어 있으며 Universal Dotfiles 구성의 일부로 chezmoi에 의해 자동으로 로드됩니다.

## 참조

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `mk` | `make` | 기본 Make 타겟 실행 |
| `mka` | `make all` | 모든 타겟 빌드 |
| `mkc` | `make clean` | 빌드 아티팩트 정리 |
| `mkd` | `make doc` | 문서 생성 |
| `mkf` | `make format` | 소스 파일 포맷 |
| `mkh` | `make help` | 도움말 정보 표시 |
| `mki` | `make install` | 프로젝트 설치 |
| `mkr` | `make run` | 프로젝트 실행 |
| `mkt` | `make test` | 테스트 실행 |
