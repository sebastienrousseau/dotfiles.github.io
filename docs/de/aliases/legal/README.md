---
description: Shell-Aliase fuer License-Scanning, Copyright-Header und Attribution-Verwaltung in Ihren Dotfiles.
lang: de-DE
metaTitle: Legal Aliase - Dotfiles (DE)
permalink: /de/aliases/legal/
sidebar: true

meta:
  - name: keywords
    content: legal aliase, license scanning, copyright header, open source compliance, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Legal Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer License-Scanning, Copyright-Header und Attribution-Verwaltung.
  - name: og:title
    content: Legal Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer License-Scanning, Copyright-Header und Attribution-Verwaltung.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Legal Aliase

Shell-Werkzeuge zur Verwaltung von Open-Source-Compliance, License-Scanning und Attribution.

## Uebersicht

Die Legal-Aliase bieten einen optimierten Workflow zur Aufrechterhaltung der Open-Source-Compliance in Ihren Projekten. Diese Werkzeuge behandeln License-Scanning, Copyright-Header-Verwaltung und Abhaengigkeits-Attribution.

## Referenz

### License Scanning

| Alias | Beschreibung | Typ |
|:---|:---|:---|
| `fossology-start` | Lokalen FOSSology-Server auf Port 8081 starten | Docker |
| `fossology-stop` | FOSSology-Server stoppen | Docker |
| `license-scan` | Schneller License-Scan des aktuellen Verzeichnisses via Trivy | Binary |

### Copyright Header

| Alias | Beschreibung | Typ |
|:---|:---|:---|
| `add-headers` | Rekursiv MIT-Lizenz-Header zu allen Quelldateien hinzufuegen | Docker (google/addlicense) |

### Attribution

| Alias | Beschreibung | Typ |
|:---|:---|:---|
| `gen-notice` | NOTICE-Datei fuer Abhaengigkeiten generieren (zunaechst Go-Unterstuetzung) | Docker |

### Contribution

| Alias | Beschreibung | Typ |
|:---|:---|:---|
| `check-cla` | GitHub PR-Checks einschliesslich CLA-Status beobachten | CLI (gh) |

## Anforderungen

- **Docker** - Erforderlich fuer Isolation von Compliance-Werkzeugen
- **GitHub CLI (gh)** - Erforderlich fuer PR- und CLA-Pruefung
- **Trivy** - Automatisch installiert oder vorgeschlagen fuer schnelles Scanning
