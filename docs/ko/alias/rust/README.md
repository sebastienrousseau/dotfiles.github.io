---
description: Cargo 및 Rustup을 위한 Rust 개발 별칭. Rust 프로젝트 빌드, 테스트, 관리를 위한 단축키.
lang: ko-KR
metaTitle: Rust 별칭 - Dotfiles (KR)
permalink: /alias/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, shell aliases, dotfiles, rust development
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Cargo 및 Rustup을 위한 Rust 개발 별칭. 빌드, 테스트, 관리 단축키.
  - name: twitter:title
    content: Rust 별칭 - Dotfiles
  - name: og:title
    content: Rust 별칭 - Dotfiles
  - name: og:description
    content: Cargo 및 Rustup을 위한 Rust 개발 별칭. 빌드, 테스트, 관리 단축키.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Rust 별칭

Cargo 및 Rustup을 사용한 Rust 개발을 위한 단축키.

## 개요

이 별칭은 `rust.aliases.sh`에 정의되어 있으며 Chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 기본 명령

| 별칭 | 설명 |
|:---|:---|
| `cg` | Cargo 단축형 |
| `cgn` | 새 바이너리 프로젝트 생성 |
| `cgni` | 새 라이브러리 프로젝트 생성 |
| `cginit` | 현재 디렉토리에서 프로젝트 초기화 |

### 빌드 및 실행

| 별칭 | 설명 |
|:---|:---|
| `cgb` | 디버그 빌드 |
| `cgbr` | 릴리스 빌드 |
| `cgr` | 디버그 실행 |
| `cgrr` | 릴리스 실행 |
| `cgw` | 감시 및 재빌드 |

### 테스트 및 벤치마크

| 별칭 | 설명 |
|:---|:---|
| `cgt` | 테스트 실행 |
| `cgtr` | 릴리스 모드에서 테스트 실행 |
| `cgbh` | 벤치마크 실행 |
| `cgta` | 모든 타겟 테스트 |
| `cgtt` | 단일 스레드 테스트 |

### 코드 품질

| 별칭 | 설명 |
|:---|:---|
| `cgc` | 컴파일 확인 |
| `cgcl` | 빌드 아티팩트 정리 |
| `cgcy` | clippy 린트 실행 |
| `cgf` | 코드 포맷 |
| `cgfa` | 모든 코드 포맷 |
| `cgfx` | 코드 문제 자동 수정 |
| `cgaud` | 보안 취약점 확인 |

### 문서

| 별칭 | 설명 |
|:---|:---|
| `cgd` | 문서 빌드 및 열기 |
| `cgdr` | 릴리스 문서 빌드 |
| `cgdo` | 비공개 항목 문서화 |

### 의존성

| 별칭 | 설명 |
|:---|:---|
| `cga` | 의존성 추가 |
| `cgad` | 개발 의존성 추가 |
| `cgu` | 의존성 업데이트 |
| `cgo` | 오래된 의존성 확인 |
| `cgv` | 의존성 벤더링 |
| `cgtree` | 의존성 트리 표시 |

### 크로스 컴파일

| 별칭 | 설명 |
|:---|:---|
| `cgx` | Zig를 사용하여 빌드 |
| `cgxw` | 크로스 컴파일 |
| `cgxt` | 특정 플랫폼 타겟 |

### 분석 및 프로파일링

| 별칭 | 설명 |
|:---|:---|
| `cgfl` | flamegraph 생성 |
| `cgbl` | 바이너리 크기 분석 |
| `cgl` | 코드 커버리지 |
| `cgm` | 모듈 구조 |
| `cgex` | 매크로 확장 |

### 패키지 관리

| 별칭 | 설명 |
|:---|:---|
| `cgi` | 바이너리 설치 |
| `cgun` | 바이너리 제거 |
| `cgp` | crates.io에 게시 |
| `cgs` | crates.io 검색 |
| `cgcp` | 릴리스 패키지 생성 |

### 고급 빌드

| 별칭 | 설명 |
|:---|:---|
| `cgba` | 모든 타겟 빌드 |
| `cgbt` | 모든 기능과 함께 빌드 |
| `cgbp` | 특정 프로필로 빌드 |

### 프로젝트 템플릿

| 별칭 | 설명 |
|:---|:---|
| `cgnb` | 템플릿에서 새 바이너리 |
| `cgnl` | 템플릿에서 새 라이브러리 |
| `cgnt` | 사용자 정의 템플릿에서 새로 생성 |

### Rustup 업데이트

| 별칭 | 설명 |
|:---|:---|
| `ru` | 모든 툴체인 업데이트 |
| `rus` | stable 툴체인 업데이트 |
| `run` | nightly 툴체인 업데이트 |
| `rti` | 특정 툴체인 설치 |

### 컴포넌트 관리

| 별칭 | 설명 |
|:---|:---|
| `rca` | 컴포넌트 추가 |
| `rcl` | 컴포넌트 나열 |
| `rcr` | 컴포넌트 제거 |

### 툴체인 관리

| 별칭 | 설명 |
|:---|:---|
| `rtl` | 설치된 툴체인 나열 |
| `rtu` | 툴체인 제거 |
| `rde` | 기본 툴체인 설정 |

### 타겟 관리

| 별칭 | 설명 |
|:---|:---|
| `rtaa` | 컴파일 타겟 추가 |
| `rtal` | 사용 가능한 타겟 나열 |
| `rtar` | 컴파일 타겟 제거 |

### 환경 실행

| 별칭 | 설명 |
|:---|:---|
| `rns` | stable로 명령 실행 |
| `rnn` | nightly로 명령 실행 |

### 문서 및 도움말

| 별칭 | 설명 |
|:---|:---|
| `rdo` | Rust 문서 열기 |

### 오버라이드 관리

| 별칭 | 설명 |
|:---|:---|
| `rpr` | 디렉토리 툴체인 설정 |
| `rpl` | 디렉토리 오버라이드 나열 |
| `rpn` | 디렉토리 오버라이드 제거 |

### 툴체인 정보

| 별칭 | 설명 |
|:---|:---|
| `rws` | 활성 rustc 경로 표시 |
| `rsh` | 툴체인 정보 표시 |
