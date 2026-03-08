---
title: เกี่ยวกับ Dotfiles | Dotfiles
description: สำรวจภาพรวมทางเทคนิคของ Dotfiles v0.2.495 รองรับ macOS, Linux และ WSL ผ่าน Dotfiles
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: เกี่ยวกับ Dotfiles | Dotfiles preview
canonical: /th/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: เกี่ยวกับ Dotfiles
pageType: docs
schemaType: WebPage
permalink: /th/about/
---

# เกี่ยวกับ Dotfiles

Dotfiles v0.2.495 คือการกำหนดค่าเชลล์ข้ามแพลตฟอร์มที่จัดการโดย Chezmoi

## ติดตั้ง

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## ตรวจสอบ

```bash
dot doctor
```

## คำสั่งหลัก

- `dot apply` ใช้การเปลี่ยนแปลงการกำหนดค่า
- `dot update` อัปเดตรีโพและอุ่นแคช
- `dot doctor` ตรวจสอบพาธ เครื่องมือ และสุขภาพเชลล์
- `dot heal` ซ่อมแซมสถานะที่หายไปหรือเสียหาย
- `dot smoke-test` ตรวจสอบ toolchain หลัก

## ที่เกี่ยวข้อง

- [นามแฝง](/th/aliases/)
- [ฟังก์ชัน](/th/functions/)
- [พาธ](/th/paths/)
