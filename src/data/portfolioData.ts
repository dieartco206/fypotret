export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'prewedding' | 'graduation' | 'birthday' | 'event';
  categoryLabel: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  location: string;
  client: string;
  description: string;
  instagramUrl?: string;
}

export interface PricingPackage {
  id: string;
  category: 'wedding' | 'prewedding' | 'graduation' | 'birthday';
  title: string;
  tagline: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  duration: string;
  deliverables: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const CATEGORIES = [
  { id: 'all', label: 'Semua Karya', icon: 'Sparkles' },
  { id: 'graduation', label: 'Wisuda (Graduation)', icon: 'GraduationCap' },
  { id: 'wedding', label: 'Wedding & Akad', icon: 'Heart' },
  { id: 'prewedding', label: 'Lamaran & Prewed', icon: 'Camera' },
  { id: 'birthday', label: 'Kids & Birthday', icon: 'Cake' },
  { id: 'event', label: 'Dokumentasi Event', icon: 'Users' },
] as const;

export const HIGHLIGHT_STORIES = [
  {
    id: 'graduation',
    title: 'Wisuda',
    subtitle: 'Graduation Squad',
    iconName: 'GraduationCap',
    count: '200+ Wisudawan',
    image: '/portfolio/p4_DbOWBkKE80l.jpg',
  },
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Akad & Pelaminan',
    iconName: 'Ring',
    count: '150+ Momen',
    image: '/portfolio/p7_DbVM3ScFJoX.jpg',
  },
  {
    id: 'prewedding',
    title: 'Lamaran',
    subtitle: 'Bella & Luthfy',
    iconName: 'Film',
    count: '90+ Pasangan',
    image: '/portfolio/p11_DbmsYCQkysa.jpg',
  },
  {
    id: 'birthday',
    title: 'Birthday & Kids',
    subtitle: 'Ceria & Hangat',
    iconName: 'Smile',
    count: '80+ Pesta',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'event',
    title: 'Event & Sport',
    subtitle: 'PLN & Turnamen',
    iconName: 'Award',
    count: '50+ Event',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Wisuda - Ch Lailonas, S.Ak Family
  {
    id: 'ig-1',
    title: 'Selebrasi Wisuda Bersama Keluarga Tercinta',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p1_DbOVpy9kzB1.jpg',
    aspect: 'tall',
    location: 'Jakarta Convention Center',
    client: 'Ch Lailonas, S.Ak',
    description: 'Momen penuh kebanggaan bersama ibunda dan keluarga saat prosesi wisuda dengan balutan kebaya biru elegan.',
    instagramUrl: 'https://www.instagram.com/p/DbOVpy9kzB1/',
  },

  // 2. Wisuda - Lailonas Glow
  {
    id: 'ig-2',
    title: 'Glow & Senyum Bahagia Sarjana Baru',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p2_DbOVvb6E70Q.jpg',
    aspect: 'tall',
    location: 'Gedung Wisuda Jakarta',
    client: 'Wisudawati Lailonas',
    description: 'Potret senyum anggun wisudawati dengan latar belakang bunga selebrasi kelulusan.',
    instagramUrl: 'https://www.instagram.com/p/DbOVvb6E70Q/',
  },

  // 3. Wisuda - Pelukan Ibu
  {
    id: 'ig-3',
    title: 'Pelukan Haru & Bangga Ibu Tercinta',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p3_DbOV1UJk41A.jpg',
    aspect: 'tall',
    location: 'Lobi Wisuda Jakarta',
    client: 'Ibu & Wisudawati',
    description: 'Ekspresi cinta tulus dan pelukan hangat seorang ibu mendampingi putrinya meraih gelar sarjana.',
    instagramUrl: 'https://www.instagram.com/p/DbOV1UJk41A/',
  },

  // 4. Wisuda - Dynamic Fashion 05mm Look
  {
    id: 'ig-4',
    title: 'Dynamic & Fashion Graduation Outdoor',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p4_DbOWBkKE80l.jpg',
    aspect: 'tall',
    location: 'Stadion Outdoor Jakarta',
    client: 'Wisudawati Sarah',
    description: 'Pose dinamis modern dengan angle lebar (05mm look) memperlihatkan keanggunan jubah toga di lapangan terbuka.',
    instagramUrl: 'https://www.instagram.com/p/DbOWBkKE80l/',
  },

  // 5. Wisuda - Restu Kedua Orang Tua
  {
    id: 'ig-5',
    title: 'Restu & Bangga Kedua Orang Tua',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p5_DbOWOPjE9jN.jpg',
    aspect: 'tall',
    location: 'Rooftop Wisuda Senayan',
    client: 'Keluarga Besar Sarah',
    description: 'Sentuhan tangan ayah di pundak putrinya dengan tatapan bangga dan senyum teduh sang ibu.',
    instagramUrl: 'https://www.instagram.com/p/DbOWOPjE9jN/',
  },

  // 6. Wisuda - Rooftop Skyline
  {
    id: 'ig-6',
    title: 'Golden Hour Rooftop Sky Portrait',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p6_DbOWVZSk3Xz.jpg',
    aspect: 'tall',
    location: 'Jakarta Skyline Rooftop',
    client: 'Wisudawati Glamour',
    description: 'Potret glamor wisudawati berbalut kebaya merah marun di bawah langit biru kota Jakarta.',
    instagramUrl: 'https://www.instagram.com/p/DbOWVZSk3Xz/',
  },

  // 7. Wedding - Dian & Rizky
  {
    id: 'ig-7',
    title: 'Kehangatan Cinta & Senyum Pengantin Baru',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/portfolio/p7_DbVM3ScFJoX.jpg',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Dian & Rizky',
    description: 'Potret intim pengantin berbusana adat kuning emas dengan buket bunga mawar merekah.',
    instagramUrl: 'https://www.instagram.com/p/DbVM3ScFJoX/',
  },

  // 8. Wedding - Dian Mahkota Emas
  {
    id: 'ig-8',
    title: 'Potret Anggun Mahkota & Kebaya Emas',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/portfolio/p8_DbVNIwIFLbn.jpg',
    aspect: 'tall',
    location: 'Gedung Pernikahan Tangerang',
    client: 'Pengantin Wanita Dian',
    description: 'Detail keindahan rias pengantin, mahkota tiara, dan busana berpayet emas elegan.',
    instagramUrl: 'https://www.instagram.com/p/DbVNIwIFLbn/',
  },

  // 9. Wedding - Dian & Rizky Pelaminan
  {
    id: 'ig-9',
    title: 'Pelaminan Sakral Penuh Bunga & Doa',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/portfolio/p9_DbVNZCJFIJL.jpg',
    aspect: 'tall',
    location: 'Pelaminan Tradisional Modern',
    client: 'Dian & Rizky',
    description: 'Momen duduk bersanding di pelaminan indah disaksikan seluruh keluarga dan sahabat.',
    instagramUrl: 'https://www.instagram.com/p/DbVNZCJFIJL/',
  },

  // 10. Lamaran - Bella & Luthfy Surprise
  {
    id: 'ig-10',
    title: 'Kejutan Manis & Air Mata Bahagia Lamaran',
    category: 'prewedding',
    categoryLabel: 'Lamaran',
    image: '/portfolio/p10_Dbmrw6cE4Kj.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Bella & Luthfy',
    description: 'Ekspresi spontan haru dan tawa bahagia calon mempelai wanita saat menerima kejutan lamaran.',
    instagramUrl: 'https://www.instagram.com/p/Dbmrw6cE4Kj/',
  },

  // 11. Lamaran - Bella & Luthfy Serasi
  {
    id: 'ig-11',
    title: 'Serasi Berbalut Batik Pink di Pelaminan Lamaran',
    category: 'prewedding',
    categoryLabel: 'Lamaran',
    image: '/portfolio/p11_DbmsYCQkysa.jpg',
    aspect: 'tall',
    location: 'Lamaran Intimate Tangerang',
    client: 'Bella & Luthfy',
    description: 'Pasangan serasi saling membelakangi dan tersenyum dengan busana senada bernuansa dusty pink.',
    instagramUrl: 'https://www.instagram.com/p/DbmsYCQkysa/',
  },

  // 12. Lamaran - Bella & Luthfy Sambutan
  {
    id: 'ig-12',
    title: 'Momen Ungkapan Rasa & Buket Bunga Bahagia',
    category: 'prewedding',
    categoryLabel: 'Lamaran',
    image: '/portfolio/p12_Dbmsw-4kzOJ.jpg',
    aspect: 'tall',
    location: 'Engagement Ceremony Tangerang',
    client: 'Bella & Luthfy',
    description: 'Sesi penyampaian pesan cinta dan penyerahan buket bunga di hadapan keluarga kedua belah pihak.',
    instagramUrl: 'https://www.instagram.com/p/Dbmsw-4kzOJ/',
  },

  // Kategori Tambahan: Kids & Birthday
  {
    id: 'b-1',
    title: '1st Birthday: Senyum Ceria Nayra',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85',
    aspect: 'square',
    location: 'BSD City, Tangerang',
    client: 'Baby Nayra',
    description: 'Koleksi tawa menggemaskan saat pesta ulang tahun pertama dengan tema dekorasi penuh warna ceria.',
  },
  {
    id: 'b-2',
    title: 'Newborn Warmth & Little Miracle',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=85',
    aspect: 'square',
    location: 'Depok Studio',
    client: 'Baby Kalandra',
    description: 'Potret lembut si kecil di usia 14 hari dalam balutan kain lembut yang aman & nyaman.',
  },

  // Kategori Tambahan: Dokumentasi Event & Sport
  {
    id: 'e-1',
    title: 'Dokumentasi Turnamen & Selebrasi Tim',
    category: 'event',
    categoryLabel: 'Event & Sport',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85',
    aspect: 'wide',
    location: 'GOR Jakarta',
    client: 'Turnamen Futsal / PLN Event',
    description: 'Aksi dinamis kecepatan tinggi saat selebrasi kemenangan dan penyerahan piala tim.',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'grad-essential',
    category: 'graduation',
    title: 'Graduation Single / Duo',
    tagline: 'Sempurna untuk wisudawan individu atau bersama pasangan tercinta',
    price: 'Rp 650.000',
    duration: '2 Jam Sesi Foto (Outdoor / Kampus)',
    deliverables: 'Semua file asli (Drive) + 25 Foto Best Edited (Color Tone FYPotret)',
    features: [
      'Bebas ganti baju / pose bersama keluarga',
      'Pengarahan pose sabar & ramah (anti kaku)',
      'Preview cepat via Google Drive (H+1)',
      'High-Resolution siap cetak besar',
      'Cover area: Jabodetabek (Tangerang, Depok, JKT)',
    ],
  },
  {
    id: 'grad-squad',
    category: 'graduation',
    title: 'Graduation Group Squad',
    tagline: 'Paling favorit! Abadikan selebrasi bareng circle dan geng kuliah terbaik',
    price: 'Rp 1.100.000',
    isPopular: true,
    duration: '3 Jam Sesi Foto Fleksibel',
    deliverables: 'Semua Raw File + 50 Foto Best Edited + Cetak 10R Frame Eksklusif',
    features: [
      'Maksimal 6 - 8 orang wisudawan',
      'Foto individu masing-masing wisudawan didapat',
      'Foto grup variatif (serius, seru, candid)',
      'Lighting portable bila cuaca mendung',
      'Bonus 1x Cetak Foto Bingkai Gold 10R',
    ],
  },
  {
    id: 'wedding-intimate',
    category: 'wedding',
    title: 'Akad Nikah / Intimate Wedding',
    tagline: 'Fokus mendokumentasikan setiap detil sakral ijab qabul dan haru keluarga',
    price: 'Rp 1.850.000',
    duration: 'Up to 5 Jam Liputan Acara',
    deliverables: '1 Fotografer Senior + All High-Res Files + 60 Edited Photos',
    features: [
      'Dokumentasi persiapan rias, prosesi akad, sungkeman',
      'Sesi potret berdua dengan mahar & buku nikah',
      'Foto bersama keluarga & tamu undangan',
      'Flashdisk Kayu Eksklusif + Box Kayu FYPotret',
      'Google Drive cloud backup selama 6 bulan',
    ],
  },
  {
    id: 'wedding-complete',
    category: 'wedding',
    title: 'Full Day Akad & Resepsi',
    tagline: 'Paket terlengkap tanpa rasa cemas, dari fajar hingga pesta resepsi usai',
    price: 'Rp 3.400.000',
    isPopular: true,
    duration: 'Up to 10 Jam Liputan Lengkap',
    deliverables: '2 Fotografer + All Raw + 120 Best Edited + Mini Album Kolase',
    features: [
      'Coverage 2 fotografer (Angle akad & candid ekspresi)',
      'Cetak Album Kolase Magazine 20 Halaman',
      '2x Cetak Pembesaran 16RP + Bingkai Minimalis',
      'Flashdisk 32GB Custom Grafir Nama Pasangan',
      'Konsultasi rundown & moodboard pernikahan gratis',
    ],
  },
  {
    id: 'prewed-casual',
    category: 'prewedding',
    title: 'Prewedding / Lamaran Romantic Story',
    tagline: 'Dokumentasi momen lamaran intimate atau sesi prewedding outdoor',
    price: 'Rp 1.250.000',
    duration: '3 - 4 Jam Sesi Foto (1 - 2 Lokasi)',
    deliverables: 'All Raw Files + 30 Color Graded Photos + 1 Frame 12R',
    features: [
      'Bebas 2x ganti wardrobe',
      'Bantuan rekomendasi spot foto estetik',
      'Mood hangat & intimate khas tone FYPotret',
      'Free 1 Frame Minimalis siap dipajang di resepsi',
    ],
  },
  {
    id: 'birthday-kids',
    category: 'birthday',
    title: 'Birthday Party & Kids Celebration',
    tagline: 'Abadikan tawa polos si kecil dan kebersamaan keluarga yang tak terulang',
    price: 'Rp 750.000',
    duration: '2.5 Jam Liputan Pesta Ulang Tahun',
    deliverables: 'All Raw Files + 35 Edited Photos ceria & cerah',
    features: [
      'Dokumentasi tiup lilin, potong kue, & games seru',
      'Foto keluarga inti & teman-teman kecil',
      'Fotografer ramah anak & sabar',
      'File kilat selesai dalam 3-5 hari kerja',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dian & Rizky',
    role: 'Pengantin Akad & Pelaminan Tangerang',
    category: 'Wedding',
    avatar: '/portfolio/p7_DbVM3ScFJoX.jpg',
    quote: 'Mas fotografernya sabar banget dan asik pas ngarahin gaya! Awalnya kami berdua kaku banget depan kamera, tapi pas lihat hasilnya... MasyaAllah warna gold hangatnya dapet banget, persis yang kita mau.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Ch Lailonas, S.Ak',
    role: 'Wisudawati JCC Jakarta',
    category: 'Graduation',
    avatar: '/portfolio/p2_DbOVvb6E70Q.jpg',
    quote: 'Foto-fotonya bagus banget, tone warnanya bersih dan natural! Pengarahan posenya luwes banget jadi gak kelihatan canggung sama keluarga. Recommended banget buat temen-temen wisuda!',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Bella & Luthfy',
    role: 'Pasangan Lamaran Tangerang',
    category: 'Lamaran',
    avatar: '/portfolio/p11_DbmsYCQkysa.jpg',
    quote: 'Momen surprise lamaran kami terabadikan sempurna, ekspresi nangis haru dan ketawa candid semuanya dapet. Terima kasih banyak tim FYPotret!',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Sarah, S.Ked',
    role: 'Wisudawati Rooftop Senayan',
    category: 'Graduation',
    avatar: '/portfolio/p6_DbOWVZSk3Xz.jpg',
    quote: 'Suka banget sama konsep foto rooftop dan angle lebarnya. Banyak temen yang nanya di Instagram fotografernya siapa. Highly recommended!',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Berapa hari sebelum hari H sebaiknya kami melakukan booking?',
    a: 'Disarankan melakukan booking minimal 1-2 minggu sebelum hari H untuk wisuda/prewedding, dan 1-3 bulan sebelum hari H untuk acara pernikahan, guna memastikan ketersediaan tanggal fotografer.',
  },
  {
    q: 'Apakah bisa sesi foto di luar area Tangerang, Depok, dan Jakarta?',
    a: 'Tentu bisa! Kami siap melayani sesi foto di luar Jabodetabek (Bogor, Bekasi, Bandung, dll.) dengan penyesuaian biaya akomodasi/transport yang terjangkau.',
  },
  {
    q: 'Berapa lama proses editing dan penyerahan hasil foto?',
    a: 'Preview all raw files akan diberikan via Google Drive dalam 1-2 hari setelah sesi. Foto hasil editing terpilih akan selesai dalam 4-7 hari kerja.',
  },
  {
    q: 'Bagaimana cara pembayaran dan tanda jadi (DP)?',
    a: 'Cukup lakukan DP 30% untuk mengunci tanggal dan jam sesi foto Anda. Pelunasan dapat dilakukan pada hari H setelah sesi foto selesai.',
  },
];
