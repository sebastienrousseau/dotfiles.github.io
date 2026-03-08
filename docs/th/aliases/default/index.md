---
title: นามแฝง Default | Dotfiles
description: นามแฝงเชลล์ประจำวันหลัก ภาพรวมสำหรับ Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Default | Dotfiles preview
canonical: /th/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Default
pageType: docs
schemaType: WebPage
permalink: /th/aliases/default/
---

# นามแฝง Default

นามแฝงเชลล์ประจำวันหลัก

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 17
- ฟังก์ชันตัวช่วย: 2
- ไฟล์ต้นฉบับ: 1

## ตัวอย่างสั้น

- `clearasl` → `clear_asl_logs`
- `ctf` → `echo $(ls -1 | wc -l)`
- `da` → `date "+%Y-%m-%d %A %T %Z"`
- `halt` → `sudo shutdown -h now`
- `history` → `'fc -il 1' # แสดงประวัติพร้อม timestamp ISO 8601 (zsh)`
- `ipinfo` → `ip -br addr`
- `ping` → `ping -c 5`
- `poweroff` → `sudo shutdown -h now`
- `q` → `quit`
- `qfind` → `find . -name `
- `quit` → `exit`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

