---
description: Rust 别名是一组别名，允许您与 `rustup` 和 `cargo` 命令交互。它们旨在与 `rustup` 工具链管理器和 `cargo` 包管理器一起使用。
lang: zh-CN
metaTitle: Rust 别名 - Dotfiles (CN)
permalink: /zh/aliases/rust/
---

# Rust 别名

`rust.aliases.sh` 文件为 [Rust](https://www.rust-lang.org/) 创建了有用的快捷别名。

Rust 别名是一组别名，允许您与 `rustup` 和 `cargo` 命令交互。它们旨在与 `rustup` 工具链管理器和 `cargo` 包管理器一起使用。

## Rust

[Rust](https://www.rust-lang.org/zh-CN/) 是一种专注于性能和安全性的编程语言，特别是安全并发。Rust 在语法上类似于 C++，但旨在提供更好的内存安全性，同时保持高性能。

| 别名 | 命令                         | 描述                  |
| ---- | ---------------------------- | --------------------- |
| ru   | `rustup update`              | Rustup 更新。         |
| rca  | `rustup component add`       | Rustup 添加组件。     |
| rcl  | `rustup component list`      | Rustup 列出组件。     |
| rcr  | `rustup component remove`    | Rustup 删除组件。     |
| rde  | `rustup default`             | Rustup 默认。         |
| rnn  | `rustup run nightly`         | 运行 rustup nightly。 |
| rns  | `rustup run stable`          | 运行 rustup stable。  |
| rtaa | `rustup target add`          | Rustup 添加目标。     |
| rtal | `rustup target list`         | Rustup 列出目标。     |
| rtar | `rustup target remove`       | Rustup 删除目标。     |
| rti  | `rustup toolchain install`   | Rustup 安装工具链。   |
| rtl  | `rustup toolchain list`      | Rustup 列出工具链。   |
| rtu  | `rustup toolchain uninstall` | Rustup 卸载工具链。   |
| ruc  | `rustup update nightly`      | 更新 rustup nightly。 |
| rus  | `rustup update stable`       | 更新 rustup stable。  |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) 是 Rust 包管理器。它用于构建、测试和打包 Rust 项目。Cargo 包含在 Rustup 中。

| 别名   | 命令                 | 描述             |
| ------ | -------------------- | ---------------- |
| cg     | `cargo`              | Cargo 快捷方式。 |
| cgb    | `cg build`           | Cargo 构建。     |
| cgbh   | `cg bench`           | Cargo 基准测试。 |
| cgbr   | `cg build --release` | Cargo 发布构建。 |
| cgc    | `cg check`           | Cargo 检查。     |
| cgcl   | `cg clean`           | Cargo 清理。     |
| cgcy   | `cg clippy`          | Cargo clippy。   |
| cgd    | `cg doc --open`      | Cargo 文档。     |
| cgdr   | `cg doc --release`   | Cargo 发布文档。 |
| cgf    | `cg fmt`             | Cargo 格式化。   |
| cgi    | `cg install`         | Cargo 安装。     |
| cginit | `cg init`            | Cargo 初始化。   |
| cgn    | `cg new`             | Cargo 新建。     |
| cgp    | `cg publish`         | Cargo 发布。     |
| cgr    | `cg run`             | Cargo 运行。     |
| cgrr   | `cg run --release`   | Cargo 发布运行。 |
| cgs    | `cg search`          | Cargo 搜索。     |
| cgt    | `cg test`            | Cargo 测试。     |
| cgtr   | `cg test --release`  | Cargo 发布测试。 |
| cgtt   | `cg tree`            | Cargo 树。       |
| cgu    | `cg update`          | Cargo 更新。     |
| cgun   | `cg uninstall`       | Cargo 卸载。     |
