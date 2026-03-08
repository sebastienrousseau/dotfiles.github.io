---
title: "Aliases Git de Shell: Atalhos para Comandos Git do Dia a Dia"
description: Aliases Git de shell para Dotfiles. Mais de 80 comandos abreviados para acelerar commits, branches, diffs, remotos e fluxos de submodulos.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases Git de Shell: Atalhos para Comandos Git do Dia a Dia preview"
canonical: /pt/aliases/git/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases Git de Shell: Atalhos para Comandos Git do Dia a Dia"
pageType: docs
schemaType: WebPage
metaTitle: Aliases Git de Shell - Dotfiles (PT)
permalink: /pt/aliases/git/
sidebar: true
meta:
  - name: keywords
    content: alias git shell, atalhos git, git dotfiles, alias commit git, alias branch git, alias push git, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases Git de shell para Dotfiles. Mais de 80 comandos abreviados para acelerar commits, branches, diffs, remotos e fluxos de submodulos.
  - name: twitter:title
    content: Aliases Git de Shell - Dotfiles (PT)
  - name: og:title
    content: Aliases Git de Shell - Dotfiles (PT)
  - name: og:description
    content: Aliases Git de shell para Dotfiles. Mais de 80 comandos abreviados para acelerar commits, branches, diffs, remotos e fluxos de submodulos.
  - name: og:image:alt
    content: Dotfiles - Projetado para se adaptar a sua vida no shell
  - name: og:locale
    content: pt_BR
---

# Aliases Git de Shell

Aliases Git de shell que criam atalhos para comandos Git frequentemente usados.

## Visão Geral

Estes aliases estão definidos em `git.aliases.sh` e `signing.aliases.sh` e estão disponíveis em qualquer sessão Bash ou Zsh apos a instalacao. Carregados automaticamente pelo Chezmoi.

## Referência

### Núcleo

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `g` | `git` | Forma abreviada de git |
| `gtp` | `git rev-parse --show-toplevel` | Mostrar o diretorio raiz do repositorio |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Mostrar o nome do branch atual |
| `gconfl` | `git config --list` | Listar todas as configurações do Git |
| `gconfr` | `git config --local --get remote.origin.url` | Mostrar a URL do remote origin |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Configurar diff colorido por palavras |

### Area de Trabalho

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `ga` | `git add` | Preparar arquivos |
| `gaa` | `git add --all` | Preparar todas as alterações |
| `gad` | `git add .` | Preparar tudo no diretorio atual |
| `gau` | `git add --update` | Preparar modificações e exclusões |
| `gcl` | `git clone` | Clonar um repositorio |
| `gin` | `git init` | Inicializar um novo repositorio Git |
| `gco` | `git checkout` | Mudar de branch ou restaurar arquivos |
| `gcb` | `git checkout -b` | Criar e mudar para um novo branch |
| `gst` | `git status` | Mostrar estado da arvore de trabalho |
| `gsts` | `git status --short` | Estado em formato curto |
| `gsta` | `git stash save` | Guardar alterações no stash |
| `gstp` | `git stash pop` | Aplicar e remover o ultimo stash |

### Commits

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `gc` | `git commit -a` | Fazer commit de todas as alterações rastreadas |
| `gca` | `git commit --amend` | Alterar o ultimo commit |
| `gcall` | `git add -A && git commit -av` | Preparar tudo e fazer commit detalhado |
| `gcam` | `git commit --amend --message` | Alterar commit com nova mensagem |
| `gcane` | `git commit --amend --no-edit` | Alterar commit sem mudar a mensagem |
| `gcm` | `git commit --message` | Commit com mensagem em linha |

### Diff e Historico

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `gd` | `git diff` | Mostrar alterações não preparadas |
| `gdch` | `git diff --name-status` | Mostrar nomes e estado de arquivos modificados |
| `gdh` | `git diff HEAD` | Mostrar todas as alterações desde o ultimo commit |
| `gdstaged` | `git diff --staged` | Mostrar alterações preparadas |
| `gl` | `git log --since="last month" --oneline` | Log de uma linha do ultimo mes |
| `glg` | `git log --graph --all --oneline --decorate` | Log grafico de todos os branches |
| `glc` | `git log --oneline --reverse` | Log cronologico de uma linha |
| `gld` | `git log --since=1-day-ago` | Log das ultimas 24 horas |

### Branches

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `gb` | `git branch` | Listar branches locais |
| `gbd` | `git branch -d` | Excluir um branch mesclado |
| `gbl` | `git branch -l` | Listar branches por padrão |
| `gbr` | `git branch -r` | Listar branches remotos |
| `gswb` | `git switch` | Mudar de branch (moderno) |

### Remotos e Push/Pull

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `gf` | `git fetch` | Buscar do remoto |
| `gp` | `git pull` | Puxar do remoto |
| `gph` | `git push` | Enviar ao remoto |
| `gpo` | `git push origin` | Enviar para origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Enviar e definir upstream |
| `gr` | `git remote` | Gerenciar remotos |
| `gra` | `git remote add` | Adicionar um novo remoto |
| `grv` | `git remote -v` | Mostrar URLs dos remotos |

### Reverter e Redefinir

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `grev` | `git revert` | Reverter um commit |
| `grb` | `git rebase` | Rebasear o branch atual |
| `grbk` | `git reset --soft HEAD^` | Desfazer ultimo commit, manter alterações |
| `gresh` | `git reset --hard HEAD~1` | Hard reset para o commit anterior |
| `gress` | `git reset --soft HEAD~1` | Soft reset (manter alterações preparadas) |

### Submodulos

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `gsm` | `git submodule` | Gerenciar submodulos |
| `gsmi` | `git submodule init` | Inicializar submodulos |
| `gsma` | `git submodule add` | Adicionar um submodulo |
| `gsms` | `git submodule sync` | Sincronizar URLs de submodulos |
| `gsmu` | `git submodule update` | Atualizar submodulos |
| `gsmuir` | `git submodule update --init --recursive` | Atualizar, inicializar e recursar |

### Ferramentas

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `gg` | `git grep` | Pesquisar no conteudo do repositorio |
| `gbs` | `git bisect` | Busca binaria por commit com bug |

### Assinatura e Seguranca

| Alias | Comando | Descrição |
|-------|---------|-----------|
| `enable-signing` | *(assistente interativo)* | Configurar assinatura de commits GPG ou SSH |
| `verify-signatures` | `git log --show-signature -n 10` | Verificar assinaturas dos ultimos 10 commits |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Verificar configuração de assinatura atual |
