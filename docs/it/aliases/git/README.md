---
description: Oltre 80 alias shell Git per velocizzare commit, branch, diff, remoti e flussi di lavoro sottomoduli. Scorciatoie Git per Bash e Zsh.
lang: it-IT
metaTitle: Alias Git - Dotfiles (IT)
permalink: /aliases/git/
sidebar: true

meta:
  - name: keywords
    content: alias git, scorciatoie git, dotfiles git, alias commit git, alias branch git, alias push git, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Oltre 80 alias shell Git per velocizzare commit, branch, diff, remoti e flussi di lavoro sottomoduli.
  - name: twitter:title
    content: Alias Git - Dotfiles
  - name: og:title
    content: Alias Git - Dotfiles
  - name: og:description
    content: Oltre 80 alias shell Git per velocizzare commit, branch, diff, remoti e flussi di lavoro sottomoduli.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Git

Alias shell Git che creano scorciatoie per i comandi Git usati frequentemente.

## Panoramica

Questi alias sono definiti in `git.aliases.sh` e `signing.aliases.sh` e caricati automaticamente da Chezmoi. Sono disponibili in qualsiasi sessione Bash o Zsh una volta installati.

## Riferimento

### Core

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `g` | `git` | Abbreviazione per git |
| `gtp` | `git rev-parse --show-toplevel` | Stampa la directory di livello superiore del repository |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Stampa il nome del branch corrente |
| `gconfl` | `git config --list` | Elenca tutte le impostazioni di configurazione Git |

### Area di lavoro

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `ga` | `git add` | Metti in staging i file |
| `gaa` | `git add --all` | Metti in staging tutte le modifiche |
| `gad` | `git add .` | Metti in staging tutto nella directory corrente |
| `gcl` | `git clone` | Clona un repository |
| `gin` | `git init` | Inizializza un nuovo repository Git |
| `gco` | `git checkout` | Cambia branch o ripristina file |
| `gcb` | `git checkout -b` | Crea e passa a un nuovo branch |
| `gst` | `git status` | Mostra lo stato dell'albero di lavoro |
| `gsta` | `git stash save` | Nascondi le modifiche correnti |
| `gstp` | `git stash pop` | Applica e rimuovi l'ultima stash |

### Commit

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `gc` | `git commit -a` | Esegui commit di tutte le modifiche tracciate |
| `gca` | `git commit --amend` | Modifica l'ultimo commit |
| `gcm` | `git commit --message` | Esegui commit con un messaggio in linea |
| `gcane` | `git commit --amend --no-edit` | Modifica commit senza cambiare messaggio |

### Diff e cronologia

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `gd` | `git diff` | Mostra le modifiche non in staging |
| `gdstaged` | `git diff --staged` | Mostra le modifiche in staging |
| `gl` | `git log --since="last month" --oneline` | Log su una riga dell'ultimo mese |
| `glg` | `git log --graph --all --oneline --decorate` | Log grafico di tutti i branch |

### Branch

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `gb` | `git branch` | Elenca i branch locali |
| `gbd` | `git branch -d` | Elimina un branch unito |
| `gbr` | `git branch -r` | Elenca i branch remoti |
| `gswb` | `git switch` | Cambia branch (moderno) |

### Remoti e push/pull

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `gf` | `git fetch` | Recupera dal remoto |
| `gp` | `git pull` | Esegui pull dal remoto |
| `gph` | `git push` | Esegui push sul remoto |
| `gpo` | `git push origin` | Esegui push sull'origine |
| `gr` | `git remote` | Gestisci i remoti |
| `grv` | `git remote -v` | Mostra gli URL remoti |

### Annulla e reset

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `grev` | `git revert` | Annulla un commit |
| `grb` | `git rebase` | Rebase del branch corrente |
| `gresh` | `git reset --hard HEAD~1` | Hard reset al commit precedente |
| `gress` | `git reset --soft HEAD~1` | Soft reset (mantieni modifiche in staging) |

### Sottomoduli

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `gsm` | `git submodule` | Gestisci sottomoduli |
| `gsmi` | `git submodule init` | Inizializza sottomoduli |
| `gsmu` | `git submodule update` | Aggiorna sottomoduli |
| `gsmuir` | `git submodule update --init --recursive` | Aggiorna, inizializza e ricorsivamente i sottomoduli |

### Firma e sicurezza

| Alias | Descrizione |
|-------|-------------|
| `enable-signing` | Configura la firma GPG o SSH dei commit |
| `verify-signatures` | Verifica le firme degli ultimi 10 commit |
| `check-signing` | Controlla la configurazione di firma corrente |
