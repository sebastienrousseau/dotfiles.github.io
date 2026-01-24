---
description: Comment Dotfiles gère la hiérarchie de votre variable \$PATH pour charger les bons outils dans le bon ordre.
lang: fr-FR
metaTitle: Chemins - Dotfiles (FR)
permalink: /fr/paths/

meta:
  - name: keywords
    content: path, environnement, variables, hiérarchie, dotfiles, chezmoi
---
<img
  src="https://kura.pro/dotfiles/v2/images/logos/dotfiles.svg"
  alt="logo dotfiles"
  width="66"
  align="right"
/>

# Configuration du PATH Dotfiles (v0.2.471)

Simplement conçu pour s'adapter à votre vie de shell 🐚

![Dotfiles banner][banner]

Ce répertoire gère votre variable système `PATH` à l'aide de scripts modulaires.

## 📖 Fonctionnement

Les configurations de chemins sont réparties en fichiers ordonnés par priorité. `chezmoi` les agrège par ordre alphabétique.

1. `dot_config/shell/paths.sh.tmpl` parcourt ce répertoire.
2. Le contenu est agrégé dans `~/.config/shell/paths.sh`.
3. Ce fichier est sourcé par `.zshrc` au démarrage.

## 🔑 Liste des scripts

| Script | Description |
| :--- | :--- |
| `00-default.paths.sh` | Définit les chemins système de base (`/usr/bin`, `/sbin`, etc.) et Homebrew. Chargé en premier. |
| `99-custom.paths.sh` | Définit les chemins utilisateurs (SDKs de langages, binaires locaux). Chargé en dernier pour garantir la priorité. |

## 🛠 Utilisation

### Ajouter un chemin utilisateur
1. Modifiez `99-custom.paths.sh` ou créez un nouveau fichier (ex. `50-monprojet.paths.sh`).
2. Ajoutez `export PATH="$PATH:/chemin/vers/repertoire"`.
3. Appliquez les changements :
   ```bash
   chezmoi apply
   ```
4. Vérifiez :
   ```bash
   echo $PATH
   ```

<!-- markdownlint-enable MD013-->

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
