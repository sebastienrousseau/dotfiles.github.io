---
title: "Alias Docker : simplifiez votre workflow conteneurs"
description: "Alias Docker complets pour conteneurs, images, volumes, réseaux, Compose et Swarm. Gagnez en productivité."
lang: fr-FR
metaTitle: "Alias Docker | Dotfiles"
permalink: /aliases/docker/
sidebar: true
meta:
  - name: keywords
    content: "alias docker, raccourcis docker, commandes conteneur, alias docker compose, alias docker swarm, dotfiles"
---

# Alias Docker

Simplifiez votre workflow conteneurs avec des raccourcis intuitifs pour Docker, Compose et Swarm.

![Dotfiles banner][banner]

## Aperçu

Ces alias sont définis dans `docker.aliases.sh` et chargés automatiquement par chezmoi. Ils fournissent un ensemble complet de raccourcis pour le développement Docker : conteneurs, images, volumes, réseaux, Docker Compose et Docker Swarm.

## Référence

### Commandes de base

| Alias | Description |
|-------|-------------|
| `dk` | Raccourci Docker |
| `dkv` | Afficher la version Docker |
| `dki` | Afficher les informations système |
| `dkl` | Se connecter au registre Docker |
| `dklo` | Se déconnecter du registre Docker |

### Opérations sur les conteneurs

| Alias | Description |
|-------|-------------|
| `dkps` | Lister les conteneurs en cours |
| `dkpsa` | Lister tous les conteneurs |
| `dkr` | Lancer une commande dans un nouveau conteneur |
| `dkri` | Lancer un conteneur en mode interactif |
| `dkrd` | Lancer un conteneur en arrière-plan |
| `dks` | Démarrer un conteneur |
| `dkst` | Arrêter un conteneur |
| `dkrs` | Redémarrer un conteneur |
| `dkp` | Mettre en pause un conteneur |
| `dkup` | Reprendre un conteneur |
| `dkrm` | Supprimer un conteneur |
| `dkrma` | Supprimer tous les conteneurs |
| `dkrmf` | Forcer la suppression d’un conteneur |

### Inspection des conteneurs

| Alias | Description |
|-------|-------------|
| `dkin` | Inspecter un conteneur |
| `dkl` | Afficher les logs d’un conteneur |
| `dklf` | Suivre les logs d’un conteneur |
| `dkt` | Afficher les processus en cours dans le conteneur |
| `dkst` | Afficher l’usage des ressources du conteneur |
| `dkdf` | Afficher les changements du système de fichiers du conteneur |
| `dkpl` | Tirer une image depuis le registre |
| `dkex` | Exécuter une commande dans un conteneur |
| `dkeit` | Exécuter une commande interactive |

### Images

| Alias | Description |
|-------|-------------|
| `dki` | Lister les images |
| `dkia` | Lister toutes les images |
| `dkb` | Construire une image |
| `dkbt` | Construire et taguer une image |
| `dkpu` | Pousser une image vers le registre |
| `dkrmi` | Supprimer une image |
| `dkh` | Afficher l’historique d’une image |
| `dksv` | Sauvegarder une image dans une archive tar |
| `dkld` | Charger une image depuis une archive tar |
| `dkprune` | Supprimer les données inutilisées |
| `dkprunea` | Supprimer toutes les données inutilisées |
| `dkrmi_dangling` | Supprimer les images orphelines |

### Volumes

| Alias | Description |
|-------|-------------|
| `dkv` | Raccourci volumes |
| `dkvls` | Lister les volumes |
| `dkvc` | Créer un volume |
| `dkvi` | Inspecter un volume |
| `dkvrm` | Supprimer un volume |
| `dkvp` | Supprimer les volumes inutilisés |

### Réseaux

| Alias | Description |
|-------|-------------|
| `dkn` | Raccourci réseaux |
| `dknls` | Lister les réseaux |
| `dknc` | Créer un réseau |
| `dkni` | Inspecter un réseau |
| `dknrm` | Supprimer un réseau |
| `dknp` | Supprimer les réseaux inutilisés |
| `dkncon` | Connecter un conteneur au réseau |
| `dkndis` | Déconnecter un conteneur du réseau |

### Système

| Alias | Description |
|-------|-------------|
| `dks` | Raccourci système |
| `dksdf` | Afficher l’utilisation disque Docker |
| `dksev` | Récupérer les événements Docker en temps réel |
| `dksi` | Afficher les informations système |
| `dksp` | Supprimer les données inutilisées |
| `dkspa` | Supprimer toutes les données inutilisées |
| `dkcon` | Gestion des contextes |

