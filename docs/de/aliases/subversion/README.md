---
description: Die Subversion-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `svn` Befehl zu interagieren. Subversion ist ein Versionskontrollsystem.
lang: de-DE
metaTitle: Subversion Aliase - Dotfiles (DE)
permalink: /de/aliases/subversion/
---

# Subversion Aliase

Diese `subversion.aliases.sh` Datei erstellt hilfreiche Shortcut-Aliase für viele
häufig verwendete [Subversion](https://subversion.apache.org) Befehle.

Die Subversion-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit
dem `svn` Befehl zu interagieren. Subversion ist ein Versionskontrollsystem, das es Ihnen ermöglicht,
alte Versionen von Dateien und Verzeichnissen (meist Quellcode) zu behalten und ein Protokoll
darüber zu führen, wer, wann und warum Änderungen vorgenommen wurden.

## Subversion

[Subversion](https://subversion.apache.org) ist ein Versionskontrollsystem, das
Änderungen an Dateien und Verzeichnissen verfolgt. Es wird verwendet, um Quellcode für
Softwareprojekte zu verwalten.

| Alias | Befehl           | Beschreibung                                                                                                                 |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| sad   | `svn add`        | Stelle neue Dateien und Verzeichnisse unter Versionskontrolle                                                                |
| sau   | `svn auth`       | Verwalte zwischengespeicherte Authentifizierungsdaten                                                                        |
| sbl   | `svn blame`      | Zeige an, wann jede Zeile einer Datei zuletzt (oder als nächstes) geändert wurde                                             |
| scg   | `svn changelist` | Verknüpfe (oder trenne) Änderungsliste CLNAME mit den benannten Dateien                                                      |
| sco   | `svn checkout`   | Checke eine Arbeitskopie aus einem Repository aus                                                                            |
| scl   | `svn cleanup`    | Stelle entweder eine unterbrochene Operation wieder her, die die Arbeitskopie gesperrt hat, oder entferne unerwünschte Datei |
| sci   | `svn commit`     | Sende Änderungen von deiner Arbeitskopie an das Repository                                                                   |
| scp   | `svn copy`       | Kopiere Dateien und Verzeichnisse in einer Arbeitskopie oder einem Repository                                                |
| sct   | `svn cat`        | Gebe den Inhalt von angegebenen Dateien oder URLs aus                                                                        |
| sdi   | `svn diff`       | Zeige lokale Änderungen oder Unterschiede zwischen zwei Revisionen oder Pfaden an                                            |
| sdl   | `svn delete`     | Entferne Dateien und Verzeichnisse aus der Versionskontrolle                                                                 |
| shp   | `svn help`       | Beschreibe die Verwendung dieses Programms oder seiner Unterbefehle                                                          |
| sin   | `svn info`       | Zeige Informationen über ein lokales oder entferntes Element an                                                              |
| sip   | `svn import`     | Übertrage eine nicht versionierte Datei oder einen Baum in das Repository                                                    |
| slg   | `svn log`        | Zeige die Protokollnachrichten für einen Satz von Revision(en) und/oder Pfad(en)                                             |
| slk   | `svn lock`       | Sperre Arbeitskopie-Pfade oder URLs im Repository, kein anderer Benutzer kann Änderungen an ihnen vornehmen                  |
| sls   | `svn list`       | Liste Verzeichniseinträge im Repository auf                                                                                  |
| smd   | `svn mkdir`      | Erstelle ein neues Verzeichnis unter Versionskontrolle                                                                       |
| smg   | `svn merge`      | Führe Änderungen in eine Arbeitskopie zusammen                                                                               |
| smgi  | `svn mergeinfo`  | Zeige zusammenführungsbezogene Informationen an                                                                              |
| smv   | `svn move`       | Verschiebe (benenne um) ein Element in einer Arbeitskopie oder einem Repository                                              |
| sp    | `svn propset`    | Setze den Wert einer Eigenschaft für Dateien, Verzeichnisse oder Revisionen                                                  |
| spdl  | `svn propdel`    | Entferne eine Eigenschaft von Dateien, Verzeichnissen oder Revisionen                                                        |
| spdt  | `svn propedit`   | Bearbeite eine Eigenschaft mit einem externen Editor                                                                         |
| spgt  | `svn propget`    | Drucke den Wert einer Eigenschaft von Dateien, Verzeichnissen oder Revisionen                                                |
| sph   | `svn patch`      | Wende einen Patch auf eine Arbeitskopie an                                                                                   |
| spls  | `svn proplist`   | Liste alle Eigenschaften von Dateien, Verzeichnissen oder Revisionen auf                                                     |
| srl   | `svn relocate`   | Relocate die Arbeitskopie, um auf eine andere Repository-Root-URL zu zeigen                                                  |
| srs   | `svn resolve`    | Löse Konflikte bei Arbeitskopie-Dateien oder -Verzeichnissen                                                                 |
| srsd  | `svn resolved`   | Entferne 'Konflikt'-Status bei Arbeitskopie-Dateien oder -Verzeichnissen                                                     |
| srv   | `svn revert`     | Stelle den ursprünglichen Zustand der Arbeitskopie wieder her (mache lokale Änderungen rückgängig)                           |
| sst   | `svn status`     | Drucke den Status von Arbeitskopie-Dateien und -Verzeichnissen                                                               |
| ssw   | `svn switch`     | Aktualisiere die Arbeitskopie auf eine andere URL innerhalb desselben Repositorys                                            |
| sulk  | `svn unlock`     | Entsperre Arbeitskopie-Pfade oder URLs.                                                                                      |
| sup   | `svn update`     | Bringe Änderungen aus dem Repository in die Arbeitskopie                                                                     |
| supg  | `svn upgrade`    | Rüste das Metadaten-Speicherformat für eine Arbeitskopie auf                                                                 |
| sxp   | `svn export`     | Erstelle eine nicht versionierte Kopie eines Baums                                                                           |
