---
description: Os alias de arquivos compactados criam e gerenciam arquivos em varios formatos.
lang: pt-PT
metaTitle: Alias de Archives - Dotfiles (PT)
permalink: /pt/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: Os alias de arquivos compactados criam e gerenciam arquivos em varios formatos.
  - name: twitter:description
    content: Os alias de arquivos compactados criam e gerenciam arquivos em varios formatos.
  - name: twitter:title
    content: Alias de Archives - Dotfiles (PT)
  - name: og:title
    content: Alias de Archives - Dotfiles (PT)
  - name: og:description
    content: Os alias de arquivos compactados criam e gerenciam arquivos em varios formatos.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Archives

Gerenciar alias de archives. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `archives.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este modulo fornece ferramentas para lidar com varios formatos de arquivo e compressao.
### Funcao universal de extracao
O comando `extract` (ou `x`) detecta o formato automaticamente:
```bash
extract archive.tar.gz
```
Formatos suportados:
- `.tar.bz2`, `.tbz2`
- `.tar.gz`, `.tgz`
- `.tar.xz`
- `.tar.zst`
- `.tar`
- `.bz2`
- `.gz`
- `.rar`
- `.zip`
- `.Z`
- `.7z`
- `.zst`
- `.xz`
- `.lz4`
- `.lha`, `.lzh`
- `.arj`
- `.arc`
- `.dms`
### Funcao avancada de compressao
`compress` (atalho `ac`) oferece interface unica e suporta nivel de compressao:
```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```
Formatos: `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`
### Backup rapido
`backup` (atalho `bak`) cria backups com timestamp:
```bash
backup important_folder
backup database.sql zip
```
### Listar conteudo
`list_archive` (atalho `lar`) mostra conteudo:
```bash
list_archive backup.tar.gz
```
### Compressao de arquivos grandes (legacy)
`compress_large` (atalho `acl`) mantida por compatibilidade:
```bash
compress_large gz largefile.dat
compress_large xz data.bin output.xz
```
### Ferramentas de arquivo
- `c7z` - criar 7z
- `x7z` - extrair 7z
- `l7z` - listar conteudo
- `ctar` - criar tar
- `xtar` - extrair tar
- `ltar` - listar conteudo
- `ctgz` - criar tar.gz
- `xtgz` - extrair tar.gz
- `ltgz` - listar tar.gz
- `ctbz` - criar tar.bz2
- `xtbz` - extrair tar.bz2
- `ltbz` - listar tar.bz2
- `ctxz` - criar tar.xz
- `xtxz` - extrair tar.xz
- `ltxz` - listar tar.xz
- `ctzst` - criar tar.zst
- `xtzst` - extrair tar.zst
- `ltzst` - listar tar.zst
- `czip` - criar zip
- `xzip` - extrair zip
- `lzip` - listar conteudo
- `crar` - criar rar
- `xrar` - extrair rar
- `lrar` - listar conteudo
### Ferramentas de compressao
#### Gzip
- `cgz` - comprimir com gzip
- `xgz` - extrair gzip
#### Bzip2
- `cbz` - comprimir com bzip2
- `xbz` - extrair bzip2
#### XZ
- `cxz` - comprimir com xz
- `xxz` - extrair xz
#### Zstandard
- `czst` - comprimir com zstd
- `xzst` - extrair zstd
#### LZ4
- `clz4` - comprimir com lz4
- `xlz4` - extrair lz4
### Recursos
- Deteccao automatica de formato
- Tab completion
- Tratamento robusto de erros
- Suporte a nomes com espacos
- Indicadores de progresso (com `pv`)
- Multiplos arquivos
- Niveis de compressao
- Verificacao de integridade
- Listagem de conteudo
- Backups com timestamp
- Compatibilidade cross-platform
### Exemplos
```bash
extract archive.tar.gz
x archive.tar.gz
list_archive archive.zip
lar archive.zip
compress tgz file1.txt file2.txt docs/ archive.tar.gz
compress zip -l 9 important/ backup.zip
backup project_folder
backup database.sql 7z
compress gz -l 9 largefile.dat compressed.gz
compress_large xz largefile.dat
c7z archive.7z files/
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
