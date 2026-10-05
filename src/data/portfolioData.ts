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
  { id: 'wedding', label: 'Wedding & Akad', icon: 'Heart' },
  { id: 'prewedding', label: 'Prewedding', icon: 'Camera' },
  { id: 'graduation', label: 'Wisuda', icon: 'GraduationCap' },
  { id: 'birthday', label: 'Kids & Birthday', icon: 'Cake' },
  { id: 'event', label: 'Dokumentasi Event', icon: 'Users' },
] as const;

export const HIGHLIGHT_STORIES = [
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Akad & Resepsi',
    iconName: 'Ring',
    count: '150+ Momen',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prewedding',
    title: 'Prewedding',
    subtitle: 'Romantic Story',
    iconName: 'Film',
    count: '90+ Pasangan',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'graduation',
    title: 'Wisuda',
    subtitle: 'Graduation Glow',
    iconName: 'GraduationCap',
    count: '200+ Wisudawan',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
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
  {
    id: 'p1',
    title: 'Akad Penuh Haru & Bahagia',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Dian & Rizky',
    description: 'Momen sakral ijab qabul dan pamer buku nikah berbalut busana adat Jawa bernuansa emas elegan.',
  },
  {
    id: 'p2',
    title: 'Graduation Day: Sarjana Terhebat',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=85',
    aspect: 'tall',
    location: 'Universitas Indonesia, Depok',
    client: 'Nabila, S.Ked',
    description: 'Potret selebrasi wisuda bersama keluarga tercinta dengan jubah kebanggaan dan selempang kehormatan.',
  },
  {
    id: 'p3',
    title: 'Golden Sunset Prewedding Story',
    category: 'prewedding',
    categoryLabel: 'Prewedding',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85',
    aspect: 'wide',
    location: 'Pantai Indah Kapuk (PIK), Jakarta',
    client: 'Sarah & Kevin',
    description: 'Sesi prewedding santai & intim dengan pencahayaan golden hour alami dan tawa spontan.',
  },
  {
    id: 'p4',
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
    id: 'p5',
    title: 'Kehangatan Resepsi Adat & Keluarga',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
    aspect: 'wide',
    location: 'Gedung Pertemuan Jakarta',
    client: 'Anisa & Dimas',
    description: 'Dokumentasi lengkap momen sungkeman haru dan senyum hangat sanak famili.',
  },
  {
    id: 'p6',
    title: 'Outdoor Graduation Portrait',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1000&q=85',
    aspect: 'tall',
    location: 'Taman Impian Jakarta',
    client: 'Jessica & Squad',
    description: 'Potret keceriaan bersama bestie kampus dengan pose dinamis dan pencahayaan outdoor natural.',
  },
  {
    id: 'p7',
    title: 'Dokumentasi Pertandingan & Turnamen',
    category: 'event',
    categoryLabel: 'Event & Sport',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85',
    aspect: 'wide',
    location: 'GOR Jakarta',
    client: 'Turnamen Futsal / PLN Event',
    description: 'Aksi dinamis kecepatan tinggi saat selebrasi kemenangan dan penyerahan piala tim.',
  },
  {
    id: 'p8',
    title: 'Casual & Intimate Prewedding',
    category: 'prewedding',
    categoryLabel: 'Prewedding',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=85',
    aspect: 'tall',
    location: 'Hutan Kota GBK, Jakarta',
    client: 'Rani & Fajar',
    description: 'Konsep street & casual prewedding dengan busana senada, natural tanpa pose kaku.',
  },
  {
    id: 'p9',
    title: 'Newborn Warmth & Little Miracle',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=85',
    aspect: 'square',
    location: 'Depok Studio',
    client: 'Baby Kalandra',
    description: 'Potret lembut si kecil di usia 14 hari dalam balutan kain lembut yang aman & nyaman.',
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
    title: 'Prewedding Romantic Story',
    tagline: 'Konsep kasual atau adat di lokasi outdoor favorit Jakarta / Tangerang',
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
    name: 'Nabila & Dimas',
    role: 'Pengantin Akad Nikah',
    category: 'Wedding',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Mas fotografernya sabar banget dan asik pas ngarahin gaya! Awalnya kami berdua kaku banget depan kamera, tapi pas lihat hasilnya... MasyaAllah warna gold hangatnya dapet banget, persis yang kita mau.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Alifia Putri, S.I.Kom',
    role: 'Wisudawati UI Depok',
    category: 'Graduation',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Booking H-3 wisuda karena bingung cari fotografer yang ready di Depok. Respon admin FYPotret via WA cepet banget. Pas hari H on-time, angle fotonya flattering banget buat cewek!',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Hendro Prasetyo',
    role: 'Koordinator Acara PLN Sport',
    category: 'Event Dokumentasi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Sudah 2x pakai jasa FYPotret untuk turnamen kantor. Tangkapan momen smash dan selebrasinya dapet banget. File Google Drive dikirim rapi per folder kategori pertandingan.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Citra & Kevin',
    role: 'Prewedding Couple',
    category: 'Prewedding',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'Suka banget sama grading fotonya yang moody tapi tetep warm. Banyak temen yang nanya di Instagram fotografernya siapa. Highly recommended buat yang cari fotografer di Tangerang!',
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
