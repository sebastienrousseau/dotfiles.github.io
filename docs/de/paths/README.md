---
description: Wie Dotfiles Ihre \$PATH-Hierarchie verwaltet, um sicherzustellen, dass die richtigen Tools in der richtigen Reihenfolge geladen werden.
lang: de-DE
metaTitle: Pfade (Paths) - Dotfiles (DE)
permalink: /de/paths/

meta:
  - name: keywords
    content: pfad, umgebung, variablen, hierarchie, dotfiles, chezmoi
---

# Pfadverwaltung

Eine der kritischsten Aufgaben von Dotfiles ist die Verwaltung Ihrer `$PATH`-Umgebungsvariablen. Dies bestimmt, welche Version eines Tools ausgeführt wird, wenn Sie einen Befehl eingeben.

Wir halten uns an eine strikte Hierarchie, um Konsistenz zwischen macOS und Linux zu gewährleisten.

## Die Hierarchie

Von höchster Priorität (zuerst geprüft) bis zur niedrigsten:

1.  **Lokale Binärdateien** (`~/.local/bin`)
    *   **Priorität**: 1
    *   **Zweck**: Benutzerdefinierte Benutzerskripte, `dot`-CLI und Tools, die über `pipx` oder andere Paketmanager auf Benutzerebene installiert wurden.
    *   **Grund**: Ermöglicht es Ihnen, System- oder Homebrew-Tools mit Ihren eigenen Versionen zu überschreiben.

2.  **Anwendungs-Binärdateien** (macOS)
    *   **Priorität**: 2
    *   **Zweck**: Binärdateien von installierten Anwendungen (z. B. VS Code, iTerm).

3.  **Sprach-Laufzeiten**
    *   **Node.js**: `~/.node_modules/bin`
    *   **Go**: `~/go/bin`
    *   **Rust (Cargo)**: `~/.cargo/bin`
    *   **Ruby (User Gems)**: `~/.gem/ruby/bin`
    *   **Python (Pipx)**: `~/.local/share/pipx`

4.  **Homebrew** (`/opt/homebrew/bin`)
    *   **Priorität**: 3
    *   **Zweck**: Hauptpaketmanager für macOS/Linux.
    *   **Hinweis**: Wir laden Homebrew absichtlich *vor* den Systempfaden, um das Upgrade von Systemwerkzeugen (wie `git` oder `curl`) zu ermöglichen.

5.  **Systempfade** (`/usr/bin`, `/bin`)
    *   **Priorität**: Niedrigste
    *   **Zweck**: Standard-Betriebssystemwerkzeuge.
    *   **Grund**: Rückfalloption für grundlegende Dienstprogramme.

## Deduplizierung

Dotfiles dedupliziert Ihren `$PATH` automatisch, während die Rangfolge beibehalten wird. Dies verhindert, dass die `$PATH`-Variable beim Starten verschachtelter Shells unbegrenzt wächst.
