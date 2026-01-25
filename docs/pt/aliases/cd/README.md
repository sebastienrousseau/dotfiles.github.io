---
description: Aliases de navegacao de diretorio com favoritos, rastreamento de historico e atalhos inteligentes. Navegue pelo seu sistema de arquivos mais rapido.
lang: pt-BR
metaTitle: Aliases de CD - Dotfiles (PT)
permalink: /pt/aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, diretorio, navegacao, favoritos, aliases shell, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de navegacao de diretorio com favoritos, rastreamento de historico e atalhos inteligentes. Navegue pelo seu sistema de arquivos mais rapido.
  - name: twitter:title
    content: Aliases de CD - Dotfiles
  - name: og:title
    content: Aliases de CD - Dotfiles
  - name: og:description
    content: Aliases de navegacao de diretorio com favoritos, rastreamento de historico e atalhos inteligentes. Navegue pelo seu sistema de arquivos mais rapido.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de CD

Navegue pelo seu sistema de arquivos mais rapido. Favoritos, historico e atalhos inteligentes.

## Visao Geral

Estes aliases sao definidos em `cd.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Atalhos de navegacao

| Alias | Descricao |
|:---|:---|
| `-` | Alternar para diretorio anterior |
| `..` | Subir um nivel |
| `...` | Subir dois niveis |
| `....` | Subir tres niveis |
| `.....` | Subir quatro niveis |
| `hom` | Navegar para diretorio home |

### Atalhos de diretorio

| Alias | Caminho | Descricao |
|:---|:---|:---|
| `app` | `~/Applications` | Aplicativos |
| `cod` | `~/Code` | Diretorio de codigo |
| `dsk` | `~/Desktop` | Area de trabalho |
| `doc` | `~/Documents` | Documentos |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Downloads |
| `mus` | `~/Music` | Musica |
| `pic` | `~/Pictures` | Imagens |
| `vid` | `~/Videos` | Videos |

### Diretorios do sistema

| Alias | Caminho | Descricao |
|:---|:---|:---|
| `etc` | `/etc` | Configuracao do sistema |
| `var` | `/var` | Arquivos variaveis |
| `tmp` | `/tmp` | Arquivos temporarios |
| `usr` | `/usr` | Programas do usuario |

### Favoritos

| Comando | Alias | Descricao |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Criar favorito |
| `bookmark_list` | `bml` | Listar favoritos |
| `bookmark_update` | `bmu` | Atualizar favorito |
| `bookmark_remove` | `bmr` | Excluir favorito |
| `goto <name>` | `bmg` | Ir para favorito |

```bash
bm work-project      # Criar favorito
bmg work-project     # Navegar para favorito
bml                  # Listar todos os favoritos
```

### Historico

| Comando | Alias | Descricao |
|:---|:---|:---|
| `dirhistory` | `dh` | Mostrar historico de diretorios |
| `lwd` | `ld` | Retornar ao ultimo diretorio |

### Avancado

| Comando | Alias | Descricao |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Criar e entrar no diretorio |
| `proj` | `pr` | Ir para raiz do projeto |
| `pushd` | `pd` | Empurrar diretorio para pilha |
| `popd` | — | Retirar da pilha |
| `dirs` | — | Listar pilha de diretorios |

## Configuracao

Personalize o comportamento com variaveis de ambiente:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Ajuda

Execute `cdhelp` para ver todos os comandos ou `cdversion` para informacoes de versao.
