---
description: Berechtigungs-Aliase fuer Dotfiles
lang: de-DE
metaTitle: Berechtigungs-Aliase - Dotfiles
permalink: /de/aliases/permission/
---
# Berechtigungs-Aliase

Berechtigungs-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `permission.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code stellt eine Reihe von Aliasen fuer Dateiberechtigungen bereit.
- `000` Keine Lese-, Schreib- oder Ausfuehrrechte fuer Benutzer, Gruppe und andere.
- `400` Keine Lese- oder Schreibrechte, aber Ausfuehrrecht nur fuer den Benutzer.
- `444` Keine Schreib- oder Ausfuehrrechte, aber Lesen fuer alle.
- `600` Lese- und Schreibrechte nur fuer den Benutzer.
- `644` Lesen fuer alle, Schreiben nur fuer den Benutzer.
- `666` Lesen und Schreiben fuer alle.
- `755` Lesen, Schreiben, Ausfuehren fuer den Benutzer, Lesen/Ausfuehren fuer Gruppe und andere.
- `764` Lesen, Schreiben fuer Benutzer und Gruppe, Lesen fuer andere.
- `777` Lesen, Schreiben, Ausfuehren fuer alle.
- `chgrp` Gruppenbesitz von Dateien/Verzeichnissen aendern.
- `chgrpr` Gruppenbesitz rekursiv aendern.
- `chgrpu` Gruppenbesitz rekursiv auf aktuellen Benutzer setzen.
- `chmod` Dateimodus-Bits aendern.
- `chmodr` Dateimodus-Bits rekursiv aendern.
- `chmodu` Dateimodus-Bits rekursiv fuer aktuellen Benutzer aendern.
- `chmox` Datei ausfuehrbar machen.
- `chown` Besitzer und Gruppe aendern.
- `chownr` Besitzer und Gruppe rekursiv aendern.
- `chownu` Besitzer und Gruppe rekursiv auf aktuellen Benutzer setzen.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
