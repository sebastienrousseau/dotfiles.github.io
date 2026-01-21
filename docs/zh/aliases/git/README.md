---
description: The Git aliases, provide powerful commands that create shortcuts to frequently used Git commands. All of these functions and aliases are wrappers around the Git command line tools. Git aliases improve speed and efficiency.
lang: zh-CN
metaTitle: The Git aliases - Dotfiles (CN)
permalink: /zh/aliases/git/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The Git aliases, provide powerful commands that create shortcuts to frequently used Git commands. All of these functions and aliases are wrappers around the Git command line tools. Git aliases improve speed and efficiency.
  - name: twitter:description
    content: The Git aliases, provide powerful commands that create shortcuts to frequently used Git commands. All of these functions and aliases are wrappers around the Git command line tools. Git aliases improve speed and efficiency.
  - name: twitter:title
    content: The Git aliases - Dotfiles (CN)
  - name: og:title
    content: The Git aliases - Dotfiles (CN)
  - name: og:description
    content: The Git aliases, provide powerful commands that create shortcuts to frequently used Git commands. All of these functions and aliases are wrappers around the Git command line tools. Git aliases improve speed and efficiency.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Git 别名

The `git.aliases.sh` file creates helpful shortcut aliases for many commonly
[Git](https://www.heroku.com/) commands.

The Git aliases, provide powerful commands that create shortcuts to frequently
used Git commands. All of these functions and aliases are wrappers around the
Git command line tools. Git aliases improve speed and efficiency.

## 处理当前的变更

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------- | -------------------------------------------------------------------------- |
| g     | `git`                 | Short-form git commands.                                                   |
| ga    | `git add`             | 添加 文件 contents to the index.                                            |
| gaa   | `git add --all`       | 添加 文件 contents to the index.                                            |
| gad   | `git add .`           | 添加 current 目录 文件 contents to the index.                          |
| gau   | `git add --update`    | 添加 文件 contents and 更新 the index with changes from the working tree. |
| gco   | `git checkout`        | 撤消 to last commit.                                                       |
| gdis  | `git checkout --`     | Discard changes in a (列出 of) 文件(s) in working tree.                    |
| gmv   | `git mv`              | 移动 or 重命名 a 文件, a 目录, or a symlink.                          |
| grs   | `git restore`         | Restore working tree 文件.                                                |
| gsc   | `git sparse-checkout` | 初始化 and modify the sparse-checkout.                                 |

## 启动工作区

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------- | --------------------------------------------------------------- |
| gcl   | `git clone` | Clone a repository into a new 目录.                        |
| gin   | `git init`  | 创建 an empty Git repository or reinitialize an existing one. |

## Examine the history and state

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| gbs   | `git bisect`                                                        | Use binary 搜索 to 查找 the commit that introduced a bug.                                                                |
| gd    | `git diff`                                                          | 显示 changes between commits, commit and working tree, etc.                                                                |
| gg    | `git grep`                                                          | 打印 lines matching a pattern.                                                                                            |
| gl    | `git log --since="last month" --oneline`                            | 显示 commit logs this month.                                                                                               |
| glg   | `git log --oneline --graph --full-history --all --color --decorate` | 显示 commit logs and Draw a text-based graphical representation of the commit history on the left hand side of the output. |
| gs    | `git show`                                                          | 显示 various types of objects.                                                                                             |

## List, create, or delete branches

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------------ | ------------------------------------------------ |
| gb    | `git branch`       | 创建 a branch.                                 |
| gbd   | `git branch -d`    | 删除 a branch.                                 |
| gbl   | `git branch -l`    | 列出 branches.                                   |
| gbr   | `git branch -r`    | 列出 the remote-tracking branches.               |
| gbrd  | `git branch -d -r` | 删除 the remote-tracking branches.             |
| gbrsb | `git show-branch`  | 打印 a 列出 of branches and their commits.      |
| gct   | `git commit`       | Record changes to the repository.                |
| gmg   | `git merge`        | Join two or more development histories together. |
| grb   | `git rebase`       | Reapply commits on top of another base tip.      |
| grs   | `git reset`        | Reset current HEAD to the specified state.       |
| gswb  | `git switch`       | Switch branches.                                 |

## Collaborate

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------- | ------------------------------------------------------------------- |
| gf    | `git fetch` | Download objects and refs from another repository.                  |
| gi    | `git init`  | 创建 an empty Git repository or reinitialize an existing one.     |
| gp    | `git pull`  | Fetch from and integrate with another repository or a local branch. |
| gpu   | `git push`  | 更新 remote refs along with associated objects.                   |

## Record changes to the repository

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------------------------ | ---------------------------------------------------------------------- |
| gc    | `git commit -a`                | Commit command to automatically "添加" changes from all known 文件.    |
| gca   | `git commit --amend`           | Amend the tip of the current branch rather than creating a new commit. |
| gcall | `git add -A && git commit -av` | Commit all changes.                                                    |
| gcam  | `git commit --amend --message` | Amend the tip of the current branch, and edit the message.             |
| gcane | `git commit --amend --no-edit` | Amend the tip of the current branch, and do not edit the message.      |
| gcint | `git commit --interactive`     | Commit interactive.                                                    |
| gcm   | `git commit --message`         | Commit with a message.                                                 |

## Show changes between commits, commit and working tree, etc

| Alias    | Command                                    | Description                                                                                 |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| gd       | `git diff`                                 | 显示 changes between the working tree and the index or a tree.                              |
| gdcached | `git diff --cached`                        | Shows the changes between the index and the HEAD (which is the last commit on this branch). |
| gdch     | `git diff --name-status`                   | 显示 only names and status of changed 文件.                                                |
| gdh      | `git diff HEAD`                            | 显示 all changes of tracked 文件 which are present in working 目录 and staging area.  |
| gdstaged | `git diff --staged`                        | 显示 changes to 文件 in the "staged" area.                                                 |
| gdstat   | `git diff --stat --ignore-space-change -r` | Generate a diffstat.                                                                        |

## Show commit logs

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| gclc  | `git log --oneline --reverse`                                                                                                                                                                                     | 显示 log of changes, most recent first.                                                             |
| gld   | `git log --since=1-day-ago`                                                                                                                                                                                       | 显示 the log of the recent day                                                                      |
| gldc  | `git log -1 --date-order --format=%cI`                                                                                                                                                                            | 显示 the date of the latest commit, in strict ISO 8601 format.                                      |
| gldl  | `git log --date=local`                                                                                                                                                                                            | 显示 log with dates in our local timezone.                                                          |
| glf   | `git log ORIG_HEAD.. --stat --no-merges`                                                                                                                                                                          | 显示 log of new commits after you fetched, with stats, excluding merges.                            |
| glfd  | `!"git log --date-order --format=%cI                                                                                                                                                                              | tail -1"`                                                                                           | 显示 the date of the earliest commit, in strict ISO 8601 format. |
| glfh  | `git log --graph --full-history --all --color`                                                                                                                                                                    | Visualization of branch topology.                                                                   |
| glg   | `git log --graph --all --oneline --decorate`                                                                                                                                                                      | 显示 log as a graph.                                                                                |
| glh   | `git log --since=1-hour-ago`                                                                                                                                                                                      | 显示 the log of the recent hour                                                                     |
| gll   | `git log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset"`                   | 显示 log in our preferred format for our key performance indicators. A.k.a. `ll`.                   |
| glll  | `git log --graph --topo-order --date=iso8601-strict --no-abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn <%ce>]%Creset %Cblue%G?%Creset"` | 显示 log in our preferred format for our key performance indicators, with long items. A.k.a. `lll`. |
| glm   | `git log --since=1-month-ago`                                                                                                                                                                                     | 显示 the log of the recent month                                                                    |
| glmy  | `!git log --author $(git config user.email)`                                                                                                                                                                      | 显示 the log for my own commits by my own user email.                                               |
| glw   | `git log --since=1-week-ago`                                                                                                                                                                                      | 显示 the log of the recent week                                                                     |
| gly   | `git log --since=1-year-ago`                                                                                                                                                                                      | 显示 the log of the recent year                                                                     |

## Switch branches or restore working tree files

| Alias  | Command                                                                         | Description                                                           |
| ------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| gclout | `git clean -df && git checkout -- .`                                            | Clean and discard changes and un-tracked 文件 in working tree.       |
| gco    | `git checkout`                                                                  | Switch branches or restore working tree 文件.                        |
| gcob   | `git checkout -b`                                                               | 创建 a new branch named <new_branch> and 开始 it at <start_point>. |
| gcode  | `git checkout main && git branch --merged                                       | xargs git branch --delete`                                            | 删除 all local branches that have been merged into the local main branch. |
| gcom   | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Ensure local is like the main branch.                                 |

## Update remote refs along with associated objects

| Alias  | Command                                                | Description                                                                                                                   |
| ------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------- |
| gpb    | `git push --set-upstream origin $(git current-branch)` | Publish the current branch by pushing it to the remote "origin", and setting the current branch to track the upstream branch. |
| gpcb   | `git push origin "$(git branch                         | grep '\*'                                                                                                                     | tr -d '\* \n')"`                                    | Push current branch |
| gpo    | `git push origin`                                      | Push local changes to the online repository.                                                                                  |
| gpoll  | `git push origin --all`                                | Push each of your local git branches to the remote repository                                                                 |
| gpt    | `git push --tags`                                      | Push local tags.                                                                                                              |
| gpull  | `git pull`                                             | Fetch from and integrate with another repository or a local branch.                                                           |
| gpullo | `git pull origin $(git current-branch)`                | Do a pull for just one branch.                                                                                                |
| gpullm | `git pull origin master`                               | Pull changes from the locally stored branch origin/master and merge that to the local checked-out branch.                     |
| gpush  | `git push`                                             | 更新 remote refs along with associated objects.                                                                             |
| gpusho | `git push origin $(git current-branch)`                | Do a push for just one branch.                                                                                                |
| gpushr | `git remote                                            | xargs -I% -n1 git push %`                                                                                                     | git remotes-push - For each remote branch, push it. |
| gunpub | `git push origin :$(git current-branch)`               | Un-publish the current branch by deleting the remote version of the current branch.                                           |

## Manage set of tracked repositories

| Alias   | Command                                                                                                                    | Description                                                                       |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------- | -------------------------------- |
| gr      | `git remote`                                                                                                               | 管理 set of tracked repositories.                                               |
| gra     | `git remote add`                                                                                                           | 添加 a remote named name for the repository at url.                                |
| grall   | `git remote                                                                                                                | xargs -L1 git push --all`                                                         | Push all branches to all remotes.   |
| grallo  | `git remote -v                                                                                                             | grep "(fetch)"                                                                    |                                     | Git remote all remotes except origin. |
| grao    | `git remote add origin`                                                                                                    | 添加 a new remote 'origin' if it doesn't exist.                                    |
| grbk    | `git reset --soft HEAD^`                                                                                                   | Rollback to stage.                                                                |
| grcl    | `git remote prune`                                                                                                         | 移除 stale remote-tracking branches.                                            |
| grf     | `find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && echo '{}' && git config --get remote.origin.url" \;` | 显示 GIT Remote Origin for each immediate subfolder.                              |
| grfall  | `git branch -r                                                                                                             | awk -F'/' '{print "git fetch "$1,$2}'                                             | xargs -I {} sh -c {}`               | Fetch all git remotes for a repo.     |
| gro     | `open`git remote -v                                                                                                        | awk '/fetch/{print $2}'                                                           | sed -Ee 's#(git@                    | git://)#http://#' -e 's@com:@com/@'`  | head -n1` | 打开 current Git repository URL. |
| grp     | `git remote                                                                                                                | xargs -I% -n1 git push %`                                                         | For each remote branch, push it.    |
| grpa    | `for i in`git remote`; do git push $i; done;`                                                                              | Push all remotes.                                                                 |
| grprint | `git remote -v`                                                                                                            |                                                                                   | 打印 the url for the current repo. |
| grs     | `git show`                                                                                                                 | 显示 various types of objects.                                                    |
| grso    | `git remote show origin`                                                                                                   | Display where the origin resides.                                                 |
| grv     | `git remote -v`                                                                                                            | Shows URLs of remote repositories when listing your current remote connections.   |
| gru     | `git remote update`                                                                                                        | Fetch updates for a named set of remotes in the repository as defined by remotes. |

## Revert some existing commits

| Alias  | Command                  | Description                                                                                                   |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| grev   | `git revert`             | 撤消 the changes from some existing commits.                                                                  |
| grevnc | `git revert --no-commit` | Revert without autocommit; useful when you're reverting more than one commits' effect to your index in a row. |

## Initialize, update or inspect submodules

| Alias  | Command                                   | Description                                                                                                                                                                                    |
| ------ | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gsmi   | `git submodule init`                      | 初始化 the submodules recorded in the index.                                                                                                                                               |
| gsma   | `git submodule add`                       | 添加 the given repository as a Submodule at the given path to the changeset to be committed next to the current project: the current project is termed the "superproject".                      |
| gsm    | `git submodule`                           | Enables foreign repositories to be embedded within a dedicated subdirectory of the source tree.                                                                                                |
| gsms   | `git submodule sync`                      | Synchronizes submodules' remote URL configuration setting to the value specified in .gitmodules.                                                                                               |
| gsmu   | `git submodule update`                    | 更新 the registered submodules to match what the superproject expects by cloning missing submodules, fetching missing commits in submodules and updating the working tree of the submodules. |
| gsmui  | `git submodule update --init`             | Submodule 更新 with 初始化.                                                                                                                                                              |
| gsmuir | `git submodule update --init --recursive` | Submodule 更新 with 初始化 and recursive; this is useful to bring a submodule fully up to datec.                                                                                         |

## Show the working tree status

| Alias  | Command                       | Description                                                    |
| ------ | ----------------------------- | -------------------------------------------------------------- | ------------ | ------------ | ------------------------------------------- |
| gst    | `git status`                  | 显示 the working tree status.                                  |
| gstrmu | `git status -su               | cut -d' ' -f2-                                                 | tr '\n' '\0' | xargs -0 rm` | 移除 untracked 文件 in a git repository. |
| gsts   | `git status --short`          | Status with short format instead of full details.              |
| gstsb  | `git status --short --branch` | Status with short format and showing branch and tracking info. |

## Create, list, delete or verify a tag object signed with GPG

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------------------------------------------------- | ----------------------------------------------------------------- |
| gt    | `git tag`                                                       | gt: See all tags.                                                 |
| gta   | `git tag -a $1 -m $2`                                           | gta: 添加 a tag.                                                   |
| gtg   | `git tag`                                                       | gtg: 创建, 列出, 删除 or 验证 a tag object signed with GPG. |
| gtl   | `git describe --tags --abbrev=0`                                | gtl: Last tag in the current branch.                              |
| gtrm  | `for t in`git tag`do; git push origin :$t; git tag -d $t; done` | gtrm: 删除 all tags.                                            |

## Show various types of objects

| Alias  | Command                                                            | Description                                                                          |
| ------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | --------------------- | -------- | --------------------------------------------------------------- |
| gshab  | `for k in ``git branch                                             | perl -pe s/^..//`;do echo `git show --pretty=format:"%Cgreen%ci %Cblue%cr%Creset" $k | head -n 1``\\t$k;done | sort -r` | 显示 git branches by date - useful for showing active branches. |
| gshf   |                                                                    | 查找 the nearest parent branch of the current git branch.                            |
| gshls  | `git show --relative --pretty=format:''`                           | 显示 列出 of 文件 changed by commit.                                                |
| gshnp  | `git show --no-patch --pretty="tformat:%h (%s, %ad)" --date=short` | Given any git object, try to 显示 it briefly.                                        |
| gshwho | `git shortlog --summary --numbered --no-merges`                    | 显示 who contributed, in descending order by number of commits.                      |

## Reset current HEAD to the specified state

| Alias  | Command                                    | Description         |
| ------ | ------------------------------------------ | ------------------- |
| grescl | `git reset --hard HEAD~1 && git clean -fd` | Reset commit clean. |
| gresh  | `git reset --hard HEAD~1`                  | Reset commit hard.  |
| gresp  | `git reset --hard && git clean -ffdx`      | Reset pristine.     |
| gress  | `git reset --soft HEAD~1`                  | Reset commit.       |
| gresu  | `git reset --hard $(git upstream-branch)`  | Reset to upstream.  |

## Pick out and massage parameters

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------------------------------------------------------------- | --------------------------------- |
| gtp   | `git rev-parse --show-toplevel`                                             | Get the top level 目录 name. |
| gcb   | `git rev-parse --abbrev-ref HEAD`                                           | Get the current branch name.      |
| gub   | `git for-each-ref --format='%(upstream:short)' $(git symbolic-ref -q HEAD)` | Get the upstream branch name.     |

## Remove files from the working tree and from the index

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------- |
| grm   | `git rm`                                                             | 移除 文件 from the working tree and from the index. |
| grmc  | `git rm --cached`                                                    | Unstage and 移除 paths only from the index.          |
| grmd  | `git ls-files -z --deleted                                           | xargs -0 git rm`                                       | git 移除 文件 which have been deleted.                                                                     |
| grmd2 | `git rm $(git ls-files --deleted)`                                   | git 移除 文件 which have been deleted.              |
| grmds | `find . -name .DS_Store -exec git rm --ignore-unmatch --cached {} +` | 移除 .DS_Store from the repository.                  |
| grmn  | `for file in $(git status                                            | grep "new file"                                        | sed "s/#\tnew file://"); do git rm --cached $file; done`                                                      | 移除 all new 文件. |
| grmx  | `git ls-files -z -d                                                  | xargs -0 git rm --`                                    | 移除 for all deleted 文件, including those with space/quote/unprintable characters in their filename/path. |

## Show what revision and author last modified each line of a file

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------------------------------- | ---------------------------------------------- | ---------------------- | ------- | --------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| gbl   | `git blame --date short "$1"`    | Specifies a format used to output short dates. |
| gblc  | `git blame --line-porcelain "$1" | sed -n 's/^author //p'                         | sort                   | uniq -c | sort -rn` | Count the number of lines attributed to each author. |
| gblau | `git ls-files                    | xargs -n1 git blame --line-porcelain           | sed -n 's/^author //p' | sort -f | uniq -ic  | sort -nr`                                            | Prints per-line contribution per author for a GIT repository. |

## Get and set repository or global options

| Alias     | Command                                        | Description                                          |
| --------- | ---------------------------------------------- | ---------------------------------------------------- |
| gconfdiff | `git config alias.dcolor "diff --color-words"` | Better git diff, word delimited and colorized.       |
| gconfl    | `git config --list`                            | 列出 all the settings.                               |
| gconfr    | `git config --local --get remote.origin.url`   | Output remote origin from within a local repository. |
