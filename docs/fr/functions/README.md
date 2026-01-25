---
description: Fonctions shell qui améliorent votre expérience terminal. Utilitaires pour les API, les fichiers et les opérations système.
lang: fr-FR
metaTitle: Fonctions - Dotfiles (FR)
permalink: /functions/

meta:
  - name: keywords
    content: fonctions, shell, bash, zsh, dotfiles, productivité, utilitaires, api, fichiers, système
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Fonctions shell qui améliorent votre expérience terminal. Utilitaires pour les API, les fichiers et les opérations système.
  - name: twitter:title
    content: Fonctions - Dotfiles
  - name: og:title
    content: Fonctions - Dotfiles
  - name: og:description
    content: Fonctions shell qui améliorent votre expérience terminal. Utilitaires pour les API, les fichiers et les opérations système.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Fonctions

Utilitaires shell pour augmenter votre productivité sur macOS, Linux et Windows.

## Découvrir

Les fonctions sont définies dans des fichiers `.sh` séparés. Lors de `chezmoi apply`, elles sont agrégées dans `~/.config/shell/functions.sh` puis chargées par votre shell.

## Premiers pas

### Ajouter une fonction

1. Créez un nouveau fichier `.sh` (par exemple `mafonction.sh`)
2. Ajoutez la définition de votre fonction
3. Appliquez les changements :
   ```bash
   chezmoi apply
   ```

## Référence

### Tests d’API

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `apihealth` | Vérifier la santé d’une ou plusieurs API | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Mesurer la latence d’une API | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Effectuer un test de charge simple | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Déboguer des requêtes HTTP avec timings | `httpdebug [options] [url]` |

### Utilitaires HTTP

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `curlheader` | Afficher les en-têtes HTTP | `curlheader [header] [url]` |
| `curlstatus` | Vérifier le code de statut HTTP | `curlstatus [url]` |
| `curltime` | Mesurer les métriques de timing HTTP | `curltime [url]` |
| `view-source` | Afficher le code source d’un site | `view-source URL` |
| `whoisport` | Trouver le processus qui utilise un port | `whoisport PORT` |

### Gestion des fichiers

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `backup` | Créer des sauvegardes horodatées | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Encodage et décodage Base64 | `encode64 "string"` |
| `extract` | Extraire des archives | `extract [file]` |
| `hexdump` | Afficher un fichier en hexadécimal | `hexdump [file] [lines]` |
| `ren` | Renommer des extensions par lot | `ren OLD_EXT NEW_EXT` |
| `size` | Vérifier la taille d’un fichier ou dossier | `size [file/directory]` |
| `zipf` | Créer des archives ZIP | `zipf [folder]` |

### Nommage de fichiers

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `kebabcase` | Convertir en kebab-case | `kebabcase <files...>` |
| `lowercase` | Convertir en minuscules | `lowercase <files...>` |
| `sentencecase` | Convertir en casse phrase | `sentencecase <files...>` |
| `snakecase` | Convertir en snake_case | `snakecase <files...>` |
| `titlecase` | Convertir en Title Case | `titlecase <files...>` |
| `uppercase` | Convertir en MAJUSCULES | `uppercase <files...>` |

### Utilitaires système

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `caffeine` | Empêcher la mise en veille | `caffeine [command]` |
| `environment` | Détecter l’environnement OS | `environment` |
| `freespace` | Nettoyer l’espace libérable | `freespace [disk]` |
| `hiddenfiles` | Afficher/masquer les fichiers cachés | `hiddenfiles [show|hide]` |
| `hostinfo` | Afficher les infos de l’hôte | `hostinfo` |
| `hstats` | Statistiques d’usage des commandes | `hstats` |
| `last` | Lister les fichiers récemment modifiés | `last [minutes]` |
| `logout` | Déconnexion multiplateforme | `logout [--force]` |
| `myproc` | Lister les processus utilisateur | `myproc` |
| `stopwatch` | Chronomètre terminal | `stopwatch` |
| `sysinfo` | Afficher les infos système | `sysinfo` |

### Commandes Caffeine

Empêche la mise en veille ou l’activation de l’économiseur d’écran.

| Commande | Description |
|:---|:---|
| `caffeine daemon` | Démarrer le daemon caffeine |
| `caffeine status` | Vérifier si le daemon tourne |
| `caffeine start` | Garder l’écran éveillé |
| `caffeine stop` | Autoriser la mise en veille |
| `caffeine toggle` | Basculer l’écran éveillé |
| `caffeine shutdown` | Arrêter le daemon |

Fonctionne sur macOS (`caffeinate`), Linux (`xdg-screensaver`) et Windows (PowerShell).

### Sécurité

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `genpass` | Générer des mots de passe robustes | `genpass [num_blocks] [separator]` |
| `keygen` | Générer des paires de clés SSH | `keygen [name] [email] [type] [bits]` |

### Navigation

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `cdls` | Changer de répertoire et lister | `cdls [directory]` |
| `goto` | Navigation rapide | `goto [directory]` |
| `mount_read_only` | Monter en lecture seule comme lecture/écriture | `mount_read_only [image]` |
| `rd` | Supprimer un répertoire | `rd [directory]` |
| `remove_disk` | Éjecter un disque en toute sécurité | `remove_disk [disk]` |

### Divers

| Fonction | Description | Utilisation |
|:---|:---|:---|
| `matrix` | Effets Matrix dans le terminal | `matrix [options]` |
| `prependpath` | Ajouter un dossier au PATH | `prependpath [directory]` |
| `ql` | Ouvrir dans Quick Look (macOS) | `ql [file]` |
| `vscode` | Ouvrir dans VS Code | `vscode [file]` |

## Compatibilité

- **macOS** — Support complet avec utilitaires spécifiques
- **Linux** — Compatible avec les distributions courantes
- **Windows** — Support via WSL, Cygwin ou Git Bash

## Aide

Chaque fonction inclut une aide via `--help` :

```bash
apihealth --help
```
