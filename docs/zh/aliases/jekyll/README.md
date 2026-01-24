---
description: Jekyll 别名用于更方便地使用 Jekyll。Jekyll 是静态站点生成器。
lang: zh-CN
metaTitle: Jekyll 别名 - Dotfiles (ZH)
permalink: /zh/aliases/jekyll/

meta:
  - name: keywords
    content: aliases, bash, jekyll, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Jekyll 别名用于更方便地使用 Jekyll。Jekyll 是静态站点生成器。
  - name: twitter:description
    content: Jekyll 别名用于更方便地使用 Jekyll。Jekyll 是静态站点生成器。
  - name: twitter:title
    content: Jekyll 别名 - Dotfiles (ZH)
  - name: og:title
    content: Jekyll 别名 - Dotfiles (ZH)
  - name: og:description
    content: Jekyll 别名用于更方便地使用 Jekyll。Jekyll 是静态站点生成器。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---

# Jekyll 别名

`jekyll.aliases.sh` 为常用 [Jekyll](https://jekyllrb.com/) 命令提供快捷方式。

## Jekyll development aliases

| Alias | Command                                                           | Description                                                                             |
| ----- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| jkb   | `JEKYLL_ENV=development bundle exec jekyll build`                 | 一次性构建到 ./_site。                                                                  |
| jkc   | `JEKYLL_ENV=development bundle exec jekyll clean`                 | 清理生成文件、元数据、缓存。                                                             |
| jkd   | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | 开发构建并运行本地服务器。                                                               |
| jkl   | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | 开发构建并运行本地服务器。                                                               |
| jko   | `open http://localhost:4000/`                                     | 打开本地开发服务器。                                                                     |

## Jekyll release aliases

| Alias | Command                                                          | Description                                                                          |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| jkp   | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | 生产构建并运行本地服务器。                                                           |
