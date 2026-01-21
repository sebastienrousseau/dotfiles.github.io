---
description: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
lang: de-DE
metaTitle: The PNpm aliases - Dotfiles (DE)
permalink: /de/aliases/pnpm/

meta:
  - name: keywords
    content: aliases, pnpm, package manager, node, npm, yarn, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
  - name: twitter:description
    content: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
  - name: twitter:title
    content: The PNpm aliases - Dotfiles (DE)
  - name: og:title
    content: The PNpm aliases - Dotfiles (DE)
  - name: og:description
    content: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# PNpm aliases

This `pnpm.aliases.sh` file creates helpful shortcut aliases for many
commonly used [PNpm](https://pnpm.io) commands.

The PNpm aliases are a collection of aliases that allow you to interact with the
`pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.

## PNpm

[PNpm](https://pnpm.io) is a package manager for JavaScript and Node.js. It
is fast, disk space efficient, and reliable.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ------------------------------------ | -------------------------------------------------------- |
| pna   | `pnpm add`                           | Hinzufügen a package to the project                             |
| pnad  | `pnpm add --save-dev`                | Hinzufügen a package to the project as a development dependency |
| pnap  | `pnpm add --save-peer`               | Hinzufügen a package to the project as a peer dependency        |
| pnau  | `pnpm audit`                         | Audit the project for vulnerabilities                    |
| pnb   | `pnpm run build`                     | Bauen the project                                        |
| pnc   | `pnpm create`                        | Erstellen a new project                                     |
| pnd   | `pnpm run dev`                       | Run the project in development mode                      |
| pndoc | `pnpm run doc`                       | Generate documentation for the project                   |
| pnga  | `pnpm add --global`                  | Hinzufügen a package to the global store                        |
| pngls | `pnpm list --global`                 | Auflisten packages in the global store                        |
| pngrm | `pnpm remove --global`               | Entfernen a package from the global store                   |
| pngu  | `pnpm update --global`               | Aktualisieren a package in the global store                     |
| pnh   | `pnpm help`                          | Zeigen help for a command                                  |
| pni   | `pnpm init`                          | Initialisieren a new project                                 |
| pnin  | `pnpm install`                       | Installieren the project's dependencies                       |
| pnln  | `pnpm run lint`                      | Runs `pnpm run lint`                                     |
| pnls  | `pnpm list`                          | Auflisten packages in the project                             |
| pnout | `pnpm outdated`                      | Prüfen for outdated packages                              |
| pnp   | `pnpm`                               | Run a PNpm command                                       |
| pnpub | `pnpm publish`                       | Publish the project                                      |
| pnrm  | `pnpm remove`                        | Entfernen a package from the project                        |
| pnrun | `pnpm run`                           | Run a script in the project                              |
| pns   | `pnpm run serve`                     | Run the project in production mode                       |
| pnst  | `pnpm start`                         | Starten the project                                        |
| pnsv  | `pnpm server`                        | Starten the project's development server                   |
| pnt   | `pnpm test`                          | Run the project's tests                                  |
| pntc  | `pnpm test --coverage`               | Run the project's tests with coverage                    |
| pnui  | `pnpm update --interactive`          | Aktualisieren packages interactively                            |
| pnuil | `pnpm update --interactive --latest` | Aktualisieren packages interactively to the latest version      |
| pnun  | `pnpm uninstall`                     | Entfernen a package from the project                        |
| pnup  | `pnpm update`                        | Aktualisieren packages in the project                           |
| pnwhy | `pnpm why`                           | Zeigen why a package is installed                          |
| pnx   | `pnpx`                               | Run a PNpx command                                       |
