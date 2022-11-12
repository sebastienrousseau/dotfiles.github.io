---
description: Les alias de recherche sont des commandes qui vous permettent de trouver des fichiers ou des dossiers en fonction de leur nom. Ils sont très utiles pour les utilisateurs qui passent beaucoup de temps à naviguer dans les dossiers.
lang: fr-FR
metaTitle: Les alias de recherche - Dotfiles (FR)
permalink: /alias/find/

meta:
  - name: keywords
    content: alias, commandes, dossiers, dotfiles, dotfiles-fr, fd, fichiers, nom, recherche, trouver
  - name: twitter:card
    content: Les alias de recherche sont des commandes qui vous permettent de trouver des fichiers ou des dossiers en fonction de leur nom. Ils sont très utiles pour les utilisateurs qui passent beaucoup de temps à naviguer dans les dossiers.
  - name: twitter:description
    content: Les alias de recherche sont des commandes qui vous permettent de trouver des fichiers ou des dossiers en fonction de leur nom. Ils sont très utiles pour les utilisateurs qui passent beaucoup de temps à naviguer dans les dossiers.
  - name: twitter:title
    content: Les alias de recherche - Dotfiles (FR)
  - name: og:title
    content: Les alias de recherche - Dotfiles (FR)
  - name: og:description
    content: Les alias de recherche sont des commandes qui vous permettent de trouver des fichiers ou des dossiers en fonction de leur nom. Ils sont très utiles pour les utilisateurs qui passent beaucoup de temps à naviguer dans les dossiers.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias de recherche

Le fichier `find.aliases.sh` crée des alias de raccourcis pour les commandes de
recherche de fichiers et de dossiers `fd`. Ils sont très utiles pour les
utilisateurs qui passent beaucoup de temps à naviguer dans les dossiers.

La commande `fd` est une alternative à `find` qui est plus rapide et plus facile
à utiliser. Elle est écrite en Rust et est disponible sur macOS, Linux et
Windows. Pour plus d'informations, consultez la [documentation de `fd`][fd].

Traditionnellement, la commande `find` est utilisée pour rechercher des fichiers
et performe une recherche récursive dans le dossier courant.

Nous avons décidé d'utiliser `fd` pour les alias de recherche car ils sont plus
rapides et plus faciles à utiliser.

## Raccourcis

| Alias | Commande | Description |
| ----- | ----- | ----- |
| fd | `fd --color always` | Toujours afficher les résultats avec des couleurs. |
| fda | `fd --absolute-path` | Afficher les résultats avec des chemins absolus. |
| fdc | `fd --ignore-case` | Ignorer la casse. |
| fdd | `fd  --list-details` | Afficher les résultats avec des détails. |
| fde | `fd --extension` | Rechercher des fichiers avec une extension spécifique. |
| fdf | `fd --follow` | Suivre les liens symboliques. |
| fdh | `fd --help` | Afficher l'aide. |
| fdh | `fd --hidden` | Rechercher des fichiers cachés. |
| fdn | `fd --glob` | Rechercher des fichiers avec un motif de nom. |
| fdo | `fd --owner` | Rechercher des fichiers avec un propriétaire spécifique. |
| fds | `fd --size` | Rechercher des fichiers avec une taille spécifique. |
| fdu | `fd --exclude` | Exclure des fichiers ou des dossiers. |
| fdv | `fd --version` | Afficher la version. |
| fdx | `fd --exec` | Exécuter une commande pour chaque résultat. |
| find | `fd` | Rechercher des fichiers et des dossiers. |

[fd]:https://github.com/sharkdp/fd
