---
description: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
lang: es-ES
metaTitle: The Subversion aliases - Dotfiles (ES)
permalink: /es/aliases/subversion/

meta:
  - name: keywords
    content: aliases, subversion, svn, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: twitter:description
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: twitter:title
    content: The Subversion aliases - Dotfiles (ES)
  - name: og:title
    content: The Subversion aliases - Dotfiles (ES)
  - name: og:description
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Subversion aliases

This `subversion.aliases.sh` file creates helpful shortcut aliases for many
commonly used [Subversion](https://subversion.apache.org) commands.

The Subversion aliases are a collection of aliases that allow you to interact
with the `svn` command. Subversion is a version control system, which allows you
to keep old versions of files and directories (usually source code), keep a log
of who, when, and why changes occurred.

## Subversion

[Subversion](https://subversion.apache.org) is a version control system that
tracks changes to files and directories. It is used to manage source code for
software projects.

| Alias | Comando               | Descripción                                                                |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| sad   | `svn add`        | Put new archivos and directories under version control                                                     |
| sau   | `svn auth`       | Gestionar cached authentication credentials                                                                |
| sbl   | `svn blame`      | Mostrar when each line of a archivo was last (or next) changed                                                |
| scg   | `svn changelist` | Associate (or dissociate) changelist CLNAME with the named archivos                                        |
| sco   | `svn checkout`   | Comprobar out a working Copiar from a repository                                                              |
| scl   | `svn cleanup`    | Either recover from an interrupted operation that left the working Copiar locked, or Eliminar unwanted archivo |
| sci   | `svn commit`     | Send changes from your working Copiar to the repository                                                   |
| scp   | `svn copy`       | Copiar archivos and directories in a working Copiar or repository                                              |
| sct   | `svn cat`        | Output the content of specified archivos or URLs                                                           |
| sdi   | `svn diff`       | Display local changes or differences between two revisions or paths                                     |
| sdl   | `svn delete`     | Eliminar archivos and directories from version control                                                       |
| shp   | `svn help`       | Describe the usage of this program or its subcommands                                                   |
| sin   | `svn info`       | Display information about a local or remote item                                                        |
| sip   | `svn import`     | Commit an un-versioned archivo or tree into the repository                                                 |
| slg   | `svn log`        | Mostrar the log messages for a set of revision(s) and/or path(s)                                           |
| slk   | `svn lock`       | Lock working Copiar paths or URLs in the repository, no other user can commit changes to them             |
| sls   | `svn list`       | Listar directorio entries in the repository                                                                |
| smd   | `svn mkdir`      | Crear a new directorio under version control                                                            |
| smg   | `svn merge`      | Merge changes into a working Copiar                                                                       |
| smgi  | `svn mergeinfo`  | Display merge-related information                                                                       |
| smv   | `svn move`       | Mover (Renombrar) an item in a working Copiar or repository                                                   |
| sp    | `svn propset`    | Set the value of a property on archivos, dirs, or revisions                                                |
| spdl  | `svn propdel`    | Eliminar a property from archivos, dirs, or revisions                                                        |
| spdt  | `svn propedit`   | Edit a property with an external editor                                                                 |
| spgt  | `svn propget`    | Imprimir the value of a property on archivos, dirs, or revisions                                              |
| sph   | `svn patch`      | Apply a patch to a working Copiar                                                                         |
| spls  | `svn proplist`   | Listar all properties on archivos, dirs, or revisions                                                        |
| srl   | `svn relocate`   | Relocate the working Copiar to point to a different repository root URL                                   |
| srs   | `svn resolve`    | Resolve conflicts on working Copiar archivos or directories                                                  |
| srsd  | `svn resolved`   | Eliminar 'conflicted' state on working Copiar archivos or directories                                          |
| srv   | `svn revert`     | Restore pristine working Copiar state (deshacer local changes)                                                |
| sst   | `svn status`     | Imprimir the status of working Copiar archivos and directories                                                  |
| ssw   | `svn switch`     | Actualizar the working Copiar to a different URL within the same repository                                   |
| sulk  | `svn unlock`     | Unlock working Copiar paths or URLs.                                                                      |
| sup   | `svn update`     | Bring changes from the repository into the working Copiar                                                 |
| supg  | `svn upgrade`    | Upgrade the metadata storage format for a working Copiar                                                  |
| sxp   | `svn export`     | Crear an un-versioned Copiar of a tree                                                                   |
