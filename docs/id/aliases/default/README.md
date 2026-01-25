---
description: Alias shell esensial untuk navigasi, kontrol sistem, dan tugas sehari-hari. Sederhanakan alur kerja terminal dengan pintasan universal ini.
lang: id-ID
metaTitle: Alias Default - Dotfiles (ID)
permalink: /id/alias/default/
sidebar: true

meta:
  - name: keywords
    content: default aliases, shell aliases, terminal shortcuts, dotfiles, bash aliases
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Default - Dotfiles
  - name: twitter:description
    content: Alias shell esensial untuk navigasi, kontrol sistem, dan tugas sehari-hari.
  - name: og:title
    content: Alias Default - Dotfiles
  - name: og:description
    content: Alias shell esensial untuk navigasi, kontrol sistem, dan tugas sehari-hari.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Default

Pintasan shell esensial untuk tugas terminal sehari-hari.

## Ikhtisar

Alias default menyediakan koleksi pintasan shell universal yang mempercepat operasi terminal umum. Alias ini didefinisikan di `default.aliases.sh` dan dimuat secara otomatis oleh chezmoi di semua shell yang didukung.

Pintasan ini mencakup utilitas umum, perintah keluar, diagnostik jaringan, pemantauan sistem, dan navigasi sistem file.

## Referensi

### Umum

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Tampilkan tanggal dan waktu saat ini |
| `p` | `pwd` | Tampilkan direktori kerja |
| `path` | `echo ${PATH//:/\\n}` | Tampilkan variabel PATH dengan baris baru |
| `r` | `reload` | Muat ulang shell |
| `t` | `tail -f` | Ikuti output file secara real-time |
| `wk` | `date +%V` | Tampilkan nomor minggu saat ini |

### Keluar dan Shutdown

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `q` | `exit` | Keluar dari shell |
| `quit` | `exit` | Keluar dari shell |
| `bye` | `exit` | Keluar dari shell |
| `:q` | `exit` | Keluar dari shell (gaya vim) |
| `halt` | `sudo /sbin/halt` | Hentikan sistem |
| `poweroff` | `sudo /sbin/shutdown` | Matikan sistem |
| `reboot` | `sudo /sbin/reboot` | Mulai ulang sistem |

### Riwayat

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `h` | `history` | Tampilkan riwayat perintah |
| `history` | `fc -il 1` | Tampilkan riwayat dengan timestamp ISO 8601 |

### Jaringan

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Konfigurasi antarmuka jaringan |
| `ipinfo` | `ipconfig getpacket en0` | Dapatkan parameter jaringan untuk en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Tampilkan listener jaringan aktif |
| `op` | `sudo lsof -i -P` | Daftar port terbuka |
| `ping` | `ping -c 5` | Ping dengan batas 5 paket |
| `ports` | `netstat -tulan` | Daftar semua port yang mendengarkan |

### Pemantauan Sistem

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `top` | `sudo btop` | Monitor proses interaktif |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Bersihkan file log ASL |

### Utilitas

| Alias | Perintah | Deskripsi |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | Hitung file di direktori saat ini |
| `qfind` | `find . -name` | Pencarian file cepat |
| `reload` | `exec $SHELL -l` | Muat ulang shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Dapatkan cuaca saat ini |
