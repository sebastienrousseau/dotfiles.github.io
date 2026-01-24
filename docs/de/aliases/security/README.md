---
description: Sicherheits-Aliase fuer Dotfiles
lang: de-DE
metaTitle: Sicherheits-Aliase - Dotfiles
permalink: /de/aliases/security/
---
# Sicherheits-Aliase

Werkzeuge zum Haerten der Umgebung und zur Verwaltung der Konfigurations-Unveraenderlichkeit.

## 🔒 Unveraenderlichkeit

| Alias | Beschreibung |
|-------|-------------|
| `lock-configs` | Sperrt kritische Dateien (`.zshrc`, etc.), um Aenderungen zu verhindern (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Entsperrt kritische Dateien zur Bearbeitung. |
| `check-locks` | Prueft den Sperrstatus kritischer Dateien. |

## 🔑 Git-Signierung

(Siehe [Git-Aliase](../git/README.md) fuer Signierkonfiguration)
