---
description: De volgende generatie shell-configuratie. Hoge prestaties, veilig en AI-native. Beheerd door Chezmoi.
lang: nl-NL
metaTitle: Over Dotfiles - Dotfiles (NL)
permalink: /nl/about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuratie, automatisering, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: De volgende generatie shell-configuratie. Hoge prestaties, veilig en AI-native. Beheerd door Chezmoi.
  - name: twitter:title
    content: Over Dotfiles
  - name: og:title
    content: Over Dotfiles
  - name: og:description
    content: De volgende generatie shell-configuratie. Hoge prestaties, veilig en AI-native. Beheerd door Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Over Dotfiles

De moderne standaard voor shell-configuratie. Gebouwd op **Chezmoi** voor veilig, cross-platform omgevingsbeheer.

## Ontdek

Dotfiles v0.2.474 transformeert je terminal in een krachtige, uniforme werkruimte. In tegenstelling tot oudere dotfiles die afhankelijk zijn van complexe Makefiles of symlink-scripts, gebruikt Dotfiles een template-gebaseerde aanpak die atomair, snel en reproduceerbaar is.

### Wat is nieuw

- **Moderne Kern** — Hoogwaardige Rust-alternatieven vervangen oudere Unix-tools:
  - **Atuin** voor shell-geschiedenis
  - **Yazi** voor bestandsbeheer
  - **Zellij** voor terminal-multiplexing
  - **Ghostty** voor GPU-versnelde terminal
  - **NeoVim** voor modern bewerken
- **Native Beveiliging** — Volledig native SSH-ondertekening zonder externe agents
- **Interactieve Modus** — Nieuw `dot learn` commando begeleidt je door de functies

## Aan de slag

### Vereisten

- **macOS**, **Linux (Ubuntu/Debian)** of **Windows (WSL)**
- **Curl** en **Git**
- **Chezmoi** (wordt automatisch geinstalleerd)
- **Nerd Font** (voor terminal-iconen)

### Installeren

Voer een enkel commando uit om de volledige suite te installeren:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

De installer zal:

1. De `chezmoi` binary installeren
2. De repository klonen
3. Vereiste pakketten installeren via Homebrew (macOS) of Apt (Linux)
4. Je configuratie toepassen

### Verkennen

Na de installatie herstart je terminal en voer uit:

```bash
dot learn
```

Dit start een interactieve rondleiding door je nieuwe omgeving.

## Aanpassen

Je configuratie bevindt zich in `~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # Shell-ingangspunt
├── dot_config/             # XDG Base Config (~/.config)
│   ├── atuin/              # Shell-geschiedenis
│   ├── ghostty/            # Terminal-emulator
│   ├── git/                # Git-configuratie
│   ├── yazi/               # Bestandsbeheerder
│   ├── zellij/             # Terminal-multiplexer
│   ├── zsh/                # Zsh-configuratie
│   └── shell/              # Gedeelde aliassen en paden
├── provision/              # Levenscyclus-scripts
├── install.sh              # Universele installer
└── docs/                   # Documentatie
```

## Bijdragen

Word lid van de community. Bekijk onze [Gedragscode][code-of-conduct-url] en [Bijdrage-richtlijnen][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
