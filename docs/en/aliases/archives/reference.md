---
title: Archives Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Archives in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Archives Reference Appendix | Dotfiles preview
canonical: /en/aliases/archives/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Archives Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/archives/reference/
---

# Archives Reference Appendix

## Source files

- `.chezmoitemplates/aliases/archives/archives.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `ac` | `'compress'        # Generic compression (Archive Create)` |
| `acl` | `'compress_large' # Legacy compress_large` |
| `bak` | `'backup'         # Quick backup function` |
| `c7z` | `'7z a' # Create 7z archive` |
| `cbz` | `'bzip2 -zk' # Compress with bzip2` |
| `cgz` | `'gzip -cv' # Compress with gzip` |
| `clz4` | `'lz4 -zc' # Compress with lz4` |
| `crar` | `'rar a' # Create rar archive` |
| `ctar` | `'tar -cvf'         # Create tar archive` |
| `ctbz` | `'tar -jcvf'        # Create tar.bz2 archive` |
| `ctgz` | `'tar -zcvf'        # Create tar.gz archive` |
| `ctxz` | `'tar -Jcvf'        # Create tar.xz archive` |
| `ctzst` | `'tar --zstd -cvf' # Create tar.zst archive` |
| `cxz` | `'xz -z' # Compress with xz` |
| `czip` | `'zip -r' # Create zip archive` |
| `czst` | `'zstd -z' # Compress with zstd` |
| `l7z` | `'7z l'              # List 7z archive contents` |
| `lar` | `'list_archive'      # Generic list archive contents` |
| `lrar` | `'unrar l' # List rar archive contents` |
| `ltar` | `'tar -tvf'         # List tar archive contents` |
| `ltbz` | `'tar -tjvf'        # List tar.bz2 archive contents` |
| `ltgz` | `'tar -tzvf'        # List tar.gz archive contents` |
| `ltxz` | `'tar -tJvf'        # List tar.xz archive contents` |
| `ltzst` | `'tar --zstd -tvf' # List tar.zst archive contents` |
| `lzip` | `'unzip -l'         # List zip archive contents` |
| `x` | `'extract' # Extract any supported archive (using universal extract script)` |
| `x7z` | `'7z x' # Extract 7z archive` |
| `xbz` | `'bzip2 -dk' # Extract bzip2` |
| `xgz` | `'gzip -dv' # Extract gzip` |
| `xlz4` | `'lz4 -dc' # Extract lz4` |
| `xrar` | `'unrar x' # Extract rar archive` |
| `xtar` | `'tar -xvf'         # Extract tar archive` |
| `xtbz` | `'tar -jxvf'        # Extract tar.bz2 archive` |
| `xtgz` | `'tar -zxvf'        # Extract tar.gz archive` |
| `xtxz` | `'tar -Jxvf'        # Extract tar.xz archive` |
| `xtzst` | `'tar --zstd -xvf' # Extract tar.zst archive` |
| `xxz` | `'xz -d' # Extract xz` |
| `xzip` | `'unzip'  # Extract zip archive` |
| `xzst` | `'zstd -d' # Extract zstd` |
| `zap` | `dot_confirm_destructive "rm -vi (zap)" && rm -vi` |

## Helper functions

- `backup()`
- `compress()`
- `extract()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
