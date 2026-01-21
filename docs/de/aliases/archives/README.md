---
description: Die Archiv-Aliase sind in der Lage, Archive in einer Vielzahl von Formaten zu erstellen und zu verarbeiten.
lang: de-DE
metaTitle: Archiv Aliase - Dotfiles (DE)
permalink: /de/aliases/archives/
---

# Archiv Aliase

Die Datei `archives.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Archivieren
von Dateien und Verzeichnissen. Die Aliase können Archive in einer Vielzahl von
Formaten erstellen und verarbeiten.

## 7-Zip

[7-Zip](http://www.7-zip.org/) ist ein Dateiarchivierer mit einer hohen Kompressionsrate.

| Alias | Befehl  | Beschreibung                                                         |
| ----- | ------- | -------------------------------------------------------------------- |
| c7z   | `7z a`  | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine 7z-Datei. |
| e7z   | `7z x`  | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer 7z-Datei. |

## Bzip2

[Bzip2](http://www.bzip.org/) ist ein frei verfügbarer, patentfreier, hochwertiger
Datenkompressor.

| Alias | Befehl    | Beschreibung                     |
| ----- | --------- | ------------------------------- |
| cbz2  | `bzip2`   | Komprimiere eine Datei in eine bz2-Datei.  |
| ebz2  | `bunzip2` | Extrahiere eine Datei aus einer bz2-Datei. |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) ist ein beliebtes Datenkompressionsprogramm
als Ersatz für compress.

| Alias | Befehl   | Beschreibung                    |
| ----- | -------- | ------------------------------ |
| cgz   | `gzip`   | Komprimiere eine Datei in eine gz-Datei.  |
| egz   | `gunzip` | Extrahiere eine Datei aus einer gz-Datei. |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) ist ein Dateiformat,
das verwendet wird, um viele Dateien in einer einzigen Datei zusammenzufassen, um Anwendungssoftware oder
Bibliotheken auf der Java-Plattform zu verteilen.

| Alias | Befehl     | Beschreibung                                                           |
| ----- | ---------- | --------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine jar-Datei.  |
| ejar  | `jar -xvf` | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer jar-Datei. |

## Tar

[Tar](https://www.gnu.org/software/tar/) ist ein Computerprogramm, das verwendet wird, um
viele Dateien zusammen in einer einzigen Datei zu speichern.

| Alias | Befehl      | Beschreibung                                                              |
| ----- | ----------- | ------------------------------------------------------------------------ |
| ctar  | `tar -cvf`  | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine tar-Datei.     |
| etar  | `tar -xvf`  | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer tar-Datei.    |
| ctgz  | `tar -cvzf` | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine tar.gz-Datei.  |
| etgz  | `tar -xvzf` | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer tar.gz-Datei. |

## Xz

[Xz](https://tukaani.org/xz/) ist eine Allzweck-Datenkompressionssoftware
mit einer hohen Kompressionsrate.

| Alias | Befehl     | Beschreibung                                                          |
| ----- | ---------- | -------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine xz-Datei.  |
| exz   | `xz -zxvf` | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer xz-Datei. |

## Zip

[Zip](<https://de.wikipedia.org/wiki/ZIP_(Dateiformat)>) ist ein Dateiformat, das verwendet wird, um
eine einzelne Datei auszugeben, die eine oder mehrere Dateien enthält.

| Alias | Befehl   | Beschreibung                                                           |
| ----- | -------- | --------------------------------------------------------------------- |
| cz    | `zip -r` | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine zip-Datei.  |
| ez    | `unzip`  | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer zip-Datei. |

## Zstd

[Zstd](https://facebook.github.io/zstd/) ist ein schneller verlustfreier Kompressionsalgorithmus,
der auf Echtzeit-Kompressionsszenarien auf zlib-Niveau und bessere
Kompressionsraten abzielt.

| Alias | Befehl       | Beschreibung                                                           |
| ----- | ------------ | --------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Komprimiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) in eine zst-Datei.  |
| ezstd | `zstd -zxvf` | Extrahiere ein ganzes Verzeichnis (inkl. Unterverzeichnisse) aus einer zst-Datei. |
