---
title: "Alias GNU Coreutils : raccourcis shell pour Linux"
description: "Simplifiez votre workflow avec des alias GNU Coreutils pour la gestion de fichiers, le traitement de texte et les checksums."
lang: fr-FR
metaTitle: "Alias GNU Coreutils | Dotfiles"
permalink: /aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: gnu coreutils, alias shell, utilitaires linux, gestion fichiers, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias GNU Coreutils | Dotfiles
  - name: twitter:description
    content: Simplifiez votre workflow avec des alias GNU Coreutils pour la gestion de fichiers, le traitement de texte et les checksums.
  - name: og:title
    content: Alias GNU Coreutils | Dotfiles
  - name: og:description
    content: Simplifiez votre workflow avec des alias GNU Coreutils pour la gestion de fichiers, le traitement de texte et les checksums.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias GNU Coreutils

Raccourcis vers les utilitaires Unix essentiels pour un workflow plus rapide.

![Dotfiles banner][banner]

## Aperçu

Les alias GNU Coreutils fournissent des commandes courtes pour les utilitaires Unix standards. Définis dans `gnu.aliases.sh` et chargés automatiquement par chezmoi, ces alias simplifient les opérations sur fichiers, le traitement de texte et la vérification de données.

## Référence

### Gestion des fichiers

| Alias | Description |
|-------|-------------|
| `basename` | Retirer le répertoire et le suffixe d’un nom de fichier |
| `cp` | Copier des fichiers et répertoires |
| `dirname` | Retirer le suffixe non répertoire d’un nom de fichier |
| `ln` | Créer des liens entre fichiers |
| `loname` | Afficher le nom du lien |
| `ls` | Lister le contenu d’un répertoire |
| `mkdir` | Créer des répertoires |
| `mkfifo` | Créer des tubes nommés (FIFO) |
| `mknod` | Créer des fichiers spéciaux bloc ou caractère |
| `mv` | Déplacer ou renommer des fichiers ou répertoires |
| `pathchk` | Vérifier la validité et la portabilité des noms de fichier |
| `pwd` | Afficher le répertoire courant |
| `readlink` | Afficher les liens symboliques résolus |
| `realpath` | Afficher le chemin physique résolu |
| `rm` | Supprimer des fichiers ou répertoires |
| `rmdir` | Supprimer des répertoires vides |
| `unlink` | Supprimer des fichiers ou répertoires |

### Traitement de texte

| Alias | Description |
|-------|-------------|
| `awk` | Langage d’analyse et traitement de motifs |
| `cat` | Concaténer et afficher des fichiers |
| `csplit` | Découper un fichier en morceaux selon un contexte |
| `cut` | Supprimer des sections de lignes |
| `diff` | Comparer des fichiers ligne par ligne |
| `fold` | Replier les lignes selon une largeur |
| `grep` | Afficher les lignes correspondant à un motif |
| `head` | Afficher le début des fichiers |
| `nl` | Numéroter les lignes |
| `paste` | Fusionner des lignes de fichiers |
| `patch` | Appliquer un diff à un fichier |
| `ptx` | Produire un index permuté du contenu |
| `sed` | Éditeur de flux pour filtrer et transformer le texte |
| `sort` | Trier des lignes de texte |
| `split` | Découper un fichier en morceaux |
| `tail` | Afficher la fin des fichiers |
| `tr` | Traduire ou supprimer des caractères |

### Utilitaires de checksum

| Alias | Description |
|-------|-------------|
| `b2sum` | Afficher ou vérifier des empreintes BLAKE2 |
| `cksum` | Afficher le checksum CRC et le nombre d’octets |
| `sha1sum` | Afficher ou vérifier des empreintes SHA1 |
| `sha224sum` | Afficher ou vérifier des empreintes SHA224 |
| `sha256sum` | Afficher ou vérifier des empreintes SHA256 |
| `sha384sum` | Afficher ou vérifier des empreintes SHA384 |
| `sha512sum` | Afficher ou vérifier des empreintes SHA512 |

### Utilitaires d’encodage

| Alias | Description |
|-------|-------------|
| `base32` | Afficher ou convertir des données base32 |
| `base64` | Encoder ou décoder des données base64 |
| `basenc` | Encoder ou décoder des données dans divers formats |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
