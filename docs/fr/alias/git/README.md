---
description: Les alias Git fournissent des commandes puissantes qui créent des raccourcis vers les commandes Git courantes. Toutes ces fonctions et alias sont des wrappers autour des outils de ligne de commande Git. Les alias Git améliorent la vitesse et l'efficacite.
lang: fr-FR
metaTitle: Les alias Git - Dotfiles (FR)
permalink: /aliases/git/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Les alias Git fournissent des commandes puissantes qui créent des raccourcis vers les commandes Git courantes. Toutes ces fonctions et alias sont des wrappers autour des outils de ligne de commande Git. Les alias Git améliorent la vitesse et l'efficacite.
  - name: twitter:description
    content: Les alias Git fournissent des commandes puissantes qui créent des raccourcis vers les commandes Git courantes. Toutes ces fonctions et alias sont des wrappers autour des outils de ligne de commande Git. Les alias Git améliorent la vitesse et l'efficacite.
  - name: twitter:title
    content: Les alias Git - Dotfiles (FR)
  - name: og:title
    content: Les alias Git - Dotfiles (FR)
  - name: og:description
    content: Les alias Git fournissent des commandes puissantes qui créent des raccourcis vers les commandes Git courantes. Toutes ces fonctions et alias sont des wrappers autour des outils de ligne de commande Git. Les alias Git améliorent la vitesse et l'efficacite.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter a votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Git

Gerer les alias Git. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont definis dans `git.aliases.sh` et sont charges automatiquement par `chezmoi`.

## ⚡ Alias

