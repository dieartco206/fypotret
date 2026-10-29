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
  isVideo?: boolean;
  videoSrc?: string;
  images?: string[];
}

export interface PricingPackage {
  id: string;
  category: 'wedding' | 'prewedding' | 'graduation' | 'birthday' | 'event';
  categories?: ('wedding' | 'prewedding' | 'graduation' | 'birthday' | 'event')[];
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
  { id: 'all', label: 'Semua', icon: 'Images' },
  { id: 'graduation', label: 'Wisuda', icon: 'GraduationCap' },
  { id: 'wedding', label: 'Wedding', icon: 'Heart' },
  { id: 'prewedding', label: 'Prewed', icon: 'Camera' },
  { id: 'birthday', label: 'Birthday', icon: 'Cake' },
  { id: 'event', label: 'Event', icon: 'Users' },
] as const;

export const HIGHLIGHT_STORIES = [
  {
    id: 'graduation',
    title: 'Wisuda',
    subtitle: 'Graduation Squad',
    iconName: 'GraduationCap',
    image: '/portfolio/p4_DbOWBkKE80l.jpg',
  },
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Akad & Pelaminan',
    iconName: 'Ring',
    image: '/portfolio/p7_DbVM3ScFJoX.jpg',
  },
  {
    id: 'prewedding',
    title: 'Lamaran',
    subtitle: 'Sarah & Singgih',
    iconName: 'Film',
    image: '/portfolio/p39_DeKDqlqk26K.jpg',
  },
  {
    id: 'birthday',
    title: 'Birthday',
    subtitle: 'Ceria & Hangat',
    iconName: 'Smile',
    image: '/portfolio/p34_DdbXbC5FDdp.jpg',
  },
  {
    id: 'event',
    title: 'Event',
    subtitle: 'PLN & Turnamen',
    iconName: 'Award',
    image: '/portfolio/p26_Dcf0M6AFLdX.jpg',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [

  // 1. Wedding - Seserahan & Akad: Putra & Putri at New Batavia Cafe (Slide 1)
  {
    id: 'ig-52',
    title: 'The Sacred Vows & Akad: Putra & Putri',
    images: [
          '/portfolio/p52_DewhdRwlMg_01_seserahan.jpg',
          '/portfolio/p53_DewhdRwlMg_02_storyboard.jpg',
          '/portfolio/p54_DewhdRwlMg_03_stairs.jpg',
          '/portfolio/p55_DewhdRwlMg_04_bride_rose.jpg',
          '/portfolio/p56_DewhdRwlMg_05_high_angle.jpg',
          '/portfolio/p57_DewhdRwlMg_06_rattan_chair.jpg',
          '/portfolio/p58_DewhdRwlMg_07_shoulder_rest.jpg',
          '/portfolio/p59_DewhdRwlMg_08_colonial_outdoor.jpg'
    ],
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p52_DewhdRwlMg_01_seserahan.jpg',
    aspect: 'tall',
    location: 'New Batavia Cafe, Kota Tua Jakarta',
    client: 'Putra & Putri',
    description: `Selamat menempuh hidup baru, Mas Putra & Kak Putri. @ralvians_ @adriellapkumambong
    
    Semoga Allah memberkahi pernikahan kalian dengan cinta, kebahagiaan, dan keberkahan yang tiada habisnya. Semoga kalian selalu menemukan ketenangan satu sama lain dan membangun keluarga yang sakinah, mawaddah, wa rahmah. ✨
    
    terima kasih kepada.
    
    MUA: @keisyanmakeup
    MC: @mc_depok
    BA: @brideassistant_byapipah
    FG/VG: @fypotretid
    
    Venue : @newbataviacafe
    
    #jakarta #wedding #pernikahan #weddingintimate #indonesia`,
    instagramUrl: 'https://www.instagram.com/p/DewhdRwlMg_/?img_index=1',
  },
















  // 9. Event & Hangout - Weekend Stroll di Blok M (Slide 1)
  {
    id: 'ig-37',
    title: 'Weekend Stroll & Urban Hangout di Blok M',
    images: [
          '/portfolio/p37_DeeRlPGlFnm.jpg',
          '/portfolio/p51_DeeRlPGlFnm_urban.jpg',
          '/portfolio/p60_DeeRlPGlFnm_03_filmstrip.jpg',
          '/portfolio/p61_DeeRlPGlFnm_04_fence_candid.jpg',
          '/portfolio/p62_DeeRlPGlFnm_05_street_walk.jpg',
          '/portfolio/p63_DeeRlPGlFnm_06_hijab_portrait.jpg',
          '/portfolio/p64_DeeRlPGlFnm_07_bench_sit.jpg',
          '/portfolio/p65_DeeRlPGlFnm_08_laugh_candid.jpg'
    ],
    category: 'event',
    categoryLabel: 'Event & Hangout',
    image: '/portfolio/p37_DeeRlPGlFnm.jpg',
    aspect: 'tall',
    location: 'Blok M, Jakarta Selatan',
    client: 'Stephanie & Firta',
    description: `Weekend stroll at Blok M, captured in little moments 📸✨ @stephaniest_1
    @firtasar_
    
    Terima kasih banyak Kak @stephaniest_1 dan kak @firtasar_ sudah mengajak Fypotret untuk mengabadikan momen jalan-jalan weekend kali ini.
    
    Semoga setiap fotonya bisa jadi kenangan manis yang bisa dikenang lagi nanti 🤍
    
    #Fypotret #BlokM #WeekendVibes #StreetPhotography #JasaFotoJakarta PhotographerJakarta CaptureTheMoment`,
    instagramUrl: 'https://www.instagram.com/p/DeeRlPGlFnm/?img_index=1',
    isVideo: false,
  },
















  // 5. Event - Reuni Akbar Eks Karyawan PT Jaya Obayashi
  {
    id: 'ig-38',
    title: 'Reuni Akbar Eks Karyawan PT Jaya Obayashi',
    category: 'event',
    categoryLabel: 'Event',
    image: '/portfolio/p38_DeRoRBnlOFJ.jpg',
    aspect: 'tall',
    location: 'Tomlex Resto & Cafe, Jakarta',
    client: 'Alumni PT Jaya Obayashi',
    description: `Reuni Eks PT Jaya Obayashi 📸✨ @adelina_kitchen
    
    Mengabadikan momen, cerita, dan kebersamaan yang kembali terjalin di @tomlex.jkt
    
    Senang bisa menjadi bagian dari momen spesial ini dan menangkap setiap cerita di balik lensa. 📸🤍
    
    Terimakasih sudah mempercayakan moment bahagia ini bersama fypotretid 🙏🏻✨
    
    #ReuniEksJayaObayashi #JayaObayashi #EventPhotography #DokumentasiAcara #AbadikanMomen`,
    instagramUrl: 'https://www.instagram.com/p/DeRoRBnlOFJ/',
    isVideo: false,
  },


  // 6. Prewedding - The Engagement Day: Sarah & Singgih
  {
    id: 'ig-39',
    title: 'The Engagement Day: Sarah & Singgih',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p39_DeKDqlqk26K.jpg',
    aspect: 'tall',
    location: 'Twins Studio, Jakarta',
    client: 'Sarah & Singgih',
    description: `Sarah & Singgih — one step closer to forever. 💍 Semoga perjalanan menuju hari bahagia selalu dipenuhi cinta, doa, dan kebahagiaan. 🤍
    
    Congratulations on your engagement, Sarah & Singgih! 🤲🏻✨
    
    🕺🏻: @twins_studio3
    
    #SarahAndSungguh #SarahSungguh #Engagement #EngagementDay`,
    instagramUrl: 'https://www.instagram.com/p/DeKDqlqk26K/',
    isVideo: false,
  },


  // 7. Birthday Reel - Jose 1st Birthday Celebration
  {
    id: 'ig-40',
    title: "Jose's 1st Birthday Celebration Reel",
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p40_Dd_R1Tzp70Z.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Keluarga Sekar & Soelthan',
    description: `Happy 1st Birthday, Jose! 🎉🧸@sekarfdla @msoelthan
    
    Terima kasih sudah mempercayakan momen spesial ini untuk aku abadikan. 🙏🏻✨
    
    #Jose1stBirthday #HappyBirthdayJose #FirstBirthday #BirthdayMoment`,
    instagramUrl: 'https://www.instagram.com/reel/Dd_R1Tzp70Z/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v40_Dd_R1Tzp70Z.mp4',
  },


  // 8. Birthday - 1st Smash Cake Under The Sea
  {
    id: 'ig-36',
    title: '1st Birthday: Under The Sea & Chocolate Cake',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p36_Dd1iye5k7f4.jpg',
    aspect: 'tall',
    location: 'Tangerang Studio',
    client: 'Baby 1st Birthday',
    description: `✨ Jose’s 1st Birthday ✨
    
    One year of love, laughter, and so many beautiful little moments. 🤍📸
    
    Happy 1st Birthday, Jose! 🥳🎂
    
    Semoga Jose tumbuh menjadi anak yang sehat, bahagia, penuh cinta, dan selalu dikelilingi orang-orang yang sayang sama Jose. 🤍
    
    #JoseTurnsOne #Jose1stBirthday #JoseBirthday #FirstBirthday #BirthdayCelebration`,
    instagramUrl: 'https://www.instagram.com/p/Dd1iye5k7f4/',
  },


  // 9. Birthday Reel - Benjamin & Berkant Birthday Moments
  {
    id: 'ig-41',
    title: 'Benjamin & Berkant Construction Birthday Reel',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p41_Dd1elU1Tycq.jpg',
    aspect: 'tall',
    location: 'Jakarta Barat',
    client: 'Keluarga Zulianita',
    description: 'Kompilasi video seru keceriaan pesta ulang tahun Benjamin & Berkant bertema mobil konstruksi ceria dengan dekorasi balon meriah.',
    instagramUrl: 'https://www.instagram.com/reel/Dd1elU1Tycq/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v41_Dd1elU1Tycq.mp4',
  },


  // 10. Birthday - Construction Theme B&B Party
  {
    id: 'ig-35',
    title: 'B&B Construction Theme Birthday Celebration',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p35_Ddy-wNJk8PD.jpg',
    aspect: 'tall',
    location: 'Jakarta Barat',
    client: 'Keluarga B&B',
    description: `3 cheers for Berkant! 🎉💙 @zulianitaa @benjamindanberkant
    
    Happy 3rd Birthday, Berkant! 🎂🥳
    Semoga selalu sehat, tumbuh jadi anak yang ceria, pintar, penuh kebaikan, dan selalu dikelilingi orang-orang yang sayang sama Berkant. 🤍
    
    Cheers to more beautiful moments ahead! ✨🎈
    
    #birthday #tangerang #BerkantTurnsThree #BerkantIsThree #Berkant3rdBirthday`,
    instagramUrl: 'https://www.instagram.com/p/Ddy-wNJk8PD/',
  },


  // 11. Event Reel - Tasyakuran & Aqiqah Baby
  {
    id: 'ig-42',
    title: 'Tasyakuran & Aqiqah Baby Ceremony Reel',
    category: 'event',
    categoryLabel: 'Event',
    image: '/portfolio/p42_DdjhHhOz7Am.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Keluarga Baby',
    description: `Your hair, your eyes, your lips…
    and your name. 🤍
    
    Semua tentangnya adalah doa yang di titipkan kepada Allah.
    
    #fypotret #tasyakuran #baby #indonesia #jakarta`,
    instagramUrl: 'https://www.instagram.com/reel/DdjhHhOz7Am/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v42_DdjhHhOz7Am.mp4',
  },


  // 12. Birthday Reel - Chayra's Birthday Party Highlight
  {
    id: 'ig-43',
    title: "Chayra's Sweet Birthday Party Highlight Reel",
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p43_DdiavVAz1HK.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Chayra & Family',
    description: `Happy Birthday Chayra ✨
    
    #happybirthday #birthday #jasafoto #jasavideo #fyp`,
    instagramUrl: 'https://www.instagram.com/reel/DdiavVAz1HK/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v43_DdiavVAz1HK.mp4',
  },


  // 13. Birthday - Shayra Cinnamoroll Birthday
  {
    id: 'ig-34',
    title: 'Cinnamoroll Theme Birthday Party Shayra',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p34_DdbXbC5FDdp.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Shayra & Family',
    description: `Happy Birthday, Chayra! 🎂🎈✨
    Semoga Chayra selalu sehat, ceria, bahagia, dan tumbuh menjadi anak hebat yang penuh kebaikan
    
    ✨ Alhamdulillah, sesi birthday Chayra kemarin berjalan dengan penuh keceriaan dan momen manis 🤍🎂
    
    Terima kasih sudah mempercayakan kami untuk mengabadikan hari spesial Chayra. Semoga
    
    #FYPotret #BirthdayChayra #BirthdayParty #KidsBirthday #BirthdayPhotography`,
    instagramUrl: 'https://www.instagram.com/p/DdbXbC5FDdp/',
  },


  // 14. Event - Syukuran & Momen Keluarga Besar
  {
    id: 'ig-33',
    title: 'Dokumentasi Syukuran & Kebersamaan Keluarga',
    category: 'event',
    categoryLabel: 'Event',
    image: '/portfolio/p33_DdWVs71FI2a.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Keluarga Besar',
    description: `Satu langkah kecil menuju perjalanan yang lebih panjang. 🤍 Engagement Dimas & Faradila
    
    Mengabadikan momen penuh doa, restu, dan kebahagiaan dalam sebuah perjalanan menuju hari yang istimewa.
    
    Selamat atas langkah barunya. Semoga segala proses menuju hari bahagia dilancarkan dan dipenuhi keberkahan. ✨
    
    #FYPotret #Engagement #EngagementDay #EngagementMoment #Lamaran Prewedding CoupleSession`,
    instagramUrl: 'https://www.instagram.com/p/DdWVs71FI2a/',
  },


  // 15. Birthday Reel - Elegant Milestone Birthday
  {
    id: 'ig-44',
    title: 'Elegant Milestone Birthday Celebration Reel',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p44_DdT7VcKhZHA.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Birthday Milestone Client',
    description: `Happy birthday! 🎂✨
    Semoga di usia yang baru, semakin banyak hal baik yang datang, doa-doa yang perlahan terwujud, dan kebahagiaan yang nggak pernah ada habisnya. Semoga selalu dikelilingi orang-orang yang tulus dan disayangi dengan cara yang paling indah. 🤍
    
    Wishing you nothing but happiness, love, and beautiful moments ahead. 🥂✨
    
    #happybirthday #birthday #birthdayvibes #ulangtahun #fyp`,
    instagramUrl: 'https://www.instagram.com/reel/DdT7VcKhZHA/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v44_DdT7VcKhZHA.mp4',
  },


  // 16. Birthday/Event - Aqiqah Baby Kavi Noah
  {
    id: 'ig-32',
    title: 'Tasyakuran Aqiqah Baby Kavi Noah Pratama',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p32_DdRfHShTr7Q.jpg',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Keluarga Baby Kavi',
    description: `Mashaallah Tabarakallah ✨
    A Blessed Beginning 🤍
    Tasyakuran Aqiqah — Putra dari ka @desvitaemiliaw
    
    Semoga menjadi awal perjalanan yang penuh keberkahan, kesehatan, kebahagiaan, dan kebaikan. Semoga Allah senantiasa melindungi dan memberikan keberkahan untuk si kecil dan keluarga. 🤲🏻✨
    
    #TasyakuranAqiqah #Aqiqah #MomenAqiqah #VideoAqiqah #DokumentasiAqiqah`,
    instagramUrl: 'https://www.instagram.com/reel/DdRfHShTr7Q/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v32_DdRfHShTr7Q.mp4',
  },


  // 17. Birthday - Newborn Baby Pure Innocence
  {
    id: 'ig-31',
    title: 'Newborn Photography: Little Miracle Sleep',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p31_DdRYl8cE56c.jpg',
    aspect: 'tall',
    location: 'Tangerang Home Session',
    client: 'Baby Newborn',
    description: `Mashaallah, Tabarakallah
    Tasyakuran Aqiqah putra dari Kak @desvitaemiliaw
    
    Momen Penuh Syukur dan Kebahagiaan 🤍
    
    Mengabadikan sebuah momen istimewa yang dipenuhi rasa syukur, doa, dan kebahagiaan bersama keluarga tercinta. Semoga menjadi awal dari perjalanan yang penuh keberkahan dan kebaikan. 🤲🏻✨
    
    #TasyakuranAqiqah #Aqiqah #AqiqahAnak #MomenAqiqah #FotograferIndonesia`,
    instagramUrl: 'https://www.instagram.com/p/DdRYl8cE56c/',
  },


  // 18. Engagement - Alfathan & Arova Monokrom Editorial
  {
    id: 'ig-30',
    title: 'A New Chapter: Engagement Alfathan & Arova',
    images: [
          '/portfolio/p30_DdB3DEik_QK.jpg',
          '/portfolio/p45_DdB3DEik_QK_grid.jpg',
          '/portfolio/p46_DdB3DEik_QK_seserahan.jpg',
          '/portfolio/p47_DdB3DEik_QK_rings.jpg',
          '/portfolio/p48_DdB3DEik_QK_heart.jpg',
          '/portfolio/p49_DdB3DEik_QK_brick.jpg',
          '/portfolio/p50_DdB3DEik_QK_stairs.jpg'
    ],
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p30_DdB3DEik_QK.jpg',
    aspect: 'tall',
    location: 'Tangerang, Indonesia',
    client: 'Alfathan & Arova',
    description: `A new chapter in a journey worth sharing. 🤍💍
    
    Happy engagement, Mas @alfathaaan_ & Kak @arovajp
    
    #Engagement #EngagementSession #LoveStory #weddingjourney #Lamaran`,
    instagramUrl: 'https://www.instagram.com/p/DdB3DEik_QK/',
  },














  // 25. Birthday - 5th Birthday Anak & Ibu
  {
    id: 'ig-29',
    title: 'Sweet 5th Birthday & Ciuman Kasih Ibu',
    category: 'birthday',
    categoryLabel: 'Kids & Birthday',
    image: '/portfolio/p29_DdBp9ZBk5QW.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Ulang Tahun ke-5',
    description: `✋ High five untuk Wira! happy Birthday 🎉
    
    Hari spesial, penuh tawa, kebahagiaan, dan momen-momen seru bersama orang-orang tersayang. 🥳🎂
    
    Selamat ulang tahun, Wira! Semoga selalu diberikan kebahagiaan, kesehatan, dan kesuksesan. ✨ @cintiyadarmawan
    
    #BirthdayWira #HappyBirthday #BirthdayParty #BirthdayMoment #BirthdayVibes`,
    instagramUrl: 'https://www.instagram.com/p/DdBp9ZBk5QW/',
  },


  // 26. Prewedding - Annisa & Daffa Lying on Grass
  {
    id: 'ig-28',
    title: 'Lying On Grass: Annisa & Daffa Prewedding',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p28_DcigMdxFDWZ.jpg',
    aspect: 'tall',
    location: 'Taman Asri BSD',
    client: 'Annisa & Daffa',
    description: `Prewedding session kak Annisa & mas Daffa 📸
    
    Mengabadikan cerita, tawa, dan momen sederhana sebelum menuju hari yang istimewa. ✨📸
    
    #PreweddingAnnisaDaffa #AnnisaDaffa #Prewedding #PreweddingSession #PreweddingPhotography`,
    instagramUrl: 'https://www.instagram.com/p/DcigMdxFDWZ/',
  },


  // 27. Event - Badminton Turnamen
  {
    id: 'ig-27',
    title: 'Semangat Olahraga Bulutangkis PLN',
    category: 'event',
    categoryLabel: 'Event',
    image: '/portfolio/p27_Dcf3W33lLMT.jpg',
    aspect: 'tall',
    location: 'Hall Badminton Serpong',
    client: 'Turnamen Badminton PLN',
    description: `MOMENT SERU — BADMINTON 🏆🇮🇩
    
    FYPotret ID kembali dipercaya untuk mengabadikan keseruan Badminton PLN Cup Layanan Services Bintaro, Cikupa & Serpong dalam rangka memeriahkan HUT ke-81 Republik Indonesia.
    
    One Court. One Spirit. One Champion. 🏸🔥
    
    #FYPotretID #MomentChampion #PLNCup #Badminton #BadmintonPhotography SportsPhotography PLN HUTRI81 Bintaro Cikupa Serpong MomenBerharga IndonesiaMerdeka`,
    instagramUrl: 'https://www.instagram.com/p/Dcf3W33lLMT/',
  },


  // 28. Event - Trofi Bergilir Juara
  {
    id: 'ig-26',
    title: 'Kebanggaan Mengangkat Trofi Bergilir',
    category: 'event',
    categoryLabel: 'Event',
    image: '/portfolio/p26_Dcf0M6AFLdX.jpg',
    aspect: 'tall',
    location: 'Serpong, Tangerang Selatan',
    client: 'Juara Turnamen PLN',
    description: `One Game. One Spirit. One Champion. 🏆
    
    Terima kasih atas kepercayaannya kepada kami  untuk mengabadikan setiap momennya. 🤝📸
    
    #FYPotretID #MomentChampion #tangerang #FYPotretID #HUTRI81`,
    instagramUrl: 'https://www.instagram.com/p/Dcf0M6AFLdX/',
  },


  // 29. Event - Tim Futsal PLN Serpong
  {
    id: 'ig-25',
    title: 'Kompak & Semangat Juara: Tim PLN Serpong',
    category: 'event',
    categoryLabel: 'Event',
    image: '/portfolio/p25_Dcfzob2lAZb.jpg',
    aspect: 'tall',
    location: 'Lapangan Olahraga Serpong',
    client: 'PLN Unit Layanan Serpong',
    description: `Momen Berharga Bersama kami 📸✨
    
    Sebuah kehormatan bagi kami untuk dipercaya ikut serta dalam acara PLN Cup Layanan Services Bintaro, Cikupa & Serpong dalam rangka memeriahkan HUT ke-81 Republik Indonesia 🇮🇩
    
    Bukan sekadar mengabadikan momen, tetapi menjadi bagian dari cerita, kebersamaan, semangat sportivitas, dan kemeriahan yang tercipta di dalamnya.
    
    Terima kasih atas kepercayaan yang diberikan kepada kami . 🙏🏻
    Sampai jumpa di momen berharga berikutnya! ❤️🤍
    
    #FYPotretID #tangerang #PLN #Bintaro #Cikupa`,
    instagramUrl: 'https://www.instagram.com/p/Dcfzob2lAZb/',
  },


  // 30. Wisuda - Playful Relaxed
  {
    id: 'ig-24',
    title: 'Playful Relief: Memeluk Ijazah Kelulusan',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p24_DcOX1ODFLNM.jpg',
    aspect: 'tall',
    location: 'Kampus Jakarta',
    client: 'Bella Hendriani Sukma, S.M',
    description: `Satu tahap selesai, satu langkah lebih dekat menuju impian. ✨
    
    #fypotret #fypotretphotography #sidangskripsi #sidang`,
    instagramUrl: 'https://www.instagram.com/p/DcOX1ODFLNM/',
  },


  // 31. Wisuda - Silhouette & Campus View
  {
    id: 'ig-23',
    title: 'Editorial Silhouette & Campus Architecture',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p23_DcOXf-6J2wG.jpg',
    aspect: 'tall',
    location: 'Kampus Jakarta',
    client: 'Bella Hendriani Sukma, S.M',
    description: `Satu momen, satu pencapaian. 🎓✨
    Selamat atas selesainya sidang! Kak @bellahndrni11_
    
    #fypotret #sidangskripsi #graduation #photography #fyp`,
    instagramUrl: 'https://www.instagram.com/p/DcOXf-6J2wG/',
  },


  // 32. Wisuda - Bella Hendriani Sukma, S.M
  {
    id: 'ig-22',
    title: 'Wisuda Sarjana Manajemen: Bella Hendriani, S.M',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p22_DcOXUqBFA5w.jpg',
    aspect: 'tall',
    location: 'Kampus Jakarta',
    client: 'Bella Hendriani Sukma, S.M',
    description: `Mengabadikan satu momen penting setelah perjalanan panjang. 🎓✨
    
    Selamat atas selesainya sidang, semoga langkah berikutnya semakin dekat dengan impian. 🤍
    
    #fypotret #fypotretphotography #sidangskripsi #graduation`,
    instagramUrl: 'https://www.instagram.com/p/DcOXUqBFA5w/',
  },


  // 33. Prewedding - Framing Pagar Kawat
  {
    id: 'ig-21',
    title: 'Artistic Framing: Cincin di Balik Jaring',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p21_Db99wJ8kwty.jpg',
    aspect: 'tall',
    location: 'Depok',
    client: 'Pasangan Tunangan',
    description: `A beautiful beginning to forever. 💍✨
    @sucii.rhmwt
    
    Semoga setiap langkahnya dimudahkan, dilancarkan, dan dipenuhi keberkahan. Dan dilancarkan sampai hari H 🤍
    
    #Lamaran #Engagement #EngagementMoment #AdayToRemember`,
    instagramUrl: 'https://www.instagram.com/p/Db99wJ8kwty/',
  },


  // 34. Prewedding - Casual Basket Court Reels
  {
    id: 'ig-20',
    title: 'Casual & Romantic di Lapangan Basket',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p20_Db909O2TBA1.jpg',
    aspect: 'tall',
    location: 'Depok Outdoor',
    client: 'Pasangan Sporty Romantis',
    description: `A day to remember. 🤍✨
    
    Satu hari yang penuh cerita, haru, dan kebahagiaan. Momen yang mungkin hanya terjadi sekali, tapi kenangannya akan tersimpan selamanya. 💍📸
    
    Terima kasih kak sudah mempercayakan momen spesial ini bersama kami. Senang bisa menjadi bagian dari cerita indah kalian. 🤍`,
    instagramUrl: 'https://www.instagram.com/reel/Db909O2TBA1/',
    isVideo: true,
    videoSrc: '/portfolio/videos/v20_Db909O2TBA1.mp4',
  },


  // 35. Prewedding - These Kids Are Getting Engaged
  {
    id: 'ig-19',
    title: 'Playful & Fun: These Kids Are Getting Engaged',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p19_Db9zP8ck52O.jpg',
    aspect: 'tall',
    location: 'Depok',
    client: 'Pasangan Ceria',
    description: `One step closer. 🤍💍
    @sucii.rhmwt
    
    Satu langkah lebih dekat menuju hari yang telah dinantikan. Momen sederhana hari ini, menjadi bagian dari cerita indah yang akan terus dikenang. ✨
    Terima kasih kak @sucii.rhmwt sudah mempercayakan momen spesial ini bersama FYPotret. 📸🤍`,
    instagramUrl: 'https://www.instagram.com/p/Db9zP8ck52O/',
  },


  // 36. Lamaran - Say Good Bye / Cincin
  {
    id: 'ig-18',
    title: 'Our Journey Begins Here - Engagement Ring',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p18_Db9w6hPz_6r.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Sesi Pertunangan',
    description: `She said yes. 💍🤍
    Satu kata yang mengubah cerita menjadi perjalanan baru.
    
    Thank you for trusting FYPotret to capture this beautiful beginning. 📸✨
    #SheSaidYes #Engagement #EngagementMoment #Lamaran #LamaranIndonesia`,
    instagramUrl: 'https://www.instagram.com/p/Db9w6hPz_6r/',
  },


  // 37. Lamaran - Potret Kebaya Payet
  {
    id: 'ig-17',
    title: 'Anggun Dalam Balutan Kebaya Tunangan',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p17_Db9wHXEzixp.jpg',
    aspect: 'tall',
    location: 'Jakarta',
    client: 'Calon Mempelai Wanita',
    description: `Dari setiap sentuhan brush, detail makeup, sampai finishing look—semuanya punya proses dan cerita tersendiri. 🤍
    
    Terima kasih @sucii.rhmwt sudah mempercayakan momen ini bersama FYPotret. 📸✨
    
    #FYPotret #BehindTheScene #MakeupBehindTheScene #MakeupArtis`,
    instagramUrl: 'https://www.instagram.com/p/Db9wHXEzixp/',
  },


  // 38. Lamaran - Makeup Touch-Up
  {
    id: 'ig-16',
    title: 'Behind The Scenes: Riasan Cantik Lamaran',
    category: 'prewedding',
    categoryLabel: 'Lamaran & Prewed',
    image: '/portfolio/p16_Db9v6fQzGta.jpg',
    aspect: 'tall',
    location: 'Jakarta Selatan',
    client: 'Calon Pengantin',
    description: `Di balik setiap riasan, ada proses, ketelitian, dan cerita yang nggak selalu terlihat. ✨
    
    Terima kasih kak @sucii.rhmwt sudah mengabadikan momen indah ini bersama FYPotret. 🤍
    
    #FYPotret #FYPotretPhotography #FotograferIndonesia #FotograferJabodetabek`,
    instagramUrl: 'https://www.instagram.com/p/Db9v6fQzGta/',
  },


  // 39. Wedding - Pamer Cincin Kawin
  {
    id: 'ig-15',
    title: 'Pamer Cincin Pernikahan di Pelaminan',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p15_DbnAcriE8hH.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Pengantin Bahagia',
    description: `Satu hari yang penuh cinta, sejuta kenangan yang akan selalu dikenang. 🤍
    
    Terima kasih telah mempercayakan FY Potret untuk mengabadikan momen istimewa ini. Merupakan sebuah kehormatan bisa menjadi bagian dari hari bahagia ini
    
    #FYPotret #FYPotretWedding #WeddingIndonesia #WeddingPhotographer #WeddingPhotography #WeddingCouple #WeddingVibes #HariPernikahan #Pernikahan`,
    instagramUrl: 'https://www.instagram.com/p/DbnAcriE8hH/',
  },


  // 40. Wedding - Pamer Buku Nikah
  {
    id: 'ig-14',
    title: 'Momen Sah & Bahagia Pamer Buku Nikah',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p14_DbnAQxzk_XR.jpg',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Sepasang Pengantin Baru',
    description: `Akhirnya, buku baru dimulai. 🤍📖 Bukan sekadar buku, tetapi awal dari perjalanan seumur hidup yang dipenuhi cinta, doa, dan kebersamaan. Selamat atas pernikahannya, semoga setiap halaman dipenuhi kebahagiaan dan keberkahan. 💍✨
    
    Terima kasih telah mempercayakan FY Potret untuk mengabadikan momen spesial kalian. Semoga kenangan indah ini selalu abadi. 📸✨
    
    #FYPotret #Wedding #WeddingPhotography #WeddingPhotographer #WeddingDay #JustMarried #HappyWedding #Pernikahan #PernikahanIndonesia #FotoPernikahan #WeddingMoment #WeddingPortrait #LoveStory #Pengantin #MomenBahagia #CaptureTheMoment #ForeverStartsNow #CoupleGoals #AkadNikah #WeddingInspiration`,
    instagramUrl: 'https://www.instagram.com/p/DbnAQxzk_XR/',
  },


  // 41. Wedding - Sungkeman Akad
  {
    id: 'ig-13',
    title: 'Sungkeman Penuh Haru & Restu Akad Nikah',
    category: 'wedding',
    categoryLabel: 'Wedding & Akad',
    image: '/portfolio/p13_Dbm_6vmEwfE.jpg',
    aspect: 'tall',
    location: 'Tangerang',
    client: 'Prosesi Akad Nikah',
    description: `Selamat atas pernikahannya! 🤍
    selalu dipenuhi kebahagiaan, keberkahan, dan cinta yang tak pernah pudar. Selamat menempuh hidup baru! 💍✨
    
    Terima kasih telah memilih FY Potret untuk mengabadikan momen indah kalian. 🤍
    
    #FYPotret #WeddingPhotography #WeddingPhotographer #WeddingDay #HappyWedding #JustMarried #Pengantin #Pernikahan #MomenBahagia #WeddingMoment #LoveStory #CoupleGoals #WeddingInspiration #FotoPernikahan #JasaFotografi #WeddingPortrait #IndonesiaWedding #WeddingIndonesia #CaptureTheMoment #foreverstartsnow`,
    instagramUrl: 'https://www.instagram.com/p/Dbm_6vmEwfE/',
  },


  // 42. Wedding - Dian & Rizky Pelaminan
  {
    id: 'ig-9',
    title: 'Pelaminan Sakral Penuh Bunga & Doa',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/portfolio/p9_DbVNZCJFIJL.jpg',
    aspect: 'tall',
    location: 'Pelaminan Tradisional Modern',
    client: 'Dian & Rizky',
    description: `💐 Happy Wedding, Tante Chris!
    Selamat atas hari bahagia ini. Semoga ikatan pernikahan yang telah dipersatukan dipenuhi dengan cinta yang tulus, kebahagiaan yang tak berujung, serta keberkahan dalam setiap langkah kehidupan bersama. Selamat menempuh hidup baru. ❤️
    
    #HappyWedding #WeddingDay #ForeverBeginsToday #HappilyEverAfter #LoveForever #WeddingMoments #FYPotret`,
    instagramUrl: 'https://www.instagram.com/p/DbVNZCJFIJL/',
  },


  // 43. Wedding - Dian Mahkota Emas
  {
    id: 'ig-8',
    title: 'Potret Anggun Mahkota & Kebaya Emas',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/portfolio/p8_DbVNIwIFLbn.jpg',
    aspect: 'tall',
    location: 'Gedung Pernikahan Tangerang',
    client: 'Pengantin Wanita Dian',
    description: `✨ Happy Wedding, Tante Chris!
    Wishing you both a lifetime filled with love, laughter, and endless happiness.
    
    #HappyWedding #WeddingDay #ForeverBeginsToday #HappilyEverAfter #LoveForever #WeddingMoments #FYPotret`,
    instagramUrl: 'https://www.instagram.com/p/DbVNIwIFLbn/',
  },


  // 44. Wedding - Dian & Rizky
  {
    id: 'ig-7',
    title: 'Kehangatan Cinta & Senyum Pengantin Baru',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/portfolio/p7_DbVM3ScFJoX.jpg',
    aspect: 'tall',
    location: 'Tangerang Selatan',
    client: 'Dian & Rizky',
    description: `💍 Happy Wedding, Tante Chris!
    Selamat menempuh perjalanan hidup yang baru. Semoga cinta, kebahagiaan, kesehatan, dan keberkahan selalu menyertai setiap langkah Tante dan pasangan. Semoga menjadi keluarga yang harmonis hingga selamanya. 🤍
    
    #HappyWedding #WeddingDay #ForeverBeginsToday #HappilyEverAfter #LoveForever #WeddingMoments #FYPotret`,
    instagramUrl: 'https://www.instagram.com/p/DbVM3ScFJoX/',
  },


  // 45. Wisuda - Rooftop Skyline
  {
    id: 'ig-6',
    title: 'Golden Hour Rooftop Sky Portrait',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p6_DbOWVZSk3Xz.jpg',
    aspect: 'tall',
    location: 'Jakarta Skyline Rooftop',
    client: 'Wisudawati Glamour',
    description: `🎓 Rayakan Momen Wisudamu!
    
    Setiap lembar tugas, setiap malam begadang, setiap tantangan, hingga akhirnya hari ini tiba.
    
    #FYPOTRET #HappyGraduation #GraduationPhotography #Wisuda #GraduationDay #FotoWisuda #GraduationPortrait #PortraitPhotography #CelebrateAchievement #CaptureTheMoment #PhotographerIndonesia`,
    instagramUrl: 'https://www.instagram.com/p/DbOWVZSk3Xz/',
  },


  // 46. Wisuda - Restu Kedua Orang Tua
  {
    id: 'ig-5',
    title: 'Restu & Bangga Kedua Orang Tua',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p5_DbOWOPjE9jN.jpg',
    aspect: 'tall',
    location: 'Rooftop Wisuda Senayan',
    client: 'Keluarga Besar Sarah',
    description: `Behind every graduation photo is years of hard work, prayers, and perseverance. 🎓
    
    Biarkan setiap pelukan, tawa, dan air mata bahagia menjadi kenangan yang tak terlupakan melalui setiap jepretan FYPOTRET.
    
    #FYPOTRET #HappyGraduation #GraduationPhotography #Wisuda #GraduationDay #FotoWisuda #GraduationPortrait #PortraitPhotography #CelebrateAchievement #CaptureTheMoment #PhotographerIndonesia #FotograferDepok`,
    instagramUrl: 'https://www.instagram.com/p/DbOWOPjE9jN/',
  },


  // 47. Wisuda - Dynamic Fashion 05mm Look
  {
    id: 'ig-4',
    title: 'Dynamic & Fashion Graduation Outdoor',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p4_DbOWBkKE80l.jpg',
    aspect: 'tall',
    location: 'Stadion Outdoor Jakarta',
    client: 'Wisudawati Sarah',
    description: `🎓 Satu Bab Berakhir, Bab Baru Dimulai.
    
    Wisuda bukanlah akhir dari perjalanan, melainkan awal dari petualangan yang lebih besar.
    
    #FYPOTRET #Graduation #HappyGraduation #Wisuda2026 #FotoWisuda #GraduationPhotoshoot #PhotographerIndonesia #FotograferDepok #CaptureYourStory #PortraitPhotography`,
    instagramUrl: 'https://www.instagram.com/p/DbOWBkKE80l/',
  },


  // 48. Wisuda - Pelukan Ibu
  {
    id: 'ig-3',
    title: 'Pelukan Haru & Bangga Ibu Tercinta',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p3_DbOV1UJk41A.jpg',
    aspect: 'tall',
    location: 'Lobi Wisuda Jakarta',
    client: 'Ibu & Wisudawati',
    description: `Karena hari wisuda hanya datang sekali, tetapi kenangannya akan selalu hidup dalam setiap foto.
    
    📸 Graduation Session Available
    📍 Jakarta • Jabodetabek
    
    #FYPOTRET #HappyGraduation #GraduationPhotography #GraduationPhotos #Wisuda #FotoWisuda #FotograferWisuda #FotograferDepok #PhotographerIndonesia`,
    instagramUrl: 'https://www.instagram.com/p/DbOV1UJk41A/',
  },


  // 49. Wisuda - Lailonas Glow
  {
    id: 'ig-2',
    title: 'Glow & Senyum Bahagia Sarjana Baru',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p2_DbOVvb6E70Q.jpg',
    aspect: 'tall',
    location: 'Gedung Wisuda Jakarta',
    client: 'Wisudawati Lailonas',
    description: `🎓 Selamat Wisuda! ✨
    
    Setiap langkah kecil yang kamu ambil telah membawamu sampai di titik ini.
    
    #FYPOTRET #HappyGraduation #GraduationPhotography #GraduationPhotos #Wisuda #FotoWisuda #FotograferWisuda #FotograferDepok #PhotographerIndonesia #PortraitPhotography #GraduationMemories`,
    instagramUrl: 'https://www.instagram.com/p/DbOVvb6E70Q/',
  },


  // 50. Wisuda - Ch Lailonas, S.Ak Family
  {
    id: 'ig-1',
    title: 'Selebrasi Wisuda Bersama Keluarga Tercinta',
    category: 'graduation',
    categoryLabel: 'Wisuda',
    image: '/portfolio/p1_DbOVpy9kzB1.jpg',
    aspect: 'tall',
    location: 'Jakarta Convention Center',
    client: 'Ch Lailonas, S.Ak',
    description: `🎓 Rayakan Momen Wisudamu Bersama Orang Terkasih 🤍
    
    #FYPOTRET #HappyGraduation #Graduation #GraduationPhotography #GraduationPhotoshoot #GraduationDay #GraduationPortrait #Wisuda #Wisuda2026 #FotoWisuda #JasaFotoWisuda #PhotographerIndonesia #FotograferDepok`,
    instagramUrl: 'https://www.instagram.com/p/DbOVpy9kzB1/',
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'doc-ultimate-wcc',
    category: 'wedding',
    categories: ['wedding', 'event', 'prewedding'],
    title: 'Dokumentasi Acara + WCC',
    tagline: '1 FG + 1 VG + 1 WCC: Paket komplit foto, video sinematik & wedding content creator',
    price: 'Rp 2.000.000',
    isPopular: true,
    duration: 'Dokumentasi Selama Acara',
    deliverables: 'Semua file RAW + EDIT lengkap via Google Drive / Link download',
    features: [
      '1 FG (Fotografer) + 1 VG (Videografer) + 1 WCC (Content Creator)',
      'Dokumentasi foto selama acara',
      'Dokumentasi video selama acara',
      'Dokumentasi Konten selama acara',
      'Semua file RAW + EDIT',
      'Foto pilihan yang sudah diedit (color grading & retouch)',
      'Semua hasil dikirim melalui Google Drive / Link download',
      'Free transporttt (Gratis biaya transportasi)',
    ],
  },
  {
    id: 'doc-foto-video',
    category: 'wedding',
    categories: ['wedding', 'prewedding', 'event'],
    title: 'Dokumentasi Acara Foto & Video',
    tagline: '1 FG + 1 VG: Paket lengkap foto profesional & liputan video selama acara',
    price: 'Rp 1.650.000',
    duration: 'Dokumentasi Selama Acara',
    deliverables: 'Semua file RAW + EDIT lengkap via Google Drive / Link download',
    features: [
      '1 FG (Fotografer) + 1 VG (Videografer)',
      'Dokumentasi foto selama acara',
      'Dokumentasi video selama acara',
      'Semua file RAW + EDIT',
      'Foto pilihan yang sudah diedit (color grading & retouch)',
      'Semua hasil dikirim melalui Google Drive / Link download',
      'Free transporttt (Gratis biaya transportasi)',
    ],
  },
  {
    id: 'doc-foto-only',
    category: 'graduation',
    categories: ['graduation', 'wedding', 'prewedding', 'event'],
    title: 'Dokumentasi Acara Foto',
    tagline: '1 FG: Dokumentasi foto esensial profesional untuk wisuda, lamaran & acara',
    price: 'Rp 850.000',
    duration: 'Dokumentasi Selama Acara',
    deliverables: 'Semua file RAW + EDIT lengkap via Google Drive / Link download',
    features: [
      '1 FG (Fotografer)',
      'Dokumentasi foto selama acara',
      'Semua file RAW + EDIT',
      'Foto pilihan yang sudah diedit (color grading & retouch)',
      'Semua hasil dikirim melalui Google Drive / Link download',
      'Free transporttt (Gratis biaya transportasi)',
    ],
  },
  {
    id: 'birthday-special',
    category: 'birthday',
    categories: ['birthday', 'event'],
    title: 'Paket Acara Birthday',
    tagline: '1 FG + 1 Assistant Pose: Dokumentasi foto & video pesta ulang tahun ceria',
    price: 'Rp 500.000',
    duration: 'Dokumentasi Selama Acara',
    deliverables: 'Semua file RAW + edit lengkap via Google Drive / Link download',
    features: [
      '1 FG (Fotografer) + 1 Assistant Pose',
      'Dokumentasi foto + video selama acara',
      'Semua file RAW + edit',
      'Foto pilihan edit (color grading & retouch)',
      'Hasil via Google Drive / link download',
      'Sudah termasuk transport (Free transport)',
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
    name: 'Sarah & Singgih',
    role: 'Pasangan Lamaran Studio Jakarta',
    category: 'Lamaran',
    avatar: '/portfolio/p39_DeKDqlqk26K.jpg',
    quote: 'Sesi foto engagement kami di studio terabadikan sempurna, konsepnya elegan dan arahannya sangat nyaman. Terima kasih banyak tim FYPotret!',
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
