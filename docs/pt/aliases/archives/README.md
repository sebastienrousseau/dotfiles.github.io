---
description: Aliases de arquivamento e compactacao para manipular tar, zip, 7z e mais. Extrair, compactar e gerenciar arquivos com comandos simples.
lang: pt-BR
metaTitle: Aliases de Arquivos - Dotfiles (PT)
permalink: /pt/aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: arquivos, compactacao, tar, zip, 7z, gzip, extrair, aliases shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de arquivamento e compactacao para manipular tar, zip, 7z e mais. Extrair, compactar e gerenciar arquivos com comandos simples.
  - name: twitter:title
    content: Aliases de Arquivos - Dotfiles
  - name: og:title
    content: Aliases de Arquivos - Dotfiles
  - name: og:description
    content: Aliases de arquivamento e compactacao para manipular tar, zip, 7z e mais. Extrair, compactar e gerenciar arquivos com comandos simples.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Arquivos

Compactar, extrair e gerenciar arquivos. Suporte para todos os principais formatos.

## Visao Geral

Estes aliases sao definidos em `archives.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Extracao universal

O comando `extract` (atalho `x`) detecta e extrai automaticamente qualquer arquivo:

```bash
extract archive.tar.gz
```

**Formatos suportados:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Compactar

Crie arquivos com o comando `compress` (atalho `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Formatos suportados:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Backup

Crie backups com data e hora usando `backup` (atalho `bak`):

```bash
backup important_folder
backup database.sql zip
```

### Listar conteudo

Visualize o conteudo do arquivo com `list_archive` (atalho `lar`):

```bash
list_archive backup.tar.gz
```

### Ferramentas de arquivo

| Alias | Descricao |
|:---|:---|
| `c7z` | Criar arquivo 7z |
| `x7z` | Extrair arquivo 7z |
| `l7z` | Listar conteudo 7z |
| `ctar` | Criar arquivo tar |
| `xtar` | Extrair arquivo tar |
| `ltar` | Listar conteudo tar |
| `ctgz` | Criar arquivo tar.gz |
| `xtgz` | Extrair arquivo tar.gz |
| `ltgz` | Listar conteudo tar.gz |
| `ctbz` | Criar arquivo tar.bz2 |
| `xtbz` | Extrair arquivo tar.bz2 |
| `ltbz` | Listar conteudo tar.bz2 |
| `ctxz` | Criar arquivo tar.xz |
| `xtxz` | Extrair arquivo tar.xz |
| `ltxz` | Listar conteudo tar.xz |
| `ctzst` | Criar arquivo tar.zst |
| `xtzst` | Extrair arquivo tar.zst |
| `ltzst` | Listar conteudo tar.zst |
| `czip` | Criar arquivo zip |
| `xzip` | Extrair arquivo zip |
| `lzip` | Listar conteudo zip |
| `crar` | Criar arquivo rar |
| `xrar` | Extrair arquivo rar |
| `lrar` | Listar conteudo rar |

### Ferramentas de compactacao

| Alias | Descricao |
|:---|:---|
| `cgz` | Compactar com gzip |
| `xgz` | Extrair gzip |
| `cbz` | Compactar com bzip2 |
| `xbz` | Extrair bzip2 |
| `cxz` | Compactar com xz |
| `xxz` | Extrair xz |
| `czst` | Compactar com zstd |
| `xzst` | Extrair zstd |
| `clz4` | Compactar com lz4 |
| `xlz4` | Extrair lz4 |
