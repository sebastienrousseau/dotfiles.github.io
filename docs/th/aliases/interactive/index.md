---
title: นามแฝง Interactive | Dotfiles
description: คำสั่งเชลล์แบบโต้ตอบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Interactive | Dotfiles preview
canonical: /th/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Interactive
pageType: docs
schemaType: WebPage
permalink: /th/aliases/interactive/
---

# นามแฝง Interactive

คำสั่งเชลล์แบบโต้ตอบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 8
- ฟังก์ชันตัวช่วย: 0
- ไฟล์ต้นฉบับ: 1

## ตัวอย่างสั้น

- `bin` → `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash`
- `cp` → `cp -vi`
- `del` → `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi`
- `diff` → `diff -u`
- `ln` → `ln -vi`
- `mkdir` → `mkdir -pv`
- `mv` → `mv -vi`
- `rm` → `rm -vi`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

