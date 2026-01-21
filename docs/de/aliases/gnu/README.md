---
description: Die GNU Core Utilities Aliase bieten leistungsstarke Befehle, die Verknüpfungen zu häufig verwendeten Core Utilities Befehlen erstellen. Alle diese Funktionen und Aliase sind Wrapper um die GNU Core Utilities, welche die grundlegenden Werkzeuge eines GNU/Linux-Systems sind.
lang: de-DE
metaTitle: GNU Core Utilities Aliase - Dotfiles (DE)
permalink: /de/aliases/gnu/
---

# GNU Core Utilities Aliase

Die Datei `gnucoreutils-aliases.sh` erstellt hilfreiche Shortcut-Aliase für viele
häufig verwendete [GNU coreutils][coreutils] Befehle.

Die GNU Core Utilities Aliase bieten leistungsstarke Befehle, die Verknüpfungen
zu häufig verwendeten Core Utilities Befehlen erstellen. Alle diese Funktionen und Aliase
sind Wrapper um die GNU Core Utilities, welche die grundlegenden Werkzeuge
eines GNU/Linux-Systems sind.

Dies sind die Core Utilities, von denen erwartet wird, dass sie auf jedem Betriebssystem existieren.

## GNU coreutils Aliase

| Alias     | Befehl       | Beschreibung                                                                                                                                                                             |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| b2sum     | `gb2sum`     | Drucke oder überprüfe BLAKE2b (512-bit) Prüfsummen.                                                                                                                                      |
| base32    | `gbase32`    | Base32 kodiere oder dekodiere DATEI oder Standardeingabe auf Standardausgabe.                                                                                                            |
| base64    | `gbase64`    | Base64 kodiere oder dekodiere DATEI oder Standardeingabe auf Standardausgabe.                                                                                                            |
| basename  | `gbasename`  | Drucke NAME, wobei alle führenden Verzeichniskomponenten entfernt wurden.                                                                                                                |
| basenc    | `gbasenc`    | Kodiere oder dekodiere DATEI oder Standardeingabe auf Standardausgabe.                                                                                                                   |
| cat       | `gcat`       | Verkette DATEI(en) oder Standardeingabe auf Standardausgabe.                                                                                                                             |
| chcon     | `gchcon`     | Ändere den SELinux-Sicherheitskontext jeder DATEI zu KONTEXT.                                                                                                                            |
| chgrp     | `gchgrp`     | Ändere die Gruppe jeder DATEI zu GRUPPE.                                                                                                                                                 |
| chmod     | `gchmod`     | Ändere den Modus jeder DATEI zu MODUS.                                                                                                                                                   |
| chown     | `gchownn`    | Ändere den Eigentümer und/oder die Gruppe jeder DATEI zu EIGENTÜMER und/oder GRUPPE.                                                                                                     |
| chroot    | `gchroot`    | Führe BEFEHL aus, wobei das Root-Verzeichnis auf NEUESROOT gesetzt ist.                                                                                                                  |
| cksum     | `gcksum`     | Drucke CRC-Prüfsumme und Byte-Anzahl.                                                                                                                                                    |
| comm      | `gcomm`      | Vergleiche zwei sortierte Dateien Zeile für Zeile.                                                                                                                                       |
| cp        | `gcp`        | Kopiere QUELLE nach ZIEL oder mehrere QUELLE(n) nach VERZEICHNIS.                                                                                                                        |
| csplit    | `gcsplit`    | Spalte eine Datei in Abschnitte auf, bestimmt durch Kontextzeilen.                                                                                                                       |
| cut       | `gcut`       | Drucke ausgewählte Teile von Zeilen aus jeder DATEI auf die Standardausgabe.                                                                                                             |
| date      | `gdate`      | Drucke oder setze das Systemdatum und die Uhrzeit.                                                                                                                                       |
| dd        | `gdd`        | Kopiere eine Datei, konvertiere und formatiere gemäß den Operanden.                                                                                                                      |
| df        | `gdf`        | Berichte über Dateisystem-Speicherplatzbelegung.                                                                                                                                         |
| dir       | `gdir`       | Liste Verzeichnisinhalte auf.                                                                                                                                                            |
| dircolors | `gdircolors` | Konvertiere ls-Ausgabefarben in das dircolors-Format.                                                                                                                                    |
| dirname   | `gdirname`   | Drucke NAME, wobei die letzte Nicht-Slash-Komponente und nachfolgende Slashes entfernt wurden.                                                                                           |
| du        | `gdu`        | Schätze Dateispeicherplatzbelegung.                                                                                                                                                      |
| echo      | `gecho`      | Zeige eine Textzeile an.                                                                                                                                                                 |
| env       | `genv`       | Drucke die aktuelle Umgebung.                                                                                                                                                            |
| expand    | `gexpand`    | Konvertiere Tabs in jeder DATEI zu Leerzeichen, schreibe auf Standardausgabe.                                                                                                            |
| expr      | `gexpr`      | Werte AUSDRUCK aus.                                                                                                                                                                      |
| factor    | `gfactor`    | Drucke Primfaktoren jeder gegebenen Zahl.                                                                                                                                                |
| false     | `gfalse`     | Tue nichts, erfolglos.                                                                                                                                                                   |
| fmt       | `gfmt`       | Formatiere Absatztext neu.                                                                                                                                                               |
| fold      | `gfold`      | Breche jede Eingabezeile um, damit sie in die angegebene Breite passt.                                                                                                                   |
| grep      | `ggrep`      | Drucke Zeilen, die einem Muster entsprechen.                                                                                                                                             |
| groups    | `ggroups`    | Drucke die Gruppen, in denen ein Benutzer ist.                                                                                                                                           |
| head      | `ghead`      | Drucke die ersten 10 Zeilen jeder DATEI auf die Standardausgabe.                                                                                                                         |
| hostid    | `ghostid`    | Drucke die Host-ID.                                                                                                                                                                      |
| id        | `gid`        | Drucke reale und effektive Benutzer- und Gruppen-IDs.                                                                                                                                    |
| install   | `ginstall`   | Kopiere Dateien und setze Attribute.                                                                                                                                                     |
| join      | `gjoin`      | Verbinde Zeilen von zwei Dateien anhand eines gemeinsamen Feldes.                                                                                                                        |
| kill      | `gkill`      | Sende ein Signal an einen Prozess.                                                                                                                                                       |
| link      | `glink`      | Erstelle einen Link zu einer Datei.                                                                                                                                                      |
| ln        | `gln`        | Mache Links zwischen Dateien.                                                                                                                                                            |
| logname   | `glogname`   | Drucke den Benutzernamen, der mit der aktuellen effektiven Benutzer-ID verbunden ist.                                                                                                    |
| ls        | `gls`        | Liste Verzeichnisinhalte auf.                                                                                                                                                            |
| md5sum    | `gmd5sum`    | Drucke oder überprüfe MD5 (128-bit) Prüfsummen.                                                                                                                                          |
| mkdir     | `gmkdir`     | Erstelle die VERZEICHNIS(SE), wenn sie noch nicht existieren.                                                                                                                            |
| mkfifo    | `gmkfifo`    | Erstelle benannte Pipes (FIFOs) namens PIPE.                                                                                                                                             |
| mknod     | `gmknod`     | Erstelle Spezialdateien.                                                                                                                                                                 |
| mktemp    | `gmktemp`    | Erstelle eine temporäre Datei oder ein Verzeichnis, sicher.                                                                                                                              |
| mv        | `gmv`        | Verschiebe QUELLE nach ZIEL oder mehrere QUELLE(n) nach VERZEICHNIS.                                                                                                                     |
| nice      | `gnice`      | Führe ein Dienstprogramm mit modifizierter Scheduling-Priorität aus.                                                                                                                     |
| nl        | `gnl`        | Nummeriere Zeilen von Dateien, schreibe auf Standardausgabe.                                                                                                                             |
| nohup     | `gnohup`     | Führe einen Befehl immun gegen Hangups aus, mit Ausgabe auf ein Nicht-TTY.                                                                                                               |
| nproc     | `gnproc`     | Drucke die Anzahl der verfügbaren Verarbeitungseinheiten.                                                                                                                                |
| numfmt    | `gnumfmt`    | Formatiere Zahlen neu.                                                                                                                                                                   |
| od        | `god`        | Dumpe eine Datei in oktal und anderen Formaten.                                                                                                                                          |
| paste     | `gpaste`     | Mische Zeilen von Dateien.                                                                                                                                                               |
| pathchk   | `gpathchk`   | Prüfe, ob ein Dateiname gültig oder portabel ist.                                                                                                                                        |
| pinky     | `gpinky`     | Drucke Informationen über Benutzer.                                                                                                                                                      |
| pr        | `gpr`        | Paginiere DATEI zum Drucken.                                                                                                                                                             |
| printenv  | `gprintenv`  | Drucke die aktuelle Umgebung.                                                                                                                                                            |
| printf    | `gprintf`    | Formatiere und drucke Daten.                                                                                                                                                             |
| ptx       | `gptx`       | Zeige den Inhalt einer Terminal-Steuerdatei an.                                                                                                                                          |
| pwd       | `gpwd`       | Drucke den Namen des aktuellen Arbeitsverzeichnisses.                                                                                                                                    |
| readlink  | `greadlink`  | Drucke Wert eines symbolischen Links oder kanonischen Dateinamen.                                                                                                                        |
| realpath  | `grealpath`  | Kanonisiere bestehende Dateinamen.                                                                                                                                                       |
| rm        | `grm`        | Entferne (unlink) die DATEI(en).                                                                                                                                                         |
| rmdir     | `grmdir`     | Entferne die VERZEICHNIS(SE), wenn sie leer sind.                                                                                                                                        |
| runcon    | `gruncon`    | Führe einen Befehl mit einem anderen SELinux-Sicherheitskontext aus.                                                                                                                     |
| sed       | `gsed`       | Stream-Editor zum Filtern und Transformieren von Text.                                                                                                                                   |
| seq       | `gseq`       | Drucke eine Sequenz von Zahlen.                                                                                                                                                          |
| sha1sum   | `gsha1sum`   | Drucke oder überprüfe SHA1 (160-bit) Prüfsummen.                                                                                                                                         |
| sha224sum | `gsha224sum` | Drucke oder überprüfe SHA224 (224-bit) Prüfsummen.                                                                                                                                       |
| sha256sum | `gsha256sum` | Drucke oder überprüfe SHA256 (256-bit) Prüfsummen.                                                                                                                                       |
| sha384sum | `gsha384sum` | Drucke oder überprüfe SHA384 (384-bit) Prüfsummen.                                                                                                                                       |
| sha512sum | `gsha512sum` | Drucke oder überprüfe SHA512 (512-bit) Prüfsummen.                                                                                                                                       |
| shred     | `gshred`     | Überschreibe eine Datei, um ihren Inhalt zu verbergen, und lösche sie optional.                                                                                                          |
| shuf      | `gshuf`      | Gebe eine zufällige Permutation der Eingabezeilen aus.                                                                                                                                   |
| sleep     | `gsleep`     | Pausiere für ANZAHL Sekunden.                                                                                                                                                            |
| sort      | `gsort`      | Sortiere Zeilen von Textdateien.                                                                                                                                                         |
| split     | `gsplit`     | Spalte eine Datei in Stücke auf.                                                                                                                                                         |
| stat      | `gstat`      | Zeige Datei- oder Dateisystemstatus an.                                                                                                                                                  |
| stdbuf    | `gstdbuf`    | Führe BEFEHL mit modifizierten Pufferoperationen für seine Standard-Streams aus.                                                                                                         |
| stty      | `gstty`      | Hole und setze Terminalattribute.                                                                                                                                                        |
| sum       | `gsum`       | Drucke CRC-Prüfsumme und Byte-Anzahl.                                                                                                                                                    |
| sync      | `gsync`      | Rufe sync auf, um Dateisystempuffer zu flushen.                                                                                                                                          |
| tac       | `gtac`       | Verkette und drucke Dateien rückwärts.                                                                                                                                                   |
| tail      | `gtail`      | Gebe den letzten Teil von Dateien aus.                                                                                                                                                   |
| tee       | `gtee`       | Lese von der Standardeingabe und schreibe auf die Standardausgabe und in Dateien.                                                                                                        |
| test      | `gtest`      | Werte bedingten Ausdruck aus.                                                                                                                                                            |
| timeout   | `gtimeout`   | Führe einen Befehl mit einem Zeitlimit aus.                                                                                                                                              |
| touch     | `gtouch`     | Ändere Datei-Zeitstempel.                                                                                                                                                                |
| tr        | `gtr`        | Übersetze, quetsche und/oder lösche Zeichen.                                                                                                                                             |
| true      | `gtrue`      | Tue nichts, erfolgreich.                                                                                                                                                                 |
| truncate  | `gtruncate`  | truncate: Schrumpfe oder erweitere die Größe einer Datei auf die angegebene Größe.                                                                                                       |
| tsort     | `gtsort`     | Topologische Sortierung.                                                                                                                                                                 |
| tty       | `gtty`       | Drucke den Dateinamen des Terminals, das mit der Standardeingabe verbunden ist.                                                                                                          |
| uname     | `guname`     | Drucke bestimmte Systeminformationen.                                                                                                                                                    |
| unexpand  | `gunexpand`  | unexpand: Konvertiere Leerzeichen in jeder DATEI zu Tabs, schreibe auf Standardausgabe.                                                                                                  |
| uniq      | `guniq`      | Filtere benachbarte übereinstimmende Zeilen aus der EINGABE (oder Standardeingabe), schreibe auf AUSGABE (oder Standardausgabe).                                                         |
| unlink    | `gunlink`    | Rufe die unlink-Funktion auf, um die angegebene DATEI zu entfernen.                                                                                                                      |
| uptime    | `guptime`    | Drucke die aktuelle Zeit, die Laufzeit des Systems, die Anzahl der Benutzer und die durchschnittliche Anzahl der Jobs in der Run-Queue über die letzten 1, 5 und 15 Minuten.             |
| users     | `gusers`     | Gib aus, wer derzeit eingeloggt ist.                                                                                                                                                     |
| vdir      | `gvdir`      | Liste Informationen über die DATEI(en) (standardmäßig das aktuelle Verzeichnis).                                                                                                         |
| wc        | `gwc`        | Drucke Zeilenumbruch-, Wort- und Byte-Anzahl für jede DATEI und eine Gesamtzeile, wenn mehr als eine DATEI angegeben ist.                                                                |
| who       | `gwho`       | Drucke Informationen über Benutzer, die derzeit eingeloggt sind.                                                                                                                         |
| whoami    | `gwhoami`    | Drucke den Benutzernamen, der mit der aktuellen effektiven Benutzer-ID verbunden ist.                                                                                                    |
| yes       | `gyes`       | Gebe wiederholt eine Zeile mit allen angegebenen STRING(s) oder 'y' aus.                                                                                                                 |

[coreutils]: https://www.gnu.org/software/coreutils/
