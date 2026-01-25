---
title: "Aliases de Rust: Atalhos para Cargo e Rustup"
description: "Aliases de shell para desenvolvimento Rust. Atalhos completos para cargo build, test, run e gerenciamento de toolchains rustup."
lang: pt-BR
metaTitle: "Aliases de Rust | Dotfiles"
permalink: /pt/aliases/rust/
sidebar: true
meta:
  - name: keywords
    content: "aliases rust, cargo, rustup, aliases shell, dotfiles"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para desenvolvimento Rust. Atalhos completos para cargo e rustup.
  - name: twitter:title
    content: Aliases de Rust | Dotfiles
  - name: og:title
    content: Aliases de Rust | Dotfiles
  - name: og:description
    content: Aliases de shell para desenvolvimento Rust. Atalhos completos para cargo e rustup.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Rust

Atalhos completos para desenvolvimento Rust com cargo e rustup.

## Visao Geral

Estes aliases sao definidos em `rust.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Comandos Basicos

| Alias | Descricao |
|-------|-------------|
| `cg` | Atalho do Cargo |
| `cgn` | Criar novo projeto binario |
| `cgni` | Criar novo projeto de biblioteca |
| `cginit` | Inicializar projeto no diretorio atual |

### Build e Run

| Alias | Descricao |
|-------|-------------|
| `cgb` | Build debug |
| `cgbr` | Build release |
| `cgr` | Executar debug |
| `cgrr` | Executar release |
| `cgw` | Observar e reconstruir |

### Testes e Benchmarks

| Alias | Descricao |
|-------|-------------|
| `cgt` | Executar testes |
| `cgtr` | Executar testes em release |
| `cgbh` | Executar benchmarks |
| `cgta` | Testar todos os targets |
| `cgtt` | Testes single-thread |

### Qualidade de Codigo

| Alias | Descricao |
|-------|-------------|
| `cgc` | Checar compilacao |
| `cgcl` | Limpar artefatos |
| `cgcy` | Rodar clippy |
| `cgf` | Formatar codigo |
| `cgfa` | Formatar todo o codigo |
| `cgfx` | Corrigir problemas automaticamente |
| `cgaud` | Checar vulnerabilidades |

### Dependencias

| Alias | Descricao |
|-------|-------------|
| `cga` | Adicionar dependencia |
| `cgad` | Adicionar dependencia de desenvolvimento |
| `cgu` | Atualizar dependencias |
| `cgo` | Ver dependencias desatualizadas |
| `cgtree` | Mostrar arvore de dependencias |

### Rustup

| Alias | Descricao |
|-------|-------------|
| `ru` | Atualizar todas as toolchains |
| `rus` | Atualizar toolchain stable |
| `run` | Atualizar toolchain nightly |
| `rti` | Instalar toolchain especifica |
| `rca` | Adicionar componente |
| `rcl` | Listar componentes |
| `rtl` | Listar toolchains instaladas |
| `rdo` | Abrir documentacao Rust |
