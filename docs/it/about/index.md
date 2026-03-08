---
title: Informazioni su Dotfiles
description: La nuova generazione di configurazione shell. Alte prestazioni, sicuro e AI-nativo. Gestito da Chezmoi.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Informazioni su Dotfiles preview
canonical: /it/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Informazioni su Dotfiles
pageType: docs
schemaType: WebPage
metaTitle: Informazioni su Dotfiles - Dotfiles (IT)
permalink: /it/about/
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

Dotfiles v0.2.495 trasforma il tuo terminale in uno spazio di lavoro potente e unificato. A differenza dei dotfiles legacy che si affidano a Makefile complessi o script di symlink, Dotfiles utilizza un approccio basato su template che e atomico, veloce e riproducibile.

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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
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

## Comandi principali

La CLI `dot` offre 53 comandi organizzati per categoria.

### Nucleo

- `dot apply` — applica le modifiche alla configurazione.
- `dot sync` — recupera lo stato più recente del repository e lo applica.
- `dot update` — aggiorna il repository e preriscalda le cache.
- `dot add` — aggiunge nuovi file nel sorgente Chezmoi.
- `dot diff` — mostra le modifiche in sospeso prima dell'applicazione.
- `dot status` — visualizza lo stato dei file gestiti.
- `dot remove` — rimuove un file dalla gestione e cancella la voce sorgente.
- `dot cd` — apre una shell nella directory sorgente di Chezmoi.
- `dot edit` — apre un file gestito nel tuo editor.
- `dot clean-cache` — svuota le cache transitorie.
- `dot prewarm` — precarica le cache per un avvio più veloce della shell.

### Diagnostica

- `dot doctor` — valida percorsi, strumenti e stato della shell.
- `dot heal` — ripara automaticamente lo stato mancante o danneggiato.
- `dot health` — esegue un controllo di salute leggero.
- `dot verify` — verifica l'integrità dei file rispetto al sorgente.
- `dot scorecard` — mostra un punteggio di qualità della configurazione.
- `dot snapshot` — cattura lo stato attuale per confronto successivo.
- `dot smoke-test` — valida le toolchain principali end-to-end.
- `dot chaos` — inietta errori per testare l'auto-riparazione.
- `dot bundle` — esporta un bundle di configurazione portabile.
- `dot rollback` — ripristina uno snapshot precedente.
- `dot drift` — rileva modifiche non autorizzate ai file gestiti.
- `dot history` — mostra il registro cronologico di apply/sync.
- `dot benchmark` — misura il tempo di avvio della shell.
- `dot perf` — profila l'inizializzazione lenta della shell.

### Aspetto

- `dot theme` — cambia lo schema colori del terminale.
- `dot wallpaper` — imposta lo sfondo del desktop (macOS).
- `dot fonts` — installa o aggiorna i Nerd Fonts.
- `dot tune` — regola la densità dell'interfaccia e lo stile del prompt.

### Sicurezza

- `dot backup` — crea backup cifrati della configurazione.
- `dot encrypt-check` — verifica la cifratura dei segreti a riposo.
- `dot firewall` — configura le regole del firewall dell'host.
- `dot telemetry` — controlla la telemetria di utilizzo anonima.
- `dot dns-doh` — abilita DNS-over-HTTPS.
- `dot lock-screen` — blocca immediatamente lo schermo.
- `dot usb-safety` — limita il montaggio automatico di dispositivi USB.

### Segreti

- `dot secrets-init` — inizializza il backend dei segreti (age / GPG).
- `dot secrets` — elenca le voci di segreti cifrati.
- `dot secrets-create` — crea un nuovo segreto cifrato.
- `dot ssh-key` — genera o ruota le coppie di chiavi SSH.
- `dot ssh-cert` — richiede un certificato SSH da una CA.

### IA

- `dot ai` — apre una sessione interattiva di assistente IA.
- `dot ai-setup` — configura le chiavi API per i fornitori di IA.
- `dot ai-query` — invia un prompt singolo a un modello di IA.
- Wrapper di strumenti IA: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Strumenti

- `dot tools` — elenca le sostituzioni CLI incluse e il loro stato.
- `dot new` — crea un nuovo file di alias o funzione.
- `dot sandbox` — apre una shell sandbox usa e getta.
- `dot keys` — mostra le scorciatoie da tastiera attuali.
- `dot learn` — avvia il tutorial interattivo.

### Meta

- `dot upgrade` — aggiorna Dotfiles all'ultima versione.
- `dot packages` — elenca i pacchetti installati gestiti da Dotfiles.
- `dot version` / `dot help` — mostra informazioni su versione o utilizzo.

## Contribuisci

Unisciti alla community. Consulta il nostro [Codice di Condotta][code-of-conduct-url] e le [Linee Guida per Contribuire][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
