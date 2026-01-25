---
title: "Git-aliassen: Stroomlijn je versiebeheer-workflow"
description: "Meer dan 80 Git shell-aliassen voor snellere commits, branches, diffs en remotes. Versnel je dagelijkse versiebeheer-taken."
lang: nl-NL
metaTitle: Git-aliassen | Dotfiles
permalink: /nl/aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git aliassen, git snelkoppelingen, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Meer dan 80 Git shell-aliassen voor snellere commits, branches, diffs en remotes. Versnel je dagelijkse versiebeheer-taken."
  - name: twitter:title
    content: Git-aliassen | Dotfiles
  - name: og:title
    content: Git-aliassen | Dotfiles
  - name: og:description
    content: "Meer dan 80 Git shell-aliassen voor snellere commits, branches, diffs en remotes. Versnel je dagelijkse versiebeheer-taken."
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Git-aliassen

Stroomlijn je versiebeheer-workflow met krachtige snelkoppelingen.

## Overzicht

Git-aliassen maken snelkoppelingen voor veelgebruikte Git-commando's. Onderdeel van de [Dotfiles](https://github.com/sebastienrousseau/dotfiles) configuratie, worden deze aliassen automatisch geladen via Chezmoi.

Gedefinieerd in `git.aliases.sh` en `signing.aliases.sh`, zijn de aliassen beschikbaar in elke Bash- of Zsh-sessie na installatie.

## Referentie

### Kern

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `g` | `git` | Afkorting voor git |
| `gtp` | `git rev-parse --show-toplevel` | Print de top-level map van de repository |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Print de huidige branchnaam |
| `gconfl` | `git config --list` | Toon alle Git config-instellingen |
| `gconfr` | `git config --local --get remote.origin.url` | Print de remote origin URL |

### Werkgebied

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `ga` | `git add` | Stage bestanden |
| `gaa` | `git add --all` | Stage alle wijzigingen (getraceerd en ongetraceerd) |
| `gad` | `git add .` | Stage alles in de huidige map |
| `gau` | `git add --update` | Stage wijzigingen en verwijderingen (geen nieuwe bestanden) |
| `gcl` | `git clone` | Kloon een repository |
| `gin` | `git init` | Initialiseer een nieuwe Git-repository |
| `gco` | `git checkout` | Wissel van branch of herstel werkboom-bestanden |
| `gcb` | `git checkout -b` | Maak en wissel naar een nieuwe branch |
| `gst` | `git status` | Toon werkboomstatus |
| `gsts` | `git status --short` | Status in kort formaat |
| `gsta` | `git stash save` | Stash huidige wijzigingen |
| `gstp` | `git stash pop` | Pas toe en verwijder de laatste stash |

### Commits

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `gc` | `git commit -a` | Commit alle getraceerde wijzigingen |
| `gca` | `git commit --amend` | Wijzig de laatste commit |
| `gcall` | `git add -A && git commit -av` | Stage alles en commit uitgebreid |
| `gcam` | `git commit --amend --message` | Wijzig commit met een nieuw bericht |
| `gcane` | `git commit --amend --no-edit` | Wijzig commit zonder het bericht te veranderen |
| `gcm` | `git commit --message` | Commit met een inline-bericht |

### Diff en geschiedenis

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `gd` | `git diff` | Toon niet-gestaged wijzigingen |
| `gdch` | `git diff --name-status` | Toon namen en status van gewijzigde bestanden |
| `gdh` | `git diff HEAD` | Toon alle wijzigingen sinds de laatste commit |
| `gdstaged` | `git diff --staged` | Toon gestaged wijzigingen |
| `gl` | `git log --since="last month" --oneline` | Eenregelige log van de afgelopen maand |
| `glg` | `git log --graph --all --oneline --decorate` | Grafieklog van alle branches |

### Branches

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `gb` | `git branch` | Toon lokale branches |
| `gbd` | `git branch -d` | Verwijder een gemergte branch |
| `gbr` | `git branch -r` | Toon remote branches |
| `gswb` | `git switch` | Wissel van branch (modern) |

### Remotes en push/pull

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `gf` | `git fetch` | Fetch van remote |
| `gp` | `git pull` | Pull van remote |
| `gph` | `git push` | Push naar remote |
| `gpo` | `git push origin` | Push naar origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Push en stel upstream in voor huidige branch |
| `gr` | `git remote` | Beheer remotes |
| `gra` | `git remote add` | Voeg een nieuwe remote toe |
| `grv` | `git remote -v` | Toon remote URL's |

### Revert en reset

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `grev` | `git revert` | Maak een commit ongedaan |
| `grb` | `git rebase` | Rebase huidige branch |
| `grbk` | `git reset --soft HEAD^` | Maak laatste commit ongedaan, behoud wijzigingen gestaged |
| `gresh` | `git reset --hard HEAD~1` | Hard reset naar vorige commit |
| `gress` | `git reset --soft HEAD~1` | Soft reset (behoud wijzigingen gestaged) |

### Submodules

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `gsm` | `git submodule` | Beheer submodules |
| `gsmi` | `git submodule init` | Initialiseer submodules |
| `gsma` | `git submodule add` | Voeg een submodule toe |
| `gsmu` | `git submodule update` | Werk submodules bij |
| `gsmuir` | `git submodule update --init --recursive` | Werk bij, initialiseer en recurse submodules |

### Ondertekening en beveiliging

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `enable-signing` | *(interactieve wizard)* | Configureer GPG of SSH commit-ondertekening |
| `verify-signatures` | `git log --show-signature -n 10` | Verifieer handtekeningen van de laatste 10 commits |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Controleer huidige ondertekeningsconfiguratie |
