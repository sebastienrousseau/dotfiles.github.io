---
description: Les alias d'éditeur ouvrent les fichiers dans l'éditeur défini par la variable d'environnement `editor`.
lang: fr-FR
metaTitle: Alias d'éditeur - Dotfiles (FR)
permalink: /aliases/editor/

meta:
  - name: keywords
    content: alias, code, editeur, environnement, gedit, nano, notepad++, texte, vi, vim
  - name: twitter:card
    content: Les alias d'éditeur ouvrent les fichiers dans l'éditeur défini par la variable d'environnement `editor`.
  - name: twitter:description
    content: Les alias d'éditeur ouvrent les fichiers dans l'éditeur défini par la variable d'environnement `editor`.
  - name: twitter:title
    content: Alias d'éditeur - Dotfiles (FR)
  - name: og:title
    content: Alias d'éditeur - Dotfiles (FR)
  - name: og:description
    content: Les alias d'éditeur ouvrent les fichiers dans l'éditeur défini par la variable d'environnement `editor`.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias d'éditeur

Gérer les alias d'éditeur. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `editor.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble complet d'alias pour éditer des fichiers avec l'éditeur configuré dans votre environnement. Il fonctionne avec le script de configuration d'éditeur (`editor.sh`) qui sélectionne automatiquement le meilleur éditeur disponible sur votre système.
### Éditeurs pris en charge
Les éditeurs suivants sont pris en charge avec des alias spécialisés :
- **Neovim** - Version moderne et améliorée de Vim
- **Visual Studio Code** - Éditeur riche en fonctionnalités avec extensions
- **Vim** - Éditeur de texte hautement configurable
- **Nano** - Éditeur terminal simple et convivial
- **Emacs** - Éditeur de texte extensible et personnalisable
- **Sublime Text** - Éditeur de texte sophistiqué pour le code
- **Atom** - Éditeur de texte hackable du XXIe siècle
Ces alias universels fonctionnent avec tout éditeur défini par `editor.sh` :
- `e` - Commande d'édition rapide
- `edit` - Commande d'édition standard
- `editor` - Commande d'éditeur complète
- `mate` - Commande style TextMate
- `n` - Alias court d'édition
- `v` - Alias d'édition type Vim
Selon l'éditeur sélectionné par `editor.sh`, des alias spécialisés supplémentaires sont disponibles :
- `vi`, `vim` - Redirigés vers Neovim quand c'est l'éditeur principal
- `nvimrc` - Éditer le fichier de configuration Vimscript de Neovim
- `nvimlua` - Éditer le fichier de configuration Lua de Neovim
- `nvimconf` - Ouvrir le répertoire de configuration Neovim
- `vsc` - Raccourci pour VS Code
- `vsca` - Ajouter un dossier à la fenêtre courante
- `vscd` - Comparer deux fichiers
- `vscn` - Ouvrir une nouvelle fenêtre
- `vscr` - Réutiliser la fenêtre lors de l'ouverture de fichiers
- `vscu` - Ouvrir avec un répertoire de données utilisateur personnalisé
- `vsced` - Ouvrir avec un répertoire d'extensions personnalisé
- `vscex` - Installer une extension VS Code
- `vsclist` - Lister les extensions installées
- `vi` - Redirigé vers Vim quand c'est l'éditeur principal
- `vimrc` - Éditer le fichier de configuration Vim
- `vimconf` - Ouvrir le répertoire de configuration Vim
- `nanorc` - Éditer le fichier de configuration Nano
- `ne` - Nano amélioré avec numéros de lignes et défilement fluide
- `em` - Raccourci pour Emacs
- `emacs-nw` - Exécuter Emacs en mode terminal
- `emacsc` - Lancer le client Emacs
- `emacsrc` - Éditer le fichier de configuration Emacs
- `et` - Emacs rapide en mode terminal
- `st` - Lancer Sublime Text
- `stt` - Ouvrir le répertoire courant dans Sublime Text
- `stn` - Ouvrir dans une nouvelle fenêtre Sublime Text
- `a` - Lancer Atom
- `at` - Ouvrir le répertoire courant dans Atom
- `an` - Ouvrir dans une nouvelle fenêtre Atom
### Édition rapide des configurations
Le script fournit la fonction `editrc` pour éditer rapidement des fichiers de configuration courants :
```bash
editrc bash     # Éditer ~/.bashrc
editrc zsh      # Éditer ~/.zshrc
editrc vim      # Éditer ~/.vimrc
editrc nvim     # Éditer le fichier init Neovim
editrc tmux     # Éditer ~/.tmux.conf
editrc git      # Éditer ~/.gitconfig
editrc ssh      # Éditer ~/.ssh/config
editrc alias    # Éditer ~/.dotfiles/aliases
editrc dotfiles # Éditer ~/.dotfiles
```
### Intégration avec editor.sh
Ces alias fonctionnent en harmonie avec le script `editor.sh` qui :
1. Détecte automatiquement les éditeurs disponibles sur votre système
2. Définit les variables d'environnement appropriées (`EDITOR`, `VISUAL`, `GIT_EDITOR`, etc.)
3. Configure des réglages spécifiques à chaque éditeur
4. Fournit des solutions de repli intelligentes
Les alias de ce fichier sont conçus pour fournir des raccourcis pratiques selon l'éditeur sélectionné par le processus de détection.
### Exemples d'utilisation
```bash
# Éditer rapidement un fichier avec l'éditeur par défaut
e myfile.txt
# Éditer directement des fichiers de configuration
nvimrc    # Lorsque Neovim est utilisé (vimscript)
nvimlua   # Lorsque Neovim est utilisé (lua)
vimrc     # Lorsque Vim est utilisé
nanorc    # Lorsque Nano est utilisé
# Utiliser VS Code pour ouvrir un dossier dans une nouvelle fenêtre
vscn ~/projects/my-project
# Utiliser nano amélioré avec numéros de lignes
ne config.txt
# Éditer des fichiers de configuration spécifiques
editrc git    # Éditer la configuration git
editrc bash   # Éditer la configuration bash
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
