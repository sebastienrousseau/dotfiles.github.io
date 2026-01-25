---
description: テキストエディタのためのシェルエイリアス。Neovim、VS Code、Vim、Nano、Emacsなどをサポート。
lang: ja-JP
metaTitle: Editorエイリアス - Dotfiles (JP)
permalink: /ja/alias/editor/
sidebar: true

meta:
  - name: keywords
    content: editor, vim, neovim, vscode, nano, emacs, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: テキストエディタのためのシェルエイリアス。Neovim、VS Code、Vim、Nano、Emacsなどをサポート。
  - name: twitter:title
    content: Editorエイリアス - Dotfiles
  - name: og:title
    content: Editorエイリアス - Dotfiles
  - name: og:description
    content: テキストエディタのためのシェルエイリアス。Neovim、VS Code、Vim、Nano、Emacsなどをサポート。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Editorエイリアス

環境で設定されたエディタを使用してファイルを編集するためのショートカット。

## 概要

これらのエイリアスは`editor.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。`editor.sh`で自動検出されたエディタと連携して動作します。

## リファレンス

### ユニバーサルエイリアス

| エイリアス | 説明 |
|:---|:---|
| `e` | クイック編集コマンド |
| `edit` | 標準編集コマンド |
| `editor` | フルエディタコマンド |
| `v` | Vimライクな編集エイリアス |
| `n` | ショート編集エイリアス |

### VS Code

| エイリアス | 説明 |
|:---|:---|
| `vsc` | VS Codeの省略形 |
| `vsca` | 現在のウィンドウにフォルダを追加 |
| `vscd` | 2つのファイルを比較 |
| `vscn` | 新しいウィンドウを開く |
| `vscr` | ウィンドウを再利用 |

### Neovim

| エイリアス | 説明 |
|:---|:---|
| `vi`, `vim` | Neovimにリダイレクト |
| `nvimrc` | Neovim Vimscript設定を編集 |
| `nvimlua` | Neovim Lua設定を編集 |

### クイック設定編集

`editrc`関数で一般的な設定ファイルを素早く編集：

```bash
editrc bash     # ~/.bashrcを編集
editrc zsh      # ~/.zshrcを編集
editrc vim      # ~/.vimrcを編集
editrc git      # ~/.gitconfigを編集
```
