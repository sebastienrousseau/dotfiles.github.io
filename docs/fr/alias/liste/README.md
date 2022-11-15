---
description: Les alias de liste sont des alias qui vous permettent de lister des fichiers et des répertoires.
lang: fr-FR
metaTitle: Les alias de liste - Dotfiles (FR)
permalink: /aliases/liste/

meta:
  - name: keywords
    content: alias, environnement, mode interactif, zsh, bash, fish, shell, dotfiles
  - name: twitter:card
    content: Les alias de liste sont des alias qui vous permettent de lister des fichiers et des répertoires.
  - name: twitter:description
    content: Les alias de liste sont des alias qui vous permettent de lister des fichiers et des répertoires.
  - name: twitter:title
    content: Les alias de liste - Dotfiles (FR)
  - name: og:title
    content: Les alias de liste - Dotfiles (FR)
  - name: og:description
    content: Les alias de liste sont des alias qui vous permettent de lister des fichiers et des répertoires.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias de liste

Le fichier `list.aliases.sh` crée des raccourcis utiles pour lister des fichiers
et des répertoires.

Les alias de liste sont des alias qui vous permettent d'interagir avec la
commande `ls` de manière plus efficace et plus rapide pour lister des fichiers
et des répertoires.

Pour chaque opération qui nomme un fichier d'un type autre qu'un répertoire,
`ls` affiche son nom ainsi que toute information associée demandée.

## Raccourcis de liste

| Alias | Commande | Description |
| ----- | ----- | ----- |
| l. | `ls -dlhF .* | grep -v "^d"` | Liste les fichiers cachés |
| l | `ls -lFh` | Taille des fichiers, type de fichier et humainement lisible |
| l1 | `ls -1` | Liste les fichiers et les répertoires sur une seule ligne |
| la | `ls -lAFh` | Liste les fichiers et les répertoires cachés |
| labc | `ls -lap` | Liste les fichiers et les répertoires par ordre alphabétique |
| lc | `wc -l` | Compte le nombre de lignes |
| lct | `ls -lcrh` | Liste les fichiers et les répertoires par date de création |
| ld | `ls -ltrh` | Liste les fichiers et les répertoires par date de modification |
| ldir | `ls -l | egrep '^d'` | Liste les répertoires |
| ldot | `l.` | Liste les fichiers cachés |
| left | `ls -t -1` | Liste les fichiers et les répertoires par date de modification |
| right | `ls -t -1r` | Liste les fichiers et les répertoires par date de modification |
| lf | `ls -l | egrep -v '^d'` | Liste les fichiers uniquement |
| lk | `ls -lSrh` | Liste les fichiers et les répertoires par taille |
| ll | `la` | Liste les fichiers et les répertoires cachés |
| lla | `ls -l -d $PWD/*` | Liste les fichiers et les répertoires cachés |
| locale | `locale -a | grep UTF-8` | Liste les locales |
| lp | `sudo lsof -i -T -n` | Liste les processus |
| lr | `ls -lRh` | Liste les fichiers et les répertoires récursivement |
| ls | `ls --color` | Liste les fichiers et les répertoires avec la couleur |
| lS | `ls -1FSsh` | Liste les fichiers et les répertoires par taille |
| lt | `tree` | Liste les fichiers et les répertoires sous forme d'arbre |
| lu | `ls -lurh` | Liste les fichiers et les répertoires par date d'accès |
| lw | `ls -xAh` | Liste les fichiers et les répertoires par largeur |
| lx | `ls | sort -k 1,1 -t .` | Liste les fichiers et les répertoires par extension |
| lz | `ls -lSr` | Liste les fichiers et les répertoires par taille |
