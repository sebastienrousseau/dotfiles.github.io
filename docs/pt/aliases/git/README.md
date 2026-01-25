---
title: "Aliases Git de Shell: Atalhos para Comandos Git do Dia a Dia"
description: "Aliases Git de shell para Dotfiles. Mais de 80 comandos abreviados para acelerar commits, branches, diffs, remotos e fluxos de submodulos."
lang: pt-BR
metaTitle: Aliases Git de Shell - Dotfiles (PT)
permalink: /pt/aliases/git/
sidebar: true

meta:
  - name: keywords
    content: alias git shell, atalhos git, git dotfiles, alias commit git, alias branch git, alias push git, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Aliases Git de shell para Dotfiles. Mais de 80 comandos abreviados para acelerar commits, branches, diffs, remotos e fluxos de submodulos."
  - name: twitter:title
    content: Aliases Git de Shell - Dotfiles (PT)
  - name: og:title
    content: Aliases Git de Shell - Dotfiles (PT)
  - name: og:description
    content: "Aliases Git de shell para Dotfiles. Mais de 80 comandos abreviados para acelerar commits, branches, diffs, remotos e fluxos de submodulos."
  - name: og:image:alt
    content: Dotfiles - Projetado para se adaptar a sua vida no shell
  - name: og:locale
    content: pt_BR
---

# Aliases Git de Shell

Aliases Git de shell que criam atalhos para comandos Git frequentemente usados.

## Visao Geral

Estes aliases estao definidos em `git.aliases.sh` e `signing.aliases.sh` e estao disponiveis em qualquer sessao Bash ou Zsh apos a instalacao. Carregados automaticamente pelo Chezmoi.

## Referencia

### Nucleo

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `g` | `git` | Forma abreviada de git |
| `gtp` | `git rev-parse --show-toplevel` | Mostrar o diretorio raiz do repositorio |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Mostrar o nome do branch atual |
| `gconfl` | `git config --list` | Listar todas as configuracoes do Git |
| `gconfr` | `git config --local --get remote.origin.url` | Mostrar a URL do remote origin |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Configurar diff colorido por palavras |

### Area de Trabalho

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `ga` | `git add` | Preparar arquivos |
| `gaa` | `git add --all` | Preparar todas as alteracoes |
| `gad` | `git add .` | Preparar tudo no diretorio atual |
| `gau` | `git add --update` | Preparar modificacoes e exclusoes |
| `gcl` | `git clone` | Clonar um repositorio |
| `gin` | `git init` | Inicializar um novo repositorio Git |
| `gco` | `git checkout` | Mudar de branch ou restaurar arquivos |
| `gcb` | `git checkout -b` | Criar e mudar para um novo branch |
| `gst` | `git status` | Mostrar estado da arvore de trabalho |
| `gsts` | `git status --short` | Estado em formato curto |
| `gsta` | `git stash save` | Guardar alteracoes no stash |
| `gstp` | `git stash pop` | Aplicar e remover o ultimo stash |

### Commits

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `gc` | `git commit -a` | Fazer commit de todas as alteracoes rastreadas |
| `gca` | `git commit --amend` | Alterar o ultimo commit |
| `gcall` | `git add -A && git commit -av` | Preparar tudo e fazer commit detalhado |
| `gcam` | `git commit --amend --message` | Alterar commit com nova mensagem |
| `gcane` | `git commit --amend --no-edit` | Alterar commit sem mudar a mensagem |
| `gcm` | `git commit --message` | Commit com mensagem em linha |

### Diff e Historico

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `gd` | `git diff` | Mostrar alteracoes nao preparadas |
| `gdch` | `git diff --name-status` | Mostrar nomes e estado de arquivos modificados |
| `gdh` | `git diff HEAD` | Mostrar todas as alteracoes desde o ultimo commit |
| `gdstaged` | `git diff --staged` | Mostrar alteracoes preparadas |
| `gl` | `git log --since="last month" --oneline` | Log de uma linha do ultimo mes |
| `glg` | `git log --graph --all --oneline --decorate` | Log grafico de todos os branches |
| `glc` | `git log --oneline --reverse` | Log cronologico de uma linha |
| `gld` | `git log --since=1-day-ago` | Log das ultimas 24 horas |

### Branches

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `gb` | `git branch` | Listar branches locais |
| `gbd` | `git branch -d` | Excluir um branch mesclado |
| `gbl` | `git branch -l` | Listar branches por padrao |
| `gbr` | `git branch -r` | Listar branches remotos |
| `gswb` | `git switch` | Mudar de branch (moderno) |

### Remotos e Push/Pull

| Alias | Comando | Descricao |
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

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `grev` | `git revert` | Reverter um commit |
| `grb` | `git rebase` | Rebasear o branch atual |
| `grbk` | `git reset --soft HEAD^` | Desfazer ultimo commit, manter alteracoes |
| `gresh` | `git reset --hard HEAD~1` | Hard reset para o commit anterior |
| `gress` | `git reset --soft HEAD~1` | Soft reset (manter alteracoes preparadas) |

### Submodulos

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `gsm` | `git submodule` | Gerenciar submodulos |
| `gsmi` | `git submodule init` | Inicializar submodulos |
| `gsma` | `git submodule add` | Adicionar um submodulo |
| `gsms` | `git submodule sync` | Sincronizar URLs de submodulos |
| `gsmu` | `git submodule update` | Atualizar submodulos |
| `gsmuir` | `git submodule update --init --recursive` | Atualizar, inicializar e recursar |

### Ferramentas

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `gg` | `git grep` | Pesquisar no conteudo do repositorio |
| `gbs` | `git bisect` | Busca binaria por commit com bug |

### Assinatura e Seguranca

| Alias | Comando | Descricao |
|-------|---------|-----------|
| `enable-signing` | *(assistente interativo)* | Configurar assinatura de commits GPG ou SSH |
| `verify-signatures` | `git log --show-signature -n 10` | Verificar assinaturas dos ultimos 10 commits |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Verificar configuracao de assinatura atual |
