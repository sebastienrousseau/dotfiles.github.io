---
description: Die PS-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `ps` CLI-Tool erleichtern. Ps zeigt eine Momentaufnahme der laufenden Prozesse.
lang: de-DE
metaTitle: Die PS-Aliase - Dotfiles (DE)
permalink: /de/aliases/ps/

meta:
  - name: keywords
    content: aliases, ps, process, processes, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die PS-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `ps` CLI-Tool erleichtern. Ps zeigt eine Momentaufnahme der laufenden Prozesse.
  - name: twitter:description
    content: Die PS-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `ps` CLI-Tool erleichtern. Ps zeigt eine Momentaufnahme der laufenden Prozesse.
  - name: twitter:title
    content: Die PS-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die PS-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die PS-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `ps` CLI-Tool erleichtern. Ps zeigt eine Momentaufnahme der laufenden Prozesse.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Ps-Aliase

Ps-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `ps.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code stellt eine Reihe von Aliasen fuer
[ps](https://www.gnu.org/software/ps/) bereit.
- `pid` UID, PID, Parent PID, CPU-Usage, Startzeit, TTY, CPU-Zeit und Befehl anzeigen.
- `ps` Alle Prozesse anzeigen.
- `psa` Alle Prozesse auflisten.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
