---
description: Un ensemble de fichiers de configuration Bash pour macOS, Linux et Windows, que vous pouvez utiliser pour personnaliser votre shell et vos applications. Tous ces fichiers sont réunis dans un seul endroit, et prêts à l'emploi.
lang: fr-FR
metaTitle: À propos - Dotfiles (FR)
permalink: /apropos/

meta:
  - name: keywords
    content: bash, configuration, macos, linux, windows, shell, applications, fichiers, prêts
  - name: twitter:card
    content: Un ensemble de fichiers de configuration Bash pour macOS, Linux et Windows, que vous pouvez utiliser pour personnaliser votre shell et vos applications. Tous ces fichiers sont réunis dans un seul endroit, et prêts à l'emploi.
  - name: twitter:description
    content: Un ensemble de fichiers de configuration Bash pour macOS, Linux et Windows, que vous pouvez utiliser pour personnaliser votre shell et vos applications. Tous ces fichiers sont réunis dans un seul endroit, et prêts à l'emploi.
  - name: twitter:title
    content: À propos - Dotfiles (FR)
  - name: og:title
    content: À propos - Dotfiles (FR)
  - name: og:description
    content: Un ensemble de fichiers de configuration Bash pour macOS, Linux et Windows, que vous pouvez utiliser pour personnaliser votre shell et vos applications. Tous ces fichiers sont réunis dans un seul endroit, et prêts à l'emploi.
  - name: og:image:alt
    content: Les fichiers de configuration Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---


# Bienvenue à Dotfiles v0.2.462

## Introduction

Les Dotfiles sont un ensemble de fichiers de configuration Bash pour macOS,
Linux et Windows, que vous pouvez utiliser pour personnaliser votre shell et vos
applications. Tous ces fichiers sont réunis dans un seul endroit, et prêts à
l'emploi.

Les Dotfiles se trouvent dans votre répertoire personnel, ce qui vous permet de
les garder sous contrôle de version, et vous pouvez les utiliser sur n'importe
quel ordinateur, n'importe où.

Ils regroupent un ensemble de fichiers combinés en un seul répertoire `lib`. Ils
offrent des alias très pratiques, des fonctions et quelques configurations
prêtes à l'emploi, conçus pour obtenir de meilleurs résultats avec votre shell.

Essayez-les dès maintenant, et faites-nous savoir ce que vous en pensez. Nous
sommes toujours à la recherche de commentaires et de suggestions pour améliorer
nos produits et services.

## Démarrage

Nous sommes ravis que vous ayez décidé d'essayer les Dotfiles, et nous sommes
confiants que vous les trouverez utiles et uniques.

Nous vous proposons une série de méthodes d'installation pour vous aider à
commencer. Nous vous recommandons de choisir celle qui correspond le mieux à
vos besoins.

::: tip
Avant de commencer votre installation, veuillez consulter les instructions
ci-dessous pour vous assurer que vous répondez à toutes les exigences
matérielles, logicielles et de système pour installer les Dotfiles sur votre
ordinateur et sauvegarder tout fichier de configuration que vous pourriez avoir.
:::

### :one: Configuration matérielle requise

Pour installer les Dotfiles, nous vous recommandons d'utiliser une version
récente de macOS, Linux ou Windows pour de meilleures performances, sécurité et
compatibilité.

### :two: Configuration logiciel requise

Les Dotfiles ont des dépendances logicielles qui doivent être installées avant
de pouvoir les utiliser. Ces dépendances sont listées ci-dessous.

1. Un interpréteur de commandes en ligne ([**Bash**][bash-url] ou
   [**Zsh**][zsh-url]), pour exécuter les scripts de configuration et les
   fonctions.
2. [**Git**][git-url] (2.0 ou plus), pour cloner le code source et mettre à jour
   les Dotfiles.
3. [**Curl**][curl-url] (7.0 ou plus) or [**Wget**][wget-url] (1.0 ou plus),
   pour télécharger les fichiers de configuration depuis les scripts
   d'installation.
