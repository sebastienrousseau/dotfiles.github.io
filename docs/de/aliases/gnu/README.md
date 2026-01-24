---
description: Die GNU Core Utilities Aliase bieten leistungsstarke Befehle als Kurzbefehle fuer haeufig genutzte Core Utilities. Alle Funktionen und Aliase sind Wrapper um die GNU Core Utilities, die grundlegenden Tools eines GNU/Linux-Systems.
lang: de-DE
metaTitle: Die GNU Core Utilities Aliase - Dotfiles (DE)
permalink: /de/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Die GNU Core Utilities Aliase bieten leistungsstarke Befehle als Kurzbefehle fuer haeufig genutzte Core Utilities. Alle Funktionen und Aliase sind Wrapper um die GNU Core Utilities, die grundlegenden Tools eines GNU/Linux-Systems.
  - name: twitter:description
    content: Die GNU Core Utilities Aliase bieten leistungsstarke Befehle als Kurzbefehle fuer haeufig genutzte Core Utilities. Alle Funktionen und Aliase sind Wrapper um die GNU Core Utilities, die grundlegenden Tools eines GNU/Linux-Systems.
  - name: twitter:title
    content: Die GNU Core Utilities Aliase - Dotfiles (DE)
  - name: og:title
    content: Die GNU Core Utilities Aliase - Dotfiles (DE)
  - name: og:description
    content: Die GNU Core Utilities Aliase bieten leistungsstarke Befehle als Kurzbefehle fuer haeufig genutzte Core Utilities. Alle Funktionen und Aliase sind Wrapper um die GNU Core Utilities, die grundlegenden Tools eines GNU/Linux-Systems.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Gnu-Aliase

Gnu-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `gnu.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dies ist eine Sammlung von Aliasen fuer das GNU Coreutils Paket, das
standardmaessig in vielen Linux-Distributionen enthalten ist.
Diese Aliase erleichtern die Nutzung, indem sie Kurzbefehle bereitstellen.
Die Sammlung deckt eine breite Palette von Utilities ab, von Dateioperationen
wie "cp" und "rm" bis zu Textverarbeitung wie "awk" und "sed". Es gibt auch
Aliase fuer Checksums wie "md5sum" und "sha256sum".

### Grundlegende Dateiverwaltungs-Utilities
- `basename` Strip directory and suffix from filenames.
- `cp` Copy files and directories.
- `dirname` Strip non-directory suffix from filenames.
- `ln` Create links between files.
- `loname` Print the name of the link.
- `ls` List directory contents.
- `mkdir` Create directories.
- `mkfifo` Make named pipes (FIFOs).
- `mknod` Make block or character special files.
- `mv` Move or rename files or directories.
- `pathchk` Check file name validity and portability.
- `pwd` Print working directory name.
- `readlink` Print resolved symbolic links or canonical file names.
- `realpath` Print the resolved physical path of the specified path.
- `rm` Remove files or directories.
- `rmdir` Remove empty directories.
- `unlink` Remove files or directories.
### Utilities zur Dateiinhaltsverarbeitung
- `awk` Pattern scanning and processing language.
- `cat` Concatenate and display files.
- `csplit` Split a file into context-determined pieces.
- `cut` Remove sections from each line of files.
- `diff` Compare files line by line.
- `fold` Wrap each input line to fit in specified width.
- `grep` Print lines matching a pattern.
- `head` Output the first part of files.
- `nl` Number lines of files.
- `paste` Merge lines of files.
- `patch` Apply a diff file to an original.
- `ptx` Produce a permuted index of file contents.
- `sed` Stream editor for filtering and transforming text.
- `sort` Sort lines of text files.
- `split` Split a file into pieces.
- `tail` Output the last part of files.
- `tr` Translate or delete characters.
### Datei-Checksum und Encryption-Utilities
- `b2sum` Print or check BLAKE2 message digests.
- `cksum` Print CRC checksum and byte counts.
- `sha1sum` Print or check SHA1 message digests.
- `sha224sum` Print or check SHA224 message digests.
- `sha256sum` Print or check SHA256 message digests.
- `sha384sum` Print or check SHA384 message digests.
- `sha512sum` Print or check SHA512 message digests.
### Andere Datei-Utilities
- `base32` Print or convert base32 data.
- `base64` Encode or decode base64 data.
- `basenc` Encode or decode base64, base32,

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
