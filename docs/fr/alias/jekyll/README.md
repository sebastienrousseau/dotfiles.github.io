---
description: Les alias Jekyll sont une collection d'alias qui permettent d'interagir avec Jekyll de manière plus interactive. Jekyll est un générateur de site statique. Il prend du texte écrit dans votre langage de balisage préféré et utilise des mises en page pour créer un site statique.
lang: fr-FR
metaTitle: Alias Jekyll - Dotfiles (FR)
permalink: /alias/jekyll/

meta:
  - name: keywords
    content: alias, bash, jekyll, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias Jekyll sont une collection d'alias qui permettent d'interagir avec Jekyll de manière plus interactive. Jekyll est un générateur de site statique. Il prend du texte écrit dans votre langage de balisage préféré et utilise des mises en page pour créer un site statique.
  - name: twitter:description
    content: Les alias Jekyll sont une collection d'alias qui permettent d'interagir avec Jekyll de manière plus interactive. Jekyll est un générateur de site statique. Il prend du texte écrit dans votre langage de balisage préféré et utilise des mises en page pour créer un site statique.
  - name: twitter:title
    content: Alias Jekyll - Dotfiles (FR)
  - name: og:title
    content: Alias Jekyll - Dotfiles (FR)
  - name: og:description
    content: Les alias Jekyll sont une collection d'alias qui permettent d'interagir avec Jekyll de manière plus interactive. Jekyll est un générateur de site statique. Il prend du texte écrit dans votre langage de balisage préféré et utilise des mises en page pour créer un site statique.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Jekyll

Ce fichier `jekyll.aliases.sh` crée des alias de raccourcis utiles pour de nombreuses commandes [Jekyll](https://jekyllrb.com/) courantes.

Les alias Jekyll permettent d'interagir avec Jekyll de manière plus interactive. Jekyll est un générateur de site statique. Il prend du texte écrit dans votre langage de balisage préféré et utilise des mises en page pour créer un site statique. Vous pouvez ajuster l'apparence du site, les URLs, les données affichées, et plus encore.

## Alias de développement Jekyll

| Alias | Commande                                                           | Description                                                                             |
| ----- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                  | Effectue une construction ponctuelle du site vers ./_site.                              |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                  | Supprime tous les fichiers générés : dossier de destination, métadonnées, caches Sass et Jekyll. |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace`  | Construit le site en mode dev vers '_site' et lance un serveur local de développement.  |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`     | Construit le site en mode dev vers '_site' et lance un serveur local de développement.  |
| jko   | `open http://localhost:4000/`                                      | Ouvrir le serveur de développement local.                                               |

## Alias de release Jekyll

| Alias | Commande                                                          | Description                                                                          |
| ----- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace`   | Construit le site en production vers '_site' et lance un serveur local de développement. |
