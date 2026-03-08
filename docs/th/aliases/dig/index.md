---
title: นามแฝง Dig | Dotfiles
description: คำสั่งสอบถาม DNS แบบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Dig | Dotfiles preview
canonical: /th/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Dig
pageType: docs
schemaType: WebPage
permalink: /th/aliases/dig/
---

# นามแฝง Dig

คำสั่งสอบถาม DNS แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 10
- ฟังก์ชันตัวช่วย: 0
- ไฟล์ต้นฉบับ: 1

## ตัวอย่างสั้น

- `d` → `dig`
- `d4` → `dig +short -4`
- `d6` → `dig +short -6`
- `dga` → `dig +all ANY`
- `dgs` → `dig +short`
- `digg` → `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` → `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` → `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` → `ip4; ip6`
- `wip` → `dig +short myip.opendns.com @resolver1.opendns.com`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

