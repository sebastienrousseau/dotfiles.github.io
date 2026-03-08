---
title: นามแฝง Mkdir | Dotfiles
description: คำสั่งสร้างโฟลเดอร์แบบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495 รองรับ macOS, Linux และ WSL ผ่าน Dotfiles
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Mkdir | Dotfiles preview
canonical: /th/aliases/mkdir/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Mkdir
pageType: docs
schemaType: WebPage
permalink: /th/aliases/mkdir/
---

# นามแฝง Mkdir

คำสั่งสร้างโฟลเดอร์แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 6
- ฟังก์ชันตัวช่วย: 0
- ไฟล์ต้นฉบับ: 1

## ตัวอย่างสั้น

- `md` → `mkdir -v`
- `mdd` → `mkdir -pv "$(date +%Y%m%d)" && cd "$(date +%Y%m%d)"`
- `mde` → `mkdir -pv "$(date +%Y%m%d)-example"`
- `mdn` → `mkdir -pv "$(date +%Y%m%d)-notes"`
- `mdt` → `mkdir -pv "$(date +%H%M%S)"`
- `mdw` → `mkdir -pv "$(date +%Y%m%d)-work"`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