4. [**Make**][make-url] (3.0 ou plus) ou [**PnPM**][pnpm-url] (6.0 ou plus),
   pour installer les Dotfiles via Make ou PnPM.
5. [**Tmux**][tmux-url] (2.0 ou plus), un outil vous permettant de manipuler
   plusieurs terminaux virtuels au sein d'une même fenêtre de terminal.

### :three: La Police de caractères recommandée

Nous recommandons également d'utiliser une police de caractères open source
telle que [**JetBrains Mono**][font-url] pour une meilleure expérience sur votre
terminal, IDE ou éditeur de texte.

- Sur macOS, vous pouvez installer la police en exécutant la commande suivante
  dans votre terminal :

  ```bash
  brew tap homebrew/cask-fonts && brew install --cask font-jetbrains-mono
  ```

- Sur les distributions Linux basées sur Debian, vous pouvez installer la police
  en exécutant la commande suivante dans votre terminal :

  ```bash
  sudo apt install fonts-jetbrains-mono
  ```

## Installation

### :one: Sauvegardez vos données

::: warning
Nous vous recommandons vivement de sauvegarder vos données. C'est toujours une
bonne idée de faire une sauvegarde car il peut y avoir des situations dans
lesquelles vous pourriez être amené à restaurer votre installation précédente.
:::

Le programme d'installation des Dotfiles est conçu pour sauvegarder vos fichiers
de configuration existants, dans un répertoire de sauvegarde
`$HOME/dotfiles_backup`.

La liste des fichiers de configuration sauvegardés est la suivante :

```bash
.alias
.bash_aliases
.bash_profile
.bash_prompt
.bashrc
.curlrc
.dir_colors
.exports
.functions
.gitattributes
.gitconfig
.gitignore
.gitmessage
.inputrc
.npmrc
.path
.profile
.tmux.conf
.vimrc
.wgetrc
.yarnrc
.zshenv
.zshrc
cacert.pem
```

### :two: Téléchargement

Vous pouvez télécharger la dernière version des Dotfiles (v0.2.462) en utilisant
l'une des méthodes suivantes :

- [**Téléchargement manuel**][releases-url] - Installez les Dotfiles en
  téléchargeant le fichier archive du code source,
- [**En utilisant PnPM**][github-url] - Installez les Dotfiles en utilisant PnPM
  `pnpm i @sebastienrousseau/dotfiles`,
- [**En utilisant Npm**][github-url] - Installez les Dotfiles en utilisant Npm
  `npm install @sebastienrousseau/dotfiles`,
- [**En utilisant Yarn**][github-url] - Installez les Dotfiles en utilisant Yarn
  `yarn add @sebastienrousseau/dotfiles`,
- [**En utilisant Git**][git-url] - Clonez le dépôt Dotfiles depuis GitHub
  `git clone https://github.com/sebastienrousseau/dotfiles.git`.

### :three: Installation en utilisant Make

La manière la plus simple d'installer Dotfiles est d'utiliser la commande `make`
dans votre shell. Cela installera la dernière version des Dotfiles et
sauvegardera automatiquement tous les fichiers dotfiles dans un répertoire de
sauvegarde `$HOME/dotfiles_backup`.

Allez dans le répertoire `dotfiles-0.2.462` que vous avez téléchargé et exécutez
:

```bash
make build
```

Vous pouvez également vérifier les options du programme d'installation, en
exécutant tout simplement :

```bash
make help
```

### :four: Installation avec Node.js

Si vous voulez installer Dotfiles en utilisant Node.js, allez dans le répertoire
`dotfiles-0.2.462` et exécutez :

```bash
node .
```

### :five: Installation avec PnPM

Si vous voulez installer Dotfiles en utilisant PnPM, allez dans le répertoire
`dotfiles-0.2.462` et exécutez :

```bash
pnpm run build
```

### :six: Après l'installation

