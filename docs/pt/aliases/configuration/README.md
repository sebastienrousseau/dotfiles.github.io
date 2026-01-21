---
description: Os aliases de Configuração são aliases para abrir os arquivos de configuração para o terminal e o shell.
lang: pt-BR
metaTitle: Aliases de Configuração - Dotfiles (BR)
permalink: /pt/aliases/configuration/
---

# Aliases de Configuração

O arquivo `configuration.aliases.sh` cria aliases de atalho úteis para abrir
os arquivos de configuração para o terminal e o shell.

> [!TIP]
> **Novo na v0.2.471**: Agora você pode usar o comando `dot` para gerenciar sua configuração.
> Tente `dot learn` para um tour interativo ou `dot doctor` para verificar sua configuração.

## Configuração

| Alias | Comando                          | Descrição                                                    |
| ----- | -------------------------------- | ------------------------------------------------------------ |
| bshp  | `${=EDITOR} $HOME/.bash_profile` | Abrir o perfil Bash no editor de texto padrão.               |
| bshrc | `${=EDITOR} $HOME/.bashrc`       | Abrir o arquivo de configuração Bash no editor de texto padrão. |
| gcfg  | `${=EDITOR} $HOME/.gitconfig`    | Abrir o arquivo de configuração Git no editor de texto padrão. |
| gign  | `${=EDITOR} $HOME/.gitignore`    | Abrir o arquivo git ignore no editor de texto padrão.        |
| zshrc | `${=EDITOR} $HOME/.zshrc`        | Abrir o arquivo de configuração Zsh no editor de texto padrão. |
