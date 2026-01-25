---
description: Alias shell untuk editor teks. Mendukung Neovim, VS Code, Vim, Nano, Emacs, dan lainnya.
lang: id-ID
metaTitle: Alias Editor - Dotfiles (ID)
permalink: /id/alias/editor/
sidebar: true

meta:
  - name: keywords
    content: editor, vim, neovim, vscode, nano, emacs, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell untuk editor teks. Mendukung Neovim, VS Code, Vim, Nano, Emacs, dan lainnya.
  - name: twitter:title
    content: Alias Editor - Dotfiles
  - name: og:title
    content: Alias Editor - Dotfiles
  - name: og:description
    content: Alias shell untuk editor teks. Mendukung Neovim, VS Code, Vim, Nano, Emacs, dan lainnya.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Editor

Pintasan untuk mengedit file dengan editor yang dikonfigurasi di lingkungan.

## Ikhtisar

Alias ini didefinisikan di `editor.aliases.sh` dan dimuat secara otomatis oleh Chezmoi. Bekerja bersama dengan editor yang terdeteksi otomatis di `editor.sh`.

## Referensi

### Alias Universal

| Alias | Deskripsi |
|:---|:---|
| `e` | Perintah edit cepat |
| `edit` | Perintah edit standar |
| `editor` | Perintah editor lengkap |
| `v` | Alias edit gaya Vim |
| `n` | Alias edit singkat |

### VS Code

| Alias | Deskripsi |
|:---|:---|
| `vsc` | Singkatan VS Code |
| `vsca` | Tambah folder ke jendela saat ini |
| `vscd` | Bandingkan dua file |
| `vscn` | Buka jendela baru |
| `vscr` | Gunakan ulang jendela |

### Neovim

| Alias | Deskripsi |
|:---|:---|
| `vi`, `vim` | Redirect ke Neovim |
| `nvimrc` | Edit konfigurasi Vimscript Neovim |
| `nvimlua` | Edit konfigurasi Lua Neovim |

### Edit Konfigurasi Cepat

Fungsi `editrc` untuk mengedit file konfigurasi umum dengan cepat:

```bash
editrc bash     # Edit ~/.bashrc
editrc zsh      # Edit ~/.zshrc
editrc vim      # Edit ~/.vimrc
editrc git      # Edit ~/.gitconfig
```
