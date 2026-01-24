---
description: Les alias Change Directory sont une collection d'alias permettant d'interagir avec l'outil `cd` en ligne de commande. Cd est un outil qui change le répertoire courant.
lang: fr-FR
metaTitle: Alias Change Directory - Dotfiles (FR)
permalink: /alias/cd/

meta:
  - name: keywords
    content: alias, cd, chdir, change directory, directory, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias Change Directory sont une collection d'alias permettant d'interagir avec l'outil `cd` en ligne de commande. Cd est un outil qui change le répertoire courant.
  - name: twitter:description
    content: Les alias Change Directory sont une collection d'alias permettant d'interagir avec l'outil `cd` en ligne de commande. Cd est un outil qui change le répertoire courant.
  - name: twitter:title
    content: Alias Change Directory - Dotfiles (FR)
  - name: og:title
    content: Alias Change Directory - Dotfiles (FR)
  - name: og:description
    content: Les alias Change Directory sont une collection d'alias permettant d'interagir avec l'outil `cd` en ligne de commande. Cd est un outil qui change le répertoire courant.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Cd

Gérer les alias Cd. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `cd.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

---
## 🚀 Introduction
Ce dépôt inclut un ensemble robuste d'alias et de scripts shell conçus pour
simplifier votre expérience en ligne de commande. Le système de navigation amélioré offre :
- **Suivi intelligent de l'historique des répertoires**
- **Système de signets persistant**
- **Détection de la racine de projet**
- **Compatibilité multiplateforme**
- **Gestion dynamique des erreurs**
- **Listage automatique des répertoires**
- **Optimisation des performances pour les gros répertoires**
- **Sécurité et validation renforcées**
---
## 🛠️ Fonctionnalités
### 🌟 Raccourcis de navigation
| Alias           | Description                           |
|------------------|--------------------------------------|
| `-`             | Revenir au répertoire précédent        |
| `..`, `...`     | Remonter d'un ou deux niveaux          |
| `....`, `.....` | Remonter de trois ou quatre niveaux    |
| `hom`           | Aller au répertoire home (`~`)         |
---
### 📂 Accès aux répertoires personnalisés
Accéder rapidement aux répertoires fréquemment utilisés avec des raccourcis cohérents :
| Alias | Chemin du répertoire     | Description            |
|-------|--------------------------|------------------------|
| `app` | `${HOME}/Applications`  | Répertoire Applications |
| `cod` | `${HOME}/Code`          | Répertoire Code        |
| `dsk` | `${HOME}/Desktop`       | Bureau                 |
| `doc` | `${HOME}/Documents`     | Documents              |
| `dot` | `${HOME}/.dotfiles`     | Répertoire dotfiles    |
| `dwn` | `${HOME}/Downloads`     | Téléchargements        |
| `mus` | `${HOME}/Music`         | Musique                |
| `pic` | `${HOME}/Pictures`      | Images                 |
| `vid` | `${HOME}/Videos`        | Vidéos                 |
---
### 📌 Système de signets
Créer et gérer des signets persistants pour n'importe quel répertoire :
| Commande            | Alias | Description                       |
|---------------------|-------|-----------------------------------|
| `bookmark [name]`   | `bm`  | Créer des signets                 |
| `bookmark_list`     | `bml` | Lister tous les signets           |
| `bookmark_update`   | `bmu` | Mettre à jour un signet existant  |
| `bookmark_remove`   | `bmr` | Supprimer un signet               |
| `goto <name>`       | `bmg` | Aller au répertoire signeté       |
```bash
# Créer un signet pour le répertoire courant
bm work-project
# Aller au répertoire signeté depuis n'importe où
bmg work-project
# Lister tous les signets
bml
```
---
### 🕒 Historique des répertoires
Suivre et naviguer vers les répertoires récemment visités :
| Commande     | Alias | Description                        |
|--------------|-------|------------------------------------|
| `dirhistory` | `dh`  | Afficher et naviguer l'historique  |
| `lwd`        | `ld`  | Revenir au dernier répertoire de travail |
---
### 🏗️ Navigation avancée
| Commande         | Alias | Description                                |
|-----------------|-------|--------------------------------------------|
| `mkcd <dir>`    | `mcd` | Créer puis entrer dans un répertoire       |
| `proj`          | `pr`  | Aller à la racine du projet (Git, npm, etc.) |
| `pushd`         | `pd`  | Pousser un répertoire sur la pile          |
| `popd`          |       | Dépiler un répertoire                       |
| `dirs`          |       | Lister la pile de répertoires avec indices |
---
### 🔧 Répertoires système
Naviguer facilement vers des répertoires système critiques :
| Alias | Chemin du répertoire | Description                    |
|-------|-----------------------|--------------------------------|
| `etc` | `/etc`               | Répertoire de configuration système |
| `var` | `/var`               | Répertoire des fichiers variables |
| `tmp` | `/tmp`               | Répertoire des fichiers temporaires |
| `usr` | `/usr`               | Répertoire des programmes utilisateur |
---
### ⚙️ Personnalisation avancée
- **Compatibilité multiplateforme** : fonctionne sur macOS, Linux et autres systèmes Unix
- **Options configurables** : personnaliser le comportement via des variables d'environnement :
  ```bash
  # Dans votre .bashrc ou .zshrc
  export SHOW_HIDDEN_FILES=true        # Afficher les fichiers cachés
  export ENABLE_COLOR_OUTPUT=true      # Activer la couleur
  export ENABLE_DIR_GROUPING=true      # Grouper les répertoires en premier
  export AUTO_LIST_AFTER_CD=true       # Lister après navigation
  export LARGE_DIR_THRESHOLD=1000      # Ignorer le listing pour grands répertoires
  export MAX_RECENT_DIRS=15            # Nombre de répertoires dans l'historique
  export RESTORE_LAST_DIR=true         # Restaurer le dernier répertoire au démarrage
  ```
- **Complétion par tabulation** : complétion intelligente pour les signets et commandes
- **Système d'aide** : exécuter `cdhelp` pour voir toutes les commandes
- **Suivi de version** : exécuter `cdversion` pour afficher la version
---
## 📦 Installation
1. **Cloner le dépôt** :
```bash
git clone https://github.com/sebastienrousseau/dotfiles.git
```
2. **Sourcer le script dans la configuration shell** :
```bash
echo 'source /path/to/dotfiles/cd.aliases.sh' >> ~/.bashrc
```
3. **Recharger le shell** :
```bash
source ~/.bashrc
```
---
## 🧑‍💻 Exemples d'utilisation
```bash
# Naviguer vers un répertoire avec suivi d'historique
cd ~/projects/website
# Créer un nouveau répertoire et s'y déplacer
mcd ~/projects/new-project
# Créer un signet pour le répertoire courant
bm website
# Lister tous les signets
bml
# Aller à un répertoire signeté
bmg website
# Trouver et aller à la racine du projet
pr
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
