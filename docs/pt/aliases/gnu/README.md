---
description: Os aliases do GNU Core Utilities fornecem comandos poderosos que criam atalhos para comandos Core utilities frequentemente usados. Todas essas funções e aliases são wrappers em torno dos Utilitários GNU Core, que são as ferramentas básicas e fundamentais de um sistema GNU/Linux.
lang: pt-BR
metaTitle: Aliases do GNU Core Utilities - Dotfiles (BR)
permalink: /pt/aliases/gnu/
---

# Aliases do GNU Core Utilities

O arquivo `gnucoreutils-aliases.sh` cria aliases de atalho úteis para muitos
comandos [GNU coreutils][coreutils] comumente usados.

Os aliases do GNU Core Utilities fornecem comandos poderosos que criam atalhos
para comandos Core utilities frequentemente usados. Todas essas funções e aliases
são wrappers em torno dos Utilitários GNU Core, que são as ferramentas básicas e fundamentais
de um sistema GNU/Linux.

Esses são os utilitários principais que se espera que existam em todos os sistemas
operacionais.

## Aliases GNU coreutils

| Alias     | Comando      | Descrição                                                                                                                                                                  |
| --------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| b2sum     | `gb2sum`     | Imprimir ou verificar somas de verificação BLAKE2b (512 bits).                                                                                                             |
| base32    | `gbase32`    | Codificar ou decodificar Base32 de ARQUIVO, ou entrada padrão, para saída padrão.                                                                                          |
| base64    | `gbase64`    | Codificar ou decodificar Base64 de ARQUIVO, ou entrada padrão, para saída padrão.                                                                                          |
| basename  | `gbasename`  | Imprimir NOME com quaisquer componentes de diretório principais removidos.                                                                                                 |
| basenc    | `gbasenc`    | Codificar ou decodificar ARQUIVO, ou entrada padrão, para saída padrão.                                                                                                    |
| cat       | `gcat`       | Concatenar ARQUIVO(s), ou entrada padrão, para saída padrão.                                                                                                               |
| chcon     | `gchcon`     | Alterar o contexto de segurança SELinux de cada ARQUIVO para CONTEXTO.                                                                                                     |
| chgrp     | `gchgrp`     | Alterar o grupo de cada ARQUIVO para GRUPO.                                                                                                                                |
| chmod     | `gchmod`     | Alterar o modo de cada ARQUIVO para MODO.                                                                                                                                  |
| chown     | `gchownn`    | Alterar o proprietário e/ou grupo de cada ARQUIVO para PROPRIETÁRIO e/ou GRUPO.                                                                                            |
| chroot    | `gchroot`    | Executar COMANDO com o diretório raiz definido para NOVORAIZ.                                                                                                              |
| cksum     | `gcksum`     | Imprimir contagem de bytes e soma de verificação CRC.                                                                                                                      |
| comm      | `gcomm`      | Comparar dois arquivos classificados linha por linha.                                                                                                                      |
| cp        | `gcp`        | Copiar ORIGEM para DESTINO, ou múltiplas ORIGEM(s) para DIRETÓRIO.                                                                                                         |
| csplit    | `gcsplit`    | Dividir um arquivo em seções determinadas por linhas de contexto.                                                                                                          |
| cut       | `gcut`       | Imprimir partes selecionadas de linhas de cada ARQUIVO para saída padrão.                                                                                                  |
| date      | `gdate`      | Imprimir ou definir a data e hora do sistema.                                                                                                                              |
| dd        | `gdd`        | Copiar um arquivo, convertendo e formatando de acordo com os operandos.                                                                                                    |
| df        | `gdf`        | Relatar uso de espaço em disco do sistema de arquivos.                                                                                                                     |
| dir       | `gdir`       | Listar conteúdo do diretório.                                                                                                                                              |
| dircolors | `gdircolors` | Converter cores de saída do ls para o formato dircolors.                                                                                                                   |
| dirname   | `gdirname`   | Imprimir NOME com seu último componente não-barra e barras finais removidas.                                                                                               |
| du        | `gdu`        | Estimar uso de espaço em arquivo.                                                                                                                                          |
| echo      | `gecho`      | Exibir uma linha de texto.                                                                                                                                                 |
| env       | `genv`       | Imprimir o ambiente atual.                                                                                                                                                 |
| expand    | `gexpand`    | Converter guias em cada ARQUIVO para espaços, escrevendo na saída padrão.                                                                                                  |
| expr      | `gexpr`      | Avaliar EXPRESSÃO.                                                                                                                                                         |
| factor    | `gfactor`    | Imprimir fatores primos de cada número dado.                                                                                                                               |
| false     | `gfalse`     | Não fazer nada, sem sucesso.                                                                                                                                               |
| fmt       | `gfmt`       | Reformatar texto de parágrafo.                                                                                                                                             |
| fold      | `gfold`      | Envolver cada linha de entrada para caber na largura especificada.                                                                                                         |
| grep      | `ggrep`      | Imprimir linhas correspondentes a um padrão.                                                                                                                               |
| groups    | `ggroups`    | Imprimir os grupos em que um usuário está.                                                                                                                                 |
| head      | `ghead`      | Imprimir as primeiras 10 linhas de cada ARQUIVO para saída padrão.                                                                                                         |
| hostid    | `ghostid`    | Imprimir o hostid.                                                                                                                                                         |
| id        | `gid`        | Imprimir IDs de usuário e grupo reais e efetivos.                                                                                                                          |
| install   | `ginstall`   | Copiar arquivos e definir atributos.                                                                                                                                       |
| join      | `gjoin`      | Juntar linhas de dois arquivos em um campo comum.                                                                                                                          |
| kill      | `gkill`      | Enviar um sinal para um processo.                                                                                                                                          |
| link      | `glink`      | Criar um link para um arquivo.                                                                                                                                             |
| ln        | `gln`        | Fazer links entre arquivos.                                                                                                                                                |
| logname   | `glogname`   | Imprimir o nome de usuário associado ao ID de usuário efetivo atual.                                                                                                       |
| ls        | `gls`        | Listar conteúdo do diretório.                                                                                                                                              |
| md5sum    | `gmd5sum`    | Imprimir ou verificar somas de verificação MD5 (128 bits).                                                                                                                 |
| mkdir     | `gmkdir`     | Criar o(s) DIRETÓRIO(s), se eles ainda não existirem.                                                                                                                      |
| mkfifo    | `gmkfifo`    | Criar pipes nomeados (FIFOs) chamados PIPE.                                                                                                                                |
| mknod     | `gmknod`     | Criar arquivos especiais.                                                                                                                                                  |
| mktemp    | `gmktemp`    | Criar um arquivo ou diretório temporário, com segurança.                                                                                                                   |
| mv        | `gmv`        | Mover ORIGEM para DESTINO, ou múltiplas ORIGEM(s) para DIRETÓRIO.                                                                                                          |
| nice      | `gnice`      | Executar um utilitário com prioridade de agendamento modificada.                                                                                                           |
| nl        | `gnl`        | Numerar linhas de arquivos, escrevendo na saída padrão.                                                                                                                    |
| nohup     | `gnohup`     | Executar um comando imune a desligamentos, com saída para um não-tty.                                                                                                      |
| nproc     | `gnproc`     | Imprimir o número de unidades de processamento disponíveis.                                                                                                                |
| numfmt    | `gnumfmt`    | Reformatar números.                                                                                                                                                        |
| od        | `god`        | Despejar um arquivo em octal e outros formatos.                                                                                                                            |
| paste     | `gpaste`     | Mesclar linhas de arquivos.                                                                                                                                                |
| pathchk   | `gpathchk`   | Verificar se um nome de arquivo é válido ou portátil.                                                                                                                      |
| pinky     | `gpinky`     | Imprimir informações sobre usuários.                                                                                                                                       |
| pr        | `gpr`        | Paginar ARQUIVO para impressão.                                                                                                                                            |
| printenv  | `gprintenv`  | Imprimir o ambiente atual.                                                                                                                                                 |
| printf    | `gprintf`    | Formatar e imprimir dados.                                                                                                                                                 |
| ptx       | `gptx`       | Exibir o conteúdo de um arquivo de controle de terminal.                                                                                                                   |
| pwd       | `gpwd`       | Imprimir o nome do diretório de trabalho atual.                                                                                                                            |
| readlink  | `greadlink`  | Imprimir valor de um link simbólico ou nome de arquivo canônico.                                                                                                           |
| realpath  | `grealpath`  | Canonicalizar nomes de arquivos existentes.                                                                                                                                |
| rm        | `grm`        | Remover (desvincular) o(s) ARQUIVO(s).                                                                                                                                     |
| rmdir     | `grmdir`     | Remover o(s) DIRETÓRIO(s), se estiverem vazios.                                                                                                                            |
| runcon    | `gruncon`    | Executar um comando com um contexto de segurança SELinux diferente.                                                                                                        |
| sed       | `gsed`       | Editor de fluxo para filtrar e transformar texto.                                                                                                                          |
| seq       | `gseq`       | Imprimir uma sequência de números.                                                                                                                                         |
| sha1sum   | `gsha1sum`   | Imprimir ou verificar somas de verificação SHA1 (160 bits).                                                                                                                |
| sha224sum | `gsha224sum` | Imprimir ou verificar somas de verificação SHA224 (224 bits).                                                                                                              |
| sha256sum | `gsha256sum` | Imprimir ou verificar somas de verificação SHA256 (256 bits).                                                                                                              |
| sha384sum | `gsha384sum` | Imprimir ou verificar somas de verificação SHA384 (384 bits).                                                                                                              |
| sha512sum | `gsha512sum` | Imprimir ou verificar somas de verificação SHA512 (512 bits).                                                                                                              |
| shred     | `gshred`     | Sobrescrever um arquivo para ocultar seu conteúdo e, opcionalmente, excluí-lo.                                                                                             |
| shuf      | `gshuf`      | Emitir uma permutação aleatória das linhas de entrada.                                                                                                                     |
| sleep     | `gsleep`     | Pausar por NÚMERO segundos.                                                                                                                                                |
| sort      | `gsort`      | Classificar linhas de arquivos de texto.                                                                                                                                   |
| split     | `gsplit`     | Dividir um arquivo em pedaços.                                                                                                                                             |
| stat      | `gstat`      | Exibir status do arquivo ou sistema de arquivos.                                                                                                                           |
| stdbuf    | `gstdbuf`    | Executar COMANDO com operações de buffer modificadas para seus fluxos padrão.                                                                                              |
| stty      | `gstty`      | Obter e definir atributos de terminal.                                                                                                                                     |
| sum       | `gsum`       | Imprimir contagem de bytes e soma de verificação CRC.                                                                                                                      |
| sync      | `gsync`      | Invocar sync para liberar buffers do sistema de arquivos.                                                                                                                  |
| tac       | `gtac`       | Concatenar e imprimir arquivos em reverso.                                                                                                                                 |
| tail      | `gtail`      | Saída da última parte dos arquivos.                                                                                                                                        |
| tee       | `gtee`       | Ler da entrada padrão e escrever na saída padrão e arquivos.                                                                                                               |
| test      | `gtest`      | Avaliar expressão condicional.                                                                                                                                             |
| timeout   | `gtimeout`   | Executar um comando com um limite de tempo.                                                                                                                                |
| touch     | `gtouch`     | Alterar carimbos de data/hora do arquivo.                                                                                                                                  |
| tr        | `gtr`        | Traduzir, apertar e/ou excluir caracteres.                                                                                                                                 |
| true      | `gtrue`      | Não fazer nada, com sucesso.                                                                                                                                               |
| truncate  | `gtruncate`  | truncar: Encolher ou estender o tamanho de um arquivo para o tamanho especificado.                                                                                         |
| tsort     | `gtsort`     | Classificação topológica.                                                                                                                                                  |
| tty       | `gtty`       | Imprimir nome do arquivo do terminal conectado à entrada padrão.                                                                                                           |
| uname     | `guname`     | Imprimir certas informações do sistema.                                                                                                                                    |
| unexpand  | `gunexpand`  | unexpand: Converter espaços em cada ARQUIVO para guias, escrevendo na saída padrão.                                                                                        |
| uniq      | `guniq`      | Filtrar linhas correspondentes adjacentes da ENTRADA (ou entrada padrão), escrevendo na SAÍDA (ou saída padrão).                                                           |
| unlink    | `gunlink`    | Chamar a função unlink para remover o ARQUIVO especificado.                                                                                                                |
| uptime    | `guptime`    | Imprimir a hora atual, o tempo que o sistema está ligado, o número de usuários no sistema e o número médio de trabalhos na fila de execução nos últimos 1, 5 e 15 minutos. |
| users     | `gusers`     | Exibir quem está logado atualmente.                                                                                                                                        |
| vdir      | `gvdir`      | Listar informações sobre os ARQUIVOS (o diretório atual por padrão).                                                                                                       |
| wc        | `gwc`        | Imprimir contagem de nova linha, palavra e byte para cada ARQUIVO, e uma linha total se mais de um ARQUIVO for especificado.                                               |
| who       | `gwho`       | Imprimir informações sobre usuários que estão logados atualmente.                                                                                                          |
| whoami    | `gwhoami`    | Imprimir o nome de usuário associado ao ID de usuário efetivo atual.                                                                                                       |
| yes       | `gyes`       | Repetidamente emitir uma linha com todas as STRING(s) especificadas, ou 'y'.                                                                                               |

[coreutils]: https://www.gnu.org/software/coreutils/
