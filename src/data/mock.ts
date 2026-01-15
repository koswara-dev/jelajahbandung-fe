export const CATEGORIES = [
  { id: 1, title: "Nature", count: "125 Destinasi", img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716" },
  { id: 2, title: "Culinary", count: "80+ Resto", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
  { id: 3, title: "Heritage", count: "45 Museum", img: "https://images.unsplash.com/photo-1596401057633-565652ca65a0" },
  { id: 4, title: "Art & Design", count: "20 Galeri", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd" },
];

export const DESTINATIONS = [
  { 
    id: 1,
    title: "Kawah Putih Ciwidey", 
    location: "Ciwidey, Kabupaten Bandung", 
    rating: 4.9, 
    reviewCount: "2.4k",
    price: "Rp 30.000",
    priceRange: "IDR 30k - 80k",
    image: "https://images.unsplash.com/photo-1684189930003-9434c949925f?q=80&w=870&auto=format&fit=crop",
    category: "ALAM",
    description: "Kawah Putih adalah sebuah danau kawah vulkanik yang terletak di kaki Gunung Patuha, Ciwidey. Terbentuk dari letusan gunung pada abad ke-10, kawah ini menawarkan pemandangan surrealis dengan air berwarna putih kehijauan yang kontras dengan pasir putih di tepiannya.\n\nKandungan belerang yang tinggi membuat warna air kawah ini sering berubah-ubah sesuai dengan suhu, cuaca, dan kadar sulfur di dalamnya. Dikelilingi oleh hutan pegunungan yang asri, udara di sini sangat sejuk namun aromanya cukup menyengat.",
    gallery: [
       "https://images.unsplash.com/photo-1684189930003-9434c949925f?q=80&w=870&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1695257529230-ddb228af69a5?w=500&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1610096992765-85ea39e5e2d1?q=80&w=774&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1684189930003-9434c949925f?q=80&w=870&auto=format&fit=crop"
    ],
    facilities: ["Parkir Luas", "Musholla", "Toilet Bersih", "Food Court", "Shuttle Car", "Spot Foto"],
    operatingHours: "07:00 - 17:00",
    address: "Sugihmukti, Pasirjambu, Ciwidey, Kabupaten Bandung, Jawa Barat 40972. Sekitar 2 jam perjalanan dari pusat Kota Bandung.",
    coordinates: { lat: -7.1864715, lng: 107.4241606 } // Updated as requested
  },
  { 
    id: 2,
    title: "Jalan Braga", 
    location: "Pusat Kota, Bandung", 
    rating: 4.7, 
    reviewCount: "1.8k",
    price: "Gratis",
    priceRange: "Gratis",
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa",
    category: "SEJARAH",
    description: "Jalan Braga adalah jalan utama di Bandung yang terkenal sejak masa kolonial Hindia Belanda. Jalan ini cukup dikenal sebagai Paris van Java karena suasananya yang mirip dengan kota-kota di Eropa.",
    gallery: [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
    ],
    facilities: ["Kafe", "Restoran", "Trotoar Lebar", "Spot Foto", "Toko Souvenir"],
    operatingHours: "24 Jam",
    address: "Jl. Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat",
    coordinates: { lat: -6.9175, lng: 107.6096 }
  },
  { 
    id: 3,
    title: "Sudirman Night Market", 
    location: "Jalan Sudirman, Bandung", 
    rating: 4.8, 
    reviewCount: "850",
    price: "Gratis",
    priceRange: "Gratis (Beli Makanan Bayar)",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    category: "KULINER",
    description: "Surga kuliner malam di Bandung yang menyajikan berbagai macam makanan jalanan, mulai dari makanan tradisional hingga makanan kekinian.",
    gallery: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      "https://images.unsplash.com/photo-1514525253440-b393452e8d26"
    ],
    facilities: ["Area Makan", "Toilet", "Parkir"],
    operatingHours: "18:00 - 23:00",
    address: "Jl. Jend. Sudirman, Bandung",
    coordinates: { lat: -6.9189, lng: 107.6048 }
  },
  { 
    id: 4,
    title: "Orchid Forest Cikole", 
    location: "Lembang, Bandung Barat", 
    rating: 4.9, 
    reviewCount: "3.2k",
    price: "Rp 40.000",
    priceRange: "IDR 40k - 100k",
    image: "https://images.unsplash.com/photo-1542300058-b94b8ab7411b",
    category: "ALAM",
    description: "Taman wisata hutan pinus yang menawarkan keindahan alam dan koleksi anggrek yang beragam. Tempat ini juga memiliki jembatan gantung yang instagramable.",
    gallery: [
      "https://images.unsplash.com/photo-1542300058-b94b8ab7411b",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
    ],
    facilities: ["Area Parkir", "Toilet", "Musholla", "Kafe", "Playground"],
    operatingHours: "09:00 - 18:00",
    address: "Genteng, Cikole, Lembang, Kabupaten Bandung Barat, Jawa Barat 40391",
    coordinates: { lat: -6.7803, lng: 107.6371 }
  },
  { 
    id: 5,
    title: "Gedung Sate", 
    location: "Bandung Wetan", 
    rating: 4.8, 
    reviewCount: "5k+",
    price: "Rp 5.000",
    priceRange: "IDR 5k",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", // placeholder
    category: "SEJARAH",
    description: "Gedung Sate adalah bangunan bersejarah yang menjadi pusat pemerintahan Provinsi Jawa Barat. Gedung ini memiliki ciri khas ornamen tusuk sate di menaranya.",
    gallery: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272",
      "https://images.unsplash.com/photo-1596401057633-565652ca65a0"
    ],
    facilities: ["Museum", "Taman", "Parkir", "Toilet"],
    operatingHours: "08:00 - 16:00 (Museum)",
    address: "Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
    coordinates: { lat: -6.9025, lng: 107.6188 }
  }
];

export const EVENTS = [
  {
    id: 1,
    title: "Bandung Jazz Festival",
    date: "2024-10-15",
    months: "OKT",
    days: "15",
    location: "Tebing Keraton",
    image: "https://images.unsplash.com/photo-1564901236182-daaec707fbf3",
    price: "Rp 150.000",
    category: "Musik",
    description: "Bandung Jazz Festival kembali hadir dengan nuansa alam yang memukau di Tebing Keraton. Nikmati alunan musik jazz dari musisi lokal dan internasional dengan latar belakang pemandangan kota Bandung dari ketinggian.",
    time: "15:00 - 22:00",
    highlights: [
      { time: "15:00", title: "Open Gate", desc: "Registrasi ulang dan penukaran tiket" },
      { time: "16:30", title: "Sunset Jazz Session", desc: "Penampilan pembuka saat matahari terbenam" },
      { time: "19:00", title: "Main Performance", desc: "Penampilan utama dari bintang tamu internasional" }
    ],
    speakers: [
      { name: "Indra Lesmana", role: "Musisi Jazz", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indra" },
      { name: "Andien", role: "Penyanyi", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andien" }
    ],
    tickets: [
      { type: "Regular", desc: "Akses area festival", price: "Rp 150k" },
      { type: "VIP", desc: "Akses area depan panggung + F&B", price: "Rp 350k", popular: true }
    ],
    importantInfo: [
      "Membawa jaket tebal karena udara dingin",
      "Dilarang membawa makanan dan minuman dari luar",
      "Tersedia shuttle bus dari Dago Pakar"
    ],
    coordinates: { lat: -6.8339, lng: 107.6636 }
  },
  {
    id: 2,
    title: "Asia Africa Carnival",
    date: "2024-11-10",
    months: "NOV",
    days: "10",
    location: "Jalan Asia Afrika",
    image: "https://images.unsplash.com/photo-1637686730791-dfffc79e6cb1",
    price: "Gratis",
    category: "Budaya",
    description: "Karnaval budaya terbesar di Bandung untuk memperingati Konferensi Asia Afrika. Saksikan parade kostum, pertunjukan seni, dan kuliner dari berbagai negara Asia dan Afrika.",
    time: "08:00 - 17:00",
    highlights: [
      { time: "08:00", title: "Parade Pembukaan", desc: "Start dari Gedung Merdeka" },
      { time: "10:00", title: "Cultural Show", desc: "Pertunjukan seni dari delegasi negara sahabat" },
      { time: "13:00", title: "Grand Carnival", desc: "Parade kostum megah di sepanjang Jalan Asia Afrika" }
    ],
    speakers: [],
    tickets: [
      { type: "Umum", desc: "Akses area trotoar", price: "Gratis" },
      { type: "Tribun", desc: "Tempat duduk di panggung utama", price: "Rp 50k", popular: true }
    ],
    importantInfo: [
      "Jalan Asia Afrika ditutup total untuk kendaraan",
      "Gunakan transportasi umum",
      "Jagalah kebersihan area karnaval"
    ],
    coordinates: { lat: -6.9213, lng: 107.6074 }
  },
  {
    id: 3,
    title: "Culinary Night",
    date: "2024-10-20",
    months: "OKT",
    days: "20",
    location: "Cibadak Street",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    price: "Gratis",
    category: "Kuliner",
    description: "Surga kuliner malam di Bandung! Nikmati ratusan jenis makanan legendaris dan kekinian di sepanjang jalan Cibadak. Wajib dikunjungi bagi pecinta kuliner.",
    time: "18:00 - 23:00",
    highlights: [
      { time: "18:00", title: "Opening", desc: "Tenant makanan mulai buka" },
      { time: "19:00", title: "Live Acoustic", desc: "Iringan musik akustik sepanjang jalan" },
      { time: "20:00", title: "Food Challenge", desc: "Lomba makan pedas berhadiah menarik" }
    ],
    speakers: [],
    tickets: [
      { type: "Masuk", desc: "Tiket masuk area", price: "Gratis" }
    ],
    importantInfo: [
      "Pembayaran non-tunai (QRIS) tersedia di semua tenant",
      "Parkir terbatas, disarankan menggunakan ojek online",
      "Datang lebih awal untuk menghindari antrian panjang"
    ],
    coordinates: { lat: -6.9197, lng: 107.5969 }
  }
];
