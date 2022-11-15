---
description: Les alias git sont des raccourcis pour les commandes de git. Git est un système de contrôle de révision rapide et efficace.
lang: fr-FR
metaTitle: Les alias git - Dotfiles (FR)
permalink: /aliases/git/

meta:
  - name: keywords
    content: aliases, bash, configuration, dotfiles, git, gitconfig, linux, macos, shell, windows, zsh
  - name: twitter:card
    content: Les alias git sont des raccourcis pour les commandes de git. Git est un système de contrôle de révision rapide et efficace.
  - name: twitter:description
    content: Les alias git sont des raccourcis pour les commandes de git. Git est un système de contrôle de révision rapide et efficace.
  - name: twitter:title
    content: Les alias git - Dotfiles (FR)
  - name: og:title
    content: Les alias git - Dotfiles (FR)
  - name: og:description
    content: Les alias git sont des raccourcis pour les commandes de git. Git est un système de contrôle de révision rapide et efficace.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias Git

Le fichier `git.aliases.sh` contient des alias pour les commandes de git. Les
alias sont des raccourcis pour les commandes de git.

Git est un système de contrôle de révision rapide, évolutif et distribué avec un
jeu de commandes exceptionnellement riche qui fournit à la fois des opérations
de haut niveau et un accès complet aux éléments internes.

## Raccourcis Git

### Travailler sur des changement en cours

| Alias | Commande | Description |
| ----- | ----- | ----- |
| g | `git` | Alias pour la commande git |
| ga | `git add` | Ajouter des fichiers à l'index |
| gaa | `git add --all` | Ajouter tous les fichiers à l'index |
| gad | `git add .` | Ajouter tous les fichiers à l'index |
| gau | `git add --update` | Ajouter tous les fichiers modifiés à l'index |
| gco | `git checkout` | Basculer entre les branches |
| gdis | `git checkout --` | Annuler les modifications dans le répertoire de travail |
| gmv | `git mv` | Déplacer ou renommer un fichier, un répertoire ou un lien symbolique |
| grs | `git restore` | Restaurer les fichiers dans l'index |
| gsc | `git sparse-checkout` | Gérer les répertoires sparse |

### Commencer à travailler sur un projet

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gcl | `git clone` | Clone un dépôt dans un nouveau répertoire. |
| gin | `git init` | Crée un nouveau dépôt git. |

### Regarder l'historique des changements

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gbs | `git bisect` | Utiliser la recherche binaire pour trouver la source d'un bogue |
| gd | `git diff` | Afficher les modifications de fichiers non indexées |
| gg | `git grep` | Imprimer les lignes correspondant à un motif |
| gl | `git log --since="last month" --oneline` | Afficher les commits du mois dernier |
| glg | `git log --oneline --graph --full-history --all --color --decorate` | Afficher les logs sous forme de graphique |
| gs | `git show` | Afficher les modifications de fichiers indexées |

### Gestion des branches

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gb | `git branch` | Création de branches |
| gbd | `git branch -d` | Supprimer les branches |
| gbl | `git branch -l` | Liste des branches |
| gbr | `git branch -r` | Liste des branches récursivement |
| gbrd | `git branch -d -r` | Supprimer les branches récursivement |
| gbrsb | `git show-branch` | Imprimer les branches |
| gct | `git commit` | Enregistrer les changements |
| gmg | `git merge` | Fusionner deux branches |
| grb | `git rebase` | Rebase une branche sur une autre |
| grs | `git reset` | Réinitialiser HEAD, l'index et le répertoire de travail |
| gswb | `git switch` | Basculer entre les branches |

### Collaborer

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gf | `git fetch` | Télécharger les objets et les références depuis un autre dépôt |
| gi | `git init` | Créer un nouveau dépôt git |
| gp | `git pull` | Télécharger le contenu d'un dépôt et l'intégrer |
| gpu | `git push` | Mettre à jour les références distantes en les poussant |

### Enregistrer des changements dans le dépôt

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gc | `git commit -a` | Enregistrer les changements |
| gca | `git commit --amend` | Modifier le dernier commit |
| gcall | `git add -A && git commit -av` | Ajouter tous les fichiers et enregistrer les changements |
| gcam | `git commit --amend --message` | Modifier le dernier commit avec un message |
| gcane | `git commit --amend --no-edit` | Modifier le dernier commit sans modifier le message |
| gcint | `git commit --interactive` | Interactif |
| gcm | `git commit --message` | Enregistrer les changements avec un message |

