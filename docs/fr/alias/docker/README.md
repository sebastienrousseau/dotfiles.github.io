---
description: alias docker pour Dotfiles
lang: fr-FR
metaTitle: Alias Docker - Dotfiles (FR)
permalink: /aliases/docker/
---

# Alias Docker

Gérer les alias Docker. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `docker.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble complet d'alias pour le développement Docker
avec les commandes `docker`, `docker-compose` et Docker Swarm.

#### Commandes de base

- `dk` - Raccourci Docker
- `dkv` - Afficher la version de Docker
- `dki` - Afficher les informations système
- `dkl` - Se connecter au registre Docker
- `dklo` - Se déconnecter du registre Docker

#### Opérations sur les conteneurs

- `dkps` - Lister les conteneurs en cours d'exécution
- `dkpsa` - Lister tous les conteneurs
- `dkr` - Exécuter une commande dans un nouveau conteneur
- `dkri` - Exécuter un conteneur interactif
- `dkrd` - Exécuter un conteneur en arrière-plan
- `dks` - Démarrer un conteneur
- `dkst` - Arrêter un conteneur
- `dkrs` - Redémarrer un conteneur
- `dkp` - Mettre un conteneur en pause
- `dkup` - Reprendre un conteneur
- `dkrm` - Supprimer un conteneur
- `dkrma` - Supprimer tous les conteneurs
- `dkrmf` - Forcer la suppression d'un conteneur

#### Inspection des conteneurs

- `dkin` - Inspecter un conteneur
- `dkl` - Afficher les logs d'un conteneur
- `dklf` - Suivre les logs d'un conteneur
- `dkt` - Afficher les processus en cours dans un conteneur
- `dkst` - Afficher l'utilisation des ressources d'un conteneur
- `dkdf` - Afficher les changements du système de fichiers d'un conteneur
- `dkpl` - Tirer une image depuis le registre
- `dkex` - Exécuter une commande dans un conteneur
- `dkeit` - Exécuter une commande interactive

#### Images

- `dki` - Lister les images
- `dkia` - Lister toutes les images
- `dkb` - Construire une image
- `dkbt` - Construire et taguer une image
- `dkpu` - Pousser une image vers le registre
- `dkrmi` - Supprimer une image
- `dkh` - Afficher l'historique d'une image
- `dksv` - Sauvegarder une image dans une archive tar
- `dkld` - Charger une image depuis une archive tar
- `dkprune` - Supprimer les données inutilisées
- `dkprunea` - Supprimer toutes les données inutilisées
- `dkrmi_dangling` - Supprimer les images orphelines

#### Volumes

- `dkv` - Raccourci volumes
- `dkvls` - Lister les volumes
- `dkvc` - Créer un volume
- `dkvi` - Inspecter un volume
- `dkvrm` - Supprimer un volume
- `dkvp` - Supprimer les volumes inutilisés

#### Réseaux

- `dkn` - Raccourci réseaux
- `dknls` - Lister les réseaux
- `dknc` - Créer un réseau
- `dkni` - Inspecter un réseau
- `dknrm` - Supprimer un réseau
- `dknp` - Supprimer les réseaux inutilisés
- `dkncon` - Connecter un conteneur à un réseau
- `dkndis` - Déconnecter un conteneur d'un réseau

#### Système

- `dks` - Raccourci système
- `dksdf` - Afficher l'utilisation disque Docker
- `dksev` - Obtenir les événements en temps réel de Docker
- `dksi` - Afficher les informations système
- `dksp` - Supprimer les données inutilisées
- `dkspa` - Supprimer toutes les données inutilisées
- `dkcon` - Gestion des contextes

#### Divers

- `dkcp` - Copier des fichiers entre un conteneur et le système local
- `dkw` - Bloquer jusqu'à l'arrêt d'un conteneur
- `dkk` - Tuer un conteneur
- `dkatt` - Attacher à un conteneur
- `dkd` - Inspecter les changements du système de fichiers d'un conteneur
- `dkcom` - Créer une image depuis un conteneur
- `dktag` - Taguer une image
- `dkexp` - Exporter le système de fichiers d'un conteneur
- `dkimp` - Importer un système de fichiers de conteneur
- `dkscan` - Scanner une image pour les vulnérabilités
- `dc` - Raccourci Docker Compose
- `dcu` - Créer et démarrer des conteneurs
- `dcud` - Créer et démarrer des conteneurs en arrière-plan
- `dcd` - Arrêter et supprimer des conteneurs
- `dcdv` - Arrêter et supprimer les conteneurs et volumes
- `dcr` - Redémarrer des services
- `dcs` - Arrêter des services
- `dcsta` - Démarrer des services
- `dcp` - Mettre en pause des services
- `dcup` - Reprendre des services
- `dcps` - Lister les conteneurs
- `dcl` - Voir les logs
- `dclf` - Suivre les logs
- `dcex` - Exécuter une commande dans un conteneur
- `dcb` - Construire des services
- `dcpull` - Tirer les images des services
- `dcpush` - Pousser les images des services
- `dcrm` - Supprimer les conteneurs arrêtés
- `dcrun` - Exécuter une commande ponctuelle
- `dci` - Lister les images
- `dck` - Tuer les conteneurs
- `dccfg` - Valider et afficher la configuration compose
- `dcev` - Recevoir les événements des conteneurs
- `dctop` - Afficher les processus en cours
- `dcv` - Afficher la version Docker Compose

#### Gestion du Swarm

- `dksw` - Raccourci Swarm
- `dkswi` - Initialiser Docker Swarm
- `dkswj` - Rejoindre Docker Swarm
- `dkswjt` - Gérer les jetons de jonction
- `dkswl` - Quitter le Swarm
- `dkswu` - Mettre à jour le Swarm
- `dkswunl` - Déverrouiller le Swarm
- `dkswunk` - Gérer les clés de déverrouillage

#### Services

- `dksrv` - Raccourci services
- `dksrvls` - Lister les services
- `dksrvc` - Créer un service
- `dksrvi` - Inspecter un service
- `dksrvps` - Lister les tâches d'un service
- `dksrvl` - Voir les logs d'un service
- `dksrvlf` - Suivre les logs d'un service
- `dksrvrm` - Supprimer un service
- `dksrvsc` - Mettre à l'échelle un service
- `dksrvu` - Mettre à jour un service
- `dksrvrl` - Annuler un service

#### Stacks

- `dkstk` - Raccourci stacks
- `dkstkls` - Lister les stacks
- `dkstkd` - Déployer une stack
- `dkstkps` - Lister les tâches d'une stack
- `dkstksrv` - Lister les services dans une stack
- `dkstkrm` - Supprimer une stack

#### Nœuds

- `dkn` - Raccourci nœuds
- `dknls` - Lister les nœuds
- `dkni` - Inspecter un nœud
- `dknp` - Promouvoir un nœud en manager
- `dknd` - Rétrograder un nœud en worker
- `dknrm` - Supprimer un nœud
- `dknu` - Mettre à jour un nœud
- `dknps` - Lister les tâches sur un nœud

### Flux de travail courants

#### Développement avec conteneur

```bash
# Démarrer un conteneur de développement
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

#### Développement Docker Compose

```bash
# Démarrer les services, reconstruire si nécessaire, en arrière-plan
dcb && dcud
```

#### Nettoyage

```bash
# Supprimer tous les conteneurs arrêtés, réseaux inutilisés et images orphelines
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

#### Déploiement Swarm

```bash
# Déployer ou mettre à jour une stack depuis un fichier compose
dkstkd -c docker-compose.yml my-stack
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
