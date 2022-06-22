# README
Halo teman-teman Android! Ini merupakan final test untuk Back-end Study Club KSM Android UPNVJ. Mohon diikuti langkah-langkah dan ketentuannya untuk lulus dalam Study Club ini.

</br>

> ## <span style="color:red"> ⚠️ Deadline: Jum'at, 2 Juli 2022 </span>
## Tahapan
1. Baca detail tugas di bawah
2. Clone repository ini ([git cmd](#git-commands) poin ke 1)
3. Buat branch baru ([git cmd](#git-commands) poin ke 7)
4. Pindah ke branch yang baru dibuat ([git cmd](#git-commands) poin ke 8)
5. Setup database, bisa refer ke video ini supaya lebih mudah https://youtu.be/8JPmHZJKB5w atau kalau mau pakai cara lain juga boleh, misalnya sekalian belajar pakai docker, dsb.
6. Ubah file .env sesuaikan dengan database local kalian
7. Selamat Ngoding! ✨
## Detail Tugas
- Minimal memiliki entitas admin dan 2 entitas lain yang memiliki relasi 1:n (One to Many) atau m:n (Many to One) antara 2 entitas tersebut,
- Web Service API (CRUD) untuk admin dan 2 entitas yang ditentukan,
- Membuat signup dan login authentication (signup optional, yang wajib hanya login). Apabila login berhasil, maka akan mengembalikan token JWT yang bisa digunakan untuk Create, Update, dan Delete 2 entitas yang ditentukan, serta Update dan Delete admin.
- Membuat authorization middleware untuk cek apakah merupakan admin yang sudah login atau bukan? Kalau bukan, maka kembalikan error.

> ## Contoh 📝
> Misalnya mau membuat API CRUD sederhana berisi **Film** dan **Pemain** yang memiliki relasi m:n (many to many), maka tabel yang diperlukan adalah:
> 1. admin, dengan kolom:
>    1. id; bigint, primary key, auto increment,
>    2. username; varchar,
>    3. password; varchar,
> 2. film, dengan kolom:
>    1. id; bigint, primary key, auto increment,
>    2. judul_film; varchar,
>    3. rating; int (1-5)
> 3. pemain, dengan kolom:
>    1. id; bigint, primary key, auto increment,
>    2. nama; varchar,
>    3. rating; int (1-5)
> 4. film_pemain_links (Untuk menampung relasi m:n diperlukan *junction table* atau tabel > tambahan kalau 1:n tidak diperlukan), dengan kolom: 
>    1. id; type bigint, primary key, auto increment,
>    2. film_id; int, fk ke film(id),
>    3. pemain_id; int, fk ke pemain(id)
> 
> Maka, perlu dibuat login authentication admin serta CRUD untuk film dan pemain. Apabila ingin melakukan Create, Update, dan Delete pada 2 entitas selain admin tersebut, diperlukan token JWT yang didapat setelah admin login.

---
## Penilaian Tambahan
- Membuat error handling sendiri pakai class ataupun middleware
- Menggunakan enkripsi password yang disimpan ke database (bcrypt, argon2, dsb.)
- API read data pemain atau film mengembalikan data join relasinya, misal:
  - Ketika Get Film by id 1, maka juga akan mengembalikan data para pemainnya
    <details>
      <summary>Klik buat liat datanya</summary>

      ```
      {
      	"judul_film": "Gundala",
      	"rating": 5,
      	"pemain": [
      		{
      			"id": 1
                "nama": "Abimana Aryasatya",
      			"rating": 5
      		},
      		{
      			"id": 2
                "nama": "Pevita Pearce",
      			"rating": 5
      		},
      		{
      			"id": 3
                "nama": "Tara Basro",
      			"rating": 5
      		}
      	]
      }

      ```
    </details>
  - Ketika Get Cast by id 1, maka juga akan mengembalikan data film yang dimainkan
    <details>
      <summary>Klik buat liat datanya</summary>

      ```
      {
      	"nama": "Abimana Aryasatya",
      	"rating": 5,
      	"pemain": [
      		{
      			"id": 1
                "judul_film": "Gundala",
      			"rating": 5
      		}
      	]
      }
      
      ```
    </details>

## Cara Ngumpulin
1. Jangan lupa commit file kalian ([git cmd](#git-commands) poin 2)
2. Push branch kalian ke remote ([git cmd](#git-commands) poin 9)
3. Presentasi tanggal 2 Juli
4. Kelar deh 🤟

## Link Tutorial Tambahan Yang Bisa Dipelajari
- Setup database https://youtu.be/8JPmHZJKB5w
- Authentication dan Authorization https://youtu.be/2jqok-WgelI
  
## Git Commands
- Clone repository
`git clone https://github.com/abimnyud/example-app.git`

- Commit file
`git add <file-atau-folder>` kemudian
`git commit -m "<messagenya-apa>"`
 
- Publish commit ke branch yang sekarang
`git push `

- Cek lagi di branch mana
`git status`

- Cek ada branch apa aja di local `git branch`

- Cek ada branch apa aja di remote dan di local
`git branch -a`

- Buat branch baru di local `git branch <nama-branch>`

- Pindah branch
`git switch <nama-branch>` atau `git checkout <nama-branch>`

- publish branch dari local ke remote
`git push -u origin <nama-branch>` atau 
`git push --set-upstream origin <nama-branch>`

- .gitignore untuk pengecualian file agar tidak tercommit