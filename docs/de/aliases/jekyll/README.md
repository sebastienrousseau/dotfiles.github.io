---
description: Die Jekyll-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit Jekyll auf interaktivere Weise zu interagieren. Jekyll ist ein statischer Seitengenerator.
lang: de-DE
metaTitle: Jekyll Aliase - Dotfiles (DE)
permalink: /de/aliases/jekyll/
---

# Jekyll Aliase

Diese `jekyll.aliases.sh` Datei erstellt hilfreiche Shortcut-Aliase für viele
häufig verwendete [Jekyll](https://jekyllrb.com/) Befehle.

Die Jekyll-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit
Jekyll auf interaktivere Weise zu interagieren. Jekyll ist ein statischer Seitengenerator. Er nimmt
Text, der in Ihrer bevorzugten Auszeichnungssprache geschrieben ist, und verwendet Layouts, um eine
statische Website zu erstellen. Sie können das Aussehen und Gefühl der Website, URLs, die angezeigten Daten
auf der Seite und mehr anpassen.

## Jekyll Entwicklungs-Aliase

| Alias | Befehl                                                            | Beschreibung                                                                                              |
| ----- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Führt einen einmaligen Build Ihrer Site nach ./\_site durch.                                              |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Entfernt alle generierten Dateien: Zielordner, Metadaten-Datei, Sass- und Jekyll-Caches.                  |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Führt einen Entwicklungs-Build der Site nach '\_site' durch und startet einen lokalen Entwicklungsserver. |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Führt einen Entwicklungs-Build der Site nach '\_site' durch und startet einen lokalen Entwicklungsserver. |
| jko   | `open http://localhost:4000/`                                     | Öffne lokalen Entwicklungsserver.                                                                         |

## Jekyll Release-Aliase

| Alias | Befehl                                                           | Beschreibung                                                                                             |
| ----- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Führt einen Produktions-Build der Site nach '\_site' durch und startet einen lokalen Entwicklungsserver. |
