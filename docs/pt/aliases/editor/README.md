---
description: Os alias de editor abrem o arquivo no editor configurado na variavel de ambiente `editor`.
lang: pt-PT
metaTitle: Alias de editor - Dotfiles (PT)
permalink: /pt/aliases/editor/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Os alias de editor abrem o arquivo no editor configurado na variavel de ambiente `editor`.
  - name: twitter:description
    content: Os alias de editor abrem o arquivo no editor configurado na variavel de ambiente `editor`.
  - name: twitter:title
    content: Alias de editor - Dotfiles (PT)
  - name: og:title
    content: Alias de editor - Dotfiles (PT)
  - name: og:description
    content: Os alias de editor abrem o arquivo no editor configurado na variavel de ambiente `editor`.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de editor

Gerenciar alias de editor. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `editor.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece um conjunto abrangente de alias para editar arquivos usando o editor configurado no seu ambiente. Ele funciona em conjunto com o script de configuracao do editor (`editor.sh`), que seleciona automaticamente o melhor editor disponivel no sistema.
### Editores suportados
Os seguintes editores sao suportados com alias especializados:
- **Neovim** - Versao moderna e aprimorada do Vim
- **Visual Studio Code** - Editor de codigo com extensoes
- **Vim** - Editor altamente configuravel
- **Nano** - Editor simples e amigavel no terminal
- **Emacs** - Editor extensivel e personalizavel
- **Sublime Text** - Editor sofisticado para codigo
- **Atom** - Editor hackeavel
Esses alias universais funcionam com qualquer editor definido por `editor.sh`:
- `e` - Edicao rapida
- `edit` - Comando de edicao padrao
- `editor` - Comando completo do editor
- `mate` - Comando estilo TextMate
- `n` - Alias curto de edicao
- `v` - Alias de edicao estilo Vim
Dependendo do editor escolhido por `editor.sh`, outros alias ficam disponiveis:
- `vi`, `vim` - Redirecionado para Neovim quando ele e o editor principal
- `nvimrc` - Editar configuracao Vimscript do Neovim
- `nvimlua` - Editar configuracao Lua do Neovim
- `nvimconf` - Abrir diretorio de configuracao do Neovim
- `vsc` - Atalho para VS Code
- `vsca` - Adicionar pasta a janela atual
- `vscd` - Comparar dois arquivos
- `vscn` - Abrir nova janela
- `vscr` - Reutilizar janela ao abrir arquivos
- `vscu` - Abrir com diretorio de dados do usuario personalizado
- `vsced` - Abrir com diretorio de extensoes personalizado
- `vscex` - Instalar extensao do VS Code
- `vsclist` - Listar extensoes instaladas
- `vi` - Redirecionado para Vim quando ele e o editor principal
- `vimrc` - Editar configuracao do Vim
- `vimconf` - Abrir diretorio de configuracao do Vim
- `nanorc` - Editar configuracao do Nano
- `ne` - Nano aprimorado com numeros de linha e scroll suave
- `em` - Atalho para Emacs
- `emacs-nw` - Rodar Emacs no terminal
- `emacsc` - Iniciar cliente do Emacs
- `emacsrc` - Editar configuracao do Emacs
- `et` - Emacs rapido no terminal
- `st` - Abrir Sublime Text
- `stt` - Abrir diretorio atual no Sublime Text
- `stn` - Abrir nova janela do Sublime Text
- `a` - Abrir Atom
- `at` - Abrir diretorio atual no Atom
- `an` - Abrir nova janela do Atom
### Edicao rapida de configuracoes
O script fornece a funcao `editrc` para editar arquivos comuns rapidamente:
```bash
editrc bash     # Editar ~/.bashrc
editrc zsh      # Editar ~/.zshrc
editrc vim      # Editar ~/.vimrc
editrc nvim     # Editar init do Neovim
editrc tmux     # Editar ~/.tmux.conf
editrc git      # Editar ~/.gitconfig
editrc ssh      # Editar ~/.ssh/config
editrc alias    # Editar ~/.dotfiles/aliases
editrc dotfiles # Editar ~/.dotfiles
```
### Integracao com editor.sh
Esses alias trabalham com `editor.sh`, que:
1. Detecta automaticamente editores disponiveis
2. Define variaveis de ambiente (`EDITOR`, `VISUAL`, `GIT_EDITOR`, etc.)
3. Configura ajustes especificos do editor
4. Fornece fallbacks inteligentes
Os alias foram projetados para oferecer atalhos convenientes conforme o editor escolhido.
### Exemplos de uso
```bash
# Edicao rapida com o editor padrao
e myfile.txt
# Editar configuracoes diretamente
nvimrc    # Quando usa Neovim (vimscript)
nvimlua   # Quando usa Neovim (lua)
vimrc     # Quando usa Vim
nanorc    # Quando usa Nano
# Usar VS Code para abrir pasta em nova janela
vscn ~/projects/my-project
# Nano aprimorado com numeros de linha
ne config.txt
# Editar configuracoes especificas
editrc git    # Editar configuracao do git
editrc bash   # Editar configuracao do bash
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
