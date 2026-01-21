---
description: GNU Core Utilities 别名提供了强大的命令，可以为常用的 Core utilities 命令创建快捷方式。所有这些函数和别名都是对 GNU Core Utilities 的封装，它们是 GNU/Linux 系统的基本基础工具。
lang: zh-CN
metaTitle: GNU Core Utilities 别名 - Dotfiles (CN)
permalink: /zh/aliases/gnu/
---

# GNU Core Utilities 别名

`gnucoreutils-aliases.sh` 文件为许多常用的 [GNU coreutils][coreutils] 命令创建了有用的快捷别名。

GNU Core Utilities 别名提供了强大的命令，可以为常用的 Core utilities 命令创建快捷方式。
所有这些函数和别名都是对 GNU Core Utilities 的封装，它们是 GNU/Linux 系统的基本基础工具。

这些是预期存在于每个操作系统上的核心实用程序。

## GNU coreutils 别名

| 别名      | 命令         | 描述                                                     |
| --------- | ------------ | -------------------------------------------------------- |
| b2sum     | `gb2sum`     | 打印或检查 BLAKE2b (512-bit) 校验和。                    |
| base32    | `gbase32`    | Base32 编码或解码 FILE，或标准输入，到标准输出。         |
| base64    | `gbase64`    | Base64 编码或解码 FILE，或标准输入，到标准输出。         |
| basename  | `gbasename`  | 打印 NAME，删除任何前导目录组件。                        |
| basenc    | `gbasenc`    | 编码或解码 FILE，或标准输入，到标准输出。                |
| cat       | `gcat`       | 连接 FILE(s)，或标准输入，到标准输出。                   |
| chcon     | `gchcon`     | 将每个 FILE 的 SELinux 安全上下文更改为 CONTEXT。        |
| chgrp     | `gchgrp`     | 将每个 FILE 的组更改为 GROUP。                           |
| chmod     | `gchmod`     | 将每个 FILE 的模式更改为 MODE。                          |
| chown     | `gchownn`    | 将每个 FILE 的所有者和/或组更改为 OWNER 和/或 GROUP。    |
| chroot    | `gchroot`    | 运行 COMMAND，将根目录设置为 NEWROOT。                   |
| cksum     | `gcksum`     | 打印 CRC 校验和和字节计数。                              |
| comm      | `gcomm`      | 逐行比较两个已排序的文件。                               |
| cp        | `gcp`        | 将 SOURCE 复制到 DEST，或将多个 SOURCE(s) 复制到 DIRECTORY。|
| csplit    | `gcsplit`    | 将文件分割成由上下文行确定的部分。                       |
| cut       | `gcut`       | 从每个 FILE 中打印选定的部分行到标准输出。               |
| date      | `gdate`      | 打印或设置系统日期和时间。                               |
| dd        | `gdd`        | 复制文件，根据操作数进行转换和格式化。                   |
| df        | `gdf`        | 报告文件系统磁盘空间使用情况。                           |
| dir       | `gdir`       | 列出目录内容。                                           |
| dircolors | `gdircolors` | 将 ls 的输出颜色转换为 dircolors 的格式。                |
| dirname   | `gdirname`   | 打印 NAME，删除其最后一个非斜杠组件和尾随斜杠。          |
| du        | `gdu`        | 估计文件空间使用情况。                                   |
| echo      | `gecho`      | 显示一行文本。                                           |
| env       | `genv`       | 打印当前环境。                                           |
| expand    | `gexpand`    | 将每个 FILE 中的制表符转换为控格，写入标准输出。         |
| expr      | `gexpr`      | 计算 EXPRESSION。                                        |
| factor    | `gfactor`    | 打印每个给定数字的质因数。                               |
| false     | `gfalse`     | 什么也不做，不成功。                                     |
| fmt       | `gfmt`       | 重新格式化段落文本。                                     |
| fold      | `gfold`      | 换行每个输入行以适应指定的宽度。                         |
| grep      | `ggrep`      | 打印匹配模式的行。                                       |
| groups    | `ggroups`    | 打印用户所在的组。                                       |
| head      | `ghead`      | 将每个 FILE 的前 10 行打印到标准输出。                   |
| hostid    | `ghostid`    | 打印 hostid。                                            |
| id        | `gid`        | 打印真实和有效的用户和组 ID。                            |
| install   | `ginstall`   | 复制文件并设置属性。                                     |
| join      | `gjoin`      | 在公共字段上连接两个文件的行。                           |
| kill      | `gkill`      | 向进程发送信号。                                         |
| link      | `glink`      | 创建指向文件的链接。                                     |
| ln        | `gln`        | 在文件之间建立链接。                                     |
| logname   | `glogname`   | 打印与当前有效用户 ID 关联的用户名。                     |
| ls        | `gls`        | 列出目录内容。                                           |
| md5sum    | `gmd5sum`    | 打印或检查 MD5 (128-bit) 校验和。                        |
| mkdir     | `gmkdir`     | 创建 DIRECTORY(ies)，如果它们尚不存在。                  |
| mkfifo    | `gmkfifo`    | 创建名为 PIPE 的命名管道 (FIFO)。                        |
| mknod     | `gmknod`     | 创建特殊文件。                                           |
| mktemp    | `gmktemp`    | 安全地创建临时文件或目录。                               |
| mv        | `gmv`        | 将 SOURCE 移动到 DEST，或将多个 SOURCE(s) 移动到 DIRECTORY。|
| nice      | `gnice`      | 以修改后的调度优先级运行实用程序。                       |
| nl        | `gnl`        | 为文件的行编号，写入标准输出。                           |
| nohup     | `gnohup`     | 运行一个不受挂断影响的命令，输出到非 tty。               |
| nproc     | `gnproc`     | 打印可用的处理单元数。                                   |
| numfmt    | `gnumfmt`    | 重新格式化数字。                                         |
| od        | `god`        | 以八进制和其他格式转储文件。                             |
| paste     | `gpaste`     | 合并文件的行。                                           |
| pathchk   | `gpathchk`   | 检查文件名是否有效或可移植。                             |
| pinky     | `gpinky`     | 打印有关用户的信息。                                     |
| pr        | `gpr`        | 对 FILE 进行分页以进行打印。                             |
| printenv  | `gprintenv`  | 打印当前环境。                                           |
| printf    | `gprintf`    | 格式化并打印数据。                                       |
| ptx       | `gptx`       | 显示终端控制文件的内容。                                 |
| pwd       | `gpwd`       | 打印当前工作目录的名称。                                 |
| readlink  | `greadlink`  | 打印符号链接的值或规范文件名。                           |
| realpath  | `grealpath`  | 规范化现有的文件名。                                     |
| rm        | `grm`        | 删除 (unlink) the FILE(s)。                              |
| rmdir     | `grmdir`     | 删除 DIRECTORY(ies)，如果它们为空。                      |
| runcon    | `gruncon`    | 以不同的 SELinux 安全上下文运行命令。                    |
| sed       | `gsed`       | 用于过滤和转换文本的流编辑器。                           |
| seq       | `gseq`       | 打印数字序列。                                           |
| sha1sum   | `gsha1sum`   | 打印或检查 SHA1 (160-bit) 校验和。                       |
| sha224sum | `gsha224sum` | 打印或检查 SHA224 (224-bit) 校验和。                     |
| sha256sum | `gsha256sum` | 打印或检查 SHA256 (256-bit) 校验和。                     |
| sha384sum | `gsha384sum` | 打印或检查 SHA384 (384-bit) 校验和。                     |
| sha512sum | `gsha512sum` | 打印或检查 SHA512 (512-bit) 校验和。                     |
| shred     | `gshred`     | 覆盖文件以隐藏其内容，并可选择删除它。                   |
| shuf      | `gshuf`      | 输出输入行的随机排列。                                   |
| sleep     | `gsleep`     | 暂停 NUMBER 秒。                                         |
| sort      | `gsort`      | 对文本文件的行进行排序。                                 |
| split     | `gsplit`     | 将文件分割成块。                                         |
| stat      | `gstat`      | 显示文件或文件系统状态。                                 |
| stdbuf    | `gstdbuf`    | 以修改后的缓冲操作运行 COMMAND 以用于其标准流。          |
| stty      | `gstty`      | 获取和设置终端属性。                                     |
| sum       | `gsum`       | 打印 CRC 校验和和字节计数。                              |
| sync      | `gsync`      | 调用 sync 以刷新文件系统缓冲区。                         |
| tac       | `gtac`       | 反向连接并打印文件。                                     |
| tail      | `gtail`      | 输出文件的最后一部分。                                   |
| tee       | `gtee`       | 从标准输入读取并写入标准输出和文件。                     |
| test      | `gtest`      | 计算条件表达式。                                         |
| timeout   | `gtimeout`   | 运行有时间限制的命令。                                   |
| touch     | `gtouch`     | 更改文件时间戳。                                         |
| tr        | `gtr`        | 翻译、压缩和/或删除字符。                                |
| true      | `gtrue`      | 什么也不做，成功。                                       |
| truncate  | `gtruncate`  | 截断：将文件的大小缩小或扩展到指定的大小。               |
| tsort     | `gtsort`     | 拓扑排序。                                               |
| tty       | `gtty`       | 打印连接到标准输入的终端的文件名。                       |
| uname     | `guname`     | 打印某些系统信息。                                       |
| unexpand  | `gunexpand`  | 取消扩展：将每个 FILE 中的空格转换为制表符，写入标准输出。|
| uniq      | `guniq`      | 从 INPUT（或标准输入）中过滤相邻的匹配行，写入 OUTPUT（或标准输出）。|
| unlink    | `gunlink`    | 调用 unlink 函数以删除指定的 FILE。                      |
| uptime    | `guptime`    | 打印当前时间、系统已运行的时间长度、系统上的用户数以及过去 1、5 和 15 分钟内运行队列中的平均作业数。|
| users     | `gusers`     | 输出当前登录的用户。                                     |
| vdir      | `gvdir`      | 列出有关 FILEs 的信息（默认为当前目录）。                |
| wc        | `gwc`        | 打印每个 FILE 的换行符、单词和字节计数，如果指定了多个 FILE，则打印总行数。|
| who       | `gwho`       | 打印有关当前登录的用户的信息。                           |
| whoami    | `gwhoami`    | 打印与当前有效用户 ID 关联的用户名。                     |
| yes       | `gyes`       | 重复输出包含所有指定 STRING(s) 的行，或 'y'。            |

[coreutils]: https://www.gnu.org/software/coreutils/
