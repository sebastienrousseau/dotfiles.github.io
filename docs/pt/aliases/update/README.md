---
description: Os alias de Update criam atalhos uteis para atualizar o sistema operacional e o software instalado. Eles ajudam a proteger e melhorar a instalacao atual dos Dotfiles contra vulnerabilidades, adicionando novas funcoes e corrigindo bugs criticos.
lang: pt-PT
metaTitle: Alias de Update - Dotfiles (PT)
permalink: /pt/aliases/update/

meta:
  - name: keywords
    content: aliases, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Os alias de Update criam atalhos uteis para atualizar o sistema operacional e o software instalado. Eles ajudam a proteger e melhorar a instalacao atual dos Dotfiles contra vulnerabilidades, adicionando novas funcoes e corrigindo bugs criticos.
  - name: twitter:description
    content: Os alias de Update criam atalhos uteis para atualizar o sistema operacional e o software instalado. Eles ajudam a proteger e melhorar a instalacao atual dos Dotfiles contra vulnerabilidades, adicionando novas funcoes e corrigindo bugs criticos.
  - name: twitter:title
    content: Alias de Update - Dotfiles (PT)
  - name: og:title
    content: Alias de Update - Dotfiles (PT)
  - name: og:description
    content: Os alias de Update criam atalhos uteis para atualizar o sistema operacional e o software instalado. Eles ajudam a proteger e melhorar a instalacao atual dos Dotfiles contra vulnerabilidades, adicionando novas funcoes e corrigindo bugs criticos.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Update

Gerenciar alias de Update. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `update.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece um conjunto de alias para atualizar diversos softwares no
macOS e Linux.
### macOS
- `upd` atualiza o software do macOS, pacotes Homebrew, Homebrew Casks, apps da Mac
   App Store, toolchain Rust stable, gems Ruby, pacotes Python
   e pacotes Node.js.
### Linux
- `open` abre um arquivo ou URL no app preferido do usuario.
- `pbcopy` copia para a area de transferencia.
- `pbpaste` cola da area de transferencia.
- `upd` atualiza pacotes Linux, limpa cache de pacotes, atualiza pacotes pnpm,
  atualiza toolchain Rust stable, atualiza gems Ruby, atualiza pacotes Python
  e atualiza pacotes Node.js.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
