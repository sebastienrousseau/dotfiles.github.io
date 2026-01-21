---
description: Os aliases do Rust são uma coleção de aliases que permitem interagir com os comandos `rustup` e `cargo`. Eles são projetados para serem usados com o gerenciador de toolchain `rustup` e o gerenciador de pacotes `cargo`.
lang: pt-BR
metaTitle: Aliases do Rust - Dotfiles (BR)
permalink: /pt/aliases/rust/
---

# Aliases do Rust

O arquivo `rust.aliases.sh` cria aliases de atalho úteis para
[Rust](https://www.rust-lang.org/pt-BR).

Os aliases do Rust são uma coleção de aliases que permitem interagir com
os comandos `rustup` e `cargo`. Eles são projetados para serem usados com o gerenciador de toolchain `rustup`
e o gerenciador de pacotes `cargo`.

## Rust

[Rust](https://www.rust-lang.org/pt-BR) é uma linguagem de programação focada em
desempenho e segurança, especialmente concorrência segura. Rust é sintaticamente
semelhante a C++, mas é projetado para fornecer melhor segurança de memória enquanto
mantém alto desempenho.

| Alias | Comando                      | Descrição                   |
| ----- | ---------------------------- | --------------------------- |
| ru    | `rustup update`              | Atualização do Rustup.      |
| rca   | `rustup component add`       | Adicionar componente Rustup.|
| rcl   | `rustup component list`      | Listar componentes Rustup.  |
| rcr   | `rustup component remove`    | Remover componente Rustup.  |
| rde   | `rustup default`             | Padrão do Rustup.           |
| rnn   | `rustup run nightly`         | Executar rustup nightly.    |
| rns   | `rustup run stable`          | Executar rustup stable.     |
| rtaa  | `rustup target add`          | Adicionar alvo Rustup.      |
| rtal  | `rustup target list`         | Listar alvos Rustup.        |
| rtar  | `rustup target remove`       | Remover alvo Rustup.        |
| rti   | `rustup toolchain install`   | Instalar toolchain Rustup.  |
| rtl   | `rustup toolchain list`      | Listar toolchains Rustup.   |
| rtu   | `rustup toolchain uninstall` | Desinstalar toolchain Rustup.|
| ruc   | `rustup update nightly`      | Atualizar rustup nightly.   |
| rus   | `rustup update stable`       | Atualizar rustup stable.    |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) é o gerenciador de pacotes do Rust. Ele
é usado para construir, testar e empacotar projetos Rust. O Cargo está incluído no Rustup.

| Alias  | Comando              | Descrição            |
| ------ | -------------------- | -------------------- |
| cg     | `cargo`              | Atalho do Cargo.     |
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
