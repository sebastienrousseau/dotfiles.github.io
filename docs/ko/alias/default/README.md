---
description: 탐색, 시스템 제어 및 일상 작업을 위한 필수 셸 별칭. 범용 단축키로 터미널 워크플로를 단순화합니다.
lang: ko-KR
metaTitle: 기본 별칭 - Dotfiles (KR)
permalink: /alias/default/
sidebar: true

meta:
  - name: keywords
    content: default aliases, shell aliases, terminal shortcuts, dotfiles, bash aliases
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: 기본 별칭 - Dotfiles
  - name: twitter:description
    content: 탐색, 시스템 제어 및 일상 작업을 위한 필수 셸 별칭.
  - name: og:title
    content: 기본 별칭 - Dotfiles
  - name: og:description
    content: 탐색, 시스템 제어 및 일상 작업을 위한 필수 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 기본 별칭

일상적인 터미널 작업을 위한 필수 셸 단축키.

## 개요

기본 별칭은 일반적인 터미널 작업을 간소화하는 범용 셸 단축키 모음을 제공합니다. 이 별칭은 `default.aliases.sh`에 정의되어 있으며 chezmoi에 의해 지원되는 모든 셸에서 자동으로 로드됩니다.

이 단축키는 일반 유틸리티, 종료 명령, 네트워크 진단, 시스템 모니터링 및 파일 시스템 탐색을 다룹니다.

## 참조

### 일반

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | 현재 날짜 및 시간 표시 |
| `p` | `pwd` | 작업 디렉토리 출력 |
| `path` | `echo ${PATH//:/\\n}` | PATH 변수를 새 줄에 표시 |
| `r` | `reload` | 셸 다시 로드 |
| `t` | `tail -f` | 실시간으로 파일 출력 추적 |
| `wk` | `date +%V` | 현재 주 번호 표시 |

### 종료 및 셧다운

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `q` | `exit` | 셸 종료 |
| `quit` | `exit` | 셸 종료 |
| `bye` | `exit` | 셸 종료 |
| `:q` | `exit` | 셸 종료 (vim 스타일) |
| `halt` | `sudo /sbin/halt` | 시스템 중지 |
| `poweroff` | `sudo /sbin/shutdown` | 시스템 전원 끄기 |
| `reboot` | `sudo /sbin/reboot` | 시스템 재부팅 |

### 히스토리

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `h` | `history` | 명령 히스토리 보기 |
| `history` | `fc -il 1` | ISO 8601 타임스탬프로 히스토리 표시 |

### 네트워크

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `ifconfig` | `sudo ifconfig` | 네트워크 인터페이스 구성 |
| `ipinfo` | `ipconfig getpacket en0` | en0의 네트워크 파라미터 가져오기 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | 활성 네트워크 리스너 표시 |
| `op` | `sudo lsof -i -P` | 열린 포트 나열 |
| `ping` | `ping -c 5` | 5개 패킷 제한으로 ping |
| `ports` | `netstat -tulan` | 모든 리스닝 포트 나열 |

### 시스템 모니터링

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `top` | `sudo btop` | 대화형 프로세스 모니터 |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | ASL 로그 파일 정리 |

### 유틸리티

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `ctf` | `ls -1 \| wc -l` | 현재 디렉토리의 파일 수 |
| `qfind` | `find . -name` | 빠른 파일 검색 |
| `reload` | `exec $SHELL -l` | 셸 다시 로드 |
| `wth` | `curl -s "wttr.in/?format=3"` | 현재 날씨 가져오기 |
