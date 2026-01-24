---
description: Die List-Aliase sind eine Sammlung von Aliasen, die es erlauben, mit dem Befehl `ls` interaktiver zu arbeiten, um den Inhalt eines Verzeichnisses anzuzeigen.
lang: de-DE
metaTitle: Die List (ls) Aliase - Dotfiles (DE)
permalink: /de/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die List-Aliase sind eine Sammlung von Aliasen, die es erlauben, mit dem Befehl `ls` interaktiver zu arbeiten, um den Inhalt eines Verzeichnisses anzuzeigen.
  - name: twitter:description
    content: Die List-Aliase sind eine Sammlung von Aliasen, die es erlauben, mit dem Befehl `ls` interaktiver zu arbeiten, um den Inhalt eines Verzeichnisses anzuzeigen.
  - name: twitter:title
    content: Die List (ls) Aliase - Dotfiles (DE)
  - name: og:title
    content: Die List (ls) Aliase - Dotfiles (DE)
  - name: og:description
    content: Die List-Aliase sind eine Sammlung von Aliasen, die es erlauben, mit dem Befehl `ls` interaktiver zu arbeiten, um den Inhalt eines Verzeichnisses anzuzeigen.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---

# List-Aliase

Die Datei `list.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Auflisten von Dateien
und Verzeichnissen.

Die List-Aliase sind eine Sammlung von Aliasen, die es erlauben, mit dem Befehl `ls`
interaktiver zu arbeiten, um den Inhalt eines Verzeichnisses anzuzeigen.

Fuer jeden Operand, der eine Datei bezeichnet, zeigt `ls` deren Namen und die angeforderten
Informationen an. Fuer jeden Operand, der ein Verzeichnis bezeichnet, zeigt `ls` die Namen
aller enthaltenen Dateien sowie die angeforderten Informationen.

## ls

[ls](https://en.wikipedia.org/wiki/Ls) ist ein Befehl, der den Inhalt eines Verzeichnisses listet.

| Alias  | Befehl                          | Beschreibung                                            |
| ------ | -------------------------------- | ------------------------------------------------------ |
| l.     | `ls -dlhF .* \| grep -v "^d"`    | Versteckte Dateien auflisten.                          |
| l      | `ls -lFh`                         | Groesse, Typ anzeigen, lesbar.                         |
| l1     | `ls -1`                           | Eine Datei pro Zeile anzeigen.                         |
| la     | `ls -lAFh`                        | Alle Dateien, Typ anzeigen, lesbar.                    |
| labc   | `ls -lap`                         | Alle Dateien alphabetisch auflisten.                   |
| lc     | `wc -l`                           | Anzahl der Zeilen in der Datei zaehlen.                |
| lct    | `ls -lcrh`                        | Dateien nach Zeit, neueste zuerst.                     |
| ld     | `ls -ltrh`                        | Nach Datum sortieren, aelteste zuerst.                 |
| ldir   | `ls -l \| egrep '^d'`             | Nur Verzeichnisse auflisten.                           |
| ldot   | `l.`                              | Versteckte Dateien auflisten.                          |
| left   | `ls -t -1`                        | Dateien nach Datum, neueste zuletzt.                   |
| right  | `ls -t -1r`                       | Dateien nach Datum, neueste zuerst.                    |
| lf     | `ls -l \| egrep -v '^d'`          | Nur Dateien auflisten.                                 |
| lk     | `ls -lSrh`                        | Nach Groesse sortieren, groesste zuerst.               |
| ll     | `la`                              | Lange Liste, fast alle, Typ, lesbar.                   |
| lla    | `ls -l -d $PWD/*`                 | Vollstaendige Pfade im aktuellen Verzeichnis.          |
| locale | `locale -a \| grep UTF-8`         | Verfuegbare Locales auflisten.                         |
| lp     | `sudo lsof -i -T -n`              | Offene Ports auflisten.                                |
| lr     | `ls -lRh`                         | Rekursiv, Typ anzeigen, lesbar.                        |
| ls     | `ls --color`                      | Ausgabe einfärben.                                     |
| lS     | `ls -1FSsh`                       | Dateien nach Zeit und Groesse ordnen.                  |
| lt     | `tree`                            | Inhalt als Baumstruktur anzeigen.                      |
| lu     | `ls -lurh`                        | Nach Datum sortieren, aelteste zuerst.                 |
| lw     | `ls -xAh`                         | Breite Liste, fast alle, Typ, lesbar.                  |
| lx     | `ls \| sort -k 1,1 -t .`          | Nach Erweiterung sortieren.                            |
| lz     | `ls -lSr`                         | Nach Groesse sortieren, kleinste zuerst.               |
