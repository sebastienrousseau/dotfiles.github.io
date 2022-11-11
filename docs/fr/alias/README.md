---
description: Les alias vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
lang: fr-FR
metaTitle: Les Alias - Dotfiles (FR)
permalink: /alias/

meta:
  - name: keywords
    content: alias, archives, cd, chmod, clear, commands, default, dig, dotfiles, du, editor, find, gcloud, git, gnu, heroku, interactive, jekyll, list, make, mkdir, npm, pnpm, ps, rsync, rust, shell, subversion, sudo, tmux, typing, update, uuid, wget
  - name: twitter:card
    content: Les alias vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
  - name: twitter:description
    content: Les alias vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
  - name: twitter:title
    content: Les Alias - Dotfiles (FR)
  - name: og:title
    content: Les Alias - Dotfiles (FR)
  - name: og:description
    content: Les alias vous donnent la possibilité de créer des raccourcis pour les commandes du shell que vous utilisez fréquemment. Cela vous permettra d'être plus productif et efficace en réduisant le nombre de frappes que vous devez effectuer lorsque vous utilisez régulièrement le shell.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---


# Les Alias

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

- [archives][archives] - Les alias pour travailler avec les fichiers d'archives.
- [cd][cd] - Les alias pour naviguer rapidement dans les répertoires.
- [chmod][chmod] - Les alias pour changer les permissions des fichiers.
- [clear][clear] - Les alias pour effacer le contenu de la console.
- [default][default] - Les alias par défaut.
- [dig][dig] - Les alias pour effectuer des requêtes DNS.
- [du][du] - Les alias pour afficher l'espace disque utilisé.
- [editor][editor] - Les alias pour ouvrir les fichiers dans votre éditeur
  préféré.
- [find][find] - Les alias pour rechercher des fichiers.
- [gcloud][gcloud] - Les alias pour gcloud.
- [git][git] - Les alias pour git.
- [gnu][gnu] - Les alias pour les utilitaires de recherche GNU.
- [heroku][heroku] - Les alias pour heroku.
- [interactive][interactive] - Les alias pour les commandes interactives.
- [jekyll][jekyll] - Les alias pour jekyll.
- [list][list] - Les alias pour lister les fichiers.
- [make][make] - Les alias pour make.
- [mkdir][mkdir] - Les alias pour créer des répertoires.
- [npm][npm] - Les alias pour npm.
- [pnpm][pnpm] - Les alias pour pnpm.
- [ps][ps] - Les alias pour afficher les processus.
- [rsync][rsync] - Les alias pour rsync.
- [rust][rust] - Les alias pour rust.
- [subversion][subversion] - Les alias pour subversion.
- [sudo][sudo] - Les alias pour sudo.
- [tmux][tmux] - Les alias pour tmux.
- [update][update] - Les alias pour mettre à jour les outils système.
- [uuid][uuid] - Les alias pour générer des UUID.
- [wget][wget] - Les alias pour wget.

[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[default]: ./default/
[dig]: ./dig/
[du]: ./du/
[editor]: ./editor/
[find]: ./find/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/
[heroku]: ./heroku/
[interactive]: ./interactive/
[jekyll]: ./jekyll/
[list]: ./list/
[make]: ./make/
[mkdir]: ./mkdir/
[npm]: ./npm/
[pnpm]: ./pnpm/
[ps]: ./ps/
[rsync]: ./rsync/
[rust]: ./rust/
[subversion]: ./subversion/
[sudo]: ./sudo/
[tmux]: ./tmux/
[update]: ./update/
[uuid]: ./uuid/
[wget]: ./wget/
