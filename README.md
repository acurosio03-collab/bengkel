# Setia Motor — Website Bengkel

Landing page untuk bengkel mobil "Setia Motor" di Cirebon, dibangun dari
data & foto asli listing Google Maps-nya (rating 4,8 dari 40 ulasan) —
bukan template generik.

## Yang dipakai, semuanya data asli
- Nama, alamat, jam tutup, rating, dan 15 layanan &mdash; dari listing
  Google Maps yang kamu kirim.
- Nomor telepon/WhatsApp: `0881-0235-41340` (dipakai sebagai
  `wa.me/62881023541340` di tombol WhatsApp).
- 3 kutipan ulasan asli Google Maps (bukan karangan).
- 3 foto suasana bengkel asli (ruang servis, antrian mobil, pintu masuk)
  dari file yang kamu upload.

## Perlu dicek/diganti
1. Nomor WhatsApp di atas hasil konversi otomatis dari nomor telepon —
   pastikan itu memang nomor WhatsApp aktif bengkelnya.
2. Jam buka: yang aku tahu cuma jam tutup (16.30) dari listing Maps, jam
   buka & hari operasional tidak aku karang &mdash; isi manual di
   `index.html` bagian `.hero-status` dan section Lokasi kalau mau
   ditampilkan.
3. Ada foto promo (`assets/setia-motor-promo.jpg`, banner "Tune Up
   Gratis") yang **belum dipasang** ke halaman karena isi promo biasanya
   berubah-ubah dan bisa jadi sudah tidak berlaku &mdash; pasang manual
   kalau promonya masih aktif.
4. Link "Lihat rute di Maps" masih pakai pencarian nama+alamat, ganti
   dengan link Google Maps lokasi persis kalau sudah ada.
