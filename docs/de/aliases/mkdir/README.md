---
description: Die Mkdir-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `mkdir` Kommandozeilen-Tool zu interagieren. Mkdir ist ein Tool, das ein Verzeichnis erstellt.
lang: de-DE
metaTitle: Mkdir Aliase - Dotfiles (DE)
permalink: /de/aliases/mkdir/
---

# Mkdir Aliase

Die Datei `mkdir.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Erstellen von
Verzeichnissen.

Die Mkdir-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit
dem `mkdir` Kommandozeilen-Tool zu interagieren. Mkdir ist ein Tool, das ein Verzeichnis erstellt.

## Mkdir

[Mkdir](https://de.wikipedia.org/wiki/Mkdir) ist ein Befehl, der ein
Verzeichnis erstellt. Das mkdir-Dienstprogramm erstellt die als Operanden benannten Verzeichnisse in der
angegebenen Reihenfolge unter Verwendung des Modus „rwxrwxrwx“ (0777).

| Alias | Befehl                      | Beschreibung                                        |
| ----- | --------------------------- | --------------------------------------------------- |
| mcd   | `mkdir -pv && cd`           | Erstelle Verzeichnis und wechsle hinein.            |
| mcdp  | `mkdir -pv && cd`           | Erstelle Verzeichnis und Eltern und wechsle hinein. |
| md    | `mkd`                       | Erstelle Verzeichnis.                               |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | Erstelle Verzeichnis mit Datum.                     |
| mdp   | `mkdir -pv`                 | Erstelle Verzeichnis und Eltern.                    |
| mdt   | `mkdir -pv $(date +%h%m%s)` | Erstelle Verzeichnis mit Uhrzeit.                   |