Vérifier que les dotfiles sont bien installés dans le répertoire
`$HOME/.dotfiles`. Pour compléter l'installation,redémarrer votre terminal.

Si l'installation est réussie, vous devriez voir la nouvelle interface Dotfiles
dans votre shell.

## Contenu

Les Dotfiles contiennent des éléments de base qui sont utilisés pour configurer
votre shell, et d'autres composants adaptés à la configuration de votre
environnement.

Dans le dossier `$HOME/.dotfiles`, vous trouverez les répertoires et fichiers
suivants :

```bash
.
└── lib
    ├── aliases
    │   ├── default
    │   │   └── default.aliases.sh
    │   ├── gcloud
    │   │   └── gcloud.aliases.sh
    │   ├── git
    │   │   └── git.aliases.sh
    │   ├── heroku
    │   │   └── heroku.aliases.sh
    │   ├── jekyll
    │   │   └── jekyll.aliases.sh
    │   ├── pnpm
    │   │   └── pnpm.aliases.sh
    │   ├── subversion
    │   │   └── subversion.aliases.sh
    │   └── tmux
    │       └── tmux.aliases.sh
    ├── configurations
    │   ├── bash
    │   │   └── bashrc
    │   ├── curl
    │   │   ├── cacert.pem
    │   │   └── curlrc
    │   ├── default
    │   │   ├── color.sh
    │   │   ├── constants.sh
    │   │   ├── editor.sh
    │   │   └── prompt.sh
    │   ├── gem
    │   │   └── gemrc
    │   ├── input
    │   │   └── inputrc
    │   ├── jshint
    │   │   └── jshintrc
    │   ├── nano
    │   │   └── nanorc
    │   ├── profile
    │   │   └── profile
    │   ├── tmux
    │   │   ├── default
    │   │   ├── display
    │   │   ├── linux
    │   │   ├── navigation
    │   │   ├── panes
    │   │   ├── theme
    │   │   ├── tmux
    │   │   └── vi
    │   ├── vim
    │   │   └── vimrc
    │   ├── wget
    │   │   └── wgetrc
    │   ├── zsh
    │   │   └── zshrc
    │   └── README.md
    ├── functions
    │   ├── README.md
    │   ├── cdls.sh
    │   ├── curlheader.sh
    │   ├── curltime.sh
    │   ├── encode64.sh
    │   ├── environment.sh
    │   ├── extract.sh
    │   ├── filehead.sh
    │   ├── genpwd.sh
    │   ├── goto.sh
    │   ├── hidehiddenfiles.sh
    │   ├── hostinfo.sh
    │   ├── hstats.sh
    │   ├── httpdebug.sh
    │   ├── keygen.sh
    │   ├── last.sh
    │   ├── logout.sh
    │   ├── lowercase.sh
    │   ├── macos.sh
    │   ├── matrix.sh
    │   ├── mcd.sh
    │   ├── mount_read_only.sh
    │   ├── myproc.sh
    │   ├── prependpath.sh
    │   ├── ql.sh
    │   ├── rd.sh
    │   ├── remove_disk.sh
    │   ├── ren.sh
    │   ├── showhiddenfiles.sh
    │   ├── size.sh
    │   ├── stopwatch.sh
    │   ├── uppercase.sh
    │   ├── view-source.sh
    │   ├── vscode.sh
    │   ├── whoisport.sh
    │   └── zipf.sh
    ├── paths
    │   ├── ant
    │   │   └── ant.paths.sh
    │   ├── default
    │   │   └── default.paths.sh
    │   ├── homebrew
    │   │   └── homebrew.paths.sh
    │   ├── java
    │   │   └── java.paths.sh
    │   ├── maven
    │   │   └── maven.paths.sh
    │   ├── node
    │   │   └── node.paths.sh
    │   ├── nvm
    │   │   └── nvm.paths.sh
    │   ├── pnpm
    │   │   └── pnpm.paths.sh
    │   ├── python
    │   │   └── python.paths.sh
    │   ├── ruby
    │   │   └── ruby.paths.sh
    │   └── tmux
    │       └── tmux.paths.sh
    ├── README.md
    ├── aliases.sh
    ├── configurations.sh
    ├── exit.sh
    ├── functions.sh
    ├── history.sh
    └── paths.sh

36 directories, 86 files

```

