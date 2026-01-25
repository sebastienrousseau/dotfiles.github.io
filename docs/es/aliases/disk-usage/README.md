---
title: "Alias Disk Usage: monitoriza almacenamiento con shell"
description: "Alias shell para monitoreo de uso de disco. Muestra tamaños, encuentra directorios grandes y gestiona el almacenamiento."
lang: es-ES
metaTitle: Alias Disk Usage | Dotfiles
permalink: /aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: alias disk usage, comando du, monitoreo almacenamiento, tamaño archivo, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell para monitoreo de uso de disco. Muestra tamaños, encuentra directorios grandes y gestiona el almacenamiento.
  - name: twitter:title
    content: Alias Disk Usage | Dotfiles
  - name: og:title
    content: Alias Disk Usage | Dotfiles
  - name: og:description
    content: Alias shell para monitoreo de uso de disco. Muestra tamaños, encuentra directorios grandes y gestiona el almacenamiento.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Disk Usage

Supervisa rápidamente el consumo de almacenamiento en tu sistema de archivos.

## Descubrir

Los alias disk usage proporcionan comandos simplificados para monitorear el consumo en sistemas Unix. Definidos en `disk-usage.aliases.sh`, estos atajos simplifican operaciones `du` y se cargan automáticamente por chezmoi en la configuración Dotfiles.

## Referencia

La siguiente tabla lista todos los alias de disk usage y sus funciones.

| Alias | Descripción |
|-------|-------------|
| `du` | Mostrar el uso de disco del directorio actual |
| `du1` | Mostrar tamaño de archivos y directorios del directorio actual |
| `duh` | Mostrar tamaños en formato legible |
| `ducks` | Mostrar los 10 archivos/directorios más grandes del directorio actual |
| `dus` | Mostrar tamaños legibles ordenados por tamaño |
| `dusym` | Mostrar tamaños incluyendo symlinks |
| `dut` | Mostrar el tamaño total del directorio actual |
