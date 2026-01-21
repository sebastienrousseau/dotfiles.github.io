---
description: PNpm 别名是一组别名，允许您与 `pnpm` 命令行工具交互。Pnpm 是一个快速，磁盘空间利用率高的包管理器。
lang: zh-CN
metaTitle: PNpm 别名 - Dotfiles (CN)
permalink: /zh/aliases/pnpm/
---

# PNpm 别名

`pnpm.aliases.sh` 文件为许多常用的 [PNpm](https://pnpm.io) 命令创建了有用的快捷别名。

PNpm 别名是一组别名，允许您与 `pnpm` 命令行工具交互。Pnpm 是一个快速，磁盘空间利用率高的包管理器。

## PNpm

[PNpm](https://pnpm.io) 是一个 JavaScript 和 Node.js 的包管理器。它快速、磁盘空间利用率高且可靠。

| 别名  | 命令                                 | 描述                                     |
| ----- | ------------------------------------ | ---------------------------------------- |
| pna   | `pnpm add`                           | 将包添加到项目                           |
| pnad  | `pnpm add --save-dev`                | 将包作为开发依赖项添加到项目             |
| pnap  | `pnpm add --save-peer`               | 将包作为对等依赖项添加到项目             |
| pnau  | `pnpm audit`                         | 审核项目的漏洞                           |
| pnb   | `pnpm run build`                     | 构建项目                                 |
| pnc   | `pnpm create`                        | 创建一个新项目                           |
| pnd   | `pnpm run dev`                       | 在开发模式下运行项目                     |
| pndoc | `pnpm run doc`                       | 为项目生成文档                           |
| pnga  | `pnpm add --global`                  | 将包添加到全局存储                       |
| pngls | `pnpm list --global`                 | 列出全局存储中的包                       |
| pngrm | `pnpm remove --global`               | 从全局存储中删除包                       |
| pngu  | `pnpm update --global`               | 更新全局存储中的包                       |
| pnh   | `pnpm help`                          | 显示命令的帮助                           |
| pni   | `pnpm init`                          | 初始化一个新项目                         |
| pnin  | `pnpm install`                       | 安装项目的依赖项                         |
| pnln  | `pnpm run lint`                      | 运行 `pnpm run lint`                     |
| pnls  | `pnpm list`                          | 列出项目中的包                           |
| pnout | `pnpm outdated`                      | 检查过时的包                             |
| pnp   | `pnpm`                               | 运行 PNpm 命令                           |
| pnpub | `pnpm publish`                       | 发布项目                                 |
| pnrm  | `pnpm remove`                        | 从项目中删除包                           |
| pnrun | `pnpm run`                           | 在项目中运行脚本                         |
| pns   | `pnpm run serve`                     | 在生产模式下运行项目                     |
| pnst  | `pnpm start`                         | 启动项目                                 |
| pnsv  | `pnpm server`                        | 启动项目的开发服务器                     |
| pnt   | `pnpm test`                          | 运行项目的测试                           |
| pntc  | `pnpm test --coverage`               | 运行带覆盖率的项目测试                   |
| pnui  | `pnpm update --interactive`          | 交互式更新包                             |
| pnuil | `pnpm update --interactive --latest` | 交互式更新包到最新版本                   |
| pnun  | `pnpm uninstall`                     | 从项目中卸载包                           |
| pnup  | `pnpm update`                        | 更新项目中的包                           |
| pnwhy | `pnpm why`                           | 显示为什么安装了包                       |
| pnx   | `pnpx`                               | 运行 PNpx 命令                           |
