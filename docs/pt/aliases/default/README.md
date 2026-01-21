---
description: Os aliases Padrão são aliases que não são específicos para nenhum comando específico. Eles são aliases comuns usados em muitos contextos diferentes e estão listados aqui para conveniência.
lang: pt-BR
metaTitle: Aliases Padrão - Dotfiles (BR)
permalink: /pt/aliases/default/
---

# Aliases Padrão

O arquivo `default.aliases.sh` cria aliases de atalho úteis para muitos comandos
frequentemente usados.

## Padrão

Os aliases Padrão são aliases que não são específicos para nenhum comando particular.
Eles são aliases comuns que são usados em muitos contextos diferentes e são listados
aqui para conveniência. Os aliases são listados em ordem alfabética para facilitar o uso.

| Alias    | Comando                              | Descrição                                                                                                                                |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| :q       | `quit`                               | Atalho para o comando `exit`.                                                                                                            |
| bye      | `quit`                               | Atalho para o comando `exit`.                                                                                                            |
| ctf      | `echo $(ls -1 \| wc -l)`             | Contar o número de arquivos no diretório atual.                                                                                          |
| curl     | `curl --compressed`                  | Usar compressão ao transferir dados.                                                                                                     |
| da       | `date "+%Y-%m-%d %A %T %Z"`          | Exibir a data e hora atuais.                                                                                                             |
| h        | `history`                            | Lista todos os comandos usados recentemente.                                                                                             |
| halt     | `sudo /sbin/halt`                    | Desligar o sistema.                                                                                                                      |
| ifconfig | `sudo ifconfig`                      | Adicionar sudo ao comando ifconfig (configurar parâmetros de interface de rede).                                                         |
| ipinfo   | `ipconfig getpacket en0`             | Obter parâmetros de interface de rede para en0.                                                                                          |
| moon     | `curl -s "wttr.in/?format=%m"`       | Obter a fase da lua.                                                                                                                     |
| nls      | `sudo lsof -i -P \| grep LISTEN`     | Mostrar apenas ouvintes de rede ativos.                                                                                                  |
| now      | `date +"%T"`                         | Mostrar a hora atual.                                                                                                                    |
| op       | `sudo lsof -i -P`                    | Lista de portas abertas.                                                                                                                 |
| p        | `pwd`                                | Atalho para `pwd` que retorna o nome do diretório de trabalho.                                                                           |
| path     | `echo ${PATH//:/\\n}`                | Exibir a variável $PATH em novas linhas.                                                                                                 |
| pid      | `ps -f`                              | Exibir o uid, pid, pid pai, uso recente da CPU, hora de início do processo, tty de controle, uso decorrido da CPU e o comando associado. |
| ping     | `ping -c 5`                          | Limitar Ping a 5 pacotes ECHO_REQUEST.                                                                                                   |
| please   | `sudo -`                             | Executar um comando como superusuário.                                                                                                   |
| ports    | `netstat -tulan`                     | Listar todas as portas de escuta.                                                                                                        |
| poweroff | `sudo /sbin/shutdown`                | Desligar o sistema.                                                                                                                      |
| ps       | `ps auxwww`                          | Obtendo caminho completo de executáveis.                                                                                                 |
| q        | `quit`                               | Atalho para o comando `exit`.                                                                                                            |
| qfind    | `find . -name`                       | Pesquisar arquivo rapidamente.                                                                                                           |
| quit     | `exit`                               | Atalho para o comando `exit`.                                                                                                            |
| r        | `reload`                             | Recarregar o shell.                                                                                                                      |
| reboot   | `sudo /sbin/reboot`                  | Reinicializar o sistema.                                                                                                                 |
| reload   | `exec $SHELL -l`                     | Recarregar o shell.                                                                                                                      |
| shutdown | `sudo shutdown -h now'`              | Desligar o sistema.                                                                                                                      |
| spd      | `sudo rm -rf /private/var/log/asl/*` | Remover todos os arquivos de log em /private/var/log/asl.                                                                                |
| srv      | `python3 -m http.server`             | Iniciar um servidor HTTP simples.                                                                                                        |
| t        | `tail -f`                            | Imprime as últimas 10 linhas de um arquivo de texto ou log e aguarda novas adições ao arquivo para imprimi-lo em tempo real.             |
| top      | `sudo btop`                          | Permite ao usuário monitorar interativamente os recursos vitais do sistema ou processos do servidor em tempo real.                       |
| tree     | `tree --dirsfirst`                   | Exibir uma árvore de diretórios.                                                                                                         |
| wk       | `date +%V`                           | Mostrar o número da semana atual.                                                                                                        |
| wth      | `curl -s "wttr.in/?format=3"`        | Obter o clima.                                                                                                                           |
| x        | `quit`                               | Atalho para o comando `exit`.                                                                                                            |
