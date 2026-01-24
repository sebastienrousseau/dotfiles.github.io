---
description: Les alias Tmux sont une collection d'alias qui vous permettent d'interagir avec la commande `tmux`. Tmux est un outil qui vous permet d'executer plusieurs sessions de terminal dans une seule fenetre.
lang: fr-FR
metaTitle: Les alias Tmux - Dotfiles (FR)
permalink: /aliases/tmux/

meta:
  - name: keywords
    content: aliases, tmux, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias Tmux sont une collection d'alias qui vous permettent d'interagir avec la commande `tmux`. Tmux est un outil qui vous permet d'executer plusieurs sessions de terminal dans une seule fenetre.
  - name: twitter:description
    content: Les alias Tmux sont une collection d'alias qui vous permettent d'interagir avec la commande `tmux`. Tmux est un outil qui vous permet d'executer plusieurs sessions de terminal dans une seule fenetre.
  - name: twitter:title
    content: Les alias Tmux - Dotfiles (FR)
  - name: og:title
    content: Les alias Tmux - Dotfiles (FR)
  - name: og:description
    content: Les alias Tmux sont une collection d'alias qui vous permettent d'interagir avec la commande `tmux`. Tmux est un outil qui vous permet d'executer plusieurs sessions de terminal dans une seule fenetre.
  - name: og:image:alt
    content: Les Dotfiles - Concus pour s'adapter a votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Tmux

Gerer les alias Tmux. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont definis dans `tmux.aliases.sh` et sont charges automatiquement par `chezmoi`.

## ⚡ Alias

## 🆃🅼🆄🆇 🅲🅾🅽🅵🅸🅶🆄🆁🅰🆃🅸🅾🅽
Une configuration tmux complete, concue pour la productivite et la facilite d'utilisation. La configuration est organisee en fichiers modulaires pour une meilleure maintenabilite :
- **default** : Parametres de base et configuration des plugins
- **display** : Parametres visuels et de comportement
- **linux** : Fonctionnalites specifiques a la plateforme
- **navigation** : Raccourcis clavier complets
- **panes** : Parametres propres aux panneaux
- **theme** : Barre d'etat et style visuel
### Fonctionnalites cles
- Schema de couleurs moderne avec barre d'etat adaptee a l'OS
- Raccourcis clavier intuitifs avec Ctrl+a comme touche de prefixe
- Controle complet des fenetres et des panneaux
- Persistance des sessions avec tmux-resurrect et tmux-continuum
- Menu d'aide deroulant (appuyez sur `Ctrl+a ?` pour y acceder)
- Support de la souris pour une navigation facile
### Navigation et raccourcis clavier
Appuyez sur `Ctrl+a ?` pour voir tous les raccourcis disponibles. Les principales fonctionnalites incluent :
- **Gestion des fenetres** : Diviser, creer, naviguer et renommer les fenetres facilement
- **Navigation des panneaux** : Se deplacer entre les panneaux avec les touches h/j/k/l de Vim
- **Gestion des sessions** : Creer, renommer et basculer entre les sessions
- **Mode copie** : Selection de type Vim, recherche et integration du presse-papiers

Alias pratiques pour les operations tmux :
| Alias | Description |
|-------|-------------|
| `tm`  | Demarrer tmux |
| `tma` | Attacher la derniere session |
| `tmat` | Attacher une session specifique |
| `tmks` | Tuer toutes les sessions sauf la courante |
| `tmka` | Tuer toutes les sessions (serveur) |
| `tml` | Lister toutes les sessions |
| `tmn` | Nouvelle session sans nom |
| `tms` | Nouvelle session nommee |
| `tmr` | Recharger la configuration tmux |
| `tmls` | Lister les fenetres |
| `tmlp` | Lister les panneaux |
| `tmi` | Afficher les infos tmux |
## Installation
1. Cloner le depot :
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git ~/.dotfiles
   ```
2. Executer le script d'installation :
   ```bash
   cd ~/.dotfiles && ./install.sh
   ```
3. Installer le gestionnaire de plugins tmux (si ce n'est pas deja fait) :
   ```bash
   git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
   ```
4. Ouvrir tmux et appuyer sur `Ctrl+a I` pour installer les plugins
## Utilisation
Demarrez une nouvelle session tmux avec :
```bash
tmux
```
Ou utilisez l'un des alias fournis pour les operations courantes.
## Licence
MIT

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
