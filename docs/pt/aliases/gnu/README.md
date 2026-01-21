---
description: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
lang: pt-BR
metaTitle: The GNU Core Utilities aliases - Dotfiles (BR)
permalink: /pt/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:title
    content: The GNU Core Utilities aliases - Dotfiles (BR)
  - name: og:title
    content: The GNU Core Utilities aliases - Dotfiles (BR)
  - name: og:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Aliases de GNU Core Utilities

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
| b2sum     | `gb2sum`     | Imprimir or Verificar BLAKE2b (512-bit) checksums.                                                                                                                                              |
| base32    | `gbase32`    | Base32 encode or decode arquivo, or standard input, to standard output.                                                                                                                     |
| base64    | `gbase64`    | Base64 encode or decode arquivo, or standard input, to standard output.                                                                                                                     |
| basename  | `gbasename`  | Imprimir NAME with any leading diretório components removed.                                                                                                                                |
| basenc    | `gbasenc`    | Encode or decode arquivo, or standard input, to standard output.                                                                                                                            |
| cat       | `gcat`       | Concatenate arquivo(s), or standard input, to standard output.                                                                                                                              |
| chcon     | `gchcon`     | Change the SELinux security context of each arquivo to CONTEXT.                                                                                                                             |
| chgrp     | `gchgrp`     | Change the group of each arquivo to GROUP.                                                                                                                                                  |
| chmod     | `gchmod`     | Change the mode of each arquivo to MODE.                                                                                                                                                    |
| chown     | `gchownn`    | Change the owner and/or group of each arquivo to OWNER and/or GROUP.                                                                                                                        |
| chroot    | `gchroot`    | Run COMMAND with root diretório set to NEWROOT.                                                                                                                                          |
| cksum     | `gcksum`     | Imprimir CRC checksum and byte counts.                                                                                                                                                      |
| comm      | `gcomm`      | Compare two sorted arquivos line by line.                                                                                                                                                   |
| cp        | `gcp`        | Copiar SOURCE to DEST, or multiple SOURCE(s) to diretório.                                                                                                                                 |
| csplit    | `gcsplit`    | Split a arquivo into sections determined by context lines.                                                                                                                                  |
| cut       | `gcut`       | Imprimir selected parts of lines from each arquivo to standard output.                                                                                                                         |
| date      | `gdate`      | Imprimir or set the system date and time.                                                                                                                                                   |
| dd        | `gdd`        | Copiar a arquivo, converting and formatting according to the operands.                                                                                                                        |
| df        | `gdf`        | Report arquivo system disk space usage.                                                                                                                                                     |
| dir       | `gdir`       | Listar diretório contents.                                                                                                                                                                 |
| dircolors | `gdircolors` | Convert ls' output colors to dircolors' format.                                                                                                                                          |
| dirname   | `gdirname`   | Imprimir NAME with its last non-slash component and trailing slashes removed.                                                                                                               |
| du        | `gdu`        | Estimate arquivo space usage.                                                                                                                                                               |
| echo      | `gecho`      | Display a line of text.                                                                                                                                                                  |
| env       | `genv`       | Imprimir the current environment.                                                                                                                                                           |
| expand    | `gexpand`    | Convert tabs in each arquivo to spaces, writing to standard output.                                                                                                                         |
| expr      | `gexpr`      | Evaluate EXPRESSION.                                                                                                                                                                     |
| factor    | `gfactor`    | Imprimir prime factors of each given number.                                                                                                                                                |
| false     | `gfalse`     | Do nothing, unsuccessfully.                                                                                                                                                              |
| fmt       | `gfmt`       | Reformat paragraph text.                                                                                                                                                                 |
| fold      | `gfold`      | Wrap each input line to fit in specified width.                                                                                                                                          |
| grep      | `ggrep`      | Imprimir lines matching a pattern.                                                                                                                                                          |
| groups    | `ggroups`    | Imprimir the groups a user is in.                                                                                                                                                           |
| head      | `ghead`      | Imprimir the first 10 lines of each arquivo to standard output.                                                                                                                                |
| hostid    | `ghostid`    | Imprimir the hostid.                                                                                                                                                                        |
| id        | `gid`        | Imprimir real and effective user and group IDs.                                                                                                                                             |
| install   | `ginstall`   | Copiar arquivos and set attributes.                                                                                                                                                           |
| join      | `gjoin`      | Join lines of two arquivos on a common field.                                                                                                                                               |
| kill      | `gkill`      | Send a signal to a process.                                                                                                                                                              |
| link      | `glink`      | Criar a link to a arquivo.                                                                                                                                                                 |
| ln        | `gln`        | Make links between arquivos.                                                                                                                                                                |
| logname   | `glogname`   | Imprimir the user name associated with the current effective user ID.                                                                                                                       |
| ls        | `gls`        | Listar diretório contents.                                                                                                                                                                 |
| md5sum    | `gmd5sum`    | Imprimir or Verificar MD5 (128-bit) checksums.                                                                                                                                                  |
| mkdir     | `gmkdir`     | Criar the diretório(ies), if they do not already exist.                                                                                                                                 |
| mkfifo    | `gmkfifo`    | Criar named pipes (FIFOs) named PIPE.                                                                                                                                                   |
| mknod     | `gmknod`     | Criar special arquivos.                                                                                                                                                                    |
| mktemp    | `gmktemp`    | Criar a temporary arquivo or diretório, safely.                                                                                                                                            |
| mv        | `gmv`        | Mover SOURCE to DEST, or multiple SOURCE(s) to diretório.                                                                                                                                 |
| nice      | `gnice`      | Run a utility with modified scheduling priority.                                                                                                                                         |
| nl        | `gnl`        | Number lines of arquivos, writing to standard output.                                                                                                                                       |
| nohup     | `gnohup`     | Run a command immune to hangups, with output to a non-tty.                                                                                                                               |
| nproc     | `gnproc`     | Imprimir the number of processing units available.                                                                                                                                          |
| numfmt    | `gnumfmt`    | Reformat numbers.                                                                                                                                                                        |
| od        | `god`        | Dump a arquivo in octal and other formats.                                                                                                                                                  |
| paste     | `gpaste`     | Merge lines of arquivos.                                                                                                                                                                    |
| pathchk   | `gpathchk`   | Verificar whether a arquivo name is valid or portable.                                                                                                                                          |
| pinky     | `gpinky`     | Imprimir information about users.                                                                                                                                                           |
| pr        | `gpr`        | Paginate arquivo for printing.                                                                                                                                                              |
| printenv  | `gprintenv`  | Imprimir the current environment.                                                                                                                                                           |
| printf    | `gprintf`    | Format and Imprimir data.                                                                                                                                                                   |
| ptx       | `gptx`       | Display the contents of a terminal control arquivo.                                                                                                                                         |
| pwd       | `gpwd`       | Imprimir the name of the current working diretório.                                                                                                                                         |
| readlink  | `greadlink`  | Imprimir value of a symbolic link or canonical arquivo name.                                                                                                                                   |
| realpath  | `grealpath`  | Canonicalize existing arquivo names.                                                                                                                                                        |
| rm        | `grm`        | Remover (unlink) the arquivo(s).                                                                                                                                                             |
| rmdir     | `grmdir`     | Remover the diretório(ies), if they are empty.                                                                                                                                            |
| runcon    | `gruncon`    | Run a command with a different SELinux security context.                                                                                                                                 |
| sed       | `gsed`       | Stream editor for filtering and transforming text.                                                                                                                                       |
| seq       | `gseq`       | Imprimir a sequence of numbers.                                                                                                                                                             |
| sha1sum   | `gsha1sum`   | Imprimir or Verificar SHA1 (160-bit) checksums.                                                                                                                                                 |
| sha224sum | `gsha224sum` | Imprimir or Verificar SHA224 (224-bit) checksums.                                                                                                                                               |
| sha256sum | `gsha256sum` | Imprimir or Verificar SHA256 (256-bit) checksums.                                                                                                                                               |
| sha384sum | `gsha384sum` | Imprimir or Verificar SHA384 (384-bit) checksums.                                                                                                                                               |
| sha512sum | `gsha512sum` | Imprimir or Verificar SHA512 (512-bit) checksums.                                                                                                                                               |
| shred     | `gshred`     | Overwrite a arquivo to hide its contents, and optionally Excluir it.                                                                                                                         |
| shuf      | `gshuf`      | Output a random permutation of the input lines.                                                                                                                                          |
| sleep     | `gsleep`     | Pause for NUMBER seconds.                                                                                                                                                                |
| sort      | `gsort`      | Sort lines of text arquivos.                                                                                                                                                                |
| split     | `gsplit`     | Split a arquivo into pieces.                                                                                                                                                                |
| stat      | `gstat`      | Display arquivo or arquivo system status.                                                                                                                                                      |
| stdbuf    | `gstdbuf`    | Run COMMAND with modified buffering operations for its standard streams.                                                                                                                 |
| stty      | `gstty`      | Get and set terminal attributes.                                                                                                                                                         |
| sum       | `gsum`       | Imprimir CRC checksum and byte counts.                                                                                                                                                      |
| sync      | `gsync`      | Invoke sync to flush filesystem buffers.                                                                                                                                                 |
| tac       | `gtac`       | Concatenate and Imprimir arquivos in reverse.                                                                                                                                                  |
| tail      | `gtail`      | Output the last part of arquivos.                                                                                                                                                           |
| tee       | `gtee`       | Read from standard input and write to standard output and arquivos.                                                                                                                         |
| test      | `gtest`      | Evaluate conditional expression.                                                                                                                                                         |
| timeout   | `gtimeout`   | Run a command with a time limit.                                                                                                                                                         |
| touch     | `gtouch`     | Change arquivo timestamps.                                                                                                                                                                  |
| tr        | `gtr`        | Translate, squeeze, and/or Excluir characters.                                                                                                                                            |
| true      | `gtrue`      | Do nothing, successfully.                                                                                                                                                                |
| truncate  | `gtruncate`  | truncate: Shrink or extend the size of a arquivo to the specified size.                                                                                                                     |
| tsort     | `gtsort`     | Topological sort.                                                                                                                                                                        |
| tty       | `gtty`       | Imprimir arquivo name of terminal connected to standard input.                                                                                                                                 |
| uname     | `guname`     | Imprimir certain system information.                                                                                                                                                        |
| unexpand  | `gunexpand`  | unexpand: Convert spaces in each arquivo to tabs, writing to standard output.                                                                                                               |
| uniq      | `guniq`      | Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).                                                                                   |
| unlink    | `gunlink`    | Call the unlink function to Remover the specified arquivo.                                                                                                                                   |
| uptime    | `guptime`    | Imprimir the current time, the length of time the system has been up, the number of users on the system, and the average number of jobs in the run queue over the last 1, 5 and 15 minutes. |
| users     | `gusers`     | Output who is currently logged in.                                                                                                                                                       |
| vdir      | `gvdir`      | Listar information about the arquivos (the current diretório by default).                                                                                                                     |
| wc        | `gwc`        | Imprimir newline, word, and byte counts for each arquivo, and a total line if more than one arquivo is specified.                                                                                 |
| who       | `gwho`       | Imprimir information about users who are currently logged in.                                                                                                                               |
| whoami    | `gwhoami`    | Imprimir the user name associated with the current effective user ID.                                                                                                                       |
| yes       | `gyes`       | Repeatedly output a line with all specified STRING(s), or 'y'.                                                                                                                           |

[coreutils]: https://www.gnu.org/software/coreutils/
