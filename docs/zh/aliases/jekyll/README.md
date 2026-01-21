---
description: Jekyll 别名是一组别名，允许您以更具交互性的方式与 Jekyll 交互。Jekyll 是一个静态站点生成器。它获取用您喜欢的标记语言编写的文本，并使用布局创建静态网站。
lang: zh-CN
metaTitle: Jekyll 别名 - Dotfiles (CN)
permalink: /zh/aliases/jekyll/
---

# Jekyll 别名

此 `jekyll.aliases.sh` 文件为许多常用的 [Jekyll](https://jekyllrb.com/) 命令创建了有用的快捷别名。

Jekyll 别名是一组别名，允许您以更具交互性的方式与 Jekyll 交互。Jekyll 是一个静态站点生成器。它获取用您喜欢的标记语言编写的文本，并使用布局创建静态网站。您可以调整站点的外观和感觉、URL、页面上显示的数据等等。

## Jekyll 开发别名

| 别名 | 命令                                                              | 描述                                                              |
| ---- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| jkb  | `JEKYLL_ENV=development bundle exec jekyll build`                 | 执行一次性构建您的站点到 ./\_site。                               |
| jkc  | `JEKYLL_ENV=development bundle exec jekyll clean`                 | 删除所有生成的文件：目标文件夹、元数据文件、Sass 和 Jekyll 缓存。 |
| jkd  | `JEKYLL_ENV=development bundle exec jekyll serve --watch --trace` | 将站点开发构建到 '\_site' 并运行本地开发服务器。                  |
| jkl  | `JEKYLL_ENV=development bundle exec jekyll serve --livereload`    | 将站点开发构建到 '\_site' 并运行本地开发服务器。                  |
| jko  | `open http://localhost:4000/`                                     | 打开本地开发服务器。                                              |

## Jekyll 发布别名

| 别名 | 命令                                                             | 描述                                             |
| ---- | ---------------------------------------------------------------- | ------------------------------------------------ |
| jkp  | `JEKYLL_ENV=production bundle exec jekyll serve --watch --trace` | 将站点生产构建到 '\_site' 并运行本地开发服务器。 |
