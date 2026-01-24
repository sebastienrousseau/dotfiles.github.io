---
description: Os alias interativos permitem interagir com o shell e o terminal de forma mais interativa.
lang: pt-PT
metaTitle: Alias interativos - Dotfiles (PT)
permalink: /pt/aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: Os alias interativos permitem interagir com o shell e o terminal de forma mais interativa.
  - name: twitter:description
    content: Os alias interativos permitem interagir com o shell e o terminal de forma mais interativa.
  - name: twitter:title
    content: Alias interativos - Dotfiles (PT)
  - name: og:title
    content: Alias interativos - Dotfiles (PT)
  - name: og:description
    content: Os alias interativos permitem interagir com o shell e o terminal de forma mais interativa.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias interativos

Gerenciar alias interativos. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `interactive.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece alias interativos para operacoes comuns no terminal.
Eles adicionam prompts antes de operacoes potencialmente destrutivas.
* `cp` Copiar arquivos e diretorios interativamente (perguntar antes de sobrescrever)
com saida detalhada.
* `del` Remover arquivos/diretorios interativamente (perguntar antes de cada remocao)
com saida detalhada, recursivamente.
* `ln` Criar links simbolicos interativamente (perguntar antes de sobrescrever)
com saida detalhada.
* `mv` Mover/renomear arquivos interativamente (perguntar antes de sobrescrever)
com saida detalhada.
* `rm` Remover arquivos/diretorios interativamente (perguntar antes de cada remocao)
com saida detalhada.
* `zap` Alias para 'rm', remove interativamente (perguntar antes de cada remocao)
com saida detalhada.
### Alias para lixeira
* `bin` Remover todos os arquivos da lixeira (.Trash) de forma forcada e recursiva.
* `chmod` Alterar permissoes com saida detalhada.
* `chown` Alterar proprietario e grupo com saida detalhada.
* `diff` Comparar e mostrar diferencas em formato unificado.
* `grep` Buscar padrao com numeros de linha e sem diferenciar maiusculas.
* `mkdir` Criar diretorio e pais se necessario, com saida detalhada.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
