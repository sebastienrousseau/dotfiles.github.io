---
title: "Alias Heroku : raccourcis shell pour le CLI Heroku"
description: "Accélérez vos workflows Heroku avec 200+ alias pour apps, bases de données, pipelines et déploiements."
lang: fr-FR
metaTitle: Alias Heroku | Dotfiles
permalink: /aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: alias heroku, raccourcis heroku cli, commandes shell heroku, dotfiles, déploiement paas, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Heroku | Dotfiles
  - name: twitter:description
    content: Accélérez vos workflows Heroku avec 200+ alias pour apps, bases de données, pipelines et déploiements.
  - name: og:title
    content: Alias Heroku | Dotfiles
  - name: og:description
    content: Accélérez vos workflows Heroku avec 200+ alias pour apps, bases de données, pipelines et déploiements.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Heroku

Raccourcis shell pour le CLI Heroku, définis dans `heroku.aliases.sh` et chargés automatiquement par chezmoi.

## Aperçu

Cette collection fournit plus de 200 alias pour la [CLI Heroku](https://devcenter.heroku.com/articles/heroku-cli), couvrant la gestion d’apps, les add-ons, bases de données, pipelines, conteneurs, et plus encore.

## Référence

### Commandes générales

| Alias | Description |
|-------|-------------|
| `hkk` | Raccourci de commande Heroku CLI |
| `hka` | Ajouter de nouveaux utilisateurs à l’app |
| `hkau` | Mettre à jour les collaborateurs d’une app d’équipe |
| `hkh` | Afficher l’aide Heroku |
| `hkj` | S’ajouter à une app d’équipe |
| `hkl` | Lister toutes les commandes |
| `hkla` | Lister qui a accès à une app |
| `hklg` | Afficher les logs récents |
| `hkn` | Afficher les notifications |
| `hko` | Lister les équipes dont vous êtes membre |
| `hkoo` | Ouvrir l’interface d’équipe dans le navigateur |
| `hkp` | Ouvrir un shell psql vers la base |
| `hkq` | Se retirer d’une app d’équipe |
| `hkr` | Retirer des utilisateurs d’une app d’équipe |
| `hkrg` | Lister les régions disponibles pour le déploiement |
| `hks` | Afficher l’état de la plateforme Heroku |
| `hkt` | Lister les équipes dont vous êtes membre |
| `hku` | Mettre à jour la CLI Heroku |
| `hkulk` | Déverrouiller une app pour permettre à un membre d’équipe de rejoindre |
| `hkw` | Indiquer dans quel plugin se trouve une commande |

### Add-ons

| Alias | Description |
|-------|-------------|
| `hkada` | Attacher une ressource add-on existante à une app |
| `hkadc` | Créer une nouvelle ressource add-on |
| `hkadd` | Détacher une ressource add-on existante d’une app |
| `hkaddoc` | Ouvrir la documentation Dev Center de l’add-on |
| `hkaddown` | Changer le plan d’un add-on |
| `hkadi` | Afficher les détails des ressources et attaches add-on |
| `hkadk` | Détruire définitivement une ressource add-on |
| `hkadl` | Lister vos add-ons et leurs attaches |
| `hkado` | Ouvrir le tableau de bord de l’add-on |
| `hkadp` | Lister les plans disponibles d’un add-on |
| `hkadr` | Renommer un add-on |
| `hkads` | Lister tous les services add-on disponibles |
| `hkadu` | Changer le plan d’un add-on |
| `hkadw` | Afficher le statut de provisionnement des add-ons |

### Apps

| Alias | Description |
|-------|-------------|
| `hkapc` | Créer une nouvelle app |
| `hkape` | Voir les erreurs de l’app |
| `hkapfav` | Lister les apps favorites |
| `hkapfava` | Mettre une app en favori |
| `hkapunfav` | Retirer une app des favoris |
| `hkapi` | Afficher les informations détaillées de l’app |
| `hkapj` | S’ajouter à une app d’équipe |
| `hkapk` | Détruire définitivement une app |
| `hkapl` | Lister vos apps |
| `hkaplk` | Empêcher les membres d’équipe de rejoindre une app |
| `hkapo` | Ouvrir l’app dans le navigateur |
| `hkapq` | Se retirer d’une app d’équipe |
| `hkapr` | Renommer une app |
| `hkaps` | Afficher la liste des stacks disponibles |
| `hkapss` | Définir la stack d’une app |
| `hkapt` | Transférer une app à un autre utilisateur ou équipe |
| `hkapulk` | Déverrouiller une app pour permettre à un membre d’équipe de rejoindre |

### Authentification

| Alias | Description |
|-------|-------------|
| `hk2fa` | Afficher l’utilisateur connecté |
| `hk2fad` | Désactiver la 2FA |
| `hk2fain` | Se connecter avec vos identifiants Heroku |
| `hk2faout` | Effacer la session locale et invalider la session API |
| `hk2fas` | Vérifier le statut 2FA |
| `hk2fat` | Afficher le token d’authentification CLI |

### Autorisations OAuth

| Alias | Description |
|-------|-------------|
| `hkauc` | Créer une autorisation OAuth |
| `hkaui` | Afficher une autorisation OAuth existante |
| `hkaul` | Lister les autorisations OAuth |
| `hkaur` | Révoquer une autorisation OAuth |
| `hkauro` | Mettre à jour un token d’autorisation OAuth |
| `hkauu` | Mettre à jour une autorisation OAuth |

### Buildpacks

| Alias | Description |
|-------|-------------|
| `hkbpac` | Afficher les instructions d’autocomplétion |
| `hkbpad` | Ajouter un buildpack à l’app |
| `hkbpcl` | Effacer tous les buildpacks de l’app |
| `hkbpi` | Obtenir des infos sur un buildpack |
| `hkbpl` | Afficher les buildpacks d’une app |
| `hkbpr` | Retirer un buildpack d’une app |
| `hkbps` | Rechercher des buildpacks |
| `hkbpv` | Lister les versions d’un buildpack |

### Certificats

| Alias | Description |
|-------|-------------|
| `hkca` | Afficher le statut ACM d’une app |
| `hkcad` | Ajouter un certificat SSL à une app |
| `hkcae` | Activer le statut ACM pour une app |
| `hkcak` | Désactiver l’ACM pour une app |
| `hkcar` | Actualiser l’ACM pour une app |
| `hkcc` | Afficher la chaîne complète d’un certificat |
| `hkcg` | Générer une clé et un CSR ou un certificat auto-signé |
| `hkci` | Afficher les infos d’un certificat SSL |
| `hkck` | Afficher la clé correcte pour un certificat donné |
| `hkcl` | Lister les certificats SSL d’une app |
| `hkcr` | Supprimer un certificat SSL d’une app |
| `hkcu` | Mettre à jour un certificat SSL d’une app |

### CI

| Alias | Description |
|-------|-------------|
| `hkcicg` | Obtenir une variable de config CI |
| `hkcics` | Définir des variables de config CI |
| `hkcicu` | Supprimer des variables de config CI |
| `hkcicv` | Afficher les variables de config CI |
| `hkcid` | Ouvrir une session de debug de test interactive |
| `hkcie` | Récupérer la sortie du dernier run |
| `hkcii` | Afficher le statut d’un run de test |
| `hkcil` | Afficher les derniers runs CI du pipeline |
| `hkcim` | Migrer app-ci.json vers app.json avec environments |
| `hkcio` | Ouvrir la version Dashboard de Heroku CI |
| `hkcir` | Lancer des tests dans le répertoire courant |
| `hkcir2` | Relancer les tests dans le répertoire courant |

### Clients OAuth

| Alias | Description |
|-------|-------------|
| `hkclc` | Créer un client OAuth |
| `hkcli` | Afficher les détails d’un client OAuth |
| `hkclk` | Supprimer un client par ID |
| `hkcll` | Lister vos clients OAuth |
| `hkcls` | Faire tourner le secret du client OAuth |
| `hkclu` | Mettre à jour un client OAuth |

### Variables de configuration

| Alias | Description |
|-------|-------------|
| `hkcfe` | Éditer interactivement les variables de config |
| `hkcfg` | Afficher une valeur de config d’app |
| `hkcfs` | Définir une ou plusieurs variables de config |
| `hkcfu` | Supprimer une ou plusieurs variables de config |
| `hkcfv` | Afficher les variables de config d’une app |

### Conteneurs

| Alias | Description |
|-------|-------------|
| `hkct` | Utiliser des conteneurs pour build et déploiement |
| `hkctin` | Se connecter au registre de conteneurs Heroku |
| `hkctout` | Se déconnecter du registre de conteneurs Heroku |
| `hkctpull` | Tirer une image du type de process d’une app |
| `hkctpush` | Builder puis pousser des images Docker pour déployer l’app |
| `hkctrelease` | Publier des images Docker précédemment poussées |
| `hkctrm` | Supprimer le type de process de l’app |
| `hkctrun` | Builder puis exécuter l’image Docker en local |

### Domaines

| Alias | Description |
|-------|-------------|
| `hkdo` | Lister les domaines d’une app |
| `hkdoa` | Ajouter un domaine à une app |
| `hkdoc` | Supprimer tous les domaines d’une app |
| `hkdoi` | Afficher les infos détaillées d’un domaine d’app |
| `hkdor` | Supprimer un domaine d’une app |
| `hkdou` | Mettre à jour un domaine avec un autre certificat SSL |
| `hkdow` | Attendre l’activation d’un domaine |

### Drains

| Alias | Description |
|-------|-------------|
| `hkdr` | Afficher les drains de logs d’une app |
| `hkdra` | Ajouter un drain de logs à une app |
| `hkdrr` | Supprimer un drain de logs d’une app |

### Dynos

| Alias | Description |
|-------|-------------|
| `hkdyk` | Arrêter un dyno d’app |
| `hkdyrz` | Gérer les tailles de dyno |
| `hkdyrs` | Redémarrer les dynos d’app |
| `hkdysc` | Ajuster le nombre de dynos |
| `hkdyst` | Arrêter un dyno d’app |

### Fonctionnalités

| Alias | Description |
|-------|-------------|
| `hkfeat` | Lister les fonctionnalités d’app |
| `hkfeatd` | Désactiver une fonctionnalité d’app |
| `hkfeate` | Activer une fonctionnalité d’app |
| `hkfeati` | Afficher des informations sur une fonctionnalité |

### Git

| Alias | Description |
|-------|-------------|
| `hkgitc` | Cloner une app Heroku en local dans DIRECTORY (par défaut le nom) |
| `hkgitr` | Ajouter un remote git au dépôt d’une app |

### Clés

| Alias | Description |
|-------|-------------|
| `hkka` | Ajouter une clé SSH pour un utilisateur |
| `hkkcl` | Supprimer toutes les clés SSH de l’utilisateur courant |
| `hkkr` | Supprimer une clé SSH de l’utilisateur |

### Labs

| Alias | Description |
|-------|-------------|
| `hklab` | Lister les fonctionnalités expérimentales |
| `hklabd` | Désactiver une fonctionnalité expérimentale |
| `hklabe` | Activer une fonctionnalité expérimentale |
| `hklabi` | Afficher les infos d’une fonctionnalité |

### Local

| Alias | Description |
|-------|-------------|
| `hkloc` | Exécuter une app Heroku en local |
| `hklocr` | Exécuter une commande ponctuelle |
| `hklocv` | Afficher la version node-foreman |
| `hkloclk` | Empêcher les membres d’équipe de rejoindre une app |

### Maintenance

| Alias | Description |
|-------|-------------|
| `hkmt` | Afficher le statut de maintenance d’une app |
| `hkmtoff` | Sortir l’app du mode maintenance |
| `hkmton` | Mettre l’app en mode maintenance |

### Membres

| Alias | Description |
|-------|-------------|
| `hkmb` | Lister les membres d’une équipe |
| `hkmba` | Ajouter un utilisateur à une équipe |
| `hkmbr` | Supprimer un utilisateur d’une équipe |
| `hkmbs` | Définir le rôle d’un membre dans une équipe |

### PostgreSQL

| Alias | Description |
|-------|-------------|
| `hkpg` | Afficher les infos de la base |
| `hkpgb` | Afficher le bloat des tables/index (par ordre de gaspillage) |
| `hkpgbk` | Lister les sauvegardes |
| `hkpgbkcl` | Annuler une sauvegarde/restauration en cours |
| `hkpgbkc` | Capturer une nouvelle sauvegarde |
| `hkpgbkdl` | Supprimer une sauvegarde |
| `hkpgbkdw` | Télécharger une sauvegarde |
| `hkpgbki` | Infos sur une sauvegarde |
| `hkpgbkr` | Restaurer une sauvegarde (par défaut la dernière) |
| `hkpgbks` | Planifier des sauvegardes quotidiennes |
| `hkpgbksh` | Lister la planification des sauvegardes |
| `hkpgbkurl` | Obtenir l’URL publique d’une sauvegarde |
| `hkpgbkk` | Arrêter les sauvegardes quotidiennes |
| `hkpgblk` | Afficher les requêtes tenant des verrous |
| `hkpgc` | Copier toutes les données d’une base source vers une cible |
| `hkpgcpa` | Attacher une base avec pooling de connexions |
| `hkpgcr` | Infos sur les identifiants de la base |
| `hkpgcrc` | Créer un identifiant dans la base |
| `hkpgcrd` | Détruire un identifiant dans la base |
| `hkpgcrr` | Faire tourner les identifiants de la base |
| `hkpgcrrd` | Réparer les permissions des identifiants par défaut |
| `hkpgcrurl` | Infos sur un identifiant de base |
| `hkpgdg` | Exécuter ou voir un rapport de diagnostics |
| `hkpgi` | Afficher les infos de la base |
| `hkpgk` | Tuer une requête |
| `hkpgka` | Terminer toutes les connexions |
| `hkpglks` | Afficher les requêtes avec verrous actifs |
| `hkpglnk` | Lister les bases et liens |
| `hkpglnkc` | Créer un lien entre data stores |
| `hkpglnkd` | Détruire un lien entre data stores |
| `hkpgmt` | Afficher le statut de maintenance |
| `hkpgmtr` | Démarrer la maintenance |
| `hkpgmtw` | Définir la fenêtre de maintenance hebdo |
| `hkpgo` | Afficher les 10 requêtes les plus longues |
| `hkpgp` | Définir DATABASE comme DATABASE_URL |
| `hkpgps` | Voir les requêtes actives et leur durée |
| `hkpgpsql` | Ouvrir un shell psql vers la base |
| `hkpgpull` | Tirer une base Heroku vers local/distant |
| `hkpgpush` | Pousser local/distant vers Heroku |
| `hkpgreset` | Supprimer toutes les données de DATABASE |
| `hkpgset` | Afficher les paramètres actuels de la base |
| `hkpgsetllw` | Journaliser si une session attend un verrou trop longtemps |
| `hkpgsetlmds` | Journaliser la durée des requêtes longues |
| `hkpgsetlgs` | Contrôler les requêtes SQL journalisées |
| `hkpguf` | Stopper le suivi d’une réplica pour la rendre inscriptible |
| `hkpgup` | Unfollow et mettre à jour vers la dernière version stable |
| `hkpgvs` | Afficher les lignes mortes et l’état de vacuum auto |
| `hkpgww` | Attendre la disponibilité de la base |

### Pipelines

| Alias | Description |
|-------|-------------|
| `hkpipe` | Lister les pipelines accessibles |
| `hkpipea` | Ajouter cette app à un pipeline |
| `hkpipec` | Créer un pipeline |
| `hkpipect` | Connecter un repo GitHub à un pipeline existant |
| `hkpipediff` | Comparer la release la plus récente avec l’app downstream |
| `hkpipei` | Lister les apps d’un pipeline |
| `hkpipek` | Détruire un pipeline |
| `hkpipeo` | Ouvrir un pipeline dans le dashboard |
| `hkpipep` | Promouvoir la dernière release vers l’aval |
| `hkpiper` | Retirer cette app de son pipeline |
| `hkpipern` | Renommer un pipeline |
| `hkpipes` | Amorcer un pipeline avec config standard |
| `hkpipett` | Transférer la propriété d’un pipeline |
| `hkpipeu` | Mettre à jour l’étape d’une app dans un pipeline |

### Plugins

| Alias | Description |
|-------|-------------|
| `hkplugs` | Lister les plugins installés |
| `hkplugsi` | Installer un plugin dans la CLI |
| `hkplugslk` | Lier un plugin à la CLI pour le développement |
| `hkplugsui` | Supprimer un plugin de la CLI |
| `hkplugsu` | Mettre à jour les plugins installés |

### Process

| Alias | Description |
|-------|-------------|
| `hkpsad` | Désactiver l’autoscaling des web dynos |
| `hkps` | Lister les dynos d’une app |
| `hkpsae` | Activer l’autoscaling des web dynos |
| `hkpsc` | Copier un fichier d’un dyno vers le système local |
| `hkpse` | Créer une session SSH vers un dyno |
| `hkpsf` | Forwarder le trafic d’un port local vers un dyno |
| `hkpsk` | Arrêter un dyno d’app |
| `hkpsr` | Redémarrer les dynos d’app |
| `hkpsrs` | Gérer les tailles de dyno |
| `hkpss` | Arrêter un dyno d’app |
| `hkpssc` | Ajuster le nombre de dynos |
| `hkpssck` | Lancer un proxy SOCKS vers un dyno |
| `hkpst` | Gérer les tailles de dyno |
| `hkpsw` | Attendre que tous les dynos soient à jour après release |

### Redis

| Alias | Description |
|-------|-------------|
| `hkred` | Obtenir des infos Redis |
| `hkredcli` | Ouvrir un prompt Redis |
| `hkredcr` | Afficher les infos d’identifiants |
| `hkredi` | Obtenir des infos Redis |
| `hkredkn` | Définir la configuration des notifications keyspace |
| `hkredmm` | Définir la politique d’éviction des clés |
| `hkredmt` | Gérer les fenêtres de maintenance |
| `hkredp` | Définir DATABASE comme REDIS_URL |
| `hkredsr` | Réinitialiser les statistiques RESETSTAT |
| `hkredt` | Définir le délai avant arrêt des connexions inactives |
| `hkredw` | Attendre la disponibilité de Redis |

### Releases

| Alias | Description |
|-------|-------------|
| `hkrel` | Afficher les releases d’une app |
| `hkreli` | Voir les détails d’une release |
| `hkrelo` | Voir la sortie de la commande release |
| `hkrelr` | Revenir à une release précédente |

### Review Apps

| Alias | Description |
|-------|-------------|
| `hkrvae` | Activer les review apps et/ou paramètres |
| `hkrvad` | Désactiver les review apps et/ou paramètres |

### Run

| Alias | Description |
|-------|-------------|
| `hkrun` | Exécuter un processus ponctuel dans un dyno |
| `hkrund` | Exécuter un dyno détaché avec logs |

### Sessions

| Alias | Description |
|-------|-------------|
| `hksessions` | Lister vos sessions OAuth |
| `hksessionsd` | Supprimer une session OAuth par ID |

### Spaces

| Alias | Description |
|-------|-------------|
| `hksp` | Lister les spaces disponibles |
| `hkspc` | Créer un espace |
| `hkspd` | Détruire un espace |
| `hkspi` | Afficher les infos d’un space |
| `hksppi` | Afficher les infos pour initier un peering |
| `hkspp` | Lister les connexions de peering |
| `hksppa` | Accepter une demande de peering |
| `hksppd` | Détruire une connexion de peering active |
| `hkspps` | Lister les dynos d’un space |
| `hkspr` | Renommer un space |
| `hksptop` | Afficher la topologie d’un space |
| `hkspt` | Transférer un space à une autre équipe |
| `hkspconf` | Afficher la configuration VPN |
| `hkspvc` | Créer un VPN |
| `hkspvcs` | Lister les connexions VPN |
| `hkspvk` | Détruire un VPN dans un space privé |
| `hkspvi` | Afficher les infos VPN |
| `hkspvu` | Mettre à jour le VPN |
| `hkspvw` | Attendre la création du VPN |
| `hkspw` | Attendre la création du space |

### Webhooks

| Alias | Description |
|-------|-------------|
| `hkwh` | Lister les webhooks d’une app |
| `hkwha` | Ajouter un webhook à une app |
| `hkwhdv` | Lister les livraisons de webhooks |
| `hkwhdvi` | Infos pour un événement webhook |
| `hkwhev` | Lister les événements webhook |
| `hkwhevi` | Infos pour un événement webhook |
| `hkwhi` | Infos pour un webhook |
| `hkwhr` | Supprimer un webhook d’une app |
| `hkwhu` | Mettre à jour un webhook |
