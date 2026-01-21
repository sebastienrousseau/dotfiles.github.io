---
description: Der Modern Core ist eine Suite von Rust-basierten Tools, die herkömmliche Unix-Dienstprogramme durch schnellere, intelligentere Alternativen ersetzen.
lang: de-DE
metaTitle: Modern Core - Dotfiles (DE)
permalink: /de/aliases/modern-core/
---

# Modern Core Tools

In **v0.2.471** haben wir den "Modern Core" eingeführt – eine Suite von leistungsstarken, Rust-basierten Tools, die entwickelt wurden, um herkömmliche Unix-Dienstprogramme zu ersetzen.

## Tools Übersicht

| Tool        | Ersetzt         | Beschreibung                                            | Tastenkombination |
| :---------- | :-------------- | :------------------------------------------------------ | :---------------- |
| **Atuin**   | `history`       | Synchronisierbarer, verschlüsselter Shell-Verlauf mit Fuzzy-Suche. | `Ctrl+R` / `Up`   |
| **Yazi**    | `ranger` / `ls` | Pfeilschneller Terminal-Dateimanager mit Bildvorschau.  | `yy` (Alias)      |
| **Zellij**  | `tmux`          | Moderner Terminal-Multiplexer mit intuitiven Layouts.   | `Alt+n`           |
| **Ghostty** | `Terminal.app`  | GPU-beschleunigter, plattformübergreifender Terminal-Emulator. | N/A               |

## Atuin (Magischer Verlauf)

Atuin ersetzt Ihren bestehenden Shell-Verlauf durch eine SQLite-Datenbank.

- **Suchen**: Drücken Sie `Ctrl+R` oder `Pfeil nach oben`, um die Suchoberfläche zu öffnen.
- **Filtern**: Geben Sie natürlichsprachliche Abfragen oder spezifische Exit-Codes ein.
- **Sync**: Ihr Verlauf wird verschlüsselt und über Ihre Geräte synchronisiert.

## Yazi (Dateimanager)

Yazi ist ein Terminal-Dateimanager, der in Rust geschrieben ist und auf asynchroner E/A basiert.

- **Start**: Geben Sie `yy` in Ihr Terminal ein.
- **Funktionen**:
  - Sofortiger Start.
  - Sixel/Kitty Bildvorschau-Unterstützung.
  - Lua Plugin-System.

## Zellij (Multiplexer)

Zellij ist ein Terminal-Arbeitsbereich, der alles enthält, was man braucht.

- **Start**: Geben Sie `zellij` ein (oder verwenden Sie Ihren konfigurierten Alias).
- **Funktionen**:
  - Layout-Engine (Arbeitsbereich-Layouts speichern/wiederherstellen).
  - Schwebende Bereiche (Floating panes).
  - Benutzerfreundliche Tastenkombinationen (auf dem Bildschirm angezeigt).

## Ghostty (Terminal)

Ghostty ist der Standard-Terminal-Emulator für den Modern Core.

- **Funktionen**:
  - Native Leistung (GPU-beschleunigt).
  - Ligaturen und moderne Schriftunterstützung.
  - Flimmerfreies Rendering.
