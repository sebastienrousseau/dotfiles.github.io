---
description: Les alias List sont une collection d'alias qui permettent d'interagir avec la commande `ls` de manière plus interactive afin d'afficher le contenu d'un répertoire.
lang: fr-FR
metaTitle: Les alias List (ls) - Dotfiles (FR)
permalink: /alias/list/

meta:
  - name: keywords
    content: alias, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias List sont une collection d'alias qui permettent d'interagir avec la commande `ls` de manière plus interactive afin d'afficher le contenu d'un répertoire.
  - name: twitter:description
    content: Les alias List sont une collection d'alias qui permettent d'interagir avec la commande `ls` de manière plus interactive afin d'afficher le contenu d'un répertoire.
  - name: twitter:title
    content: Les alias List (ls) - Dotfiles (FR)
  - name: og:title
    content: Les alias List (ls) - Dotfiles (FR)
  - name: og:description
    content: Les alias List sont une collection d'alias qui permettent d'interagir avec la commande `ls` de manière plus interactive afin d'afficher le contenu d'un répertoire.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias List

Le fichier `list.aliases.sh` crée des alias de raccourcis utiles pour lister les fichiers et répertoires.

Les alias List sont une collection d'alias qui permettent d'interagir avec la commande `ls` de manière plus interactive afin d'afficher le contenu d'un répertoire.

Pour chaque opérande qui nomme un fichier autre qu'un répertoire, `ls` affiche son nom ainsi que toute information associée demandée. Pour chaque opérande qui nomme un répertoire, `ls` affiche les noms des fichiers contenus dans ce répertoire, ainsi que toute information associée demandée.

## ls

[ls](https://en.wikipedia.org/wiki/Ls) est une commande qui liste le contenu d'un répertoire.

| Alias  | Commande | Description |
| ------ | -------- | ----------- |
| l.     | `ls -dlhF .* \| grep -v "^d"` | Lister les fichiers cachés. |
| l      | `ls -lFh` | Taille, type, lisible. |
| l1     | `ls -1` | Afficher un fichier par ligne. |
| la     | `ls -lAFh` | Tous les fichiers, type, lisible. |
| labc   | `ls -lap` | Lister tous les fichiers par ordre alphabétique. |
| lc     | `wc -l` | Compter le nombre de lignes dans le fichier. |
| lct    | `ls -lcrh` | Lister par date, plus récent d'abord. |
| ld     | `ls -ltrh` | Trier par date, plus ancien d'abord. |
| ldir   | `ls -l \| egrep '^d'` | Lister uniquement les répertoires. |
| ldot   | `l.` | Lister les fichiers cachés. |
| left   | `ls -t -1` | Lister par date, le plus récent en dernier. |
| right  | `ls -t -1r` | Lister par date, le plus récent en premier. |
| lf     | `ls -l \| egrep -v '^d'` | Lister uniquement les fichiers. |
| lk     | `ls -lSrh` | Trier par taille, le plus gros d'abord. |
| ll     | `la` | Liste longue, quasi tout, type, lisible. |
| lla    | `ls -l -d $PWD/*` | Lister le chemin complet des fichiers du répertoire courant. |
| locale | `locale -a \| grep UTF-8` | Lister toutes les locales disponibles. |
| lp     | `sudo lsof -i -T -n` | Lister tous les ports ouverts. |
| lr     | `ls -lRh` | Liste récursive, type, lisible. |
| ls     | `ls --color` | Coloriser la sortie. |
| lS     | `ls -1FSsh` | Trier par date de modification et taille. |
| lt     | `tree` | Lister le contenu en arborescence. |
| lu     | `ls -lurh` | Trier par date, plus ancien d'abord. |
| lw     | `ls -xAh` | Liste large, quasi tout, type, lisible. |
| lx     | `ls \| sort -k 1,1 -t .` | Trier par extension. |
| lz     | `ls -lSr` | Trier par taille, plus petit d'abord. |
