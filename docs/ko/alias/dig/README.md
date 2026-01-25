---
description: dig 별칭으로 DNS 쿼리를 단순화합니다. 셸 단축키를 사용하여 IPv4, IPv6 및 DNS 레코드를 더 빠르게 조회합니다.
lang: ko-KR
metaTitle: Dig 별칭 - Dotfiles (KR)
permalink: /alias/dig/
sidebar: true

meta:
  - name: keywords
    content: dig aliases, dns lookup, shell aliases, dotfiles, ipv4 lookup, ipv6 lookup
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: dig 별칭으로 DNS 쿼리를 단순화합니다. 셸 단축키를 사용하여 IPv4, IPv6 및 DNS 레코드를 더 빠르게 조회합니다.
  - name: twitter:title
    content: Dig 별칭 - Dotfiles
  - name: og:title
    content: Dig 별칭 - Dotfiles
  - name: og:description
    content: dig 별칭으로 DNS 쿼리를 단순화합니다. 셸 단축키를 사용하여 IPv4, IPv6 및 DNS 레코드를 더 빠르게 조회합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Dig 별칭

간결한 셸 별칭 세트로 DNS 조회를 간소화합니다.

## 개요

이 별칭은 Unix 기반 시스템에서 `dig` 명령을 사용한 DNS(Domain Name System) 쿼리 작업을 단순화합니다. `dig.aliases.sh`에 정의되어 있으며 Universal Dotfiles 구성의 일부로 chezmoi에 의해 자동으로 로드됩니다.

## 참조

다음 표는 사용 가능한 모든 dig 별칭과 그 기능을 나열합니다.

| 별칭 | 설명 |
|:---|:---|
| `d` | 기본 옵션으로 dig 명령 실행 |
| `d4` | IPv4 주소에 대한 DNS 조회 수행 |
| `d6` | IPv6 주소에 대한 DNS 조회 수행 |
| `dga` | 모든 레코드에 대한 DNS 조회 수행 |
| `dgs` | 짧은 답변에 대한 DNS 조회 수행 |
| `digg` | Google DNS를 사용하여 dig 쿼리 수행 |
| `ip4` | 공용 IPv4 주소 검색 |
| `ip6` | 공용 IPv6 주소 검색 |
| `ips` | 공용 IPv4 및 IPv6 주소 검색 |
| `wip` | 공용 IP 주소 검색 |
