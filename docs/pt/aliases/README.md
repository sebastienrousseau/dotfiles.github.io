---
description: Aliases permitem criar atalhos para comandos de shell que você usa com frequência. Isso permite que você seja mais produtivo e eficiente, reduzindo a quantidade de digitação que você tem que fazer ao usar o shell regularmente.
lang: pt-BR
metaTitle: Aliases - Dotfiles (PT)
permalink: /pt/aliases/
---

# Aliases (Atalhos)

Aliases permitem criar atalhos para comandos de shell que você usa com frequência. Isso permite que você seja mais produtivo e eficiente, reduzindo a quantidade de digitação que você tem que fazer ao usar o shell regularmente. Como exemplo, em vez de digitar `git status`, você poderia digitar `gst` para obter o mesmo resultado.

Esta é uma ótima maneira de economizar tempo e reduzir consideravelmente a quantidade de digitação que você tem que fazer ao usar o terminal diariamente, o que ajuda você a ser mais produtivo e eficiente.

## Predefinições

Dotfiles tem uma coleção de predefinições de configuração e receitas diversas que você pode usar para começar.

### Detecção automática do sistema

Dotfiles contém uma função utilitária para detectar o sabor atual do `ls` que está em uso, a fim de ajudar a configurar as variáveis de ambiente `LS_COLORS` certas para o seu sistema.

A variável de ambiente `LS_COLORS` é usada pelo comando `ls` para colorir a saída do comando.

### Verifique aliases embutidos

Digite o seguinte comando alias em seu terminal:

```bash
alias
```

### Aliases de utilitários GNU Find

Os sistemas macOS são baseados em BSD, em vez de GNU/Linux como RedHat, Debian e Ubuntu. Como resultado, muitas das ferramentas de linha de comando que vêm com o macOS não são 100% compatíveis. Por exemplo, o comando `find` no macOS não suporta a opção `-printf`, que é usada pelo comando `locate`. Isso significa que o comando `locate` não funciona no macOS. Para corrigir isso, você pode instalar as versões GNU desses comandos, que são totalmente compatíveis com as versões Linux.

Os Utilitários de Busca GNU (GNU Find Utilities) são os utilitários básicos de pesquisa de diretório do sistema operacional GNU. Esses programas são normalmente usados em conjunto com outros programas para fornecer recursos modulares e poderosos de pesquisa de diretório e localização de arquivos para outros comandos.

As ferramentas fornecidas com este pacote são:

- find - pesquisar arquivos em uma hierarquia de diretórios
- locate - listar arquivos em bancos de dados que correspondem a um padrão
- updatedb - atualizar um banco de dados de nomes de arquivos
- xargs - construir e executar linhas de comando a partir da entrada padrão

Digite o seguinte comando alias em seu terminal:

```bash
brew install findutils
```

### Os aliases Dotfiles

Os arquivos fornecidos em Dotfiles contêm alguns aliases opinativos que você pode achar úteis. Estes são definidos no diretório `./dist/lib/aliases` e carregados automaticamente quando você inicia uma nova sessão de shell.

Os aliases são carregados pelo arquivo `~/.bashrc` se você estiver usando o shell Bash, ou no arquivo `~/.zshrc` se você estiver usando o shell Zsh.

Eles foram agrupados por categorias lógicas:

- [ai][ai] - Aliases para IA.
- [archives][archives] - Aliases para trabalhar com arquivos comprimidos.
- [cd][cd] - Aliases para trabalhar com diretórios.
- [chmod][chmod] - Aliases para trabalhar com permissões de arquivo.
- [clear][clear] - Aliases para limpar a tela do terminal.
- [compliance][compliance] - Aliases para conformidade.
- [configuration][configuration] - Aliases para configuração.
- [default][default] - Os aliases padrão que são carregados para todos os usuários.
- [diagnostics][diagnostics] - Aliases para diagnóstico.
- [dig][dig] - Aliases para trabalhar com DNS.
- [docker][docker] - Aliases para Docker.
- [dot][dot] - A CLI unificada para gerenciar seus dotfiles.
- [du][du] - Aliases para trabalhar com uso de disco.
- [editor][editor] - Aliases para trabalhar com o editor.
- [find][find] - Aliases para trabalhar com o comando `fd`.
- [fonts][fonts] - Aliases para fontes.
- [gcloud][gcloud] - Aliases para trabalhar com o comando `gcloud`.
- [git][git] - Aliases para trabalhar com Git.
- [gnu][gnu] - Aliases para trabalhar com utilitários principais GNU.
- [go][go] - Aliases para Go.
- [installer][installer] - Aliases para instalador.
- [interactive][interactive] - Aliases para trabalhar com comandos interativos.
- [jekyll][jekyll] - Aliases para trabalhar com Jekyll.
- [kubernetes][kubernetes] - Aliases para Kubernetes.
- [legal][legal] - Aliases legais.
- [list][list] - Aliases para trabalhar com o comando `ls`.
- [macOS][macos] - Aliases para macOS.
- [make][make] - Aliases para trabalhar com o comando `make`.
- [mkdir][mkdir] - Aliases para trabalhar com o comando `mkdir`.
- [modern][modern] - Unix Moderno.
- [modern-core][modern-core] - Ferramentas de alto desempenho (Atuin, Yazi, Zellij).
- [npm][npm] - Aliases para trabalhar com o comando `npm`.
- [permission][permission] - Aliases para permissões.
- [pnpm][pnpm] - Aliases para trabalhar com o comando `pnpm`.
- [ps][ps] - Aliases para trabalhar com o comando `ps`.
- [python][python] - Aliases para Python.
- [rsync][rsync] - Aliases para trabalhar com o comando `rsync`.
- [rust][rust] - Aliases para trabalhar com a linguagem de programação Rust.
- [security][security] - Aliases de segurança.
- [subversion][subversion] - Aliases para trabalhar com Subversion.
- [sudo][sudo] - Aliases para trabalhar com o comando `sudo`.
- [terraform][terraform] - Aliases para Terraform.
- [tmux][tmux] - Aliases para trabalhar com o comando `tmux`.
- [update][update] - Aliases para trabalhar com o comando `update`.
- [uuid][uuid] - Aliases para trabalhar com o comando `uuid`.
- [wget][wget] - Aliases para trabalhar com o comando `wget`.
- [yarn][yarn] - Aliases para trabalhar com Yarn.

[ai]: ./ai/
[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[compliance]: ./compliance/
[configuration]: ./configuration/
[default]: ./default/
[diagnostics]: ./diagnostics/
[dig]: ./dig/
[docker]: ./docker/
[dot]: ./dot/
[du]: ./du/
[editor]: ./editor/
[find]: ./find/
[fonts]: ./fonts/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/
[go]: ./go/
[installer]: ./installer/
[interactive]: ./interactive/
[jekyll]: ./jekyll/
[kubernetes]: ./kubernetes/
[legal]: ./legal/
[list]: ./list/
[macos]: ./macOS/
[make]: ./make/
[mkdir]: ./mkdir/
[modern]: ./modern/
[modern-core]: ./modern-core/
[npm]: ./npm/
[permission]: ./permission/
[pnpm]: ./pnpm/
[ps]: ./ps/
[python]: ./python/
[rsync]: ./rsync/
[rust]: ./rust/
[security]: ./security/
[subversion]: ./subversion/
[sudo]: ./sudo/
[terraform]: ./terraform/
[tmux]: ./tmux/
[update]: ./update/
[uuid]: ./uuid/
[wget]: ./wget/
[yarn]: ./yarn/
