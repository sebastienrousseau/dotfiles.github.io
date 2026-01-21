---
description: Berechtigungs-Aliase für Dotfiles
lang: de-DE
metaTitle: Berechtigungs-Aliase - Dotfiles (DE)
permalink: /de/aliases/permission/
---

# Berechtigungs-Aliase

Verwalten Sie Berechtigungs-Aliase. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `permission.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code stellt eine Reihe von Aliasen für Dateiberechtigungen bereit.

- `000` Setze Berechtigungen auf kein Lesen, Schreiben oder Ausführen für Benutzer, Gruppe
  und andere.
- `400` Setze Berechtigungen auf kein Lesen oder Schreiben, aber erlaube Ausführen nur für den Benutzer.
- `444` Setze Berechtigungen auf kein Schreiben oder Ausführen, aber erlaube Lesen für alle.
- `600` Setze Berechtigungen auf Lesen und Schreiben nur für den Benutzer.
- `644` Setze Berechtigungen auf Lesen für alle, aber Schreiben nur für den Benutzer.
- `666` Setze Berechtigungen auf Lesen und Schreiben für alle.
- `755` Setze Berechtigungen auf Lesen, Schreiben und Ausführen für den Benutzer, aber nur
  Lesen und Ausführen für Gruppe und andere.
- `764` Setze Berechtigungen auf Lesen und Schreiben für Benutzer und Gruppe, aber nur
  Lesen für andere.
- `777` Setze Berechtigungen auf Lesen, Schreiben und Ausführen für alle.
- `chgrp` Ändere die Gruppenzugehörigkeit von Dateien oder Verzeichnissen.
- `chgrpr` Ändere die Gruppenzugehörigkeit von Dateien oder Verzeichnissen rekursiv.
- `chgrpu` Ändere die Gruppenzugehörigkeit von Dateien oder Verzeichnissen rekursiv auf
  den aktuellen Benutzer.
- `chmod` Ändere Dateimodus-Bits.
- `chmodr` Ändere Dateimodus-Bits rekursiv.
- `chmodu` Ändere Dateimodus-Bits rekursiv auf den aktuellen Benutzer.
- `chmox` Mache eine Datei ausführbar.
- `chown` Ändere Dateieigentümer und Gruppe.
- `chownr` Ändere Dateieigentümer und Gruppe rekursiv.
- `chownu` Ändere Dateieigentümer und Gruppe rekursiv auf den aktuellen Benutzer.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
