---
description: Os aliases do PNpm são uma coleção de aliases que permitem interagir com a ferramenta de linha de comando `pnpm`. Pnpm é um gerenciador de pacotes rápido e eficiente em termos de espaço em disco.
lang: pt-BR
metaTitle: Aliases do PNpm - Dotfiles (BR)
permalink: /pt/aliases/pnpm/
---

# Aliases do PNpm

Este arquivo `pnpm.aliases.sh` cria aliases de atalho úteis para muitos
comandos [PNpm](https://pnpm.io) comumente usados.

Os aliases do PNpm são uma coleção de aliases que permitem interagir com
a ferramenta de linha de comando `pnpm`. Pnpm é um gerenciador de pacotes rápido e eficiente em termos de espaço em disco.

## PNpm

[PNpm](https://pnpm.io) é um gerenciador de pacotes para JavaScript e Node.js. Ele
é rápido, eficiente em espaço de disco e confiável.

| Alias | Comando                              | Descrição                                                           |
| ----- | ------------------------------------ | ------------------------------------------------------------------- |
| pna   | `pnpm add`                           | Adicionar um pacote ao projeto.                                     |
| pnad  | `pnpm add --save-dev`                | Adicionar um pacote ao projeto como dependência de desenvolvimento. |
| pnap  | `pnpm add --save-peer`               | Adicionar um pacote ao projeto como dependência de par.             |
| pnau  | `pnpm audit`                         | Auditar o projeto em busca de vulnerabilidades.                     |
| pnb   | `pnpm run build`                     | Construir o projeto.                                                |
| pnc   | `pnpm create`                        | Criar um novo projeto.                                              |
| pnd   | `pnpm run dev`                       | Executar o projeto em modo de desenvolvimento.                      |
| pndoc | `pnpm run doc`                       | Gerar documentação para o projeto.                                  |
| pnga  | `pnpm add --global`                  | Adicionar um pacote ao armazenamento global.                        |
| pngls | `pnpm list --global`                 | Listar pacotes no armazenamento global.                             |
| pngrm | `pnpm remove --global`               | Remover um pacote do armazenamento global.                          |
| pngu  | `pnpm update --global`               | Atualizar um pacote no armazenamento global.                        |
| pnh   | `pnpm help`                          | Mostrar ajuda para um comando.                                      |
| pni   | `pnpm init`                          | Inicializar um novo projeto.                                        |
| pnin  | `pnpm install`                       | Instalar as dependências do projeto.                                |
| pnln  | `pnpm run lint`                      | Executar `pnpm run lint`.                                           |
| pnls  | `pnpm list`                          | Listar pacotes no projeto.                                          |
| pnout | `pnpm outdated`                      | Verificar pacotes desatualizados.                                   |
| pnp   | `pnpm`                               | Executar um comando PNpm.                                           |
| pnpub | `pnpm publish`                       | Publicar o projeto.                                                 |
| pnrm  | `pnpm remove`                        | Remover um pacote do projeto.                                       |
| pnrun | `pnpm run`                           | Executar um script no projeto.                                      |
| pns   | `pnpm run serve`                     | Executar o projeto em modo de produção.                             |
| pnst  | `pnpm start`                         | Iniciar o projeto.                                                  |
| pnsv  | `pnpm server`                        | Iniciar o servidor de desenvolvimento do projeto.                   |
| pnt   | `pnpm test`                          | Executar os testes do projeto.                                      |
| pntc  | `pnpm test --coverage`               | Executar os testes do projeto com cobertura.                        |
| pnui  | `pnpm update --interactive`          | Atualizar pacotes interativamente.                                  |
| pnuil | `pnpm update --interactive --latest` | Atualizar pacotes interativamente para a versão mais recente.       |
| pnun  | `pnpm uninstall`                     | Remover um pacote do projeto.                                       |
| pnup  | `pnpm update`                        | Atualizar pacotes no projeto.                                       |
| pnwhy | `pnpm why`                           | Mostrar por que um pacote está instalado.                           |
| pnx   | `pnpx`                               | Executar um comando PNpx.                                           |
