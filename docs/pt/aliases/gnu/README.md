---
description: Os alias GNU Core Utilities fornecem comandos poderosos como atalhos para utilitarios GNU. Sao wrappers das ferramentas basicas de um sistema GNU/Linux.
lang: pt-PT
metaTitle: Os alias GNU Core Utilities - Dotfiles (PT)
permalink: /pt/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Os alias GNU Core Utilities fornecem comandos poderosos como atalhos para utilitarios GNU. Sao wrappers das ferramentas basicas de um sistema GNU/Linux.
  - name: twitter:description
    content: Os alias GNU Core Utilities fornecem comandos poderosos como atalhos para utilitarios GNU. Sao wrappers das ferramentas basicas de um sistema GNU/Linux.
  - name: twitter:title
    content: Os alias GNU Core Utilities - Dotfiles (PT)
  - name: og:title
    content: Os alias GNU Core Utilities - Dotfiles (PT)
  - name: og:description
    content: Os alias GNU Core Utilities fornecem comandos poderosos como atalhos para utilitarios GNU. Sao wrappers das ferramentas basicas de um sistema GNU/Linux.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias Gnu

Gerenciar alias Gnu. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `gnu.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Colecao de alias para GNU Coreutils, um conjunto de utilitarios Unix basicos.
Eles oferecem comandos abreviados para uso rapido.

### Utilitarios basicos de gerenciamento de arquivos
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
### Utilitarios de manipulacao de conteudo
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
### Utilitarios de checksum e criptografia
- `b2sum` Print or check BLAKE2 message digests.
- `cksum` Print CRC checksum and byte counts.
- `sha1sum` Print or check SHA1 message digests.
- `sha224sum` Print or check SHA224 message digests.
- `sha256sum` Print or check SHA256 message digests.
- `sha384sum` Print or check SHA384 message digests.
- `sha512sum` Print or check SHA512 message digests.
### Outros utilitarios
- `base32` Print or convert base32 data.
- `base64` Encode or decode base64 data.
- `basenc` Encode or decode base64, base32,

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