### Montrer l'état du dépôt

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gd | `git diff` | Afficher les changements entre les commits, le commit et l'arborescence de travail, etc. |
| gdcached | `git diff --cached` | Afficher les changements entre l'index et le dernier commit |
| gdch | `git diff --name-status` | Afficher les changements entre les commits, le commit et l'arborescence de travail, etc. |
| gdh | `git diff HEAD` | Afficher les changements entre le dernier commit et l'arborescence de travail |
| gdstaged | `git diff --staged` | Afficher les changements entre l'index et le dernier commit |
| gdstat | `git diff --stat --ignore-space-change -r` | Génère un rapport de différence statique |

### Afficher les logs du dépôt

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gclc | `git log --oneline --reverse` | Afficher les changements, de la plus récente à la plus ancienne |
| gld | `git log --since=1-day-ago` | Afficher les logs des dernières 24 heures |
| gldc | `git log -1 --date-order --format=%cI` | Afficher la date du dernier commit au format ISO 8601 |
| gldl | `git log --date=local` | Afficher les logs avec la date locale |
| glf | `git log ORIG_HEAD.. --stat --no-merges` |  Afficher les logs des commits non fusionnés depuis la dernière fois que vous avez fusionné |
| glfd | `!"git log --date-order --format=%cI | tail -1"` | Afficher la date du dernier commit au format ISO 8601 |
 glfh | `git log --graph --full-history --all --color` | Afficher les logs avec un graphique |
| glg | `git log --graph --all --oneline --decorate` | Afficher les logs avec un graphique |
| glh | `git log --since=1-hour-ago` | Afficher les logs des dernières 60 minutes |
| gll | `git log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset"` | Afficher les logs dans un format personnalisé pour nos indicateurs clés |
| glll | `git log --graph --topo-order --date=iso8601-strict --no-abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn <%ce>]%Creset %Cblue%G?%Creset"` | Afficher les logs dans un format personnalisé pour nos indicateurs clés longs |
| glm | `git log --since=1-month-ago` | Afficher les logs des derniers 30 jours |
| glmy | `!git log --author $(git config user.email)` | Afficher les logs de l'auteur courant |
| glw | `git log --since=1-week-ago` | Afficher les logs des derniers 7 jours |
| gly | `git log --since=1-year-ago` | Afficher les logs des dernières 365 jours |

### Changements de branche ou restauration de fichiers dans l'arborescence de travail

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gclout | `git clean -df && git checkout -- .` | Nettoyer les fichiers non suivis et restaurer les fichiers modifiés |
| gco | `git checkout` | Basculer entre les branches |
| gcob | `git checkout -b` | Créer une nouvelle branche et basculer dessus |
| gcode | `git checkout main && git branch --merged | xargs git branch --delete` | Supprimer les branches fusionnées |
| gcom | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Mettre à jour la branche principale |

### Mettre à jour les références distantes

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gpb | `git push --set-upstream origin $(git current-branch)` | Pousser la branche courante et la configurer pour suivre la branche distante |
| gpo | `git push origin` | Pousser la branche vers le dépôt distant origin |
| gpoll | `git push origin --all` | Pousser toutes les branches vers le dépôt distant origin |
| gpt | `git push --tags` | Pousser les tags vers le dépôt distant origin |
| gpull | `git pull` | Récupérer les changements depuis le dépôt distant origin |
| gpullo | `git pull origin $(git current-branch)` | Récupérer les changements depuis le dépôt distant origin pour la branche courante |
| gpullm | `git pull origin master` | Récupérer les changements depuis le dépôt distant origin pour la branche master |
| gpush | `git push` | Pousser la branche vers le dépôt distant origin |
| gpusho | `git push origin $(git current-branch)` | Pousser la branche courante vers le dépôt distant origin |
| gpushr | `git remote | xargs -I% -n1 git push %` | Pousser toutes les branches vers tous les dépôts distants |
| gunpub | `git push origin :$(git current-branch)` | Supprimer la branche courante du dépôt distant origin |

### Gestion des dépôts distants

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gr | `git remote` | Gérer les dépôts distants |
| gra | `git remote add` | Ajouter un dépôt distant |
| grall | `git remote | xargs -L1 git push --all` | Pousser toutes les branches vers tous les dépôts distants |
| grao | `git remote add origin` | Ajouter le dépôt distant origin s'il n'existe pas |
| grbk | `git reset --soft HEAD^` | Supprimer le dernier commit sur la branche courante |
| grcl | `git remote prune` | Supprimer les branches distantes zombies |
| grp | `git remote | xargs -I% -n1 git push %` | Pousser toutes les branches vers tous les dépôts distants |
| grpa | `for i in`git remote`; do git push $i; done;` | Pousser toutes les branches vers tous les dépôts distants |
| grprint | `git remote -v` | Afficher l'url du dépôt courant |
| grs | `git show` | Montrer diverses informations sur les objets Git |
| grso | `git remote show origin` | Afficher les informations sur le dépôt distant origin |
| grv | `git remote -v` | Afficher les urls des dépôts distants |
| gru | `git remote update` | Récupérer toutes les mise à jour des dépôts distants |

