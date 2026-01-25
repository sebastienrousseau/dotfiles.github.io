---
description: Alias de shell pour créer des raccourcis de commandes fréquemment utilisées. Gagnez du temps et réduisez la frappe.
lang: fr-FR
metaTitle: Alias - Dotfiles (FR)
permalink: /aliases/

meta:
  - name: keywords
    content: alias, shell, bash, zsh, raccourcis, commandes, dotfiles, chezmoi, productivité, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de shell pour créer des raccourcis de commandes fréquemment utilisées. Gagnez du temps et réduisez la frappe.
  - name: twitter:title
    content: Alias - Dotfiles
  - name: og:title
    content: Alias - Dotfiles
  - name: og:description
    content: Alias de shell pour créer des raccourcis de commandes fréquemment utilisées. Gagnez du temps et réduisez la frappe.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias

Alias modulaires gérés par **Chezmoi**. Tapez moins, faites plus.

## Découvrir

Les alias sont organisés en petits fichiers ciblés — un par outil ou workflow. Lors de `chezmoi apply`, tous les fichiers d’alias sont agrégés dans `~/.config/shell/aliases.sh` puis chargés par votre shell.

## Premiers pas

### Ajouter un alias

1. Créez un nouveau fichier (par exemple `monoutil/monoutil.aliases.sh`)
2. Définissez vos alias :
   ```bash
   alias moncmd="echo 'Hello World'"
   ```
3. Appliquez les changements :
   ```bash
   chezmoi apply
   ```

## Référence

Parcourez les alias par catégorie :

<!-- markdownlint-disable MD013-->

| Catégorie | Description |
| :--- | :--- |
| [IA](ai/) | Raccourcis pour assistants IA et outils LLM |
| [Archives](archives/) | Compresser et extraire des fichiers |
| [CD](cd/) | Naviguer dans le système de fichiers |
| [Chmod](chmod/) | Modifier les permissions de fichiers |
| [Clear](clear/) | Effacer l’écran du terminal |
| [Compliance](compliance/) | Outils SOC2 et confidentialité |
| [Configuration](configuration/) | Gérer les dotfiles et la config du shell |
| [Default](default/) | Alias shell par défaut |
| [Diagnostics](diagnostics/) | Auto-réparation et contrôles de santé |
| [Dig](dig/) | Interroger les serveurs DNS |
| [Disk Usage](disk-usage/) | Informations d’utilisation du disque |
| [Docker](docker/) | Gestion des conteneurs |
| [Editor](editor/) | Configurer les éditeurs de texte |
| [Find](find/) | Rechercher fichiers et dossiers |
| [Fonts](fonts/) | Gestion du cache des polices |
| [GCloud](gcloud/) | Outils Google Cloud SDK |
| [Git](git/) | Gestion de versions Git |
| [GNU](gnu/) | Utilitaires GNU |
| [Go](go/) | Outils du langage Go |
| [Heroku](heroku/) | CLI Heroku |
| [Installer](installer/) | Bootstrap et déploiement |
| [Interactive](interactive/) | Comportement interactif du shell |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Outils de scan de licences |
| [macOS](macOS/) | Réglages spécifiques macOS |
| [Make](make/) | Utilitaires GNU Make |
| [Mkdir](mkdir/) | Créer des répertoires |
| [Modern](modern/) | Remplacements d’outils basés sur Rust |
| [NPM](npm/) | Gestionnaire de paquets Node.js |
| [Permission](permission/) | Permissions de fichiers |
| [PNPM](pnpm/) | Gestionnaire de paquets PNPM |
| [PS](ps/) | Statut des processus |
| [Python](python/) | Utilitaires Python |
| [Rsync](rsync/) | Transfert de fichiers efficace |
| [Rust](rust/) | Outils Rust |
| [Security](security/) | Immutabilité et signature |
| [Subversion](subversion/) | Contrôle de versions SVN |
| [Sudo](sudo/) | Opérations superutilisateur |
| [Terraform](terraform/) | Infrastructure as Code |
| [Tmux](tmux/) | Multiplexeur de terminal |
| [Update](update/) | Mettre à jour les dotfiles |
| [UUID](uuid/) | Générer des UUID |
| [Wget](wget/) | Téléchargeur en ligne de commande |
| [Yarn](yarn/) | Gestionnaire de paquets Yarn |

<!-- markdownlint-enable MD013-->
