---
description: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
lang: zh-CN
metaTitle: The Subversion aliases - Dotfiles (CN)
permalink: /zh/aliases/subversion/

meta:
  - name: keywords
    content: aliases, subversion, svn, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: twitter:description
    content: The Subversion aliases are a collection of aliases that allow you to interact with the `svn` command. Subversion is a version control system, which allows you to keep old versions of files and directories (usually source code), keep a log of who, when, and why changes occurred.
  - name: twitter:title
    content: The Subversion aliases - Dotfiles (CN)
  - name: og:title
    content: The Subversion aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| sad   | `svn add`        | Put new 文件 and directories under version control                                                     |
| sau   | `svn auth`       | 管理 cached authentication credentials                                                                |
| sbl   | `svn blame`      | 显示 when each line of a 文件 was last (or next) changed                                                |
| scg   | `svn changelist` | Associate (or dissociate) changelist CLNAME with the named 文件                                        |
| sco   | `svn checkout`   | 检查 out a working 复制 from a repository                                                              |
| scl   | `svn cleanup`    | Either recover from an interrupted operation that left the working 复制 locked, or 移除 unwanted 文件 |
| sci   | `svn commit`     | Send changes from your working 复制 to the repository                                                   |
| scp   | `svn copy`       | 复制 文件 and directories in a working 复制 or repository                                              |
| sct   | `svn cat`        | Output the content of specified 文件 or URLs                                                           |
| sdi   | `svn diff`       | Display local changes or differences between two revisions or paths                                     |
| sdl   | `svn delete`     | 移除 文件 and directories from version control                                                       |
| shp   | `svn help`       | Describe the usage of this program or its subcommands                                                   |
| sin   | `svn info`       | Display information about a local or remote item                                                        |
| sip   | `svn import`     | Commit an un-versioned 文件 or tree into the repository                                                 |
| slg   | `svn log`        | 显示 the log messages for a set of revision(s) and/or path(s)                                           |
| slk   | `svn lock`       | Lock working 复制 paths or URLs in the repository, no other user can commit changes to them             |
| sls   | `svn list`       | 列出 目录 entries in the repository                                                                |
| smd   | `svn mkdir`      | 创建 a new 目录 under version control                                                            |
| smg   | `svn merge`      | Merge changes into a working 复制                                                                       |
| smgi  | `svn mergeinfo`  | Display merge-related information                                                                       |
| smv   | `svn move`       | 移动 (重命名) an item in a working 复制 or repository                                                   |
| sp    | `svn propset`    | Set the value of a property on 文件, dirs, or revisions                                                |
| spdl  | `svn propdel`    | 移除 a property from 文件, dirs, or revisions                                                        |
| spdt  | `svn propedit`   | Edit a property with an external editor                                                                 |
| spgt  | `svn propget`    | 打印 the value of a property on 文件, dirs, or revisions                                              |
| sph   | `svn patch`      | Apply a patch to a working 复制                                                                         |
| spls  | `svn proplist`   | 列出 all properties on 文件, dirs, or revisions                                                        |
| srl   | `svn relocate`   | Relocate the working 复制 to point to a different repository root URL                                   |
| srs   | `svn resolve`    | Resolve conflicts on working 复制 文件 or directories                                                  |
| srsd  | `svn resolved`   | 移除 'conflicted' state on working 复制 文件 or directories                                          |
| srv   | `svn revert`     | Restore pristine working 复制 state (撤消 local changes)                                                |
| sst   | `svn status`     | 打印 the status of working 复制 文件 and directories                                                  |
| ssw   | `svn switch`     | 更新 the working 复制 to a different URL within the same repository                                   |
| sulk  | `svn unlock`     | Unlock working 复制 paths or URLs.                                                                      |
| sup   | `svn update`     | Bring changes from the repository into the working 复制                                                 |
| supg  | `svn upgrade`    | Upgrade the metadata storage format for a working 复制                                                  |
| sxp   | `svn export`     | 创建 an un-versioned 复制 of a tree                                                                   |
