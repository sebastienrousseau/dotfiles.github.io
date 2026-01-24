---
description: Os alias Find sao projetados para buscar arquivos em uma hierarquia de diretorios e executar acoes sobre os arquivos encontrados.
lang: pt-PT
metaTitle: Alias de Find - Dotfiles (PT)
permalink: /pt/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Os alias Find sao projetados para buscar arquivos em uma hierarquia de diretorios e executar acoes sobre os arquivos encontrados.
  - name: twitter:description
    content: Os alias Find sao projetados para buscar arquivos em uma hierarquia de diretorios e executar acoes sobre os arquivos encontrados.
  - name: twitter:title
    content: Alias de Find - Dotfiles (PT)
  - name: og:title
    content: Alias de Find - Dotfiles (PT)
  - name: og:description
    content: Os alias Find sao projetados para buscar arquivos em uma hierarquia de diretorios e executar acoes sobre os arquivos encontrados.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Find

Gerenciar alias de Find. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `find.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece um conjunto de alias para a utilidade `fd`,
uma alternativa ao `find` em sistemas Unix.
`fd` e uma ferramenta simples, rapida e amigavel para buscar
arquivos e diretorios. Esses alias tornam o uso do `fd` mais facil
com comandos simples e memoraveis.
Alias disponiveis:
- `fd` alias padrao para `fd --color always`, lista com cores.
- `fda` lista arquivos com caminhos absolutos.
- `fdc` busca sem diferenciar maiusculas.
- `fdd` lista arquivos com detalhes.
- `fde` lista arquivos com extensao especifica.
- `fdf` lista arquivos seguindo links simbolicos.
- `fdh` mostra ajuda do `fd`.
- `fdh` lista arquivos, incluindo ocultos.
- `fdn` lista arquivos que combinam com glob.
- `fdo` lista arquivos com informacao do proprietario.
- `fds` lista arquivos com tamanho.
- `fdu` lista arquivos com regras de exclusao.
- `fdv` mostra versao do `fd`.
- `fdx` executa um comando para cada resultado.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
