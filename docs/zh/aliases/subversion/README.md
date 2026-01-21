---
description: Subversion 别名是一组别名，允许您与 `svn` 命令交互。Subversion 是一个版本控制系统，允许您保留文件和目录（通常是源代码）的旧版本，保留更改者、更改时间和更改原因的日志。
lang: zh-CN
metaTitle: Subversion 别名 - Dotfiles (CN)
permalink: /zh/aliases/subversion/
---

# Subversion 别名

`subversion.aliases.sh` 文件为许多常用的 [Subversion](https://subversion.apache.org) 命令创建了有用的快捷别名。

Subversion 别名是一组别名，允许您与 `svn` 命令交互。Subversion 是一个版本控制系统，允许您保留文件和目录（通常是源代码）的旧版本，保留更改者、更改时间和更改原因的日志。

## Subversion

[Subversion](https://subversion.apache.org) 是一个跟踪文件和目录更改的版本控制系统。它用于管理软件项目的源代码。

| 别名 | 命令             | 描述                                                           |
| ---- | ---------------- | -------------------------------------------------------------- |
| sad  | `svn add`        | 将新文件和目录置于版本控制之下                                 |
| sau  | `svn auth`       | 管理缓存的身份验证凭据                                         |
| sbl  | `svn blame`      | 显示文件的每一行最后一次（或下一次）更改的时间                 |
| scg  | `svn changelist` | 将变更列表 CLNAME 与命名文件关联（或取消关联）                 |
| sco  | `svn checkout`   | 从存储库中检出工作副本                                         |
| scl  | `svn cleanup`    | 从导致工作副本锁定的中断操作中恢复，或删除不需要的文件         |
| sci  | `svn commit`     | 将更改从工作副本发送到存储库                                   |
| scp  | `svn copy`       | 在工作副本或存储库中复制文件和目录                             |
| sct  | `svn cat`        | 输出指定文件或 URL 的内容                                      |
| sdi  | `svn diff`       | 显示本地更改或两个修订版或路径之间的差异                       |
| sdl  | `svn delete`     | 从版本控制中删除文件和目录                                     |
| shp  | `svn help`       | 描述此程序或其子命令的用法                                     |
| sin  | `svn info`       | 显示有关本地或远程项目的信息                                   |
| sip  | `svn import`     | 将未版本控制的文件或树提交到存储库                             |
| slg  | `svn log`        | 显示一组修订版和/或路径的日志消息                              |
| slk  | `svn lock`       | 锁定工作副本路径或存储库中的 URL，其他用户无法提交对它们的更改 |
| sls  | `svn list`       | 列出存储库中的目录条目                                         |
| smd  | `svn mkdir`      | 在版本控制下创建一个新目录                                     |
| smg  | `svn merge`      | 将更改合并到工作副本中                                         |
| smgi | `svn mergeinfo`  | 显示与合并相关的信息                                           |
| smv  | `svn move`       | 在工作副本或存储库中移动（重命名）项目                         |
| sp   | `svn propset`    | 设置文件、目录或修订版上的属性值                               |
| spdl | `svn propdel`    | 从文件、目录或修订版中删除属性                                 |
| spdt | `svn propedit`   | 使用外部编辑器编辑属性                                         |
| spgt | `svn propget`    | 打印文件、目录或修订版上的属性值                               |
| sph  | `svn patch`      | 将补丁应用到工作副本                                           |
| spls | `svn proplist`   | 列出文件、目录或修订版上的所有属性                             |
| srl  | `svn relocate`   | 重定位工作副本以指向不同的存储库根 URL                         |
| srs  | `svn resolve`    | 解决工作副本文件或目录上的冲突                                 |
| srsd | `svn resolved`   | 删除工作副本文件或目录上的“冲突”状态                           |
| srv  | `svn revert`     | 恢复原始工作副本状态（撤消本地更改）                           |
| sst  | `svn status`     | 打印工作副本文件和目录的状态                                   |
| ssw  | `svn switch`     | 将工作副本更新到同一存储库中的不同 URL                         |
| sulk | `svn unlock`     | 解锁工作副本路径或 URL。                                       |
| sup  | `svn update`     | 将更改从存储库带入工作副本                                     |
| supg | `svn upgrade`    | 升级工作副本的元数据存储格式                                   |
| sxp  | `svn export`     | 创建树的未版本控制副本                                         |
