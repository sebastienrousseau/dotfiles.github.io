---
description: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
lang: es-ES
metaTitle: Jekyll aliases - Dotfiles (ES)
permalink: /es/aliases/jekyll/

meta:
  - name: keywords
    content: aliases, bash, jekyll, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
  - name: twitter:description
    content: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
  - name: twitter:title
    content: Jekyll aliases - Dotfiles (ES)
  - name: og:title
    content: Jekyll aliases - Dotfiles (ES)
  - name: og:description
    content: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Jekyll aliases

This `jekyll.aliases.sh` file creates helpful shortcut aliases for many
commonly used [Jekyll](https://jekyllrb.com/) commands.

The Jekyll aliases are a collection of aliases that allow you to interact with
Jekyll in a more interactive way. Jekyll is a static site generator. It takes
text written in your favorite markup language and uses layouts to create a
static website. You can tweak the site’s look and feel, URLs, the data displayed
on the page, and more.

## Jekyll development aliases

| Alias | Comando               | Descripción                                                                |
| ----- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Performs a one off Construir your site to ./\_site.                                         |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Removes all generated archivos: destination folder, metadata archivo, Sass and Jekyll caches. |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Does a development Construir of the site to '\_site' and runs a local development server.   |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Does a development Construir of the site to '\_site' and runs a local development server.   |
| jko   | `open http://localhost:4000/`                                     | Abrir local development server.                                                          |

## Jekyll release aliases

| Alias | Comando               | Descripción                                                                |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Does a production Construir of the site to '\_site' and runs a local development server. |
