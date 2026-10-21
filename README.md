# Sahabat Hafalan

Website pendamping hafalan Al-Qur'an (HTML, CSS, JavaScript, Local Storage).

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub (mis. `sahabat-hafalan`), set Public.
2. Upload `index.html`, `style.css`, `app.js` ke root repository.
3. Buka Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`, lalu Save.
4. Tunggu 1-2 menit. Alamat: `https://USERNAME.github.io/sahabat-hafalan/`

## Sumber data
Teks Arab, terjemahan, dan bacaan Latin dimuat dari api.alquran.cloud. Jika offline, 6 surat pendek cadangan tersedia.

## Login pengguna
Akun dibuat di browser (Local Storage): nama pengguna + kata sandi (di-hash PBKDF2), progres disimpan per akun.
Karena GitHub Pages hanya hosting statis (tanpa server), akun hanya berlaku di browser dan alamat website yang sama.
Untuk login lintas perangkat, perlu backend seperti Firebase Auth atau Supabase.
