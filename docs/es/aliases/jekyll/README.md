---
description: Los alias de Jekyll son una colección de alias que te permiten interactuar con Jekyll de una manera más eficiente. Jekyll es un generador de sitios estáticos.
lang: es-ES
metaTitle: Alias de Jekyll - Dotfiles (ES)
permalink: /es/aliases/jekyll/
---

# Alias de Jekyll

El archivo `jekyll.aliases.sh` crea atajos útiles para muchos comandos de [Jekyll](https://jekyllrb.com/) utilizados comúnmente.

Los alias de Jekyll te permiten interactuar con este generador de sitios estáticos de manera más eficiente. Jekyll toma texto escrito en tu lenguaje de marcado favorito y usa diseños para crear un sitio web estático. Puedes ajustar la apariencia del sitio, las URL, los datos mostrados en la página y más.

## Alias de desarrollo de Jekyll

| Alias | Comando                                                           | Descripción                                                                                                                |
| ----- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | Realiza una compilación única de tu sitio en ./\_site.                                                                     |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | Elimina todos los archivos generados: carpeta de destino, archivo de metadatos, cachés de Sass y Jekyll.                   |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | Realiza una compilación de desarrollo del sitio en '\_site' y ejecuta un servidor de desarrollo local.                     |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | Realiza una compilación de desarrollo del sitio en '\_site' y ejecuta un servidor de desarrollo local con recarga en vivo. |
| jko   | `open http://localhost:4000/`                                     | Abrir el servidor de desarrollo local.                                                                                     |

## Alias de lanzamiento de Jekyll

| Alias | Comando                                                          | Descripción                                                                                            |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | Realiza una compilación de producción del sitio en '\_site' y ejecuta un servidor de desarrollo local. |
