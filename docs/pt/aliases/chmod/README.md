---
description: Os aliases de Chmod permitem alterar as permissões (ou modo de acesso) de um arquivo ou diretório.
lang: pt-BR
metaTitle: Aliases de Chmod - Dotfiles (BR)
permalink: /pt/aliases/chmod/
---

# Aliases de Chmod

O arquivo `chmod.aliases.sh` cria aliases de atalho úteis para alterar
permissões de arquivo.

## Permissão

O utilitário chmod modifica os bits de modo de arquivo dos arquivos listados conforme especificado
pelo operando de modo. Também pode ser usado para modificar as Listas de Controle de Acesso
(ACLs) associadas aos arquivos listados.

| Alias  | Comando             | Descrição                                                                                                                                                                                                                                                    |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 000    | `chmod -R 000`      | (chmod a-rwx) define permissões para que, (U)ario / dono não possa ler, não possa escrever e não possa executar. (G)rupo não possa ler, não possa escrever e não possa executar. (O)utros não possam ler, não possam escrever e não possam executar.         |
| 400    | `chmod -R 400`      | (chmod a-rw) define permissões para que, (U)ario / dono não possa ler, não possa escrever e possa executar. (G)rupo não possa ler, não possa escrever e possa executar. (O)utros não possam ler, não possam escrever e possam executar.                      |
| 444    | `chmod -R 444`      | (chmod a-r) define permissões para que, (U)ario / dono não possa ler, não possa escrever e possa executar. (G)rupo não possa ler, não possa escrever e possa executar. (O)utros não possam ler, não possam escrever e possam executar.                       |
| 600    | `chmod -R 600`      | (chmod a+rwx,u-x,g-rwx,o-rwx) define permissões para que, (U)ario / dono possa ler, possa escrever e não possa executar. (G)rupo não possa ler, não possa escrever e não possa executar. (O)utros não possam ler, não possam escrever e não possam executar. |
| 644    | `chmod -R 644`      | (chmod a+rwx,u-x,g-wx,o-wx) define permissões para que, (U)ario / dono possa ler, possa escrever e não possa executar. (G)rupo possa ler, não possa escrever e não possa executar. (O)utros possam ler, não possam escrever e não possam executar.           |
| 666    | `chmod -R 666`      | (chmod a+rwx,u-x,g-x,o-x) define permissões para que, (U)ario / dono possa ler, possa escrever e não possa executar. (G)rupo possa ler, possa escrever e não possa executar. (O)utros possam ler, possam escrever e não possam executar.                     |
| 755    | `chmod -R 755`      | (chmod a+rwx,g-w,o-w) define permissões para que, (U)ario / dono possa ler, possa escrever e possa executar. (G)rupo possa ler, não possa escrever e possa executar. (O)utros possam ler, não possam escrever e possam executar.                             |
| 764    | `chmod -R 764`      | (chmod a+rwx,g-x,o-wx) define permissões para que, (U)ario / dono possa ler, possa escrever e possa executar. (G)rupo possa ler, possa escrever e não possa executar. (O)utros possam ler, não possam escrever e não possam executar.                        |
| 777    | `chmod -R 777`      | (chmod a+rwx) define permissões para que, (U)ario / dono possa ler, possa escrever e possa executar. (G)rupo possa ler, possa escrever e possa executar. (O)utros possam ler, possam escrever e possam executar.                                             |
| chgrp  | `chgrp -v`          | Alterar a propriedade do grupo de arquivos ou diretórios.                                                                                                                                                                                                    |
| chgrpr | `chgrp -Rv`         | Alterar a propriedade do grupo de arquivos ou diretórios recursivamente.                                                                                                                                                                                     |
| chgrpu | `chgrp -Rv ${USER}` | Alterar a propriedade do grupo de arquivos ou diretórios recursivamente para o usuário atual.                                                                                                                                                                |
| chmod  | `chmod -v`          | Alterar bits de modo de arquivo.                                                                                                                                                                                                                             |
| chmodr | `chmod -Rv`         | Alterar bits de modo de arquivo recursivamente.                                                                                                                                                                                                              |
| chmodu | `chmod -Rv u+rwX`   | Alterar bits de modo de arquivo recursivamente para o usuário atual.                                                                                                                                                                                         |
| chmox  | `chmod +x`          | Tornar um arquivo executável.                                                                                                                                                                                                                                |
| chown  | `chown -v`          | Alterar proprietário e grupo do arquivo.                                                                                                                                                                                                                     |
| chownr | `chown -Rv`         | Alterar proprietário e grupo do arquivo recursivamente.                                                                                                                                                                                                      |
| chownu | `chown -Rv ${USER}` | Alterar proprietário e grupo do arquivo recursivamente para o usuário atual.                                                                                                                                                                                 |
