---
description: Les alias GNU sont des alias pour les utilitaires GNU Coreutils, qui sont installés par défaut sur la plupart des systèmes Linux.
lang: fr-FR
metaTitle: Les alias GNU - Dotfiles (FR)
permalink: /aliases/gnu/

meta:
  - name: keywords
    content: aliases, bash, coreutils, dotfiles, gnu, linux, shell, unix, zsh
  - name: twitter:card
    content: Les alias GNU sont des alias pour les utilitaires GNU Coreutils, qui sont installés par défaut sur la plupart des systèmes Linux.
  - name: twitter:description
    content: Les alias GNU sont des alias pour les utilitaires GNU Coreutils, qui sont installés par défaut sur la plupart des systèmes Linux.
  - name: twitter:title
    content: Les alias GNU - Dotfiles (FR)
  - name: og:title
    content: Les alias GNU - Dotfiles (FR)
  - name: og:description
    content: Les alias GNU sont des alias pour les utilitaires GNU Coreutils, qui sont installés par défaut sur la plupart des systèmes Linux.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias GNU Coreutils

Le fichier `gnucoreutils.aliases.bash` contient des alias pour les utilitaires
[GNU Coreutils][coreutils], qui sont installés par défaut sur la plupart des
systèmes Linux.

Les alias des utilitaires de base GNU, fournissent des commandes puissantes qui
créent des raccourcis vers des commandes d'utilitaires de base fréquemment
utilisées. Toutes ces fonctions et alias sont des enveloppes autour des GNU Core
Utilities qui sont les outils de base, fondamentaux fondamentaux d'un système
GNU/Linux.

## Raccourcis GNU Coreutils

