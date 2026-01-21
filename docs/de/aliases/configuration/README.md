---
description: Die Konfigurations-Aliase sind Aliase zum Öffnen der Konfigurationsdateien für das Terminal und die Shell.
lang: de-DE
metaTitle: Konfigurations-Aliase - Dotfiles (DE)
permalink: /de/aliases/configuration/
---

# Konfigurations-Aliase

Die Datei `configuration.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Öffnen
der Konfigurationsdateien für das Terminal und die Shell.

> [!TIP]
> **Neu in v0.2.471**: Sie können jetzt den `dot`-Befehl verwenden, um Ihre Konfiguration zu verwalten.
> Versuchen Sie `dot learn` für eine interaktive Tour oder `dot doctor` um Ihr Setup zu überprüfen.

## Konfiguration

| Alias | Befehl                           | Beschreibung                                               |
| ----- | -------------------------------- | ---------------------------------------------------------- |
| bshp  | `${=EDITOR} $HOME/.bash_profile` | Öffne das Bash-Profil im Standard-Texteditor.              |
| bshrc | `${=EDITOR} $HOME/.bashrc`       | Öffne die Bash-Konfigurationsdatei im Standard-Texteditor. |
| gcfg  | `${=EDITOR} $HOME/.gitconfig`    | Öffne die Git-Konfigurationsdatei im Standard-Texteditor.  |
| gign  | `${=EDITOR} $HOME/.gitignore`    | Öffne die Git-Ignore-Datei im Standard-Texteditor.         |
| zshrc | `${=EDITOR} $HOME/.zshrc`        | Öffne die Zsh-Konfigurationsdatei im Standard-Texteditor.  |
