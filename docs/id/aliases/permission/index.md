---
title: Alias Permission | Dotfiles
description: Alias Permission untuk Dotfiles
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Alias Permission preview
canonical: /id/aliases/permission/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Alias Permission
pageType: docs
schemaType: WebPage
metaTitle: Alias Permission - Dotfiles (ID)
permalink: /id/aliases/permission/
---

# Alias Permission

Kelola alias permission. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `permission.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

Kode ini menyediakan set alias untuk izin file.
- `000` Tidak ada izin baca, tulis, atau eksekusi untuk pengguna, grup, atau lainnya.
- `400` Tidak ada izin baca atau tulis, tapi izinkan eksekusi hanya untuk pengguna.
- `444` Tidak ada izin tulis atau eksekusi, tapi izinkan baca untuk semua.
- `600` Atur izin baca dan tulis hanya untuk pengguna.
- `644` Atur izin baca untuk semua, tapi izinkan tulis hanya untuk pengguna.
- `666` Atur izin baca dan tulis untuk semua.
- `755` Atur izin baca, tulis, dan eksekusi untuk pengguna, tapi hanya baca dan eksekusi untuk grup dan lainnya.
- `764` Atur izin baca dan tulis untuk pengguna dan grup, tapi hanya baca untuk lainnya.
- `777` Atur izin baca, tulis, dan eksekusi untuk semua.
- `chgrp` Ubah kepemilikan grup file atau direktori.
- `chgrpr` Ubah kepemilikan grup file atau direktori secara rekursif.
- `chmod` Ubah bit mode file.
- `chmodr` Ubah bit mode file secara rekursif.
- `chmox` Jadikan file dapat dieksekusi.
- `chown` Ubah pemilik dan grup file.
- `chownr` Ubah pemilik dan grup file secara rekursif.
