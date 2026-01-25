---
description: Alias shell per diagnostica sistema, controlli di salute, rilevamento drift e auto-riparazione nel tuo ambiente dotfiles.
lang: it-IT
metaTitle: Alias Diagnostics - Dotfiles (IT)
permalink: /aliases/diagnostics/
sidebar: true

meta:
  - name: keywords
    content: alias diagnostica, controllo salute sistema, dotfiles doctor, chezmoi verify, shell auto-riparazione
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Diagnostics - Dotfiles
  - name: twitter:description
    content: Alias shell per diagnostica sistema, controlli di salute e auto-riparazione.
  - name: og:title
    content: Alias Diagnostics - Dotfiles
  - name: og:description
    content: Alias shell per diagnostica sistema, controlli di salute e auto-riparazione.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Diagnostics

Strumenti per auto-riparazione e controlli di salute del sistema.

## Panoramica

Gli alias diagnostics forniscono comandi per monitorare la salute del sistema, rilevare drift di configurazione e riparare automaticamente il tuo ambiente dotfiles. Queste utility si integrano con chezmoi per assicurare che i tuoi file locali rimangano sincronizzati con lo stato gestito.

## Riferimento

### Salute e riparazione

| Alias | Descrizione |
|-------|-------------|
| `doc`, `dot-doctor` | Esegui lo script di controllo salute sistema (`doctor.sh`). |
| `drift`, `dot-drift` | Verifica se i file locali si sono discostati dallo stato gestito (`chezmoi verify`). |
| `heal`, `dot-heal` | Applica lo stato gestito per riparare drift (`chezmoi apply`). |
| `doc-full` | Esegui doctor con info debug percorsi estese. |
