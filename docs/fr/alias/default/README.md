---
description: Les alias de base sont des alias qui ne sont pas spécifiques à une ligne de commande spécifique. Ce sont des alias courants qui sont utilisés dans de nombreux contextes différents et qui sont répertoriés dans cette section pour des raisons de commodité.
lang: fr-FR
metaTitle: Les alias de base - Dotfiles (FR)
permalink: /fr/aliases/default/

meta:
  - name: twitter:card
    content: Les alias de base sont des alias qui ne sont pas spécifiques à une ligne de commande spécifique. Ce sont des alias courants qui sont utilisés dans de nombreux contextes différents et qui sont répertoriés dans cette section pour des raisons de commodité.
  - name: twitter:description
    content: Les alias de base sont des alias qui ne sont pas spécifiques à une ligne de commande spécifique. Ce sont des alias courants qui sont utilisés dans de nombreux contextes différents et qui sont répertoriés dans cette section pour des raisons de commodité.
  - name: twitter:title
    content: Les alias de base - Dotfiles (FR)
  - name: og:title
    content: Les alias de base - Dotfiles (FR)
  - name: og:description
    content: Les alias de base sont des alias qui ne sont pas spécifiques à une ligne de commande spécifique. Ce sont des alias courants qui sont utilisés dans de nombreux contextes différents et qui sont répertoriés dans cette section pour des raisons de commodité.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias de base

Le fichier `default.aliases.sh` crée des alias de raccourcis pour plusieurs
commandes courantes.

Les raccourcis de base sont des alias qui ne sont pas associés à une ligne de
commande particulière. Ils sont utilisés dans de nombreux contextes et
répertoriés dans cette section pour des raisons de commodité. Ils sont classés
par ordre alphabétique pour faciliter leur utilisation.

## Raccourcis

| Alias | Command | Description |
| ----- | ----- | ----- |
| :q    | `quit` | Raccourci pour quitter la session actuelle. |
| bye   | `quit` | Raccourci pour quitter la session actuelle. |
| ctf   | `echo $(ls -1 | wc -l)` | Compte le nombre de fichiers dans le répertoire actuel. |
| curl  | `curl --compressed` | Raccourci pour `curl` avec compression. |
| da    | `date "+%Y-%m-%d %A %T %Z"` | Raccourci pour `date` avec un format personnalisé. |
| h     | `history` | Raccourci pour `history`. |
| halt  | `sudo /sbin/halt` | Raccourci pour `halt` avec `sudo`. |
| ifconfig | `sudo ifconfig` | Raccourci pour `ifconfig` avec `sudo`. |
| ipinfo | `ipconfig getpacket en0` | Raccourci pour `ipconfig getpacket en0`. |
| moon  | `curl -s "wttr.in/?format=%m"` | Raccourci pour `curl` avec `wttr.in` pour afficher la phase de la lune. |
| nls   | `sudo lsof -i -P | grep LISTEN` | Raccourci pour `lsof` avec `sudo`. |
| now   | `date +"%T"` | Raccourci pour `date` avec un format personnalisé. |
| op    | `sudo lsof -i -P` | Raccourci pour `lsof` avec `sudo`. |
| p     | `pwd` | Raccourci pour `pwd`. |
| path  | `echo  ${PATH//:/\\n}` | Raccourci pour afficher le PATH. |
| pid   | `ps -f` | Raccourci pour `ps` avec un format personnalisé. |
| ping  | `ping -c 5` | Raccourci pour `ping` avec 5 paquets. |
| please | `sudo -` | Raccourci pour `sudo` avec `-`. |
| ports | `netstat -tulan` | Raccourci pour `netstat` avec un format personnalisé. |
| poweroff | `sudo /sbin/shutdown` | Raccourci pour `shutdown` avec `sudo`. |
| ps | `ps auxwww` | Raccourci pour `ps` avec un format personnalisé. |
| q | `quit` | Raccourci pour quitter la session actuelle. |
| qfind | `find . -name` | Raccourci pour `find` avec un format personnalisé. |
| quit | `exit` | Raccourci pour `exit`. |
| r | `reload` | Raccourci pour recharger la session actuelle. |
| reboot | `sudo /sbin/reboot` | Raccourci pour `reboot` avec `sudo`. |
| reload | `exec $SHELL -l` | Raccourci pour quitter la session actuelle. |
| shutdown | `sudo shutdown -h now'` | Raccourci pour `shutdown` avec `sudo`. |
| spd | `sudo rm -rf /private/var/log/asl/*` | Enlève les journaux système. |
| srv | `python3 -m http.server` | Raccourci pour `python3` avec un serveur HTTP. |
| t | `tail -f` | Raccourci pour `tail` avec un format personnalisé. |
| top | `sudo btop` | Raccourci pour `btop` avec `sudo`. |
| tree | `tree --dirsfirst` | Raccourci pour `tree` avec un format personnalisé. |
| wk | `date +%V` | Raccourci pour `date` avec un format personnalisé. |
| wth | `curl -s "wttr.in/?format=3"` | Raccourci pour `curl` avec `wttr.in` pour afficher la météo. |
| x | `quit` | Raccourci pour quitter la session actuelle. |
