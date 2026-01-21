---
description: Shell-Funktionen von Dotfiles zur Verbesserung Ihres Terminal-Erlebnisses.
lang: de-DE
metaTitle: Funktionen - Dotfiles (DE)
permalink: /de/functions/

meta:
  - name: keywords
    content: funktionen, shell, bash, zsh, dotfiles, produktivität
---

# Funktionen

Dotfiles enthält eine Sammlung von Dienstprogrammfunktionen, um Ihren Arbeitsablauf zu beschleunigen. Diese werden automatisch in Ihre Shell-Umgebung geladen.

## API & Netzwerk

| Funktion     | Beschreibung                                         |
| :----------- | :--------------------------------------------------- |
| `apihealth`  | Überprüfen Sie den Zustand eines API-Endpunkts.      |
| `apilatency` | API-Latenz messen.                                   |
| `apiload`    | Einfacher API-Lasttest.                              |
| `curlheader` | HTTP-Header mit curl abrufen.                        |
| `curlstatus` | HTTP-Statuscode abrufen.                             |
| `curltime`   | Curl-Anforderungszeit messen.                        |
| `httpdebug`  | HTTP-Verkehr debuggen.                               |
| `whoisport`  | Überprüfen Sie, wer einen bestimmten Port verwendet. |

## Dateiverwaltung

| Funktion          | Beschreibung                                             |
| :---------------- | :------------------------------------------------------- |
| `cdls`            | Verzeichnis wechseln und Inhalt auflisten.               |
| `extract`         | Extrahieren Sie jedes Archivformat (tar, zip, gz, usw.). |
| `freespace`       | Freien Speicherplatz prüfen.                             |
| `hiddenfiles`     | Versteckte Dateien auflisten.                            |
| `showhiddenfiles` | Versteckte Dateien im Finder umschalten (macOS).         |
| `size`            | Verzeichnisgröße abrufen.                                |
| `zipf`            | Datei oder Verzeichnis zippen.                           |
| `backup`          | Sichern Sie eine Datei mit einem Zeitstempel.            |

## Textverarbeitung

| Funktion       | Beschreibung                              |
| :------------- | :---------------------------------------- |
| `encode64`     | Base64-Kodierung.                         |
| `hexdump`      | Hexdump einer Datei.                      |
| `kebabcase`    | String in Kebab-Case konvertieren.        |
| `lowercase`    | String in Kleinbuchstaben konvertieren.   |
| `sentencecase` | String in Satzschreibweise konvertieren.  |
| `snakecase`    | String in Snake_Case konvertieren.        |
| `titlecase`    | String in Titelschreibweise konvertieren. |
| `uppercase`    | String in GROSSBUCHSTABEN konvertieren.   |

## System & Dienstprogramme

| Funktion    | Beschreibung                           |
| :---------- | :------------------------------------- |
| `caffeine`  | System wach halten (macOS).            |
| `genpass`   | Generieren Sie ein sicheres Passwort.  |
| `sysinfo`   | Systeminformationen anzeigen.          |
| `stopwatch` | Eine einfache Terminal-Stoppuhr.       |
| `matrix`    | Der Matrix-Digitalregen-Effekt.        |
| `myproc`    | Meine Prozesse auflisten.              |
| `kill`      | Prozesse interaktiv beenden (via fzf). |

## Navigation

| Funktion      | Beschreibung                                                      |
| :------------ | :---------------------------------------------------------------- |
| `goto`        | Schnelle Navigation zu mit Lesezeichen versehenen Verzeichnissen. |
| `prependpath` | Ein Verzeichnis dem $PATH voranstellen.                           |

> [!TIP]
> Verwenden Sie `type <funktionsname>` in Ihrem Terminal, um den Quellcode einer beliebigen Funktion zu sehen!
