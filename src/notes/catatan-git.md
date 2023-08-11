---
title: 'Memantau perubahan code dengan git'
date: 'git Last Modified'
tags:
  - git
---

# Apa itu git?
Singkatnya git adalah distributed version control system (DVCS) yang digunakan untuk memantau perubahan pada source code selama pengembangan software.

# Install git
Tergantung pada sistem operasi yang digunakan, ada beberapa cara untuk menginstall git, untuk mendownload git bisa melalui link berikut  [ini](https://git-scm.com/downloads).

### Install git di linux
Install git di linux distro Fedora dan Debian dengan command line melalui repository bawaan.

- Fedora
```bash
sudo dnf install git
```

- Debian/Ubuntu
```bash
sudo apt-get install git
```
### GUI Client
selain menggunakan git melalui command-line, tersedia juga GUI Client untuk git seperti Github Desktop, Git Kraken, dan LazyGit.

selengkapnya bisa dilihat [disini](https://git-scm.com/downloads/guis)

# Mulai menggunakan git 
Berikut adalah perintah git yang sering digunakan dalam pengkodean sehari-hari

### git init
Untuk mulai memantau perubahan kode selama pengembangan pertama-tama diperlukan untuk menginisiasi git terlebih dahulu.
```bash
git init
```

### git add
Setelah dinisiasi, sekarang saatnya kode melacak kode yang ditulis, untuk memantau file yang ingin dilacak diperlukan untuk menambahkan file tersebut dengan perintah berikut:
```bash
# Tambahkan file yang ingin dipantau
git add <nama-file>

# Tambahkan semua file yang ada didalam directory
git add .
```

### git commit
git commit digunakan untuk menyimpan perubahan pada repositori lokal dalam bentuk snapshot. setiap commit merekam perubahan yang ditelah dilakukan dan mencatat pesan yang telah ditulis saat melakukan commit. commit menciptakan titik-titik dalam sejarah proyek yang dapat direferensikan kembali dimasa mendatang.

* melakukan commit

setelah file berhasil ditambahkan ke stagging area dengan `git add`, kemudian lakukan commit
```bash
git commit -m "Initial commit"
```

### git log
perintah berikut akan menampilkan daftar commit  dengan informasi seperti id commit, penulis, tanggal, dan pesan commit
```bash
git log
```

### git status
`git status` digunakan untuk menampilkan informasi tentang status perubahan pada sebuah repositori. `git status` akan memberikan gambaran tentang file-file diubah, ditambahkan ke stagging area, dan siap untuk dicommit.

output dari `git commit` mungkin akan seperti ini:
```bash
On branch dev
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   eleventy.config.cjs

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.editorconfig
	src/_data/
	src/notes/notes.11tydata.js

```