---
title: พาธ | Dotfiles
description: ภาพรวมลำดับความสำคัญ PATH และรายการที่มาจาก Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: พาธ | Dotfiles preview
canonical: /th/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: พาธ
pageType: docs
schemaType: WebPage
permalink: /th/paths/
---

# พาธ

Dotfiles กำหนดลำดับ PATH ในเทมเพลตเดียวและเพิ่มรายการข้างหน้าตามลำดับความสำคัญ

## ลำดับความสำคัญ

1. เริ่มต้นด้วยพาธระบบ
2. เพิ่มพาธรันไทม์และตัวจัดการแพ็กเกจข้างหน้า
3. เพิ่มพาธผู้ใช้ในเครื่องสุดท้ายเพื่อให้มีลำดับความสำคัญสูงสุด
4. ลบรายการซ้ำโดยรักษาการจับคู่แรก

## รายการที่ประกาศ

- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${BUN_INSTALL}/bin"`
- `"${HOME}/.node_modules/bin"`
- `"${HOME}/.luarocks/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/.local/share/mise/shims"`
- `"${HOME}/bin"`
