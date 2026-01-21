---
description: Die PNpm-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `pnpm` Kommandozeilen-Tool zu interagieren. Pnpm ist ein schneller, speicherplatzeffizienter Paketmanager.
lang: de-DE
metaTitle: PNpm Aliase - Dotfiles (DE)
permalink: /de/aliases/pnpm/
---

# PNpm Aliase

Die Datei `pnpm.aliases.sh` erstellt hilfreiche Shortcut-Aliase für viele
häufig verwendete [PNpm](https://pnpm.io) Befehle.

Die PNpm-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem
`pnpm` Kommandozeilen-Tool zu interagieren. Pnpm ist ein schneller, speicherplatzeffizienter Paketmanager.

## PNpm

[PNpm](https://pnpm.io) ist ein Paketmanager für JavaScript und Node.js. Er
ist schnell, speicherplatzeffizient und zuverlässig.

| Alias | Befehl                               | Beschreibung                                               |
| ----- | ------------------------------------ | ---------------------------------------------------------- |
| pna   | `pnpm add`                           | Füge ein Paket zum Projekt hinzu                           |
| pnad  | `pnpm add --save-dev`                | Füge ein Paket als Entwicklungsabhängigkeit zum Projekt hinzu |
| pnap  | `pnpm add --save-peer`               | Füge ein Paket als Peer-Abhängigkeit zum Projekt hinzu     |
| pnau  | `pnpm audit`                         | Überprüfe das Projekt auf Sicherheitslücken                |
| pnb   | `pnpm run build`                     | Baue das Projekt                                           |
| pnc   | `pnpm create`                        | Erstelle ein neues Projekt                                 |
| pnd   | `pnpm run dev`                       | Führe das Projekt im Entwicklungsmodus aus                 |
| pndoc | `pnpm run doc`                       | Generiere Dokumentation für das Projekt                    |
| pnga  | `pnpm add --global`                  | Füge ein Paket zum globalen Speicher hinzu                 |
| pngls | `pnpm list --global`                 | Liste Pakete im globalen Speicher auf                      |
| pngrm | `pnpm remove --global`               | Entferne ein Paket aus dem globalen Speicher               |
| pngu  | `pnpm update --global`               | Aktualisiere ein Paket im globalen Speicher                |
| pnh   | `pnpm help`                          | Zeige Hilfe für einen Befehl an                            |
| pni   | `pnpm init`                          | Initialisiere ein neues Projekt                            |
| pnin  | `pnpm install`                       | Installiere die Abhängigkeiten des Projekts                |
| pnln  | `pnpm run lint`                      | Führt `pnpm run lint` aus                                  |
| pnls  | `pnpm list`                          | Liste Pakete im Projekt auf                                |
| pnout | `pnpm outdated`                      | Auf veraltete Pakete prüfen                                |
| pnp   | `pnpm`                               | Führe einen PNpm-Befehl aus                                |
| pnpub | `pnpm publish`                       | Veröffentliche das Projekt                                 |
| pnrm  | `pnpm remove`                        | Entferne ein Paket aus dem Projekt                         |
| pnrun | `pnpm run`                           | Führe ein Skript im Projekt aus                            |
| pns   | `pnpm run serve`                     | Führe das Projekt im Produktionsmodus aus                  |
| pnst  | `pnpm start`                         | Starte das Projekt                                         |
| pnsv  | `pnpm server`                        | Starte den Entwicklungsserver des Projekts                 |
| pnt   | `pnpm test`                          | Führe die Tests des Projekts aus                           |
| pntc  | `pnpm test --coverage`               | Führe die Tests des Projekts mit Abdeckung aus             |
| pnui  | `pnpm update --interactive`          | Interaktives Aktualisieren von Paketen                     |
| pnuil | `pnpm update --interactive --latest` | Interaktives Aktualisieren von Paketen auf die neueste Version |
| pnun  | `pnpm uninstall`                     | Entferne ein Paket aus dem Projekt                         |
| pnup  | `pnpm update`                        | Aktualisiere Pakete im Projekt                             |
| pnwhy | `pnpm why`                           | Zeige an, warum ein Paket installiert ist                  |
| pnx   | `pnpx`                               | Führe einen PNpx-Befehl aus                                |
