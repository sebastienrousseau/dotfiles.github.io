---
description: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
lang: zh-CN
metaTitle: The GNU Core Utilities aliases - Dotfiles (CN)
permalink: /zh/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:title
    content: The GNU Core Utilities aliases - Dotfiles (CN)
  - name: og:title
    content: The GNU Core Utilities aliases - Dotfiles (CN)
  - name: og:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# GNU Core Utilities 别名

The `gnucoreutils-aliases.sh` file creates helpful shortcut aliases for many
commonly used [GNU coreutils][coreutils] commands.

The GNU Core Utilities aliases, provide powerful commands that create shortcuts
to frequently used Core utilities commands. All of these functions and aliases
are wrappers around the GNU Core Utilities which are the basic, fundamental
tools of a GNU/Linux system.

These are the core utilities which are expected to exist on every operating
system.

## GNU coreutils aliases

| Alias     | Command      | Description                                                                                                                                                                              |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| b2sum     | `gb2sum`     | 打印 or 检查 BLAKE2b (512-bit) checksums.                                                                                                                                              |
| base32    | `gbase32`    | Base32 encode or decode 文件, or standard input, to standard output.                                                                                                                     |
| base64    | `gbase64`    | Base64 encode or decode 文件, or standard input, to standard output.                                                                                                                     |
| basename  | `gbasename`  | 打印 NAME with any leading 目录 components removed.                                                                                                                                |
| basenc    | `gbasenc`    | Encode or decode 文件, or standard input, to standard output.                                                                                                                            |
| cat       | `gcat`       | Concatenate 文件(s), or standard input, to standard output.                                                                                                                              |
| chcon     | `gchcon`     | Change the SELinux security context of each 文件 to CONTEXT.                                                                                                                             |
| chgrp     | `gchgrp`     | Change the group of each 文件 to GROUP.                                                                                                                                                  |
| chmod     | `gchmod`     | Change the mode of each 文件 to MODE.                                                                                                                                                    |
| chown     | `gchownn`    | Change the owner and/or group of each 文件 to OWNER and/or GROUP.                                                                                                                        |
| chroot    | `gchroot`    | Run COMMAND with root 目录 set to NEWROOT.                                                                                                                                          |
| cksum     | `gcksum`     | 打印 CRC checksum and byte counts.                                                                                                                                                      |
| comm      | `gcomm`      | Compare two sorted 文件 line by line.                                                                                                                                                   |
| cp        | `gcp`        | 复制 SOURCE to DEST, or multiple SOURCE(s) to 目录.                                                                                                                                 |
| csplit    | `gcsplit`    | Split a 文件 into sections determined by context lines.                                                                                                                                  |
| cut       | `gcut`       | 打印 selected parts of lines from each 文件 to standard output.                                                                                                                         |
| date      | `gdate`      | 打印 or set the system date and time.                                                                                                                                                   |
| dd        | `gdd`        | 复制 a 文件, converting and formatting according to the operands.                                                                                                                        |
| df        | `gdf`        | Report 文件 system disk space usage.                                                                                                                                                     |
| dir       | `gdir`       | 列出 目录 contents.                                                                                                                                                                 |
| dircolors | `gdircolors` | Convert ls' output colors to dircolors' format.                                                                                                                                          |
| dirname   | `gdirname`   | 打印 NAME with its last non-slash component and trailing slashes removed.                                                                                                               |
| du        | `gdu`        | Estimate 文件 space usage.                                                                                                                                                               |
| echo      | `gecho`      | Display a line of text.                                                                                                                                                                  |
| env       | `genv`       | 打印 the current environment.                                                                                                                                                           |
| expand    | `gexpand`    | Convert tabs in each 文件 to spaces, writing to standard output.                                                                                                                         |
| expr      | `gexpr`      | Evaluate EXPRESSION.                                                                                                                                                                     |
| factor    | `gfactor`    | 打印 prime factors of each given number.                                                                                                                                                |
| false     | `gfalse`     | Do nothing, unsuccessfully.                                                                                                                                                              |
| fmt       | `gfmt`       | Reformat paragraph text.                                                                                                                                                                 |
| fold      | `gfold`      | Wrap each input line to fit in specified width.                                                                                                                                          |
| grep      | `ggrep`      | 打印 lines matching a pattern.                                                                                                                                                          |
| groups    | `ggroups`    | 打印 the groups a user is in.                                                                                                                                                           |
| head      | `ghead`      | 打印 the first 10 lines of each 文件 to standard output.                                                                                                                                |
| hostid    | `ghostid`    | 打印 the hostid.                                                                                                                                                                        |
| id        | `gid`        | 打印 real and effective user and group IDs.                                                                                                                                             |
| install   | `ginstall`   | 复制 文件 and set attributes.                                                                                                                                                           |
| join      | `gjoin`      | Join lines of two 文件 on a common field.                                                                                                                                               |
| kill      | `gkill`      | Send a signal to a process.                                                                                                                                                              |
| link      | `glink`      | 创建 a link to a 文件.                                                                                                                                                                 |
| ln        | `gln`        | Make links between 文件.                                                                                                                                                                |
| logname   | `glogname`   | 打印 the user name associated with the current effective user ID.                                                                                                                       |
| ls        | `gls`        | 列出 目录 contents.                                                                                                                                                                 |
| md5sum    | `gmd5sum`    | 打印 or 检查 MD5 (128-bit) checksums.                                                                                                                                                  |
| mkdir     | `gmkdir`     | 创建 the 目录(ies), if they do not already exist.                                                                                                                                 |
| mkfifo    | `gmkfifo`    | 创建 named pipes (FIFOs) named PIPE.                                                                                                                                                   |
| mknod     | `gmknod`     | 创建 special 文件.                                                                                                                                                                    |
| mktemp    | `gmktemp`    | 创建 a temporary 文件 or 目录, safely.                                                                                                                                            |
| mv        | `gmv`        | 移动 SOURCE to DEST, or multiple SOURCE(s) to 目录.                                                                                                                                 |
| nice      | `gnice`      | Run a utility with modified scheduling priority.                                                                                                                                         |
| nl        | `gnl`        | Number lines of 文件, writing to standard output.                                                                                                                                       |
| nohup     | `gnohup`     | Run a command immune to hangups, with output to a non-tty.                                                                                                                               |
| nproc     | `gnproc`     | 打印 the number of processing units available.                                                                                                                                          |
| numfmt    | `gnumfmt`    | Reformat numbers.                                                                                                                                                                        |
| od        | `god`        | Dump a 文件 in octal and other formats.                                                                                                                                                  |
| paste     | `gpaste`     | Merge lines of 文件.                                                                                                                                                                    |
| pathchk   | `gpathchk`   | 检查 whether a 文件 name is valid or portable.                                                                                                                                          |
| pinky     | `gpinky`     | 打印 information about users.                                                                                                                                                           |
| pr        | `gpr`        | Paginate 文件 for printing.                                                                                                                                                              |
| printenv  | `gprintenv`  | 打印 the current environment.                                                                                                                                                           |
| printf    | `gprintf`    | Format and 打印 data.                                                                                                                                                                   |
| ptx       | `gptx`       | Display the contents of a terminal control 文件.                                                                                                                                         |
| pwd       | `gpwd`       | 打印 the name of the current working 目录.                                                                                                                                         |
| readlink  | `greadlink`  | 打印 value of a symbolic link or canonical 文件 name.                                                                                                                                   |
| realpath  | `grealpath`  | Canonicalize existing 文件 names.                                                                                                                                                        |
| rm        | `grm`        | 移除 (unlink) the 文件(s).                                                                                                                                                             |
| rmdir     | `grmdir`     | 移除 the 目录(ies), if they are empty.                                                                                                                                            |
| runcon    | `gruncon`    | Run a command with a different SELinux security context.                                                                                                                                 |
| sed       | `gsed`       | Stream editor for filtering and transforming text.                                                                                                                                       |
| seq       | `gseq`       | 打印 a sequence of numbers.                                                                                                                                                             |
| sha1sum   | `gsha1sum`   | 打印 or 检查 SHA1 (160-bit) checksums.                                                                                                                                                 |
| sha224sum | `gsha224sum` | 打印 or 检查 SHA224 (224-bit) checksums.                                                                                                                                               |
| sha256sum | `gsha256sum` | 打印 or 检查 SHA256 (256-bit) checksums.                                                                                                                                               |
| sha384sum | `gsha384sum` | 打印 or 检查 SHA384 (384-bit) checksums.                                                                                                                                               |
| sha512sum | `gsha512sum` | 打印 or 检查 SHA512 (512-bit) checksums.                                                                                                                                               |
| shred     | `gshred`     | Overwrite a 文件 to hide its contents, and optionally 删除 it.                                                                                                                         |
| shuf      | `gshuf`      | Output a random permutation of the input lines.                                                                                                                                          |
| sleep     | `gsleep`     | Pause for NUMBER seconds.                                                                                                                                                                |
| sort      | `gsort`      | Sort lines of text 文件.                                                                                                                                                                |
| split     | `gsplit`     | Split a 文件 into pieces.                                                                                                                                                                |
| stat      | `gstat`      | Display 文件 or 文件 system status.                                                                                                                                                      |
| stdbuf    | `gstdbuf`    | Run COMMAND with modified buffering operations for its standard streams.                                                                                                                 |
| stty      | `gstty`      | Get and set terminal attributes.                                                                                                                                                         |
| sum       | `gsum`       | 打印 CRC checksum and byte counts.                                                                                                                                                      |
| sync      | `gsync`      | Invoke sync to flush filesystem buffers.                                                                                                                                                 |
| tac       | `gtac`       | Concatenate and 打印 文件 in reverse.                                                                                                                                                  |
| tail      | `gtail`      | Output the last part of 文件.                                                                                                                                                           |
| tee       | `gtee`       | Read from standard input and write to standard output and 文件.                                                                                                                         |
| test      | `gtest`      | Evaluate conditional expression.                                                                                                                                                         |
| timeout   | `gtimeout`   | Run a command with a time limit.                                                                                                                                                         |
| touch     | `gtouch`     | Change 文件 timestamps.                                                                                                                                                                  |
| tr        | `gtr`        | Translate, squeeze, and/or 删除 characters.                                                                                                                                            |
| true      | `gtrue`      | Do nothing, successfully.                                                                                                                                                                |
| truncate  | `gtruncate`  | truncate: Shrink or extend the size of a 文件 to the specified size.                                                                                                                     |
| tsort     | `gtsort`     | Topological sort.                                                                                                                                                                        |
| tty       | `gtty`       | 打印 文件 name of terminal connected to standard input.                                                                                                                                 |
| uname     | `guname`     | 打印 certain system information.                                                                                                                                                        |
| unexpand  | `gunexpand`  | unexpand: Convert spaces in each 文件 to tabs, writing to standard output.                                                                                                               |
| uniq      | `guniq`      | Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).                                                                                   |
| unlink    | `gunlink`    | Call the unlink function to 移除 the specified 文件.                                                                                                                                   |
| uptime    | `guptime`    | 打印 the current time, the length of time the system has been up, the number of users on the system, and the average number of jobs in the run queue over the last 1, 5 and 15 minutes. |
| users     | `gusers`     | Output who is currently logged in.                                                                                                                                                       |
| vdir      | `gvdir`      | 列出 information about the 文件 (the current 目录 by default).                                                                                                                     |
| wc        | `gwc`        | 打印 newline, word, and byte counts for each 文件, and a total line if more than one 文件 is specified.                                                                                 |
| who       | `gwho`       | 打印 information about users who are currently logged in.                                                                                                                               |
| whoami    | `gwhoami`    | 打印 the user name associated with the current effective user ID.                                                                                                                       |
| yes       | `gyes`       | Repeatedly output a line with all specified STRING(s), or 'y'.                                                                                                                           |

[coreutils]: https://www.gnu.org/software/coreutils/
