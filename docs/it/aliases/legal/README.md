---
description: Alias shell per conformita open source, scansione licenze, intestazioni copyright e gestione attribuzioni.
lang: it-IT
metaTitle: Alias Legal - Dotfiles (IT)
permalink: /aliases/legal/
sidebar: true

meta:
  - name: keywords
    content: alias legal, scansione licenze, intestazioni copyright, conformita open source, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Legal - Dotfiles
  - name: twitter:description
    content: Alias shell per conformita open source, scansione licenze e gestione attribuzioni.
  - name: og:title
    content: Alias Legal - Dotfiles
  - name: og:description
    content: Alias shell per conformita open source, scansione licenze e gestione attribuzioni.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Legal

Strumenti shell per gestire conformita open source, scansione licenze e attribuzioni.

## Panoramica

Gli alias legal forniscono un workflow ottimizzato per mantenere la conformita open source nei tuoi progetti. Questi strumenti gestiscono scansione licenze, intestazioni copyright e attribuzione dipendenze.

## Riferimento

### Scansione licenze

| Alias | Descrizione | Tipo |
|-------|-------------|------|
| `fossology-start` | Avvia server FOSSology locale su porta 8081 | Docker |
| `fossology-stop` | Ferma server FOSSology | Docker |
| `license-scan` | Scansione rapida licenze directory corrente via Trivy | Binary |

### Intestazioni copyright

| Alias | Descrizione | Tipo |
|-------|-------------|------|
| `add-headers` | Aggiungi ricorsivamente intestazioni licenza MIT a tutti i file sorgente | Docker (google/addlicense) |

### Attribuzione

| Alias | Descrizione | Tipo |
|-------|-------------|------|
| `gen-notice` | Genera file NOTICE per le dipendenze (supporto Go iniziale) | Docker |

### Contributo

| Alias | Descrizione | Tipo |
|-------|-------------|------|
| `check-cla` | Controlla verifiche GitHub PR incluso stato CLA | CLI (gh) |

## Requisiti

- **Docker** - Richiesto per isolamento strumenti conformita
- **GitHub CLI (gh)** - Richiesto per controllo PR e CLA
- **Trivy** - Installato automaticamente o suggerito per scansione rapida
