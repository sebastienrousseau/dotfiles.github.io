---
title: "קיצורי Diagnostics: פקודות תקינות מערכת ותיקון עצמי"
description: "קיצורי מעטפת לאבחון מערכת, בדיקות תקינות, זיהוי סטייה ותיקון עצמי בסביבת ה-dotfiles שלך."
lang: he-IL
metaTitle: "קיצורי Diagnostics | Dotfiles"
permalink: /he/aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "diagnostics aliases, system health check, dotfiles doctor, chezmoi verify, self-healing shell"
---

# קיצורי Diagnostics

כלים לתיקון עצמי ובדיקות תקינות מערכת.

## סקירה

קיצורי diagnostics מספקים פקודות לניטור תקינות מערכת, זיהוי סטיית תצורה ותיקון אוטומטי של סביבת ה-dotfiles שלך. כלי עזר אלה משתלבים עם chezmoi כדי להבטיח שהקבצים המקומיים שלך נשארים מסונכרנים עם המצב המנוהל.

## הפניה

### תקינות ותיקון

| קיצור | תיאור |
|-------|-------------|
| `doc`, `dot-doctor` | הרץ את סקריפט בדיקת התקינות (`doctor.sh`). |
| `drift`, `dot-drift` | בדוק אם קבצים מקומיים סטו מהמצב המנוהל (`chezmoi verify`). |
| `heal`, `dot-heal` | החל את המצב המנוהל לתיקון סטייה (`chezmoi apply`). |
| `doc-full` | הרץ doctor עם מידע ניפוי באגים מורחב של נתיבים. |
