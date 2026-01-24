---
description: Los alias de Rust son una coleccion de alias que permiten interactuar con los comandos `rustup` y `cargo`. Estan disenados para usarse con el gestor de toolchains `rustup` y el gestor de paquetes `cargo`.
lang: es-ES
metaTitle: Los alias de Rust - Dotfiles (ES)
permalink: /es/aliases/rust/

meta:
  - name: keywords
    content: aliases, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias de Rust son una coleccion de alias que permiten interactuar con los comandos `rustup` y `cargo`. Estan disenados para usarse con el gestor de toolchains `rustup` y el gestor de paquetes `cargo`.
  - name: twitter:description
    content: Los alias de Rust son una coleccion de alias que permiten interactuar con los comandos `rustup` y `cargo`. Estan disenados para usarse con el gestor de toolchains `rustup` y el gestor de paquetes `cargo`.
  - name: twitter:title
    content: Los alias de Rust - Dotfiles (ES)
  - name: og:title
    content: Los alias de Rust - Dotfiles (ES)
  - name: og:description
    content: Los alias de Rust son una coleccion de alias que permiten interactuar con los comandos `rustup` y `cargo`. Estan disenados para usarse con el gestor de toolchains `rustup` y el gestor de paquetes `cargo`.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Rust

Gestionar alias de Rust. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `rust.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto completo de alias para el desarrollo en Rust
usando los comandos `cargo` y `rustup`.
#### Comandos basicos
- `cg` - Atajo de Cargo
- `cgn` - Crear proyecto binario nuevo
- `cgni` - Crear proyecto de biblioteca nuevo
- `cginit` - Inicializar proyecto en el directorio actual
#### Compilacion y ejecucion
- `cgb` - Compilar debug
- `cgbr` - Compilar release
- `cgr` - Ejecutar debug
- `cgrr` - Ejecutar release
- `cgw` - Observar y recompilar
#### Pruebas y benchmarking
- `cgt` - Ejecutar pruebas
- `cgtr` - Ejecutar pruebas en modo release
- `cgbh` - Ejecutar benchmarks
- `cgta` - Probar todos los targets
- `cgtt` - Pruebas en un solo hilo
#### Calidad de codigo
- `cgc` - Verificar compilacion
- `cgcl` - Limpiar artefactos de compilacion
- `cgcy` - Ejecutar lints de clippy
- `cgf` - Formatear codigo
- `cgfa` - Formatear todo el codigo
- `cgfx` - Autocorregir problemas de codigo
- `cgaud` - Comprobar vulnerabilidades de seguridad
#### Documentacion
- `cgd` - Compilar y abrir documentacion
- `cgdr` - Compilar documentacion release
- `cgdo` - Documentar items privados
#### Dependencias
- `cga` - Agregar dependencia
- `cgad` - Agregar dependencia de desarrollo
- `cgu` - Actualizar dependencias
- `cgo` - Comprobar dependencias desactualizadas
- `cgv` - Vendor de dependencias
- `cgtree` - Mostrar arbol de dependencias
#### Compilacion cruzada
- `cgx` - Compilar usando Zig
- `cgxw` - Compilacion cruzada
- `cgxt` - Target especifico de plataforma
#### Analisis y perfilado
- `cgfl` - Generar flamegraph
- `cgbl` - Analisis de tamano del binario
- `cgl` - Cobertura de codigo
- `cgm` - Estructura de modulos
- `cgex` - Expandir macros
#### Gestion de paquetes
- `cgi` - Instalar binario
- `cgun` - Desinstalar binario
- `cgp` - Publicar en crates.io
- `cgs` - Buscar en crates.io
- `cgcp` - Crear paquete de release
#### Compilacion avanzada
- `cgba` - Compilar todos los targets
- `cgbt` - Compilar con todas las features
- `cgbp` - Compilar con perfil especifico
#### Plantillas de proyecto
- `cgnb` - Nuevo binario desde plantilla
- `cgnl` - Nueva biblioteca desde plantilla
- `cgnt` - Nuevo desde plantilla personalizada
#### Actualizaciones e instalacion
- `ru` - Actualizar todos los toolchains
- `rus` - Actualizar toolchain estable
- `run` - Actualizar toolchain nightly
- `rti` - Instalar toolchain especifica
#### Gestion de componentes
- `rca` - Agregar componente
- `rcl` - Listar componentes
- `rcr` - Eliminar componente
#### Gestion de toolchain
- `rtl` - Listar toolchains instaladas
- `rtu` - Desinstalar toolchain
- `rde` - Establecer toolchain por defecto
#### Gestion de targets
- `rtaa` - Agregar target de compilacion
- `rtal` - Listar targets disponibles
- `rtar` - Eliminar target de compilacion
#### Ejecucion de entorno
- `rns` - Ejecutar comando con estable
- `rnn` - Ejecutar comando con nightly
#### Documentacion y ayuda
- `rdo` - Abrir documentacion de Rust
#### Gestion de overrides
- `rpr` - Establecer toolchain para el directorio
- `rpl` - Listar overrides de directorio
- `rpn` - Eliminar override de directorio
#### Informacion de toolchain
- `rws` - Mostrar ruta activa de rustc
- `rsh` - Mostrar info de toolchain
### Flujos de trabajo comunes
#### Configuracion de proyecto nuevo
```bash
# Crear un proyecto nuevo con dependencias comunes
cgn myproject && cd myproject && cga serde && cgad tokio
```
#### Flujo de release
```bash
# Verificar, probar y compilar para release
cgcy && cgt && cgbr && cgaud
```
#### Actualizacion de documentacion
```bash
# Formatear codigo y actualizar documentacion
cgfa && cgd && cgdo
```
#### Comprobacion de compilacion cruzada
```bash
# Comprobar compilacion para una arquitectura distinta
cgxw check --target aarch64-unknown-linux-gnu
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
