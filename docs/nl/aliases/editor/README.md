---
title: "Editor-aliassen: Gestroomlijnde tekstbewerking-snelkoppelingen"
description: "Shell-aliassen voor Neovim, VS Code, Vim, Nano, Emacs en Sublime Text. Bewerk bestanden sneller met universele snelkoppelingen."
lang: nl-NL
metaTitle: "Editor-aliassen | Dotfiles"
permalink: /nl/aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: editor aliassen, neovim, vim, vscode, nano, emacs, sublime text, shell snelkoppelingen, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-aliassen voor Neovim, VS Code, Vim, Nano, Emacs en Sublime Text. Bewerk bestanden sneller met universele snelkoppelingen.
  - name: twitter:title
    content: Editor-aliassen | Dotfiles
  - name: og:title
    content: Editor-aliassen | Dotfiles
  - name: og:description
    content: Shell-aliassen voor Neovim, VS Code, Vim, Nano, Emacs en Sublime Text. Bewerk bestanden sneller met universele snelkoppelingen.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Editor-aliassen

Snelkoppelingen voor het starten en configureren van je voorkeursteksteditor.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overzicht

Editor-aliassen bieden een uniforme interface voor tekstbewerking in meerdere applicaties. Gedefinieerd in `editor.aliases.sh` en automatisch geladen door chezmoi, werken deze snelkoppelingen samen met `editor.sh` om de beste beschikbare editor op je systeem te detecteren en configureren.

Het systeem ondersteunt Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text en Atom. Universele aliassen passen zich aan aan welke editor actief is, terwijl gespecialiseerde aliassen editor-specifieke functionaliteit bieden.

## Referentie

### Universele aliassen

Deze aliassen werken met elke editor geconfigureerd door `editor.sh`.

| Alias | Beschrijving |
|-------|-------------|
| `e` | Snel bewerk-commando |
| `edit` | Standaard bewerk-commando |
| `editor` | Volledig editor-commando |
| `mate` | TextMate-stijl commando |
| `n` | Korte bewerk-alias |
| `v` | Vim-achtige bewerk-alias |

### Neovim-aliassen

Beschikbaar wanneer Neovim de primaire editor is.

| Alias | Beschrijving |
|-------|-------------|
| `vi` | Doorgestuurd naar Neovim |
| `vim` | Doorgestuurd naar Neovim |
| `nvimrc` | Bewerk Neovim Vimscript-configuratie |
| `nvimlua` | Bewerk Neovim Lua-configuratie |
| `nvimconf` | Open Neovim-configuratiemap |

### Visual Studio Code-aliassen

Beschikbaar wanneer VS Code is geinstalleerd.

| Alias | Beschrijving |
|-------|-------------|
| `vsc` | Start VS Code |
| `vsca` | Voeg map toe aan huidig venster |
| `vscd` | Vergelijk twee bestanden |
| `vscn` | Open nieuw venster |
| `vscr` | Hergebruik venster bij openen bestanden |

### Vim-aliassen

Beschikbaar wanneer Vim de primaire editor is.

| Alias | Beschrijving |
|-------|-------------|
| `vi` | Doorgestuurd naar Vim |
| `vimrc` | Bewerk Vim-configuratiebestand |
| `vimconf` | Open Vim-configuratiemap |

### Configuratie bewerken

De `editrc` functie biedt snelle toegang tot gangbare configuratiebestanden.

| Commando | Doelbestand |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Neovim init-bestand |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |

### Gebruiksvoorbeelden

```bash
# Snel bewerk een bestand met de standaardeditor
e myfile.txt

# Bewerk configuratiebestanden direct
nvimrc    # Bij gebruik van Neovim (vimscript)
nvimlua   # Bij gebruik van Neovim (lua)
vimrc     # Bij gebruik van Vim

# Bewerk specifieke configuratiebestanden
editrc git    # Bewerk git-configuratie
editrc bash   # Bewerk bash-configuratie
```
