---
description: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
lang: es-ES
metaTitle: The GNU Core Utilities aliases - Dotfiles (ES)
permalink: /es/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:title
    content: The GNU Core Utilities aliases - Dotfiles (ES)
  - name: og:title
    content: The GNU Core Utilities aliases - Dotfiles (ES)
  - name: og:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Alias de GNU Core Utilities

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
| b2sum     | `gb2sum`     | Imprimir or Comprobar BLAKE2b (512-bit) checksums.                                                                                                                                              |
| base32    | `gbase32`    | Base32 encode or decode archivo, or standard input, to standard output.                                                                                                                     |
| base64    | `gbase64`    | Base64 encode or decode archivo, or standard input, to standard output.                                                                                                                     |
| basename  | `gbasename`  | Imprimir NAME with any leading directorio components removed.                                                                                                                                |
| basenc    | `gbasenc`    | Encode or decode archivo, or standard input, to standard output.                                                                                                                            |
| cat       | `gcat`       | Concatenate archivo(s), or standard input, to standard output.                                                                                                                              |
| chcon     | `gchcon`     | Change the SELinux security context of each archivo to CONTEXT.                                                                                                                             |
| chgrp     | `gchgrp`     | Change the group of each archivo to GROUP.                                                                                                                                                  |
| chmod     | `gchmod`     | Change the mode of each archivo to MODE.                                                                                                                                                    |
| chown     | `gchownn`    | Change the owner and/or group of each archivo to OWNER and/or GROUP.                                                                                                                        |
| chroot    | `gchroot`    | Run COMMAND with root directorio set to NEWROOT.                                                                                                                                          |
| cksum     | `gcksum`     | Imprimir CRC checksum and byte counts.                                                                                                                                                      |
| comm      | `gcomm`      | Compare two sorted archivos line by line.                                                                                                                                                   |
| cp        | `gcp`        | Copiar SOURCE to DEST, or multiple SOURCE(s) to directorio.                                                                                                                                 |
| csplit    | `gcsplit`    | Split a archivo into sections determined by context lines.                                                                                                                                  |
| cut       | `gcut`       | Imprimir selected parts of lines from each archivo to standard output.                                                                                                                         |
| date      | `gdate`      | Imprimir or set the system date and time.                                                                                                                                                   |
| dd        | `gdd`        | Copiar a archivo, converting and formatting according to the operands.                                                                                                                        |
| df        | `gdf`        | Report archivo system disk space usage.                                                                                                                                                     |
| dir       | `gdir`       | Listar directorio contents.                                                                                                                                                                 |
| dircolors | `gdircolors` | Convert ls' output colors to dircolors' format.                                                                                                                                          |
| dirname   | `gdirname`   | Imprimir NAME with its last non-slash component and trailing slashes removed.                                                                                                               |
| du        | `gdu`        | Estimate archivo space usage.                                                                                                                                                               |
| echo      | `gecho`      | Display a line of text.                                                                                                                                                                  |
| env       | `genv`       | Imprimir the current environment.                                                                                                                                                           |
| expand    | `gexpand`    | Convert tabs in each archivo to spaces, writing to standard output.                                                                                                                         |
| expr      | `gexpr`      | Evaluate EXPRESSION.                                                                                                                                                                     |
| factor    | `gfactor`    | Imprimir prime factors of each given number.                                                                                                                                                |
| false     | `gfalse`     | Do nothing, unsuccessfully.                                                                                                                                                              |
| fmt       | `gfmt`       | Reformat paragraph text.                                                                                                                                                                 |
| fold      | `gfold`      | Wrap each input line to fit in specified width.                                                                                                                                          |
| grep      | `ggrep`      | Imprimir lines matching a pattern.                                                                                                                                                          |
| groups    | `ggroups`    | Imprimir the groups a user is in.                                                                                                                                                           |
| head      | `ghead`      | Imprimir the first 10 lines of each archivo to standard output.                                                                                                                                |
| hostid    | `ghostid`    | Imprimir the hostid.                                                                                                                                                                        |
| id        | `gid`        | Imprimir real and effective user and group IDs.                                                                                                                                             |
| install   | `ginstall`   | Copiar archivos and set attributes.                                                                                                                                                           |
| join      | `gjoin`      | Join lines of two archivos on a common field.                                                                                                                                               |
| kill      | `gkill`      | Send a signal to a process.                                                                                                                                                              |
| link      | `glink`      | Crear a link to a archivo.                                                                                                                                                                 |
| ln        | `gln`        | Make links between archivos.                                                                                                                                                                |
| logname   | `glogname`   | Imprimir the user name associated with the current effective user ID.                                                                                                                       |
| ls        | `gls`        | Listar directorio contents.                                                                                                                                                                 |
| md5sum    | `gmd5sum`    | Imprimir or Comprobar MD5 (128-bit) checksums.                                                                                                                                                  |
| mkdir     | `gmkdir`     | Crear the directorio(ies), if they do not already exist.                                                                                                                                 |
| mkfifo    | `gmkfifo`    | Crear named pipes (FIFOs) named PIPE.                                                                                                                                                   |
| mknod     | `gmknod`     | Crear special archivos.                                                                                                                                                                    |
| mktemp    | `gmktemp`    | Crear a temporary archivo or directorio, safely.                                                                                                                                            |
| mv        | `gmv`        | Mover SOURCE to DEST, or multiple SOURCE(s) to directorio.                                                                                                                                 |
| nice      | `gnice`      | Run a utility with modified scheduling priority.                                                                                                                                         |
| nl        | `gnl`        | Number lines of archivos, writing to standard output.                                                                                                                                       |
| nohup     | `gnohup`     | Run a command immune to hangups, with output to a non-tty.                                                                                                                               |
| nproc     | `gnproc`     | Imprimir the number of processing units available.                                                                                                                                          |
| numfmt    | `gnumfmt`    | Reformat numbers.                                                                                                                                                                        |
| od        | `god`        | Dump a archivo in octal and other formats.                                                                                                                                                  |
| paste     | `gpaste`     | Merge lines of archivos.                                                                                                                                                                    |
| pathchk   | `gpathchk`   | Comprobar whether a archivo name is valid or portable.                                                                                                                                          |
| pinky     | `gpinky`     | Imprimir information about users.                                                                                                                                                           |
| pr        | `gpr`        | Paginate archivo for printing.                                                                                                                                                              |
| printenv  | `gprintenv`  | Imprimir the current environment.                                                                                                                                                           |
| printf    | `gprintf`    | Format and Imprimir data.                                                                                                                                                                   |
| ptx       | `gptx`       | Display the contents of a terminal control archivo.                                                                                                                                         |
| pwd       | `gpwd`       | Imprimir the name of the current working directorio.                                                                                                                                         |
| readlink  | `greadlink`  | Imprimir value of a symbolic link or canonical archivo name.                                                                                                                                   |
| realpath  | `grealpath`  | Canonicalize existing archivo names.                                                                                                                                                        |
| rm        | `grm`        | Eliminar (unlink) the archivo(s).                                                                                                                                                             |
| rmdir     | `grmdir`     | Eliminar the directorio(ies), if they are empty.                                                                                                                                            |
| runcon    | `gruncon`    | Run a command with a different SELinux security context.                                                                                                                                 |
| sed       | `gsed`       | Stream editor for filtering and transforming text.                                                                                                                                       |
| seq       | `gseq`       | Imprimir a sequence of numbers.                                                                                                                                                             |
| sha1sum   | `gsha1sum`   | Imprimir or Comprobar SHA1 (160-bit) checksums.                                                                                                                                                 |
| sha224sum | `gsha224sum` | Imprimir or Comprobar SHA224 (224-bit) checksums.                                                                                                                                               |
| sha256sum | `gsha256sum` | Imprimir or Comprobar SHA256 (256-bit) checksums.                                                                                                                                               |
| sha384sum | `gsha384sum` | Imprimir or Comprobar SHA384 (384-bit) checksums.                                                                                                                                               |
| sha512sum | `gsha512sum` | Imprimir or Comprobar SHA512 (512-bit) checksums.                                                                                                                                               |
| shred     | `gshred`     | Overwrite a archivo to hide its contents, and optionally Borrar it.                                                                                                                         |
| shuf      | `gshuf`      | Output a random permutation of the input lines.                                                                                                                                          |
| sleep     | `gsleep`     | Pause for NUMBER seconds.                                                                                                                                                                |
| sort      | `gsort`      | Sort lines of text archivos.                                                                                                                                                                |
| split     | `gsplit`     | Split a archivo into pieces.                                                                                                                                                                |
| stat      | `gstat`      | Display archivo or archivo system status.                                                                                                                                                      |
| stdbuf    | `gstdbuf`    | Run COMMAND with modified buffering operations for its standard streams.                                                                                                                 |
| stty      | `gstty`      | Get and set terminal attributes.                                                                                                                                                         |
| sum       | `gsum`       | Imprimir CRC checksum and byte counts.                                                                                                                                                      |
| sync      | `gsync`      | Invoke sync to flush filesystem buffers.                                                                                                                                                 |
| tac       | `gtac`       | Concatenate and Imprimir archivos in reverse.                                                                                                                                                  |
| tail      | `gtail`      | Output the last part of archivos.                                                                                                                                                           |
| tee       | `gtee`       | Read from standard input and write to standard output and archivos.                                                                                                                         |
| test      | `gtest`      | Evaluate conditional expression.                                                                                                                                                         |
| timeout   | `gtimeout`   | Run a command with a time limit.                                                                                                                                                         |
| touch     | `gtouch`     | Change archivo timestamps.                                                                                                                                                                  |
| tr        | `gtr`        | Translate, squeeze, and/or Borrar characters.                                                                                                                                            |
| true      | `gtrue`      | Do nothing, successfully.                                                                                                                                                                |
| truncate  | `gtruncate`  | truncate: Shrink or extend the size of a archivo to the specified size.                                                                                                                     |
| tsort     | `gtsort`     | Topological sort.                                                                                                                                                                        |
| tty       | `gtty`       | Imprimir archivo name of terminal connected to standard input.                                                                                                                                 |
| uname     | `guname`     | Imprimir certain system information.                                                                                                                                                        |
| unexpand  | `gunexpand`  | unexpand: Convert spaces in each archivo to tabs, writing to standard output.                                                                                                               |
| uniq      | `guniq`      | Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).                                                                                   |
| unlink    | `gunlink`    | Call the unlink function to Eliminar the specified archivo.                                                                                                                                   |
| uptime    | `guptime`    | Imprimir the current time, the length of time the system has been up, the number of users on the system, and the average number of jobs in the run queue over the last 1, 5 and 15 minutes. |
| users     | `gusers`     | Output who is currently logged in.                                                                                                                                                       |
| vdir      | `gvdir`      | Listar information about the archivos (the current directorio by default).                                                                                                                     |
| wc        | `gwc`        | Imprimir newline, word, and byte counts for each archivo, and a total line if more than one archivo is specified.                                                                                 |
| who       | `gwho`       | Imprimir information about users who are currently logged in.                                                                                                                               |
| whoami    | `gwhoami`    | Imprimir the user name associated with the current effective user ID.                                                                                                                       |
| yes       | `gyes`       | Repeatedly output a line with all specified STRING(s), or 'y'.                                                                                                                           |

[coreutils]: https://www.gnu.org/software/coreutils/
