---
description: Alias shell per Neovim, VS Code, Vim, Nano, Emacs e Sublime Text. Modifica file piu velocemente con scorciatoie universali.
lang: it-IT
metaTitle: Alias Editor - Dotfiles (IT)
permalink: /aliases/editor/
sidebar: true

meta:
  - name: keywords
    content: alias editor, neovim, vim, vscode, nano, emacs, sublime text, scorciatoie shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell per Neovim, VS Code, Vim, Nano, Emacs e Sublime Text. Modifica file piu velocemente con scorciatoie universali.
  - name: twitter:title
    content: Alias Editor - Dotfiles
  - name: og:title
    content: Alias Editor - Dotfiles
  - name: og:description
    content: Alias shell per Neovim, VS Code, Vim, Nano, Emacs e Sublime Text. Modifica file piu velocemente con scorciatoie universali.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Editor

Scorciatoie per avviare e configurare il tuo editor di testo preferito.

## Panoramica

Gli alias editor forniscono un'interfaccia unificata per la modifica di testo su piu applicazioni. Definiti in `editor.aliases.sh` e caricati automaticamente da chezmoi, queste scorciatoie lavorano in armonia con `editor.sh` per rilevare e configurare il miglior editor disponibile sul tuo sistema.

Il sistema supporta Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text e Atom. Gli alias universali si adattano a qualunque editor sia attivo, mentre gli alias specializzati offrono funzionalita specifiche per editor.

## Riferimento

### Alias universali

Questi alias funzionano con qualsiasi editor configurato da `editor.sh`.

| Alias | Descrizione |
|-------|-------------|
| `e` | Comando modifica rapida |
| `edit` | Comando modifica standard |
| `editor` | Comando editor completo |
| `mate` | Comando stile TextMate |
| `n` | Alias modifica breve |
| `v` | Alias modifica tipo Vim |

### Alias Neovim

Disponibili quando Neovim e l'editor principale.

| Alias | Descrizione |
|-------|-------------|
| `vi` | Reindirizzato a Neovim |
| `vim` | Reindirizzato a Neovim |
| `nvimrc` | Modifica configurazione Vimscript Neovim |
| `nvimlua` | Modifica configurazione Lua Neovim |
| `nvimconf` | Apri directory configurazione Neovim |

### Alias Visual Studio Code

Disponibili quando VS Code e installato.

| Alias | Descrizione |
|-------|-------------|
| `vsc` | Avvia VS Code |
| `vsca` | Aggiungi cartella alla finestra corrente |
| `vscd` | Confronta due file |
| `vscn` | Apri nuova finestra |
| `vscr` | Riusa finestra quando si aprono file |

### Modifica configurazione

La funzione `editrc` fornisce accesso rapido ai file di configurazione comuni.

| Comando | File target |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | File init Neovim |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |

### Esempi di utilizzo

```bash
# Modifica rapida un file usando l'editor predefinito
e myfile.txt

# Modifica file di configurazione direttamente
nvimrc    # Quando si usa Neovim (vimscript)
nvimlua   # Quando si usa Neovim (lua)

# Usa VS Code per aprire una cartella in una nuova finestra
vscn ~/projects/my-project

# Modifica file di configurazione specifici
editrc git    # Modifica configurazione git
editrc bash   # Modifica configurazione bash
```