### Divers

| Alias | Description |
|-------|-------------|
| `dkcp` | Copier des fichiers entre conteneur et système local |
| `dkw` | Attendre l’arrêt d’un conteneur |
| `dkk` | Tuer un conteneur |
| `dkatt` | Attacher à un conteneur |
| `dkd` | Inspecter les changements du système de fichiers |
| `dkcom` | Créer une image depuis un conteneur |
| `dktag` | Taguer une image |
| `dkexp` | Exporter le système de fichiers d’un conteneur |
| `dkimp` | Importer un système de fichiers de conteneur |
| `dkscan` | Scanner une image pour des vulnérabilités |

### Docker Compose

| Alias | Description |
|-------|-------------|
| `dc` | Raccourci Docker Compose |
| `dcu` | Créer et démarrer les conteneurs |
| `dcud` | Créer et démarrer les conteneurs en arrière-plan |
| `dcd` | Arrêter et supprimer les conteneurs |
| `dcdv` | Arrêter et supprimer les conteneurs et volumes |
| `dcr` | Redémarrer les services |
| `dcs` | Arrêter les services |
| `dcsta` | Démarrer les services |
| `dcp` | Mettre en pause les services |
| `dcup` | Reprendre les services |
| `dcps` | Lister les conteneurs |
| `dcl` | Voir les logs |
| `dclf` | Suivre les logs |
| `dcex` | Exécuter une commande dans un conteneur |
| `dcb` | Construire les services |
| `dcpull` | Télécharger les images de service |
| `dcpush` | Pousser les images de service |
| `dcrm` | Supprimer les conteneurs arrêtés |
| `dcrun` | Lancer une commande ponctuelle |
| `dci` | Lister les images |
| `dck` | Tuer les conteneurs |
| `dccfg` | Valider et afficher la config Compose |
| `dcev` | Recevoir les événements des conteneurs |
| `dctop` | Afficher les processus en cours |
| `dcv` | Afficher la version Docker Compose |

### Gestion Swarm

| Alias | Description |
|-------|-------------|
| `dksw` | Raccourci Swarm |
| `dkswi` | Initialiser Docker Swarm |
| `dkswj` | Rejoindre Docker Swarm |
| `dkswjt` | Gérer les jetons d’adhésion |
| `dkswl` | Quitter le Swarm |
| `dkswu` | Mettre à jour le Swarm |
| `dkswunl` | Déverrouiller le Swarm |
| `dkswunk` | Gérer les clés de déverrouillage |

### Services

| Alias | Description |
|-------|-------------|
| `dksrv` | Raccourci services |
| `dksrvls` | Lister les services |
| `dksrvc` | Créer un service |
| `dksrvi` | Inspecter un service |
| `dksrvps` | Lister les tâches d’un service |
| `dksrvl` | Voir les logs d’un service |
| `dksrvlf` | Suivre les logs d’un service |
| `dksrvrm` | Supprimer un service |
| `dksrvsc` | Mettre à l’échelle un service |
| `dksrvu` | Mettre à jour un service |
| `dksrvrl` | Revenir en arrière sur un service |

### Stacks

| Alias | Description |
|-------|-------------|
| `dkstk` | Raccourci stacks |
| `dkstkls` | Lister les stacks |
| `dkstkd` | Déployer une stack |
| `dkstkps` | Lister les tâches d’une stack |
| `dkstksrv` | Lister les services d’une stack |
| `dkstkrm` | Supprimer une stack |

### Nœuds

| Alias | Description |
|-------|-------------|
| `dkn` | Raccourci nœuds |
| `dknls` | Lister les nœuds |
| `dkni` | Inspecter un nœud |
| `dknp` | Promouvoir un nœud en manager |
| `dknd` | Rétrograder un nœud en worker |
| `dknrm` | Supprimer un nœud |
| `dknu` | Mettre à jour un nœud |
| `dknps` | Lister les tâches d’un nœud |

## Workflows courants

### Développement de conteneur

```bash
# Démarrer un conteneur de développement
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

### Développement Docker Compose

```bash
# Démarrer les services, reconstruire si nécessaire, en arrière-plan
dcb && dcud
```

### Nettoyage

```bash
# Supprimer les conteneurs arrêtés, réseaux inutilisés, et images orphelines
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

### Déploiement sur Swarm

```bash
# Déployer ou mettre à jour une stack depuis un fichier compose
dkstkd -c docker-compose.yml my-stack
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
