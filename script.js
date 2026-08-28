const WA_NUMBER = "62881023541340";

// ---- Diagnosa cepat: gejala -> layanan yang relevan ----
const symptoms = [
  { label: "Susah distarter / mogok", service: "Diagnostik mesin mobil", desc: "Biasanya perlu dicek dulu sumber masalahnya sebelum ditentukan perbaikannya." },
  { label: "Oli belum diganti lama", service: "Penggantian oli", desc: "Servis rutin, sebaiknya jangan ditunda supaya mesin awet." },
  { label: "Rem bunyi / kurang pakem", service: "Perbaikan rem", desc: "Bagian keselamatan, sebaiknya segera dicek." },
  { label: "Setir berat / mobil limbung", service: "Reparasi suspensi & setir", desc: "Bisa dari kaki-kaki atau sistem kemudi, perlu dicek langsung." },
  { label: "Wiper sudah getas/berbunyi", service: "Pemasangan wiper blade", desc: "Penggantian karet wiper, servis cepat." },
  { label: "Mesin brebet / tidak stabil", service: "Pembersihan karburator", desc: "Bisa juga terkait penyetelan mesin, dicek dulu saat datang." },
  { label: "Aki lemah / soak", service: "Penggantian baterai/aki", desc: "Dicek dulu apakah akinya masih bisa diselamatkan atau perlu ganti." },
  { label: "Ada rembesan air di mesin", service: "Reparasi kebocoran air", desc: "Perlu dicek sumber kebocorannya sebelum diperbaiki." },
  { label: "Knalpot berisik / bocor", service: "Sistem pembuangan", desc: "Servis knalpot dan sistem pembuangan." },
  { label: "Mau perpanjang STNK", service: "Uji emisi mobil", desc: "Layanan uji emisi untuk kelengkapan perpanjangan STNK." },
];

const grid = document.getElementById('symptomGrid');
const resultBox = document.getElementById('diagnosaResult');
const drService = document.getElementById('drService');
const drDesc = document.getElementById('drDesc');
const drChat = document.getElementById('drChat');

if (grid) {
  symptoms.forEach((s) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'symptom-btn';
    btn.textContent = s.label;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.symptom-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      drService.textContent = s.service;
      drDesc.textContent = s.desc;
      const text = `Halo Setia Motor, mobil saya ada keluhan: ${s.label}. Kira-kira perlu ${s.service} ya?`;
      drChat.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      resultBox.hidden = false;
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    grid.appendChild(btn);
  });
}

// ---- Booking form -> pesan WhatsApp ----
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bkName').value.trim();
    const phone = document.getElementById('bkPhone').value.trim();
    const car = document.getElementById('bkCar').value.trim();
    const service = document.getElementById('bkService').value;
    const date = document.getElementById('bkDate').value;
    const note = document.getElementById('bkNote').value.trim();

    let lines = [
      `Halo Setia Motor, saya mau booking servis:`,
      `Nama: ${name}`,
      `No. HP: ${phone}`,
      `Mobil: ${car}`,
      `Layanan: ${service}`,
    ];
    if (date) lines.push(`Rencana tanggal: ${date}`);
    if (note) lines.push(`Keluhan tambahan: ${note}`);

    const text = lines.join('\n');
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
