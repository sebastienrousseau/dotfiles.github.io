---
description: Os alias Tmux sao uma colecao de alias que permitem interagir com o comando `tmux`. Tmux e uma ferramenta que permite executar varias sessoes de terminal em uma unica janela.
lang: pt-PT
metaTitle: Alias de Tmux - Dotfiles (PT)
permalink: /pt/aliases/tmux/

meta:
  - name: keywords
    content: aliases, tmux, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Os alias Tmux sao uma colecao de alias que permitem interagir com o comando `tmux`. Tmux e uma ferramenta que permite executar varias sessoes de terminal em uma unica janela.
  - name: twitter:description
    content: Os alias Tmux sao uma colecao de alias que permitem interagir com o comando `tmux`. Tmux e uma ferramenta que permite executar varias sessoes de terminal em uma unica janela.
  - name: twitter:title
    content: Alias de Tmux - Dotfiles (PT)
  - name: og:title
    content: Alias de Tmux - Dotfiles (PT)
  - name: og:description
    content: Os alias Tmux sao uma colecao de alias que permitem interagir com o comando `tmux`. Tmux e uma ferramenta que permite executar varias sessoes de terminal em uma unica janela.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Tmux

Gerenciar alias de Tmux. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `tmux.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

## 🆃🅼🆄🆇 🅲🅾🅽🅵🅸🅶🆄🆁🅰🆃🅸🅾🅽
Uma configuracao tmux abrangente, projetada para produtividade e facilidade de uso. A configuracao e organizada em arquivos modulares:
- **default**: Configuracoes basicas e plugins
- **display**: Configuracoes visuais e de comportamento
- **linux**: Funcionalidades especificas de plataforma
- **navigation**: Atalhos completos
- **panes**: Configuracoes de paines
- **theme**: Barra de status e estilo visual
### Recursos-chave
- Esquema de cores moderno com barra de status por sistema
- Atalhos intuitivos com Ctrl+a como prefixo
- Controles completos de janelas e paines
- Persistencia de sessoes com tmux-resurrect e tmux-continuum
- Menu de ajuda rolavel (Ctrl+a ?)
- Suporte a mouse para navegacao
### Navegacao e atalhos
Pressione `Ctrl+a ?` para ver todos os atalhos. Principais funcoes:
- **Gerenciamento de janelas**: dividir, criar, navegar e renomear
- **Navegacao de paines**: mover entre paines com h/j/k/l
- **Gerenciamento de sessoes**: criar, renomear e alternar
- **Copy mode**: selecao estilo Vim, busca e integracao com clipboard

Alias praticos para operacoes tmux:
| Alias | Descricao |
|-------|-----------|
| `tm`  | Iniciar tmux |
| `tma` | Anexar a ultima sessao |
| `tmat` | Anexar a uma sessao especifica |
| `tmks` | Encerrar todas as sessoes exceto a atual |
| `tmka` | Encerrar todas as sessoes (servidor) |
| `tml` | Listar todas as sessoes |
| `tmn` | Nova sessao sem nome |
| `tms` | Nova sessao com nome |
| `tmr` | Recarregar configuracao tmux |
| `tmls` | Listar janelas |
| `tmlp` | Listar paines |
| `tmi` | Mostrar info do tmux |
## Instalacao
1. Clonar o repositorio:
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git ~/.dotfiles
   ```
2. Executar o script de instalacao:
   ```bash
   cd ~/.dotfiles && ./install.sh
   ```
3. Instalar o gerenciador de plugins do tmux (se necessario):
   ```bash
   git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
   ```
4. Abrir o tmux e pressionar `Ctrl+a I` para instalar plugins
## Uso
Inicie uma nova sessao tmux com:
```bash
tmux
```
Ou use qualquer alias para operacoes comuns.
## Licenca
MIT

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
