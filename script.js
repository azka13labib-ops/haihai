// DATA VIDEO
const videoDB = [
  'Maling Dibakar Hidup Hidup Oleh Warga',
  'Gadis dilecehkan saat sholat di Masjid',
  'Ledakan Di Masjid SMAN 72 - Video 1',
  'Ledakan Di Masjid SMAN 72 - Video 2',
  'Pedagang Siomay Diajak Wanita WKWK dikasih 30ribu',
  'Karena Asmara, Dua Pria Menjadi Korban Penusukan - Part 1',
  'Karena Asmara, Dua Pria Menjadi Korban Penusukan - Part 2',
  'Karena Asmara, Dua Pria Menjadi Korban Penusukan - Part 3',
  'Mobil MBG Tabrak Sejumlah Siswa di SDN Kalibaru 01 - Part 1',
  'Mobil MBG Tabrak Sejumlah Siswa di SDN Kalibaru 01 - Part 2',
  'Debt Collector Meninggal Dunia Setelah Dikeroyok',
  'Viral! Aksi Heroik Polisi Tangkap Begal',
  'Detik-detik Banjir Bandang Terjang Pemukiman',
  'Tawuran Antar Pelajar SMK di Jakarta Timur',
  'Penemuan Benda Aneh di Langit Gegerkan Warga',
  'Aksi Kocak Kucing Oren Ganggu Orang Sholat',
  'Tutorial Masak Nasi Goreng Abang-Abang Viral',
  'Review Jujur Makanan Pedas Level 100',
  'Kecelakaan Beruntun di Tol Cipularang',
  'Kebakaran Hebat Melanda Pasar Tradisional',
  'Pencuri Kotak Amal Masjid Terekam CCTV',
  'Seorang Ibu Melahirkan di Dalam Taksi Online',
  'Anak Kecil Nyanyi Lagu Dangdut Bikin Gemes',
  'Prank Ojol Dapat Tip 1 Juta Rupiah',
  'Eksperimen Sosial: Menjatuhkan Dompet di Mall',
  'Tips Menghasilkan Uang dari Internet 2025',
  'Cara Edit Video Jedag Jedug di CapCut',
  'Bocah Free Fire Top Up 5 Juta Pakai Uang Ortu',
  'Drama Korea Terbaru yang Wajib Ditonton',
  'Highlights Pertandingan Bola Tadi Malam',
  'Resep Kue Lebaran Tanpa Oven',
  'Cara Memperbaiki HP yang Masuk Air',
  'Unboxing iPhone 16 Pro Max HDC',
];

// Elements Selection
const menu = document.getElementById('dropdown-menu');
const arrow = document.getElementById('arrow-icon');
const listContainer = document.getElementById('list-container');
const searchInput = document.getElementById('search-input');
const triggerText = document.getElementById('trigger-text');
const countDisplay = document.getElementById('count-display');

// Player Elements
const mainTitle = document.getElementById('main-title');
const mainThumb = document.getElementById('player-thumbnail');
const viewsDisplay = document.getElementById('views-display');

let isOpen = false;

// FUNGSI RENDER
function renderList(filter = '') {
  listContainer.innerHTML = '';

  const filtered = videoDB.filter((t) =>
    t.toLowerCase().includes(filter.toLowerCase())
  );
  countDisplay.innerText = `${filtered.length} Video Tersedia`;

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding:16px; text-align:center; color:#666; font-size:12px;">Tidak ditemukan</div>`;
    return;
  }

  filtered.forEach((title, idx) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.onclick = () => selectVideo(title);

    item.innerHTML = `
                    <span class="item-number">${idx + 1}.</span>
                    <span class="item-title">${title}</span>
                `;

    listContainer.appendChild(item);
  });
}

// TOGGLE LOGIC
function toggleDropdown() {
  isOpen = !isOpen;
  if (isOpen) {
    menu.classList.remove('hidden');
    arrow.classList.add('rotate');
    setTimeout(() => searchInput.focus(), 100);
  } else {
    menu.classList.add('hidden');
    arrow.classList.remove('rotate');
  }
}

// SELECT VIDEO
function selectVideo(title) {
  triggerText.innerText = title;
  triggerText.style.color = '#3b82f6'; // Blue accent color

  mainTitle.innerText = title;
  viewsDisplay.innerText = (Math.random() * 500 + 10).toFixed(1) + 'K';

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  mainThumb.src = `https://via.placeholder.com/640x360/${randomColor}/ffffff?text=PLAYING`;

  toggleDropdown();
}

// LISTENERS
searchInput.addEventListener('input', (e) => renderList(e.target.value));

// Close when clicking outside
document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.dropdown-wrapper');
  if (!wrapper.contains(e.target)) {
    if (isOpen) toggleDropdown();
  }
});

// Init
renderList();
