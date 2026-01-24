---
description: Disk-Usage-Aliase fuer Dotfiles
lang: de-DE
metaTitle: Disk-Usage-Aliase - Dotfiles
permalink: /de/aliases/disk-usage/
---
# Disk-Usage-Aliase

Disk-Usage-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `disk-usage.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Diese Aliase erleichtern die Analyse der Plattennutzung mit `du`-Varianten,
sortiert nach Groesse und fuer schnelle Diagnosen gedacht.
- `du` `du -h` im aktuellen Verzeichnis ausfuehren.
- `du1` Plattennutzung der ersten Ebene, nach Groesse sortiert.
- `ducks` Die 10 groessten Speicherfresser im aktuellen Verzeichnis.
- `duf` Plattennutzung von Dateien mit Tiefe 1.
- `dufi` Wie `duf`, absteigend sortiert.
- `duh` Gesamtnutzung des aktuellen Verzeichnisses, lesbar.
- `dui` Plattennutzung und Inode, sortiert.
- `dul` Verzeichnisse nach Groesse sortiert.
- `duls` Nutzung im aktuellen Verzeichnis, nach Groesse sortiert.
- `dus` Plattennutzung des aktuellen Verzeichnisses, nach Groesse sortiert.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
