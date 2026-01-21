---
description: Alias de seguridad para Dotfiles
lang: es-ES
metaTitle: Alias de Seguridad - Dotfiles (ES)
permalink: /es/aliases/security/
---

# Alias de Seguridad

Herramientas para endurecer el entorno y gestionar la inmutabilidad de la configuración.

## 🔒 Inmutabilidad

| Alias            | Descripción                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `lock-configs`   | Bloquea archivos críticos (`.zshrc`, etc.) para prevenir modificaciones (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Desbloquea archivos críticos para edición.                                                           |
| `check-locks`    | Comprueba el estado de bloqueo de archivos críticos.                                                     |

## 🔑 Firma de Git

(Ver [Alias de Git](../git/README.md) para la configuración de firma)
