---
description: Les alias Chmod permettent de modifier les permissions (ou mode d'accès) d'un fichier ou d'un répertoire.
lang: fr-FR
metaTitle: Alias Chmod - Dotfiles (FR)
permalink: /alias/chmod/

meta:
  - name: twitter:card
    content: Les alias Chmod permettent de modifier les permissions (ou mode d'accès) d'un fichier ou d'un répertoire.
  - name: twitter:description
    content: Les alias Chmod permettent de modifier les permissions (ou mode d'accès) d'un fichier ou d'un répertoire.
  - name: twitter:title
    content: Alias Chmod - Dotfiles (FR)
  - name: og:title
    content: Alias Chmod - Dotfiles (FR)
  - name: og:description
    content: Les alias Chmod permettent de modifier les permissions (ou mode d'accès) d'un fichier ou d'un répertoire.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Chmod

Gérer les alias Chmod. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `chmod.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

---
## 🚀 Introduction
Ce script fournit un ensemble amélioré de raccourcis et de fonctions pour la commande
`chmod`, facilitant la gestion des permissions de fichiers et répertoires.
Avec des fonctionnalités comme la validation des entrées, la confirmation récursive et des alias conviviaux,
vous pouvez personnaliser efficacement les permissions.
---
## 🛠️ Fonctionnalités
Appliquer rapidement des permissions courantes avec des alias pré-définis :
| Alias        | Permissions      | Description                               |
|--------------|------------------|-------------------------------------------|
| `chmod_000`  | `----------`     | Aucune permission pour personne           |
| `chmod_400`  | `r--------`      | Lecture seule pour le propriétaire        |
| `chmod_444`  | `r--r--r--`      | Lecture seule pour tous                   |
| `chmod_600`  | `rw-------`      | Lecture/écriture pour le propriétaire     |
| `chmod_644`  | `rw-r--r--`      | Lecture/écriture pour le propriétaire, lecture seule pour les autres |
| `chmod_666`  | `rw-rw-rw-`      | Lecture/écriture pour tous                |
| `chmod_755`  | `rwxr-xr-x`      | Pleins droits pour le propriétaire, lecture/exécution pour les autres |
| `chmod_764`  | `rwxrw-r--`      | Pleins droits pour le propriétaire, lecture/écriture pour le groupe, |
| `chmod_777`  | `rwxrwxrwx`      | Pleins droits pour tous                   |
---
### 🔧 Confirmation récursive des permissions
La fonction `change_permission` permet d'appliquer des permissions de façon récursive
avec une confirmation, en affichant le nombre d'éléments concernés :
```bash
change_permission 755 /path/to/directory -R
```
---
### 📂 Raccourcis utilisateur, groupe et autres
Affiner les permissions pour des groupes spécifiques (propriétaire, groupe ou autres) :
| Alias         | Description                                |
|---------------|--------------------------------------------|
| `chmod_u+x`   | Ajouter l'exécution pour le propriétaire   |
| `chmod_u-x`   | Retirer l'exécution pour le propriétaire   |
| `chmod_u+w`   | Ajouter l'écriture pour le propriétaire    |
| `chmod_u-w`   | Retirer l'écriture pour le propriétaire    |
| `chmod_u+r`   | Ajouter la lecture pour le propriétaire    |
| `chmod_u-r`   | Retirer la lecture pour le propriétaire    |
| `chmod_g+x`   | Ajouter l'exécution pour le groupe         |
| `chmod_g-x`   | Retirer l'exécution pour le groupe         |
| `chmod_g+w`   | Ajouter l'écriture pour le groupe          |
| `chmod_g-w`   | Retirer l'écriture pour le groupe          |
| `chmod_g+r`   | Ajouter la lecture pour le groupe          |
| `chmod_g-r`   | Retirer la lecture pour le groupe          |
| `chmod_o+x`   | Ajouter l'exécution pour les autres        |
| `chmod_o-x`   | Retirer l'exécution pour les autres        |
| `chmod_o+w`   | Ajouter l'écriture pour les autres         |
| `chmod_o-w`   | Retirer l'écriture pour les autres         |
| `chmod_o+r`   | Ajouter la lecture pour les autres         |
| `chmod_o-r`   | Retirer la lecture pour les autres         |
---
Définir facilement les permissions pour des types de fichiers spécifiques :
| Alias        | Description                                        |
|--------------|----------------------------------------------------|
| `chmod_755d` | Définir les permissions de tous les répertoires à `rwxr-xr-x`  |
| `chmod_644f` | Définir les permissions de tous les fichiers à `rw-r--r--`    |
---
## 📦 Installation
1. Cloner ce dépôt :
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git
   ```
2. Sourcer le script dans votre configuration shell :
   ```bash
   echo 'source /path/to/dotfiles/chmod.sh' >> ~/.bashrc
   ```
3. Recharger votre shell :
   ```bash
   source ~/.bashrc
   ```
---
## 🧑‍💻 Utilisation
Voici quelques exemples d'utilisation des alias et fonctions `chmod` :
- Appliquer des permissions courantes :
  ```bash
  chmod_644 /path/to/file
  chmod_755 /path/to/directory
  ```
- Modifier les permissions pour utilisateur, groupe ou autres :
  ```bash
  chmod_u+x /path/to/script
  chmod_g-w /path/to/file
  chmod_o+r /path/to/file
  ```
- Définir des permissions récursives avec confirmation :
  ```bash
  change_permission 755 /path/to/directory -R
  ```
---
## 🛡️ Licence
Ce projet est sous licence
[MIT License](https://opensource.org/licenses/MIT). Consultez le fichier `LICENSE`
pour plus d'informations.
---
## 👨‍💻 Auteur
Créé avec ♥ par [Sebastien Rousseau](https://sebastienrousseau.com)
- Site : [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub : [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
