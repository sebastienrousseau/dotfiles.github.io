---
description: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
lang: en-GB
metaTitle: Jekyll aliases - Dotfiles (UK)
permalink: /aliases/jekyll/

meta:
  - name: keywords
    content: aliases, bash, jekyll, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
  - name: twitter:creator
    content: "@wwdseb"
  - name: twitter:description
    content: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
  - name: og:title
    content: Jekyll aliases - Dotfiles (UK)
  - name: og:description
    content: The Jekyll aliases are a collection of aliases that allow you to interact with Jekyll in a more interactive way. Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Jekyll aliases

This `jekyll.aliases.zsh` file creates helpful shortcut aliases for many
commonly used [Jekyll](https://jekyllrb.com/) commands.

The Jekyll aliases are a collection of aliases that allow you to interact with
Jekyll in a more interactive way. Jekyll is a static site generator. It takes
text written in your favorite markup language and uses layouts to create a
static website. You can tweak the site’s look and feel, URLs, the data displayed
on the page, and more.

## Jekyll development aliases

| Alias | Command | Description |
| ----- | ----- | ----- |
| jkb | `JEKYLL_ENV=development bundle exec jekyll build` | Performs a one off build your site to ./_site. |
| jkc | `JEKYLL_ENV=development bundle exec jekyll clean` | Removes all generated files: destination folder, metadata file, Sass and Jekyll caches. |
| jkd | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Does a development build of the site to '_site' and runs a local development server. |
| jkl | `JEKYLL_ENV=development bundle exec jekyll serve --livereload` | Does a development build of the site to '_site' and runs a local development server. |
| jko | `open http://localhost:4000/` | Open local development server. |

## Jekyll release aliases

| Alias | Command | Description |
| ----- | ----- | ----- |
| jkp | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Does a production build of the site to '_site' and runs a local development server.|
