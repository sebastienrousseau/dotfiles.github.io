---
description: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
lang: de-DE
metaTitle: The Rust aliases - Dotfiles (DE)
permalink: /de/aliases/rust/

meta:
  - name: keywords
    content: aliases, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
  - name: twitter:description
    content: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
  - name: twitter:title
    content: The Rust aliases - Dotfiles (DE)
  - name: og:title
    content: The Rust aliases - Dotfiles (DE)
  - name: og:description
    content: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Rust aliases

The `rust.aliases.sh` file creates helpful shortcut aliases for
[Rust](https://www.rust-lang.org/).

The Rust aliases are a collection of aliases that allow you to interact with the
`rustup` and `cargo` commands. They are designed to be used with the `rustup`
toolchain manager and the `cargo` package manager.

## Rust

[Rust](https://www.rust-lang.org/) is a programming language that is focused on
performance and safety, especially safe concurrency. Rust is syntactically
similar to C++, but is designed to provide better memory safety while
maintaining high performance.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ---------------------------- | --------------------------- |
| ru    | `rustup update`              | Rustup Aktualisieren.              |
| rca   | `rustup component add`       | Rustup component Hinzufügen.       |
| rcl   | `rustup component list`      | Rustup component Auflisten.      |
| rcr   | `rustup component remove`    | Rustup component Entfernen.    |
| rde   | `rustup default`             | Rustup default.             |
| rnn   | `rustup run nightly`         | Run rustup nightly.         |
| rns   | `rustup run stable`          | Run rustup stable.          |
| rtaa  | `rustup target add`          | Rustup target Hinzufügen.          |
| rtal  | `rustup target list`         | Rustup target Auflisten.         |
| rtar  | `rustup target remove`       | Rustup target Entfernen.       |
| rti   | `rustup toolchain install`   | Rustup toolchain Installieren.   |
| rtl   | `rustup toolchain list`      | Rustup toolchain Auflisten.      |
| rtu   | `rustup toolchain uninstall` | Rustup toolchain uninstall. |
| ruc   | `rustup update nightly`      | Aktualisieren rustup nightly.      |
| rus   | `rustup update stable`       | Aktualisieren rustup stable.       |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) is the Rust package manager. It is
used to build, test, and package Rust projects. Cargo is included with Rustup.

| Alias  | Command              | Description          |
| ------ | -------------------- | -------------------- |
| cg     | `cargo`              | Cargo shortcut.      |
| cgb    | `cg build`           | Cargo Bauen.         |
| cgbh   | `cg bench`           | Cargo bench.         |
| cgbr   | `cg build --release` | Cargo Bauen release. |
| cgc    | `cg check`           | Cargo Prüfen.         |
| cgcl   | `cg clean`           | Cargo clean.         |
| cgcy   | `cg clippy`          | Cargo clippy.        |
| cgd    | `cg doc --open`      | Cargo doc.           |
| cgdr   | `cg doc --release`   | Cargo doc release.   |
| cgf    | `cg fmt`             | Cargo format.        |
| cgi    | `cg install`         | Cargo Installieren.       |
| cginit | `cg init`            | Cargo init.          |
| cgn    | `cg new`             | Cargo new.           |
| cgp    | `cg publish`         | Cargo publish.       |
| cgr    | `cg run`             | Cargo run.           |
| cgrr   | `cg run --release`   | Cargo run release.   |
| cgs    | `cg search`          | Cargo Suchen.        |
| cgt    | `cg test`            | Cargo test.          |
| cgtr   | `cg test --release`  | Cargo test release.  |
| cgtt   | `cg tree`            | Cargo tree.          |
| cgu    | `cg update`          | Cargo Aktualisieren.        |
| cgun   | `cg uninstall`       | Cargo uninstall.     |
