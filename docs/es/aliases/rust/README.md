---
description: Los alias de Rust son una colección de alias que te permiten interactuar con los comandos `rustup` y `cargo`. Están diseñados para usarse con el gestor de herramientas `rustup` y el gestor de paquetes `cargo`.
lang: es-ES
metaTitle: Alias de Rust - Dotfiles (ES)
permalink: /es/aliases/rust/
---

# Alias de Rust

El archivo `rust.aliases.sh` crea atajos útiles para [Rust](https://www.rust-lang.org/es).

Los alias de Rust son una colección de alias que te permiten interactuar con los comandos `rustup` y `cargo`. Están diseñados para usarse con el gestor de herramientas `rustup` y el gestor de paquetes `cargo`.

## Rust

[Rust](https://www.rust-lang.org/es) es un lenguaje de programación centrado en el rendimiento y la seguridad, especialmente la concurrencia segura. Rust es sintácticamente similar a C++, pero está diseñado para proporcionar una mejor seguridad de memoria manteniendo un alto rendimiento.

| Alias | Comando                      | Descripción                 |
| ----- | ---------------------------- | --------------------------- |
| ru    | `rustup update`              | Actualizar Rustup.              |
| rca   | `rustup component add`       | Agregar componente de Rustup.       |
| rcl   | `rustup component list`      | Listar componentes de Rustup.      |
| rcr   | `rustup component remove`    | Eliminar componente de Rustup.    |
| rde   | `rustup default`             | Establecer Rustup predeterminado.             |
| rnn   | `rustup run nightly`         | Ejecutar Rustup nightly.         |
| rns   | `rustup run stable`          | Ejecutar Rustup stable.          |
| rtaa  | `rustup target add`          | Agregar objetivo (target) de Rustup.          |
| rtal  | `rustup target list`         | Listar objetivos de Rustup.         |
| rtar  | `rustup target remove`       | Eliminar objetivo de Rustup.       |
| rti   | `rustup toolchain install`   | Instalar cadena de herramientas de Rustup.   |
| rtl   | `rustup toolchain list`      | Listar cadenas de herramientas de Rustup.      |
| rtu   | `rustup toolchain uninstall` | Desinstalar cadena de herramientas de Rustup. |
| ruc   | `rustup update nightly`      | Actualizar Rustup nightly.      |
| rus   | `rustup update stable`       | Actualizar Rustup stable.       |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) es el gestor de paquetes de Rust. Se utiliza para compilar, probar y empaquetar proyectos de Rust. Cargo se incluye con Rustup.

| Alias  | Comando              | Descripción          |
| ------ | -------------------- | -------------------- |
| cg     | `cargo`              | Atajo para Cargo.      |
| cgb    | `cg build`           | Compilar con Cargo (build).         |
| cgbh   | `cg bench`           | Ejecutar benchmarks con Cargo.         |
| cgbr   | `cg build --release` | Compilar versión de lanzamiento (release). |
| cgc    | `cg check`           | Verificar código con Cargo (check).         |
| cgcl   | `cg clean`           | Limpiar proyecto con Cargo.         |
| cgcy   | `cg clippy`          | Ejecutar linter Clippy.        |
| cgd    | `cg doc --open`      | Generar y abrir documentación.           |
| cgdr   | `cg doc --release`   | Generar documentación de lanzamiento.   |
| cgf    | `cg fmt`             | Formatear código.        |
| cgi    | `cg install`         | Instalar binario con Cargo.       |
| cginit | `cg init`            | Inicializar nuevo proyecto de Cargo.            |
| cgn    | `cg new`             | Crear nuevo proyecto de Cargo.             |
| cgp    | `cg publish`         | Publicar paquete con Cargo.         |
| cgr    | `cg run`             | Ejecutar proyecto con Cargo.           |
| cgrr   | `cg run --release`   | Ejecutar versión de lanzamiento.   |
| cgs    | `cg search`          | Buscar paquetes en crates.io.          |
| cgt    | `cg test`            | Ejecutar pruebas con Cargo.          |
| cgtr   | `cg test --release`  | Ejecutar pruebas en modo lanzamiento.  |
| cgtt   | `cg tree`            | Mostrar árbol de dependencias.          |
| cgu    | `cg update`          | Actualizar dependencias.          |
| cgun   | `cg uninstall`       | Desinstalar binario.       |
