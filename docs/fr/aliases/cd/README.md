---
description: Alias de navigation avec favoris, historique et raccourcis intelligents. Parcourez votre système plus vite.
lang: fr-FR
metaTitle: Alias CD - Dotfiles (FR)
permalink: /aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, répertoire, navigation, favoris, alias shell, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de navigation avec favoris, historique et raccourcis intelligents. Parcourez votre système plus vite.
  - name: twitter:title
    content: Alias CD - Dotfiles
  - name: og:title
    content: Alias CD - Dotfiles
  - name: og:description
    content: Alias de navigation avec favoris, historique et raccourcis intelligents. Parcourez votre système plus vite.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias CD

Naviguez plus vite dans votre système de fichiers. Favoris, historique et raccourcis intelligents.

## Aperçu

Ces alias sont définis dans `cd.aliases.sh` et chargés automatiquement par Chezmoi.

## Référence

### Raccourcis de navigation

| Alias | Description |
|:---|:---|
| `-` | Revenir au répertoire précédent |
| `..` | Remonter d’un niveau |
| `...` | Remonter de deux niveaux |
| `....` | Remonter de trois niveaux |
| `.....` | Remonter de quatre niveaux |
| `hom` | Aller au répertoire personnel |

### Raccourcis de répertoires

| Alias | Chemin | Description |
|:---|:---|:---|
| `app` | `~/Applications` | Applications |
| `cod` | `~/Code` | Répertoire code |
| `dsk` | `~/Desktop` | Bureau |
| `doc` | `~/Documents` | Documents |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Téléchargements |
| `mus` | `~/Music` | Musique |
| `pic` | `~/Pictures` | Images |
| `vid` | `~/Videos` | Vidéos |

### Répertoires système

| Alias | Chemin | Description |
|:---|:---|:---|
| `etc` | `/etc` | Configuration système |
| `var` | `/var` | Fichiers variables |
| `tmp` | `/tmp` | Fichiers temporaires |
| `usr` | `/usr` | Programmes utilisateur |

### Favoris

| Commande | Alias | Description |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Créer un favori |
| `bookmark_list` | `bml` | Lister les favoris |
| `bookmark_update` | `bmu` | Mettre à jour un favori |
| `bookmark_remove` | `bmr` | Supprimer un favori |
| `goto <name>` | `bmg` | Aller au favori |

```bash
bm work-project      # Créer un favori
bmg work-project     # Aller au favori
bml                  # Lister tous les favoris
```

### Historique

| Commande | Alias | Description |
|:---|:---|:---|
| `dirhistory` | `dh` | Afficher l’historique des répertoires |
| `lwd` | `ld` | Revenir au dernier répertoire |

### Avancé

| Commande | Alias | Description |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Créer et entrer dans un répertoire |
| `proj` | `pr` | Aller à la racine du projet |
| `pushd` | `pd` | Empiler un répertoire |
| `popd` | — | Dépiler un répertoire |
| `dirs` | — | Lister la pile |

## Configuration

Personnalisez le comportement via des variables d’environnement :

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Aide

Exécutez `cdhelp` pour afficher toutes les commandes ou `cdversion` pour la version.
