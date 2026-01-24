---
description: Os alias de Jekyll permitem interagir com o Jekyll. Jekyll e um gerador de site estatico.
lang: pt-PT
metaTitle: Alias de Jekyll - Dotfiles (PT)
permalink: /pt/aliases/jekyll/

meta:
  - name: keywords
    content: aliases, bash, jekyll, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Os alias de Jekyll permitem interagir com o Jekyll. Jekyll e um gerador de site estatico.
  - name: twitter:description
    content: Os alias de Jekyll permitem interagir com o Jekyll. Jekyll e um gerador de site estatico.
  - name: twitter:title
    content: Alias de Jekyll - Dotfiles (PT)
  - name: og:title
    content: Alias de Jekyll - Dotfiles (PT)
  - name: og:description
    content: Os alias de Jekyll permitem interagir com o Jekyll. Jekyll e um gerador de site estatico.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---

# Alias de Jekyll

O arquivo `jekyll.aliases.sh` cria atalhos para comandos do [Jekyll](https://jekyllrb.com/).

## Alias de desenvolvimento

| Alias | Command                                                           | Description                                                                             |
| ----- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Build unico para ./_site.                                                               |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Remove arquivos gerados: destino, metadados, caches.                                    |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Build dev e servidor local.                                                             |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Build dev e servidor local.                                                             |
| jko   | `open http://localhost:4000/`                                     | Abrir servidor local.                                                                   |

## Alias de release

| Alias | Command                                                          | Description                                                                          |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Build production e servidor local.                                                   |
