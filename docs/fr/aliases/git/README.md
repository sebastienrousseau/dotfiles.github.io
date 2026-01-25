---
title: "Alias Git : simplifiez votre workflow de versioning"
description: "Plus de 80 alias Git pour des commits, branches, diffs et remotes plus rapides. Accélérez vos tâches quotidiennes."
lang: fr-FR
metaTitle: Alias Git | Dotfiles
permalink: /aliases/git/
sidebar: true

meta:
  - name: keywords
    content: alias git, raccourcis git, git dotfiles, alias git commit, alias git branch, alias git push, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Plus de 80 alias Git pour des commits, branches, diffs et remotes plus rapides. Accélérez vos tâches quotidiennes."
  - name: twitter:title
    content: Alias Git | Dotfiles
  - name: og:title
    content: Alias Git | Dotfiles
  - name: og:description
    content: "Plus de 80 alias Git pour des commits, branches, diffs et remotes plus rapides. Accélérez vos tâches quotidiennes."
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Git

Simplifiez votre workflow de versioning avec des raccourcis puissants.

## Aperçu

Les alias Git créent des raccourcis pour les commandes Git courantes. Faisant partie de la configuration [Dotfiles](https://github.com/sebastienrousseau/dotfiles), ces alias se chargent automatiquement via Chezmoi.

Définis dans `git.aliases.sh` et `signing.aliases.sh`, ces alias sont disponibles dans toute session Bash ou Zsh une fois installés.

## Référence

### Noyau

| Alias | Commande | Description |
|-------|---------|-------------|
| `g` | `git` | Raccourci pour git |
| `gtp` | `git rev-parse --show-toplevel` | Afficher le répertoire racine du dépôt |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Afficher le nom de la branche courante |
| `gconfl` | `git config --list` | Lister toute la configuration Git |
| `gconfr` | `git config --local --get remote.origin.url` | Afficher l’URL du remote origin |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Configurer un alias diff en mots colorés |

### Zone de travail

| Alias | Commande | Description |
|-------|---------|-------------|
| `ga` | `git add` | Stage des fichiers |
| `gaa` | `git add --all` | Stage tous les changements (suivis et non suivis) |
| `gad` | `git add .` | Stage tout dans le répertoire courant |
| `gau` | `git add --update` | Stage modifications et suppressions (sans nouveaux fichiers) |
| `gcl` | `git clone` | Cloner un dépôt |
| `gin` | `git init` | Initialiser un nouveau dépôt Git |
| `gco` | `git checkout` | Changer de branche ou restaurer des fichiers |
| `gcb` | `git checkout -b` | Créer et basculer sur une nouvelle branche |
| `gdis` | `git checkout --` | Annuler les changements du répertoire de travail |
| `grs` | `git restore` | Restaurer les fichiers du répertoire de travail |
| `gmv` | `git mv` | Déplacer ou renommer un fichier |
| `grm` | `git rm` | Supprimer des fichiers du dépôt et de l’index |
| `grmc` | `git rm --cached` | Désindexer un fichier (le conserver sur disque) |
| `gst` | `git status` | Afficher l’état du répertoire de travail |
| `gsts` | `git status --short` | État en format court |
| `gstsb` | `git status --short --branch` | État court avec branche et tracking |
| `gsta` | `git stash save` | Mettre de côté les changements |
| `gstp` | `git stash pop` | Appliquer et supprimer le dernier stash |
| `gstd` | `git stash drop` | Supprimer le dernier stash |
| `gclout` | `git clean -df && git checkout -- .` | Annuler tous les changements et fichiers non suivis |

### Commits

| Alias | Commande | Description |
|-------|---------|-------------|
| `gc` | `git commit -a` | Commit tous les fichiers suivis |
| `gca` | `git commit --amend` | Amender le dernier commit |
| `gcall` | `git add -A && git commit -av` | Stager tout et commit en mode verbeux |
| `gcam` | `git commit --amend --message` | Amender avec un nouveau message |
| `gcane` | `git commit --amend --no-edit` | Amender sans changer le message |
| `gcm` | `git commit --message` | Commit avec message inline |

### Diff et historique

| Alias | Commande | Description |
|-------|---------|-------------|
| `gd` | `git diff` | Afficher les changements non stagés |
| `gdch` | `git diff --name-status` | Noms et statuts des fichiers modifiés |
| `gdh` | `git diff HEAD` | Tous les changements depuis le dernier commit |
| `gdstaged` | `git diff --staged` | Afficher les changements stagés |
| `gdcached` | `git diff --cached` | Diff entre index et HEAD |
| `gdstat` | `git diff --stat --ignore-space-change -r` | Diffstat en ignorant les espaces |
| `gl` | `git log --since="last month" --oneline` | Log en une ligne du dernier mois |
| `glg` | `git log --graph --all --oneline --decorate` | Log graphique de toutes les branches |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | Log graphique complet avec couleurs |
| `glc` | `git log --oneline --reverse` | Log chronologique en une ligne |
| `gld` | `git log --since=1-day-ago` | Log des dernières 24 heures |
| `gldc` | `git log -1 --date-order --format=%cI` | Date ISO 8601 du dernier commit |
| `gldl` | `git log --date=local` | Log avec dates en timezone locale |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` | Nouveaux commits après fetch (sans merges) |
| `gll` | *(format graphique décoré)* | Log détaillé avec auteur et statut GPG |

### Branches

| Alias | Commande | Description |
|-------|---------|-------------|
| `gb` | `git branch` | Lister les branches locales |
| `gbd` | `git branch -d` | Supprimer une branche fusionnée |
| `gbl` | `git branch -l` | Lister les branches par motif |
| `gbr` | `git branch -r` | Lister les branches distantes |
| `gbrd` | `git branch -d -r` | Supprimer une branche distante suivie |
| `gbrsb` | `git show-branch` | Afficher les branches et leurs commits |
| `gswb` | `git switch` | Changer de branche (moderne) |
| `gcode` | `git checkout main && git branch --merged \| xargs git branch --delete` | Supprimer les branches fusionnées dans main |
| `gcom` | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Réinitialiser main local sur origin/main |

### Remotes et Push/Pull

| Alias | Commande | Description |
|-------|---------|-------------|
| `gf` | `git fetch` | Récupérer depuis le remote |
| `gp` | `git pull` | Tirer depuis le remote |
| `gph` | `git push` | Pousser vers le remote |
| `gpo` | `git push origin` | Pousser vers origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Pousser et définir l’upstream |
| `gpoll` | `git push origin --all` | Pousser toutes les branches vers origin |
| `gpull` | `git pull` | Tirer depuis le remote |
| `gpush` | `git push` | Pousser vers le remote |
| `gr` | `git remote` | Gérer les remotes |
| `gra` | `git remote add` | Ajouter un remote |
| `grall` | `git remote \| xargs -L1 git push --all` | Pousser toutes les branches vers tous les remotes |
| `grao` | `git remote add origin` | Ajouter le remote origin |
| `grv` | `git remote -v` | Afficher les URL des remotes |

### Revert et Reset

| Alias | Commande | Description |
|-------|---------|-------------|
| `grev` | `git revert` | Revert un commit |
| `grevnc` | `git revert --no-commit` | Revert sans auto-commit |
| `grb` | `git rebase` | Rebaser la branche courante |
| `grbk` | `git reset --soft HEAD^` | Annuler le dernier commit, garder les changements stagés |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | Hard reset et nettoyage des fichiers non suivis |
| `gresh` | `git reset --hard HEAD~1` | Hard reset sur le commit précédent |
| `gresp` | `git reset --hard && git clean -ffdx` | Réinitialiser tout à l’état initial |
| `gress` | `git reset --soft HEAD~1` | Soft reset (garder les changements stagés) |

### Sous-modules

| Alias | Commande | Description |
|-------|---------|-------------|
| `gsm` | `git submodule` | Gérer les sous-modules |
| `gsmi` | `git submodule init` | Initialiser les sous-modules |
| `gsma` | `git submodule add` | Ajouter un sous-module |
| `gsms` | `git submodule sync` | Synchroniser les URLs avec .gitmodules |
| `gsmu` | `git submodule update` | Mettre à jour les sous-modules |
| `gsmui` | `git submodule update --init` | Mettre à jour et initialiser |
| `gsmuir` | `git submodule update --init --recursive` | Mettre à jour, initialiser et récursiver |

### Outils

| Alias | Commande | Description |
|-------|---------|-------------|
| `gg` | `git grep` | Rechercher dans le dépôt |
| `gbs` | `git bisect` | Recherche binaire d’un commit fautif |
| `undopush` | `git push -f origin HEAD^:master` | Annuler le dernier push vers master |

### Signature et sécurité

| Alias | Commande | Description |
|-------|---------|-------------|
| `enable-signing` | *(assistant interactif)* | Configurer la signature GPG ou SSH des commits |
| `verify-signatures` | `git log --show-signature -n 10` | Vérifier les signatures des 10 derniers commits |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Vérifier la configuration de signature actuelle |
