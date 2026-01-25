---
title: "Moderne tooling-aliassen: Rust-gebaseerde Unix-vervangingen"
description: "Moderne shell-aliassen voor eza, bat en ripgrep. Vervang verouderde Unix-tools met snellere Rust-gebaseerde alternatieven."
lang: nl-NL
metaTitle: "Moderne tooling-aliassen | Dotfiles"
permalink: /nl/aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: "moderne aliassen, eza, bat, ripgrep, rust cli tools, dotfiles, shell"
---

# Moderne tooling-aliassen

Snellere, slimmere vervangingen voor verouderde Unix-commando's.

## Overzicht

De moderne aliassen gedefinieerd in `modern.aliases.sh` bieden Rust-gebaseerde alternatieven voor traditionele Unix-tools. Deze aliassen worden automatisch geladen door `chezmoi` en vallen terug op standaardcommando's wanneer moderne tools niet beschikbaar zijn.

## Referentie

### Bestandslijsten met eza

Vervangt `ls` wanneer `eza` is geinstalleerd.

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `ls` | `eza --icons` | Toon bestanden met iconen |
| `ll` | `eza -alF` | Lang lijstformaat |
| `la` | `eza -a` | Toon alle bestanden inclusief verborgen |
| `lt` | `eza --tree` | Toon mapboom |

Valt terug op standaard `ls` als `eza` niet is geinstalleerd.

### Bestandsinhoud met bat

Vervangt `cat` wanneer `bat` is geinstalleerd.

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `cat` | `bat` | Toon bestandsinhoud met syntaxmarkering |

### Zoeken met ripgrep

Vervangt `grep` wanneer `rg` is geinstalleerd.

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `grep` | `rg` | Zoek bestandsinhoud met Ripgrep |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
