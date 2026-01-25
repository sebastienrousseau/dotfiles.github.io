---
description: Fungsi shell yang meningkatkan pengalaman terminal Anda. Utilitas untuk pengujian API, manajemen file, operasi sistem, dan lainnya.
lang: id-ID
metaTitle: Fungsi - Dotfiles (ID)
permalink: /functions/

meta:
  - name: keywords
    content: fungsi, shell, bash, zsh, dotfiles, produktivitas, utilitas, api, file, sistem
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Fungsi shell yang meningkatkan pengalaman terminal Anda. Utilitas untuk pengujian API, manajemen file, operasi sistem, dan lainnya.
  - name: twitter:title
    content: Fungsi - Dotfiles
  - name: og:title
    content: Fungsi - Dotfiles
  - name: og:description
    content: Fungsi shell yang meningkatkan pengalaman terminal Anda. Utilitas untuk pengujian API, manajemen file, operasi sistem, dan lainnya.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Fungsi

Utilitas shell untuk meningkatkan produktivitas Anda di macOS, Linux, dan Windows.

## Temukan

Fungsi didefinisikan sebagai file `.sh` individual. Selama `chezmoi apply`, mereka digabungkan ke dalam `~/.config/shell/functions.sh` dan dimuat oleh shell Anda.

## Mulai

### Menambahkan fungsi

1. Buat file `.sh` baru (misalnya, `myfunc.sh`)
2. Tambahkan definisi fungsi Anda
3. Terapkan perubahan:
   ```bash
   chezmoi apply
   ```

## Referensi

### Pengujian API

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `apihealth` | Periksa kesehatan satu atau beberapa API | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Pantau waktu respons API | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Lakukan pengujian beban dasar | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Debug permintaan HTTP dengan timing | `httpdebug [options] [url]` |

### Utilitas HTTP

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `curlheader` | Lihat header HTTP | `curlheader [header] [url]` |
| `curlstatus` | Periksa kode status HTTP | `curlstatus [url]` |
| `curltime` | Ukur metrik timing HTTP | `curltime [url]` |
| `view-source` | Lihat kode sumber website | `view-source URL` |
| `whoisport` | Temukan proses yang menggunakan port | `whoisport PORT` |

### Manajemen File

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `backup` | Buat backup dengan timestamp | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Encoding dan decoding Base64 | `encode64 "string"` |
| `extract` | Ekstrak format arsip | `extract [file]` |
| `hexdump` | Tampilkan file dalam format hex | `hexdump [file] [lines]` |
| `ren` | Rename ekstensi secara batch | `ren OLD_EXT NEW_EXT` |
| `size` | Periksa ukuran file atau direktori | `size [file/directory]` |
| `zipf` | Buat arsip ZIP | `zipf [folder]` |

### Penamaan File

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `kebabcase` | Konversi ke kebab-case | `kebabcase <files...>` |
| `lowercase` | Konversi ke huruf kecil | `lowercase <files...>` |
| `sentencecase` | Konversi ke sentence case | `sentencecase <files...>` |
| `snakecase` | Konversi ke snake_case | `snakecase <files...>` |
| `titlecase` | Konversi ke Title Case | `titlecase <files...>` |
| `uppercase` | Konversi ke HURUF BESAR | `uppercase <files...>` |

### Utilitas Sistem

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `caffeine` | Cegah sistem dari tidur | `caffeine [command]` |
| `environment` | Deteksi lingkungan OS | `environment` |
| `freespace` | Bersihkan ruang disk yang dapat dihapus | `freespace [disk]` |
| `hiddenfiles` | Toggle file tersembunyi di Finder | `hiddenfiles [show\|hide]` |
| `hostinfo` | Tampilkan informasi host | `hostinfo` |
| `hstats` | Lihat statistik penggunaan perintah | `hstats` |
| `last` | Daftar file yang baru dimodifikasi | `last [minutes]` |
| `logout` | Logout lintas platform | `logout [--force]` |
| `myproc` | Daftar proses pengguna | `myproc` |
| `stopwatch` | Stopwatch terminal | `stopwatch` |
| `sysinfo` | Tampilkan informasi sistem | `sysinfo` |

### Perintah Caffeine

Cegah sistem Anda dari tidur atau mengaktifkan screensaver.

| Perintah | Deskripsi |
|:---|:---|
| `caffeine daemon` | Mulai daemon caffeine |
| `caffeine status` | Periksa apakah daemon berjalan |
| `caffeine start` | Jaga layar tetap menyala |
| `caffeine stop` | Izinkan layar untuk tidur |
| `caffeine toggle` | Toggle layar tetap menyala |
| `caffeine shutdown` | Matikan daemon |

Berfungsi di macOS (`caffeinate` native), Linux (`xdg-screensaver`), dan Windows (PowerShell).

### Keamanan

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `genpass` | Generate kata sandi kuat | `genpass [num_blocks] [separator]` |
| `keygen` | Generate pasangan kunci SSH | `keygen [name] [email] [type] [bits]` |

### Navigasi

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `cdls` | Pindah direktori dan list | `cdls [directory]` |
| `goto` | Navigasi direktori cepat | `goto [directory]` |
| `mount_read_only` | Mount read-only sebagai read-write | `mount_read_only [image]` |
| `rd` | Hapus direktori | `rd [directory]` |
| `remove_disk` | Eject disk dengan aman | `remove_disk [disk]` |

### Lain-lain

| Fungsi | Deskripsi | Penggunaan |
|:---|:---|:---|
| `matrix` | Efek Matrix di terminal | `matrix [options]` |
| `prependpath` | Tambahkan direktori ke PATH | `prependpath [directory]` |
| `ql` | Buka di macOS Quick Look | `ql [file]` |
| `vscode` | Buka di VS Code | `vscode [file]` |

## Kompatibilitas

- **macOS** — Dukungan penuh dengan utilitas khusus macOS
- **Linux** — Kompatibel dengan distribusi umum
- **Windows** — Dukungan melalui WSL, Cygwin, atau Git Bash

## Bantuan

Setiap fungsi menyertakan dokumentasi melalui `--help`:

```bash
apihealth --help
```
