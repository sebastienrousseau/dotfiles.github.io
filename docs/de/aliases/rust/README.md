---
description: Die Rust-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit den Befehlen `rustup` und `cargo` zu interagieren.
lang: de-DE
metaTitle: Rust Aliase - Dotfiles (DE)
permalink: /de/aliases/rust/
---

# Rust Aliase

Die Datei `rust.aliases.sh` erstellt hilfreiche Shortcut-Aliase für
[Rust](https://www.rust-lang.org/de).

Die Rust-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit den
Befehlen `rustup` und `cargo` zu interagieren. Sie sind für die Verwendung mit dem `rustup`
Toolchain-Manager und dem `cargo` Paketmanager konzipiert.

## Rust

[Rust](https://www.rust-lang.org/de) ist eine Programmiersprache, die auf
Leistung und Sicherheit fokussiert ist, insbesondere sichere Nebenläufigkeit. Rust ist syntaktisch
ähnlich wie C++, wurde aber entwickelt, um eine bessere Speichersicherheit zu bieten und gleichzeitig
eine hohe Leistung beizubehalten.

| Alias | Befehl                       | Beschreibung                     |
| ----- | ---------------------------- | -------------------------------- |
| ru    | `rustup update`              | Rustup update.                   |
| rca   | `rustup component add`       | Rustup Komponente hinzufügen.    |
| rcl   | `rustup component list`      | Rustup Komponenten auflisten.    |
| rcr   | `rustup component remove`    | Rustup Komponente entfernen.     |
| rde   | `rustup default`             | Rustup Standard.                 |
| rnn   | `rustup run nightly`         | Führe rustup nightly aus.        |
| rns   | `rustup run stable`          | Führe rustup stable aus.         |
| rtaa  | `rustup target add`          | Rustup Target hinzufügen.        |
| rtal  | `rustup target list`         | Rustup Targets auflisten.        |
| rtar  | `rustup target remove`       | Rustup Target entfernen.         |
| rti   | `rustup toolchain install`   | Rustup Toolchain installieren.   |
| rtl   | `rustup toolchain list`      | Rustup Toolchains auflisten.     |
| rtu   | `rustup toolchain uninstall` | Rustup Toolchain deinstallieren. |
| ruc   | `rustup update nightly`      | Aktualisiere rustup nightly.     |
| rus   | `rustup update stable`       | Aktualisiere rustup stable.      |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) ist der Rust Paketmanager. Er wird
verwendet, um Rust-Projekte zu bauen, zu testen und zu verpacken. Cargo ist in Rustup enthalten.

| Alias  | Befehl               | Beschreibung         |
| ------ | -------------------- | -------------------- |
| cg     | `cargo`              | Cargo Kurzbefehl.    |
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
