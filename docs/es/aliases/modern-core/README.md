---
description: El Núcleo Moderno (Modern Core) es un conjunto de herramientas impulsadas por Rust que reemplazan las utilidades Unix heredadas con alternativas más rápidas e inteligentes.
lang: es-ES
metaTitle: Núcleo Moderno - Dotfiles (ES)
permalink: /es/aliases/modern-core/
meta:
  - name: keywords
    content: modern core, atuin, yazi, zellij, ghostty, rust, shell, herramientas
---

# Herramientas del Núcleo Moderno

En **v0.2.471**, introdujimos el "Núcleo Moderno" (Modern Core), un conjunto de herramientas de alto rendimiento impulsadas por Rust diseñadas para reemplazar las utilidades Unix heredadas.

## Resumen de Herramientas

| Herramienta | Reemplaza a     | Descripción                                                                 | Atajo de Teclado |
| :---------- | :-------------- | :-------------------------------------------------------------------------- | :--------------- |
| **Atuin**   | `history`       | Historial de shell sincronizable y cifrado con búsqueda difusa.             | `Ctrl+R` / `Up`  |
| **Yazi**    | `ranger` / `ls` | Gestor de archivos de terminal ultrarrápido con vistas previas de imágenes. | `yy` (alias)     |
| **Zellij**  | `tmux`          | Multiplexor de terminal moderno con diseños intuitivos.                     | `Alt+n`          |
| **Ghostty** | `Terminal.app`  | Emulador de terminal multiplataforma acelerado por GPU.                     | N/A              |

## Atuin (Historial Mágico)

Atuin reemplaza tu historial de shell existente con una base de datos SQLite.

- **Búsqueda**: Presiona `Ctrl+R` o `Flecha Arriba` para abrir la interfaz de búsqueda.
- **Filtro**: Escribe consultas en lenguaje natural o códigos de salida específicos.
- **Sincronización**: Tu historial está cifrado y sincronizado en todos tus dispositivos.

## Yazi (Gestor de Archivos)

Yazi es un gestor de archivos de terminal escrito en Rust, basado en I/O asíncrono.

- **Lanzamiento**: Escribe `yy` en tu terminal.
- **Características**:
  - Inicio instantáneo.
  - Soporte de vista previa de imágenes Sixel/Kitty.
  - Sistema de plugins Lua.

## Zellij (Multiplexor)

Zellij es un espacio de trabajo de terminal con oaterías incluidas.

- **Lanzamiento**: Escribe `zellij` (o usa tu alias configurado).
- **Características**:
  - Motor de diseño (guardar/restaurar diseños de espacio de trabajo).
  - Paneles flotantes.
  - Atajos de teclado fáciles de usar (mostrados en pantalla).

## Ghostty (Terminal)

Ghostty es el emulador de terminal predeterminado para el Núcleo Moderno.

- **Características**:
  - Rendimiento nativo (acelerado por GPU).
  - Ligaduras y soporte de fuentes modernas.
  - Renderizado sin parpadeos.
