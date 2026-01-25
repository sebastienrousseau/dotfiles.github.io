---
title: "Git Aliases: Streamline Your Version Control Workflow"
description: "Over 80 Git shell aliases for faster commits, branches, diffs, and remotes. Speed up your daily version control tasks."
lang: en-GB
metaTitle: Git Aliases | Dotfiles
permalink: /aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shortcuts, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Over 80 Git shell aliases for faster commits, branches, diffs, and remotes. Speed up your daily version control tasks."
  - name: twitter:title
    content: Git Aliases | Dotfiles
  - name: og:title
    content: Git Aliases | Dotfiles
  - name: og:description
    content: "Over 80 Git shell aliases for faster commits, branches, diffs, and remotes. Speed up your daily version control tasks."
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Git Aliases

Streamline your version control workflow with powerful shortcuts.

## Overview

Git aliases create shortcuts for frequently used Git commands. Part of the [Dotfiles](https://github.com/sebastienrousseau/dotfiles) configuration, these aliases load automatically through Chezmoi.

Defined in `git.aliases.sh` and `signing.aliases.sh`, the aliases are available in any Bash or Zsh session once installed.

## Reference

### Core

| Alias | Command | Description |
|-------|---------|-------------|
| `g` | `git` | Shorthand for git |
| `gtp` | `git rev-parse --show-toplevel` | Print the top-level directory of the repository |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Print the current branch name |
| `gconfl` | `git config --list` | List all Git config settings |
| `gconfr` | `git config --local --get remote.origin.url` | Print the remote origin URL |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Configure a color-words diff alias |

### Working Area

| Alias | Command | Description |
|-------|---------|-------------|
| `ga` | `git add` | Stage files |
| `gaa` | `git add --all` | Stage all changes (tracked and untracked) |
| `gad` | `git add .` | Stage everything in the current directory |
| `gau` | `git add --update` | Stage modifications and deletions (no new files) |
| `gcl` | `git clone` | Clone a repository |
| `gin` | `git init` | Initialise a new Git repository |
| `gco` | `git checkout` | Switch branches or restore working tree files |
| `gcb` | `git checkout -b` | Create and switch to a new branch |
| `gdis` | `git checkout --` | Discard changes in the working directory |
| `grs` | `git restore` | Restore working tree files |
| `gmv` | `git mv` | Move or rename a file |
| `grm` | `git rm` | Remove files from the working tree and index |
| `grmc` | `git rm --cached` | Unstage a file (keep on disk) |
| `gst` | `git status` | Show working tree status |
| `gsts` | `git status --short` | Status in short format |
| `gstsb` | `git status --short --branch` | Short status with branch and tracking info |
| `gsta` | `git stash save` | Stash current changes |
| `gstp` | `git stash pop` | Apply and remove the latest stash |
| `gstd` | `git stash drop` | Drop the latest stash entry |
| `gclout` | `git clean -df && git checkout -- .` | Discard all changes and untracked files |

### Commits

| Alias | Command | Description |
|-------|---------|-------------|
| `gc` | `git commit -a` | Commit all tracked changes |
| `gca` | `git commit --amend` | Amend the last commit |
| `gcall` | `git add -A && git commit -av` | Stage everything and commit verbosely |
| `gcam` | `git commit --amend --message` | Amend commit with a new message |
| `gcane` | `git commit --amend --no-edit` | Amend commit without changing the message |
| `gcm` | `git commit --message` | Commit with an inline message |

### Diff and History

| Alias | Command | Description |
|-------|---------|-------------|
| `gd` | `git diff` | Show unstaged changes |
| `gdch` | `git diff --name-status` | Show names and status of changed files |
| `gdh` | `git diff HEAD` | Show all changes since the last commit |
| `gdstaged` | `git diff --staged` | Show staged changes |
| `gdcached` | `git diff --cached` | Show changes between index and HEAD |
| `gdstat` | `git diff --stat --ignore-space-change -r` | Generate a diffstat ignoring whitespace |
| `gl` | `git log --since="last month" --oneline` | One-line log of the past month |
| `glg` | `git log --graph --all --oneline --decorate` | Graph log of all branches |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | Full-history graph log with colour |
| `glc` | `git log --oneline --reverse` | Chronological one-line log |
| `gld` | `git log --since=1-day-ago` | Log of the last 24 hours |
| `gldc` | `git log -1 --date-order --format=%cI` | ISO 8601 date of the latest commit |
| `gldl` | `git log --date=local` | Log with dates in local timezone |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` | New commits after fetch (no merges) |
| `gll` | *(decorated graph format)* | Detailed graph log with author and GPG status |

### Branches

| Alias | Command | Description |
|-------|---------|-------------|
| `gb` | `git branch` | List local branches |
| `gbd` | `git branch -d` | Delete a merged branch |
| `gbl` | `git branch -l` | List branches matching a pattern |
| `gbr` | `git branch -r` | List remote branches |
| `gbrd` | `git branch -d -r` | Delete a remote-tracking branch |
| `gbrsb` | `git show-branch` | Show branches and their commits |
| `gswb` | `git switch` | Switch branches (modern) |
| `gcode` | `git checkout main && git branch --merged \| xargs git branch --delete` | Delete all branches merged into main |
| `gcom` | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Reset local main to match remote |

### Remotes and Push/Pull

| Alias | Command | Description |
|-------|---------|-------------|
| `gf` | `git fetch` | Fetch from remote |
| `gp` | `git pull` | Pull from remote |
| `gph` | `git push` | Push to remote |
| `gpo` | `git push origin` | Push to origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Push and set upstream for current branch |
| `gpoll` | `git push origin --all` | Push all branches to origin |
| `gpull` | `git pull` | Pull from remote |
| `gpush` | `git push` | Push to remote |
| `gr` | `git remote` | Manage remotes |
| `gra` | `git remote add` | Add a new remote |
| `grall` | `git remote \| xargs -L1 git push --all` | Push all branches to all remotes |
| `grao` | `git remote add origin` | Add origin remote |
| `grv` | `git remote -v` | Show remote URLs |

### Revert and Reset

| Alias | Command | Description |
|-------|---------|-------------|
| `grev` | `git revert` | Revert a commit |
| `grevnc` | `git revert --no-commit` | Revert without auto-committing |
| `grb` | `git rebase` | Rebase current branch |
| `grbk` | `git reset --soft HEAD^` | Undo last commit, keep changes staged |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | Hard reset and clean untracked files |
| `gresh` | `git reset --hard HEAD~1` | Hard reset to previous commit |
| `gresp` | `git reset --hard && git clean -ffdx` | Reset everything to pristine state |
| `gress` | `git reset --soft HEAD~1` | Soft reset (keep changes staged) |

### Submodules

| Alias | Command | Description |
|-------|---------|-------------|
| `gsm` | `git submodule` | Manage submodules |
| `gsmi` | `git submodule init` | Initialise submodules |
| `gsma` | `git submodule add` | Add a submodule |
| `gsms` | `git submodule sync` | Sync submodule URLs with .gitmodules |
| `gsmu` | `git submodule update` | Update submodules |
| `gsmui` | `git submodule update --init` | Update and initialise submodules |
| `gsmuir` | `git submodule update --init --recursive` | Update, initialise, and recurse submodules |

### Tools

| Alias | Command | Description |
|-------|---------|-------------|
| `gg` | `git grep` | Search repository contents |
| `gbs` | `git bisect` | Binary search for a bug-introducing commit |
| `undopush` | `git push -f origin HEAD^:master` | Force-undo the last push to master |

### Signing and Security

| Alias | Command | Description |
|-------|---------|-------------|
| `enable-signing` | *(interactive wizard)* | Configure GPG or SSH commit signing |
| `verify-signatures` | `git log --show-signature -n 10` | Verify signatures of the last 10 commits |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Check current signing configuration |
