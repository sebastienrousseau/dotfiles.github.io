---
description: Make 别名是一组别名，允许您与 `make` 命令行工具有更方便的交互。Make 是一个从程序的源文件控制生成可执行文件和其他非源文件的工具。
lang: zh-CN
metaTitle: Make 别名 - Dotfiles (CN)
permalink: /zh/aliases/make/
---

# Make 别名

`make.aliases.sh` 文件为运行 `make` 命令创建了有用的快捷别名。

## Make

[Make](<https://zh.wikipedia.org/wiki/Make>) 是一个从程序的源文件控制生成可执行文件和其他非源文件的工具。

Make 从一个名为 `Makefile` 的文件中获取如何构建程序的知识，该文件列出了每个非源文件以及如何从其他文件计算它。

| 别名  | 命令           | 描述                       |
| ----- | -------------- | -------------------------- |
| mk    | `make`         | 运行不带参数的 `make`。    |
| mkc   | `make clean`   | 运行 `make clean`。        |
| mkd   | `make doc`     | 运行 `make doc`。          |
| mkf   | `make format`  | 运行 `make format`。       |
| mkh   | `make help`    | 运行 `make help`。         |
| mki   | `make install` | 运行 `make install`。      |
| mkr   | `make run`     | 运行 `make run`。          |
| mkt   | `make test`    | 运行 `make test`。         |
