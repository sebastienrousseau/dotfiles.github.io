---
description: Rust 别名用于 `rustup` 和 `cargo`。适用于 `rustup` 工具链管理器与 `cargo` 包管理器。
lang: zh-CN
metaTitle: Rust 别名 - Dotfiles (ZH)
permalink: /zh/aliases/rust/

meta:
  - name: keywords
    content: aliases, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Rust 别名用于 `rustup` 和 `cargo`。适用于 `rustup` 工具链管理器与 `cargo` 包管理器。
  - name: twitter:description
    content: Rust 别名用于 `rustup` 和 `cargo`。适用于 `rustup` 工具链管理器与 `cargo` 包管理器。
  - name: twitter:title
    content: Rust 别名 - Dotfiles (ZH)
  - name: og:title
    content: Rust 别名 - Dotfiles (ZH)
  - name: og:description
    content: Rust 别名用于 `rustup` 和 `cargo`。适用于 `rustup` 工具链管理器与 `cargo` 包管理器。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Rust 别名

管理 Rust 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `rust.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

该代码提供一整套 Rust 开发别名，覆盖 `cargo` 与 `rustup`。
#### 基础命令
- `cg` - Cargo 快捷方式
- `cgn` - 新建二进制项目
- `cgni` - 新建库项目
- `cginit` - 在当前目录初始化项目
#### 构建与运行
- `cgb` - Debug 构建
- `cgbr` - Release 构建
- `cgr` - 运行 Debug
- `cgrr` - 运行 Release
- `cgw` - 监视并重建
#### 测试与基准
- `cgt` - 运行测试
- `cgtr` - 运行 Release 测试
- `cgbh` - 运行基准测试
- `cgta` - 测试所有 targets
- `cgtt` - 单线程测试
#### 代码质量
- `cgc` - 检查编译
- `cgcl` - 清理构建产物
- `cgcy` - 运行 clippy
- `cgf` - 格式化代码
- `cgfa` - 格式化全部代码
- `cgfx` - 自动修复问题
- `cgaud` - 安全漏洞检查
#### 文档
- `cgd` - 构建并打开文档
- `cgdr` - 构建 release 文档
- `cgdo` - 文档化私有条目
#### 依赖
- `cga` - 添加依赖
- `cgad` - 添加开发依赖
- `cgu` - 更新依赖
- `cgo` - 检查过期依赖
- `cgv` - vendor 依赖
- `cgtree` - 显示依赖树
#### 交叉编译
- `cgx` - 使用 Zig 构建
- `cgxw` - 交叉编译
- `cgxt` - 指定平台 target
#### 分析与剖析
- `cgfl` - 生成 flamegraph
- `cgbl` - 二进制大小分析
- `cgl` - 代码覆盖率
- `cgm` - 模块结构
- `cgex` - 展开宏
#### 包管理
- `cgi` - 安装二进制
- `cgun` - 卸载二进制
- `cgp` - 发布到 crates.io
- `cgs` - 搜索 crates.io
- `cgcp` - 创建 release 包
#### 高级构建
- `cgba` - 构建所有 targets
- `cgbt` - 构建所有 features
- `cgbp` - 指定 profile 构建
#### 项目模板
- `cgnb` - 从模板创建二进制
- `cgnl` - 从模板创建库
- `cgnt` - 从自定义模板创建
#### 更新与安装
- `ru` - 更新所有 toolchains
- `rus` - 更新 stable toolchain
- `run` - 更新 nightly toolchain
- `rti` - 安装指定 toolchain
#### 组件管理
- `rca` - 添加组件
- `rcl` - 列出组件
- `rcr` - 移除组件
#### Toolchain 管理
- `rtl` - 列出已安装 toolchains
- `rtu` - 卸载 toolchain
- `rde` - 设置默认 toolchain
#### Target 管理
- `rtaa` - 添加编译 target
- `rtal` - 列出可用 targets
- `rtar` - 移除编译 target
#### 环境运行
- `rns` - 使用 stable 运行命令
- `rnn` - 使用 nightly 运行命令
#### 文档与帮助
- `rdo` - 打开 Rust 文档
#### Override 管理
- `rpr` - 设置目录 toolchain
- `rpl` - 列出目录 overrides
- `rpn` - 移除目录 override
#### Toolchain 信息
- `rws` - 显示活动 rustc 路径
- `rsh` - 显示 toolchain 信息
### 常见流程
#### 新项目
```bash
# 创建新项目并添加常用依赖
cgn myproject && cd myproject && cga serde && cgad tokio
```
#### Release 流程
```bash
# 检查、测试并构建 release
cgcy && cgt && cgbr && cgaud
```
#### 文档更新
```bash
# 格式化代码并更新文档
cgfa && cgd && cgdo
```
#### 交叉编译检查
```bash
# 为不同架构检查构建
cgxw check --target aarch64-unknown-linux-gnu
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
