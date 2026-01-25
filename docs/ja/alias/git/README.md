---
description: Gitシェルエイリアス。コミット、ブランチ、差分、リモート操作を高速化する80以上のショートカット。
lang: ja-JP
metaTitle: Gitエイリアス - Dotfiles (JP)
permalink: /ja/alias/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shortcuts, git dotfiles, git commit, git branch, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Gitシェルエイリアス。コミット、ブランチ、差分、リモート操作を高速化する80以上のショートカット。
  - name: twitter:title
    content: Gitエイリアス - Dotfiles
  - name: og:title
    content: Gitエイリアス - Dotfiles
  - name: og:description
    content: Gitシェルエイリアス。コミット、ブランチ、差分、リモート操作を高速化する80以上のショートカット。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Gitエイリアス

バージョン管理ワークフローを強力なショートカットで効率化。

## 概要

Gitエイリアスは頻繁に使用するGitコマンドのショートカットを作成します。[Dotfiles](https://github.com/sebastienrousseau/dotfiles)設定の一部で、Chezmoiによって自動的にロードされます。

`git.aliases.sh`と`signing.aliases.sh`で定義され、インストール後は任意のBashまたはZshセッションで利用できます。

## リファレンス

### コア

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `g` | `git` | gitの省略形 |
| `gtp` | `git rev-parse --show-toplevel` | リポジトリのトップレベルディレクトリを表示 |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | 現在のブランチ名を表示 |
| `gconfl` | `git config --list` | すべてのGit設定を一覧表示 |
| `gconfr` | `git config --local --get remote.origin.url` | リモートorigin URLを表示 |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | カラー差分エイリアスを設定 |

### 作業エリア

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `ga` | `git add` | ファイルをステージング |
| `gaa` | `git add --all` | すべての変更をステージング |
| `gad` | `git add .` | カレントディレクトリをステージング |
| `gau` | `git add --update` | 変更と削除をステージング |
| `gcl` | `git clone` | リポジトリをクローン |
| `gin` | `git init` | 新しいGitリポジトリを初期化 |
| `gco` | `git checkout` | ブランチを切り替え |
| `gcb` | `git checkout -b` | 新しいブランチを作成して切り替え |
| `gdis` | `git checkout --` | 作業ディレクトリの変更を破棄 |
| `grs` | `git restore` | 作業ツリーファイルを復元 |
| `gmv` | `git mv` | ファイルを移動または名前変更 |
| `grm` | `git rm` | ファイルを削除 |
| `grmc` | `git rm --cached` | ファイルをアンステージング |
| `gst` | `git status` | 作業ツリーの状態を表示 |
| `gsts` | `git status --short` | 短形式で状態を表示 |
| `gstsb` | `git status --short --branch` | ブランチ情報付きの短形式状態 |
| `gsta` | `git stash save` | 現在の変更をスタッシュ |
| `gstp` | `git stash pop` | 最新のスタッシュを適用 |
| `gstd` | `git stash drop` | 最新のスタッシュを削除 |
| `gclout` | `git clean -df && git checkout -- .` | すべての変更を破棄 |

### コミット

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `gc` | `git commit -a` | 追跡済みの変更をコミット |
| `gca` | `git commit --amend` | 最後のコミットを修正 |
| `gcall` | `git add -A && git commit -av` | すべてをステージングしてコミット |
| `gcam` | `git commit --amend --message` | 新しいメッセージでコミットを修正 |
| `gcane` | `git commit --amend --no-edit` | メッセージを変更せずに修正 |
| `gcm` | `git commit --message` | インラインメッセージでコミット |

### 差分と履歴

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `gd` | `git diff` | ステージングされていない変更を表示 |
| `gdch` | `git diff --name-status` | 変更されたファイルの名前を表示 |
| `gdh` | `git diff HEAD` | 最後のコミット以降の変更を表示 |
| `gdstaged` | `git diff --staged` | ステージングされた変更を表示 |
| `gdcached` | `git diff --cached` | インデックスとHEAD間の変更を表示 |
| `gdstat` | `git diff --stat --ignore-space-change -r` | diffstatを生成 |
| `gl` | `git log --since="last month" --oneline` | 過去1ヶ月の1行ログ |
| `glg` | `git log --graph --all --oneline --decorate` | 全ブランチのグラフログ |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | 完全履歴グラフログ |
| `glc` | `git log --oneline --reverse` | 時系列の1行ログ |
| `gld` | `git log --since=1-day-ago` | 過去24時間のログ |
| `gldc` | `git log -1 --date-order --format=%cI` | 最新コミットのISO 8601日付 |
| `gldl` | `git log --date=local` | ローカルタイムゾーンでのログ |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` | フェッチ後の新しいコミット |
| `gll` | *(装飾グラフ形式)* | 詳細グラフログ |

### ブランチ

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `gb` | `git branch` | ローカルブランチを一覧表示 |
| `gbd` | `git branch -d` | マージ済みブランチを削除 |
| `gbl` | `git branch -l` | パターンにマッチするブランチを一覧表示 |
| `gbr` | `git branch -r` | リモートブランチを一覧表示 |
| `gbrd` | `git branch -d -r` | リモート追跡ブランチを削除 |
| `gbrsb` | `git show-branch` | ブランチとそのコミットを表示 |
| `gswb` | `git switch` | ブランチを切り替え（モダン） |
| `gcode` | `git checkout main && git branch --merged \| xargs git branch --delete` | mainにマージされたブランチを削除 |
| `gcom` | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | ローカルmainをリモートに合わせてリセット |

### リモートとPush/Pull

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `gf` | `git fetch` | リモートからフェッチ |
| `gp` | `git pull` | リモートからプル |
| `gph` | `git push` | リモートにプッシュ |
| `gpo` | `git push origin` | originにプッシュ |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | アップストリームを設定してプッシュ |
| `gpoll` | `git push origin --all` | すべてのブランチをoriginにプッシュ |
| `gpull` | `git pull` | リモートからプル |
| `gpush` | `git push` | リモートにプッシュ |
| `gr` | `git remote` | リモートを管理 |
| `gra` | `git remote add` | 新しいリモートを追加 |
| `grall` | `git remote \| xargs -L1 git push --all` | すべてのブランチをすべてのリモートにプッシュ |
| `grao` | `git remote add origin` | originリモートを追加 |
| `grv` | `git remote -v` | リモートURLを表示 |

### リバートとリセット

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `grev` | `git revert` | コミットを取り消し |
| `grevnc` | `git revert --no-commit` | 自動コミットなしで取り消し |
| `grb` | `git rebase` | 現在のブランチをリベース |
| `grbk` | `git reset --soft HEAD^` | 最後のコミットを取り消し |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | ハードリセットとクリーン |
| `gresh` | `git reset --hard HEAD~1` | 前のコミットにハードリセット |
| `gresp` | `git reset --hard && git clean -ffdx` | 初期状態にリセット |
| `gress` | `git reset --soft HEAD~1` | ソフトリセット |

### サブモジュール

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `gsm` | `git submodule` | サブモジュールを管理 |
| `gsmi` | `git submodule init` | サブモジュールを初期化 |
| `gsma` | `git submodule add` | サブモジュールを追加 |
| `gsms` | `git submodule sync` | サブモジュールURLを同期 |
| `gsmu` | `git submodule update` | サブモジュールを更新 |
| `gsmui` | `git submodule update --init` | 更新して初期化 |
| `gsmuir` | `git submodule update --init --recursive` | 更新、初期化、再帰 |

### ツール

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `gg` | `git grep` | リポジトリコンテンツを検索 |
| `gbs` | `git bisect` | バグを導入したコミットを二分探索 |
| `undopush` | `git push -f origin HEAD^:master` | 最後のプッシュを強制取り消し |

### 署名とセキュリティ

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `enable-signing` | *(インタラクティブウィザード)* | GPGまたはSSHコミット署名を設定 |
| `verify-signatures` | `git log --show-signature -n 10` | 最後の10コミットの署名を検証 |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | 現在の署名設定を確認 |
