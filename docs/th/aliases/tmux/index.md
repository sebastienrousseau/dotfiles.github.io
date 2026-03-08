---
title: นามแฝง Tmux | Dotfiles
description: คำสั่ง tmux แบบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495 รองรับ macOS, Linux และ WSL ผ่าน Dotfiles
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Tmux | Dotfiles preview
canonical: /th/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Tmux
pageType: docs
schemaType: WebPage
permalink: /th/aliases/tmux/
---

# นามแฝง Tmux

คำสั่ง tmux แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 11
- ฟังก์ชันตัวช่วย: 1
- ไฟล์ต้นฉบับ: 1

## ตัวอย่างสั้น

- `tma` → `'tmux attach-session'     # แนบกับเซสชันล่าสุด`
- `tmat` → `'tmux attach-session -t' # แนบกับเซสชันเฉพาะ`
- `tmi` → `'tmux info' # แสดงข้อมูล tmux`
- `tmka` → `'tmux kill-server'     # ปิดทุกเซสชัน (เซิร์ฟเวอร์)`
- `tmks` → `'tmux kill-session -a' # ปิดทุกเซสชันยกเว้นปัจจุบัน`
- `tml` → `'tmux list-sessions'    # แสดงรายการเซสชันทั้งหมด`
- `tmlp` → `'tmux list-panes'   # แสดงรายการ panes`
- `tmls` → `'tmux list-windows' # แสดงรายการ windows`
- `tmn` → `'tmux new-session'    # เซสชันใหม่ไม่มีชื่อ`
- `tmr` → `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # โหลดค่าใหม่`
- `tms` → `'tmux new-session -s' # เซสชันใหม่มีชื่อ`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

