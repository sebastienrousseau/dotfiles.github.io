---
description: Rechtliche Aliase fuer Dotfiles
lang: de-DE
metaTitle: Rechtliche Aliase - Dotfiles
permalink: /de/aliases/legal/
---
# Rechts- & Lizenz-Aliase

Werkzeuge fuer Open-Source-Compliance, License-Scanning und Attribution.

## ⚖️ Aliase

### License Scanning
| Alias | Beschreibung | Typ |
|-------|--------------|-----|
| `fossology-start` | Lokalen FOSSology-Server auf Port 8081 starten | Docker |
| `fossology-stop` | FOSSology-Server stoppen | Docker |
| `license-scan` | Schneller License-Scan des aktuellen Verzeichnisses (via Trivy) | Binary |

### Copyright-Header
| Alias | Beschreibung | Typ |
|-------|--------------|-----|
| `add-headers` | Rekursiv MIT-Lizenz-Header zu allen Source-Dateien hinzufuegen | Docker (google/addlicense) |

### Attribution
| Alias | Beschreibung | Typ |
|-------|--------------|-----|
| `gen-notice` | `NOTICE` Datei fuer Abhaengigkeiten erzeugen (zunaechst Go) | Docker |

### Contribution
| Alias | Beschreibung | Typ |
|-------|--------------|-----|
| `check-cla` | GitHub PR-Checks beobachten (inkl. CLA) | CLI (`gh`) |

## 📦 Anforderungen

- **Docker**: Fuer isolierte Compliance-Tools.
- **GitHub CLI (`gh`)**: Fuer PR/CLA-Checks.
- **Trivy**: Automatisch installiert/empfohlen fuer schnelle Scans.
