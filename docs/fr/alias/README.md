---
description: Les Alias Dotfiles vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
lang: fr-FR
metaTitle: Les Alias Dotfiles - Dotfiles (FR)
permalink: /alias/

meta:
  - name: keywords
    content: alias, archives, cd, chmod, clear, commands, default, dig, dotfiles, du, editor, find, gcloud, git, gnu, heroku, interactive, jekyll, list, make, mkdir, npm, pnpm, ps, rsync, rust, shell, subversion, sudo, tmux, typing, update, uuid, wget
  - name: twitter:card
    content: Les Alias Dotfiles vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
  - name: twitter:description
    content: Les Alias Dotfiles vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
  - name: twitter:title
    content: Les Alias Dotfiles - Dotfiles (FR)
  - name: og:title
    content: Les Alias Dotfiles - Dotfiles (FR)
  - name: og:description
    content: Les Alias Dotfiles vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les Alias Dotfiles

Les alias vous donnent la possibilité de créer des raccourcis pour les commandes
du shell que vous utilisez fréquemment. Cela vous permettra d'être plus
productif et efficace en réduisant le nombre de frappes que vous devez
effectuer lorsque vous utilisez régulièrement le shell. Par exemple, au lieu de
taper `git status`, vous pouvez utiliser le raccourci `gst` pour obtenir le même
résultat.

C'est un excellent moyen de gagner du temps et de réduire considérablement la
quantité de frappe que vous devez faire lorsque vous utilisez le shell
régulièrement, vous permettant d'être plus productif et efficace.

## Préréglages

Les Dotfiles disposent d'une collection de préréglages de configuration et de
recettes variées que vous pouvez utiliser pour vous aider à démarrer.

### Détection automatique du système

Les Dotfiles contiennent une fonction utilitaire pour détecter la version de
`ls` qui est disponible afin d'aider à configurer les variables d'environnement
`LS_COLORS` appropriées à votre système.

La variable d'environnement `LS_COLORS` est par la suite utilisée par la
commande `ls` pour colorer le texte de sortie.

### Vérifier les alias intégrés

Tapez la commande alias suivante dans votre terminal :

```bash
alias
```

### Les alias utilitaires de recherche GNU

Les systèmes macOS sont basés sur BSD, plutôt que sur GNU/Linux comme RedHat,
Debian, et Ubuntu. Par conséquent, de nombreux outils de ligne de commande
fournis avec macOS ne sont pas 100% compatibles. Par exemple, la commande `find`
sous macOS ne supporte pas l'option `-printf` qui est utilisée par la commande
`locate`. Cela signifie que la commande `locate` ne fonctionne pas sous macOS.
Pour résoudre ce problème, vous pouvez installer les versions GNU de ces
commandes, qui sont entièrement compatibles avec les versions Linux.

Les utilitaires de recherche GNU (GNU Find Utilities) sont des utilitaires de
base de recherche de répertoire du système d'exploitation GNU. Ces programmes
sont généralement utilisés en conjonction avec d'autres programmes pour fournir
des capacités de recherche de répertoires modulaires et puissantes.

Les outils fournis avec ce pack sont :

- find - recherche de fichiers dans une hiérarchie de répertoires
- locate - lister les fichiers des bases de données qui correspondent à un
  modèle
- updatedb - mettre à jour une base de données de noms de fichiers
- xargs - construire et exécuter des lignes de commande à partir de l'entrée
  standard

Tapez la commande alias suivante dans votre terminal :

```bash
brew install findutils
```

### Les Alias Dotfiles

Les fichiers fournis dans Dotfiles contiennent quelques alias qui peuvent vous
être utiles. Ceux-ci sont définis dans le répertoire `./dist/lib/aliases` et
sont chargés automatiquement lorsque vous démarrez une nouvelle session shell.

Les alias sont chargés soit par le fichier `~/.bashrc` si vous utilisez le
shell Bash ou dans le fichier `~/.zshrc` si vous utilisez le shell Zsh.

Ils ont été regroupés par catégories logiques :

