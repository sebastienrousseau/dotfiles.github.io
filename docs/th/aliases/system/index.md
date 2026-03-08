---
title: System นามแฝง | Dotfiles
description: สำรวจนามแฝง System ใน Dotfiles v0.2.495 คำสั่ง system สั้นและจำง่ายสำหรับ macOS, Linux และ WSL
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System นามแฝง | Dotfiles preview
canonical: /th/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System นามแฝง
pageType: docs
schemaType: WebPage
permalink: /th/aliases/system/
---

# System นามแฝง

คำสั่ง system แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงและคำสั่งลัดที่ใช้บ่อย อ่านหน้านี้ก่อนเพื่อทำความเข้าใจหลักการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน นามแฝงเหล่านี้ช่วยลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สอดคล้องกันบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนงาน Shell ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 24
- ฟังก์ชันช่วยเหลือ: 0
- ไฟล์ซอร์ส: 1

## ตัวอย่างเร็ว

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

- [ภาคผนวกอ้างอิง System](./reference.md)
