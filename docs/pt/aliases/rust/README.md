---
description: Os alias de Rust sao uma colecao de alias para `rustup` e `cargo`. Sao projetados para uso com o gerenciador de toolchains `rustup` e o gerenciador de pacotes `cargo`.
lang: pt-PT
metaTitle: Os alias de Rust - Dotfiles (PT)
permalink: /pt/aliases/rust/

meta:
  - name: keywords
    content: aliases, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Os alias de Rust sao uma colecao de alias para `rustup` e `cargo`. Sao projetados para uso com o gerenciador de toolchains `rustup` e o gerenciador de pacotes `cargo`.
  - name: twitter:description
    content: Os alias de Rust sao uma colecao de alias para `rustup` e `cargo`. Sao projetados para uso com o gerenciador de toolchains `rustup` e o gerenciador de pacotes `cargo`.
  - name: twitter:title
    content: Os alias de Rust - Dotfiles (PT)
  - name: og:title
    content: Os alias de Rust - Dotfiles (PT)
  - name: og:description
    content: Os alias de Rust sao uma colecao de alias para `rustup` e `cargo`. Sao projetados para uso com o gerenciador de toolchains `rustup` e o gerenciador de pacotes `cargo`.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Rust

Gerenciar alias de Rust. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `rust.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece um conjunto completo de alias para desenvolvimento Rust
com `cargo` e `rustup`.
#### Comandos basicos
- `cg` - Atalho do Cargo
- `cgn` - Criar novo projeto binario
- `cgni` - Criar novo projeto de biblioteca
- `cginit` - Inicializar projeto no diretorio atual
#### Build e run
- `cgb` - Build debug
- `cgbr` - Build release
- `cgr` - Executar debug
- `cgrr` - Executar release
- `cgw` - Observar e reconstruir
#### Tests e benchmarks
- `cgt` - Executar testes
- `cgtr` - Executar testes em release
- `cgbh` - Executar benchmarks
- `cgta` - Testar todos os targets
- `cgtt` - Testes single-thread
#### Qualidade de codigo
- `cgc` - Checar compilacao
- `cgcl` - Limpar artefatos
- `cgcy` - Rodar clippy
- `cgf` - Formatar codigo
- `cgfa` - Formatar todo o codigo
- `cgfx` - Corrigir problemas automaticamente
- `cgaud` - Checar vulnerabilidades
#### Documentacao
- `cgd` - Build e abrir docs
- `cgdr` - Build de docs release
- `cgdo` - Documentar itens privados
#### Dependencias
- `cga` - Adicionar dependencia
- `cgad` - Adicionar dependencia de desenvolvimento
- `cgu` - Atualizar dependencias
- `cgo` - Ver dependencias desatualizadas
- `cgv` - Vendor de dependencias
- `cgtree` - Mostrar arvore de dependencias
#### Cross-compilation
- `cgx` - Build usando Zig
- `cgxw` - Cross-compilation
- `cgxt` - Target especifico de plataforma
#### Analise e profiling
- `cgfl` - Gerar flamegraph
- `cgbl` - Analise de tamanho do binario
- `cgl` - Cobertura de codigo
- `cgm` - Estrutura de modulos
- `cgex` - Expandir macros
#### Gerenciamento de pacotes
- `cgi` - Instalar binario
- `cgun` - Desinstalar binario
- `cgp` - Publicar no crates.io
- `cgs` - Buscar no crates.io
- `cgcp` - Criar pacote de release
#### Build avancado
- `cgba` - Build de todos os targets
- `cgbt` - Build com todas as features
- `cgbp` - Build com perfil especifico
#### Templates de projeto
- `cgnb` - Novo binario de template
- `cgnl` - Nova biblioteca de template
- `cgnt` - Novo de template custom
#### Atualizacoes e instalacao
- `ru` - Atualizar todas as toolchains
- `rus` - Atualizar toolchain stable
- `run` - Atualizar toolchain nightly
- `rti` - Instalar toolchain especifica
#### Gerenciamento de componentes
- `rca` - Adicionar componente
- `rcl` - Listar componentes
- `rcr` - Remover componente
#### Gerenciamento de toolchain
- `rtl` - Listar toolchains instaladas
- `rtu` - Desinstalar toolchain
- `rde` - Definir toolchain padrao
#### Gerenciamento de targets
- `rtaa` - Adicionar target de compilacao
- `rtal` - Listar targets disponiveis
- `rtar` - Remover target
#### Execucao de ambiente
- `rns` - Rodar comando com stable
- `rnn` - Rodar comando com nightly
#### Documentacao e ajuda
- `rdo` - Abrir documentacao Rust
#### Gerenciamento de overrides
- `rpr` - Definir toolchain para diretorio
- `rpl` - Listar overrides
- `rpn` - Remover override
#### Info de toolchain
- `rws` - Mostrar caminho ativo do rustc
- `rsh` - Mostrar info da toolchain
### Workflows comuns
#### Novo projeto
```bash
# Criar projeto com dependencias comuns
cgn myproject && cd myproject && cga serde && cgad tokio
```
#### Release
```bash
# Checar, testar e buildar release
cgcy && cgt && cgbr && cgaud
```
#### Atualizacao de docs
```bash
# Formatar codigo e atualizar docs
cgfa && cgd && cgdo
```
#### Cross-compilation
```bash
# Checar build para outra arquitetura
cgxw check --target aarch64-unknown-linux-gnu
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
