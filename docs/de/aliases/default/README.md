---
description: Wesentliche Shell-Aliase für Navigation, Systemsteuerung und tägliche Aufgaben. Vereinfachen Sie Ihren Terminal-Workflow mit diesen universellen Verknüpfungen.
lang: de-DE
metaTitle: Default Aliase - Dotfiles (DE)
permalink: /de/aliases/default/
sidebar: true

meta:
  - name: keywords
    content: default aliase, shell aliase, terminal verknüpfungen, dotfiles, bash aliase
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Wesentliche Shell-Aliase für Navigation, Systemsteuerung und tägliche Aufgaben.
  - name: twitter:title
    content: Default Aliase - Dotfiles
  - name: og:title
    content: Default Aliase - Dotfiles
  - name: og:description
    content: Wesentliche Shell-Aliase für Navigation, Systemsteuerung und tägliche Aufgaben.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Default Aliase

Wesentliche Shell-Verknüpfungen für alltägliche Terminal-Aufgaben.

## Übersicht

Diese Aliase sind in `default.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Allgemein

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Aktuelles Datum und Uhrzeit anzeigen |
| `p` | `pwd` | Arbeitsverzeichnis ausgeben |
| `path` | `echo ${PATH//:/\\n}` | PATH-Variable in neuen Zeilen anzeigen |
| `r` | `reload` | Shell neu laden |
| `t` | `tail -f` | Dateiausgabe in Echtzeit verfolgen |
| `wk` | `date +%V` | Aktuelle Kalenderwoche anzeigen |

### Beenden und Herunterfahren

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `q` | `exit` | Shell beenden |
| `quit` | `exit` | Shell beenden |
| `bye` | `exit` | Shell beenden |
| `:q` | `exit` | Shell beenden (Vim-Stil) |
| `halt` | `sudo /sbin/halt` | System anhalten |
| `poweroff` | `sudo /sbin/shutdown` | System ausschalten |
| `reboot` | `sudo /sbin/reboot` | System neu starten |

### Verlauf

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `h` | `history` | Befehlsverlauf anzeigen |
| `history` | `fc -il 1` | Verlauf mit ISO 8601 Zeitstempeln anzeigen |

### Netzwerk

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `ifconfig` | `sudo ifconfig` | Netzwerkschnittstellen konfigurieren |
| `ipinfo` | `ipconfig getpacket en0` | Netzwerkparameter für en0 abrufen |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Aktive Netzwerk-Listener anzeigen |
| `op` | `sudo lsof -i -P` | Offene Ports auflisten |
| `ping` | `ping -c 5` | Ping mit 5 Paket-Limit |
| `ports` | `netstat -tulan` | Alle lauschenden Ports auflisten |

### Systemüberwachung

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `top` | `sudo btop` | Interaktiver Prozessmonitor |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | ASL-Logdateien löschen |

### Dienstprogramme

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `ctf` | `ls -1 \| wc -l` | Dateien im aktuellen Verzeichnis zählen |
| `qfind` | `find . -name` | Schnelle Dateisuche |
| `reload` | `exec $SHELL -l` | Shell neu laden |
| `wth` | `curl -s "wttr.in/?format=3"` | Aktuelles Wetter abrufen |
