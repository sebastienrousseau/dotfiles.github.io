---
title: "Alias par défaut : raccourcis essentiels du shell"
description: "Alias essentiels pour la navigation, le système et les tâches quotidiennes. Simplifiez votre workflow terminal."
lang: fr-FR
metaTitle: "Alias par défaut | Dotfiles"
permalink: /aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "alias par défaut, alias shell, raccourcis terminal, dotfiles, alias bash"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias par défaut | Dotfiles
  - name: twitter:description
    content: Alias essentiels pour la navigation, le système et les tâches quotidiennes.
  - name: og:title
    content: Alias par défaut | Dotfiles
  - name: og:description
    content: Alias essentiels pour la navigation, le système et les tâches quotidiennes.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias par défaut

Raccourcis essentiels pour les tâches quotidiennes du terminal.

![Dotfiles banner][banner]

## Aperçu

Les alias par défaut fournissent des raccourcis universels qui simplifient les opérations courantes. Ils sont définis dans `default.aliases.sh` et chargés automatiquement par chezmoi pour tous les shells pris en charge.

Ces raccourcis couvrent les utilitaires généraux, la sortie, les diagnostics réseau, la supervision système et la navigation.

## Référence

### Général

| Alias | Commande | Description |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Afficher la date et l’heure actuelles |
| `p` | `pwd` | Afficher le répertoire courant |
| `path` | `echo ${PATH//:/\\n}` | Afficher la variable PATH ligne par ligne |
| `r` | `reload` | Recharger le shell |
| `t` | `tail -f` | Suivre un fichier en temps réel |
| `wk` | `date +%V` | Afficher le numéro de semaine |

### Sortie et arrêt

| Alias | Commande | Description |
|-------|---------|-------------|
| `q` | `exit` | Quitter le shell |
| `quit` | `exit` | Quitter le shell |
| `bye` | `exit` | Quitter le shell |
| `:q` | `exit` | Quitter le shell (style vim) |
| `halt` | `sudo /sbin/halt` | Arrêter le système |
| `poweroff` | `sudo /sbin/shutdown` | Éteindre le système |
| `reboot` | `sudo /sbin/reboot` | Redémarrer le système |

### Historique

| Alias | Commande | Description |
|-------|---------|-------------|
| `h` | `history` | Voir l’historique des commandes |
| `history` | `fc -il 1` | Historique avec timestamps ISO 8601 |

### Réseau

| Alias | Commande | Description |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configurer les interfaces réseau |
| `ipinfo` | `ipconfig getpacket en0` | Paramètres réseau pour en0 |
| `nls` | `sudo lsof -i -P | grep LISTEN` | Lister les écouteurs réseau |
| `op` | `sudo lsof -i -P` | Lister les ports ouverts |
| `ping` | `ping -c 5` | Ping avec limite de 5 paquets |
| `ports` | `netstat -tulan` | Lister tous les ports en écoute |

### Supervision système

| Alias | Commande | Description |
|-------|---------|-------------|
| `top` | `sudo btop` | Moniteur de processus interactif |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Effacer les logs ASL |

### Utilitaires

| Alias | Commande | Description |
|-------|---------|-------------|
| `ctf` | `ls -1 | wc -l` | Compter les fichiers du répertoire |
| `qfind` | `find . -name` | Recherche rapide de fichiers |
| `reload` | `exec $SHELL -l` | Recharger le shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Météo actuelle |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
