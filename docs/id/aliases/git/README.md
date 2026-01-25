---
title: "Alias Shell Git: Pintasan untuk Perintah Git Sehari-hari"
description: "Alias shell Git untuk Dotfiles. 80+ pintasan untuk mempercepat alur kerja commit, branch, diff, remote, dan submodule."
lang: id-ID
metaTitle: Alias Shell Git - Dotfiles (ID)
permalink: /alias/git/
sidebar: true

meta:
  - name: keywords
    content: git shell alias, git shortcut, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Alias shell Git untuk Dotfiles. 80+ pintasan untuk mempercepat alur kerja commit, branch, diff, remote, dan submodule."
  - name: twitter:title
    content: Alias Shell Git - Dotfiles (ID)
  - name: og:title
    content: Alias Shell Git - Dotfiles (ID)
  - name: og:description
    content: "Alias shell Git untuk Dotfiles. 80+ pintasan untuk mempercepat alur kerja commit, branch, diff, remote, dan submodule."
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Shell Git

Alias shell Git yang membuat pintasan untuk perintah Git yang sering digunakan. Bagian dari konfigurasi [Dotfiles](https://github.com/sebastienrousseau/dotfiles), dimuat secara otomatis oleh Chezmoi.

Alias ini didefinisikan di `git.aliases.sh` dan `signing.aliases.sh`, tersedia di sesi Bash atau Zsh manapun setelah instalasi.

## Inti

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `g` | `git` | Singkatan git |
| `gtp` | `git rev-parse --show-toplevel` | Tampilkan direktori top-level repositori |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Tampilkan nama branch saat ini |
| `gconfl` | `git config --list` | Daftar semua konfigurasi Git |
| `gconfr` | `git config --local --get remote.origin.url` | Tampilkan URL remote origin |

## Area Kerja

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `ga` | `git add` | Stage file |
| `gaa` | `git add --all` | Stage semua perubahan (tracked dan untracked) |
| `gad` | `git add .` | Stage semua di direktori saat ini |
| `gau` | `git add --update` | Stage perubahan dan penghapusan (bukan file baru) |
| `gcl` | `git clone` | Clone repositori |
| `gin` | `git init` | Inisialisasi repositori Git baru |
| `gco` | `git checkout` | Pindah branch atau restore file working tree |
| `gcb` | `git checkout -b` | Buat dan pindah ke branch baru |
| `gst` | `git status` | Tampilkan status working tree |
| `gsts` | `git status --short` | Tampilkan status format singkat |

## Commit

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `gc` | `git commit -a` | Commit semua perubahan tracked |
| `gca` | `git commit --amend` | Amend commit terakhir |
| `gcall` | `git add -A && git commit -av` | Stage semua dan commit dengan verbose |
| `gcam` | `git commit --amend --message` | Amend commit dengan pesan baru |
| `gcane` | `git commit --amend --no-edit` | Amend commit tanpa mengubah pesan |
| `gcm` | `git commit --message` | Commit dengan pesan inline |

## Diff dan Riwayat

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `gd` | `git diff` | Tampilkan perubahan yang belum di-stage |
| `gdh` | `git diff HEAD` | Tampilkan semua perubahan sejak commit terakhir |
| `gdstaged` | `git diff --staged` | Tampilkan perubahan yang di-stage |
| `gl` | `git log --since="last month" --oneline` | Log satu baris bulan lalu |
| `glg` | `git log --graph --all --oneline --decorate` | Graph log semua branch |

## Branch

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `gb` | `git branch` | Daftar branch lokal |
| `gbd` | `git branch -d` | Hapus branch yang sudah dimerge |
| `gbr` | `git branch -r` | Daftar branch remote |
| `gswb` | `git switch` | Pindah branch (modern) |

## Remote dan Push/Pull

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `gf` | `git fetch` | Fetch dari remote |
| `gp` | `git pull` | Pull dari remote |
| `gph` | `git push` | Push ke remote |
| `gpo` | `git push origin` | Push ke origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Atur upstream dan push branch saat ini |

## Revert dan Reset

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `grev` | `git revert` | Revert commit |
| `grb` | `git rebase` | Rebase branch saat ini |
| `grbk` | `git reset --soft HEAD^` | Undo commit terakhir, perubahan tetap di-stage |

## Submodule

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `gsm` | `git submodule` | Kelola submodule |
| `gsmi` | `git submodule init` | Inisialisasi submodule |
| `gsmu` | `git submodule update` | Update submodule |
| `gsmuir` | `git submodule update --init --recursive` | Update, init, dan rekursif submodule |

## Penandatanganan dan Keamanan

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `enable-signing` | *(wizard interaktif)* | Konfigurasi penandatanganan commit GPG atau SSH |
| `verify-signatures` | `git log --show-signature -n 10` | Verifikasi tanda tangan 10 commit terakhir |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Periksa konfigurasi penandatanganan saat ini |
