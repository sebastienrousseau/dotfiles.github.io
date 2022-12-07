---
description: Les alias Jekyll sont des alias qui vous permettent de gérer votre site web statique. Jekyll est un générateur de site web statique écrit en Ruby. Il est utilisé pour créer des sites web statiques pour les blogs, les sites web personnels et les sites web d'entreprise.
lang: fr-FR
metaTitle: Les alias Jekyll - Dotfiles (FR)
permalink: /aliases/jekyll/

meta:
  - name: keywords
    content: alias, blog, dotfiles, entreprise, environnement, générateur, jekyll, ruby, shell, site web, site web statique
  - name: twitter:card
    content: Les alias Jekyll sont des alias qui vous permettent de gérer votre site web statique. Jekyll est un générateur de site web statique écrit en Ruby. Il est utilisé pour créer des sites web statiques pour les blogs, les sites web personnels et les sites web d'entreprise.
  - name: twitter:description
    content: Les alias Jekyll sont des alias qui vous permettent de gérer votre site web statique. Jekyll est un générateur de site web statique écrit en Ruby. Il est utilisé pour créer des sites web statiques pour les blogs, les sites web personnels et les sites web d'entreprise.
  - name: twitter:title
    content: Les alias Jekyll - Dotfiles (FR)
  - name: og:title
    content: Les alias Jekyll - Dotfiles (FR)
  - name: og:description
    content: Les alias Jekyll sont des alias qui vous permettent de gérer votre site web statique. Jekyll est un générateur de site web statique écrit en Ruby. Il est utilisé pour créer des sites web statiques pour les blogs, les sites web personnels et les sites web d'entreprise.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias Jekyll

Le fichier `jekyll.aliases.sh` contient des alias pour gérer votre site web
statique. [Jekyll](https://jekyllrb.com/) est un générateur de site web statique
écrit en Ruby. Il est utilisé pour créer des sites web statiques pour les blogs,
les sites web personnels et les sites web d'entreprise.

Les alias de Jekyll sont un ensemble d'alias qui vous permettent d'interagir
avec Jekyll de manière plus interactive. Jekyll est un générateur de sites
statiques. Il prend du texte écrit dans votre langage de balisage préféré et
utilise des mises en page pour créer un site Web statique. Vous pouvez modifier
l'aspect et la convivialité du site, les URL, les données affichées sur la
page, etc.

## Les raccourcis Jekyll

| Alias | Command                                                           | Description                                                                  |
| ----- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Construit le site web statique en mode développement.                        |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Supprime les fichiers générés par Jekyll.                                    |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Démarre le serveur de développement Jekyll.                                  |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Démarre le serveur de développement Jekyll avec le rechargement automatique. |
| jko   | `open http://localhost:4000/`                                     | Ouvre le site web statique dans le navigateur par défaut.                    |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace`  | Démarre le serveur de production Jekyll.                                     |
