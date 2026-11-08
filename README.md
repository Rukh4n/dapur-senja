# Dapur Senja – Template Katalog Kafe (React + Vite)

Animasi (muncul saat scroll, hover kartu, geser slider, tombol, denyut tombol chat) memakai utilitas Tailwind CSS. Sisa gaya tetap di `src/index.css`.

## Menjalankan
    npm install
    npm run dev        # buka alamat yang muncul (biasanya http://localhost:5173)
    npm run build      # hasil jadi ada di folder dist

## Mengganti isi untuk usaha lain
- Semua teks, harga, warna, nomor WhatsApp, dan daftar menu ada di `src/config.json`.
- Foto ada di `public/images/`. Ganti file dengan nama yang sama, atau tambah foto baru lalu tulis namanya di `config.json`.
- Warna utama: ubah `warna`. Ukuran teks dasar: ubah `ukuranTeks`.
- Ikon kategori yang tersedia: kopi, pasta, burger, don, camilan, sosis (ada di `src/components/Icons.jsx`).

## Hosting (Netlify, Vercel, GitHub Pages)
- Build command: `npm run build`
- Folder yang dipublikasikan: `dist`

Catatan: foto contoh berasal dari Pixabay. Cek lisensinya dan ganti dengan foto asli klien sebelum dipakai untuk proyek sungguhan.
