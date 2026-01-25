---
description: Rust development aliases for Cargo and Rustup. Shortcuts for building, testing, and managing Rust projects.
lang: en-GB
metaTitle: Rust Aliases - Dotfiles (UK)
permalink: /aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, shell aliases, dotfiles, rust development
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Rust development aliases for Cargo and Rustup. Shortcuts for building, testing, and managing Rust projects.
  - name: twitter:title
    content: Rust Aliases - Dotfiles
  - name: og:title
    content: Rust Aliases - Dotfiles
  - name: og:description
    content: Rust development aliases for Cargo and Rustup. Shortcuts for building, testing, and managing Rust projects.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Rust Aliases

Shortcuts for Rust development using Cargo and Rustup.

## Overview

These aliases are defined in `rust.aliases.sh` and loaded automatically by Chezmoi.

## Reference

### Basic Commands

| Alias | Description |
|:---|:---|
| `cg` | Cargo shortcut |
| `cgn` | Create new binary project |
| `cgni` | Create new library project |
| `cginit` | Initialise project in current directory |

### Build and Run

| Alias | Description |
|:---|:---|
| `cgb` | Build debug |
| `cgbr` | Build release |
| `cgr` | Run debug |
| `cgrr` | Run release |
| `cgw` | Watch and rebuild |

### Testing and Benchmarking

| Alias | Description |
|:---|:---|
| `cgt` | Run tests |
| `cgtr` | Run tests in release mode |
| `cgbh` | Run benchmarks |
| `cgta` | Test all targets |
| `cgtt` | Single threaded tests |

### Code Quality

| Alias | Description |
|:---|:---|
| `cgc` | Check compilation |
| `cgcl` | Clean build artifacts |
| `cgcy` | Run clippy lints |
| `cgf` | Format code |
| `cgfa` | Format all code |
| `cgfx` | Auto-fix code issues |
| `cgaud` | Security vulnerabilities check |

### Documentation

| Alias | Description |
|:---|:---|
| `cgd` | Build and open documentation |
| `cgdr` | Build release documentation |
| `cgdo` | Document private items |

### Dependencies

| Alias | Description |
|:---|:---|
| `cga` | Add dependency |
| `cgad` | Add dev dependency |
| `cgu` | Update dependencies |
| `cgo` | Check outdated dependencies |
| `cgv` | Vendor dependencies |
| `cgtree` | Display dependency tree |

### Cross Compilation

| Alias | Description |
|:---|:---|
| `cgx` | Build using Zig |
| `cgxw` | Cross compilation |
| `cgxt` | Target specific platform |

### Analysis and Profiling

| Alias | Description |
|:---|:---|
| `cgfl` | Generate flamegraph |
| `cgbl` | Binary size analysis |
| `cgl` | Code coverage |
| `cgm` | Module structure |
| `cgex` | Expand macros |

### Package Management

| Alias | Description |
|:---|:---|
| `cgi` | Install binary |
| `cgun` | Uninstall binary |
| `cgp` | Publish to crates.io |
| `cgs` | Search crates.io |
| `cgcp` | Create release package |

### Advanced Build

| Alias | Description |
|:---|:---|
| `cgba` | Build all targets |
| `cgbt` | Build with all features |
| `cgbp` | Build with specific profile |

### Project Templates

| Alias | Description |
|:---|:---|
| `cgnb` | New binary from template |
| `cgnl` | New library from template |
| `cgnt` | New from custom template |

### Rustup Updates

| Alias | Description |
|:---|:---|
| `ru` | Update all toolchains |
| `rus` | Update stable toolchain |
| `run` | Update nightly toolchain |
| `rti` | Install specific toolchain |

### Components Management

| Alias | Description |
|:---|:---|
| `rca` | Add component |
| `rcl` | List components |
| `rcr` | Remove component |

### Toolchain Management

| Alias | Description |
|:---|:---|
| `rtl` | List installed toolchains |
| `rtu` | Uninstall toolchain |
| `rde` | Set default toolchain |

### Target Management

| Alias | Description |
|:---|:---|
| `rtaa` | Add compilation target |
| `rtal` | List available targets |
| `rtar` | Remove compilation target |

### Environment Running

| Alias | Description |
|:---|:---|
| `rns` | Run command with stable |
| `rnn` | Run command with nightly |

### Documentation and Help

| Alias | Description |
|:---|:---|
| `rdo` | Open Rust documentation |

### Override Management

| Alias | Description |
|:---|:---|
| `rpr` | Set directory toolchain |
| `rpl` | List directory overrides |
| `rpn` | Remove directory override |

### Toolchain Information

| Alias | Description |
|:---|:---|
| `rws` | Show active rustc path |
| `rsh` | Show toolchain info |

