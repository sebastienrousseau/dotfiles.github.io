---
description: Git 别名提供了强大的命令，可以为常用的 Git 命令创建快捷方式。所有这些函数和别名都是对 Git 命令行工具的封装。Git 别名提高了速度和效率。
lang: zh-CN
metaTitle: Git 别名 - Dotfiles (CN)
permalink: /zh/aliases/git/
---

# Git 别名

`git.aliases.sh` 文件为许多常用的 [Git](https://git-scm.com/) 命令创建了有用的快捷别名。

Git 别名提供了强大的命令，可以为常用的 Git 命令创建快捷方式。所有这些函数和别名都是对 Git 命令行工具的封装。Git 别名提高了速度和效率。

## 处理当前的变更

| 别名 | 命令                  | 描述                                       |
| ---- | --------------------- | ------------------------------------------ |
| g    | `git`                 | Git 命令简写。                             |
| ga   | `git add`             | 将文件内容添加到索引。                     |
| gaa  | `git add --all`       | 将所有文件内容添加到索引。                 |
| gad  | `git add .`           | 将当前目录的文件内容添加到索引。           |
| gau  | `git add --update`    | 添加文件内容并使用工作树中的更改更新索引。 |
| gco  | `git checkout`        | 撤销到上一次提交。                         |
| gdis | `git checkout --`     | 丢弃工作树中文件（列表）的更改。           |
| gmv  | `git mv`              | 移动或重命名文件、目录或符号链接。         |
| grs  | `git restore`         | 恢复工作树文件。                           |
| gsc  | `git sparse-checkout` | 初始化和修改稀疏检出。                     |

## 开始工作区

| 别名 | 命令        | 描述                                        |
| ---- | ----------- | ------------------------------------------- |
| gcl  | `git clone` | 将存储库克隆到新目录。                      |
| gin  | `git init`  | 创建一个空的 Git 存储库或重新初始化现有的。 |

## 检查历史和状态

| 别名 | 命令                                                                | 描述                                                     |
| ---- | ------------------------------------------------------------------- | -------------------------------------------------------- |
| gbs  | `git bisect`                                                        | 使用二分查找来查找引入错误的提交。                       |
| gd   | `git diff`                                                          | 显示提交之间、提交和工作树之间等的更改。                 |
| gg   | `git grep`                                                          | 打印匹配模式的行。                                       |
| gl   | `git log --since="last month" --oneline`                            | 显示本月的提交日志。                                     |
| glg  | `git log --oneline --graph --full-history --all --color --decorate` | 显示提交日志并在输出左侧绘制基于文本的提交历史图形表示。 |
| gs   | `git show`                                                          | 显示各种类型的对象。                                     |

## 列出、创建或删除分支

| 别名  | 命令               | 描述                               |
| ----- | ------------------ | ---------------------------------- |
| gb    | `git branch`       | 创建一个分支。                     |
| gbd   | `git branch -d`    | 删除一个分支。                     |
| gbl   | `git branch -l`    | 列出分支。                         |
| gbr   | `git branch -r`    | 列出远程跟踪分支。                 |
| gbrd  | `git branch -d -r` | 删除远程跟踪分支。                 |
| gbrsb | `git show-branch`  | 打印分支及其提交的列表。           |
| gct   | `git commit`       | 记录对存储库的更改。               |
| gmg   | `git merge`        | 将两个或多个开发历史合并在一起。   |
| grb   | `git rebase`       | 在另一个基础提示之上重新应用提交。 |
| grs   | `git reset`        | 将当前 HEAD 重置为指定状态。       |
| gswb  | `git switch`       | 切换分支。                         |

## 协作

| 别名 | 命令        | 描述                                        |
| ---- | ----------- | ------------------------------------------- |
| gf   | `git fetch` | 从另一个存储库下载对象和引用。              |
| gi   | `git init`  | 创建一个空的 Git 存储库或重新初始化现有的。 |
| gp   | `git pull`  | 从另一个存储库或本地分支获取并集成。        |
| gpu  | `git push`  | 更新远程引用以及相关对象。                  |

## 记录对存储库的更改

| 别名  | 命令                           | 描述                                         |
| ----- | ------------------------------ | -------------------------------------------- |
| gc    | `git commit -a`                | 自动“添加”所有已知文件的更改并提交。         |
| gca   | `git commit --amend`           | 修改当前分支的提示，而不是创建一个新的提交。 |
| gcall | `git add -A && git commit -av` | 提交所有更改。                               |
| gcam  | `git commit --amend --message` | 修改当前分支的提示，并编辑消息。             |
| gcane | `git commit --amend --no-edit` | 修改当前分支的提示，而不编辑消息。           |
| gcint | `git commit --interactive`     | 交互式提交。                                 |
| gcm   | `git commit --message`         | 带消息提交。                                 |

## 显示提交之间、提交和工作树之间的更改等

| 别名     | 命令                                       | 描述                                                  |
| -------- | ------------------------------------------ | ----------------------------------------------------- |
| gd       | `git diff`                                 | 显示工作树和索引或是树之间的更改。                    |
| gdcached | `git diff --cached`                        | 显示索引和 HEAD（此分支上的最后一次提交）之间的更改。 |
| gdch     | `git diff --name-status`                   | 只显示更改文件的名称和状态。                          |
| gdh      | `git diff HEAD`                            | 显示工作目录和暂存区中存在的所有跟踪文件的更改。      |
| gdstaged | `git diff --staged`                        | 显示“暂存”区域中文件的更改。                          |
| gdstat   | `git diff --stat --ignore-space-change -r` | 生成 diffstat。                                       |

## 显示提交日志

| 别名 | 命令                                                                                                                                                                                                              | 描述                                                       |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| gclc | `git log --oneline --reverse`                                                                                                                                                                                     | 显示更改日志，最近的在前。                                 |
| gld  | `git log --since=1-day-ago`                                                                                                                                                                                       | 显示最近一天的日志。                                       |
| gldc | `git log -1 --date-order --format=%cI`                                                                                                                                                                            | 以严格的 ISO 8601 格式显示最新提交的日期。                 |
| gldl | `git log --date=local`                                                                                                                                                                                            | 以本地时区显示带有日期的日志。                             |
| glf  | `git log ORIG_HEAD.. --stat --no-merges`                                                                                                                                                                          | 显示获取后的新提交日志，带有统计信息，排除合并。           |
| glfd | `!"git log --date-order --format=%cI tail -1"`                                                                                                                                                                    | 以严格的 ISO 8601 格式显示最早提交的日期。                 |
| glfh | `git log --graph --full-history --all --color`                                                                                                                                                                    | 分支拓扑的可视化。                                         |
| glg  | `git log --graph --all --oneline --decorate`                                                                                                                                                                      | 以图形方式显示日志。                                       |
| glh  | `git log --since=1-hour-ago`                                                                                                                                                                                      | 显示最近一小时的日志。                                     |
| gll  | `git log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset"`                   | 以我们首选的关键绩效指标格式显示日志。即 `ll`。            |
| glll | `git log --graph --topo-order --date=iso8601-strict --no-abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn <%ce>]%Creset %Cblue%G?%Creset"` | 以我们首选的关键绩效指标格式显示日志，包含长项。即 `lll`。 |
| glm  | `git log --since=1-month-ago`                                                                                                                                                                                     | 显示最近一个月的日志。                                     |
| glmy | `!git log --author $(git config user.email)`                                                                                                                                                                      | 通过我自己的用户电子邮件显示我自己提交的日志。             |
| glw  | `git log --since=1-week-ago`                                                                                                                                                                                      | 显示最近一周的日志。                                       |
| gly  | `git log --since=1-year-ago`                                                                                                                                                                                      | 显示最近一年的日志。                                       |

## 切换分支或恢复工作树文件

| 别名   | 命令                                                                            | 描述                                                        |
| ------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| gclout | `git clean -df && git checkout -- .`                                            | 清理并丢弃工作树中的更改和未跟踪文件。                      |
| gco    | `git checkout`                                                                  | 切换分支或恢复工作树文件。                                  |
| gcob   | `git checkout -b`                                                               | 创建一个名为 <new_branch> 的新分支并从 <start_point> 开始。 |
| gcode  | `git checkout main && git branch --merged xargs git branch --delete`            | 删除所有已合并到本地 main 分支的本地分支。                  |
| gcom   | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | 确保本地与 main 分支一致。                                  |

## 更新远程引用以及相关对象

| 别名   | 命令                                                      | 描述                                                                         |
| ------ | --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| gpb    | `git push --set-upstream origin $(git branch --show-current)`    | 通过将当前分支推送到远程“origin”并设置当前分支以跟踪上游分支来发布当前分支。 |
| gpcb   | `git push origin "$(git branch grep '\*' tr -d '\* \n')"` | 推送当前分支。                                                               |
| gpo    | `git push origin`                                         | 将本地更改推送到在线存储库。                                                 |
| gpoll  | `git push origin --all`                                   | 将每个本地 git 分支推送到远程存储库。                                        |
| gpt    | `git push --tags`                                         | 推送本地标签。                                                               |
| gpull  | `git pull`                                                | 从另一个存储库或本地分支获取并集成。                                         |
| gpullo | `git pull origin $(git branch --show-current)`                   | 仅拉取一个分支。                                                             |
| gpullm | `git pull origin master`                                  | 从本地存储的分支 origin/master 拉取更改并将其合并到本地检出的分支。          |
| gpush  | `git push`                                                | 更新远程引用以及相关对象。                                                   |
| gpusho | `git push origin $(git branch --show-current)`                   | 仅推送一个分支。                                                             |
| gpushr | `git remote xargs -I% -n1 git push %`                     | git remotes-push - 对于每个远程分支，推送它。                                |
| gunpub | `git push origin :$(git branch --show-current)`                  | 通过删除当前分支的远程版本来取消发布当前分支。                               |

## 管理跟踪存储库集

| 别名    | 命令                                                                                                                       | 描述                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| gr      | `git remote`                                                                                                               | 管理跟踪存储库集。                        |
| gra     | `git remote add`                                                                                                           | 在 url 处为存储库添加名为 name 的远程。   |
| grall   | `git remote xargs -L1 git push --all`                                                                                      | 将所有分支推送到所有远程。                |
| grallo  | `git remote -v grep "(fetch)"`                                                                                             | Git remote 所有远程除 origin 外。         |
| grao    | `git remote add origin`                                                                                                    | 如果不存在，则添加一个新的远程 'origin'。 |
| grbk    | `git reset --soft HEAD^`                                                                                                   | 回滚到暂存区。                            |
| grcl    | `git remote prune`                                                                                                         | 删除陈旧的远程跟踪分支。                  |
| grf     | `find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && echo '{}' && git config --get remote.origin.url" \;` | 显示每个直接子文件夹的 GIT 远程 Origin。  |
| grfall  | `git branch -r awk -F'/' '{print "git fetch "$1,$2}' xargs -I {} sh -c {}`                                                 | 获取仓库的所有 git 远程。                 |
| gro     | `open git remote -v awk '/fetch/{print $2}' sed -Ee 's#(git@ git://)#http://#' -e 's@com:@com/@' head -n1`                 | 打开当前 Git 存储库 URL。                 |
| grp     | `git remote xargs -I% -n1 git push %`                                                                                      | 对于每个远程分支，推送它。                |
| grpa    | `for i in git remote; do git push $i; done;`                                                                               | 推送所有远程。                            |
| grprint | `git remote -v`                                                                                                            | 打印当前仓库的 url。                      |
| grs     | `git show`                                                                                                                 | 显示各种类型的对象。                      |
| grso    | `git remote show origin`                                                                                                   | 显示 origin 所在的位置。                  |
| grv     | `git remote -v`                                                                                                            | 列出当前远程连接时显示远程存储库的 URL。  |
| gru     | `git remote update`                                                                                                        | 获取存储库中已命名的一组远程的更新。      |

## 撤销一些现有的提交

| 别名   | 命令                     | 描述                                                         |
| ------ | ------------------------ | ------------------------------------------------------------ |
| grev   | `git revert`             | 撤销一些现有的提交的更改。                                   |
| grevnc | `git revert --no-commit` | 撤销但不自动提交；当您连续撤销多个提交对索引的影响时很有用。 |

## 初始化、更新或检查子模块

| 别名   | 命令                                      | 描述                                                                                                         |
| ------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| gsmi   | `git submodule init`                      | 初始化索引中记录的子模块。                                                                                   |
| gsma   | `git submodule add`                       | 将给定的存储库作为子模块添加到给定路径，以添加到要提交到当前项目的更改集中：当前项目称为“超级项目”。         |
| gsm    | `git submodule`                           | 允许将外部存储库嵌入到源树的专用子目录中。                                                                   |
| gsms   | `git submodule sync`                      | 将子模块的远程 URL 配置设置同步到 .gitmodules 中指定的值。                                                   |
| gsmu   | `git submodule update`                    | 通过克隆丢失的子模块、获取子模块中丢失的提交并更新子模块的工作树，来更新已注册的子模块以匹配超级项目的预期。 |
| gsmui  | `git submodule update --init`             | 带初始化的子模块更新。                                                                                       |
| gsmuir | `git submodule update --init --recursive` | 带初始化和递归的子模块更新；这对完全更新子模块很有用。                                                       |

## 显示工作树状态

| 别名   | 命令                                                     | 描述                                     |
| ------ | -------------------------------------------------------- | ---------------------------------------- |
| gst    | `git status`                                             | 显示工作树状态。                         |
| gstrmu | `git status -su cut -d' ' -f2- tr '\n' '\0' xargs -0 rm` | 删除 git 存储库中未跟踪的文件。          |
| gsts   | `git status --short`                                     | 用简短格式代替完整细节显示状态。         |
| gstsb  | `git status --short --branch`                            | 用简短格式显示状态并显示分支和跟踪信息。 |

## 创建、列出、删除或验证使用 GPG 签名的标签对象

| 别名 | 命令                                                            | 描述                                                 |
| ---- | --------------------------------------------------------------- | ---------------------------------------------------- |
| gt   | `git tag`                                                       | gt: 查看所有标签。                                   |
| gta  | `git tag -a $1 -m $2`                                           | gta: 添加一个标签。                                  |
| gtg  | `git tag`                                                       | gtg: 创建、列出、删除或验证使用 GPG 签名的标签对象。 |
| gtl  | `git describe --tags --abbrev=0`                                | gtl: 当前分支中的最后一个标签。                      |
| gtrm | `for t in git tag do; git push origin :$t; git tag -d $t; done` | gtrm: 删除所有标签。                                 |

## 显示各种类型的对象

| 别名   | 命令                                                                                                                                | 描述                                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| gshab  | `for k in git branch perl -pe s/^..//;do echo git show --pretty=format:"%Cgreen%ci %Cblue%cr%Creset" $k head -n 1\t$k;done sort -r` | 按日期显示 git 分支 - 对显示活动分支很有用。 |
| gshf   |                                                                                                                                     | 查找当前 git 分支的最近父分支。              |
| gshls  | `git show --relative --pretty=format:''`                                                                                            | 显示提交更改的文件列表。                     |
| gshnp  | `git show --no-patch --pretty="tformat:%h (%s, %ad)" --date=short`                                                                  | 给定任何 git 对象，尝试简要显示它。          |
| gshwho | `git shortlog --summary --numbered --no-merges`                                                                                     | 显示贡献者，按提交次数降序排列。             |

## 将当前 HEAD 重置为指定状态

| 别名   | 命令                                       | 描述             |
| ------ | ------------------------------------------ | ---------------- |
| grescl | `git reset --hard HEAD~1 && git clean -fd` | 重置提交并清理。 |
| gresh  | `git reset --hard HEAD~1`                  | 强制重置提交。   |
| gresp  | `git reset --hard && git clean -ffdx`      | 重置为原始状态。 |
| gress  | `git reset --soft HEAD~1`                  | 软重置提交。     |
| gresu  | `git reset --hard $(git upstream-branch)`  | 重置为上游。     |

## 挑选和处理参数

| 别名 | 命令                                                                        | 描述               |
| ---- | --------------------------------------------------------------------------- | ------------------ |
| gtp  | `git rev-parse --show-toplevel`                                             | 获取顶级目录名称。 |
| gcb  | `git rev-parse --abbrev-ref HEAD`                                           | 获取当前分支名称。 |
| gub  | `git for-each-ref --format='%(upstream:short)' $(git symbolic-ref -q HEAD)` | 获取上游分支名称。 |

## 从工作树和索引中删除文件

| 别名  | 命令                                                                                               | 描述                                                                      |
| ----- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| grm   | `git rm`                                                                                           | 从工作树和索引中删除文件。                                                |
| grmc  | `git rm --cached`                                                                                  | 仅从索引中取消暂存和删除路径。                                            |
| grmd  | `git ls-files -z --deleted xargs -0 git rm`                                                        | git 删除已删除的文件。                                                    |
| grmd2 | `git rm $(git ls-files --deleted)`                                                                 | git 删除已删除的文件。                                                    |
| grmds | `find . -name .DS_Store -exec git rm --ignore-unmatch --cached {} +`                               | 从存储库中删除 .DS_Store。                                                |
| grmn  | `for file in $(git status grep "new file" sed "s/#\tnew file://"); do git rm --cached $file; done` | 删除所有新文件。                                                          |
| grmx  | `git ls-files -z -d xargs -0 git rm --`                                                            | 删除所有已删除的文件，包括文件名/路径中包含空格/引号/不可打印字符的文件。 |

## 显示最后修改文件每一行的修订版和作者

| 别名  | 命令                                                                                                 | 描述                                  |
| ----- | ---------------------------------------------------------------------------------------------------- | ------------------------------------- |
| gbl   | `git blame --date short "$1"`                                                                        | 指定用于输出短日期的格式。            |
| gblc  | `git blame --line-porcelain "$1" sed -n 's/^author //p' sort uniq -c sort -rn`                       | 计算每个作者贡献的行数。              |
| gblau | `git ls-files xargs -n1 git blame --line-porcelain sed -n 's/^author //p' sort -f uniq -ic sort -nr` | 打印 GIT 存储库中每位作者的每行贡献。 |

## 获取和设置存储库或全局选项

| 别名      | 命令                                           | 描述                              |
| --------- | ---------------------------------------------- | --------------------------------- |
| gconfdiff | `git config alias.dcolor "diff --color-words"` | 更好的 git diff，单词分隔并着色。 |
| gconfl    | `git config --list`                            | 列出所有设置。                    |
| gconfr    | `git config --local --get remote.origin.url`   | 从本地存储库中输出远程 origin。   |
