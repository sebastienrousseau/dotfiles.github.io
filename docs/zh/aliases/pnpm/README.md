---
description: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
lang: zh-CN
metaTitle: The PNpm aliases - Dotfiles (CN)
permalink: /zh/aliases/pnpm/

meta:
  - name: keywords
    content: aliases, pnpm, package manager, node, npm, yarn, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
  - name: twitter:description
    content: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
  - name: twitter:title
    content: The PNpm aliases - Dotfiles (CN)
  - name: og:title
    content: The PNpm aliases - Dotfiles (CN)
  - name: og:description
    content: The PNpm aliases are a collection of aliases that allow you to interact with the `pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# PNpm aliases

This `pnpm.aliases.sh` file creates helpful shortcut aliases for many
commonly used [PNpm](https://pnpm.io) commands.

The PNpm aliases are a collection of aliases that allow you to interact with the
`pnpm` command line tool. Pnpm is a fast, disk space efficient package manager.

## PNpm

[PNpm](https://pnpm.io) is a package manager for JavaScript and Node.js. It
is fast, disk space efficient, and reliable.

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------------------------------ | -------------------------------------------------------- |
| pna   | `pnpm add`                           | 添加 a package to the project                             |
| pnad  | `pnpm add --save-dev`                | 添加 a package to the project as a development dependency |
| pnap  | `pnpm add --save-peer`               | 添加 a package to the project as a peer dependency        |
| pnau  | `pnpm audit`                         | Audit the project for vulnerabilities                    |
| pnb   | `pnpm run build`                     | 构建 the project                                        |
| pnc   | `pnpm create`                        | 创建 a new project                                     |
| pnd   | `pnpm run dev`                       | Run the project in development mode                      |
| pndoc | `pnpm run doc`                       | Generate documentation for the project                   |
| pnga  | `pnpm add --global`                  | 添加 a package to the global store                        |
| pngls | `pnpm list --global`                 | 列出 packages in the global store                        |
| pngrm | `pnpm remove --global`               | 移除 a package from the global store                   |
| pngu  | `pnpm update --global`               | 更新 a package in the global store                     |
| pnh   | `pnpm help`                          | 显示 help for a command                                  |
| pni   | `pnpm init`                          | 初始化 a new project                                 |
| pnin  | `pnpm install`                       | 安装 the project's dependencies                       |
| pnln  | `pnpm run lint`                      | Runs `pnpm run lint`                                     |
| pnls  | `pnpm list`                          | 列出 packages in the project                             |
| pnout | `pnpm outdated`                      | 检查 for outdated packages                              |
| pnp   | `pnpm`                               | Run a PNpm command                                       |
| pnpub | `pnpm publish`                       | Publish the project                                      |
| pnrm  | `pnpm remove`                        | 移除 a package from the project                        |
| pnrun | `pnpm run`                           | Run a script in the project                              |
| pns   | `pnpm run serve`                     | Run the project in production mode                       |
| pnst  | `pnpm start`                         | 开始 the project                                        |
| pnsv  | `pnpm server`                        | 开始 the project's development server                   |
| pnt   | `pnpm test`                          | Run the project's tests                                  |
| pntc  | `pnpm test --coverage`               | Run the project's tests with coverage                    |
| pnui  | `pnpm update --interactive`          | 更新 packages interactively                            |
| pnuil | `pnpm update --interactive --latest` | 更新 packages interactively to the latest version      |
| pnun  | `pnpm uninstall`                     | 移除 a package from the project                        |
| pnup  | `pnpm update`                        | 更新 packages in the project                           |
| pnwhy | `pnpm why`                           | 显示 why a package is installed                          |
| pnx   | `pnpx`                               | Run a PNpx command                                       |
