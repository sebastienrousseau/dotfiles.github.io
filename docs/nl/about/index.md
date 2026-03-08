---
title: Over Dotfiles
description: De volgende generatie shell-configuratie. Hoge prestaties, veilig en AI-native. Beheerd door Chezmoi.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Over Dotfiles preview
canonical: /nl/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Over Dotfiles
pageType: docs
schemaType: WebPage
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

Dotfiles v0.2.495 transformeert je terminal in een krachtige, uniforme werkruimte. In tegenstelling tot oudere dotfiles die afhankelijk zijn van complexe Makefiles of symlink-scripts, gebruikt Dotfiles een template-gebaseerde aanpak die atomair, snel en reproduceerbaar is.

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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
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

## Kerncommando's

De `dot`-CLI biedt 53 opdrachten, georganiseerd per categorie.

### Kern

- `dot apply` — past configuratiewijzigingen toe.
- `dot sync` — haalt de nieuwste repositorystatus op en past deze toe.
- `dot update` — werkt de repository bij en warmt caches op.
- `dot add` — voegt nieuwe bestanden toe aan de Chezmoi-bron.
- `dot diff` — toont openstaande wijzigingen vóór toepassing.
- `dot status` — toont de status van beheerde bestanden.
- `dot remove` — verwijdert een bestand uit beheer en wist de bronvermelding.
- `dot cd` — opent een shell in de Chezmoi-bronmap.
- `dot edit` — opent een beheerd bestand in uw editor.
- `dot clean-cache` — wist tijdelijke caches.
- `dot prewarm` — vult caches vooraf voor snellere shellstart.

### Diagnostiek

- `dot doctor` — valideert paden, tools en shellstatus.
- `dot heal` — repareert ontbrekende of defecte status automatisch.
- `dot health` — voert een lichtgewicht gezondheidscontrole uit.
- `dot verify` — controleert bestandsintegriteit tegen de bron.
- `dot scorecard` — toont een configuratiekwaliteitsscore.
- `dot snapshot` — legt de huidige status vast voor latere vergelijking.
- `dot smoke-test` — valideert kerntoolchains volledig.
- `dot chaos` — injecteert fouten om zelfherstel te testen.
- `dot bundle` — exporteert een draagbaar configuratiepakket.
- `dot rollback` — keert terug naar een eerder snapshot.
- `dot drift` — detecteert onverwachte wijzigingen aan beheerde bestanden.
- `dot history` — toont het apply/sync-geschiedenislogboek.
- `dot benchmark` — meet de shellstarttijd.
- `dot perf` — profileert trage shellinitialisatie.

### Uiterlijk

- `dot theme` — wisselt het kleurenschema van de terminal.
- `dot wallpaper` — stelt het bureaublad achtergrondafbeelding in (macOS).
- `dot fonts` — installeert of werkt Nerd Fonts bij.
- `dot tune` — past UI-dichtheid en promptstijl aan.

### Beveiliging

- `dot backup` — maakt versleutelde configuratieback-ups.
- `dot encrypt-check` — verifieert geheimversleuteling in rust.
- `dot firewall` — configureert host-firewallregels.
- `dot telemetry` — beheert anonieme gebruikstelemetrie.
- `dot dns-doh` — schakelt DNS-over-HTTPS in.
- `dot lock-screen` — vergrendelt het scherm onmiddellijk.
- `dot usb-safety` — beperkt automatisch koppelen van USB-massaopslag.

### Geheimen

- `dot secrets-init` — initialiseert de geheimen-backend (age / GPG).
- `dot secrets` — toont versleutelde geheimvermeldingen.
- `dot secrets-create` — maakt een nieuw versleuteld geheim aan.
- `dot ssh-key` — genereert of roteert SSH-sleutelparen.
- `dot ssh-cert` — vraagt een SSH-certificaat aan bij een CA.

### AI

- `dot ai` — opent een interactieve AI-assistentsessie.
- `dot ai-setup` — configureert API-sleutels voor AI-providers.
- `dot ai-query` — stuurt een eenmalige prompt naar een AI-model.
- AI-toolwrappers: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Gereedschap

- `dot tools` — toont meegeleverde CLI-vervangers en hun status.
- `dot new` — maakt een nieuw alias- of functiebestand aan.
- `dot sandbox` — opent een wegwerp-sandbox-shell.
- `dot keys` — toont huidige sneltoetsen.
- `dot learn` — start de interactieve tutorial.

### Meta

- `dot upgrade` — upgradet Dotfiles naar de nieuwste versie.
- `dot packages` — toont geïnstalleerde pakketten beheerd door Dotfiles.
- `dot version` / `dot help` — toont versie- of gebruiksinformatie

## Bijdragen

Word lid van de community. Bekijk onze [Gedragscode][code-of-conduct-url] en [Bijdrage-richtlijnen][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
