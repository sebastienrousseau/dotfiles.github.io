---
description: Die Update-Aliase erstellen hilfreiche Shortcut-Aliase zum Aktualisieren des Betriebssystems und der installierten Software. Sie helfen dabei, die aktuelle Dotfiles-Installation zu sichern und zu verbessern.
lang: de-DE
metaTitle: Update Aliase - Dotfiles (DE)
permalink: /de/aliases/update/
---

# Update Aliase

Die Datei `update.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Aktualisieren des
Betriebssystems und der Software.

Die Updates helfen dabei, die aktuelle Dotfiles-Installation zu sichern und zu verbessern,
um vor Sicherheitslücken zu schützen, neue Funktionen hinzuzufügen und kritische Fehler zu beheben.

## Update

Für eine bessere Kontrolle wird der Update-Prozess in einem einzigen Befehl zusammengefasst, der
Folgendes tut:

1. Aktualisierung des Betriebssystems und der Softwarepakete,
2. Aktualisierung auf die neueste Version von Dotfiles.
3. Dies wird auch die `update.aliases.sh` Datei aktualisieren, sodass Sie immer
   die neueste Version des Updaters haben.

## Plattformen

### Linux

Der `upd` Alias wurde angepasst, um unter Linux zu funktionieren. Er aktualisiert Debian-basierte
Linux-Distributionen über den `apt` Paketmanager und andere Abhängigkeiten über
pnpm, rustup (Rust) und gem (Ruby).

| Alias | Befehl                                                                                                             | Beschreibung                                             |
| ----- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| upd   | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | Update-Befehl für Debian-basierte Linux-Betriebssysteme. |

### macOS

Der `upd` Alias ist auch für macOS verfügbar. Er aktualisiert macOS über das
`softwareupdate` Befehlszeilentool und verwaltet seine Abhängigkeiten mit pnpm,
Homebrew, mas, rustup und gem Paketmanagern.

| Alias | Befehl                                                                                                                                                                                             | Beschreibung             |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| upd   | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | Aktualisiere das System. |
