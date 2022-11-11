---
description: Les alias cd sont une collection d'alias qui vous permettent d'interagir avec l'outil de ligne de commande `cd` qui permet de changer le répertoire courant.
lang: fr-FR
metaTitle:  Les alias cd - Dotfiles (FR)
permalink: /fr/alias/cd/

meta:
  - name: keywords
    content: alias, app, bash, cd, cd, cod, des, dot, dotfiles, dow, hom, linux, macos, mus, pic, shell, vid, windows
  - name: twitter:card
    content: Les alias cd sont une collection d'alias qui vous permettent d'interagir avec l'outil de ligne de commande `cd` qui permet de changer le répertoire courant.
  - name: twitter:description
    content: Les alias cd sont une collection d'alias qui vous permettent d'interagir avec l'outil de ligne de commande `cd` qui permet de changer le répertoire courant.
  - name: twitter:title
    content:  Les alias cd - Dotfiles (FR)
  - name: og:title
    content:  Les alias cd - Dotfiles (FR)
  - name: og:description
    content: Les alias cd sont une collection d'alias qui vous permettent d'interagir avec l'outil de ligne de commande `cd` qui permet de changer le répertoire courant.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias cd

Le fichier `cd.aliases.sh` crée des alias de raccourcis utiles pour la
navigation dans le terminal.

Les alias cd sont une collection d'alias qui vous
permettent d'interagir avec l'outil de ligne de commande `cd` qui permet de
changer le répertoire courant.

## Changer de répertoire

La commande `cd`, également connue sous le nom de chdir (changer de répertoire),
est une instruction de l'interpréteur de commandes utilisée pour changer le
répertoire de travail actuel dans plusieurs systèmes d'exploitation.

| Alias | Command | Description |
| ----- | ----- | ----- |
| - | `cd -` | Raccourci pour revenir au répertoire précédent |
| .. | `cd ..` | Raccourci pour revenir au répertoire parent |
| ... | `cd ../..` | Raccourci pour revenir au répertoire parent du parent |
| .... | `cd ../../..` | Raccourci pour revenir au répertoire parent du parent du parent |
| ..... | `cd ../../../..` | Raccourci pour revenir au répertoire parent du parent du parent du parent |
| ~ | `cd ~` | Raccourci pour revenir au répertoire utilisateur |
| app | `cd ${HOME}/Applications; ls` | Raccourci pour accéder au répertoire Applications |
| cod | `cd ${HOME}/Code; ls` | Raccourci pour accéder au répertoire Code |
| des | `cd ${HOME}/Desktop; ls` | Raccourci pour accéder au répertoire Bureau |
| doc | `cd ${HOME}/Documents; ls` | Raccourci pour accéder au répertoire Documents |
| dot | `cd ${HOME}/.dotfiles; ls` | Raccourci pour accéder au répertoire .dotfiles |
| dow | `cd ${HOME}/Downloads; ls` | Raccourci pour accéder au répertoire Téléchargements |
| hom | `cd ${HOME}/; ls` | Raccourci pour accéder au répertoire utilisateur |
| mus | `cd ${HOME}/Music; ls` | Raccourci pour accéder au répertoire Musique |
| pic | `cd ${HOME}/Pictures; ls` | Raccourci pour accéder au répertoire Images |
| vid | `cd ${HOME}/Videos; ls` | Raccourci pour accéder au répertoire Vidéos |
