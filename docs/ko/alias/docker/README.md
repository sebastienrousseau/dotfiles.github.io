---
description: 컨테이너, 이미지, 볼륨, 네트워크, Compose 및 Swarm을 위한 종합 Docker 별칭. 짧은 명령으로 생산성을 높이세요.
lang: ko-KR
metaTitle: Docker 별칭 - Dotfiles (KR)
permalink: /alias/docker/
sidebar: true

meta:
  - name: keywords
    content: docker aliases, docker shortcuts, container commands, docker compose aliases, docker swarm aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 컨테이너, 이미지, 볼륨, 네트워크, Compose 및 Swarm을 위한 종합 Docker 별칭.
  - name: twitter:title
    content: Docker 별칭 - Dotfiles
  - name: og:title
    content: Docker 별칭 - Dotfiles
  - name: og:description
    content: 컨테이너, 이미지, 볼륨, 네트워크, Compose 및 Swarm을 위한 종합 Docker 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Docker 별칭

Docker, Compose 및 Swarm을 위한 직관적인 단축키로 컨테이너 워크플로를 간소화합니다.

## 개요

이 별칭은 `docker.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다. 컨테이너, 이미지, 볼륨, 네트워크, Docker Compose 및 Docker Swarm 작업을 포함한 Docker 개발을 위한 종합적인 단축키 세트를 제공합니다.

## 참조

### 기본 명령

| 별칭 | 설명 |
|:---|:---|
| `dk` | Docker 단축키 |
| `dkv` | Docker 버전 표시 |
| `dki` | 시스템 전체 정보 표시 |
| `dkl` | Docker 레지스트리에 로그인 |
| `dklo` | Docker 레지스트리에서 로그아웃 |

### 컨테이너 작업

| 별칭 | 설명 |
|:---|:---|
| `dkps` | 실행 중인 컨테이너 나열 |
| `dkpsa` | 모든 컨테이너 나열 |
| `dkr` | 새 컨테이너에서 명령 실행 |
| `dkri` | 대화형 컨테이너 실행 |
| `dkrd` | 백그라운드에서 컨테이너 실행 |
| `dks` | 컨테이너 시작 |
| `dkst` | 컨테이너 중지 |
| `dkrs` | 컨테이너 다시 시작 |
| `dkrm` | 컨테이너 제거 |
| `dkrma` | 모든 컨테이너 제거 |

### 이미지

| 별칭 | 설명 |
|:---|:---|
| `dki` | 이미지 나열 |
| `dkia` | 모든 이미지 나열 |
| `dkb` | 이미지 빌드 |
| `dkbt` | 이미지 빌드 및 태그 |
| `dkpu` | 레지스트리로 이미지 푸시 |
| `dkrmi` | 이미지 제거 |
| `dkprune` | 사용되지 않는 데이터 제거 |

### Docker Compose

| 별칭 | 설명 |
|:---|:---|
| `dc` | Docker Compose 단축키 |
| `dcu` | 컨테이너 생성 및 시작 |
| `dcud` | 백그라운드에서 컨테이너 생성 및 시작 |
| `dcd` | 컨테이너 중지 및 제거 |
| `dcr` | 서비스 다시 시작 |
| `dcl` | 로그 보기 |
| `dclf` | 로그 추적 |
| `dcb` | 서비스 빌드 |

### Swarm 관리

| 별칭 | 설명 |
|:---|:---|
| `dksw` | Swarm 단축키 |
| `dkswi` | Docker Swarm 초기화 |
| `dkswj` | Docker Swarm 조인 |
| `dkswl` | Swarm에서 나가기 |

## 일반 워크플로

### 컨테이너 개발

```bash
# 개발 컨테이너 시작
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

### Docker Compose 개발

```bash
# 필요한 경우 백그라운드에서 서비스 시작 및 다시 빌드
dcb && dcud
```

### 정리

```bash
# 중지된 모든 컨테이너, 사용되지 않는 네트워크, dangling 이미지 제거
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```
