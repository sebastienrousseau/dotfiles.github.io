---
title: Rust Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Rust in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Rust Reference Appendix | Dotfiles preview
canonical: /en/aliases/rust/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Rust Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/rust/reference/
---

# Rust Reference Appendix

## Source files

- `.chezmoitemplates/aliases/rust/rust.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `cg` | `'cargo'          # Cargo shortcut` |
| `cga` | `'cg add'        # Add dependency` |
| `cgad` | `'cg add --dev' # Add dev dependency` |
| `cgaud` | `'cg audit'    # Security vulnerabilities check` |
| `cgb` | `'cg build'            # Build debug` |
| `cgba` | `'cg build --all-targets'       # Build all targets` |
| `cgbh` | `'cg bench'                    # Run benchmarks` |
| `cgbl` | `'cg bloat'      # Binary size analysis` |
| `cgbp` | `'cg build --release --profile' # Build with specific profile` |
| `cgbr` | `'cg build --release' # Build release` |
| `cgbt` | `'cg build --all-features'      # Build with all features` |
| `cgc` | `'cg check'      # Check compilation` |
| `cgcl` | `'cg clean'     # Clean build artifacts` |
| `cgcp` | `'cg package'   # Create release package` |
| `cgcy` | `'cg clippy'    # Run clippy lints` |
| `cgd` | `'cg doc --open'                    # Build and open documentation` |
| `cgdo` | `'cg doc --document-private-items' # Document private items` |
| `cgdr` | `'cg doc --release'                # Build release documentation` |
| `cgex` | `'cg expand'     # Expand macros` |
| `cgf` | `'cg fmt'        # Format code` |
| `cgfa` | `'cg fmt --all' # Format all code` |
| `cgfl` | `'cg flamegraph' # Generate flamegraph` |
| `cgfx` | `'cg fix'       # Auto-fix code issues` |
| `cgi` | `'cg install'    # Install binary` |
| `cginit` | `'cg init'    # Initialize project in current directory` |
| `cgl` | `'cg llvm-cov'    # Code coverage` |
| `cgm` | `'cg modules'     # Module structure` |
| `cgn` | `'cg new'        # Create new binary project` |
| `cgnb` | `'cg generate --bin' # New binary from template` |
| `cgni` | `'cg new --lib' # Create new library project` |
| `cgnl` | `'cg generate --lib' # New library from template` |
| `cgnt` | `'cg generate'       # New from custom template` |
| `cgo` | `'cg outdated'   # Check outdated dependencies` |
| `cgp` | `'cg publish'    # Publish to crates.io` |
| `cgr` | `'cg run'              # Run debug` |
| `cgrr` | `'cg run --release'   # Run release` |
| `cgs` | `'cg search'     # Search crates.io` |
| `cgt` | `'cg test'                      # Run tests` |
| `cgta` | `'cg test --all'               # Test all targets` |
| `cgtr` | `'cg test --release'           # Run tests in release mode` |
| `cgtree` | `'cg tree'    # Display dependency tree` |
| `cgtt` | `'cg test -- --test-threads=1' # Single threaded tests` |
| `cgu` | `'cg update'     # Update dependencies` |
| `cgun` | `'cg uninstall' # Uninstall binary` |
| `cgv` | `'cg vendor'     # Vendor dependencies` |
| `cgw` | `'cg watch'            # Watch and rebuild` |
| `cgx` | `'cg zigbuild' # Build using Zig` |
| `cgxt` | `'cg target'  # Target specific platform` |
| `cgxw` | `'cg cross'   # Cross compilation` |
| `cnclip` | `'cargo +nightly clippy' # Nightly clippy` |
| `cnfmt` | `'cargo +nightly fmt' # Nightly format` |
| `cnt` | `'cargo nextest run'            # Faster nextest runner` |
| `cup` | `'cargo update'  # Update dependencies (short form)` |
| `cw` | `'cargo watch -x run'   # Live run loop` |
| `rca` | `'rustup component add'    # Add component` |
| `rcl` | `'rustup component list'   # List components` |
| `rcr` | `'rustup component remove' # Remove component` |
| `rde` | `'rustup default'             # Set default toolchain` |
| `rdo` | `'rustup doc --open' # Open Rust documentation` |
| `rnightly` | `'rustup update nightly' # Update nightly toolchain` |
| `rnn` | `'rustup run nightly' # Run command with nightly` |
| `rns` | `'rustup run stable'  # Run command with stable` |
| `rpl` | `'rustup override list' # List directory overrides` |
| `rpn` | `'rustup override none' # Remove directory override` |
| `rpr` | `'rustup override set'  # Set directory toolchain` |
| `rsh` | `'rustup show'        # Show toolchain info` |
| `rtaa` | `'rustup target add'    # Add compilation target` |
| `rtal` | `'rustup target list'   # List available targets` |
| `rtar` | `'rustup target remove' # Remove compilation target` |
| `rti` | `'rustup toolchain install'   # Install specific toolchain` |
| `rtl` | `'rustup toolchain list'      # List installed toolchains` |
| `rtu` | `'rustup toolchain uninstall' # Uninstall toolchain` |
| `ru` | `'rustup update'               # Update all toolchains` |
| `rus` | `'rustup update stable'       # Update stable toolchain` |
| `rws` | `'rustup which rustc' # Show active rustc path` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
