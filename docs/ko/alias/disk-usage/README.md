---
description: 디스크 사용량 모니터링을 위한 셸 별칭. 파일 크기를 표시하고, 큰 디렉토리를 찾고, 스토리지를 효율적으로 관리합니다.
lang: ko-KR
metaTitle: 디스크 사용량 별칭 - Dotfiles (KR)
permalink: /alias/disk-usage/
sidebar: true

meta:
  - name: keywords
    content: disk usage aliases, du command, storage monitoring, file size, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 디스크 사용량 모니터링을 위한 셸 별칭. 파일 크기를 표시하고, 큰 디렉토리를 찾고, 스토리지를 효율적으로 관리합니다.
  - name: twitter:title
    content: 디스크 사용량 별칭 - Dotfiles
  - name: og:title
    content: 디스크 사용량 별칭 - Dotfiles
  - name: og:description
    content: 디스크 사용량 모니터링을 위한 셸 별칭. 파일 크기를 표시하고, 큰 디렉토리를 찾고, 스토리지를 효율적으로 관리합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 디스크 사용량 별칭

파일 시스템 전체의 스토리지 소비를 빠르게 모니터링하고 분석합니다.

## 개요

디스크 사용량 별칭은 Unix 기반 시스템에서 스토리지 소비를 모니터링하기 위한 간소화된 명령을 제공합니다. `disk-usage.aliases.sh`에 정의되어 있으며 이 단축키는 일반적인 `du` 작업을 단순화하고 Dotfiles 구성의 일부로 chezmoi에 의해 자동으로 로드됩니다.

## 참조

다음 표는 사용 가능한 모든 디스크 사용량 별칭과 그 기능을 나열합니다.

| 별칭 | 설명 |
|:---|:---|
| `du` | 현재 디렉토리의 디스크 사용량 표시 |
| `du1` | 현재 디렉토리의 파일 및 디렉토리 크기 표시 |
| `duh` | 사람이 읽을 수 있는 형식으로 파일 크기 표시 |
| `ducks` | 현재 디렉토리의 상위 10개 큰 파일 및 디렉토리 표시 |
| `dus` | 크기별로 정렬된 사람이 읽을 수 있는 형식으로 파일 크기 표시 |
| `dusym` | 심볼릭 링크를 포함하여 파일 및 디렉토리 크기 표시 |
| `dut` | 현재 디렉토리의 총 파일 크기 표시 |
