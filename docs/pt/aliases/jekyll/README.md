---
description: Os aliases do Jekyll são uma coleção de aliases que permitem interagir com o Jekyll de uma maneira mais interativa. Jekyll é um gerador de site estático.
lang: pt-BR
metaTitle: Aliases do Jekyll - Dotfiles (BR)
permalink: /pt/aliases/jekyll/
---

# Aliases do Jekyll

Este arquivo `jekyll.aliases.sh` cria aliases de atalho úteis para muitos
comandos [Jekyll](https://jekyllrb.com/) comumente usados.

Os aliases do Jekyll são uma coleção de aliases que permitem interagir com o
Jekyll de uma maneira mais interativa. Jekyll é um gerador de site estático. Ele pega
texto escrito em sua linguagem de marcação favorita e usa layouts para criar um
site estático. Você pode ajustar a aparência do site, URLs, os dados exibidos
na página e muito mais.

## Aliases de desenvolvimento Jekyll

| Alias | Comando                                                           | Descrição                                                                               |
| ----- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Realiza uma construção única do seu site para ./\_site.                                 |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Remove todos os arquivos gerados: pasta de destino, arquivo de metadados, caches Sass e Jekyll. |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Faz uma construção de desenvolvimento do site para '\_site' e executa um servidor de desenvolvimento local. |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Faz uma construção de desenvolvimento do site para '\_site' e executa um servidor de desenvolvimento local. |
| jko   | `open http://localhost:4000/`                                     | Abrir servidor de desenvolvimento local.                                                |

## Aliases de lançamento Jekyll

| Alias | Comando                                                          | Descrição                                                                            |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Faz uma construção de produção do site para '\_site' e executa um servidor de desenvolvimento local. |
