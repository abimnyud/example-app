# README
Halo teman-teman Android! Ini merupakan final test untuk Back-end Study Club KSM Android UPNVJ. Mohon diikuti langkah-langkah dan ketentuannya untuk lulus dalam Study Club ini.

</br>

> ## <span style="color:red"> ⚠️ Deadline: Sabtu, 24 Juni 2023</span>
## Tahapan
1. Baca detail tugas di bawah
2. Clone repository ini ([git cmd](#git-commands) poin ke 1)
3. Buat branch baru ([git cmd](#git-commands) poin ke 7)
4. Pindah ke branch yang baru dibuat ([git cmd](#git-commands) poin ke 8)
5. Setup database, bisa refer ke video ini supaya lebih mudah https://youtu.be/8JPmHZJKB5w atau kalau mau pakai cara lain juga boleh, misalnya sekalian belajar pakai docker, dsb.
6. Ubah file .env sesuaikan dengan database local kalian
7. Semoga bermanfaat ya buat jadi portfolio! Selamat ngoding! ✨
## Detail Tugas
- Minimal memiliki entity admin dan 2 entity lain yang memiliki relasi 1:n (One to Many) atau m:n (Many to One) antara 2 entity tersebut 
- Web Service API (CRUD) untuk admin dan 2 entity yang dipilih (Hanya admin yang dapat melakukan proses CUD)
- Membuat signup dan login authentication (signup optional, yang wajib hanya login). Apabila login berhasil, maka kembalikan token JWT yang bisa di autentikasi untuk melakukan proses CUR (Create, Update, dan Delete) 2 entity yang dipilih, serta Update dan Delete entity admin
- Membuat authorization middleware untuk cek apakah admin yang yang hit API atau bukan (menggunakan JWT)? Kalau bukan, maka kembalikan error Unauthorized(401).

## Catatan Tambahan
- Diperbolehkan menambahkan fitur fitur tambahan lain di luar detail tugas
- Diperbolehkan menggunakan database SQL mauapun NoSQL
- Diperbolehkan menggunakan ORM atau framework lain selain contoh di repository ini (repository ini menggunakan express dan native mysql tanpa ORM)

> ## Contoh 📝
> Misalnya mau membuat API CRUD sederhana terdiri dari 2 entity **Film** dan **Pemain** yang memiliki relasi m:n (many to many), maka tabel yang diperlukan adalah:
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
> 4. film_pemain_links (Untuk menampung relasi m:n diperlukan *junction table* atau tabel > tambahan), dengan kolom: 
>    1. id; type bigint, primary key, auto increment,
>    2. film_id; int, fk ke film(id),
>    3. pemain_id; int, fk ke pemain(id)
> 
> Maka, perlu dibuat login authentication admin serta CRUD untuk film dan pemain. Proses CUD (Create, Update, dan Delete) pada 2 entity memerlukan token JWT yang didapat setelah admin login.

---
## Penilaian Tambahan
- Melakukan deployment. Contohnya pakai Render (https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)
- Membuat error handling sendiri pakai class ataupun middleware
- Menggunakan proses enkripsi password (bcrypt, argon2, dsb.)
- API Read data pemain atau film mengembalikan data join relasinya, misal:
  - Ketika Get Film by id 1, maka juga akan mengembalikan data para pemainnya
    <details>
      <summary>Klik buat liat datanya</summary>

      ```
	  
      {
      	"judul_film": "Gundala",
      	"rating": 5,
      	"pemain": [
      		{
      			"id": 1,
                "nama": "Abimana Aryasatya",
      			"rating": 5
      		},
      		{
      			"id": 2,
                "nama": "Pevita Pearce",
      			"rating": 5
      		},
      		{
      			"id": 3,
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
      	"film": [
      		{
      			"id": 1,
                "judul_film": "Gundala",
      			"rating": 5
      		}
      	]
      }
      
      ```

    </details>

<!-- ## Cara Ngumpulin
1. Jangan lupa commit file kalian ([git cmd](#git-commands) poin 2)
2. Push branch kalian ke remote ([git cmd](#git-commands) poin 9)
3. Presentasi tanggal 2 Juli
4. Kelar deh 🤟 -->

## Link tutorial atau Resource lain yang bisa Dipelajari
- Contoh FP 2021 menggunakan MongoDB https://github.com/abimnyud/fp-android
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