---
description: Fonctions shell fournies par Dotfiles pour améliorer votre expérience terminal.
lang: fr-FR
metaTitle: Fonctions - Dotfiles (FR)
permalink: /fr/functions/

meta:
  - name: keywords
    content: fonctions, shell, bash, zsh, dotfiles, productivité
---
<img
  src="https://kura.pro/dotfiles/v2/images/logos/dotfiles.svg"
  alt="logo dotfiles"
  width="66"
  align="right"
/>

# Fonctions Dotfiles (v0.2.471)

> Simplement conçu pour s'adapter à votre vie de shell 🐚

![Dotfiles banner][banner]

Une collection complète d'utilitaires et de fonctions shell pour améliorer votre productivité sur macOS, Linux et Windows.

## 📖 Fonctionnement

Les fonctions sont définies sous forme de fichiers `.sh` individuels dans ce répertoire.

Lors de `chezmoi apply`, le modèle principal `dot_config/shell/functions.sh.tmpl` :
1. Parcourt ce répertoire pour trouver les fichiers `**/*.sh`.
2. Les agrège dans `~/.config/shell/functions.sh`.
3. Ce fichier est sourcé par `.zshrc`, rendant toutes les fonctions immédiatement disponibles.

## 🛠 Utilisation

### Ajouter une nouvelle fonction
1. Créez un nouveau fichier `.sh` (ex. `mafonction.sh`).
2. Ajoutez la définition de votre fonction.
3. Appliquez les changements :
   ```bash
   chezmoi apply
   ```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg

## 🧰 Catégories de fonctions

### 🔍 Tests API & Supervision

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `apihealth` | Vérifier la santé/le statut d'une ou plusieurs APIs | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Mesurer la latence d'une API sur plusieurs requêtes | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Effectuer un test de charge simple sur une API | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Déboguer des requêtes HTTP avec des métriques détaillées | `httpdebug [options] [url]` |

### 🌐 Utilitaires HTTP/Web

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `curlheader` | Afficher les en-têtes HTTP d'une URL | `curlheader [header] [url]` |
| `curlstatus` | Obtenir le code de statut HTTP d'une URL | `curlstatus [url]` |
| `curltime` | Mesurer les métriques de timing HTTP | `curltime [url]` |
| `view-source` | Afficher le code source d'un site web | `view-source URL` |
| `whoisport` | Trouver quel processus utilise un port | `whoisport PORT` |

### 📁 Gestion des fichiers

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `backup` | Créer des sauvegardes horodatées avec compression | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64`/`decode64` | Encodage/décodage Base64 | `encode64 "string"` / `decode64 "base64string"` |
| `extract` | Extraire divers formats d'archives | `extract [file]` |
| `hexdump` | Afficher le contenu d'un fichier en hexadécimal | `hexdump [file] [lines]` |
| `ren` | Renommer des extensions de fichiers par lot | `ren OLD_EXT NEW_EXT` |
| `size` | Vérifier la taille d'un fichier ou répertoire | `size [file/directory]` |
| `zipf` | Créer des archives ZIP | `zipf [folder]` |

### 📄 Utilitaires de nommage de fichiers

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `kebabcase` | Convertir les noms en kebab-case | `kebabcase <files...>` |
| `lowercase` | Convertir les noms en minuscules | `lowercase <files...>` |
| `sentencecase` | Convertir les noms en casse phrase | `sentencecase <files...>` |
| `snakecase` | Convertir les noms en snake_case | `snakecase <files...>` |
| `titlecase` | Convertir les noms en Title Case | `titlecase <files...>` |
| `uppercase` | Convertir les noms en MAJUSCULES | `uppercase <files...>` |

### 🖥️ Utilitaires système

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `caffeine` | Empêcher le système de se mettre en veille | `caffeine [command]` |
| `environment` | Détecter l'environnement du système d'exploitation | `environment` |
| `freespace` | Nettoyer l'espace disque purgeable | `freespace [disk]` |
| `hiddenfiles` | Basculer la visibilité des fichiers cachés dans Finder | `hiddenfiles [show|hide]` |
| `hostinfo` | Afficher des informations détaillées sur l'hôte | `hostinfo` |
| `hstats` | Voir les statistiques des commandes les plus utilisées | `hstats` |
| `last` | Lister les fichiers modifiés récemment | `last [minutes]` |
| `logout` | Utilitaire de déconnexion multiplateforme | `logout [--force]` |
| `myproc` | Lister les processus de l'utilisateur courant | `myproc` |
| `stopwatch` | Chronomètre simple en terminal | `stopwatch` |
| `sysinfo` | Afficher des infos système avec des icônes OS | `sysinfo` |

#### Commandes Caffeine

L'utilitaire `caffeine` empêche le système de se mettre en veille ou d'activer l'économiseur d'écran.

| Commande | Description |
|---------|-------------|
| `caffeine daemon` | Démarrer le démon caffeine (crée un fichier de verrouillage) |
| `caffeine status` | Vérifier si le démon est actif |
| `caffeine query` | Identique à status, mais retourne un code de sortie |
| `caffeine start` | Garder l'écran actif |
| `caffeine stop` | Arrêter le maintien de l'écran actif |
| `caffeine toggle` | Basculer le maintien de l'écran actif |
| `caffeine shutdown` | Arrêter complètement le démon caffeine |
| `caffeine diagnostic` | Afficher les informations de diagnostic |
| `caffeine version` | Afficher la version |
| `caffeine help` | Afficher l'aide |

**Compatibilité multiplateforme** : fonctionne sur macOS (avec `caffeinate`), Linux (avec `xdg-screensaver` et `xset`), et Windows (via PowerShell avec frappes simulées).

### 🔐 Sécurité & identifiants

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `genpass` | Générer des mots de passe aléatoires robustes | `genpass [num_blocks] [separator]` |
| `keygen` | Générer des paires de clés SSH avec chiffrement fort | `keygen [name] [email] [type] [bits]` |

### 📂 Navigation & gestion des répertoires

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `cdls` | Changer de répertoire et lister le contenu | `cdls [directory]` |
| `goto` | Naviguer rapidement vers un répertoire | `goto [directory]` |
| `mount_read_only` | Monter une image disque en lecture seule comme lecture/écriture | `mount_read_only [image]` |
| `rd` | Supprimer un répertoire et ses fichiers | `rd [directory]` |
| `remove_disk` | Éjecter un disque en toute sécurité | `remove_disk [disk]` |

### 🪄 Divers

| Fonction | Description | Utilisation |
|----------|-------------|-------------|
| `matrix` | Effets Matrix en terminal | `matrix [options]` |
| `prependpath` | Ajouter un répertoire au PATH sans doublons | `prependpath [directory]` |
| `ql` | Ouvrir un fichier dans Quick Look (macOS) | `ql [file]` |
| `vscode` | Ouvrir un fichier dans Visual Studio Code | `vscode [file]` |

## 🔧 Compatibilité

La plupart des utilitaires fonctionnent sur plusieurs plateformes, avec des adaptations spécifiques pour :

- 🍎 **macOS** : prise en charge complète avec des utilitaires dédiés
- 🐧 **Linux** : compatible avec les distributions Linux courantes
- 🪟 **Windows** : prise en charge via WSL, Cygwin ou Git Bash

## 📖 Documentation des fonctions

Chaque fonction inclut une documentation complète accessible via l'option `--help` :

```bash
apihealth --help
```

## 📄 Licence

Licence MIT © 2015-2025 Sebastien Rousseau

---

Réalisé avec ♥ à Londres, Royaume-Uni • [dotfiles.io](https://dotfiles.io)
