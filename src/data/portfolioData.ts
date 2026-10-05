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
  { id: 'all', label: 'Semua Karya', icon: 'Images' },
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
    image: '/portfolio/p34_DdbXbC5FDdp.jpg',
  },
  {
    id: 'event',
    title: 'Event & Sport',
    subtitle: 'PLN & Turnamen',
    iconName: 'Award',
    count: '50+ Event',
    image: '/portfolio/p26_Dcf0M6AFLdX.jpg',
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

  // 13. Wedding - Sungkeman Akad
  {
    id: 'ig-13',
    title: 'Sungkeman Penuh Haru & Restu Akad Nikah',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p13_Dbm_6vmEwfE.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Prosesi Akad Nikah',
    description: 'Momen sakral dan penuh haru memohon doa restu kepada orang tua sebelum melangkah ke lembaran baru pernikahan.',
    instagramUrl: 'https://www.instagram.com/p/Dbm_6vmEwfE/',
  },

  // 14. Wedding - Pamer Buku Nikah
  {
    id: 'ig-14',
    title: 'Momen Sah & Bahagia Pamer Buku Nikah',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p14_DbnAQxzk_XR.jpg',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Sepasang Pengantin Baru',
    description: 'Senyum lega dan sumringah kedua mempelai memperlihatkan buku nikah resmi sebagai tanda sah menjadi suami istri.',
    instagramUrl: 'https://www.instagram.com/p/DbnAQxzk_XR/',
  },

  // 15. Wedding - Pamer Cincin Kawin
  {
    id: 'ig-15',
    title: 'Pamer Cincin Pernikahan di Pelaminan',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p15_DbnAcriE8hH.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Pengantin Bahagia',
    description: 'Simbol ikatan cinta suci abadi, kilau cincin kawin di jari manis kedua mempelai yang saling tersenyum hangat.',
    instagramUrl: 'https://www.instagram.com/p/DbnAcriE8hH/',
  },

  // 16. Lamaran - Makeup Touch-Up
  {
    id: 'ig-16',
    title: 'Behind The Scenes: Riasan Cantik Lamaran',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p16_Db9v6fQzGta.jpg',
    aspect: 'tall',
    location: 'Jakarta Selatan',
    client: 'Calon Pengantin',
    description: 'Dokumentasi detail persiapan makeup calon mempelai wanita sebelum menyambut kedatangan keluarga besar.',
    instagramUrl: 'https://www.instagram.com/p/Db9v6fQzGta/',
  },

  // 17. Lamaran - Potret Kebaya Payet
  {
    id: 'ig-17',
    title: 'Anggun Dalam Balutan Kebaya Tunangan',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p17_Db9wHXEzixp.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Calon Mempelai Wanita',
    description: 'Kecantikan memikat dengan balutan kebaya brokat coklat bertabur payet elegan dan riasan lembut natural.',
    instagramUrl: 'https://www.instagram.com/p/Db9wHXEzixp/',
  },

  // 18. Lamaran - Say Good Bye / Cincin
  {
    id: 'ig-18',
    title: 'Our Journey Begins Here - Engagement Ring',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p18_Db9w6hPz_6r.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Sesi Pertunangan',
    description: 'Lambaian tangan manis memperlihatkan cincin lamaran dengan konsep editorial modern "A little moment, a lifetime promise".',
    instagramUrl: 'https://www.instagram.com/p/Db9w6hPz_6r/',
  },

  // 19. Prewedding - These Kids Are Getting Engaged
  {
    id: 'ig-19',
    title: 'Playful & Fun: These Kids Are Getting Engaged',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p19_Db9zP8ck52O.jpg',
    aspect: 'tall',
    location: 'Depok',
    client: 'Pasangan Ceria',
    description: 'Konsep foto pertunangan kekinian bertema youthful dengan pose menutup satu mata dan senyum lepas tanpa jaim.',
    instagramUrl: 'https://www.instagram.com/p/Db9zP8ck52O/',
  },

  // 20. Prewedding - Casual Basket Court Reels
  {
    id: 'ig-20',
    title: 'Casual & Romantic di Lapangan Basket',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p20_Db909O2TBA1.jpg',
    aspect: 'tall',
    location: 'Depok Outdoor',
    client: 'Pasangan Sporty Romantis',
    description: 'Sesi foto dan video reels prewedding santai di lapangan basket dengan outfit casual coklat & buket bunga cantik.',
    instagramUrl: 'https://www.instagram.com/reel/Db909O2TBA1/',
  },

  // 21. Prewedding - Framing Pagar Kawat
  {
    id: 'ig-21',
    title: 'Artistic Framing: Cincin di Balik Jaring',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p21_Db99wJ8kwty.jpg',
    aspect: 'tall',
    location: 'Depok',
    client: 'Pasangan Tunangan',
    description: 'Sudut pengambilan foto kreatif memanfaatkan tekstur pagar kawat lapangan untuk menonjolkan cincin pertunangan.',
    instagramUrl: 'https://www.instagram.com/p/Db99wJ8kwty/',
  },

  // 22. Wisuda - Bella Hendriani Sukma, S.M
  {
    id: 'ig-22',
    title: 'Wisuda Sarjana Manajemen: Bella Hendriani, S.M',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p22_DcOXUqBFA5w.jpg',
    aspect: 'tall',
    location: 'Kampus Jakarta',
    client: 'Bella Hendriani Sukma, S.M',
    description: 'Sorot kebahagiaan dan kebanggaan mengenakan selempang sarjana manajemen di bawah rindangnya pepohonan kampus.',
    instagramUrl: 'https://www.instagram.com/p/DcOXUqBFA5w/',
  },

  // 23. Wisuda - Silhouette & Campus View
  {
    id: 'ig-23',
    title: 'Editorial Silhouette & Campus Architecture',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p23_DcOXf-6J2wG.jpg',
    aspect: 'tall',
    location: 'Kampus Jakarta',
    client: 'Bella Hendriani Sukma, S.M',
    description: 'Pose siluet artistik dari belakang memperlihatkan detail bordir selempang kelulusan dan arsitektur gedung kampus.',
    instagramUrl: 'https://www.instagram.com/p/DcOXf-6J2wG/',
  },

  // 24. Wisuda - Playful Relaxed
  {
    id: 'ig-24',
    title: 'Playful Relief: Memeluk Ijazah Kelulusan',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p24_DcOX1ODFLNM.jpg',
    aspect: 'tall',
    location: 'Kampus Jakarta',
    client: 'Bella Hendriani Sukma, S.M',
    description: 'Ekspresi lega dan riang bersandar di pagar kampus memegang map ijazah setelah perjuangan bertahun-tahun kuliah.',
    instagramUrl: 'https://www.instagram.com/p/DcOX1ODFLNM/',
  },

  // 25. Event - Tim Futsal PLN Serpong
  {
    id: 'ig-25',
    title: 'Kompak & Semangat Juara: Tim PLN Serpong',
    category: 'event',
    categoryLabel: 'Dokumentasi Event',
    image: '/portfolio/p25_Dcfzob2lAZb.jpg',
    aspect: 'tall',
    location: 'Lapangan Olahraga Serpong',
    client: 'PLN Unit Layanan Serpong',
    description: 'Dokumentasi kebersamaan dan kekompakan tim futsal karyawan PLN Serpong dalam rangkaian turnamen kemerdekaan.',
    instagramUrl: 'https://www.instagram.com/p/Dcfzob2lAZb/',
  },

  // 26. Event - Trofi Bergilir Juara
  {
    id: 'ig-26',
    title: 'Kebanggaan Mengangkat Trofi Bergilir',
    category: 'event',
    categoryLabel: 'Dokumentasi Event',
    image: '/portfolio/p26_Dcf0M6AFLdX.jpg',
    aspect: 'tall',
    location: 'Serpong, Tangerang Selatan',
    client: 'Juara Turnamen PLN',
    description: 'Senyum bangga atlet pemenang turnamen berfoto bersama deretan piala kejuaraan bergilir.',
    instagramUrl: 'https://www.instagram.com/p/Dcf0M6AFLdX/',
  },

  // 27. Event - Badminton Turnamen
  {
    id: 'ig-27',
    title: 'Semangat Olahraga Bulutangkis PLN',
    category: 'event',
    categoryLabel: 'Dokumentasi Event',
    image: '/portfolio/p27_Dcf3W33lLMT.jpg',
    aspect: 'tall',
    location: 'Hall Badminton Serpong',
    client: 'Turnamen Badminton PLN',
    description: 'Aksi lincah dan canda tawa sehat pertandingan persahabatan bulutangkis antar pegawai instansi.',
    instagramUrl: 'https://www.instagram.com/p/Dcf3W33lLMT/',
  },

  // 28. Prewedding - Annisa & Daffa Lying on Grass
  {
    id: 'ig-28',
    title: 'Lying On Grass: Annisa & Daffa Prewedding',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p28_DcigMdxFDWZ.jpg',
    aspect: 'tall',
    location: 'Taman Asri BSD',
    client: 'Annisa & Daffa',
    description: 'Komposisi simetris romantis berbaring santai di atas rumput hijau dengan sentuhan busana putih dan kain veil anggun.',
    instagramUrl: 'https://www.instagram.com/p/DcigMdxFDWZ/',
  },

  // 29. Birthday - 5th Birthday Anak & Ibu
  {
    id: 'ig-29',
    title: 'Sweet 5th Birthday & Ciuman Kasih Ibu',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p29_DdBp9ZBk5QW.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Ulang Tahun ke-5',
    description: 'Kehangatan pelukan dan ciuman tulus seorang ibu merayakan pertambahan usia ke-5 jagoan kecilnya dengan balon angka emas.',
    instagramUrl: 'https://www.instagram.com/p/DdBp9ZBk5QW/',
  },

  // 30. Wedding - Potret Keluarga di Pelaminan
  {
    id: 'ig-30',
    title: 'Vintage Family Portrait di Pelaminan Resepsi',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p30_DdB3DEik_QK.jpg',
    aspect: 'tall',
    location: 'Gedung Resepsi Jakarta',
    client: 'Keluarga Mempelai',
    description: 'Foto potret kebersamaan keluarga inti di atas pelaminan pernikahan dengan sentuhan tone monokrom artistik.',
    instagramUrl: 'https://www.instagram.com/p/DdB3DEik_QK/',
  },

  // 31. Birthday - Newborn Baby Pure Innocence
  {
    id: 'ig-31',
    title: 'Newborn Photography: Little Miracle Sleep',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p31_DdRYl8cE56c.jpg',
    aspect: 'tall',
    location: 'Tangerang Home Session',
    client: 'Baby Newborn',
    description: 'Kolase potret kedamaian bayi mungil yang tertidur lelap, jari-jemari mungil yang menggenggam, dan kepolosan alami.',
    instagramUrl: 'https://www.instagram.com/p/DdRYl8cE56c/',
  },

  // 32. Birthday/Event - Aqiqah Baby Kavi Noah
  {
    id: 'ig-32',
    title: 'Tasyakuran Aqiqah Baby Kavi Noah Pratama',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p32_DdRfHShTr7Q.jpg',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Keluarga Baby Kavi',
    description: 'Prosesi syukuran aqiqah penuh berkah, kedua orang tua menggendong sang buah hati di depan dekorasi penuh doa.',
    instagramUrl: 'https://www.instagram.com/reel/DdRfHShTr7Q/',
  },

  // 33. Event - Syukuran & Momen Keluarga Besar
  {
    id: 'ig-33',
    title: 'Dokumentasi Syukuran & Kebersamaan Keluarga',
    category: 'event',
    categoryLabel: 'Dokumentasi Event',
    image: '/portfolio/p33_DdWVs71FI2a.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Keluarga Besar',
    description: 'Kolase kebahagiaan momen kumpul keluarga besar, penyerahan bingkisan syukuran, dan senyum guyub generasi.',
    instagramUrl: 'https://www.instagram.com/p/DdWVs71FI2a/',
  },

  // 34. Birthday - Shayra Cinnamoroll Birthday
  {
    id: 'ig-34',
    title: 'Cinnamoroll Theme Birthday Party Shayra',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p34_DdbXbC5FDdp.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Shayra & Family',
    description: 'Keceriaan putri kecil di depan kue ulang tahun bertingkat karakter Cinnamoroll favorit bertabur balon meriah.',
    instagramUrl: 'https://www.instagram.com/p/DdbXbC5FDdp/',
  },

  // 35. Birthday - Construction Theme B&B Party
  {
    id: 'ig-35',
    title: 'B&B Construction Theme Birthday Celebration',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p35_Ddy-wNJk8PD.jpg',
    aspect: 'tall',
    location: 'Jakarta Barat',
    client: 'Keluarga B&B',
    description: 'Pesta ulang tahun seru bertema mobil konstruksi warna-warni bersama ayah, ibu, dan saudara tercinta.',
    instagramUrl: 'https://www.instagram.com/p/Ddy-wNJk8PD/',
  },

  // 36. Birthday - 1st Smash Cake Under The Sea
  {
    id: 'ig-36',
    title: '1st Birthday: Under The Sea & Chocolate Cake',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p36_Dd1iye5k7f4.jpg',
    aspect: 'tall',
    location: 'Tangerang Studio',
    client: 'Baby 1st Birthday',
    description: 'Momen menggemaskan tiup lilin dan potong kue ulang tahun pertama bernuansa laut biru dan kue cokelat Tous les Jours.',
    instagramUrl: 'https://www.instagram.com/p/Dd1iye5k7f4/',
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
    title: 'Akad Nikah & Intimate',
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
    title: 'Prewedding & Lamaran',
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
    title: 'Birthday & Kids Party',
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
    q: 'Kapan waktu terbaik untuk melakukan reservasi sesi foto?',
    a: 'Agar jadwal Anda terjamin dan tidak terisi oleh klien lain, kami menyarankan reservasi 1–2 minggu sebelumnya untuk sesi wisuda atau lamaran, serta 1–3 bulan sebelum hari-H untuk acara pernikahan.',
  },
  {
    q: 'Apakah melayani sesi foto di luar area Jabodetabek?',
    a: 'Tentu bisa. Tim FYPotret siap melayani sesi pemotretan di berbagai kota di luar Jabodetabek (seperti Bandung, Bogor, dan sekitarnya) dengan penyesuaian biaya transportasi serta akomodasi yang wajar.',
  },
  {
    q: 'Berapa lama estimasi penyerahan file foto dan hasil edit?',
    a: 'Seluruh file foto asli (raw/master) akan kami unggah ke Google Drive dalam H+1 hingga H+2 setelah pemotretan. Untuk foto pilihan yang diedit warna dan tonal (best edited), selesai dalam 4–7 hari kerja.',
  },
  {
    q: 'Bagaimana sistem pembayaran dan uang muka (DP)?',
    a: 'Uang muka (DP) sebesar 30% diperlukan untuk mengunci tanggal dan jam sesi Anda. Pelunasan dapat dilakukan pada hari-H setelah sesi foto selesai.',
  },
];
