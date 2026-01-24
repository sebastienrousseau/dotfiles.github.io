---
description: Les alias vous permettent de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permet d'être plus productif et efficace en réduisant la quantité de frappe nécessaire lors d'un usage régulier du shell.
lang: fr-FR
metaTitle: Alias - Dotfiles (FR)
permalink: /alias/

meta:
  - name: keywords
    content: alias, archives, cd, chmod, clear, commands, default, dig, dotfiles, du, editor, find, gcloud, git, gnu, heroku, interactive, jekyll, list, make, mkdir, npm, pnpm, ps, rsync, rust, shell, subversion, sudo, tmux, typing, update, uuid, wget, compliance, diagnostics, disk-usage, docker, fonts, go, installer, kubernetes, legal, macos, modern, permission, python, security, terraform, yarn, ai
  - name: twitter:card
    content: Les alias vous permettent de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permet d'être plus productif et efficace en réduisant la quantité de frappe nécessaire lors d'un usage régulier du shell.
  - name: twitter:description
    content: Les alias vous permettent de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permet d'être plus productif et efficace en réduisant la quantité de frappe nécessaire lors d'un usage régulier du shell.
  - name: twitter:title
    content: Alias - Dotfiles (FR)
  - name: og:title
    content: Alias - Dotfiles (FR)
  - name: og:description
    content: Les alias vous permettent de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permet d'être plus productif et efficace en réduisant la quantité de frappe nécessaire lors d'un usage régulier du shell.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
<img
  src="https://kura.pro/dotfiles/v2/images/logos/dotfiles.svg"
  align="right"
/>

# Alias Dotfiles (v0.2.471)

Simplement conçus pour s'adapter à votre vie de shell 🐚

![Dotfiles banner][banner]

Ce répertoire contient des définitions d'alias modulaires gérées par **chezmoi**.

## 📖 Fonctionnement

Les alias sont découpés en petits fichiers gérables (ex. `git/git.aliases.sh`, `docker/docker.aliases.sh`).

Lors de `chezmoi apply`, le modèle principal `dot_config/shell/aliases.sh.tmpl` :
1. Parcourt ce répertoire pour trouver les fichiers `**/*.aliases.sh`.
2. Les agrège en un fichier unique `~/.config/shell/aliases.sh`.
3. Ce fichier agrégé est sourcé par votre `.zshrc`.

## 🛠 Utilisation

### Ajouter un nouvel alias
1. Créez un nouveau répertoire ou fichier (ex. `monoutil/monoutil.aliases.sh`).
2. Définissez vos alias :
   ```bash
   alias moncmd="echo 'Hello World'"
   ```
3. Appliquez les changements :
   ```bash
   chezmoi apply
   ```

## 🔧 Liste des composants

<!-- markdownlint-disable MD013-->

| Répertoire      | Description                                              | Lien                        |
| :-------------- | :------------------------------------------------------- | :-------------------------- |
| `archives`      | Compresser et extraire des fichiers et répertoires.      | [Voir README](archives/README.md) |
| `cd`            | Naviguer dans le système de fichiers.                    | [Voir README](cd/README.md)       |
| `chmod`         | Modifier les permissions de fichiers et répertoires.     | [Voir README](chmod/README.md)    |
| `clear`         | Effacer l'écran du terminal.                             | [Voir README](clear/README.md)    |
| `compliance`    | Conformité réglementaire (SOC2) et outils de confidentialité. | [Voir README](compliance/README.md) |
| `configuration` | Gérer les dotfiles et les configurations shell.          | [Voir README](configuration/README.md) |
| `default`       | Définir les alias et configurations par défaut.          | [Voir README](default/README.md)  |
| `dig`           | Interroger les serveurs de noms DNS.                     | [Voir README](dig/README.md)      |
| `diagnostics`   | Auto-réparation et contrôles de santé (doctor, drift).   | [Voir README](diagnostics/README.md) |
| `disk-usage`    | Afficher les informations d'utilisation du disque.       | [Voir README](disk-usage/README.md) |
| `editor`        | Configurer l'éditeur de texte par défaut.                | [Voir README](editeur/README.md)  |
| `find`          | Rechercher des fichiers et répertoires avec `find`.      | [Voir README](recherche/README.md) |
| `fonts`         | Gestion du cache des polices.                            | [Voir README](fonts/README.md)    |
| `gcloud`        | Gérer les outils Google Cloud SDK.                       | [Voir README](gcloud/README.md)   |
| `git`           | Gérer les alias et configurations Git.                   | [Voir README](git/README.md)      |
| `gnu`           | Gérer les utilitaires GNU core.                          | [Voir README](gnu/README.md)      |
| `heroku`        | Gérer la CLI Heroku.                                     | [Voir README](heroku/README.md)   |
| `immutability`  | Verrouiller/déverrouiller les fichiers critiques (`chflags`/`chattr`). | [Voir README](immutability/README.md) |
| `installer`     | Outils d'amorçage et de déploiement à distance.          | [Voir README](installer/README.md) |
| `interactive`   | Configurer le comportement interactif du shell.          | [Voir README](mode-interactif/README.md) |
| `kubernetes`    | Gérer les alias Kubernetes, Helm et K9s.                 | [Voir README](kubernetes/README.md) |
| `legal`         | Outils de conformité et de scan de licences.             | [Voir README](legal/README.md)      |
| `macOS`         | Gérer les paramètres shell spécifiques à macOS.          | [Voir README](macOS/README.md)    |
| `make`          | Gérer les alias et utilitaires GNU Make.                 | [Voir README](make/README.md)     |
| `mkdir`         | Créer des répertoires avec des options personnalisées.   | [Voir README](mkdir/README.md)    |
| `modern`        | Remplacements modernes en Rust (ls, cat).                | [Voir README](modern/README.md)   |
| `npm`           | Gérer les alias du gestionnaire de paquets Node.js.      | [Voir README](npm/README.md)      |
| `permission`    | Configurer les permissions de fichiers et répertoires.   | [Voir README](permission/README.md) |
| `pnpm`          | Gérer les alias du gestionnaire de paquets pnpm.         | [Voir README](pnpm/README.md)     |
| `ps`            | Gérer les commandes d'état des processus.               | [Voir README](ps/README.md)       |
| `python`        | Configurer les alias et utilitaires Python.              | [Voir README](python/README.md)   |
| `rsync`         | Configurer rsync pour des transferts efficaces.          | [Voir README](rsync/README.md)    |
| `rust`          | Gérer les outils et configurations Rust.                 | [Voir README](rust/README.md)     |
| `security`      | Configuration d'immutabilité et de signature.            | [Voir README](security/README.md) |
| `subversion`    | Configurer Subversion (SVN).                             | [Voir README](subversion/README.md) |
| `sudo`          | Gérer les opérations superutilisateur.                   | [Voir README](sudo/README.md)     |
| `tmux`          | Configurer le multiplexeur de terminal tmux.             | [Voir README](tmux/README.md)     |
| `update`        | Mettre à jour les dotfiles et configurations associées.  | [Voir README](mise-a-jour/README.md) |
| `uuid`          | Générer des UUID pour divers usages.                     | [Voir README](uuid/README.md)     |
| `wget`          | Gérer l'outil en ligne de commande wget.                 | [Voir README](wget/README.md)     |

<!-- markdownlint-enable MD013-->

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