### Revenir en arrière sur les commits

| Alias | Commande | Description |
| ----- | ----- | ----- |
| grev | `git revert` | Revenir en arrière sur un commit |
| grevnc | `git revert --no-commit` | Revenir en arrière sur un commit sans commiter |

### Initialiser, mettre a jour et rechercher des sous-modules

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gsmi | `git submodule init` | Initialiser les sous-modules |
| gsma | `git submodule add` | Ajouter un sous-module |
| gsm | `git submodule` | Gérer les sous-modules |
| gsms | `git submodule sync` | Synchroniser les sous-modules |
| gsmu | `git submodule update` | Mettre à jour les sous-modules |
| gsmui | `git submodule update --init` | Mettre à jour les sous-modules et les initialiser |
| gsmuir | `git submodule update --init --recursive` | Mettre à jour les sous-modules et les initialiser récursivement |

### Afficher l'état du dépôt courant

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gst | `git status` | Afficher l'état du dépôt courant |
| gsts | `git status --short` | Afficher l'état du dépôt courant en mode court |
| gstsb | `git status --short --branch` | Afficher l'état du dépôt courant en mode court et la branche courante |

### Créer, lister, supprimer ou vérifier un tag signé avec GPG

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gt | `git tag` | Afficher les tags |
| gta | `git tag -a $1 -m $2` | Créer un tag annoté |
| gtg | `git tag` | Afficher les tags signés avec GPG |
| gtl | `git describe --tags --abbrev=0` | Afficher le dernier tag |
| gtrm | `for t in`git tag`do; git push origin :$t; git tag -d $t; done` | Supprimer tous les tags |

### Afficher diverses informations sur les objets Git

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gshls | `git show --relative --pretty=format:''` | Afficher les fichiers modifiés |
| gshnp | `git show --no-patch --pretty="tformat:%h (%s, %ad)" --date=short` | Afficher les informations sur le dernier commit |
| gshwho | `git shortlog --summary --numbered --no-merges` | Afficher les auteurs des commits |

### Rétablir la branch courante

| Alias | Commande | Description |
| ----- | ----- | ----- |
| grescl | `git reset --hard HEAD~1 && git clean -fd` | Rétablir la branche courante et supprimer les fichiers non suivis |
| gresh | `git reset --hard HEAD~1` | Rétablir la branche courante |
| gresp | `git reset --hard && git clean -ffdx` | Rétablir la branche courante et supprimer les fichiers non suivis |
| gress | `git reset --soft HEAD~1` | Rétablir la branche courante sans supprimer les fichiers non suivis |
| gresu | `git reset --hard $(git upstream-branch)` | Rétablir la branche courante avec la branche upstream |

### Prendre en compte les modifications

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gtp | `git rev-parse --show-toplevel` | Obtient le nom du répertoire supérieur du dépôt courant |
| gcb | `git rev-parse --abbrev-ref HEAD` | Obtient le nom de la branche courante |

### Supprimer les fichiers du répertoire de travail et de l'index

| Alias | Commande | Description |
| ----- | ----- | ----- |
| grm | `git rm` | Supprimer les fichiers du répertoire de travail et de l'index |
| grmc | `git rm --cached` | Supprimer les fichiers de l'index |
| grmd | `git ls-files -z --deleted | xargs -0 git rm` | Supprimer les fichiers supprimés du répertoire de travail et de l'index |
| grmd2 | `git rm $(git ls-files --deleted)` | Supprimer les fichiers supprimés du répertoire de travail et de l'index |
| grmds | `find . -name .DS_Store -exec git rm --ignore-unmatch --cached {} +` | Supprimer les fichiers .DS_Store du répertoire de travail et de l'index |
| grmn | `for file in $(git status | grep "new file" | sed "s/#\tnew file://"); do git rm --cached $file; done` |
Supprimer tous les fichiers. |
| grmx | `git ls-files -z -d | xargs -0 git rm --` | Supprimer les fichiers supprimés du répertoire de travail et de l'index |

### Afficher quelles révisions ont introduit des modifications dans un fichier

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gbl | `git blame --date short "$1"` | Spécifie un format de date court |

### Options de configuration globales

| Alias | Commande | Description |
| ----- | ----- | ----- |
| gconfdiff | `git config alias.dcolor "diff --color-words"` | Afficher les différences avec des mots colorés |
| gconfl | `git config --list` | Afficher la liste des options de configuration |
| gconfr | `git config --local --get remote.origin.url` | Afficher l'URL du dépôt distant |