## Les Publications

Les publications des Dotfiles sont disponibles sur [GitHub][releases-url].

## Versionnage sémantique

Dans un souci de transparence de notre cycle de publication et dans le but de
maintenir les Dotfiles suivent les principes de
[versionnage sémantique][semver-url].

## Liste des modifications

- [Le Journal des modifications GitHub][releases-url] est utilisé pour suivre
  les différentes versions des Dotfiles et leurs changements.

## Code de conduite

Nous nous engageons à préserver et à favoriser une communauté diversifiée et
accueillante. Vous pouvez lire notre [Code de conduite][code-of-conduct-url]
pour en savoir plus.

## Nos valeurs

- Nous pensons que la perfection fait partie de tout.
- Notre passion va au-delà du code et s’intègre dans notre vie quotidienne.
- Nous cherchons toujours à fournir des solutions exceptionnelles et innovantes.

## Contribution

Merci d'utiliser Dotfiles ! Si vous aimez ce projet, n'hésitez pas à nous donner
un coup de pouce en le notant sur [GitHub][github-url] ou en le partageant avec
vos amis et collègues.

Il existe également d'autres façons de contribuer, comme :

- [Soumettre des bogues et des demandes de fonctionnalités][issues-url], vous
  pouvez même nous aider à les résoudre et faire partie de la communauté.
- Vérifiez notre [documentation][docs-url] et traductions pour nous aider à
  améliorer la qualité de notre contenu.
- [Faire un don][donate-url] pour nous aider à continuer à améliorer le projet
  ou payer pour un café.

Veuillez lire attentivement nos [guides de contribution][contributing-url]
pour de plus amples informations sur notre processus de développement et sur
la façon de soumettre des demandes de fonctionnalités ou des rapports de bogues.

## Licence d'utilisation

Ce projet est soumis à la licence [MIT][license-url].

## Remerciements

[Dotfiles][website-url] est conçu par ces personnes et par un groupe de
[collaborateurs][contributors-url] extraordinaires.

| [![sr]][sr-url] | [![gr]][gr-url] |
|:-----------------:|:------------------------------------:|
| [Sebastien Rousseau][sr-url]| [Graham Colgate][gr-url] |

[bash-url]: https://www.gnu.org/software/bash/
[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
[curl-url]: https://curl.se/
[docs-url]: https://github.com/sebastienrousseau/dotfiles/tree/master/docs
[donate-url]: https://paypal.me/wwdseb
[font-url]: https://www.jetbrains.com/lp/mono/#intro
[git-url]: https://git-scm.com/
[github-url]: https://github.com/sebastienrousseau/dotfiles
[gr-url]: https://github.com/gramtech
[issues-url]: https://github.com/sebastienrousseau/dotfiles/issues
[license-url]: https://opensource.org/licenses/MIT
[make-url]: https://www.gnu.org/software/make/
[pnpm-url]: https://pnpm.io
[releases-url]: https://github.com/sebastienrousseau/dotfiles/releases
[semver-url]: http://semver.org/
[sr-url]: https://github.com/sebastienrousseau
[tmux-url]: https://github.com/tmux/tmux/wiki
[website-url]: https://dotfiles.io
[wget-url]: https://www.gnu.org/software/wget/
[zsh-url]: https://www.zsh.org/

[contributors-url]: https://github.com/sebastienrousseau/dotfiles/graphs/contributors "List of contributors"
[gr]: https://avatars0.githubusercontent.com/u/35816108?s=117 "Graham Colgate"
[sr]: https://avatars0.githubusercontent.com/u/1394998?s=117 "Sebastien Rousseau"
