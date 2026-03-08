---
title: Git Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Git in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Git Reference Appendix | Dotfiles preview
canonical: /en/aliases/git/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Git Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/git/reference/
---

# Git Reference Appendix

## Source files

- `.chezmoitemplates/aliases/git/git.aliases.sh`
- `.chezmoitemplates/aliases/git/signing.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `check-signing` | `git config --list \| grep "gpg\\|signing"` |
| `ci` | `git commit` |
| `enable-signing` | `enable_signing_fn` |
| `g` | `git` |
| `ga` | `git add` |
| `gaa` | `git add --all` |
| `gad` | `git add .` |
| `gau` | `git add --update` |
| `gb` | `git branch` |
| `gbd` | `git branch -d` |
| `gbl` | `git branch -l` |
| `gbr` | `git branch -r` |
| `gbrd` | `git branch -d -r` |
| `gbrsb` | `git show-branch` |
| `gbs` | `git bisect` |
| `gc` | `git commit -a` |
| `gca` | `git commit --amend` |
| `gcall` | `git add -A && git commit -av` |
| `gcam` | `git commit --amend --message ` |
| `gcane` | `git commit --amend --no-edit` |
| `gcb` | `git checkout -b` |
| `gcl` | `git clone` |
| `gclout` | `git clean -df && git checkout -- .` |
| `gcm` | `git commit --message ` |
| `gco` | `git checkout` |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` |
| `gconfl` | `git config --list` |
| `gconfr` | `git config --local --get remote.origin.url` |
| `gd` | `git diff` |
| `gdcached` | `git diff --cached` |
| `gdch` | `git diff --name-status` |
| `gdh` | `git diff HEAD` |
| `gdis` | `'git checkout --' # changed from checkout to git checkout for safety checking` |
| `gdstaged` | `git diff --staged` |
| `gdstat` | `git diff --stat --ignore-space-change -r` |
| `gf` | `git fetch` |
| `gg` | `git grep` |
| `gin` | `git init` |
| `gl` | `git log --since="last month" --oneline` |
| `glc` | `git log --oneline --reverse` |
| `gld` | `git log --since=1-day-ago` |
| `gldc` | `git log -1 --date-order --format=%cI` |
| `gldl` | `git log --date=local` |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` |
| `glg` | `git log --graph --all --oneline --decorate` |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` |
| `gll` | `git log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset"` |
| `gmv` | `git mv` |
| `gp` | `git pull` |
| `gph` | `git push` |
| `gpo` | `git push origin` |
| `gpoll` | `git push origin --all` |
| `gr` | `git remote` |
| `gra` | `git remote add` |
| `grall` | `git remote \| xargs -L1 git push --all` |
| `grao` | `git remote add origin` |
| `grb` | `git rebase` |
| `grbk` | `git reset --soft HEAD^` |
| `gress` | `git reset --soft HEAD~1` |
| `grev` | `git revert` |
| `grevnc` | `git revert --no-commit` |
| `grm` | `git rm` |
| `grmc` | `git rm --cached` |
| `grpa` | `git rev-parse --abbrev-ref HEAD` |
| `grs` | `git restore` |
| `grv` | `git remote -v` |
| `gsm` | `git submodule` |
| `gsma` | `git submodule add` |
| `gsmi` | `git submodule init` |
| `gsms` | `git submodule sync` |
| `gsmu` | `git submodule update` |
| `gsmui` | `git submodule update --init` |
| `gsmuir` | `git submodule update --init --recursive` |
| `gst` | `git status` |
| `gsta` | `git stash push -m ` |
| `gstd` | `git stash drop` |
| `gstp` | `git stash pop` |
| `gsts` | `git status --short` |
| `gstsb` | `git status --short --branch` |
| `gswb` | `git switch` |
| `gtp` | `git rev-parse --show-toplevel` |
| `lg` | `git log --graph --oneline --decorate --all` |
| `lgui` | `lazygit` |
| `verify-signatures` | `git log --show-signature -n 10` |

## Helper functions

- `gcode()`
- `gcom()`
- `gpb()`
- `grescl()`
- `gresh()`
- `gresp()`
- `undopush()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