- [Les alias cd][cd] - Les alias cd vous permettent de naviguer rapidement dans votre système de fichiers.
- [Les alias chmod][chmod] - Les alias chmod vous permettent de modifier rapidement les permissions des fichiers.
- [Les alias clear][clear] - Les alias clear vous permettent de nettoyer rapidement votre terminal.
- [Les alias d'archivage][archives] Les alias d'archivage vous permettent de créer rapidement des archives.
- [Les alias de l'éditeur système][editeur] - Les alias de l'éditeur système vous permettent d'éditer rapidement des fichiers.
- [Les alias de liste][liste] - Les alias de liste vous permettent de lister rapidement des fichiers.
- [Les alias de mise à jour][mise-a-jour] - Les alias de mise à jour vous permettent de mettre à jour rapidement votre système.
- [Les alias de recherche][recherche] - Les alias de recherche vous permettent de rechercher rapidement des fichiers.
- [Les alias dig][dig] - Les alias dig vous permettent de rechercher rapidement des informations DNS.
- [La commande dot][dot] - L'interface unifiée pour gérer vos dotfiles.
- [Les alias du][du] - Les alias du vous permettent de rechercher rapidement l'espace disque utilisé.
- [Les alias en mode interactif][mode-interactif] - Les alias en mode interactif vous permettent de lancer rapidement des commandes interactives.
- [Les alias gcloud][gcloud] - Les alias gcloud vous permettent de lancer rapidement des commandes gcloud.
- [Les alias git][git] - Les alias git vous permettent de lancer rapidement des commandes git.
- [Les alias GNU Coreutils][gnu] - Les alias GNU Coreutils vous permettent de lancer rapidement des commandes GNU.

- [Les alias jekyll][jekyll] - Les alias jekyll vous permettent de lancer rapidement des commandes jekyll.
- [Les alias make][make] - Les alias pour make.
- [Les alias mkdir][mkdir] - Les alias mkdir vous permettent de créer rapidement des répertoires.
- [Le Noyau Moderne][modern-core] - Outils haute performance (Atuin, Yazi, Zellij).
- [Les alias npm][npm] - Les alias npm vous permettent de lancer rapidement des commandes npm.
- [Les alias par défaut][default] - Les alias par défaut vous permettent de lancer rapidement des commandes.
- [Les alias pnpm][pnpm] - Les alias pnpm vous permettent de lancer rapidement des commandes pnpm.
- [Les alias ps][ps] - Les alias ps vous permettent de rechercher rapidement des processus.
- [Les alias rsync][rsync] - Les alias rsync vous permettent de synchroniser rapidement des répertoires.
- [Les alias rust][rust] - Les alias rust vous permettent de lancer rapidement des commandes rust.
- [Les alias subversion][subversion] - Les alias subversion vous permettent de lancer rapidement des commandes subversion.
- [Les alias sudo][sudo] - Les alias sudo vous permettent de lancer rapidement des commandes sudo.
- [Les alias tmux][tmux] - Les alias tmux vous permettent de lancer rapidement des commandes tmux.
- [Les alias uuid][uuid] - Les alias uuid vous permettent de générer rapidement des UUID.
- [Les alias wget][wget] - Les alias wget vous permettent de télécharger rapidement des fichiers.

[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[editeur]: ./editeur/
[liste]: ./liste/
[mise-a-jour]: ./mise-a-jour/
[recherche]: ./recherche/
[dig]: ./dig/
[dot]: ./dot/
[du]: ./du/
[mode-interactif]: ./mode-interactif/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/

[jekyll]: ./jekyll/
[make]: ./make/
[mkdir]: ./mkdir/
[modern-core]: ./modern-core/
[npm]: ./npm/
[default]: ./default/
[pnpm]: ./pnpm/
[ps]: ./ps/
[rsync]: ./rsync/
[rust]: ./rust/
[subversion]: ./subversion/
[sudo]: ./sudo/
[tmux]: ./tmux/
[uuid]: ./uuid/
[wget]: ./wget/
