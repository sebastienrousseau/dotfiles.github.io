---
title: "Alias Diagnostics: salud del sistema y auto-reparación"
description: "Alias shell para diagnósticos, chequeos de salud, detección de deriva y auto-reparación."
lang: es-ES
metaTitle: "Alias Diagnostics | Dotfiles"
permalink: /aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "alias diagnostics, chequeo salud sistema, dotfiles doctor, chezmoi verify, auto-reparación shell"
---

# Alias Diagnostics

Herramientas de auto-reparación y control de salud del sistema.

## Descubrir

Los alias diagnostics proporcionan comandos para monitorizar la salud del sistema, detectar deriva de configuración y reparar el entorno dotfiles. Estas utilidades se integran con chezmoi para mantener la coherencia entre el estado local y el gestionado.

## Referencia

### Salud y reparación

| Alias | Descripción |
|-------|-------------|
| `doc`, `dot-doctor` | Ejecutar el script de salud (`doctor.sh`). |
| `drift`, `dot-drift` | Verificar deriva de archivos locales (`chezmoi verify`). |
| `heal`, `dot-heal` | Aplicar el estado gestionado para reparar deriva (`chezmoi apply`). |
| `doc-full` | Ejecutar doctor con información de depuración ampliada. |
