---
description: Die Jekyll-Aliase ermoeglichen eine interaktivere Nutzung von Jekyll. Jekyll ist ein Static-Site-Generator.
lang: de-DE
metaTitle: Jekyll-Aliase - Dotfiles (DE)
permalink: /de/aliases/jekyll/

meta:
  - name: keywords
    content: aliases, bash, jekyll, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die Jekyll-Aliase ermoeglichen eine interaktivere Nutzung von Jekyll. Jekyll ist ein Static-Site-Generator.
  - name: twitter:description
    content: Die Jekyll-Aliase ermoeglichen eine interaktivere Nutzung von Jekyll. Jekyll ist ein Static-Site-Generator.
  - name: twitter:title
    content: Jekyll-Aliase - Dotfiles (DE)
  - name: og:title
    content: Jekyll-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Jekyll-Aliase ermoeglichen eine interaktivere Nutzung von Jekyll. Jekyll ist ein Static-Site-Generator.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---

# Jekyll-Aliase

Diese Datei `jekyll.aliases.sh` erstellt hilfreiche Shortcut-Aliase fuer viele
haeufig genutzte [Jekyll](https://jekyllrb.com/) Befehle.

Die Jekyll-Aliase ermoeglichen eine interaktivere Nutzung von Jekyll. Jekyll ist
ein Static-Site-Generator. Er nimmt Text in deinem bevorzugten Markup und erstellt
mit Layouts eine statische Website. Du kannst Look & Feel, URLs, Daten und mehr
anpassen.

## Jekyll development aliases

| Alias | Command                                                           | Description                                                                             |
| ----- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Einmaliger Build nach ./_site.                                                          |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Entfernt generierte Dateien: Zielordner, Metadaten, Sass- und Jekyll-Caches.            |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Dev-Build nach '_site' und lokaler Entwicklungsserver.                                  |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Dev-Build nach '_site' und lokaler Entwicklungsserver.                                  |
| jko   | `open http://localhost:4000/`                                     | Lokalen Entwicklungsserver oeffnen.                                                     |

## Jekyll release aliases

| Alias | Command                                                          | Description                                                                          |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Production-Build nach '_site' und lokaler Entwicklungsserver.                        |
