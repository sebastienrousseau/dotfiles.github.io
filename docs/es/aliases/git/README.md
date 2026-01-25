---
title: "Alias Git: simplifica tu flujo de trabajo de control de versiones"
description: "Más de 80 alias Git para commits, ramas, diffs y remotos más rápidos. Acelera tus tareas diarias."
lang: es-ES
metaTitle: Alias Git | Dotfiles
permalink: /aliases/git/
sidebar: true

meta:
  - name: keywords
    content: alias git, atajos git, git dotfiles, alias git commit, alias git branch, alias git push, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Más de 80 alias Git para commits, ramas, diffs y remotos más rápidos. Acelera tus tareas diarias."
  - name: twitter:title
    content: Alias Git | Dotfiles
  - name: og:title
    content: Alias Git | Dotfiles
  - name: og:description
    content: "Más de 80 alias Git para commits, ramas, diffs y remotos más rápidos. Acelera tus tareas diarias."
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Git

Simplifica tu flujo de control de versiones con atajos potentes.

## Descubrir

Los alias Git crean atajos para comandos Git comunes. Como parte de la configuración [Dotfiles](https://github.com/sebastienrousseau/dotfiles), estos alias se cargan automáticamente mediante Chezmoi.

Definidos en `git.aliases.sh` y `signing.aliases.sh`, los alias están disponibles en cualquier sesión Bash o Zsh una vez instalados.

## Referencia

### Núcleo

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `g` | `git` | Atajo para git |
| `gtp` | `git rev-parse --show-toplevel` | Mostrar el directorio raíz del repositorio |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Mostrar el nombre de la rama actual |
| `gconfl` | `git config --list` | Listar toda la configuración de Git |
| `gconfr` | `git config --local --get remote.origin.url` | Mostrar la URL de origin |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Configurar alias de diff por palabras |

### Área de trabajo

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `ga` | `git add` | Añadir archivos al stage |
| `gaa` | `git add --all` | Añadir todos los cambios |
| `gad` | `git add .` | Añadir todo en el directorio actual |
| `gau` | `git add --update` | Añadir modificaciones y eliminaciones |
| `gcl` | `git clone` | Clonar un repositorio |
| `gin` | `git init` | Inicializar un repositorio Git |
| `gco` | `git checkout` | Cambiar ramas o restaurar archivos |
| `gcb` | `git checkout -b` | Crear y cambiar a una nueva rama |
| `gdis` | `git checkout --` | Descartar cambios en el working tree |
| `grs` | `git restore` | Restaurar archivos del working tree |
| `gmv` | `git mv` | Mover o renombrar un archivo |
| `grm` | `git rm` | Eliminar archivos del repositorio |
| `grmc` | `git rm --cached` | Desindexar un archivo |
| `gst` | `git status` | Mostrar estado del working tree |
| `gsts` | `git status --short` | Estado en formato corto |
| `gstsb` | `git status --short --branch` | Estado corto con rama |
| `gsta` | `git stash save` | Guardar cambios en stash |
| `gstp` | `git stash pop` | Aplicar y eliminar el último stash |
| `gstd` | `git stash drop` | Eliminar el último stash |
| `gclout` | `git clean -df && git checkout -- .` | Descartar cambios y archivos no seguidos |

### Commits

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `gc` | `git commit -a` | Commit de cambios rastreados |
| `gca` | `git commit --amend` | Enmendar el último commit |
| `gcall` | `git add -A && git commit -av` | Staging completo y commit verboso |
| `gcam` | `git commit --amend --message` | Enmendar con nuevo mensaje |
| `gcane` | `git commit --amend --no-edit` | Enmendar sin cambiar mensaje |
| `gcm` | `git commit --message` | Commit con mensaje inline |

### Diff e historial

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `gd` | `git diff` | Mostrar cambios no stagados |
| `gdch` | `git diff --name-status` | Nombres y estado de archivos cambiados |
| `gdh` | `git diff HEAD` | Cambios desde el último commit |
| `gdstaged` | `git diff --staged` | Cambios en stage |
| `gdcached` | `git diff --cached` | Cambios entre índice y HEAD |
| `gdstat` | `git diff --stat --ignore-space-change -r` | Diffstat ignorando espacios |
| `gl` | `git log --since=\"last month\" --oneline` | Log en una línea del último mes |
| `glg` | `git log --graph --all --oneline --decorate` | Log gráfico de todas las ramas |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | Log gráfico completo con color |
| `glc` | `git log --oneline --reverse` | Log cronológico en una línea |
| `gld` | `git log --since=1-day-ago` | Log de las últimas 24 horas |
| `gldc` | `git log -1 --date-order --format=%cI` | Fecha ISO 8601 del último commit |
| `gldl` | `git log --date=local` | Log con fechas en zona local |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` | Nuevos commits tras fetch |
| `gll` | *(formato gráfico decorado)* | Log detallado con autor y estado GPG |

### Ramas

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `gb` | `git branch` | Listar ramas locales |
| `gbd` | `git branch -d` | Eliminar rama fusionada |
| `gbl` | `git branch -l` | Listar ramas por patrón |
| `gbr` | `git branch -r` | Listar ramas remotas |
| `gbrd` | `git branch -d -r` | Eliminar rama remota seguida |
| `gbrsb` | `git show-branch` | Mostrar ramas y commits |
| `gswb` | `git switch` | Cambiar de rama (moderno) |
| `gcode` | `git checkout main && git branch --merged \\| xargs git branch --delete` | Borrar ramas fusionadas en main |
| `gcom` | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Resetear main local a origin/main |

### Remotos y Push/Pull

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `gf` | `git fetch` | Traer del remoto |
| `gp` | `git pull` | Hacer pull del remoto |
| `gph` | `git push` | Hacer push al remoto |
| `gpo` | `git push origin` | Push a origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Push y establecer upstream |
| `gpoll` | `git push origin --all` | Push de todas las ramas a origin |
| `gpull` | `git pull` | Pull del remoto |
| `gpush` | `git push` | Push al remoto |
| `gr` | `git remote` | Gestionar remotos |
| `gra` | `git remote add` | Añadir remoto |
| `grall` | `git remote \\| xargs -L1 git push --all` | Push de todas las ramas a todos los remotos |
| `grao` | `git remote add origin` | Añadir remoto origin |
| `grv` | `git remote -v` | Mostrar URLs de remotos |

### Revert y Reset

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `grev` | `git revert` | Revertir un commit |
| `grevnc` | `git revert --no-commit` | Revertir sin auto-commit |
| `grb` | `git rebase` | Rebasear rama actual |
| `grbk` | `git reset --soft HEAD^` | Deshacer último commit, mantener cambios en stage |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | Hard reset y limpieza |
| `gresh` | `git reset --hard HEAD~1` | Hard reset al commit previo |
| `gresp` | `git reset --hard && git clean -ffdx` | Reset total al estado limpio |
| `gress` | `git reset --soft HEAD~1` | Soft reset (mantiene stage) |

### Submódulos

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `gsm` | `git submodule` | Gestionar submódulos |
| `gsmi` | `git submodule init` | Inicializar submódulos |
| `gsma` | `git submodule add` | Añadir submódulo |
| `gsms` | `git submodule sync` | Sincronizar URLs con .gitmodules |
| `gsmu` | `git submodule update` | Actualizar submódulos |
| `gsmui` | `git submodule update --init` | Actualizar e inicializar |
| `gsmuir` | `git submodule update --init --recursive` | Actualizar, inicializar y recursivo |

### Herramientas

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `gg` | `git grep` | Buscar en el repositorio |
| `gbs` | `git bisect` | Búsqueda binaria de commits |
| `undopush` | `git push -f origin HEAD^:master` | Deshacer el último push a master |

### Firma y seguridad

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `enable-signing` | *(asistente interactivo)* | Configurar firma GPG o SSH de commits |
| `verify-signatures` | `git log --show-signature -n 10` | Verificar firmas de los últimos 10 commits |
| `check-signing` | `git config --list \\| grep \"gpg\\|signing\"` | Comprobar configuración de firma actual |
