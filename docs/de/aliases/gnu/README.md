---
description: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
lang: de-DE
metaTitle: The GNU Core Utilities aliases - Dotfiles (DE)
permalink: /de/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: twitter:title
    content: The GNU Core Utilities aliases - Dotfiles (DE)
  - name: og:title
    content: The GNU Core Utilities aliases - Dotfiles (DE)
  - name: og:description
    content: The GNU Core Utilities aliases, provide powerful commands that create shortcuts to frequently used Core utilities commands. All of these functions and aliases are wrappers around the GNU Core Utilities which are the basic, fundamental tools of a GNU/Linux system.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# GNU Core Utilities-Aliase

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
| b2sum     | `gb2sum`     | Drucken or Prüfen BLAKE2b (512-bit) checksums.                                                                                                                                              |
| base32    | `gbase32`    | Base32 encode or decode Datei, or standard input, to standard output.                                                                                                                     |
| base64    | `gbase64`    | Base64 encode or decode Datei, or standard input, to standard output.                                                                                                                     |
| basename  | `gbasename`  | Drucken NAME with any leading Verzeichnis components removed.                                                                                                                                |
| basenc    | `gbasenc`    | Encode or decode Datei, or standard input, to standard output.                                                                                                                            |
| cat       | `gcat`       | Concatenate Datei(s), or standard input, to standard output.                                                                                                                              |
| chcon     | `gchcon`     | Change the SELinux security context of each Datei to CONTEXT.                                                                                                                             |
| chgrp     | `gchgrp`     | Change the group of each Datei to GROUP.                                                                                                                                                  |
| chmod     | `gchmod`     | Change the mode of each Datei to MODE.                                                                                                                                                    |
| chown     | `gchownn`    | Change the owner and/or group of each Datei to OWNER and/or GROUP.                                                                                                                        |
| chroot    | `gchroot`    | Run COMMAND with root Verzeichnis set to NEWROOT.                                                                                                                                          |
| cksum     | `gcksum`     | Drucken CRC checksum and byte counts.                                                                                                                                                      |
| comm      | `gcomm`      | Compare two sorted Dateien line by line.                                                                                                                                                   |
| cp        | `gcp`        | Kopieren SOURCE to DEST, or multiple SOURCE(s) to Verzeichnis.                                                                                                                                 |
| csplit    | `gcsplit`    | Split a Datei into sections determined by context lines.                                                                                                                                  |
| cut       | `gcut`       | Drucken selected parts of lines from each Datei to standard output.                                                                                                                         |
| date      | `gdate`      | Drucken or set the system date and time.                                                                                                                                                   |
| dd        | `gdd`        | Kopieren a Datei, converting and formatting according to the operands.                                                                                                                        |
| df        | `gdf`        | Report Datei system disk space usage.                                                                                                                                                     |
| dir       | `gdir`       | Auflisten Verzeichnis contents.                                                                                                                                                                 |
| dircolors | `gdircolors` | Convert ls' output colors to dircolors' format.                                                                                                                                          |
| dirname   | `gdirname`   | Drucken NAME with its last non-slash component and trailing slashes removed.                                                                                                               |
| du        | `gdu`        | Estimate Datei space usage.                                                                                                                                                               |
| echo      | `gecho`      | Display a line of text.                                                                                                                                                                  |
| env       | `genv`       | Drucken the current environment.                                                                                                                                                           |
| expand    | `gexpand`    | Convert tabs in each Datei to spaces, writing to standard output.                                                                                                                         |
| expr      | `gexpr`      | Evaluate EXPRESSION.                                                                                                                                                                     |
| factor    | `gfactor`    | Drucken prime factors of each given number.                                                                                                                                                |
| false     | `gfalse`     | Do nothing, unsuccessfully.                                                                                                                                                              |
| fmt       | `gfmt`       | Reformat paragraph text.                                                                                                                                                                 |
| fold      | `gfold`      | Wrap each input line to fit in specified width.                                                                                                                                          |
| grep      | `ggrep`      | Drucken lines matching a pattern.                                                                                                                                                          |
| groups    | `ggroups`    | Drucken the groups a user is in.                                                                                                                                                           |
| head      | `ghead`      | Drucken the first 10 lines of each Datei to standard output.                                                                                                                                |
| hostid    | `ghostid`    | Drucken the hostid.                                                                                                                                                                        |
| id        | `gid`        | Drucken real and effective user and group IDs.                                                                                                                                             |
| install   | `ginstall`   | Kopieren Dateien and set attributes.                                                                                                                                                           |
| join      | `gjoin`      | Join lines of two Dateien on a common field.                                                                                                                                               |
| kill      | `gkill`      | Send a signal to a process.                                                                                                                                                              |
| link      | `glink`      | Erstellen a link to a Datei.                                                                                                                                                                 |
| ln        | `gln`        | Make links between Dateien.                                                                                                                                                                |
| logname   | `glogname`   | Drucken the user name associated with the current effective user ID.                                                                                                                       |
| ls        | `gls`        | Auflisten Verzeichnis contents.                                                                                                                                                                 |
| md5sum    | `gmd5sum`    | Drucken or Prüfen MD5 (128-bit) checksums.                                                                                                                                                  |
| mkdir     | `gmkdir`     | Erstellen the Verzeichnis(ies), if they do not already exist.                                                                                                                                 |
| mkfifo    | `gmkfifo`    | Erstellen named pipes (FIFOs) named PIPE.                                                                                                                                                   |
| mknod     | `gmknod`     | Erstellen special Dateien.                                                                                                                                                                    |
| mktemp    | `gmktemp`    | Erstellen a temporary Datei or Verzeichnis, safely.                                                                                                                                            |
| mv        | `gmv`        | Bewegen SOURCE to DEST, or multiple SOURCE(s) to Verzeichnis.                                                                                                                                 |
| nice      | `gnice`      | Run a utility with modified scheduling priority.                                                                                                                                         |
| nl        | `gnl`        | Number lines of Dateien, writing to standard output.                                                                                                                                       |
| nohup     | `gnohup`     | Run a command immune to hangups, with output to a non-tty.                                                                                                                               |
| nproc     | `gnproc`     | Drucken the number of processing units available.                                                                                                                                          |
| numfmt    | `gnumfmt`    | Reformat numbers.                                                                                                                                                                        |
| od        | `god`        | Dump a Datei in octal and other formats.                                                                                                                                                  |
| paste     | `gpaste`     | Merge lines of Dateien.                                                                                                                                                                    |
| pathchk   | `gpathchk`   | Prüfen whether a Datei name is valid or portable.                                                                                                                                          |
| pinky     | `gpinky`     | Drucken information about users.                                                                                                                                                           |
| pr        | `gpr`        | Paginate Datei for printing.                                                                                                                                                              |
| printenv  | `gprintenv`  | Drucken the current environment.                                                                                                                                                           |
| printf    | `gprintf`    | Format and Drucken data.                                                                                                                                                                   |
| ptx       | `gptx`       | Display the contents of a terminal control Datei.                                                                                                                                         |
| pwd       | `gpwd`       | Drucken the name of the current working Verzeichnis.                                                                                                                                         |
| readlink  | `greadlink`  | Drucken value of a symbolic link or canonical Datei name.                                                                                                                                   |
| realpath  | `grealpath`  | Canonicalize existing Datei names.                                                                                                                                                        |
| rm        | `grm`        | Entfernen (unlink) the Datei(s).                                                                                                                                                             |
| rmdir     | `grmdir`     | Entfernen the Verzeichnis(ies), if they are empty.                                                                                                                                            |
| runcon    | `gruncon`    | Run a command with a different SELinux security context.                                                                                                                                 |
| sed       | `gsed`       | Stream editor for filtering and transforming text.                                                                                                                                       |
| seq       | `gseq`       | Drucken a sequence of numbers.                                                                                                                                                             |
| sha1sum   | `gsha1sum`   | Drucken or Prüfen SHA1 (160-bit) checksums.                                                                                                                                                 |
| sha224sum | `gsha224sum` | Drucken or Prüfen SHA224 (224-bit) checksums.                                                                                                                                               |
| sha256sum | `gsha256sum` | Drucken or Prüfen SHA256 (256-bit) checksums.                                                                                                                                               |
| sha384sum | `gsha384sum` | Drucken or Prüfen SHA384 (384-bit) checksums.                                                                                                                                               |
| sha512sum | `gsha512sum` | Drucken or Prüfen SHA512 (512-bit) checksums.                                                                                                                                               |
| shred     | `gshred`     | Overwrite a Datei to hide its contents, and optionally Löschen it.                                                                                                                         |
| shuf      | `gshuf`      | Output a random permutation of the input lines.                                                                                                                                          |
| sleep     | `gsleep`     | Pause for NUMBER seconds.                                                                                                                                                                |
| sort      | `gsort`      | Sort lines of text Dateien.                                                                                                                                                                |
| split     | `gsplit`     | Split a Datei into pieces.                                                                                                                                                                |
| stat      | `gstat`      | Display Datei or Datei system status.                                                                                                                                                      |
| stdbuf    | `gstdbuf`    | Run COMMAND with modified buffering operations for its standard streams.                                                                                                                 |
| stty      | `gstty`      | Get and set terminal attributes.                                                                                                                                                         |
| sum       | `gsum`       | Drucken CRC checksum and byte counts.                                                                                                                                                      |
| sync      | `gsync`      | Invoke sync to flush filesystem buffers.                                                                                                                                                 |
| tac       | `gtac`       | Concatenate and Drucken Dateien in reverse.                                                                                                                                                  |
| tail      | `gtail`      | Output the last part of Dateien.                                                                                                                                                           |
| tee       | `gtee`       | Read from standard input and write to standard output and Dateien.                                                                                                                         |
| test      | `gtest`      | Evaluate conditional expression.                                                                                                                                                         |
| timeout   | `gtimeout`   | Run a command with a time limit.                                                                                                                                                         |
| touch     | `gtouch`     | Change Datei timestamps.                                                                                                                                                                  |
| tr        | `gtr`        | Translate, squeeze, and/or Löschen characters.                                                                                                                                            |
| true      | `gtrue`      | Do nothing, successfully.                                                                                                                                                                |
| truncate  | `gtruncate`  | truncate: Shrink or extend the size of a Datei to the specified size.                                                                                                                     |
| tsort     | `gtsort`     | Topological sort.                                                                                                                                                                        |
| tty       | `gtty`       | Drucken Datei name of terminal connected to standard input.                                                                                                                                 |
| uname     | `guname`     | Drucken certain system information.                                                                                                                                                        |
| unexpand  | `gunexpand`  | unexpand: Convert spaces in each Datei to tabs, writing to standard output.                                                                                                               |
| uniq      | `guniq`      | Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).                                                                                   |
| unlink    | `gunlink`    | Call the unlink function to Entfernen the specified Datei.                                                                                                                                   |
| uptime    | `guptime`    | Drucken the current time, the length of time the system has been up, the number of users on the system, and the average number of jobs in the run queue over the last 1, 5 and 15 minutes. |
| users     | `gusers`     | Output who is currently logged in.                                                                                                                                                       |
| vdir      | `gvdir`      | Auflisten information about the Dateien (the current Verzeichnis by default).                                                                                                                     |
| wc        | `gwc`        | Drucken newline, word, and byte counts for each Datei, and a total line if more than one Datei is specified.                                                                                 |
| who       | `gwho`       | Drucken information about users who are currently logged in.                                                                                                                               |
| whoami    | `gwhoami`    | Drucken the user name associated with the current effective user ID.                                                                                                                       |
| yes       | `gyes`       | Repeatedly output a line with all specified STRING(s), or 'y'.                                                                                                                           |

[coreutils]: https://www.gnu.org/software/coreutils/
