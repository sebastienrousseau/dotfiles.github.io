---
description: Die interaktiven Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit Ihrer Shell und Ihrem Terminal auf interaktivere Weise zu interagieren.
lang: de-DE
metaTitle: Interaktive Aliase - Dotfiles (DE)
permalink: /de/aliases/interactive/
---

# Interaktive Aliase

Die Datei `interactive.aliases.sh` erstellt hilfreiche Shortcut-Aliase zur Aktivierung
des interaktiven Modus für kritische, häufige Funktionen im Terminal.

Die interaktiven Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit
Ihrer Shell und Ihrem Terminal auf interaktivere Weise zu interagieren.

## Interaktiver Modus

[Interaktiver Modus](https://de.wikipedia.org/wiki/Interaktiver_Modus) ist ein Modus, in
dem der Benutzer zur Eingabe aufgefordert wird, bevor der Befehl ausgeführt wird.

Dies ist eine nützliche Funktion für Befehle wie `cp`, `mv`, `rm` und `ln`, die
verwendet werden können, um Dateien oder Verzeichnisse zu überschreiben.

| Alias | Befehl                  | Beschreibung                                                                 |
| ----- | ----------------------- | ---------------------------------------------------------------------------- |
| bin   | `rm -fr ${HOME}/.Trash` | Entferne alle Dateien im Papierkorb.                                         |
| cp    | `cp -vi`                | Kopiere Dateien und Verzeichnisse.                                           |
| del   | `rm -rfvi`              | Entferne eine Datei oder ein Verzeichnis.                                    |
| ln    | `ln -vi`                | Interaktiver symbolischer Link.                                              |
| mv    | `mv -vi`                | Verschiebe Dateien interaktiv (frage vor dem Überschreiben) und ausführlich. |
| rm    | `rm -vi`                | Fragt bei jeder Datei nach, bevor sie entfernt wird.                         |
| zap   | `rm -vi`                | Entferne Dateien interaktiv (frage vor dem Überschreiben).                   |
