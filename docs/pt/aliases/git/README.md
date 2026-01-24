---
description: Os alias do Git fornecem comandos poderosos que criam atalhos para comandos Git usados com frequencia. Todas essas funcoes e aliases sao wrappers das ferramentas de linha de comando do Git. Os alias do Git melhoram a velocidade e a eficiencia.
lang: pt-PT
metaTitle: Os alias do Git - Dotfiles (PT)
permalink: /pt/aliases/git/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Os alias do Git fornecem comandos poderosos que criam atalhos para comandos Git usados com frequencia. Todas essas funcoes e aliases sao wrappers das ferramentas de linha de comando do Git. Os alias do Git melhoram a velocidade e a eficiencia.
  - name: twitter:description
    content: Os alias do Git fornecem comandos poderosos que criam atalhos para comandos Git usados com frequencia. Todas essas funcoes e aliases sao wrappers das ferramentas de linha de comando do Git. Os alias do Git melhoram a velocidade e a eficiencia.
  - name: twitter:title
    content: Os alias do Git - Dotfiles (PT)
  - name: og:title
    content: Os alias do Git - Dotfiles (PT)
  - name: og:description
    content: Os alias do Git fornecem comandos poderosos que criam atalhos para comandos Git usados com frequencia. Todas essas funcoes e aliases sao wrappers das ferramentas de linha de comando do Git. Os alias do Git melhoram a velocidade e a eficiencia.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias do Git

Gerenciar alias do Git. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `git.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Esta e uma colecao de alias Git praticos que simplificam e aceleram comandos Git
comuns.
- `gc` Commit que adiciona automaticamente mudancas de todos os arquivos conhecidos.
- `gca` Alterar a ponta do branch atual em vez de criar um novo commit.
- `gcall` Commitar todas as alteracoes.
- `gcam` Alterar a ponta do branch atual e editar a mensagem.
- `gcane` Alterar a ponta do branch atual sem editar a mensagem.
- `gcint` Commit interativo.
- `gcm` Commit com mensagem.
- `gd` Mostrar alteracoes entre a arvore de trabalho e o index ou uma arvore.
- `gdch` Mostrar apenas nomes e status de arquivos alterados.
- `gdh` Mostrar todas as alteracoes de arquivos rastreados no working tree e staging.
- `gdstaged` Mostrar alteracoes em arquivos no area "staged".
- `gdcached` Mostrar alteracoes entre o index e o HEAD.
- `gdstat` Gerar diffstat.
- `glc` Mostrar log de alteracoes, mais recentes primeiro.
- `gld` Mostrar log do dia recente.
- `gldc` Mostrar data do ultimo commit em ISO 8601 estrito.
- `gldl` Mostrar logs com datas no fuso local.
- `glf` Mostrar log de novos commits apos fetch, com stats, sem merges.
- `glfd` Mostrar data do commit mais antigo em ISO 8601 estrito.
- `glfh` Visualizacao da topologia de branches.
- `glg` Mostrar log como grafico.
- `glh` Mostrar log da ultima hora.
- `gll` Mostrar log no formato preferido para KPIs.
- `glll` Mostrar log no formato preferido para KPIs, com itens longos.
- `glm` Mostrar log do mes recente.
- `glmy` Mostrar log dos meus commits pelo meu email.
- `glw` Mostrar log da semana recente.
- `gly` Mostrar log do ano recente.
- `gclout` Limpar e descartar mudancas e arquivos nao rastreados.
- `gco` Trocar de branch ou restaurar arquivos do working tree.
- `gcb` Criar novo branch <new_branch> a partir de <start_point>.
- `gcode` Apagar branches locais que ja foram mesclados no main local.
- `gcom` Garantir que o local esteja como o main.
- `gpb` Publicar branch atual no origin e definir upstream.
- `gpo` Enviar mudancas locais ao repositorio remoto.
- `gpt` Enviar tags locais.
- `gpoll` Enviar todos os branches locais ao remoto.
- `gpull` Fazer fetch e integrar de outro repositorio ou branch local.
- `gpullm` Fazer pull do origin/master e mesclar no branch atual.
- `gpullo` Fazer pull de apenas um branch.
- `gpush` Atualizar refs remotas com objetos associados.
- `gpusho` Fazer push de apenas um branch.
- `gpushr` Para cada branch remoto, fazer push.
- `gunpub` Remover a versao remota do branch atual.
- `gpcb` Fazer push do branch atual.
- `gr` Gerenciar conjunto de repositorios rastreados.
- `gra` Adicionar remoto `name` para `url`.
- `grall` Enviar todos os branches para todos os remotos.
- `grallo` Todos os remotos exceto origin.
- `grao` Adicionar remoto 'origin' se nao existir.
- `grbk` Rollback para stage.
- `grcl` Remover branches remotos obsoletos sob `name`.
- `grf` Mostrar origem Git para cada subpasta imediata.
- `grfall` Buscar todos os remotos Git.
- `grp` Enviar todos os remotos.
- `grprint` Imprimir a URL do repositorio atual.
- `grs` Mostrar informacoes sobre o remoto `name`.
- `grso` Mostrar onde fica o origin.
- `gru` Buscar atualizacoes para um conjunto de remotos.
- `grv` Mostrar URLs dos repositorios remotos.
- `grev` Reverter mudancas de commits existentes.
- `grevnc` Reverter sem autocommit.
- `gsm` Permitir repos externos embutidos em subdiretorio dedicado.
- `gsmi` Inicializar submodulos registrados no index.
- `gsma` Adicionar repositorio como submodulo.
- `gsms` Sincronizar URL de submodulos com .gitmodules.
- `gsmu` Atualizar submodulos para o esperado.
- `gsmui` Atualizar submodulos com inicializacao.
- `gsmuir` Atualizar submodulos com inicializacao e recursivo.
- `gst` Mostrar status do working tree.
- `gsta` Fazer stash das mudancas.
- `gstrmu` Remover arquivos nao rastreados.
- `gsts` Status em formato curto.
- `gstsb` Status curto com info de branch e tracking.
- `gt` Ver todas as tags.
- `gtg` Criar/listar/deletar/verificar tag assinada.
- `gtl` Ultima tag no branch atual.
- `gshow` Mostrar varios tipos de objetos.
- `gshf` Encontrar o branch pai mais proximo.
- `gshls` Mostrar lista de arquivos alterados por commit.
- `gshnp` Mostrar objeto Git rapidamente.
- `gshwho` Mostrar contribuidores por numero de commits.
- `grescl` Reset commit clean.
- `gresh` Reset commit hard.
- `gresp` Reset pristine.
- `gress` Reset commit.
- `gresu` Reset para upstream.
- `gtp` Obter nome do diretorio de nivel superior.
- `grpa` Obter nome do branch atual.
- `gub` Obter nome do branch upstream.
- `grm` Remover arquivos do working tree e do index.
- `grmc` Remover somente do index.
- `grmd` Remover arquivos deletados.
- `grmd2` Remover arquivos deletados.
- `grmds` Remover .DS_Store do repositorio.
- `grmx` Remover todos os arquivos deletados, inclusive com espacos.
- `gblau` Mostrar contribuicao por linha por autor.
- `gconfdiff` Melhor git diff, delimitado por palavras e colorido.
- `gconfl` Listar todas as configuracoes.
- `gconfr` Mostrar origin remoto do repositorio local.
- `undopush` Desfazer o ultimo push.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
