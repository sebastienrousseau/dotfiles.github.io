---
description: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
lang: de-DE
metaTitle: The Subversion aliases - Dotfiles (DE)
permalink: /de/aliases/subversion/

meta:
  - name: keywords
    content: aliases, subversion, svn, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: twitter:description
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: twitter:title
    content: The Subversion aliases - Dotfiles (DE)
  - name: og:title
    content: The Subversion aliases - Dotfiles (DE)
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

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| sad   | `svn add`        | Put new Dateien and directories under version control                                                     |
| sau   | `svn auth`       | Verwalten cached authentication credentials                                                                |
| sbl   | `svn blame`      | Zeigen when each line of a Datei was last (or next) changed                                                |
| scg   | `svn changelist` | Associate (or dissociate) changelist CLNAME with the named Dateien                                        |
| sco   | `svn checkout`   | Prüfen out a working Kopieren from a repository                                                              |
| scl   | `svn cleanup`    | Either recover from an interrupted operation that left the working Kopieren locked, or Entfernen unwanted Datei |
| sci   | `svn commit`     | Send changes from your working Kopieren to the repository                                                   |
| scp   | `svn copy`       | Kopieren Dateien and directories in a working Kopieren or repository                                              |
| sct   | `svn cat`        | Output the content of specified Dateien or URLs                                                           |
| sdi   | `svn diff`       | Display local changes or differences between two revisions or paths                                     |
| sdl   | `svn delete`     | Entfernen Dateien and directories from version control                                                       |
| shp   | `svn help`       | Describe the usage of this program or its subcommands                                                   |
| sin   | `svn info`       | Display information about a local or remote item                                                        |
| sip   | `svn import`     | Commit an un-versioned Datei or tree into the repository                                                 |
| slg   | `svn log`        | Zeigen the log messages for a set of revision(s) and/or path(s)                                           |
| slk   | `svn lock`       | Lock working Kopieren paths or URLs in the repository, no other user can commit changes to them             |
| sls   | `svn list`       | Auflisten Verzeichnis entries in the repository                                                                |
| smd   | `svn mkdir`      | Erstellen a new Verzeichnis under version control                                                            |
| smg   | `svn merge`      | Merge changes into a working Kopieren                                                                       |
| smgi  | `svn mergeinfo`  | Display merge-related information                                                                       |
| smv   | `svn move`       | Bewegen (Umbenennen) an item in a working Kopieren or repository                                                   |
| sp    | `svn propset`    | Set the value of a property on Dateien, dirs, or revisions                                                |
| spdl  | `svn propdel`    | Entfernen a property from Dateien, dirs, or revisions                                                        |
| spdt  | `svn propedit`   | Edit a property with an external editor                                                                 |
| spgt  | `svn propget`    | Drucken the value of a property on Dateien, dirs, or revisions                                              |
| sph   | `svn patch`      | Apply a patch to a working Kopieren                                                                         |
| spls  | `svn proplist`   | Auflisten all properties on Dateien, dirs, or revisions                                                        |
| srl   | `svn relocate`   | Relocate the working Kopieren to point to a different repository root URL                                   |
| srs   | `svn resolve`    | Resolve conflicts on working Kopieren Dateien or directories                                                  |
| srsd  | `svn resolved`   | Entfernen 'conflicted' state on working Kopieren Dateien or directories                                          |
| srv   | `svn revert`     | Restore pristine working Kopieren state (rückgängig machen local changes)                                                |
| sst   | `svn status`     | Drucken the status of working Kopieren Dateien and directories                                                  |
| ssw   | `svn switch`     | Aktualisieren the working Kopieren to a different URL within the same repository                                   |
| sulk  | `svn unlock`     | Unlock working Kopieren paths or URLs.                                                                      |
| sup   | `svn update`     | Bring changes from the repository into the working Kopieren                                                 |
| supg  | `svn upgrade`    | Upgrade the metadata storage format for a working Kopieren                                                  |
| sxp   | `svn export`     | Erstellen an un-versioned Kopieren of a tree                                                                   |
