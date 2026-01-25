---
title: "Standaardaliassen: Essentiele shell-snelkoppelingen"
description: "Essentiele shell-aliassen voor navigatie, systeembesturing en dagelijkse taken. Vereenvoudig je terminal-workflow met deze universele snelkoppelingen."
lang: nl-NL
metaTitle: "Standaardaliassen | Dotfiles"
permalink: /nl/aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "standaard aliassen, shell aliassen, terminal snelkoppelingen, dotfiles, bash aliassen"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Standaardaliassen | Dotfiles
  - name: twitter:description
    content: Essentiele shell-aliassen voor navigatie, systeembesturing en dagelijkse taken.
  - name: og:title
    content: Standaardaliassen | Dotfiles
  - name: og:description
    content: Essentiele shell-aliassen voor navigatie, systeembesturing en dagelijkse taken.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Standaardaliassen

Essentiele shell-snelkoppelingen voor dagelijkse terminaltaken.

![Dotfiles banner][banner]

## Overzicht

De standaardaliassen bieden een verzameling universele shell-snelkoppelingen die gangbare terminaloperaties stroomlijnen. Deze aliassen zijn gedefinieerd in `default.aliases.sh` en worden automatisch geladen door chezmoi in alle ondersteunde shells.

Deze snelkoppelingen dekken algemene hulpprogramma's, afsluitcommando's, netwerkdiagnostiek, systeembewaking en bestandssysteemnavigatie.

## Referentie

### Algemeen

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Toon huidige datum en tijd |
| `p` | `pwd` | Toon werkmap |
| `path` | `echo ${PATH//:/\\n}` | Toon PATH-variabele op nieuwe regels |
| `r` | `reload` | Herlaad de shell |
| `t` | `tail -f` | Volg bestandsuitvoer in real-time |
| `wk` | `date +%V` | Toon huidig weeknummer |

### Afsluiten en uitschakelen

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `q` | `exit` | Sluit de shell af |
| `quit` | `exit` | Sluit de shell af |
| `bye` | `exit` | Sluit de shell af |
| `:q` | `exit` | Sluit de shell af (vim-stijl) |
| `halt` | `sudo /sbin/halt` | Stop het systeem |
| `poweroff` | `sudo /sbin/shutdown` | Schakel het systeem uit |
| `reboot` | `sudo /sbin/reboot` | Herstart het systeem |

### Geschiedenis

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `h` | `history` | Bekijk commandogeschiedenis |
| `history` | `fc -il 1` | Toon geschiedenis met ISO 8601 tijdstempels |

### Netwerk

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configureer netwerkinterfaces |
| `ipinfo` | `ipconfig getpacket en0` | Haal netwerkparameters op voor en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Toon actieve netwerkluisteraars |
| `op` | `sudo lsof -i -P` | Lijst open poorten |
| `ping` | `ping -c 5` | Ping met 5 pakketlimiet |
| `ports` | `netstat -tulan` | Lijst alle luisterende poorten |

### Systeembewaking

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `top` | `sudo btop` | Interactieve procesmonitor |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Wis ASL-logbestanden |

### Hulpprogramma's

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | Tel bestanden in huidige map |
| `qfind` | `find . -name` | Snelle bestandszoekopdracht |
| `reload` | `exec $SHELL -l` | Herlaad de shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Haal huidig weer op |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
