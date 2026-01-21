---
description: Rechtliche Aliase für Dotfiles
lang: de-DE
metaTitle: Rechtliche Aliase - Dotfiles (DE)
permalink: /de/aliases/legal/
---

# Rechtliche & Lizenzierungs-Aliase

Tools zur Verwaltung von Open-Source-Compliance, Lizenz-Scans und Attribution.

## ⚖️ Aliase

### Lizenz-Scanning

| Alias             | Beschreibung                                                  | Typ    |
| ----------------- | ------------------------------------------------------------- | ------ |
| `fossology-start` | Starte lokalen FOSSology-Server auf Port 8081                 | Docker |
| `fossology-stop`  | Stoppe FOSSology-Server                                       | Docker |
| `license-scan`    | Schneller Lizenzscan des aktuellen Verzeichnisses (via Trivy) | Binary |

### Copyright-Header

| Alias         | Beschreibung                                               | Typ                        |
| ------------- | ---------------------------------------------------------- | -------------------------- |
| `add-headers` | Füge rekursiv MIT-Lizenzheader zu allen Quelldateien hinzu | Docker (google/addlicense) |

### Attribution

| Alias        | Beschreibung                                                                   | Typ    |
| ------------ | ------------------------------------------------------------------------------ | ------ |
| `gen-notice` | Generiere eine `NOTICE`-Datei für Abhängigkeiten (Go-Unterstützung anfänglich) | Docker |

### Beitrag

| Alias       | Beschreibung                               | Typ        |
| ----------- | ------------------------------------------ | ---------- |
| `check-cla` | Überwache GitHub PR-Checks (inklusive CLA) | CLI (`gh`) |

## 📦 Anforderungen

- **Docker**: Zur Isolierung von Compliance-Tools.
- **GitHub CLI (`gh`)**: Für PR/CLA-Überprüfung.
- **Trivy**: Automatisch installiert/vorgeschlagen für schnelles Scannen.
