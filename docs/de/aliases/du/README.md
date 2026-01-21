---
description: Die Speicherplatzbelegungs-Aliase (Disk usage) sind dazu konzipiert, Speicherplatzbelegungsstatistiken anzuzeigen. Sie werden verwendet, um den von Dateien oder Verzeichnissen verwendeten Speicherplatz zu berechnen und auszugeben.
lang: de-DE
metaTitle: Speicherplatzbelegung (du) Aliase - Dotfiles (DE)
permalink: /de/aliases/du/
---

# Speicherplatzbelegung (Disk usage) Aliase

Die Datei `du.aliases.sh` erstellt hilfreiche Shortcut-Aliase für den Befehl `du`.

Die Speicherplatzbelegungs-Aliase sind dazu konzipiert, Speicherplatzbelegungsstatistiken anzuzeigen. Sie werden
verwendet, um den von Dateien oder Verzeichnissen verwendeten Speicherplatz zu berechnen und auszugeben.

## Disk usage

[Disk usage](<https://de.wikipedia.org/wiki/Du_(Unix)>) ist ein Befehl, der
die Dateisystembelegung schätzt. Der Befehl `du` wird verwendet, um die Dateisystembelegung
zu schätzen. Der von jeder Datei verwendete Platz wird in Kilobyte angezeigt. Der von jedem
Verzeichnis verwendete Platz wird in Kilobyte angezeigt, zusammen mit dem gesamten Platz, der von allen Dateien in
diesem Verzeichnis und seinen Unterverzeichnissen verwendet wird.

| Alias | Befehl       | Beschreibung                                                                |
| ----- | ------------ | --------------------------------------------------------------------------- |
| du    | `du -h`      | Zeige die Speicherplatzbelegung des aktuellen Verzeichnisses an.            |
| du1   | `du -hxd 1   | sort -h`                                                                    | Dateigröße von Dateien und Verzeichnissen im aktuellen Verzeichnis. |
| ducks | `du -cks _._ | sort -rn                                                                    | head -n 10`                                                 | Top 10 der größten Dateien und Verzeichnisse im aktuellen Verzeichnis. |
| duh   | `du`         | Dateigröße von Dateien und Verzeichnissen.                                  |
| dus   | `du -hs *`   | Dateigröße menschenlesbare Ausgabe sortiert nach Größe.                     |
| dusym | `du * -hsLc` | Dateigröße von Dateien und Verzeichnissen im aktuellen Verzeichnis inklusive Symlinks. |
| dut   | `dus`        | Gesamte Dateigröße des aktuellen Verzeichnisses.                            |
