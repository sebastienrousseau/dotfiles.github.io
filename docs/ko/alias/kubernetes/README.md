---
description: kubectl, Helm, k9s 별칭으로 Kubernetes 워크플로를 가속화합니다. 파드, 컨텍스트, 네임스페이스를 효율적으로 관리합니다.
lang: ko-KR
metaTitle: Kubernetes 별칭 - Dotfiles (KR)
permalink: /alias/kubernetes/
sidebar: true

meta:
  - name: keywords
    content: kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: kubectl, Helm, k9s 별칭으로 Kubernetes 워크플로를 가속화합니다.
  - name: twitter:title
    content: Kubernetes 별칭 - Dotfiles
  - name: og:title
    content: Kubernetes 별칭 - Dotfiles
  - name: og:description
    content: kubectl, Helm, k9s 별칭으로 Kubernetes 워크플로를 가속화합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Kubernetes 별칭

kubectl, Helm 및 클러스터 관리를 위한 간결한 셸 별칭으로 Kubernetes 워크플로를 간소화합니다.

## 개요

이 별칭은 `kubernetes.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 코어

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `k` | `kubectl` | kubectl 단축키 |
| `kg` | `kubectl get` | 리소스 가져오기 |
| `kgp` | `kubectl get pods` | 파드 가져오기 |
| `kga` | `kubectl get all` | 모든 리소스 가져오기 |
| `kd` | `kubectl describe` | 리소스 설명 |
| `kdel` | `kubectl delete` | 리소스 삭제 |
| `kl` | `kubectl logs` | 로그 보기 |
| `kex` | `kubectl exec -it` | 대화형 셸 실행 |

### 컨텍스트

| 별칭 | 설명 |
|:---|:---|
| `kcx` | 컨텍스트 나열 |
| `kuse` | 컨텍스트 전환 |
| `kns` | 네임스페이스 전환 |

### Helm

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `h` | `helm` | Helm 단축키 |
| `hls` | `helm list` | 릴리스 나열 |
| `hi` | `helm install` | 차트 설치 |

### UI

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `k9` | `k9s` | k9s 터미널 UI |
