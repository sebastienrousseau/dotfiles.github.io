---
description: Die Find-Aliase sind dazu konzipiert, nach Dateien in einer Verzeichnishierarchie zu suchen und Aktionen an den gefundenen Dateien durchzuführen.
lang: de-DE
metaTitle: Find Aliase - Dotfiles (DE)
permalink: /de/aliases/find/
---

# Find Aliase

Die Datei `find.aliases.sh` erstellt hilfreiche Shortcut-Aliase für den Befehl `fd`
. Der Befehl `fd` ist eine plattformübergreifende Alternative zu `find`.

Traditionell wird der Befehl `find` verwendet, um nach Dateien in einer
Verzeichnishierarchie zu suchen und Aktionen an den gefundenen Dateien durchzuführen.

Wir haben uns entschieden, den Befehl `find` durch den Befehl `fd` zu ersetzen, der eine
einfachere, schnellere und benutzerfreundlichere Alternative zu `find` ist.

## Find

[fd](https://github.com/sharkdp/fd) ist eine einfache, schnelle und benutzerfreundliche
Alternative zu `find`. Während es nicht darauf abzielt, alle leistungsstarken
Funktionen von find zu unterstützen, bietet es vernünftige (meine Meinung nach) Standardwerte für die Mehrheit der
Anwendungsfälle.

| Alias | Befehl               | Beschreibung                                                                |
| ----- | -------------------- | --------------------------------------------------------------------------- |
| fd    | `fd --color always`  | Ausgabe immer standardmäßig einfärben.                                      |
| fda   | `fd --absolute-path` | Alle Dateien mit absolutem Pfad auflisten.                                  |
| fdc   | `fd --ignore-case`   | Alle Dateien mit Groß-/Kleinschreibung ignorieren auflisten.                |
| fdd   | `fd --list-details`  | Alle Dateien mit Details auflisten.                                         |
| fde   | `fd --extension`     | Alle Dateien mit Endung auflisten.                                          |
| fdf   | `fd --follow`        | Alle Dateien auflisten und Symlinks folgen.                                 |
| fdh   | `fd --help`          | Hilfe auflisten.                                                            |
| fdh   | `fd --hidden`        | Alle Dateien mit versteckten Dateien auflisten.                             |
| fdn   | `fd --glob`          | Alle Dateien mit Glob-Muster auflisten.                                     |
| fdo   | `fd --owner`         | Alle Dateien mit Eigentümer auflisten.                                      |
| fds   | `fd --size`          | Alle Dateien mit Größe auflisten.                                           |
| fdu   | `fd --exclude`       | Alle Dateien mit Ausschluss auflisten.                                      |
| fdv   | `fd --version`       | Version auflisten.                                                          |
| fdx   | `fd --exec`          | Einen Befehl für jedes Suchergebnis ausführen.                              |
| find  | `fd`                 | fd ist eine einfache, schnelle und benutzerfreundliche Alternative zu find. |
