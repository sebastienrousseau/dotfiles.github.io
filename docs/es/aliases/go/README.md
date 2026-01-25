---
title: "Alias Go: simplifica tu flujo de trabajo Go"
description: "Alias shell para desarrollo en Go. Ejecuta, compila, prueba y gestiona módulos con atajos."
lang: es-ES
metaTitle: "Alias Go | Dotfiles"
permalink: /aliases/go/
sidebar: true
meta:
  - name: keywords
    content: "alias go, atajos shell go, desarrollo go, dotfiles, comandos golang"
---

# Alias Go

Simplifica tu flujo de trabajo Go con atajos intuitivos.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Descubrir

Estos alias se definen en `go.aliases.sh` y se cargan automáticamente por chezmoi. Ofrecen acceso rápido a comandos Go comunes para ejecutar, compilar, probar y gestionar módulos.

## Referencia

| Alias    | Comando       | Descripción                        |
|----------|---------------|------------------------------------|
| `go`     | `go`          | Atajo de Go                        |
| `gor`    | `go run`      | Ejecutar programa Go               |
| `gob`    | `go build`    | Compilar paquete Go                |
| `got`    | `go test`     | Ejecutar pruebas Go                |
| `gomt`   | `go mod tidy` | Limpiar dependencias del módulo    |
| `goget`  | `go get`      | Descargar e instalar paquetes Go   |
