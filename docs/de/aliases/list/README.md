---
description: Die Listen-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem Befehl `ls` auf interaktivere Weise zu interagieren, um den Inhalt eines Verzeichnisses anzuzeigen.
lang: de-DE
metaTitle: Listen (ls) Aliase - Dotfiles (DE)
permalink: /de/aliases/list/
---

# Listen Aliase

Die Datei `list.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Auflisten von Dateien
und Verzeichnissen.

Die Listen-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit
dem Befehl `ls` auf interaktivere Weise zu interagieren, um den Inhalt eines
Verzeichnisses anzuzeigen.

Für jeden Operanden, der eine Datei eines anderen Typs als Verzeichnis benennt, zeigt `ls`
dessen Namen sowie alle angeforderten, zugehörigen Informationen an. Für jeden Operanden,
der eine Datei des Typs Verzeichnis benennt, zeigt `ls` die Namen der darin enthaltenen Dateien
sowie alle angeforderten, zugehörigen Informationen an.

## ls

[ls](https://de.wikipedia.org/wiki/Ls) ist ein Befehl, der den Inhalt eines
Verzeichnisses auflistet.

| Alias  | Befehl               | Beschreibung                                                      |
| ------ | -------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                                     | Versteckte Dateien auflisten.       |
| l      | `ls -lFh`            | Größe, Typ anzeigen, menschenlesbar.                              |
| l1     | `ls -1`              | Eine Datei pro Zeile anzeigen.                                    |
| la     | `ls -lAFh`           | Alle Dateien, Typ anzeigen, menschenlesbar.                       |
| labc   | `ls -lap`            | Alle Dateien in alphabetischer Reihenfolge auflisten.             |
| lc     | `wc -l`              | Anzahl der Zeilen in der Datei zählen.                            |
| lct    | `ls -lcrh`           | Dateien nach Zeit auflisten, neueste zuerst.                      |
| ld     | `ls -ltrh`           | Nach Datum sortieren, älteste zuerst.                             |
| ldir   | `ls -l               | egrep '^d'`                                                       | Nur Verzeichnisse auflisten.        |
| ldot   | `l.`                 | Versteckte Dateien auflisten.                                     |
| left   | `ls -t -1`           | Dateien nach Datum auflisten, neueste zuletzt.                    |
| right  | `ls -t -1r`          | Dateien nach Datum auflisten, neueste zuerst.                     |
| lf     | `ls -l               | egrep -v '^d'`                                                    | Nur Dateien auflisten.              |
| lk     | `ls -lSrh`           | Nach Größe sortieren, größte zuerst.                              |
| ll     | `la`                 | Lange Liste, fast alle anzeigen, Typ anzeigen, menschenlesbar.    |
| lla    | `ls -l -d $PWD/*`    | Vollen Pfad aller Dateien im aktuellen Verzeichnis auflisten.     |
| locale | `locale -a           | grep UTF-8`                                                       | Alle verfügbaren Locales auflisten. |
| lp     | `sudo lsof -i -T -n` | Alle offenen Ports auflisten.                                     |
| lr     | `ls -lRh`            | Rekursive Liste, Typ anzeigen, menschenlesbar.                    |
| ls     | `ls --color`         | Ausgabe einfärben.                                                |
| lS     | `ls -1FSsh`          | Dateien basierend auf letzter Änderung und Größe ordnen.          |
| lt     | `tree`               | Inhalte von Verzeichnissen in einem baumartigen Format auflisten. |
| lu     | `ls -lurh`           | Nach Datum sortieren, älteste zuerst.                             |
| lw     | `ls -xAh`            | Breite Liste, fast alle anzeigen, Typ anzeigen, menschenlesbar.   |
| lx     | `ls                  | sort -k 1,1 -t .`                                                 | Nach Erweiterung sortieren.         |
| lz     | `ls -lSr`            | Nach Größe sortieren, kleinste zuerst.                            |
