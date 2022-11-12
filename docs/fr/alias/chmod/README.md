---
description: Les alias chmod sont des raccourcis pour la commande chmod. Ils vous permettent de changer les permissions d'un fichier ou d'un répertoire.
lang: fr-FR
metaTitle: Les alias chmod - Dotfiles (FR)
permalink: /aliases/chmod/

meta:
  - name: keywords
    content: alias, chmod, raccourcis, commandes, shell, bash, zsh, fish, permissions, fichiers, répertoires, droits, dossiers
  - name: twitter:card
    content: Les alias chmod sont des raccourcis pour la commande chmod. Ils vous permettent de changer les permissions d'un fichier ou d'un répertoire.
  - name: twitter:description
    content: Les alias chmod sont des raccourcis pour la commande chmod. Ils vous permettent de changer les permissions d'un fichier ou d'un répertoire.
  - name: twitter:title
    content: Les alias chmod - Dotfiles (FR)
  - name: og:title
    content: Les alias chmod - Dotfiles (FR)
  - name: og:description
    content: Les alias chmod sont des raccourcis pour la commande chmod. Ils vous permettent de changer les permissions d'un fichier ou d'un répertoire.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias chmod

Le fichier `chmod.aliases.sh` crée des alias de raccourcis pour la commande
`chmod`. Ils vous permettent de changer les permissions d'un fichier ou d'un
répertoire.

L'utilitaire `chmod` modifie les bits de mode des fichiers répertoriés, comme
indiqué par l'opérande mode. Il peut également être utilisé pour modifier les
listes de contrôle d'accès (ACL) associées aux fichiers répertoriés. (ACL)
associées aux fichiers répertoriés.

## Raccourcis

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| 000 | `chmod -R 000` | (chmod a-rwx) définit les permissions de sorte que, (U)ser / propriétaire ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 400 | `chmod -R 400` | (chmod a-rw) définit les permissions de sorte que, (U)ser / propriétaire ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 444 | `chmod -R 444` | (chmod a-r) définit les permissions de sorte que, (U)ser / propriétaire ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 600 | `chmod -R 600` | (chmod a+rwx,u-x,g-rwx,o-rwx) définit les permissions de sorte que, (U)ser / propriétaire peut lire, écrire et exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 644 | `chmod -R 644` | (chmod a+rwx,u-x,g-wx,o-wx) définit les permissions de sorte que, (U)ser / propriétaire peut lire, écrire et exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 666 | `chmod -R 666` | (chmod a+rwx,u-x,g-x,o-x) définit les permissions de sorte que, (U)ser / propriétaire peut lire, écrire et exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 755 | `chmod -R 755` | (chmod a+rwx,g-w,o-w) définit les permissions de sorte que, (U)ser / propriétaire peut lire, écrire et exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 764 | `chmod -R 764` | (chmod a+rwx,g-x,o-wx) définit les permissions de sorte que, (U)ser / propriétaire peut lire, écrire et exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| 777 | `chmod -R 777` | (chmod a+rwx) définit les permissions de sorte que, (U)ser / propriétaire peut lire, écrire et exécuter. (G)roup ne peut pas lire, ne peut pas écrire et ne peut pas exécuter. (O)thers ne peut ni lire, ni écrire, ni exécuter. |
| chgrp | `chgrp -v` | Change le groupe propriétaire du fichier. |
| chgrpr | `chgrp -Rv` | Change le groupe propriétaire du fichier. |
| chgrpu | `chgrp -Rv ${USER}` | Change le groupe propriétaire du fichier. |
| chmod | `chmod -v` | Change les fichiers en mode octal. |
| chmodr | `chmod -Rv` | Change les fichiers en mode octal récursivement. |
| chmodu | `chmod -Rv u+rwX` | Change les fichiers en mode octal récursivement pour l'utilisateur. |
| chmox | `chmod +x` | Fait le ficher exécutable. |
| chown | `chown -v` | Change le propriétaire du fichier ou du répertoire. |
| chownr | `chown -Rv` | Change le propriétaire du fichier ou du répertoire récursivement. |
| chownu | `chown -Rv ${USER}` | Change le propriétaire du fichier ou du répertoire récursivement pour l'utilisateur courant. |
