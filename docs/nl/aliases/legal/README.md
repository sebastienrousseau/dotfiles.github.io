---
title: "Juridische aliassen: Open Source compliance-tools"
description: "Shell-aliassen voor licentiescanning, copyright-headers en attributiebeheer in je dotfiles."
lang: nl-NL
metaTitle: "Juridische aliassen | Dotfiles"
permalink: /nl/aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: "juridische aliassen, licentiescanning, copyright headers, open source compliance, dotfiles"
---

# Juridische aliassen

Shell-tools voor het beheren van open source compliance, licentiescanning en attributie.

## Overzicht

De juridische aliassen bieden een gestroomlijnde workflow voor het onderhouden van open source compliance in je projecten. Deze tools behandelen licentiescanning, copyright-headerbeheer en afhankelijkheidsattributie.

## Referentie

### Licentiescanning

| Alias | Beschrijving | Type |
|-------|-------------|------|
| `fossology-start` | Start lokale FOSSology-server op poort 8081 | Docker |
| `fossology-stop` | Stop FOSSology-server | Docker |
| `license-scan` | Snelle licentiescan van huidige map via Trivy | Binary |

### Copyright-headers

| Alias | Beschrijving | Type |
|-------|-------------|------|
| `add-headers` | Voeg recursief MIT-licentieheaders toe aan alle bronbestanden | Docker (google/addlicense) |

### Attributie

| Alias | Beschrijving | Type |
|-------|-------------|------|
| `gen-notice` | Genereer een NOTICE-bestand voor afhankelijkheden (initieel Go-ondersteuning) | Docker |

### Bijdrage

| Alias | Beschrijving | Type |
|-------|-------------|------|
| `check-cla` | Bekijk GitHub PR-controles inclusief CLA-status | CLI (gh) |

## Vereisten

- **Docker** - Vereist voor isolatie van compliance-tools
- **GitHub CLI (gh)** - Vereist voor PR- en CLA-controle
- **Trivy** - Automatisch geinstalleerd of voorgesteld voor snelle scanning
