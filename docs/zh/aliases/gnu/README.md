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

# GNU Core Utilities Aliases

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
| b2sum     | `gb2sum`     | Print or check BLAKE2b (512-bit) checksums.                                                                                                                                              |
| base32    | `gbase32`    | Base32 encode or decode FILE, or standard input, to standard output.                                                                                                                     |
| base64    | `gbase64`    | Base64 encode or decode FILE, or standard input, to standard output.                                                                                                                     |
| basename  | `gbasename`  | Print NAME with any leading directory components removed.                                                                                                                                |
| basenc    | `gbasenc`    | Encode or decode FILE, or standard input, to standard output.                                                                                                                            |
| cat       | `gcat`       | Concatenate FILE(s), or standard input, to standard output.                                                                                                                              |
| chcon     | `gchcon`     | Change the SELinux security context of each FILE to CONTEXT.                                                                                                                             |
| chgrp     | `gchgrp`     | Change the group of each FILE to GROUP.                                                                                                                                                  |
| chmod     | `gchmod`     | Change the mode of each FILE to MODE.                                                                                                                                                    |
| chown     | `gchownn`    | Change the owner and/or group of each FILE to OWNER and/or GROUP.                                                                                                                        |
| chroot    | `gchroot`    | Run COMMAND with root directory set to NEWROOT.                                                                                                                                          |
| cksum     | `gcksum`     | Print CRC checksum and byte counts.                                                                                                                                                      |
| comm      | `gcomm`      | Compare two sorted files line by line.                                                                                                                                                   |
| cp        | `gcp`        | Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.                                                                                                                                 |
| csplit    | `gcsplit`    | Split a file into sections determined by context lines.                                                                                                                                  |
| cut       | `gcut`       | Print selected parts of lines from each FILE to standard output.                                                                                                                         |
| date      | `gdate`      | Print or set the system date and time.                                                                                                                                                   |
| dd        | `gdd`        | Copy a file, converting and formatting according to the operands.                                                                                                                        |
| df        | `gdf`        | Report file system disk space usage.                                                                                                                                                     |
| dir       | `gdir`       | List directory contents.                                                                                                                                                                 |
| dircolors | `gdircolors` | Convert ls' output colors to dircolors' format.                                                                                                                                          |
| dirname   | `gdirname`   | Print NAME with its last non-slash component and trailing slashes removed.                                                                                                               |
| du        | `gdu`        | Estimate file space usage.                                                                                                                                                               |
| echo      | `gecho`      | Display a line of text.                                                                                                                                                                  |
| env       | `genv`       | Print the current environment.                                                                                                                                                           |
| expand    | `gexpand`    | Convert tabs in each FILE to spaces, writing to standard output.                                                                                                                         |
| expr      | `gexpr`      | Evaluate EXPRESSION.                                                                                                                                                                     |
| factor    | `gfactor`    | Print prime factors of each given number.                                                                                                                                                |
| false     | `gfalse`     | Do nothing, unsuccessfully.                                                                                                                                                              |
| fmt       | `gfmt`       | Reformat paragraph text.                                                                                                                                                                 |
| fold      | `gfold`      | Wrap each input line to fit in specified width.                                                                                                                                          |
| grep      | `ggrep`      | Print lines matching a pattern.                                                                                                                                                          |
| groups    | `ggroups`    | Print the groups a user is in.                                                                                                                                                           |
| head      | `ghead`      | Print the first 10 lines of each FILE to standard output.                                                                                                                                |
| hostid    | `ghostid`    | Print the hostid.                                                                                                                                                                        |
| id        | `gid`        | Print real and effective user and group IDs.                                                                                                                                             |
| install   | `ginstall`   | Copy files and set attributes.                                                                                                                                                           |
| join      | `gjoin`      | Join lines of two files on a common field.                                                                                                                                               |
| kill      | `gkill`      | Send a signal to a process.                                                                                                                                                              |
| link      | `glink`      | Create a link to a file.                                                                                                                                                                 |
| ln        | `gln`        | Make links between files.                                                                                                                                                                |
| logname   | `glogname`   | Print the user name associated with the current effective user ID.                                                                                                                       |
| ls        | `gls`        | List directory contents.                                                                                                                                                                 |
| md5sum    | `gmd5sum`    | Print or check MD5 (128-bit) checksums.                                                                                                                                                  |
| mkdir     | `gmkdir`     | Create the DIRECTORY(ies), if they do not already exist.                                                                                                                                 |
| mkfifo    | `gmkfifo`    | Create named pipes (FIFOs) named PIPE.                                                                                                                                                   |
| mknod     | `gmknod`     | Create special files.                                                                                                                                                                    |
| mktemp    | `gmktemp`    | Create a temporary file or directory, safely.                                                                                                                                            |
| mv        | `gmv`        | Move SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.                                                                                                                                 |
| nice      | `gnice`      | Run a utility with modified scheduling priority.                                                                                                                                         |
| nl        | `gnl`        | Number lines of files, writing to standard output.                                                                                                                                       |
| nohup     | `gnohup`     | Run a command immune to hangups, with output to a non-tty.                                                                                                                               |
| nproc     | `gnproc`     | Print the number of processing units available.                                                                                                                                          |
| numfmt    | `gnumfmt`    | Reformat numbers.                                                                                                                                                                        |
| od        | `god`        | Dump a file in octal and other formats.                                                                                                                                                  |
| paste     | `gpaste`     | Merge lines of files.                                                                                                                                                                    |
| pathchk   | `gpathchk`   | Check whether a file name is valid or portable.                                                                                                                                          |
| pinky     | `gpinky`     | Print information about users.                                                                                                                                                           |
| pr        | `gpr`        | Paginate FILE for printing.                                                                                                                                                              |
| printenv  | `gprintenv`  | Print the current environment.                                                                                                                                                           |
| printf    | `gprintf`    | Format and print data.                                                                                                                                                                   |
| ptx       | `gptx`       | Display the contents of a terminal control file.                                                                                                                                         |
| pwd       | `gpwd`       | Print the name of the current working directory.                                                                                                                                         |
| readlink  | `greadlink`  | Print value of a symbolic link or canonical file name.                                                                                                                                   |
| realpath  | `grealpath`  | Canonicalize existing file names.                                                                                                                                                        |
| rm        | `grm`        | Remove (unlink) the FILE(s).                                                                                                                                                             |
| rmdir     | `grmdir`     | Remove the DIRECTORY(ies), if they are empty.                                                                                                                                            |
| runcon    | `gruncon`    | Run a command with a different SELinux security context.                                                                                                                                 |
| sed       | `gsed`       | Stream editor for filtering and transforming text.                                                                                                                                       |
| seq       | `gseq`       | Print a sequence of numbers.                                                                                                                                                             |
| sha1sum   | `gsha1sum`   | Print or check SHA1 (160-bit) checksums.                                                                                                                                                 |
| sha224sum | `gsha224sum` | Print or check SHA224 (224-bit) checksums.                                                                                                                                               |
| sha256sum | `gsha256sum` | Print or check SHA256 (256-bit) checksums.                                                                                                                                               |
| sha384sum | `gsha384sum` | Print or check SHA384 (384-bit) checksums.                                                                                                                                               |
| sha512sum | `gsha512sum` | Print or check SHA512 (512-bit) checksums.                                                                                                                                               |
| shred     | `gshred`     | Overwrite a file to hide its contents, and optionally delete it.                                                                                                                         |
| shuf      | `gshuf`      | Output a random permutation of the input lines.                                                                                                                                          |
| sleep     | `gsleep`     | Pause for NUMBER seconds.                                                                                                                                                                |
| sort      | `gsort`      | Sort lines of text files.                                                                                                                                                                |
| split     | `gsplit`     | Split a file into pieces.                                                                                                                                                                |
| stat      | `gstat`      | Display file or file system status.                                                                                                                                                      |
| stdbuf    | `gstdbuf`    | Run COMMAND with modified buffering operations for its standard streams.                                                                                                                 |
| stty      | `gstty`      | Get and set terminal attributes.                                                                                                                                                         |
| sum       | `gsum`       | Print CRC checksum and byte counts.                                                                                                                                                      |
| sync      | `gsync`      | Invoke sync to flush filesystem buffers.                                                                                                                                                 |
| tac       | `gtac`       | Concatenate and print files in reverse.                                                                                                                                                  |
| tail      | `gtail`      | Output the last part of files.                                                                                                                                                           |
| tee       | `gtee`       | Read from standard input and write to standard output and files.                                                                                                                         |
| test      | `gtest`      | Evaluate conditional expression.                                                                                                                                                         |
| timeout   | `gtimeout`   | Run a command with a time limit.                                                                                                                                                         |
| touch     | `gtouch`     | Change file timestamps.                                                                                                                                                                  |
| tr        | `gtr`        | Translate, squeeze, and/or delete characters.                                                                                                                                            |
| true      | `gtrue`      | Do nothing, successfully.                                                                                                                                                                |
| truncate  | `gtruncate`  | truncate: Shrink or extend the size of a file to the specified size.                                                                                                                     |
| tsort     | `gtsort`     | Topological sort.                                                                                                                                                                        |
| tty       | `gtty`       | Print file name of terminal connected to standard input.                                                                                                                                 |
| uname     | `guname`     | Print certain system information.                                                                                                                                                        |
| unexpand  | `gunexpand`  | unexpand: Convert spaces in each FILE to tabs, writing to standard output.                                                                                                               |
| uniq      | `guniq`      | Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).                                                                                   |
| unlink    | `gunlink`    | Call the unlink function to remove the specified FILE.                                                                                                                                   |
| uptime    | `guptime`    | Print the current time, the length of time the system has been up, the number of users on the system, and the average number of jobs in the run queue over the last 1, 5 and 15 minutes. |
| users     | `gusers`     | Output who is currently logged in.                                                                                                                                                       |
| vdir      | `gvdir`      | List information about the FILEs (the current directory by default).                                                                                                                     |
| wc        | `gwc`        | Print newline, word, and byte counts for each FILE, and a total line if more than one FILE is specified.                                                                                 |
| who       | `gwho`       | Print information about users who are currently logged in.                                                                                                                               |
| whoami    | `gwhoami`    | Print the user name associated with the current effective user ID.                                                                                                                       |
| yes       | `gyes`       | Repeatedly output a line with all specified STRING(s), or 'y'.                                                                                                                           |

[coreutils]: https://www.gnu.org/software/coreutils/
