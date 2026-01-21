---
description: Sicherheits-Aliase für Dotfiles
lang: de-DE
metaTitle: Sicherheits-Aliase - Dotfiles (DE)
permalink: /de/aliases/security/
---

# Sicherheits-Aliase

Tools zur Härtung der Umgebung und Verwaltung der Konfigurations-Unveränderlichkeit.

## 🔒 Unveränderlichkeit

| Alias            | Beschreibung                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| `lock-configs`   | Sperrt kritische Dateien (`.zshrc`, etc.), um Änderungen zu verhindern (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Entsperrt kritische Dateien zum Bearbeiten.                                                            |
| `check-locks`    | Überprüft den Sperrstatus kritischer Dateien.                                                          |

## 🔑 Git-Signierung

(Siehe [Git Aliase](../git/README.md) für Signierkonfiguration)
