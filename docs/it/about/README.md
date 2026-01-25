---
description: La nuova generazione di configurazione shell. Alte prestazioni, sicuro e AI-nativo. Gestito da Chezmoi.
lang: it-IT
metaTitle: Informazioni su Dotfiles - Dotfiles (IT)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configurazione, automazione, macos, linux, rust, zellij, shell, terminale
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: La nuova generazione di configurazione shell. Alte prestazioni, sicuro e AI-nativo. Gestito da Chezmoi.
  - name: twitter:title
    content: Informazioni su Dotfiles
  - name: og:title
    content: Informazioni su Dotfiles
  - name: og:description
    content: La nuova generazione di configurazione shell. Alte prestazioni, sicuro e AI-nativo. Gestito da Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Informazioni su Dotfiles

Lo standard moderno per la configurazione shell. Costruito su **Chezmoi** per una gestione sicura e multipiattaforma dell'ambiente.

## Scopri

Dotfiles v0.2.474 trasforma il tuo terminale in uno spazio di lavoro potente e unificato. A differenza dei dotfiles legacy che si affidano a Makefile complessi o script di symlink, Dotfiles utilizza un approccio basato su template che e atomico, veloce e riproducibile.

### Novita

- **Core Moderno** — Alternative Rust ad alte prestazioni sostituiscono gli strumenti Unix legacy:
  - **Atuin** per la cronologia della shell
  - **Yazi** per la gestione file
  - **Zellij** per il multiplexing del terminale
  - **Ghostty** per terminale con accelerazione GPU
  - **NeoVim** per editing moderno
- **Sicurezza Nativa** — Firma SSH completamente nativa senza agenti di terze parti
- **Modalita Interattiva** — Nuovo comando `dot learn` che ti guida attraverso le funzionalita

## Inizia

### Requisiti

- **macOS**, **Linux (Ubuntu/Debian)**, o **Windows (WSL)**
- **Curl** e **Git**
- **Chezmoi** (installato automaticamente)
- **Nerd Font** (per le icone del terminale)

### Installa

Esegui un singolo comando per installare l'intera suite:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

L'installer:

1. Installa il binario `chezmoi`
2. Clona il repository
3. Installa i pacchetti richiesti tramite Homebrew (macOS) o Apt (Linux)
4. Applica la tua configurazione

### Esplora

Dopo l'installazione, riavvia il terminale ed esegui:

```bash
dot learn
```

Questo avvia un tour interattivo del tuo nuovo ambiente.

## Personalizza

La tua configurazione risiede in `~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # Punto di ingresso shell
├── dot_config/             # XDG Base Config (~/.config)
│   ├── atuin/              # Cronologia shell
│   ├── ghostty/            # Emulatore terminale
│   ├── git/                # Configurazione Git
│   ├── yazi/               # File manager
│   ├── zellij/             # Multiplexer terminale
│   ├── zsh/                # Configurazione Zsh
│   └── shell/              # Alias e percorsi condivisi
├── provision/              # Script del ciclo di vita
├── install.sh              # Installer universale
└── docs/                   # Documentazione
```

## Contribuisci

Unisciti alla community. Consulta il nostro [Codice di Condotta][code-of-conduct-url] e le [Linee Guida per Contribuire][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
