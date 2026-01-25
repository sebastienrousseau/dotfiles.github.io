---
description: Funções de shell fornecidas por Dotfiles para aprimorar sua experiência no terminal.
lang: pt-BR
metaTitle: Funções - Dotfiles (BR)
permalink: /functions/

meta:
  - name: keywords
    content: funções, shell, bash, zsh, dotfiles, produtividade
---

# Funções

Dotfiles inclui uma coleção de funções utilitárias para acelerar seu fluxo de trabalho. Elas são carregadas automaticamente em seu ambiente shell.

## API & Rede

| Função       | Descrição                                        |
| :----------- | :----------------------------------------------- |
| `apihealth`  | Verificar a saúde de um endpoint de API.         |
| `apilatency` | Medir latência de API.                           |
| `apiload`    | Teste de carga de API simples.                   |
| `curlheader` | Obter cabeçalhos HTTP usando curl.               |
| `curlstatus` | Obter código de status HTTP.                     |
| `curltime`   | Medir tempo de solicitação curl.                 |
| `httpdebug`  | Depurar tráfego HTTP.                            |
| `whoisport`  | Verificar quem está usando uma porta específica. |

## Gerenciamento de Arquivos

| Função            | Descrição                                                |
| :---------------- | :------------------------------------------------------- |
| `cdls`            | Mudar de diretório e listar conteúdo.                    |
| `extract`         | Extrair qualquer formato de arquivo (tar, zip, gz, etc). |
| `freespace`       | Verificar espaço livre em disco.                         |
| `hiddenfiles`     | Listar arquivos ocultos.                                 |
| `showhiddenfiles` | Alternar arquivos ocultos no Finder (macOS).             |
| `size`            | Obter tamanho do diretório.                              |
| `zipf`            | Zipar um arquivo ou diretório.                           |
| `backup`          | Fazer backup de um arquivo com data e hora.              |

## Processamento de Texto

| Função         | Descrição                               |
| :------------- | :-------------------------------------- |
| `encode64`     | Codificar Base64.                       |
| `hexdump`      | Hexdump de um arquivo.                  |
| `kebabcase`    | Converter string para kebab-case.       |
| `lowercase`    | Converter string para minúsculas.       |
| `sentencecase` | Converter string para Caso de sentença. |
| `snakecase`    | Converter string para snake_case.       |
| `titlecase`    | Converter string para Caso De Título.   |
| `uppercase`    | Converter string para MAIÚSCULAS.       |

## Sistema & Utilitários

| Função      | Descrição                                  |
| :---------- | :----------------------------------------- |
| `caffeine`  | Manter o sistema acordado (macOS).         |
| `genpass`   | Gerar uma senha segura.                    |
| `sysinfo`   | Exibir informações do sistema.             |
| `stopwatch` | Um cronômetro de terminal simples.         |
| `matrix`    | O efeito de chuva digital Matrix.          |
| `myproc`    | Listar meus processos.                     |
| `kill`      | Matar processos interativamente (via fzf). |

## Navegação

| Função        | Descrição                                  |
| :------------ | :----------------------------------------- |
| `goto`        | Navegação rápida para diretórios marcados. |
| `prependpath` | Preceder um diretório ao $PATH.            |

> [!TIP]
> Use `type <function_name>` em seu terminal para ver o código-fonte de qualquer função!