| Alias | Command | Description |
|---|---|---|
| b2sum | `gb2sum` | Imprime ou vérifie la somme de contrôle BLAKE2b d'un fichier |
| base32 | `gbase32` | Encode ou décode le fichier ou l'entrée standard en base32 |
| base64 | `gbase64` | Encode ou décode le fichier ou l'entrée standard en base64 |
| basename | `gbasename` | Affiche le nom avec le chemin d'accès supprimé |
| basenc | `gbasenc` | Encode ou décode le fichier ou l'entrée standard en base64 |
| cat| `gcat` | Concatène et affiche les fichiers |
| chcon | `gchcon` | Change les étiquettes de contexte de sécurité |
| chgrp | `gchgrp` | Change le groupe propriétaire du fichier |
| chmod | `gchmod` | Change les permissions d'accès au fichier |
| chown | `gchownn` | Change le propriétaire du fichier |
| chroot | `gchroot` | Exécute une commande ou un shell dans un nouveau répertoire racine |
| cksum | `gcksum` | Imprime ou vérifie la somme de contrôle CRC32 d'un fichier |
| comm| `gcomm` | Compare deux fichiers triés ligne par ligne |
| cp| `gcp` | Copie les fichiers et répertoires |
| csplit | `gcsplit` | Divise un fichier en sections basées sur des motifs de séparation |
| cut| `gcut` | Coupe des champs |
| date| `gdate` | Affiche ou modifie la date et l'heure |
| dd| `gdd` | Convertit et copie un fichier, en effectuant des conversions de format de bloc sur la volée |
| df| `gdf` | Affiche l'utilisation du système de fichiers |
| dir| `gdir` | Liste le contenu d'un répertoire |
| dircolors | `gdircolors` | Définit les couleurs de sortie pour `ls` |
| dirname | `gdirname` | Affiche le nom du répertoire |
| du | `gdu`| Affiche l'utilisation du disque |
| echo | `gecho`| Affiche une ligne de texte |
| env | `genv`| Exécute un programme dans un environnement modifié |
| expand | `gexpand` | Convertit les tabulations en espaces |
| expr | `gexpr`| Évalue une expression arithmétique |
| factor | `gfactor` | Décompose un nombre en facteurs premiers |
| false | `gfalse`   | Retourne une valeur de sortie fausse |
| fmt | `gfmt`| Reformate le texte pour une largeur donnée |
| fold | `gfold`| Réduit la largeur des lignes d'un fichier |
| grep | `ggrep`| Recherche des motifs dans un fichier |
| groups | `ggroups` | Affiche les groupes auxquels appartient l'utilisateur |
| head | `ghead`| Affiche les premières lignes d'un fichier |
| hostid | `ghostid` | Affiche l'identifiant d'hôte |
| id | `gid`| Affiche les informations d'identification de l'utilisateur |
| install | `ginstall` | Copie des fichiers et définit leurs attributs |
| join | `gjoin`| Rejoint les lignes correspondantes de deux fichiers |
| kill | `gkill`| Envoie un signal à un processus |
| link | `glink`| Crée un lien dur |
| ln | `gln` | Crée un lien symbolique |
| logname | `glogname` | Affiche le nom d'utilisateur actuel |
| ls | `gls` | Liste le contenu d'un répertoire |
| md5sum | `gmd5sum` | Imprime ou vérifie la somme de contrôle MD5 d'un fichier |
| mkdir | `gmkdir` | Crée un répertoire |
| mkfifo | `gmkfifo` | Crée un tube nommé |
| mknod | `gmknod` | Crée un périphérique spécial ou un fichier |
| mktemp | `gmktemp` | Crée un fichier temporaire |
| mv | `gmv` | Déplace ou renomme des fichiers |
| nice | `gnice` | Exécute une commande avec une priorité modifiée |
| nl | `gnl` | Numérote les lignes |
| nohup | `gnohup` | Exécute une commande en ignorant les signaux |
| nproc | `gnproc` | Affiche le nombre de processeurs disponibles |
| numfmt | `gnumfmt` | Formate les nombres en utilisant des unités de base |
| od | `god` | Affiche un fichier en octets |
| paste | `gpaste` | Colle les lignes de fichiers |
| pathchk | `gpathchk` | Vérifie si un nom de fichier est valide |
| pinky | `gpinky` | Affiche les informations d'identification des utilisateurs |
| pr | `gpr` | Formate le texte pour l'impression |
| printenv | `gprintenv` | Affiche les variables d'environnement |
| printf | `gprintf` | Formate et affiche des données |
| ptx | `gptx` | Affiche les informations de périphérique |
| pwd | `gpwd` | Affiche le répertoire de travail actuel |
| readlink | `greadlink` | Affiche la valeur du lien symbolique |
| realpath | `grealpath` | Affiche le chemin d'accès réel |
| rm | `grm` | Supprime les fichiers |
| rmdir | `grmdir` | Supprime les répertoires vides |
| runcon | `gruncon` | Exécute une commande dans un contexte de sécurité différent |
| sed | `gsed` | Édite un flux de texte |
| seq | `gseq` | Génère une suite de nombres |
| sha1sum | `gsha1sum` | Imprime ou vérifie la somme de contrôle SHA1 d'un fichier |
| sha224sum | `gsha224sum` | Imprime ou vérifie la somme de contrôle SHA224 d'un fichier |
| sha256sum | `gsha256sum` | Imprime ou vérifie la somme de contrôle SHA256 d'un fichier |
| sha384sum | `gsha384sum` | Imprime ou vérifie la somme de contrôle SHA384 d'un fichier |
| sha512sum | `gsha512sum` | Imprime ou vérifie la somme de contrôle SHA512 d'un fichier |
| shred | `gshred` | Efface les données d'un fichier de manière sécurisée |
| shuf | `gshuf` | Génère des nombres aléatoires ou mélange des lignes |
| sleep | `gsleep` | Suspend l'exécution du processus |
| sort | `gsort` | Trie le texte |
| split | `gsplit` | Divise un fichier en morceaux plus petits |
| stat | `gstat` | Affiche les informations de fichier |
| stdbuf | `gstdbuf` | Exécute une commande avec un tampon modifié |
| stty | `gstty` | Configure ou affiche les paramètres du terminal |
| sum | `gsum` | Calcule la somme de contrôle |
| sync | `gsync` | Force l'écriture des données sur le disque |
| tac | `gtac` | Concatène et affiche les fichiers en ordre inverse |
| tail | `gtail` | Affiche les dernières lignes d'un fichier |
| tee | `gtee` | Lit depuis l'entrée standard et écrit dans les fichiers et la sortie standard |
| test | `gtest` | Évalue une expression |
| timeout | `gtimeout` | Exécute une commande avec un délai |
| touch | `gtouch` | Change les dates d'accès et de modification d'un fichier |
| tr | `gtr` | Traduit ou supprime des caractères |
| true | `gtrue` | Exécute une commande vide |
| truncate | `gtruncate` | Modifie la taille d'un fichier |
| tsort | `gtsort` | Trie les fichiers en fonction de leurs dépendances |
| tty | `gtty` | Affiche le nom du terminal |
| uname | `guname` | Affiche les informations du noyau |
| unexpand | `gunexpand` | Convertit les tabulations en espaces |
| uniq | `guniq` | Supprime les lignes en double |
| unlink | `gunlink` | Supprime un lien dur |
| uptime | `guptime` | Affiche le temps d'exécution du système |
| users | `gusers` | Affiche les utilisateurs actuellement connectés |
| vdir | `gvdir` | Liste le contenu d'un répertoire |
| wc | `gwc` | Compte les lignes, les mots et les octets |
| who | `gwho` | Affiche les utilisateurs actuellement connectés |
| whoami | `gwhoami` | Affiche le nom de l'utilisateur courant |
| yes | `gyes` | Affiche une chaîne jusqu'à ce que l'entrée standard soit fermée |

[coreutils]: https://www.gnu.org/software/coreutils/
