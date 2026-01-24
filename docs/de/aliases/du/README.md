---
description: Die Disk-Usage-Aliase zeigen Statistiken zur Plattennutzung. Sie berechnen und drucken den verwendeten Speicher fuer Dateien oder Verzeichnisse.
lang: de-DE
metaTitle: Disk-Usage-Aliase - Dotfiles (DE)
permalink: /de/aliases/du/

meta:
  - name: twitter:card
    content: Die Disk-Usage-Aliase zeigen Statistiken zur Plattennutzung. Sie berechnen und drucken den verwendeten Speicher fuer Dateien oder Verzeichnisse.
  - name: twitter:description
    content: Die Disk-Usage-Aliase zeigen Statistiken zur Plattennutzung. Sie berechnen und drucken den verwendeten Speicher fuer Dateien oder Verzeichnisse.
  - name: twitter:title
    content: Disk-Usage-Aliase - Dotfiles (DE)
  - name: og:title
    content: Disk-Usage-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Disk-Usage-Aliase zeigen Statistiken zur Plattennutzung. Sie berechnen und drucken den verwendeten Speicher fuer Dateien oder Verzeichnisse.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---

# Disk-Usage-Aliase

Die Datei `du.aliases.sh` erstellt hilfreiche Shortcut-Aliase fuer den Befehl `du`.

Die Disk-Usage-Aliase dienen dazu, Statistiken zur Plattennutzung anzuzeigen. Sie
berechnen und drucken den verwendeten Speicher von Dateien oder Verzeichnissen.

## Disk usage

[Disk usage](<https://en.wikipedia.org/wiki/Du_(Unix)>) ist ein Befehl zur Schaetzung
von Plattennutzung. Der Befehl `du` zeigt die Nutzung pro Datei an und summiert
pro Verzeichnis.

| Alias | Befehl | Beschreibung |
| ----- | ------ | ------------ |
| du | `du -h` | Plattennutzung des aktuellen Verzeichnisses anzeigen. |
| du1 | `du -hxd 1 | sort -h` | Groesse von Dateien und Verzeichnissen im aktuellen Verzeichnis. |
| ducks | `du -cks * | sort -rn | head -n 10` | Top 10 der groessten Dateien und Verzeichnisse im aktuellen Verzeichnis. |
| duh | `du` | Groesse von Dateien und Verzeichnissen. |
| dus | `du -hs *` | Lesbare Groessen, nach Groesse sortiert. |
| dusym | `du * -hsLc` | Groesse von Dateien und Verzeichnissen inkl. Symlinks. |
| dut | `dus` | Gesamtgroesse des aktuellen Verzeichnisses. |
