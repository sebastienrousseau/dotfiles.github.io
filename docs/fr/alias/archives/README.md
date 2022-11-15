---
description: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
lang: fr-FR
metaTitle: Les alias d'archivage - Dotfiles (FR)
permalink: /alias/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, raccourcis, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
  - name: twitter:description
    content: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
  - name: twitter:title
    content: Les alias d'archivage - Dotfiles (FR)
  - name: og:title
    content: Les alias d'archivage - Dotfiles (FR)
  - name: og:description
    content: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias d'archivage

Le fichier `archives.aliases.sh` crée des alias de raccourcis utiles pour
pouvoir archiver des fichiers et des répertoires. Les alias sont capables de
créer et de gérer des fichiers d'archives dans une variété de formats.

## Raccourcis d'archivage

### 7-Zip

[7-Zip](http://www.7-zip.org/) est un programme d'archivage de fichiers avec un
taux de compression élevé.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| c7z |`7z a` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier 7z. |
| e7z |`7z x` | Extrait un répertoire complet (y compris les sous-répertoires) d'un fichier 7z. |

### Bzip2

[Bzip2](http://www.bzip.org/) est un programme de compression de données de
haute qualité, disponible gratuitement et sans brevet.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| cbz2 |`bzip2` | Compresse un fichier en un fichier bz2. |
| ebz2 |`bunzip2` | Extrait un fichier à partir d'un fichier bz2. |

### Gzip

[Gzip](https://www.gnu.org/software/gzip/) est un programme populaire de
compression de données en remplacement de compress.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| cgz |`gzip` | Compresse un fichier en un fichier gz. |
| egz |`gunzip` | Extrait un fichier d'un fichier gz. |

### Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) est un format de
fichier utilisé pour regrouper plusieurs fichiers en un seul afin de distribuer
des logiciels d'application ou des bibliothèques sur la plate-forme Java.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| cjar |`jar -cvf` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier jar. |
| ejar |`jar -xvf` | Extrait un répertoire entier (y compris les sous-répertoires) d'un fichier jar. |

### Tar

[Tar](https://www.gnu.org/software/tar/) est un logiciel utilisé pour stocker
plusieurs fichiers regroupés dans un seul fichier.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| ctar |`tar -cvf` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier tar. |
| etar |`tar -xvf` | Extrait un répertoire entier (y compris les sous-répertoires) d'un fichier tar. |
| ctgz |`tar -cvzf` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier tar.gz. |
| etgz |`tar -xvzf` | Extrait un répertoire entier (y compris les sous-répertoires) d'un fichier tar.gz. |

### Xz

[Xz](https://tukaani.org/xz/) est un logiciel de compression de données à usage
général avec un ratio de compression élevé.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| cxz |`xz -zcvf` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier xz. |
| exz |`xz -zxvf` | Extrait un répertoire entier (y compris les sous-répertoires) d'un fichier xz. |

### Zip

[Zip](https://en.wikipedia.org/wiki/Zip_(file_format)) est un format de fichier
utilisé pour produire un fichier qui contient un ou plusieurs fichiers.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| cz |`zip -r` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier zip. |
| ez |`unzip`  | Extrait un répertoire entier (y compris les sous-répertoires) d'un fichier zip. |

### Zstd

[Zstd](https://facebook.github.io/zstd/) est un algorithme de compression rapide
et sans aucune perte, visant à des scénarios de compression en temps réel au
niveau zlib.

| Alias | Commandes | Description |
| ----- | ----- | ----- |
| czstd |`zstd -zcvf` | Compresse un répertoire entier (y compris les sous-répertoires) dans un fichier zst. |
| ezstd |`zstd -zxvf` | Extrait un répertoire entier (y compris les sous-répertoires) d'un fichier zst. |
