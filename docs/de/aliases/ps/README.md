---
description: Die PS-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `ps` Kommandozeilen-Tool zu interagieren. Ps ist ein Tool, das einen Schnappschuss der aktuellen Prozesse berichtet.
lang: de-DE
metaTitle: PS Aliase - Dotfiles (DE)
permalink: /de/aliases/ps/
---

# PS Aliase

Die Datei `ps.aliases.sh` erstellt hilfreiche Shortcut-Aliase für das Arbeiten mit
Prozessen.

Die PS-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem
`ps` Kommandozeilen-Tool zu interagieren. Ps ist ein Tool, das einen Schnappschuss der aktuellen
Prozesse berichtet.

## PS

[PS](<https://de.wikipedia.org/wiki/Ps_(Unix)>) ist ein Befehl, der die
auf dem System laufenden Prozesse auflistet.

| Alias | Befehl   | Beschreibung                                                                                                                                              |
| ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pid   | `ps -f`  | Zeige die UID, PID, Eltern-PID, aktuelle CPU-Nutzung, Prozessstartzeit, steuerndes TTY, verstrichene CPU-Nutzung und den zugehörigen Befehl an. |
| ps    | `ps -ef` | Zeige alle Prozesse an.                                                                                                                                   |
| psa   | `ps aux` | Liste alle Prozesse auf.                                                                                                                                  |