Voici une collection d'alias Git pratiques qui simplifient et accelerent les commandes Git
courantes, en les rendant plus courtes et plus intuitives.
- `gc` Commande de commit qui ajoute automatiquement les changements de tous les fichiers connus.
- `gca` Modifier la tete de la branche courante plutot que de creer un nouveau commit.
- `gcall` Committer toutes les modifications.
- `gcam` Modifier la tete de la branche courante et editer le message.
- `gcane` Modifier la tete de la branche courante sans editer le message.
- `gcint` Commit interactif.
- `gcm` Commit avec un message.
- `gd` Afficher les changements entre l'arborescence de travail et l'index, ou un arbre.
- `gdch` Afficher uniquement les noms et l'etat des fichiers modifies.
- `gdh` Afficher toutes les modifications des fichiers suivis presents dans le repertoire de travail et la zone de staging.
- `gdstaged` Afficher les changements des fichiers dans la zone "staged".
- `gdcached` Afficher les changements entre l'index et HEAD (le dernier commit sur cette branche).
- `gdstat` Generer un diffstat.
- `glc` Afficher le journal des changements, les plus recents d'abord.
- `gld` Afficher le journal du jour recent.
- `gldc` Afficher la date du dernier commit au format ISO 8601 strict.
- `gldl` Afficher les logs avec les dates dans le fuseau horaire local.
- `glf` Afficher le journal des nouveaux commits apres fetch, avec stats, hors merges.
- `glfd` Afficher la date du commit le plus ancien au format ISO 8601 strict.
- `glfh` Visualisation de la topologie des branches.
- `glg` Afficher le journal sous forme de graphique.
- `glh` Afficher le journal de la derniere heure.
- `gll` Afficher le journal dans notre format prefere pour les indicateurs cles de performance.
- `glll` Afficher le journal dans notre format prefere pour les indicateurs cles de performance, avec des elements longs.
- `glm` Afficher le journal du mois recent.
- `glmy` Afficher le journal de mes commits par mon email utilisateur.
- `glw` Afficher le journal de la semaine recente.
- `gly` Afficher le journal de l'annee recente.
- `gclout` Nettoyer et annuler les changements et fichiers non suivis dans l'arborescence de travail.
- `gco` Changer de branche ou restaurer les fichiers de l'arborescence de travail.
- `gcb` Creer une nouvelle branche nommee <new_branch> a partir de <start_point>.
- `gcode` Supprimer toutes les branches locales qui ont ete fusionnees dans la branche principale locale.
- `gcom` Aligner la branche locale sur la branche main.
- `gpb` Publier la branche courante en la poussant vers le remote "origin" et definir le suivi upstream.
- `gpo` Pousser les changements locaux vers le depot en ligne.
- `gpt` Pousser les tags locaux.
- `gpoll` Pousser chacune de vos branches git locales vers le depot distant.
- `gpull` Recuperer depuis un autre depot ou une branche locale et integrer.
- `gpullm` Tirer les changements depuis la branche locale stockee origin/master et les fusionner dans la branche locale active.
- `gpullo` Tirer pour une seule branche.
- `gpush` Mettre a jour les refs distantes avec les objets associes.
- `gpusho` Faire un push pour une seule branche.
- `gpushr` Pour chaque branche distante, la pousser.
- `gunpub` Depublier la branche courante en supprimant la version distante de la branche courante.
- `gpcb` Pousser la branche courante.
- `gr` Gerer l'ensemble des depots suivis.
- `gra` Ajouter un remote nomme `name` pour le depot a l'URL `url`.
- `grall` Pousser toutes les branches vers tous les remotes.
- `grallo` Git remote all remotes sauf origin.
- `grao` Ajouter un nouveau remote 'origin' s'il n'existe pas.
- `grbk` Revenir en arriere vers la zone de staging.
- `grcl` Supprimer toutes les branches de suivi distantes obsoletes sous `name`.
- `grf` Afficher l'origine Git pour chaque sous-dossier immediat.
- `grfall` Recuperer tous les remotes Git pour un depot.
- `grp` Pousser tous les remotes.
- `grprint` Afficher l'URL du depot courant.
- `grs` Afficher des informations sur le remote `name`.
- `grso` Afficher ou reside origin.
- `gru` Recuperer les mises a jour pour un ensemble nomme de remotes dans le depot.
- `grv` Afficher les URLs des depots distants lors de la liste des connexions distantes.
- `grev` Annuler les changements de certains commits existants.
- `grevnc` Revert sans autocommit; utile quand vous annulez plusieurs commits a la suite.
- `gsm` Permet d'imbriquer des depots etrangers dans un sous-repertoire dedie de l'arborescence.
- `gsmi` Initialiser les sous-modules enregistres dans l'index.
- `gsma` Ajouter le depot donne comme sous-module au chemin donne pour le prochain changeset.
- `gsms` Synchroniser la configuration d'URL distante des sous-modules avec la valeur specifiee dans .gitmodules.
- `gsmu` Mettre a jour les sous-modules enregistres pour correspondre aux attentes du superprojet.
- `gsmui` Mise a jour des sous-modules avec initialisation.
- `gsmuir` Mise a jour des sous-modules avec initialisation et recursive.
- `gst` Afficher l'etat de l'arborescence de travail.
- `gsta` Stasher les changements.
- `gstrmu` Supprimer les fichiers non suivis dans un depot git.
- `gsts` Etat en format court plutot que complet.
- `gstsb` Etat en format court avec informations de branche et de suivi.
- `gt` Voir tous les tags.
- `gtg` Creer, lister, supprimer ou verifier un tag signe avec GPG.
- `gtl` Dernier tag de la branche courante.
- `gshow` Afficher divers types d'objets.
- `gshf` Trouver la branche parente la plus proche de la branche Git courante.
- `gshls` Afficher la liste des fichiers modifies par commit.
- `gshnp` Afficher brievement un objet Git.
- `gshwho` Afficher les contributeurs par nombre de commits, ordre decroissant.
- `grescl` Reset commit clean.
- `gresh` Reset commit hard.
- `gresp` Reset pristine.
- `gress` Reset commit.
- `gresu` Reset vers upstream.
- `gtp` Obtenir le nom du repertoire de niveau superieur.
- `grpa` Obtenir le nom de la branche courante.
- `gub` Obtenir le nom de la branche upstream.
- `grm` Supprimer des fichiers de l'arborescence de travail et de l'index.
- `grmc` Desindexer et supprimer des chemins uniquement de l'index.
- `grmd` Supprimer les fichiers qui ont ete supprimes.
- `grmd2` Supprimer les fichiers qui ont ete supprimes.
- `grmds` Supprimer .DS_Store du depot.
- `grmx` Supprimer tous les fichiers supprimes, y compris ceux dont le nom contient des caracteres avec espaces ou guillemets.
- `gblau` Afficher la contribution par ligne par auteur pour un depot GIT.
- `gconfdiff` Meilleur diff Git, delimite par mots et colore.
- `gconfl` Lister tous les parametres.
- `gconfr` Afficher l'origine distante depuis un depot local.
- `undopush` Annuler le dernier push.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
