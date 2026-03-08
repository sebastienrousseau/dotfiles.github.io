---
title: นามแฝง Cd | Dotfiles
description: คำสั่งย้ายโฟลเดอร์แบบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495 รองรับ macOS, Linux และ WSL ผ่าน Dotfiles
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Cd | Dotfiles preview
canonical: /th/aliases/cd/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Cd
pageType: docs
schemaType: WebPage
permalink: /th/aliases/cd/
---

# นามแฝง Cd

คำสั่งย้ายโฟลเดอร์แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 16
- ฟังก์ชันตัวช่วย: 6
- ไฟล์ต้นฉบับ: 12

## ตัวอย่างสั้น

- `bm` → `'bm add'            # สร้างบุ๊กมาร์ก`
- `bmg` → `'cd "$(bm goto $1)"' # ไปยังบุ๊กมาร์ก`
- `bml` → `'bm list'           # แสดงรายการบุ๊กมาร์ก`
- `bmr` → `'bm remove'         # ลบบุ๊กมาร์ก`
- `bmu` → `'bm update'         # อัปเดตบุ๊กมาร์ก`
- `cd` → `'cd_with_history' # แทนที่คำสั่ง cd เริ่มต้น`
- `cdh` → `'cd_with_history' # ตัวช่วย cd ที่ปรับปรุงแล้ว`
- `cdhelp` → `cd_aliases_help`
- `cdversion` → `cd_aliases_version`
- `dh` → `'dirhistory' # แสดงประวัติไดเรกทอรี`
- `dirs` → `'dirs -v'        # แสดงรายการ directory stack พร้อมดัชนี`
- `ld` → `'lwd'        # กลับไปยังไดเรกทอรีสุดท้าย`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

