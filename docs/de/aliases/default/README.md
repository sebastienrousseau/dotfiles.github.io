---
description: Die Standard-Aliase sind Aliase, die nicht spezifisch für einen bestimmten Befehl sind. Es sind allgemeine Aliase, die in vielen verschiedenen Kontexten verwendet werden und hier der Bequemlichkeit halber aufgeführt sind.
lang: de-DE
metaTitle: Standard Aliase - Dotfiles (DE)
permalink: /de/aliases/default/
---

# Standard Aliase

Die Datei `default.aliases.sh` erstellt hilfreiche Shortcut-Aliase für viele häufig
verwendete Befehle.

## Standard

Die Standard-Aliase sind Aliase, die nicht spezifisch für einen bestimmten Befehl sind.
Es sind allgemeine Aliase, die in vielen verschiedenen Kontexten verwendet werden und
hier der Bequemlichkeit halber aufgeführt sind. Die Aliase sind zur einfachen Verwendung in alphabetischer Reihenfolge aufgeführt.

| Alias    | Befehl                               | Beschreibung                                                                                                                            |
| -------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| :q       | `quit`                               | Kurzbefehl für den `exit`-Befehl.                                                                                                       |
| bye      | `quit`                               | Kurzbefehl für den `exit`-Befehl.                                                                                                       |
| ctf      | `echo $(ls -1                        | wc -l)`                                                                                                                                 | Zähle die Anzahl der Dateien im aktuellen Verzeichnis. |
| curl     | `curl --compressed`                  | Verwende Kompression beim Übertragen von Daten.                                                                                         |
| da       | `date "+%Y-%m-%d %A %T %Z"`          | Zeige das aktuelle Datum und die Uhrzeit an.                                                                                            |
| h        | `history`                            | Listet alle kürzlich verwendeten Befehle auf.                                                                                           |
| halt     | `sudo /sbin/halt`                    | Fahre das System herunter (Halt).                                                                                                       |
| ifconfig | `sudo ifconfig`                      | Hänge sudo an den ifconfig-Befehl (Netzwerkschnittstellenparameter konfigurieren) an.                                                   |
| ipinfo   | `ipconfig getpacket en0`             | Hole Netzwerkschnittstellenparameter für en0.                                                                                           |
| moon     | `curl -s "wttr.in/?format=%m"`       | Hole die Mondphase.                                                                                                                     |
| nls      | `sudo lsof -i -P                     | grep LISTEN`                                                                                                                            | Zeige nur aktive Netzwerk-Listener.                 |
| now      | `date +"%T"`                         | Zeige die aktuelle Uhrzeit.                                                                                                             |
| op       | `sudo lsof -i -P`                    | Liste der offenen Ports.                                                                                                                |
| p        | `pwd`                                | Kurzbefehl für `pwd`, der den Namen des Arbeitsverzeichnisses zurückgibt.                                                               |
| path     | `echo ${PATH//:/\\n}`                | Zeige die $PATH-Variable auf neuen Zeilen an.                                                                                           |
| pid      | `ps -f`                              | Zeige uid, pid, parent pid, aktuelle CPU-Nutzung, Prozessstartzeit, steuerndes tty, verstrichene CPU-Nutzung und den zugehörigen Befehl.|
| ping     | `ping -c 5`                          | Begrenze Ping auf 5 ECHO_REQUEST-Pakete.                                                                                                |
| please   | `sudo -`                             | Führe einen Befehl als Superuser aus.                                                                                                   |
| ports    | `netstat -tulan`                     | Liste alle lauschenden Ports auf.                                                                                                       |
| poweroff | `sudo /sbin/shutdown`                | Schalte das System aus (Power off).                                                                                                     |
| ps       | `ps auxwww`                          | Hole den vollen Pfad von ausführbaren Dateien.                                                                                          |
| q        | `quit`                               | Kurzbefehl für den `exit`-Befehl.                                                                                                       |
| qfind    | `find . -name`                       | Suche schnell nach Datei.                                                                                                               |
| quit     | `exit`                               | Kurzbefehl für den `exit`-Befehl.                                                                                                       |
| r        | `reload`                             | Lade die Shell neu.                                                                                                                     |
| reboot   | `sudo /sbin/reboot`                  | Starte das System neu.                                                                                                                  |
| reload   | `exec $SHELL -l`                     | Lade die Shell neu.                                                                                                                     |
| shutdown | `sudo shutdown -h now'`              | Fahre das System herunter.                                                                                                              |
| spd      | `sudo rm -rf /private/var/log/asl/*` | Entferne alle Logdateien in /private/var/log/asl.                                                                                       |
| srv      | `python3 -m http.server`             | Starte einen einfachen HTTP-Server.                                                                                                     |
| t        | `tail -f`                            | Druckt die letzten 10 Zeilen einer Text- oder Logdatei und wartet dann auf neue Ergänzungen, um sie in Echtzeit zu drucken.             |
| top      | `sudo btop`                          | Ermöglicht dem Benutzer, die vitalen Ressourcen des Systems oder Serverprozesse in Echtzeit interaktiv zu überwachen.                   |
| tree     | `tree --dirsfirst`                   | Zeige einen Verzeichnisbaum an.                                                                                                         |
| wk       | `date +%V`                           | Zeige die aktuelle Wochennummer.                                                                                                        |
| wth      | `curl -s "wttr.in/?format=3"`        | Hole das Wetter.                                                                                                                        |
| x        | `quit`                               | Kurzbefehl für den `exit`-Befehl.                                                                                                       |
