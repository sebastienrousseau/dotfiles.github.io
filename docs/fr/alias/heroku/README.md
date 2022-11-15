---
description: Les alias Heroku sont des enveloppes autour de la CLI Heroku. Heroku est une plateforme de cloud computing qui permet de déployer des applications web.
lang: fr-FR
metaTitle: Les alias Heroku - Dotfiles (FR)
permalink: /aliases/heroku/

meta:
  - name: keywords
    content: aliases, bash, heroku, cli, command line, configuration, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: Les alias Heroku sont des enveloppes autour de la CLI Heroku. Heroku est une plateforme de cloud computing qui permet de déployer des applications web.
  - name: twitter:description
    content: Les alias Heroku sont des enveloppes autour de la CLI Heroku. Heroku est une plateforme de cloud computing qui permet de déployer des applications web.
  - name: twitter:title
    content: Les alias Heroku - Dotfiles (FR)
  - name: og:title
    content: Les alias Heroku - Dotfiles (FR)
  - name: og:description
    content: Les alias Heroku sont des enveloppes autour de la CLI Heroku. Heroku est une plateforme de cloud computing qui permet de déployer des applications web.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Heroku aliases

Le fichier `heroku.aliases.zsh` crée des raccourcis utiles pour de nombreuses
commandes courantes de [Heroku](https://www.heroku.com/).

Les alias Heroku sont des enveloppes autour de la CLI Heroku. Heroku est une
plateforme de cloud computing qui permet de déployer des applications web.

## Raccourcis Heroku

### Commandes de base

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hk | `heroku` | Exécute la CLI Heroku |
| hka | `heroku access:add` | Ajoute un utilisateur à l'application |
| hkau | `heroku access:update`| Met à jour les permissions d'un utilisateur |
| hkh | `heroku help` | Affiche l'aide de la CLI Heroku |
| hkj | `heroku join` | Rejoint une organisation |
| hkl | `heroku commands` | Liste les commandes de la CLI Heroku |
| hkla | `heroku access` | Liste les utilisateurs de l'application |
| hklg | `heroku logs` | Affiche les logs de l'application |
| hkn | `heroku notifications`| Affiche les notifications de l'application |
| hko | `heroku orgs` | Liste les organisations |
| hkoo | `heroku orgs:open` | Ouvre l'organisation dans le navigateur |
| hkp | `heroku psql` | Ouvre une session Postgres |
| hkq | `heroku leave` | Quitte une organisation |
| hkr | `heroku access:remove`| Supprime un utilisateur de l'application |
| hkrg | `heroku regions` | Liste les régions disponibles |
| hks | `heroku status` | Affiche le statut de Heroku |
| hkt | `heroku teams` | Liste les équipes |
| hku | `heroku update` | Met à jour la CLI Heroku |
| hkulk | `heroku unlock` | Déverrouille une application |
| hkw | `heroku which` | Affiche le chemin d'accès à la commande Heroku |

### Commandes sur les add-on

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkada | `heroku addons:attach` | Attache un add-on à une application |
| hkadc | `heroku addons:create` | Crée un add-on |
| hkadd | `heroku addons:detach` | Détache un add-on d'une application |
| hkaddoc | `heroku addons:docs` | Affiche la documentation d'un add-on |
| hkaddown | `heroku addons:downgrade`| Baisse la version d'un add-on |
| hkadi | `heroku addons:info` | Affiche les informations d'un add-on |
| hkadk | `heroku addons:destroy` | Détruit un add-on |
| hkadl | `heroku addons` | Liste les add-on d'une application |
| hkado | `heroku addons:open` | Ouvre un add-on dans le navigateur |
| hkadp | `heroku addons:plans` | Liste les plans d'un add-on |
| hkadr | `heroku addons:rename` | Renomme un add-on |
| hkads | `heroku addons:services` | Liste les services d'un add-on |
| hkadu | `heroku addons:upgrade` | Augmente la version d'un add-on |
| hkadw | `heroku addons:wait` | Attends que l'add-on soit prêt |

### Les alias des applications Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkapc | `heroku apps:create` | Crée une application Heroku |
| hkape | `heroku apps:errors` | Affiche les erreurs de l'application |
| hkapfav | `heroku apps:favorites` | Liste les applications favorites |
| hkapfava | `heroku apps:favorites:add` | Ajoute une application aux favoris |
| hkapunfav| `heroku apps:favorites:remove`| Supprime une application des favoris |
| hkapi | `heroku apps:info` | Affiche les informations de l'application |
| hkapj | `heroku apps:join` | Rejoint une application |
| hkapk | `heroku apps:destroy` | Détruit une application |
| hkapl | `heroku apps` | Liste les applications |
| hkaplk | `heroku apps:lock` | Verrouille une application |
| hkapo | `heroku apps:open` | Ouvre l'application dans le navigateur |
| hkapq | `heroku apps:leave` | Quitte une application |
| hkapr | `heroku apps:rename` | Renomme une application |
| hkaps | `heroku apps:stacks` | Liste les stacks disponibles |
| hkapss | `heroku apps:stacks:set` | Change la stack de l'application |
| hkapt | `heroku apps:transfer` | Transfère une application |
| hkapulck | `heroku apps:unlock` | Déverrouille une application |

### Les alias 2FA (Authentification à deux facteurs) Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hk2fa | `heroku auth:whoami` | Affiche les informations de l'utilisateur |
| hk2fad | `heroku auth:2fa:disable`| Désactive l'authentification à deux facteurs |
| hk2fain | `heroku auth:login` | Connecte l'utilisateur à Heroku |
| hk2faout | `heroku auth:logout` | Déconnecte l'utilisateur de Heroku |
| hk2fas | `heroku auth:2fa` | Active l'authentification à deux facteurs |
| hk2fat | `heroku auth:token` | Affiche le token de l'utilisateur |

### Les alias d'authentification Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkauc | `heroku authorizations:create`| Crée une autorisation |
| hkaui | `heroku authorizations:info` | Affiche les informations d'une autorisation |
| hkaul | `heroku authorizations` | Liste les autorisations |
| hkaur | `heroku authorizations:revoke` | Révoque une autorisation |
| hkauro| `heroku authorizations:rotate` | Révoque toutes les autorisations |
| hkauu | `heroku authorizations:update` | Met à jour une autorisation |

### Les alias de buildpack Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkbpac | `heroku autocomplete` | Active l'autocomplétion |
| hkbpad | `heroku buildpacks:add` | Ajoute un buildpack |
| hkbpcl | `heroku buildpacks:clear` | Supprime tous les buildpacks |
| hkbpi | `heroku buildpacks:info` | Affiche les informations du buildpack |
| hkbpl | `heroku buildpacks` | Liste les buildpacks |
| hkbpr | `heroku buildpacks:remove` | Supprime un buildpack |
| hkbps | `heroku buildpacks:search` | Recherche un buildpack |
| hkbpv | `heroku buildpacks:versions`| Liste les versions d'un buildpack |

### Les alias certificats SSL Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkca | `heroku certs:auto` | Active le renouvellement automatique des certificats SSL |
| hkcad | `heroku certs:add` | Ajoute un certificat SSL |
| hkcae | `heroku certs:auto:enable` | Active le renouvellement automatique des certificats SSL |
| hkcak | `heroku certs:auto:disable` | Désactive le renouvellement automatique des certificats SSL |
| hkcar | `heroku certs:auto:refresh` | Force le renouvellement des certificats SSL |
| hkcc | `heroku certs:chain` | Affiche la chaîne de certificats |
| hkcg | `heroku certs:generate` | Génère un certificat SSL |
| hkci | `heroku certs:info` | Affiche les informations d'un certificat SSL |
| hkck | `heroku certs:key` | Affiche la clé privée d'un certificat SSL |
| hkcl | `heroku certs` | Liste les certificats SSL |
| hkcr | `heroku certs:remove` | Supprime un certificat SSL |
| hkcu | `heroku certs:update` | Met à jour un certificat SSL |

### Les alias lignes de commande Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkcicg | `heroku ci:config:get` | Affiche la configuration de l'environnement de test |
| hkcics | `heroku ci:config:set` | Définit la configuration de l'environnement de test |
| hkcicu | `heroku ci:config:unset` | Supprime la configuration de l'environnement de test |
| hkcicv | `ci:config` | Affiche la configuration de l'environnement de test |
| hkcid | `heroku ci:debug` | Démarre un shell interactif pour déboguer un build |
| hkcie | `heroku ci:last` | Affiche les informations du dernier build |
| hkcii | `heroku ci:info` | Affiche les informations d'un build |
| hkcil | `heroku ci` | Liste les builds |
| hkcim | `heroku ci:migrate-manifest` | Migrate un manifeste de build |
| hkcio | `heroku ci:open` | Ouvre le build dans le navigateur |
| hkcir | `heroku ci:run` | Exécute une commande dans un environnement de test |
| hkcir2 | `heroku ci:rerun` | Exécute une commande dans un environnement de test |

### Les alias clients Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkclc | `heroku clients:create` | Crée un client |
| hkcli | `heroku clients:info` | Affiche les informations d'un client |
| hkclk | `heroku clients:destroy`| Supprime un client |
| hkcll | `heroku clients` | Liste les clients |
| hkcls | `heroku clients:rotate` | Révoque tous les clients |
| hkclu | `heroku clients:update` | Met à jour un client |

### Les alias de configuration Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkcfe | `heroku config:edit` | Édite la configuration |
| hkcfg | `heroku config:get` | Affiche la valeur d'une variable d'environnement |
| hkcfs | `heroku config:set` | Définit une variable d'environnement |
| hkcfu | `heroku config:unset` | Supprime une variable d'environnement |
| hkcfv | `heroku config` | Affiche la configuration |

### Les alias conteneurs Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkct | `heroku container` | Affiche les commandes de conteneurs |
| hkctin | `heroku container:login` | Connecte le client à un registre de conteneurs |
| hkctout | `heroku container:logout` | Déconnecte le client d'un registre de conteneurs |
| hkctpull | `heroku container:pull` | Télécharge une image de conteneur |
| hkctpush | `heroku container:push` | Publie une image de conteneur |
| hkctrelease | `heroku container:release`| Publie une release de conteneur |
| hkctrm | `heroku container:rm` | Supprime une image de conteneur |
| hkctrun | `heroku container:run` | Exécute une commande dans un conteneur |

### Les alias domaines Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkdo | `heroku domains` | Liste les domaines |
| hkdoa | `heroku domains:add` | Ajoute un domaine |
| hkdoc | `heroku domains:clear` | Supprime tous les domaines |
| hkdoi | `heroku domains:info` | Affiche les informations d'un domaine |
| hkdor | `heroku domains:remove` | Supprime un domaine |
| hkdou | `heroku domains:update` | Met à jour un domaine |
| hkdow | `heroku domains:wait` | Attends que le domaine soit résolu |

### Les alias drains Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkdr | `heroku drains` | Liste les drains |
| hkdra | `heroku drains:add` | Ajoute un drain |
| hkdrr | `heroku drains:remove` | Supprime un drain |

### Les alias dynos Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkdyk | `heroku dyno:kill` | Arrête un dyno |
| hkdyrz | `heroku dyno:resize` | Redimensionne un dyno |
| hkdyrs | `heroku dyno:restart` | Redémarre un dyno |
| hkdysc | `heroku dyno:scale` | Redimensionne les dynos |
| hkdyst | `heroku dyno:stop` | Arrête un dyno |

### Les alias de fonctionnalités Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkfeat | `heroku features` | Liste les fonctionnalités |
| hkfeatd | `heroku features:disable` | Désactive une fonctionnalité |
| hkfeate | `heroku features:enable`  | Active une fonctionnalité |
| hkfeati | `heroku features:info` | Affiche les informations d'une fonctionnalité |

### Les alias Git Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkgitc | `heroku git:clone` | Clone un dépôt Git |
| hkgitr | `heroku git:remote` | Ajoute un remote Git |

### Les alias de clés Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkk | `heroku keys` | Liste les clés |
| hkk:a | `heroku keys:add` | Ajoute une clé |
| hkk:cl | `heroku keys:clear` | Supprime toutes les clés |
| hkk:r | `heroku keys:remove`| Supprime une clé |

### Les alias labs Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hklab | `heroku labs` | Liste les fonctionnalités expérimentales |
| hklab:d | `heroku labs:disable`| Désactive une fonctionnalité expérimentale |
| hklab:e | `heroku labs:enable` | Active une fonctionnalité expérimentale |
| hklab:i | `heroku labs:info` | Affiche les informations d'une fonctionnalité expérimentale |

### Les alias local Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkloc | `heroku local` | Exécute l'application locale |
| hklocr | `heroku local:run` | Exécute une commande locale |
| hklocv | `heroku local:version`| Affiche la version locale |
| hkloclck | `heroku lock` | Verrouille une application |

### Les alias de maintenance Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkmt | `heroku maintenance` | Affiche l'état de maintenance |
| hkmtoff | `heroku maintenance:off` | Désactive la maintenance |
| hkmton | `heroku maintenance:on` | Active la maintenance |

### Les alias membres Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkmb | `heroku members` | Liste les membres |
| hkmba | `heroku members:add` | Ajoute un membre |
| hkmbr | `heroku members:remove` | Supprime un membre |
| hkmbs | `heroku members:set` | Définit le rôle d'un membre |

### Les alias PostgreSQL Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkpg | `heroku pg` | Affiche les commandes PostgreSQL |
| hkpgb | `heroku pg:bloat`| Affiche les tables les plus encombrées |
| hkpgbk | `heroku pg:backups` | Affiche les commandes de sauvegarde |
| hkpgbkcl | `heroku pg:backups:cancel` | Annule une sauvegarde |
| hkpgbkc | `heroku pg:backups:capture` | Capture une sauvegarde |
| hkpgbkdl | `heroku pg:backups:delete` | Supprime une sauvegarde |
| hkpgbkdw | `heroku pg:backups:download` | Télécharge une sauvegarde |
| hkpgbki | `heroku pg:backups:info` | Affiche les informations d'une sauvegarde |
| hkpgbkr | `heroku pg:backups:restore` | Restaure une sauvegarde |
| hkpgbks | `heroku pg:backups:schedule` | Planifie une sauvegarde |
| hkpgbksh | `heroku pg:backups:schedules` | Affiche les commandes de planification de sauvegarde |
| hkpgbkurl | `heroku pg:backups:url` | Affiche l'URL d'une sauvegarde |
| hkpgbkk | `heroku pg:backups:unschedule` | Annule la planification d'une sauvegarde |
| hkpgblk | `heroku pg:blocking` | Affiche les requêtes bloquantes |
| hkpgc | `heroku pg:copy` | Copie une base de données |
| hkpgcpa | `heroku pg:connection-pooling:attach` | Attache un pool de connexions |
| hkpgcr | `heroku pg:credentials` | Affiche les commandes de gestion des identifiants |
| hkpgcrc | `heroku pg:credentials:create` | Crée un identifiant |
| hkpgcrd | `heroku pg:credentials:destroy` | Supprime un identifiant |
| hkpgcrr | `heroku pg:credentials:rotate` | Réinitialise un identifiant |
| hkpgcrrd | `heroku pg:credentials:repair-default` | Répare l'identifiant par défaut |
| hkpgcrurl | `heroku pg:credentials:url` | Affiche l'URL d'un identifiant |
| hkpgdg | `heroku pg:diagnose` | Diagnostique une base de données |
| hkpgi | `heroku pg:info` | Affiche les informations d'une base de données |
| hkpgk | `heroku pg:kill` | Supprime une requête |
| hkpgka | `heroku pg:killall` | Supprime toutes les requêtes |
| hkpglks | `heroku pg:locks`| Affiche les verrous |
| hkpglnk | `heroku pg:links`| Affiche les liens |
| hkpglnkc | `heroku pg:links:create` | Crée un lien |
| hkpglnkd | `heroku pg:links:destroy` | Supprime un lien |
| hkpgmt | `heroku pg:maintenance` | Affiche les commandes de maintenance
| hkpgmtr | `heroku pg:maintenance:run` | Exécute une maintenance |
| hkpgmtw | `heroku pg:maintenance:window` | Affiche les commandes de fenêtre de maintenance |
| hkpgo | `heroku pg:outliers` | Affiche les requêtes atypiques |
| hkpgp | `heroku pg:promote` | Promouvoie une base de données |
| hkpgps | `heroku pg:ps` | Affiche les requêtes en cours d'exécution |
| hkpgpsql | `heroku pg:psql` | Exécute une requête SQL |
| hkpgpull | `heroku pg:pull` | Télécharge une base de données |
| hkpgpush | `heroku pg:push` | Publie une base de données |
| hkpgreset | `heroku pg:reset`| Réinitialise une base de données |
| hkpgset | `heroku pg:settings` | Affiche les commandes de paramètres |
| hkpgsetllw | `heroku pg:settings:log-lock-waits` | Active l'enregistrement des verrous |
| hkpgsetlmds | `heroku pg:settings:log-min-duration-statement` | Active l'enregistrement des requêtes |
| hkpgsetlgs | `heroku pg:settings:log-statement` | Active l'enregistrement des requêtes |
| hkpguf | `heroku pg:unfollow` | Arrête de suivre une base de données |
| hkpgup | `heroku pg:upgrade` | Met à jour une base de données |
| hkpgvs | `heroku pg:vacuum-stats` | Affiche les statistiques de vidage |
| hkpgww | `heroku pg:wait` | Attend la disponibilité d'une base de données |

### Les alias de pipelines Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkpipe | `heroku pipelines` | Affiche les commandes de pipelines |
| hkpipea | `heroku pipelines:add` | Ajoute une application à un pipeline |
| hkpipec | `heroku pipelines:create` | Crée un pipeline |
| hkpipect | `heroku pipelines:connect` | Connecte un pipeline à un dépôt |
| hkpipediff | `heroku pipelines:diff` | Affiche les différences entre deux déploiements |
| hkpipei | `heroku pipelines:info` | Affiche les informations d'un pipeline |
| hkpipek | `heroku pipelines:destroy` | Supprime un pipeline |
| hkpipeo | `heroku pipelines:open` | Ouvre un pipeline |
| hkpipep | `heroku pipelines:promote` | Promouvoie une application |
| hkpiper | `heroku pipelines:remove` | Supprime une application d'un pipeline |
| hkpipern | `heroku pipelines:rename` | Renomme un pipeline |
| hkpipes | `heroku pipelines:setup` | Configure un pipeline |
| hkpipett | `heroku pipelines:transfer`| Transfère un pipeline |
| hkpipeu | `heroku pipelines:update` | Met à jour un pipeline |

### Les alias plugins Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkplugs | `heroku plugins` | Affiche les commandes de plugins |
| hkplugsi | `heroku plugins:install` | Installe un plugin |
| hkplugslk | `heroku plugins:link` | Lie un plugin |
| hkplugsui | `heroku plugins:uninstall` | Désinstalle un plugin |
| hkplugsu | `heroku plugins:update` | Met à jour un plugin |

### Les alias ps Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkps | `heroku ps` | Affiche les commandes de processus |
| hkpsad | `heroku ps:autoscale:disable` | Désactive l'auto-échelle |
| hkpsae | `heroku ps:autoscale:enable` | Active l'auto-échelle |
| hkpsc | `heroku ps:copy` | Copie un processus |
| hkpse | `heroku ps:exec` | Exécute une commande dans un processus |
| hkpsf | `heroku ps:forward` | Transfère un port |
| hkpsk | `heroku ps:kill` | Supprime un processus |
| hkpsr | `heroku ps:restart` | Redémarre un processus |
| hkpsrs | `heroku ps:resize` | Redimensionne un processus |
| hkpss | `heroku ps:stop` | Arrête un processus |
| hkpssc | `heroku ps:scale` | Redimensionne les processus |
| hkpssck | `heroku ps:socks` | Crée un tunnel SOCKS |
| hkpst | `heroku ps:type` | Modifie le type de processus |
| hkpsw | `heroku ps:wait` | Attend la disponibilité d'un processus |

### Les alias redis Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkred | `heroku redis` | Affiche les commandes Redis |
| hkredcli | `heroku redis:cli` | Exécute une commande Redis |
| hkredcr | `heroku redis:credentials` | Affiche les commandes de connexion |
| hkredi | `heroku redis:info` | Affiche les informations d'une base Redis |
| hkredkn | `heroku redis:keyspace-notifications` | Active les notifications de clés |
| hkredmm | `heroku redis:maxmemory` | Modifie la taille maximale de la mémoire |
| hkredmt | `heroku redis:maintenance` | Affiche les commandes de maintenance |
| hkredp | `heroku redis:promote` | Promouvoie une base Redis |
| hkredsr | `heroku redis:stats-reset` | Réinitialise les statistiques d'une base Redis |
| hkredt | `heroku redis:timeout` | Modifie le délai d'expiration |
| hkredw | `heroku redis:wait` | Attend la disponibilité d'une base Redis |

### Les alias releases Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkrel | `heroku releases` | Affiche les commandes de déploiements |
| hkreli | `heroku releases:info` | Affiche les informations d'un déploiement |
| hkrelo | `heroku releases:output` | Affiche la sortie d'un déploiement |
| hkrelr | `heroku releases:rollback` | Annule un déploiement |

### Les alias espace de travail Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkrvad | `heroku reviewapps:disable` | Désactive les applications de revue |
| hkrvae | `heroku reviewapps:enable` | Active les applications de revue |

### Les alias run Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkrun | `heroku run` | Exécute une commande dans un processus |
| hkrund | `heroku run:detached` | Exécute une commande dans un processus détaché |

### Les alias sessions Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hksessions | `heroku sessions` | Affiche les commandes de sessions |
| hksessionsd | `heroku sessions:destroy` | Supprime une session |

### Les alias espaces de stockage Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hksp | `heroku spaces` | Affiche les commandes d'espaces de stockage |
| hkspc | `heroku spaces:create` | Crée un espace de stockage |
| hkspd | `heroku spaces:destroy`| Supprime un espace de stockage |
| hkspi | `heroku spaces:info` | Affiche les informations d'un espace de stockage |
| hksppi | `heroku spaces:peering:info` | Affiche les informations d'un peering |
| hkspp | `heroku spaces:peerings` | Affiche les commandes de peering |
| hksppa | `heroku spaces:peerings:accept` | Accepte un peering |
| hksppd | `heroku spaces:peerings:destroy` | Supprime un peering |
| hkspps | `heroku spaces:ps` | Affiche les commandes de processus |
| hkspr | `heroku spaces:rename` | Renomme un espace de stockage |
| hksptop | `heroku spaces:topology` | Affiche les commandes de topologie |
| hkspt | `heroku spaces:transfer` | Transfère un espace de stockage |
| hkspconf | `heroku spaces:vpn:config` | Affiche les commandes de configuration VPN |
| hkspvc | `heroku spaces:vpn:connect` | Connecte un espace de stockage à un VPN |
| hkspvcs | `heroku spaces:vpn:connections` | Affiche les commandes de connexion VPN |
| hkspvk | `heroku spaces:vpn:destroy` | Supprime une connexion VPN |
| hkspvi | `heroku spaces:vpn:info` | Affiche les informations d'une connexion VPN |
| hkspvu | `heroku spaces:vpn:update` | Met à jour une connexion VPN |
| hkspvw | `heroku spaces:vpn:wait` | Attend la disponibilité d'une connexion VPN |
| hkspw | `heroku spaces:wait` | Attend la disponibilité d'un espace de stockage |

### Les alias webhooks Heroku

| Alias | Commande | Description |
| ----- | ----- | ----- |
| hkwh | `heroku webhooks`| Affiche les commandes de webhooks |
| hkwha | `heroku webhooks:add` | Ajoute un webhook |
| hkwhdv | `heroku webhooks:deliveries` | Affiche les commandes de livraisons |
| hkwhdvi | `heroku webhooks:deliveries:info`| Affiche les informations d'une livraison |
| hkwhev | `heroku webhooks:events` | Affiche les commandes d'événements |
| hkwhevi | `heroku webhooks:events:info` | Affiche les informations d'un événement |
| hkwhi | `heroku webhooks:info` | Affiche les informations d'un webhook |
| hkwhr | `heroku webhooks:remove` | Supprime un webhook |
| hkwhu | `heroku webhooks:update` | Met à jour un webhook |
