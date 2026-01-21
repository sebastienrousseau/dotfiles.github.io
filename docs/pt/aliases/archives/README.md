---
description: Os aliases de arquivos são capazes de criar e manipular arquivos em uma variedade de formatos.
lang: pt-BR
metaTitle: Aliases de Arquivos - Dotfiles (BR)
permalink: /pt/aliases/archives/
---

# Aliases de Arquivos

O arquivo `archives.aliases.sh` cria aliases de atalho úteis para arquivamento
de arquivos e diretórios. Os aliases são capazes de criar e manipular arquivos em uma
variedade de formatos.

## 7-Zip

[7-Zip](http://www.7-zip.org/) é um compactador de arquivos com uma alta taxa de compressão.

| Alias | Comando | Descrição                                                                    |
| ----- | ------- | ---------------------------------------------------------------------------- |
| c7z   | `7z a`  | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo 7z. |
| e7z   | `7z x`  | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo 7z.     |

## Bzip2

[Bzip2](http://www.bzip.org/) é um compressor de dados de alta qualidade, livremente disponível e sem patentes.

| Alias | Comando   | Descrição                                 |
| ----- | --------- | ----------------------------------------- |
| cbz2  | `bzip2`   | Compactar um arquivo para um arquivo bz2. |
| ebz2  | `bunzip2` | Extrair um arquivo de um arquivo bz2.     |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) é um programa popular de compressão de dados
como um substituto para o compress.

| Alias | Comando  | Descrição                                |
| ----- | -------- | ---------------------------------------- |
| cgz   | `gzip`   | Compactar um arquivo para um arquivo gz. |
| egz   | `gunzip` | Extrair um arquivo de um arquivo gz.     |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) é um formato de arquivo
usado para agregar muitos arquivos em um arquivo para distribuir software de aplicação ou
bibliotecas na plataforma Java.

| Alias | Comando    | Descrição                                                                     |
| ----- | ---------- | ----------------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo jar. |
| ejar  | `jar -xvf` | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo jar.     |

## Tar

[Tar](https://www.gnu.org/software/tar/) é um programa de computador usado para armazenar
muitos arquivos juntos em um único arquivo.

| Alias | Comando     | Descrição                                                                        |
| ----- | ----------- | -------------------------------------------------------------------------------- |
| ctar  | `tar -cvf`  | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo tar.    |
| etar  | `tar -xvf`  | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo tar.        |
| ctgz  | `tar -cvzf` | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo tar.gz. |
| etgz  | `tar -xvzf` | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo tar.gz.     |

## Xz

[Xz](https://tukaani.org/xz/) é um software de compressão de dados de uso geral
com uma alta taxa de compressão.

| Alias | Comando    | Descrição                                                                    |
| ----- | ---------- | ---------------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo xz. |
| exz   | `xz -zxvf` | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo xz.     |

## Zip

[Zip](https://pt.wikipedia.org/wiki/ZIP) é um formato de arquivo usado para
gerar um único arquivo contendo um ou mais arquivos.

| Alias | Comando  | Descrição                                                                     |
| ----- | -------- | ----------------------------------------------------------------------------- |
| cz    | `zip -r` | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo zip. |
| ez    | `unzip`  | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo zip.     |

## Zstd

[Zstd](https://facebook.github.io/zstd/) é um algoritmo de compressão rápida sem perdas,
visando cenários de compressão em tempo real no nível zlib e melhores
taxas de compressão.

| Alias | Comando      | Descrição                                                                     |
| ----- | ------------ | ----------------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Compactar um diretório inteiro (incluindo subdiretórios) para um arquivo zst. |
| ezstd | `zstd -zxvf` | Extrair um diretório inteiro (incluindo subdiretórios) de um arquivo zst.     |
