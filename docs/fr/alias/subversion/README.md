---
description: Les alias Subversion sont des alias qui vous permettent de simplifier l'utilisation de la commande Subversion. Subversion est une commande qui permet de gérer des dépôts de code.
lang: fr-FR
metaTitle: Les alias Subversion - Dotfiles (FR)
permalink: /aliases/subversion/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, gestion, gestionnaire, gestionnairedeversion, gestionnairedeversions, shell, subversion, svn, version, versioning
  - name: twitter:card
    content: Les alias Subversion sont des alias qui vous permettent de simplifier l'utilisation de la commande Subversion. Subversion est une commande qui permet de gérer des dépôts de code.
  - name: twitter:description
    content: Les alias Subversion sont des alias qui vous permettent de simplifier l'utilisation de la commande Subversion. Subversion est une commande qui permet de gérer des dépôts de code.
  - name: twitter:title
    content: Les alias Subversion - Dotfiles (FR)
  - name: og:title
    content: Les alias Subversion - Dotfiles (FR)
  - name: og:description
    content: Les alias Subversion sont des alias qui vous permettent de simplifier l'utilisation de la commande Subversion. Subversion est une commande qui permet de gérer des dépôts de code.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias Subversion

Le fichier `subversion.aliases.sh` crée des raccourcis utiles pour travailler
avec les commandes [Subversion](https://subversion.apache.org).

Les alias Subversion sont une collection d'alias qui vous permettent d'interagir
avec la commande `svn`. Subversion est un système de contrôle de version, qui
vous permet de garder des anciennes versions de fichiers et de répertoires
(généralement du code source), de garder un journal de qui, quand et pourquoi
les modifications ont eu lieu.

## Raccourcis Subversion

| Alias | Command | Description |
| ----- | ----- | ----- |
| sad | `svn add` | Ajoute un fichier ou un répertoire au dépôt |
| sau | `svn auth` | Affiche les informations d'authentification |
| sbl | `svn blame` | Affiche les informations de modification |
| scg | `svn changelist` | Affiche ou modifie la liste de changement |
| sco | `svn checkout` | Télécharge un dépôt |
| scl | `svn cleanup` | Nettoie le répertoire de travail |
| sci | `svn commit` | Envoie les modifications au dépôt |
| scp | `svn copy` | Copie un fichier ou un répertoire |
| sct | `svn cat` | Affiche le contenu d'un fichier |
| sdi | `svn diff` | Affiche les différences entre les fichiers |
| sdl | `svn delete` | Supprime un fichier ou un répertoire |
| shp | `svn help` | Affiche l'aide de la commande |
| sin | `svn info` | Affiche les informations du dépôt |
| sip | `svn import` | Importe un répertoire dans le dépôt |
| slg | `svn log` | Affiche le journal des modifications |
| slk | `svn lock` | Verrouille un fichier ou un répertoire |
| sls | `svn list` | Affiche la liste des fichiers et répertoires |
| smd | `svn mkdir` | Crée un répertoire dans le dépôt |
| smg | `svn merge` | Fusionne les modifications |
| smgi | `svn mergeinfo` | Affiche les informations de fusion |
| smv | `svn move` | Déplace un fichier ou un répertoire |
| sp | `svn propset` | Définit une propriété |
| spdl | `svn propdel` | Supprime une propriété |
| spdt | `svn propedit` | Edite une propriété |
| spgt | `svn propget` | Affiche une propriété |
| sph | `svn patch` | Applique un patch |
| spls | `svn proplist` | Affiche la liste des propriétés |
| srl | `svn relocate` | Déplace un dépôt |
| srs | `svn resolve` | Résout les conflits |
| srsd | `svn resolved` | Marque un fichier comme résolu |
| srv | `svn revert` | Annule les modifications |
| sst | `svn status` | Affiche l'état du dépôt |
| ssw | `svn switch` | Change de dépôt |
| sulk | `svn unlock` | Déverrouille un fichier ou un répertoire |
| sup | `svn update` | Met à jour le dépôt |
| supg | `svn upgrade` | Met à jour le dépôt |
| sxp | `svn export` | Exporte un dépôt |
