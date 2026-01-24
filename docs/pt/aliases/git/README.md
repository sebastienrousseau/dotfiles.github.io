---
description: Os aliases do Git fornecem comandos poderosos que criam atalhos para comandos Git frequentemente usados. Todas essas funções e aliases são wrappers em torno das ferramentas de linha de comando do Git. Os aliases do Git melhoram a velocidade e a eficiência.
lang: pt-BR
metaTitle: Aliases do Git - Dotfiles (BR)
permalink: /pt/aliases/git/
---

# Aliases do Git

O arquivo `git.aliases.sh` cria aliases de atalho úteis para muitos comandos
comuns do [Git](https://git-scm.com/).

Os aliases do Git fornecem comandos poderosos que criam atalhos para comandos Git
frequentemente usados. Todas essas funções e aliases são wrappers em torno das
ferramentas de linha de comando do Git. Os aliases do Git melhoram a velocidade e a eficiência.

## Trabalhar na mudança atual

| Alias | Comando               | Descrição                                                                     |
| ----- | --------------------- | ----------------------------------------------------------------------------- |
| g     | `git`                 | Comandos git abreviados.                                                      |
| ga    | `git add`             | Adicionar conteúdo de arquivo ao índice.                                      |
| gaa   | `git add --all`       | Adicionar conteúdo de arquivo ao índice.                                      |
| gad   | `git add .`           | Adicionar conteúdo do diretório atual ao índice.                              |
| gau   | `git add --update`    | Adicionar conteúdo e atualizar o índice com alterações da árvore de trabalho. |
| gco   | `git checkout`        | Desfazer para o último commit.                                                |
| gdis  | `git checkout --`     | Descartar alterações em uma (lista de) arquivo(s) na árvore de trabalho.      |
| gmv   | `git mv`              | Mover ou renomear um arquivo, diretório ou link simbólico.                    |
| grs   | `git restore`         | Restaurar arquivos da árvore de trabalho.                                     |
| gsc   | `git sparse-checkout` | Inicializar e modificar o sparse-checkout.                                    |

## Iniciar uma área de trabalho

| Alias | Comando     | Descrição                                                     |
| ----- | ----------- | ------------------------------------------------------------- |
| gcl   | `git clone` | Clonar um repositório em um novo diretório.                   |
| gin   | `git init`  | Criar um repositório Git vazio ou reinicializar um existente. |

## Examinar o histórico e estado

| Alias | Comando                                                             | Descrição                                                                                                                       |
| ----- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| gbs   | `git bisect`                                                        | Usar busca binária para encontrar o commit que introduziu um bug.                                                               |
| gd    | `git diff`                                                          | Mostrar alterações entre commits, commit e árvore de trabalho, etc.                                                             |
| gg    | `git grep`                                                          | Imprimir linhas correspondentes a um padrão.                                                                                    |
| gl    | `git log --since="last month" --oneline`                            | Mostrar logs de commit deste mês.                                                                                               |
| glg   | `git log --oneline --graph --full-history --all --color --decorate` | Mostrar logs de commit e desenhar uma representação gráfica baseada em texto do histórico de commits no lado esquerdo da saída. |
| gs    | `git show`                                                          | Mostrar vários tipos de objetos.                                                                                                |

## Listar, criar ou excluir branches

| Alias | Comando            | Descrição                                          |
| ----- | ------------------ | -------------------------------------------------- |
| gb    | `git branch`       | Criar um branch.                                   |
| gbd   | `git branch -d`    | Excluir um branch.                                 |
| gbl   | `git branch -l`    | Listar branches.                                   |
| gbr   | `git branch -r`    | Listar os branches de rastreamento remoto.         |
| gbrd  | `git branch -d -r` | Excluir os branches de rastreamento remoto.        |
| gbrsb | `git show-branch`  | Imprimir uma lista de branches e seus commits.     |
| gct   | `git commit`       | Gravar alterações no repositório.                  |
| gmg   | `git merge`        | Juntar dois ou mais históricos de desenvolvimento. |
| grb   | `git rebase`       | Reaplicar commits no topo de outra base.           |
| grs   | `git reset`        | Redefinir o HEAD atual para o estado especificado. |
| gswb  | `git switch`       | Alternar branches.                                 |

## Colaborar

| Alias | Comando     | Descrição                                                     |
| ----- | ----------- | ------------------------------------------------------------- |
| gf    | `git fetch` | Baixar objetos e refs de outro repositório.                   |
| gi    | `git init`  | Criar um repositório Git vazio ou reinicializar um existente. |
| gp    | `git pull`  | Buscar e integrar com outro repositório ou um branch local.   |
| gpu   | `git push`  | Atualizar refs remotos juntamente com objetos associados.     |

## Gravar alterações no repositório

| Alias | Comando                        | Descrição                                                                                      |
| ----- | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| gc    | `git commit -a`                | Comando de commit para "adicionar" automaticamente alterações de todos os arquivos conhecidos. |
| gca   | `git commit --amend`           | Alterar a ponta do branch atual em vez de criar um novo commit.                                |
| gcall | `git add -A && git commit -av` | Commitar todas as alterações.                                                                  |
| gcam  | `git commit --amend --message` | Alterar a ponta do branch atual e editar a mensagem.                                           |
| gcane | `git commit --amend --no-edit` | Alterar a ponta do branch atual e não editar a mensagem.                                       |
| gcint | `git commit --interactive`     | Commit interativo.                                                                             |
| gcm   | `git commit --message`         | Commit com uma mensagem.                                                                       |

## Mostrar alterações entre commits, commit e árvore de trabalho

| Alias    | Comando                                    | Descrição                                                                                              |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| gd       | `git diff`                                 | Mostrar alterações entre a árvore de trabalho e o índice ou uma árvore.                                |
| gdcached | `git diff --cached`                        | Mostra as alterações entre o índice e o HEAD (que é o último commit neste branch).                     |
| gdch     | `git diff --name-status`                   | Mostrar apenas nomes e status dos arquivos alterados.                                                  |
| gdh      | `git diff HEAD`                            | Mostrar todas as alterações de arquivos rastreados presentes no diretório de trabalho e área de stage. |
| gdstaged | `git diff --staged`                        | Mostrar alterações em arquivos na área "staged".                                                       |
| gdstat   | `git diff --stat --ignore-space-change -r` | Gerar um diffstat.                                                                                     |

## Mostrar logs de commit

| Alias | Comando                                  | Descrição                                                                    |
| ----- | ---------------------------------------- | ---------------------------------------------------------------------------- |
| gclc  | `git log --oneline --reverse`            | Mostrar log de alterações, mais recentes primeiro.                           |
| gld   | `git log --since=1-day-ago`              | Mostrar o log do último dia.                                                 |
| gldc  | `git log -1 --date-order --format=%cI`   | Mostrar a data do último commit, em formato estrito ISO 8601.                |
| gldl  | `git log --date=local`                   | Mostrar log com datas no fuso horário local.                                 |
| glf   | `git log ORIG_HEAD.. --stat --no-merges` | Mostrar log de novos commits após fetch, com estatísticas, excluindo merges. |

## Alternar branches ou restaurar arquivos da árvore de trabalho

| Alias  | Comando                                                                 | Descrição                                                                      |
| ------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| gclout | `git clean -df && git checkout -- .`                                    | Limpar e descartar alterações e arquivos não rastreados na árvore de trabalho. |
| gco    | `git checkout`                                                          | Alternar branches ou restaurar arquivos da árvore de trabalho.                 |
| gcob   | `git checkout -b`                                                       | Criar um novo branch chamado <new_branch> e iniciá-lo em <start_point>.        |
| gcode  | `git checkout main && git branch --merged \| xargs git branch --delete` | Excluir todos os branches locais que foram mesclados no branch main local.     |

## Atualizar refs remotos juntamente com objetos associados

| Alias | Comando                                                | Descrição                                                                                                                  |
| ----- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| gpb   | `git push --set-upstream origin $(git branch --show-current)` | Publicar o branch atual fazendo push para o "origin" remoto e configurando o branch atual para rastrear o branch upstream. |
| gpo   | `git push origin`                                      | Enviar alterações locais para o repositório online.                                                                        |
| gpoll | `git push origin --all`                                | Enviar cada um dos seus branches git locais para o repositório remoto.                                                     |
| gpull | `git pull`                                             | Buscar e integrar com outro repositório ou um branch local.                                                                |
| gpush | `git push`                                             | Atualizar refs remotos juntamente com objetos associados.                                                                  |

## Gerenciar conjunto de repositórios rastreados

| Alias   | Comando                     | Descrição                                                                                             |
| ------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| gr      | `git remote`                | Gerenciar conjunto de repositórios rastreados.                                                        |
| gra     | `git remote add`            | Adicionar um remoto chamado nome para o repositório na url.                                           |
| grao    | `git remote add origin`     | Adicionar um novo remoto 'origin' se não existir.                                                     |
| grcl    | `git remote prune`          | Remover branches de rastreamento remoto obsoletos.                                                    |
| gro     | `open $(git remote -v ...)` | Abrir URL do repositório Git atual.                                                                   |
| grprint | `git remote -v`             | Imprimir a url do repositório atual.                                                                  |
| grs     | `git show`                  | Mostrar vários tipos de objetos.                                                                      |
| grso    | `git remote show origin`    | Exibir onde o origin reside.                                                                          |
| grv     | `git remote -v`             | Mostra URLs de repositórios remotos ao listar suas conexões remotas atuais.                           |
| gru     | `git remote update`         | Buscar atualizações para um conjunto nomeado de remotos no repositório conforme definido por remotos. |

## Reverter alguns commits existentes

| Alias  | Comando                  | Descrição                                                                                                               |
| ------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| grev   | `git revert`             | Desfazer as alterações de alguns commits existentes.                                                                    |
| grevnc | `git revert --no-commit` | Reverter sem autocommit; útil quando você está revertendo o efeito de mais de um commit para o seu índice em sequência. |

## Inicializar, atualizar ou inspecionar submódulos

| Alias  | Comando                                   | Descrição                                                                                                                                     |
| ------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| gsmi   | `git submodule init`                      | Inicializar os submódulos gravados no índice.                                                                                                 |
| gsma   | `git submodule add`                       | Adicionar o repositório fornecido como um Submódulo no caminho fornecido ao conjunto de alterações a ser commitado.                           |
| gsm    | `git submodule`                           | Permite que repositórios estrangeiros sejam incorporados em um subdiretório dedicado da árvore de fontes.                                     |
| gsms   | `git submodule sync`                      | Sincroniza a configuração de URL remota dos submódulos com o valor especificado em .gitmodules.                                               |
| gsmu   | `git submodule update`                    | Atualizar os submódulos registrados para corresponder ao que o superprojeto espera, clonando submódulos ausentes e buscando commits ausentes. |
| gsmui  | `git submodule update --init`             | Atualização de submódulo com inicialização.                                                                                                   |
| gsmuir | `git submodule update --init --recursive` | Atualização de submódulo com inicialização e recursiva; isso é útil para deixar um submódulo totalmente atualizado.                           |

## Mostrar o status da árvore de trabalho

| Alias | Comando                       | Descrição                                                                  |
| ----- | ----------------------------- | -------------------------------------------------------------------------- |
| gst   | `git status`                  | Mostrar o status da árvore de trabalho.                                    |
| gsts  | `git status --short`          | Status com formato curto em vez de detalhes completos.                     |
| gstsb | `git status --short --branch` | Status com formato curto e mostrando informações de branch e rastreamento. |

## Criar, listar, excluir ou verificar um objeto tag assinado com GPG

| Alias | Comando                                                            | Descrição                                                                |
| ----- | ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| gt    | `git tag`                                                          | gt: Ver todas as tags.                                                   |
| gta   | `git tag -a $1 -m $2`                                              | gta: Adicionar uma tag.                                                  |
| gtg   | `git tag`                                                          | gtg: Criar, listar, excluir ou verificar um objeto tag assinado com GPG. |
| gtl   | `git describe --tags --abbrev=0`                                   | gtl: Última tag no branch atual.                                         |
| gtrm  | `for t in $(git tag); do git push origin :$t; git tag -d $t; done` | gtrm: Excluir todas as tags.                                             |

## Redefinir o HEAD atual para o estado especificado

| Alias  | Comando                                    | Descrição               |
| ------ | ------------------------------------------ | ----------------------- |
| grescl | `git reset --hard HEAD~1 && git clean -fd` | Resetar commit limpo.   |
| gresh  | `git reset --hard HEAD~1`                  | Resetar commit forçado. |
| gresp  | `git reset --hard && git clean -ffdx`      | Resetar pristino.       |
| gress  | `git reset --soft HEAD~1`                  | Resetar commit suave.   |
| gresu  | `git reset --hard $(git upstream-branch)`  | Resetar para upstream.  |

## Remover arquivos da árvore de trabalho e do índice

| Alias | Comando                                        | Descrição                                           |
| ----- | ---------------------------------------------- | --------------------------------------------------- |
| grm   | `git rm`                                       | Remover arquivos da árvore de trabalho e do índice. |
| grmc  | `git rm --cached`                              | Unstage e remover caminhos apenas do índice.        |
| grmd  | `git ls-files -z --deleted \| xargs -0 git rm` | git remover arquivos que foram excluídos.           |

## Obter e definir opções de repositório ou globais

| Alias     | Comando                                        | Descrição                                                 |
| --------- | ---------------------------------------------- | --------------------------------------------------------- |
| gconfdiff | `git config alias.dcolor "diff --color-words"` | Melhor git diff, delimitado por palavras e colorizado.    |
| gconfl    | `git config --list`                            | Listar todas as configurações.                            |
| gconfr    | `git config --local --get remote.origin.url`   | Saída da origem remota de dentro de um repositório local. |
