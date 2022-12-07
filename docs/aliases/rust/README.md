---
description: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
lang: en-GB
metaTitle: The Rust aliases - Dotfiles (UK)
permalink: /aliases/rust/

meta:
  - name: keywords
    content: aliases, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
  - name: twitter:description
    content: The Rust aliases are a collection of aliases that allow you to interact with the `rustup` and `cargo` commands. They are designed to be used with the `rustup` toolchain manager and the `cargo` package manager.
  - name: twitter:title
    content: The Rust aliases - Dotfiles (UK)
  - name: og:title
    content: The Rust aliases - Dotfiles (UK)
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

| Alias | Command                      | Description                 |
| ----- | ---------------------------- | --------------------------- |
| ru    | `rustup update`              | Rustup update.              |
| rca   | `rustup component add`       | Rustup component add.       |
| rcl   | `rustup component list`      | Rustup component list.      |
| rcr   | `rustup component remove`    | Rustup component remove.    |
| rde   | `rustup default`             | Rustup default.             |
| rnn   | `rustup run nightly`         | Run rustup nightly.         |
| rns   | `rustup run stable`          | Run rustup stable.          |
| rtaa  | `rustup target add`          | Rustup target add.          |
| rtal  | `rustup target list`         | Rustup target list.         |
| rtar  | `rustup target remove`       | Rustup target remove.       |
| rti   | `rustup toolchain install`   | Rustup toolchain install.   |
| rtl   | `rustup toolchain list`      | Rustup toolchain list.      |
| rtu   | `rustup toolchain uninstall` | Rustup toolchain uninstall. |
| ruc   | `rustup update nightly`      | Update rustup nightly.      |
| rus   | `rustup update stable`       | Update rustup stable.       |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) is the Rust package manager. It is
used to build, test, and package Rust projects. Cargo is included with Rustup.

| Alias  | Command              | Description          |
| ------ | -------------------- | -------------------- |
| cg     | `cargo`              | Cargo shortcut.      |
| cgb    | `cg build`           | Cargo build.         |
| cgbh   | `cg bench`           | Cargo bench.         |
| cgbr   | `cg build --release` | Cargo build release. |
| cgc    | `cg check`           | Cargo check.         |
| cgcl   | `cg clean`           | Cargo clean.         |
| cgcy   | `cg clippy`          | Cargo clippy.        |
| cgd    | `cg doc --open`      | Cargo doc.           |
| cgdr   | `cg doc --release`   | Cargo doc release.   |
| cgf    | `cg fmt`             | Cargo format.        |
| cgi    | `cg install`         | Cargo install.       |
| cginit | `cg init`            | Cargo init.          |
| cgn    | `cg new`             | Cargo new.           |
| cgp    | `cg publish`         | Cargo publish.       |
| cgr    | `cg run`             | Cargo run.           |
| cgrr   | `cg run --release`   | Cargo run release.   |
| cgs    | `cg search`          | Cargo search.        |
| cgt    | `cg test`            | Cargo test.          |
| cgtr   | `cg test --release`  | Cargo test release.  |
| cgtt   | `cg tree`            | Cargo tree.          |
| cgu    | `cg update`          | Cargo update.        |
| cgun   | `cg uninstall`       | Cargo uninstall.     |
