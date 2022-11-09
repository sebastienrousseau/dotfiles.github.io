---
description: A set of Bash configuration files for macOS, Linux and Windows, that you can use to customize your shell and applications. All in one place and ready to use.
lang: en-GB
metaTitle: About Dotfiles - Dotfiles (UK)
permalink: /about/

meta:
  - name: keywords
    content: bash, best performance, compatibility, configuration, dotfiles, linux, macos, security, shell, standalone, windows
  - name: twitter:card
    content: A set of Bash configuration files for macOS, Linux and Windows, that you can use to customize your shell and applications. All in one place and ready to use.
  - name: twitter:description
    content: A set of Bash configuration files for macOS, Linux and Windows, that you can use to customize your shell and applications. All in one place and ready to use.
  - name: twitter:title
    content: About Dotfiles - Dotfiles (UK)
  - name: og:title
    content: About Dotfiles - Dotfiles (UK)
  - name: og:description
    content: A set of Bash configuration files for macOS, Linux and Windows, that you can use to customize your shell and applications. All in one place and ready to use.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Welcome to Dotfiles v0.2.462

## Introduction

A set of Bash configuration files for macOS, Linux and Windows, that you can use
to customize your shell and applications. All in one place and ready to use.

The Dotfiles live right in your home directory, so you can keep them under
version control, and you can use them on any computer, anywhere.

They aggregates a collection of standalone dotfiles combined into a single `lib`
directory located in your home directory `~/.dotfiles/lib`. They provide
convenient aliases, functions, and a few ready-to-use settings built for speed
and high performance for your shell.

Try them out and let us know what you think of Dotfiles. We are always looking
for ways to improve our products and services.

## Getting Started

We are so delighted that you have decided to try Dotfiles, and are sure that you
will find them unique and helpful.

We have provided a range of installation methods to help you get started. We
recommend that you choose the one that best suits your needs.

::: tip
But before you begin your installation, please use the below instructions to
ensure that you meet all the hardware, software, and system requirements for
installing Dotfiles on your computer and backup any current configuration files
you may have.
:::

### :one: System Requirements

You need a modern operating system to install Dotfiles and we recommend that you
use the latest version of macOS, Linux or Windows for best performance, security
and compatibility with the latest Dotfiles features.

### :two: Software Requirements

The latest version of the following software is required to install Dotfiles:

1. A command line shell ([**Bash**][bash-url] or [**Zsh**][zsh-url]), which is
  installed by default on macOS and Linux.
1. [**Git**][git-url] (2.0 or higher), for cloning the Dotfiles source code
   repository.
1. [**Curl**][curl-url] (7.0 or higher) or [**Wget**][wget-url] (1.0 or higher),
   for downloading the Dotfiles installer.
1. [**Make**][make-url] (3.0 or higher), for installing the Dotfiles.
1. [**PnPM**][pnpm-url] (6.0 or higher), for installing the Dotfiles.

### :three: Font Requirements

We also recommend using an open-source typeface such as `JetBrains Mono` for
configuring your terminal, and any IDEs or editors you may use.

JetBrains Mono is a free and open source typeface for developers designed to be
comfortable to read. It is available in a wide range of weights and styles, and
supports a wide range of programming languages.

- On macOS, you can install the font by simply typing the following command in
  your terminal:

  ```bash
  brew tap homebrew/cask-fonts && brew install --cask font-jetbrains-mono
  ```

- On Debian based Linux distributions, you can install the font using the
  following command:

  ```bash
  sudo apt install fonts-jetbrains-mono
  ```

## How to Install

### :one: Back Up Your Existing Data

::: tip
Before installing Dotfiles, we strongly recommend that you back up your existing
data. It is always a good idea to backup as there might be situations in which
you could be required to restore your previous installation.
:::

The Dotfiles installer will try to automatically backup any previous
installation of known dotfiles into a backup directory `$HOME/dotfiles_backup`.

The list of files that will be backed up are listed below. This list is not
exhaustive and may change over time as Dotfiles evolves.

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

### :two: Download Dotfiles

Download the latest version of Dotfiles (v0.2.462) through any of these methods:

