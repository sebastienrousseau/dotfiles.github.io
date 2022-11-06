# Archives aliases

The `archives.aliases.sh` file creates helpful shortcut aliases for archiving
files and directories. The aliases are able to create and handle archives in a
variety of formats.

## 📦 7-Zip

[7-Zip](http://www.7-zip.org/) is a file archiver with a high compression ratio.

| Alias | Command | Description |
| ----- | ----- | ----- |
| c7z |`7z a` | Compress a whole directory (including subdirectories) to a 7z file. |
| e7z |`7z x` | Extract a whole directory (including subdirectories) from a 7z file. |

## 📦 Bzip2

[Bzip2](http://www.bzip.org/) is a freely available, patent free, high-quality
data compressor.

| Alias | Command | Description |
| ----- | ----- | ----- |
| cbz2 |`bzip2` | Compress a file to a bz2 file. |
| ebz2 |`bunzip2` | Extract a file from a bz2 file. |

## 📦 Gzip

[Gzip](https://www.gnu.org/software/gzip/) is a popular data compression program
as a replacement for compress.

| Alias | Command | Description |
| ----- | ----- | ----- |
| cgz |`gzip` | Compress a file to a gz file. |
| egz |`gunzip` | Extract a file from a gz file. |

## 📦 Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) is a file format
used to aggregate many files into one file to distribute application software or
libraries on the Java platform.

| Alias | Command | Description |
| ----- | ----- | ----- |
| cjar |`jar -cvf` | Compress a whole directory (including subdirectories) to a jar file. |
| ejar |`jar -xvf` | Extract a whole directory (including subdirectories) from a jar file. |

## 📦 Tar

[Tar](https://www.gnu.org/software/tar/) is a computer program used to store
many files together in a single file.

| Alias | Command | Description |
| ----- | ----- | ----- |
| ctar |`tar -cvf` | Compress a whole directory (including subdirectories) to a tar file. |
| etar |`tar -xvf` | Extract a whole directory (including subdirectories) from a tar file. |
| ctgz |`tar -cvzf` | Compress a whole directory (including subdirectories) to a tar.gz file. |
| etgz |`tar -xvzf` | Extract a whole directory (including subdirectories) from a tar.gz file. |

## 📦 Xz

[Xz](https://tukaani.org/xz/) is a general-purpose data compression software
with a high compression ratio.

| Alias | Command | Description |
| ----- | ----- | ----- |
| cxz |`xz -zcvf` | Compress a whole directory (including subdirectories) to a xz file. |
| exz |`xz -zxvf` | Extract a whole directory (including subdirectories) from a xz file. |

## 📦 Zip

[Zip](https://en.wikipedia.org/wiki/Zip_(file_format)) is a file format used to
output a single file containing one or more files.

| Alias | Command | Description |
| ----- | ----- | ----- |
| cz |`zip -r` | Compress a whole directory (including subdirectories) to a zip file. |
| ez |`unzip` | Extract a whole directory (including subdirectories) from a zip file. |

## 📦 Zstd

[Zstd](https://facebook.github.io/zstd/) is a fast lossless compression
algorithm, targeting real-time compression scenarios at zlib-level and better
compression ratios.

| Alias | Command | Description |
| ----- | ----- | ----- |
| czstd |`zstd -zcvf` | Compress a whole directory (including subdirectories) to a zst file. |
| ezstd |`zstd -zxvf` | Extract a whole directory (including subdirectories) from a zst file. |
