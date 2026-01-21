---
description: Aliases modernos para Dotfiles
lang: pt-BR
metaTitle: Aliases Modernos - Dotfiles (BR)
permalink: /pt/aliases/modern/
---

# Aliases de Ferramentas Modernas

Gerencie aliases de Ferramentas Modernas. Parte da configuração **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descrição

Esses aliases são definidos em `modern.aliases.sh` e são carregados automaticamente pelo `chezmoi`.
Eles fornecem substituições modernas para ferramentas Unix legadas (baseadas em Rust).

## ⚡ Aliases

### Listagem de Arquivos (eza)

Se `eza` estiver instalado (substituindo `ls`):

- `ls` - Listar arquivos (`eza --icons`)
- `ll` - Lista longa (`eza -alF`)
- `la` - Listar tudo (`eza -a`)
- `lt` - Listar árvore (`eza --tree`)

_(Recorre ao `ls` padrão se `eza` estiver ausente)_

### Conteúdo de Arquivo (bat)

Se `bat` estiver instalado (substituindo `cat`):

- `cat` - Exibir conteúdo de arquivo com destaque de sintaxe

### Pesquisa (rg)

Se `rg` estiver instalado (substituindo `grep`):

- `grep` - Pesquisar com Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
