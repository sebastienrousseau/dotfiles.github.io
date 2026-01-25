---
title: "Alias Éditeur : raccourcis d’édition de texte"
description: "Alias shell pour Neovim, VS Code, Vim, Nano, Emacs et Sublime Text. Éditez plus vite avec des raccourcis universels."
lang: fr-FR
metaTitle: "Alias Éditeur | Dotfiles"
permalink: /aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: alias éditeur, neovim, vim, vscode, nano, emacs, sublime text, raccourcis shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell pour Neovim, VS Code, Vim, Nano, Emacs et Sublime Text. Éditez plus vite avec des raccourcis universels.
  - name: twitter:title
    content: Alias Éditeur | Dotfiles
  - name: og:title
    content: Alias Éditeur | Dotfiles
  - name: og:description
    content: Alias shell pour Neovim, VS Code, Vim, Nano, Emacs et Sublime Text. Éditez plus vite avec des raccourcis universels.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Éditeur

Raccourcis pour lancer et configurer votre éditeur de texte préféré.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Aperçu

Les alias éditeur fournissent une interface unifiée pour l’édition de texte dans plusieurs applications. Définis dans `editor.aliases.sh` et chargés automatiquement par chezmoi, ces raccourcis fonctionnent avec `editor.sh` pour détecter et configurer le meilleur éditeur disponible.

Le système prend en charge Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text et Atom. Les alias universels s’adaptent à l’éditeur actif, tandis que les alias spécialisés offrent des fonctions propres à chaque éditeur.

## Référence

### Alias universels

Ces alias fonctionnent avec tout éditeur configuré par `editor.sh`.

| Alias | Description |
|-------|-------------|
| `e` | Commande d’édition rapide |
| `edit` | Commande d’édition standard |
| `editor` | Commande d’éditeur complète |
| `mate` | Commande style TextMate |
| `n` | Alias court d’édition |
| `v` | Alias d’édition type Vim |

### Alias Neovim

Disponibles lorsque Neovim est l’éditeur principal.

| Alias | Description |
|-------|-------------|
| `vi` | Redirigé vers Neovim |
| `vim` | Redirigé vers Neovim |
| `nvimrc` | Éditer la configuration Vimscript de Neovim |
| `nvimlua` | Éditer la configuration Lua de Neovim |
| `nvimconf` | Ouvrir le répertoire de configuration Neovim |

### Alias Visual Studio Code

Disponibles lorsque VS Code est installé.

| Alias | Description |
|-------|-------------|
| `vsc` | Lancer VS Code |
| `vsca` | Ajouter un dossier à la fenêtre actuelle |
| `vscd` | Comparer deux fichiers |
| `vscn` | Ouvrir une nouvelle fenêtre |
| `vscr` | Réutiliser la fenêtre lors de l’ouverture |
| `vscu` | Ouvrir avec un répertoire de données utilisateur personnalisé |
| `vsced` | Ouvrir avec un répertoire d’extensions personnalisé |
| `vscex` | Installer une extension VS Code |
| `vsclist` | Lister les extensions installées |

### Alias Vim

Disponibles lorsque Vim est l’éditeur principal.

| Alias | Description |
|-------|-------------|
| `vi` | Redirigé vers Vim |
| `vimrc` | Éditer le fichier de configuration Vim |
| `vimconf` | Ouvrir le répertoire de configuration Vim |

### Alias Nano

Disponibles lorsque Nano est l’éditeur principal.

| Alias | Description |
|-------|-------------|
| `nanorc` | Éditer le fichier de configuration Nano |
| `ne` | Nano amélioré avec numéros de ligne et défilement fluide |

### Alias Emacs

Disponibles lorsque Emacs est installé.

| Alias | Description |
|-------|-------------|
| `em` | Lancer Emacs |
| `emacs-nw` | Lancer Emacs en mode terminal |
| `emacsc` | Lancer Emacs client |
| `emacsrc` | Éditer le fichier de configuration Emacs |
| `et` | Emacs rapide en mode terminal |

### Alias Sublime Text

Disponibles lorsque Sublime Text est installé.

| Alias | Description |
|-------|-------------|
| `st` | Lancer Sublime Text |
| `stt` | Ouvrir le répertoire courant dans Sublime Text |
| `stn` | Ouvrir dans une nouvelle fenêtre Sublime Text |

### Alias Atom

Disponibles lorsque Atom est installé.

| Alias | Description |
|-------|-------------|
| `a` | Lancer Atom |
| `at` | Ouvrir le répertoire courant dans Atom |
| `an` | Ouvrir dans une nouvelle fenêtre Atom |

### Édition de configuration

La fonction `editrc` donne un accès rapide aux fichiers de configuration courants.

| Commande | Fichier cible |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Fichier init Neovim |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |
| `editrc alias` | `~/.dotfiles/aliases` |
| `editrc dotfiles` | `~/.dotfiles` |

### Exemples d’utilisation

```bash
# Édition rapide d’un fichier avec l’éditeur par défaut
e myfile.txt

# Éditer directement les fichiers de configuration
nvimrc    # Avec Neovim (vimscript)
nvimlua   # Avec Neovim (lua)
vimrc     # Avec Vim
nanorc    # Avec Nano

# Ouvrir un dossier dans une nouvelle fenêtre VS Code
vscn ~/projects/my-project

# Utiliser Nano amélioré avec numéros de ligne
ne config.txt

# Éditer des fichiers de configuration spécifiques
editrc git    # Éditer la configuration git
editrc bash   # Éditer la configuration bash
```
