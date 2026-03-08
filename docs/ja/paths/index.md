---
title: パス管理 | Dotfiles
description: Dotfilesが$PATH階層を管理し、正しいツールが正しい順序で読み込まれるようにする方法。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: パス管理 preview
canonical: /ja/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: パス管理
pageType: docs
schemaType: WebPage
metaTitle: パス管理 - Dotfiles (JA)
permalink: /ja/paths/
meta:
  - name: keywords
    content: パス, 環境, 変数, 階層, dotfiles, chezmoi
---

# パス管理

Dotfilesの最も重要なタスクの一つは、`$PATH`環境変数の管理です。これにより、コマンドを入力したときにどのバージョンのツールが実行されるかが決まります。

macOSとLinux間の一貫性を確保するため、厳格な階層を遵守しています。
