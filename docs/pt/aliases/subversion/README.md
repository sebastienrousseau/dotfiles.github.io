---
description: Os aliases do Subversion são uma coleção de aliases que permitem interagir com o comando `svn`. O Subversion é um sistema de controle de versão, que permite manter versões antigas de arquivos e diretórios (geralmente código-fonte), manter um registro de quem, quando e por que as alterações ocorreram.
lang: pt-BR
metaTitle: Aliases do Subversion - Dotfiles (BR)
permalink: /pt/aliases/subversion/
---

# Aliases do Subversion

O arquivo `subversion.aliases.sh` cria aliases de atalho úteis para muitos
comandos [Subversion](https://subversion.apache.org) comumente usados.

Os aliases do Subversion são uma coleção de aliases que permitem interagir
com o comando `svn`. O Subversion é um sistema de controle de versão, que permite
manter versões antigas de arquivos e diretórios (geralmente código-fonte), manter um registro
de quem, quando e por que as alterações ocorreram.

## Subversion

[Subversion](https://subversion.apache.org) é um sistema de controle de versão que
rastreia alterações em arquivos e diretórios. É usado para gerenciar código-fonte para
projetos de software.

| Alias | Comando          | Descrição                                                                                                            |
| ----- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| sad   | `svn add`        | Colocar novos arquivos e diretórios sob controle de versão.                                                          |
| sau   | `svn auth`       | Gerenciar credenciais de autenticação em cache.                                                                      |
| sbl   | `svn blame`      | Mostrar quando cada linha de um arquivo foi alterada pela última vez (ou será na próxima).                           |
| scg   | `svn changelist` | Associar (ou dissociar) changelist CLNAME com os arquivos nomeados.                                                  |
| sco   | `svn checkout`   | Obter uma cópia de trabalho de um repositório.                                                                       |
| scl   | `svn cleanup`    | Recuperar de uma operação interrompida que deixou a cópia de trabalho bloqueada ou remover arquivo indesejado.       |
| sci   | `svn commit`     | Enviar alterações da sua cópia de trabalho para o repositório.                                                       |
| scp   | `svn copy`       | Copiar arquivos e diretórios em uma cópia de trabalho ou repositório.                                                |
| sct   | `svn cat`        | Exibir o conteúdo de arquivos ou URLs especificados.                                                                 |
| sdi   | `svn diff`       | Exibir alterações locais ou diferenças entre duas revisões ou caminhos.                                              |
| sdl   | `svn delete`     | Remover arquivos e diretórios do controle de versão.                                                                 |
| shp   | `svn help`       | Descrever o uso deste programa ou de seus subcomandos.                                                               |
| sin   | `svn info`       | Exibir informações sobre um item local ou remoto.                                                                    |
| sip   | `svn import`     | Confirmar um arquivo ou árvore não versionado no repositório.                                                        |
| slg   | `svn log`        | Mostrar as mensagens de log para um conjunto de revisão(ões) e/ou caminho(s).                                        |
| slk   | `svn lock`       | Bloquear caminhos de cópia de trabalho ou URLs no repositório, nenhum outro usuário pode confirmar alterações neles. |
| sls   | `svn list`       | Listar entradas de diretório no repositório.                                                                         |
| smd   | `svn mkdir`      | Criar um novo diretório sob controle de versão.                                                                      |
| smg   | `svn merge`      | Mesclar alterações em uma cópia de trabalho.                                                                         |
| smgi  | `svn mergeinfo`  | Exibir informações relacionadas à mesclagem.                                                                         |
| smv   | `svn move`       | Mover (renomear) um item em uma cópia de trabalho ou repositório.                                                    |
| sp    | `svn propset`    | Definir o valor de uma propriedade em arquivos, diretórios ou revisões.                                              |
| spdl  | `svn propdel`    | Remover uma propriedade de arquivos, diretórios ou revisões.                                                         |
| spdt  | `svn propedit`   | Editar uma propriedade com um editor externo.                                                                        |
| spgt  | `svn propget`    | Imprimir o valor de uma propriedade em arquivos, diretórios ou revisões.                                             |
| sph   | `svn patch`      | Aplicar um patch a uma cópia de trabalho.                                                                            |
| spls  | `svn proplist`   | Listar todas as propriedades em arquivos, diretórios ou revisões.                                                    |
| srl   | `svn relocate`   | Realocar a cópia de trabalho para apontar para uma URL raiz de repositório diferente.                                |
| srs   | `svn resolve`    | Resolver conflitos em arquivos ou diretórios da cópia de trabalho.                                                   |
| srsd  | `svn resolved`   | Remover o estado 'conflitante' em arquivos ou diretórios da cópia de trabalho.                                       |
| srv   | `svn revert`     | Restaurar o estado original da cópia de trabalho (desfazer alterações locais).                                       |
| sst   | `svn status`     | Imprimir o status de arquivos e diretórios da cópia de trabalho.                                                     |
| ssw   | `svn switch`     | Atualizar a cópia de trabalho para uma URL diferente dentro do mesmo repositório.                                    |
| sulk  | `svn unlock`     | Desbloquear caminhos de cópia de trabalho ou URLs.                                                                   |
| sup   | `svn update`     | Trazer alterações do repositório para a cópia de trabalho.                                                           |
| supg  | `svn upgrade`    | Atualizar o formato de armazenamento de metadados para uma cópia de trabalho.                                        |
| sxp   | `svn export`     | Criar uma cópia não versionada de uma árvore.                                                                        |
