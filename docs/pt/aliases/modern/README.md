---
description: alias modernos para Dotfiles
lang: pt-PT
metaTitle: alias modernos - Dotfiles
permalink: /pt/aliases/modern/
---
# Alias de Modern Tooling

Gerenciar alias Modern Tooling. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `modern.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.
Eles fornecem substituicoes modernas para ferramentas Unix legadas (Rust).

## ⚡ Alias

### File Listing (eza)
Se `eza` estiver instalado (substitui `ls`):
- `ls` - Listar arquivos (`eza --icons`)
- `ll` - Lista longa (`eza -alF`)
- `la` - Listar tudo (`eza -a`)
- `lt` - Arvore (`eza --tree`)

*(Usa `ls` padrao se `eza` nao estiver instalado)*

### File Content (bat)
Se `bat` estiver instalado (substitui `cat`):
- `cat` - Mostrar conteudo com syntax highlight

### Searching (rg)
Se `rg` estiver instalado (substitui `grep`):
- `grep` - Busca com Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
