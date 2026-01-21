---
description: Die Sudo-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `sudo` Befehl zu interagieren. Sudo ist ein Tool, das es Ihnen ermöglicht, Befehle als ein anderer Benutzer auszuführen.
lang: de-DE
metaTitle: Sudo Aliase - Dotfiles (DE)
permalink: /de/aliases/sudo/
---

# Sudo Aliase

Die Datei `sudo.aliases.sh` erstellt hilfreiche Shortcut-Aliase für die Verwendung von `sudo`
mit Befehlen.

Die Sudo-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit
dem `sudo` Befehl zu interagieren. Sudo ist ein Tool, das es Ihnen ermöglicht, Befehle als ein anderer
Benutzer auszuführen.

## Sudo

[Sudo](https://de.wikipedia.org/wiki/Sudo) ist ein Befehl, der es Benutzern ermöglicht,
Befehle als ein anderer Benutzer auszuführen.

| Alias | Befehl    | Beschreibung                          |
| ----- | --------- | ------------------------------------- |
| root  | `s`       | Führe einen Befehl als Superuser aus. |
| s     | `sudo -i` | Führe einen Befehl als Superuser aus. |
| su    | `sudo su` | Führe einen Befehl als Superuser aus. |
| sudo  | `s`       | Führe einen Befehl als Superuser aus. |