- [**Manual Download**][releases-url] - Install Dotfiles by downloading the
  source code archive.
- [**Using PnPM**][github-url] - Install Dotfiles using PnPM
  `pnpm i @sebastienrousseau/dotfiles`,
- [**Using Npm**][github-url] - Install Dotfiles using Npm
  `npm install @sebastienrousseau/dotfiles`,
- [**Using Yarn**][github-url] - Install Dotfiles using Yarn
  `yarn add @sebastienrousseau/dotfiles`,
- [**Using Git**][git-url] - Clone the Dotfiles repository from GitHub
  `git clone https://github.com/sebastienrousseau/dotfiles.git`.

### :three: Installation using Make

The easiest way to install Dotfiles is to use the `make` command in your shell.
This will install the latest version of the dotfiles and will automatically try
to backup any existing dotfiles you may have into a dedicated backup directory
`$HOME/dotfiles_backup`.

Switch to the `dotfiles-0.2.462` directory that you have downloaded and run:

```bash
make build
```

You can also just check the installer options, by simply running:

```bash
make help
```

### :four: Installation using Node.js

If you want to install Dotfiles using Node.js, switch to the `dotfiles-0.2.462`
directory and run:

```bash
node .
```

### :five: Installation using PnPM

If you want to install Dotfiles using PnPM, switch to the `dotfiles-0.2.462`
directory and run:

```bash
pnpm run build
```

### :six: Post installation

Following the installation, you can now verify that the dotfiles are installed
in the following directory `$HOME/.dotfiles`. To complete the setup, just
restart your terminal.

If the installation is successful, you should be able to see the new Dotfiles
interface in your terminal and you can start using it right away.

## What's included

Dotfiles contains core elements that are used to configure your shell, and
other components catered for your environment setup.

Within the `$HOME/.dotfiles` folder, you will find the following directories and
files:

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

## Releases

Releases are available on the [GitHub releases page][releases-url].

## Semantic versioning policy

For transparency into our release cycle and in striving to maintain backward
compatibility, `Dotfiles` follows [Semantic Versioning][semver-url].

## Changelog

- [GitHub Releases][releases-url] are used for changelogs.

## Code of Conduct

We are committed to preserving and fostering a diverse, welcoming community.
Please read our [Code of Conduct][code-of-conduct-url].

## Our Values

- We believe perfection must consider everything.
- We take our passion beyond code into our daily practices.
- We are just obsessed about creating and delivering exceptional solutions.

## Contributing

Thank you for using Dotfiles! If you like the library, it would be
great if you can give it a star ⭐ on [Github][github-url].

There are also many ways in which you can participate in this project, for
example:

- [Submit bugs and feature requests][issues-url], and help us verify as they are
checked in,
- Review the [documentation][docs-url] and make pull requests for anything from
typos to additional and new content.

Please read carefully through our
[Contributing Guidelines][contributing-url]
for further details on the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License][license-url] file for details.

[![FOSSA Status][fossa]][fossa-url]

## Acknowledgements

[Dotfiles][website-url] is beautifully crafted by these people and a bunch of
awesome [contributors][contributors-url]

| [![sr]][sr-url] | [![gr]][gr-url] |
|:-----------------:|:------------------------------------:|
| [Sebastien Rousseau][sr-url]| [Graham Colgate][gr-url] |

[bash-url]: https://www.gnu.org/software/bash/
[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
[curl-url]: https://curl.se/
[docs-url]: https://github.com/sebastienrousseau/dotfiles/tree/master/docs
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Freedia%2Fdotfiles?ref=badge_large
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
[website-url]: https://dotfiles.io
[wget-url]: https://www.gnu.org/software/wget/
[zsh-url]: https://www.zsh.org/

[contributors-url]: https://github.com/sebastienrousseau/dotfiles/graphs/contributors "List of contributors"
[fossa]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Freedia%2Fdotfiles.svg?type=large "FOSSA"
[gr]: https://avatars0.githubusercontent.com/u/35816108?s=117 "Graham Colgate"
[sr]: https://avatars0.githubusercontent.com/u/1394998?s=117 "Sebastien Rousseau"
