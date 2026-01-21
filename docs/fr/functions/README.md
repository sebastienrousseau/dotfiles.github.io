---
description: Fonctions shell fournies par Dotfiles pour améliorer votre expérience terminal.
lang: fr-FR
metaTitle: Fonctions - Dotfiles (FR)
permalink: /fr/functions/

meta:
  - name: keywords
    content: fonctions, shell, bash, zsh, dotfiles, productivité
---

# Fonctions

Dotfiles inclut une collection de fonctions utilitaires pour accélérer votre flux de travail. Celles-ci sont automatiquement chargées dans votre environnement shell.

## API & Réseau
| Fonction | Description |
| :--- | :--- |
| `apihealth` | Vérifier la santé d'un point de terminaison API. |
| `apilatency` | Mesurer la latence API. |
| `apiload` | Test de charge API simple. |
| `curlheader` | Obtenir les en-têtes HTTP avec curl. |
| `curlstatus` | Obtenir le code de statut HTTP. |
| `curltime` | Mesurer le temps de requête curl. |
| `httpdebug` | Déboguer le trafic HTTP. |
| `whoisport` | Vérifier qui utilise un port spécifique. |

## Gestion de Fichiers
| Fonction | Description |
| :--- | :--- |
| `cdls` | Changer de répertoire et lister le contenu. |
| `extract` | Extraire n'importe quel format d'archive (tar, zip, gz, etc). |
| `freespace` | Vérifier l'espace disque libre. |
| `hiddenfiles` | Lister les fichiers cachés. |
| `showhiddenfiles` | Basculer les fichiers cachés dans le Finder (macOS). |
| `size` | Obtenir la taille d'un répertoire. |
| `zipf` | Compresser un fichier ou un répertoire. |
| `backup` | Sauvegarder un fichier avec un horodatage. |

## Traitement de Texte
| Fonction | Description |
| :--- | :--- |
| `encode64` | Encoder en Base64. |
| `hexdump` | Hexdump d'un fichier. |
| `kebabcase` | Convertir une chaîne en kebab-case. |
| `lowercase` | Convertir une chaîne en minuscules. |
| `sentencecase` | Convertir une chaîne en Casse de phrase. |
| `snakecase` | Convertir une chaîne en snake_case. |
| `titlecase` | Convertir une chaîne en Casse De Titre. |
| `uppercase` | Convertir une chaîne en MAJUSCULES. |

## Système & Utilitaires
| Fonction | Description |
| :--- | :--- |
| `caffeine` | Empêcher le système de dormir (macOS). |
| `genpass` | Générer un mot de passe sécurisé. |
| `sysinfo` | Afficher les informations système. |
| `stopwatch` | Un chronomètre terminal simple. |
| `matrix` | L'effet de pluie numérique Matrix. |
| `myproc` | Lister mes processus. |
| `kill` | Tuer des processus interactivement (via fzf). |

## Navigation
| Fonction | Description |
| :--- | :--- |
| `goto` | Navigation rapide vers les répertoires favoris. |
| `prependpath` | Ajouter un répertoire au début du $PATH. |

> [!TIP]
> Utilisez `type <nom_fonction>` dans votre terminal pour voir le code source de n'importe quelle fonction !
