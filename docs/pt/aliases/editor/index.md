---
title: "Aliases de Editor: Atalhos para Seu Editor Favorito"
description: Aliases de shell para editores de texto como Neovim, VS Code, Vim, Nano, Emacs e Sublime Text. Abra arquivos e configurações rapidamente.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Editor: Atalhos para Seu Editor Favorito preview"
canonical: /pt/aliases/editor/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Editor: Atalhos para Seu Editor Favorito"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Editor | Dotfiles
permalink: /pt/aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: aliases editor, neovim, vscode, vim, nano, emacs, aliases shell, dotfiles
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

## Visão Geral

Estes aliases são definidos em `editor.aliases.sh` e trabalham em conjunto com `editor.sh`, que detecta automaticamente o melhor editor disponivel no sistema. Os aliases são carregados automaticamente pelo Chezmoi.

## Referência

### Aliases Universais

| Alias | Descrição |
|-------|-------------|
| `e` | Edição rapida |
| `edit` | Comando de edição padrão |
| `editor` | Comando completo do editor |
| `mate` | Comando estilo TextMate |
| `n` | Alias curto de edição |
| `v` | Alias de edição estilo Vim |

### Neovim

| Alias | Descrição |
|-------|-------------|
| `nvimrc` | Editar configuração Vimscript do Neovim |
| `nvimlua` | Editar configuração Lua do Neovim |
| `nvimconf` | Abrir diretorio de configuração do Neovim |

### VS Code

| Alias | Descrição |
|-------|-------------|
| `vsc` | Atalho para VS Code |
| `vsca` | Adicionar pasta a janela atual |
| `vscd` | Comparar dois arquivos |
| `vscn` | Abrir nova janela |
| `vscr` | Reutilizar janela ao abrir arquivos |
| `vscex` | Instalar extensao do VS Code |
| `vsclist` | Listar extensões instaladas |

### Vim

| Alias | Descrição |
|-------|-------------|
| `vimrc` | Editar configuração do Vim |
| `vimconf` | Abrir diretorio de configuração do Vim |

### Nano

| Alias | Descrição |
|-------|-------------|
| `nanorc` | Editar configuração do Nano |
| `ne` | Nano aprimorado com numeros de linha e scroll suave |

### Emacs

| Alias | Descrição |
|-------|-------------|
| `em` | Atalho para Emacs |
| `emacs-nw` | Rodar Emacs no terminal |
| `emacsc` | Iniciar cliente do Emacs |
| `emacsrc` | Editar configuração do Emacs |
| `et` | Emacs rapido no terminal |

### Edição Rapida de Configurações

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
