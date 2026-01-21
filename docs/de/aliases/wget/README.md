---
description: Die Wget-Aliase erstellen hilfreiche Shortcut-Aliase für den `wget` Befehl. Wget ist ein Tool, das Dateien aus dem Internet herunterlädt.
lang: de-DE
metaTitle: Wget Aliase - Dotfiles (DE)
permalink: /de/aliases/wget/
---

# Wget Aliase

Diese `wget.aliases.sh` Datei erstellt hilfreiche Shortcut-Aliase für viele häufig
verwendete [wget](https://www.gnu.org/software/wget/) Befehle.

Die Wget-Aliase erstellen hilfreiche Shortcut-Aliase für den `wget` Befehl. Wget ist
ein Tool, das Dateien aus dem Internet herunterlädt.

## Wget

GNU [Wget](https://www.gnu.org/software/wget/) ist ein freies Dienstprogramm für
den nicht-interaktiven Download von Dateien aus dem Web. Es unterstützt HTTP, HTTPS und
FTP-Protokolle sowie den Abruf über HTTP-Proxies.

| Alias | Befehl             | Beschreibung                                      |
| ----- | ------------------ | ------------------------------------------------- |
| wg    | `wget`             | Lade eine Datei herunter.                         |
| wgc   | `wg`               | Setze eine teilweise heruntergeladene Datei fort. |
| wge   | `wg -e robots=off` | Lade eine Datei herunter, ignoriere robots.txt.   |
| wget  | `wget -c`          | Setze eine teilweise heruntergeladene Datei fort. |
