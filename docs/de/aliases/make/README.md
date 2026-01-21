---
description: Die Make Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `make` Kommandozeilen-Tool zu interagieren.
lang: de-DE
metaTitle: Make Aliase - Dotfiles (DE)
permalink: /de/aliases/make/
---

# Make Aliase

Die Datei `make.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Ausführen von `make`
Befehlen.

## Make

[Make](https://de.wikipedia.org/wiki/Make) ist ein Werkzeug, das die
Erzeugung von ausführbaren Dateien und anderen Nicht-Quelldateien eines Programms aus den
Quelldateien des Programms steuert.

Make erhält sein Wissen darüber, wie Ihr Programm gebaut wird, aus einer Datei namens
`Makefile`, die jede der Nicht-Quelldateien auflistet und wie sie aus
anderen Dateien berechnet wird.

| Alias | Befehl         | Beschreibung                     |
| ----- | -------------- | -------------------------------- |
| mk    | `make`         | Führe `make` ohne Argumente aus. |
| mkc   | `make clean`   | Führe `make clean` aus.          |
| mkd   | `make doc`     | Führe `make doc` aus.            |
| mkf   | `make format`  | Führe `make format` aus.         |
| mkh   | `make help`    | Führe `make help` aus.           |
| mki   | `make install` | Führe `make install` aus.        |
| mkr   | `make run`     | Führe `make run` aus.            |
| mkt   | `make test`    | Führe `make test` aus.           |
