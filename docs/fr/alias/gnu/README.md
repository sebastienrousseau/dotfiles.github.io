---
description: Les alias GNU Core Utilities fournissent des commandes puissantes qui créent des raccourcis vers les utilitaires Core les plus utilisés. Toutes ces fonctions et alias sont des wrappers autour des GNU Core Utilities, outils fondamentaux d'un système GNU/Linux.
lang: fr-FR
metaTitle: Les alias GNU Core Utilities - Dotfiles (FR)
permalink: /aliases/gnu/

meta:
  - name: keywords
    content: alias, git, gitconfig, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Les alias GNU Core Utilities fournissent des commandes puissantes qui créent des raccourcis vers les utilitaires Core les plus utilisés. Toutes ces fonctions et alias sont des wrappers autour des GNU Core Utilities, outils fondamentaux d'un système GNU/Linux.
  - name: twitter:description
    content: Les alias GNU Core Utilities fournissent des commandes puissantes qui créent des raccourcis vers les utilitaires Core les plus utilisés. Toutes ces fonctions et alias sont des wrappers autour des GNU Core Utilities, outils fondamentaux d'un système GNU/Linux.
  - name: twitter:title
    content: Les alias GNU Core Utilities - Dotfiles (FR)
  - name: og:title
    content: Les alias GNU Core Utilities - Dotfiles (FR)
  - name: og:description
    content: Les alias GNU Core Utilities fournissent des commandes puissantes qui créent des raccourcis vers les utilitaires Core les plus utilisés. Toutes ces fonctions et alias sont des wrappers autour des GNU Core Utilities, outils fondamentaux d'un système GNU/Linux.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Gnu

Gérer les alias Gnu. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `gnu.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ceci est une collection d'alias pour le paquet GNU Coreutils, qui est
un ensemble d'utilitaires Unix standard souvent inclus dans les distributions Linux.
Ces alias facilitent l'utilisation de ces utilitaires en fournissant
des commandes abrégées qui remplacent le nom complet par un alias plus court.
Cette collection couvre une large gamme d'utilitaires, des commandes
basiques de manipulation de fichiers comme "cp" et "rm" à des commandes
plus avancées de traitement de texte comme "awk" et "sed". Il existe aussi des alias
pour les utilitaires de somme de contrôle et de hachage comme "md5sum" et "sha256sum".

### Utilitaires de gestion de fichiers de base
- `basename` Supprimer le répertoire et le suffixe des noms de fichiers.
- `cp` Copier des fichiers et des répertoires.
- `dirname` Supprimer le suffixe non répertoire des noms de fichiers.
- `ln` Créer des liens entre fichiers.
- `loname` Afficher le nom du lien.
- `ls` Lister le contenu d'un répertoire.
- `mkdir` Créer des répertoires.
- `mkfifo` Créer des tubes nommés (FIFO).
- `mknod` Créer des fichiers spéciaux bloc ou caractère.
- `mv` Déplacer ou renommer des fichiers ou répertoires.
- `pathchk` Vérifier la validité et la portabilité d'un nom de fichier.
- `pwd` Afficher le nom du répertoire courant.
- `readlink` Afficher les liens symboliques résolus ou les noms canoniques.
- `realpath` Afficher le chemin physique résolu du chemin spécifié.
- `rm` Supprimer des fichiers ou répertoires.
- `rmdir` Supprimer des répertoires vides.
- `unlink` Supprimer des fichiers ou répertoires.
### Utilitaires de manipulation du contenu des fichiers
- `awk` Langage de recherche et traitement de motifs.
- `cat` Concaténer et afficher des fichiers.
- `csplit` Découper un fichier en morceaux déterminés par le contexte.
- `cut` Supprimer des sections de chaque ligne de fichiers.
- `diff` Comparer les fichiers ligne par ligne.
- `fold` Replier chaque ligne pour tenir dans une largeur donnée.
- `grep` Afficher les lignes correspondant à un motif.
- `head` Afficher le début des fichiers.
- `nl` Numéroter les lignes des fichiers.
- `paste` Fusionner les lignes de fichiers.
- `patch` Appliquer un diff à un original.
- `ptx` Produire un index permuté du contenu des fichiers.
- `sed` Éditeur de flux pour filtrer et transformer le texte.
- `sort` Trier les lignes de fichiers texte.
- `split` Découper un fichier en morceaux.
- `tail` Afficher la fin des fichiers.
- `tr` Traduire ou supprimer des caractères.
### Utilitaires de somme de contrôle et de chiffrement
- `b2sum` Afficher ou vérifier les condensats BLAKE2.
- `cksum` Afficher la somme de contrôle CRC et le nombre d'octets.
- `sha1sum` Afficher ou vérifier les condensats SHA1.
- `sha224sum` Afficher ou vérifier les condensats SHA224.
- `sha256sum` Afficher ou vérifier les condensats SHA256.
- `sha384sum` Afficher ou vérifier les condensats SHA384.
- `sha512sum` Afficher ou vérifier les condensats SHA512.
### Autres utilitaires de fichiers
- `base32` Afficher ou convertir des données base32.
- `base64` Encoder ou décoder des données base64.
- `basenc` Encoder ou décoder base64, base32,

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
