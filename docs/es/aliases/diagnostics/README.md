---
description: Alias de diagnóstico para Dotfiles
lang: es-ES
metaTitle: Alias de Diagnóstico - Dotfiles (ES)
permalink: /es/aliases/diagnostics/
---

# Alias de Diagnóstico

Herramientas para la autocuración y comprobaciones de salud del sistema.

## 🩺 Salud y Reparación

| Alias                | Descripción                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `doc`, `dot-doctor`  | Ejecuta el script de comprobación de salud del sistema (`doctor.sh`).                             |
| `drift`, `dot-drift` | Verifica si los archivos locales se han desviado del estado gestionado (`chezmoi verify`). |
| `heal`, `dot-heal`   | Aplica el estado gestionado para reparar la desviación (`chezmoi apply`).                    |
| `doc-full`           | Ejecuta doctor con información extendida de depuración de rutas.                                 |
