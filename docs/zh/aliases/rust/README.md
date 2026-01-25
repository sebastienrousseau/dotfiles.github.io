---
description: 用于 Cargo 和 Rustup 的 Rust 开发别名。构建、测试和管理 Rust 项目的快捷方式。
lang: zh-CN
metaTitle: Rust 别名 - Dotfiles (CN)
permalink: /aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, shell 别名, dotfiles, rust 开发
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 用于 Cargo 和 Rustup 的 Rust 开发别名。构建、测试和管理 Rust 项目的快捷方式。
  - name: twitter:title
    content: Rust 别名 - Dotfiles
  - name: og:title
    content: Rust 别名 - Dotfiles
  - name: og:description
    content: 用于 Cargo 和 Rustup 的 Rust 开发别名。构建、测试和管理 Rust 项目的快捷方式。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Rust 别名

使用 Cargo 和 Rustup 进行 Rust 开发的快捷方式。

## 概述

这些别名定义在 `rust.aliases.sh` 中，由 Chezmoi 自动加载。

## 参考

### 基本命令

| 别名 | 描述 |
|:---|:---|
| `cg` | Cargo 快捷方式 |
| `cgn` | 创建新的二进制项目 |
| `cgni` | 创建新的库项目 |
| `cginit` | 在当前目录初始化项目 |

### 构建和运行

| 别名 | 描述 |
|:---|:---|
| `cgb` | 构建调试版本 |
| `cgbr` | 构建发布版本 |
| `cgr` | 运行调试版本 |
| `cgrr` | 运行发布版本 |
| `cgw` | 监视并重新构建 |

### 测试和基准测试

| 别名 | 描述 |
|:---|:---|
| `cgt` | 运行测试 |
| `cgtr` | 在发布模式下运行测试 |
| `cgbh` | 运行基准测试 |
| `cgta` | 测试所有目标 |
| `cgtt` | 单线程测试 |

### 代码质量

| 别名 | 描述 |
|:---|:---|
| `cgc` | 检查编译 |
| `cgcl` | 清理构建产物 |
| `cgcy` | 运行 clippy lint 检查 |
| `cgf` | 格式化代码 |
| `cgfa` | 格式化所有代码 |
| `cgfx` | 自动修复代码问题 |
| `cgaud` | 安全漏洞检查 |

### 文档

| 别名 | 描述 |
|:---|:---|
| `cgd` | 构建并打开文档 |
| `cgdr` | 构建发布文档 |
| `cgdo` | 文档私有项 |

### 依赖

| 别名 | 描述 |
|:---|:---|
| `cga` | 添加依赖项 |
| `cgad` | 添加开发依赖项 |
| `cgu` | 更新依赖项 |
| `cgo` | 检查过时的依赖项 |
| `cgv` | 供应商依赖项 |
| `cgtree` | 显示依赖树 |

### 交叉编译

| 别名 | 描述 |
|:---|:---|
| `cgx` | 使用 Zig 构建 |
| `cgxw` | 交叉编译 |
| `cgxt` | 针对特定平台 |

### 分析和性能分析

| 别名 | 描述 |
|:---|:---|
| `cgfl` | 生成火焰图 |
| `cgbl` | 二进制大小分析 |
| `cgl` | 代码覆盖率 |
| `cgm` | 模块结构 |
| `cgex` | 展开宏 |

### 包管理

| 别名 | 描述 |
|:---|:---|
| `cgi` | 安装二进制文件 |
| `cgun` | 卸载二进制文件 |
| `cgp` | 发布到 crates.io |
| `cgs` | 搜索 crates.io |
| `cgcp` | 创建发布包 |

### 高级构建

| 别名 | 描述 |
|:---|:---|
| `cgba` | 构建所有目标 |
| `cgbt` | 构建所有功能 |
| `cgbp` | 使用特定配置文件构建 |

### 项目模板

| 别名 | 描述 |
|:---|:---|
| `cgnb` | 从模板新建二进制文件 |
| `cgnl` | 从模板新建库 |
| `cgnt` | 从自定义模板新建 |

### Rustup 更新

| 别名 | 描述 |
|:---|:---|
| `ru` | 更新所有工具链 |
| `rus` | 更新稳定工具链 |
| `run` | 更新 nightly 工具链 |
| `rti` | 安装特定工具链 |

### 组件管理

| 别名 | 描述 |
|:---|:---|
| `rca` | 添加组件 |
| `rcl` | 列出组件 |
| `rcr` | 移除组件 |

### 工具链管理

| 别名 | 描述 |
|:---|:---|
| `rtl` | 列出已安装的工具链 |
| `rtu` | 卸载工具链 |
| `rde` | 设置默认工具链 |

### 目标管理

| 别名 | 描述 |
|:---|:---|
| `rtaa` | 添加编译目标 |
| `rtal` | 列出可用目标 |
| `rtar` | 移除编译目标 |

### 环境运行

| 别名 | 描述 |
|:---|:---|
| `rns` | 使用 stable 运行命令 |
| `rnn` | 使用 nightly 运行命令 |

### 文档和帮助

| 别名 | 描述 |
|:---|:---|
| `rdo` | 打开 Rust 文档 |

### 覆盖管理

| 别名 | 描述 |
|:---|:---|
| `rpr` | 设置目录工具链 |
| `rpl` | 列出目录覆盖 |
| `rpn` | 移除目录覆盖 |

### 工具链信息

| 别名 | 描述 |
|:---|:---|
| `rws` | 显示活动的 rustc 路径 |
| `rsh` | 显示工具链信息 |
