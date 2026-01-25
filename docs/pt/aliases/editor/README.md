---
title: "Aliases de Editor: Atalhos para Seu Editor Favorito"
description: "Aliases de shell para editores de texto como Neovim, VS Code, Vim, Nano, Emacs e Sublime Text. Abra arquivos e configuracoes rapidamente."
lang: pt-BR
metaTitle: "Aliases de Editor | Dotfiles"
permalink: /pt/aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: "aliases editor, neovim, vscode, vim, nano, emacs, aliases shell, dotfiles"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para editores de texto como Neovim, VS Code, Vim, Nano, Emacs e Sublime Text.
  - name: twitter:title
    content: Aliases de Editor | Dotfiles
  - name: og:title
    content: Aliases de Editor | Dotfiles
  - name: og:description
    content: Aliases de shell para editores de texto como Neovim, VS Code, Vim, Nano, Emacs e Sublime Text.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Editor

Abra seu editor favorito com atalhos simples.

## Visao Geral

Estes aliases sao definidos em `editor.aliases.sh` e trabalham em conjunto com `editor.sh`, que detecta automaticamente o melhor editor disponivel no sistema. Os aliases sao carregados automaticamente pelo Chezmoi.

## Referencia

### Aliases Universais

| Alias | Descricao |
|-------|-------------|
| `e` | Edicao rapida |
| `edit` | Comando de edicao padrao |
| `editor` | Comando completo do editor |
| `mate` | Comando estilo TextMate |
| `n` | Alias curto de edicao |
| `v` | Alias de edicao estilo Vim |

### Neovim

| Alias | Descricao |
|-------|-------------|
| `nvimrc` | Editar configuracao Vimscript do Neovim |
| `nvimlua` | Editar configuracao Lua do Neovim |
| `nvimconf` | Abrir diretorio de configuracao do Neovim |

### VS Code

| Alias | Descricao |
|-------|-------------|
| `vsc` | Atalho para VS Code |
| `vsca` | Adicionar pasta a janela atual |
| `vscd` | Comparar dois arquivos |
| `vscn` | Abrir nova janela |
| `vscr` | Reutilizar janela ao abrir arquivos |
| `vscex` | Instalar extensao do VS Code |
| `vsclist` | Listar extensoes instaladas |

### Vim

| Alias | Descricao |
|-------|-------------|
| `vimrc` | Editar configuracao do Vim |
| `vimconf` | Abrir diretorio de configuracao do Vim |

### Nano

| Alias | Descricao |
|-------|-------------|
| `nanorc` | Editar configuracao do Nano |
| `ne` | Nano aprimorado com numeros de linha e scroll suave |

### Emacs

| Alias | Descricao |
|-------|-------------|
| `em` | Atalho para Emacs |
| `emacs-nw` | Rodar Emacs no terminal |
| `emacsc` | Iniciar cliente do Emacs |
| `emacsrc` | Editar configuracao do Emacs |
| `et` | Emacs rapido no terminal |

### Edicao Rapida de Configuracoes

Use a funcao `editrc` para editar arquivos comuns:

```bash
editrc bash     # Editar ~/.bashrc
editrc zsh      # Editar ~/.zshrc
editrc vim      # Editar ~/.vimrc
editrc nvim     # Editar init do Neovim
editrc tmux     # Editar ~/.tmux.conf
editrc git      # Editar ~/.gitconfig
editrc ssh      # Editar ~/.ssh/config
```
