---
description: How Dotfiles manages your \$PATH hierarchy to ensure the right tools are loaded in the right order.
lang: en-GB
metaTitle: Paths - Dotfiles (UK)
permalink: /paths/

meta:
  - name: keywords
    content: path, environment, variables, hierarchy, dotfiles, chezmoi
---

# Path Management

One of the most critical roles of Dotfiles is managing your `$PATH` environment variable. This determines which version of a tool is executed when you type a command.

We adhere to a strict hierarchy to ensure consistency across macOS and Linux.

## The Hierarchy

From highest priority (checked first) to lowest:

1.  **Local Binaries** (`~/.local/bin`)
    *   **Priority**: 1
    *   **Purpose**: Custom user scripts, `dot` CLI, and tools installed via `pipx` or other user-level package managers.
    *   **Reason**: Allows you to override system or Homebrew tools with your own versions.

2.  **Application Binaries** (macOS)
    *   **Priority**: 2
    *   **Purpose**: Binaries from installed applications (e.g., VS Code, iTerm).

3.  **Language Runtimes**
    *   **Node.js**: `~/.node_modules/bin`
    *   **Go**: `~/go/bin`
    *   **Rust (Cargo)**: `~/.cargo/bin`
    *   **Ruby (User Gems)**: `~/.gem/ruby/bin`
    *   **Python (Pipx)**: `~/.local/share/pipx`

4.  **Homebrew** (`/opt/homebrew/bin`)
    *   **Priority**: 3
    *   **Purpose**: Main package manager for macOS/Linux.
    *   **Note**: We purposely load Homebrew *before* system paths to allow upgrading system tools (like `git` or `curl`).

5.  **System Paths** (`/usr/bin`, `/bin`)
    *   **Priority**: Lowest
    *   **Purpose**: Default operating system tools.
    *   **Reason**: Fallback for fundamental utilities.

## Deduplication

Dotfiles automatically deduplicates your `$PATH` while preserving the order of precedence. This prevents the `$PATH` variable from growing indefinitely when spawning nested shells.
