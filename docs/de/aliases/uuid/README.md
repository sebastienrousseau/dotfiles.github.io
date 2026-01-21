---
description: Die UUID-Aliase erstellen hilfreiche Shortcut-Aliase für den `uuidgen` Befehl. Der uuidgen Befehl generiert einen Universally Unique IDentifier (UUID).
lang: de-DE
metaTitle: UUID Aliase - Dotfiles (DE)
permalink: /de/aliases/uuid/
---

# UUID Aliase

Die Datei `uuid.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Generieren von
[UUIDs](https://de.wikipedia.org/wiki/Universally_Unique_Identifier).

Die UUID-Aliase erstellen hilfreiche Shortcut-Aliase für den `uuidgen` Befehl.
Der uuidgen Befehl generiert einen Universally Unique IDentifier (UUID), einen
128-Bit-Wert, der garantiert eindeutig über Raum und Zeit ist.

## UUID

[UUID](https://de.wikipedia.org/wiki/Universally_Unique_Identifier) ist eine 128-Bit
Zahl, die verwendet wird, um Informationen in Computersystemen zu identifizieren.

| Alias | Befehl                                                                             | Beschreibung                                               |
| ----- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| uuid  | `uuidgen \| tr -d '\n' \| tr '[:upper:]' '[:lower:]' \| pbcopy && pbpaste && echo` | Generiere eine UUID und kopiere sie in die Zwischenablage. |
