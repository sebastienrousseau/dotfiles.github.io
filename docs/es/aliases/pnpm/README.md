---
description: Los alias de PNpm son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `pnpm`. Pnpm es un gestor de paquetes rápido y eficiente en espacio de disco.
lang: es-ES
metaTitle: Alias de PNpm - Dotfiles (ES)
permalink: /es/aliases/pnpm/
---

# Alias de PNpm

El archivo `pnpm.aliases.sh` crea atajos útiles para muchos comandos de [PNpm](https://pnpm.io/es/) utilizados comúnmente.

Los alias de PNpm son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `pnpm`. Pnpm es un gestor de paquetes rápido y eficiente en espacio de disco.

## PNpm

[PNpm](https://pnpm.io/es/) es un gestor de paquetes para JavaScript y Node.js. Es rápido, eficiente en espacio de disco y confiable.

| Alias | Comando                              | Descripción                                                   |
| ----- | ------------------------------------ | ------------------------------------------------------------- |
| pna   | `pnpm add`                           | Agregar un paquete al proyecto                                |
| pnad  | `pnpm add --save-dev`                | Agregar un paquete al proyecto como dependencia de desarrollo |
| pnap  | `pnpm add --save-peer`               | Agregar un paquete al proyecto como dependencia peer          |
| pnau  | `pnpm audit`                         | Auditar el proyecto en busca de vulnerabilidades              |
| pnb   | `pnpm run build`                     | Construir el proyecto                                         |
| pnc   | `pnpm create`                        | Crear un nuevo proyecto                                       |
| pnd   | `pnpm run dev`                       | Ejecutar el proyecto en modo de desarrollo                    |
| pndoc | `pnpm run doc`                       | Generar documentación para el proyecto                        |
| pnga  | `pnpm add --global`                  | Agregar un paquete al almacén global                          |
| pngls | `pnpm list --global`                 | Listar paquetes en el almacén global                          |
| pngrm | `pnpm remove --global`               | Eliminar un paquete del almacén global                        |
| pngu  | `pnpm update --global`               | Actualizar un paquete en el almacén global                    |
| pnh   | `pnpm help`                          | Mostrar ayuda para un comando                                 |
| pni   | `pnpm init`                          | Inicializar un nuevo proyecto                                 |
| pnin  | `pnpm install`                       | Instalar las dependencias del proyecto                        |
| pnln  | `pnpm run lint`                      | Ejecuta `pnpm run lint`                                       |
| pnls  | `pnpm list`                          | Listar paquetes en el proyecto                                |
| pnout | `pnpm outdated`                      | Buscar paquetes desactualizados                               |
| pnp   | `pnpm`                               | Ejecutar un comando PNpm                                      |
| pnpub | `pnpm publish`                       | Publicar el proyecto                                          |
| pnrm  | `pnpm remove`                        | Eliminar un paquete del proyecto                              |
| pnrun | `pnpm run`                           | Ejecutar un script en el proyecto                             |
| pns   | `pnpm run serve`                     | Ejecutar el proyecto en modo producción                       |
| pnst  | `pnpm start`                         | Iniciar el proyecto                                           |
| pnsv  | `pnpm server`                        | Iniciar el servidor de desarrollo del proyecto                |
| pnt   | `pnpm test`                          | Ejecutar las pruebas del proyecto                             |
| pntc  | `pnpm test --coverage`               | Ejecutar las pruebas del proyecto con cobertura               |
| pnui  | `pnpm update --interactive`          | Actualizar paquetes interactivamente                          |
| pnuil | `pnpm update --interactive --latest` | Actualizar paquetes interactivamente a la última versión      |
| pnun  | `pnpm uninstall`                     | Desinstalar un paquete del proyecto                           |
| pnup  | `pnpm update`                        | Actualizar paquetes en el proyecto                            |
| pnwhy | `pnpm why`                           | Mostrar por qué está instalado un paquete                     |
| pnx   | `pnpx`                               | Ejecutar un comando PNpx                                      |
