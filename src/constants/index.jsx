import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import berita1 from "../assets/berita/berita1.jpg";
import berita2 from "../assets/berita/berita2.jpg";
import berita3 from "../assets/berita/berita3.jpeg";
import berita4 from "../assets/berita/berita4.jpg";
import berita5 from "../assets/berita/berita5.jpg";
import berita6 from "../assets/berita/berita6.jpg";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Visi & Misi", href: "#features" },
  { label: "Profil", href: "#workflow" },
  { label: "Program Studi", href: "#pricing" },
  { label: "Berita", href: "#testimonials" },  
  { label: "Testimoni Lulusan", href: "#testimoni" },
  

];

export const testimoni = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
export const testimonials = [
  {
    image: berita1,
    text: "Dirjen Dikti Dengarkan Aspirasi Rektor-Rektor di Sumatera Utara Untuk Ciptakan Transformasi Pendidikan Tinggi",
  },
  {
    image: berita2,
    text: "SIMANTAP Seminar Nasional Matematika dan terapan ",
  },
  {
    image: berita3,
    text: "Uji Publik Calon Panitia Seleksi Satgas Pencegahan Penanganan Kekerasan Seksual (PPKS)",
  },
  {
    image: berita4,
    text: "LLDIKTI Wilayah I Sukses Gelar Rakor Kehumasan Perdana, 9 Poin Rekomendasi Tercipta",
  },
  {
    image: berita5,
    text: "Mahasiswa STIKOM Tunas Bangsa Gelar Aksi Donor Darah",
  },
  {
    image: berita6,
    text: "Peringatan Maulid Nabi Muhammad SAW 1446 H / 2024 M STIKOM TUNAS BANGSA",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Visi",
    description:
      "Menjadi Salah Satu Perguruan tinggi Terbaik, dalam Pengembangan Ilmu Komputer dan Profesi dan Vokasi dalam Menghasilkan Sumber Daya Manusia yang memiliki kompetensi tinggi secara Profesional di Tingkat Regional Sumatera Utara Tahun 2027 dan Indonesia Tahun 2032.",
  },
  {
    icon: <Fingerprint />,
    text: "Misi",
    description: [
      "1. Melaksanakan Pembelajaran, Penelitian dan Pengabdian Masyarakat yang berkualitas, kreatif, inovatif, bernilai dan berkesinambungan dalam menyongsong revolusi industri 4.0.",
      "2. Melaksanakan Penjaminan Mutu internal dan eksternal yang terarah, terukur dan berkesinambungan.",
      "3. Menyelenggarakan tata kelola organisasi yang baik dengan didukung oleh sistem informasi yang terintegrasi.",
      "4. Menyelenggarakan budaya Akademik yang mampu mewujudkan Visi STIKOM Tunas Bangsa.",
      "5. Mengembangkan jejaring kerjasama dalam negeri dan luar negeri untuk meningkatkan kapasitas dan kapabilitas institusi.",
      "6. Mengembangkan SDM dan lulusan yang Profesional, Unggul, Budi Pekerti dan berkompetensi.",
    ],
  },
  {
    icon: <ShieldHalf />,
    text: "Tujuan",
    description: [
      "1. Menghasilkan Tri Dharma Perguruan Tinggi dalam rangka merespon perkembangan dan kemajuan di bidang sistem informasi dan informatika dalam menyongsong revolusi industri 4.0",
      "2. Menghasilkan Sistem Penjaminan Mutu yang baik di tingkat institusi dan program studi melalui Lembaga Penjaminan Mutu",
      "3. Menghasilkan tata kelola organisasi yang baik dengan didukung oleh sistem informasi yang terintegrasi.",
      "4. Menghasilkan Budaya Akademik bersifat responsif terhadap kegiatan seminar-seminar dan konferensi-konferensi bertaraf nasional dan internasional.",
      "5. Menghasilkan kerjasama dalam negeri dan luar negeri untuk meningkatkan kapasitas dan kapabilitas institusi.",
      "6. Menghasilkan daya saing SDM dan Lulusan, baik tingkat nasional maupun Internasional.",
    ],
  },
  {
    icon: <BatteryCharging />,
    text: "Strategi",
    description: [
      "1. Meningkatkan Akreditasi institusi, program studi yang baik oleh Lembaga Akreditasi Nasional",
      "2. Terciptanya pemahaman Visi, Misi, Tujuan Dan Sasaran di lingkungan Civitas akademika",
      "3. Mewujudkan Tata Pamong, Kepemimpinan, Sistem Pengelolaan dan Penjaminan Mutu yang Kredibel, transparan, akuntabel, bertanggung jawab dan adil",
      "4. Merekrut Mahasiswa terbaik dan tercapainya lulusan yang cendikia yang mampu bersaing di tingkat nasional dan internasional.",
      "5. Meningkatkan Kemampuan Sumber Daya Manusia pada etika dan berorientasi pada prestasi kinerja dalam memajukan civitas akademika.",
      "6. Peningkatan Kurikulum, Pembelajaran dan suasana akademik yang responsif terhadap kemajuan teknologi di bidang Sistem Informasi dan Informatika.",
      "7. Peningkatan sarana dan Prasarana institusi serta menjalankan Sistem Informasi yang terintegrasi dalam layanan prima yang efektif dan efisien.",
      "8. Meningkatkan budaya penelitian dan pengabdian pada masyarakat serta memperkuat kolaborasi kerjasama dalam iklim akademik yang berkesinambungan ",
    ],
    },
];

export const checklistItems = [
  {
    title: "Sejarah STIKOM Tunas Bangsa",
    description: [
      "Sekolah Tinggi Ilmu Komputer Tunas Bangsa diawali dengan berdirinya Akademi Manajemen Informatika Komputer Tunas Bangsa di bawah pengelolaan Yayasan Muhammad Nasir AMIK Tunas Bangsa pada tahun 2003. Berdasarkan SK Mendiknas RI No.166/D/0/2003 Institusi ini menyelenggarakan 2 (dua) Program Studi yaitu Manajemen Informatika dan Komputerisasi Akuntansi. Kedua program studi tersebut telah terakreditasi BAN PT. Pada tahun 2008 Program studi Manajemen Informatika (MI) terakreditasi dengan hasil Baik (B) dan tahun 2012 Program Studi Komputerisasi Akuntansi (KA) terakreditasi dengan hasil Baik (B).",
      
      "Seiring berjalannya waktu dan tingginya  minat masyarakat untuk jenjang sarjana maka diusulkan pembukaan Program Strata 1 (S1) bidang ilmu komputer. Pada tanggal 11 September 2014 tepatnya 11 tahun berjalannya AMIK Tunas Bangsa berdirilah Sekolah Tinggi Ilmu Komputer Tunas Bangsa. Berdasarkan Surat Keputusan dari Kementerian Pendidikan SK MENDIKBUD RI No. 408/E/O/2014 STIKOM Tunas Bangsa menyelenggarakan 2 (Dua) Program Studi yaitu Sistem Informasi dan Teknik Informatika. Kedua program studi tersebut telah terakreditasi BAN PT pada tahun 2016 program studi Sistem Informasi (SI) dengan hasil Baik (B) dan Tahun 2024 program studi Teknik Informatika (TI) dengan hasil Baik (B).",
      
      "Setelah 19 tahun Pendidikan vokasi AMIK Tunas Bangsa berjalan dan 8 Tahun program sarjana STIKOM Tunas Bangsa berjalan maka kedua institusi tersebut disatukan menjadi Sekolah Tinggi Ilmu Komputer Tunas Bangsa dengan Surat Keputusan Kementerian Pendidikan dan Kebudayaan Riset Teknologi SK MENDIKBUD RISTEK RI. No.513/E/0/2022 tanggal 13 Juli 2022 menyelenggarakan 4 (empat) program studi yaitu Manajemen Informatika (MI), Komputerisasi Akuntansi (KA), Sistem Informasi (SI) dan Teknik Informatika (TI). Seluruh Program Studi yang diselenggarakan telah Terakreditasi peringkat B dan Baik Sekali dan hanya program studi Teknik Informatika saat ini masih peringkat cukup (C).",
      
      "Yayasan Muhammad Nasir AMIK dan STIKOM Tunas Bangsa dipimpin oleh Bapak H.Ahmad Ridwansyah. Ketua Sekolah Tinggi Ilmu Komputer Tunas Bangsa Dr. Dedy Hartama (2022-2026) berdasarkan SK Yayasan Nomor. No. 003/SK/KY/YMN-ASTB/STB/VII/2022 dan dibantu oleh Wakil Ketua 1 Dr. M. Safii, M.Kom dan Wakil Ketua 2 Riki Winanjaya, M.Kom"
    ]
  }
];

export const pricingOptions = [
  {
    title: "Manajemen Informatika",
    price: "Rp 6.000.000",
    features: ["Mata Kuliah", "Sesi", "Fasilitas", "Organisasi"],
    courses: [
      "Bahasa Indonesia",
      "Pemrograman Web",
      "Desain Grafis",
      "Algoritma dan Struktur Data",
      "Basis Data",
      "Jaringan Komputer",
      "Sistem Operasi",
      "Pengembangan Aplikasi Mobile",
      "Manajemen Proyek TI",
      "Keamanan Sistem Informasi",
      "Analisis Sistem",
      "Pemrograman Berorientasi Objek",
      "Komputasi Awan",
      "Internet of Things (IoT)",
      "Kecerdasan Buatan",
      "Manajemen Basis Data",
      "Pemrograman Python",
      "Pengantar Big Data",
      "Etika Profesi TI",
      "Kewirausahaan Teknologi",
    ],
    facilities: [
      "Lab Komputer Modern",
      "Akses E-Library 24 Jam",
      "Ruang Kelas Ber-AC",
      "WiFi High-Speed",
      "Software Lisensi Resmi",
      "Laboratorium Jaringan",
      "Ruang Diskusi Kelompok",
      "Konsultasi Dosen 1-on-1",
      "Program Magang Industri",
      "Sertifikasi Kompetensi",
    ],
    organisasies: [
      "Badan Eksekutif Mahasiswa (BEM)",
      "Himpunan Mahasiswa Jurusan (HMJ)",
      "Unit Kegiatan Mahasiswa Penelitian (UKM Penelitian)",
      "Komunitas IT & Programming",
      "English Discussion Club (EDC)",
      "UKM Olahraga",
      "UKM Seni & Budaya",
      "Komunitas Robotika",
      "Islamic Student Association",
      "Social Community Service"
    ],
  },
  {
    title: "Sistem Informasi",
    price: "Rp 6.000.000",
    features: ["Mata Kuliah", "Sesi", "Fasilitas", "Organisasi"],
    courses: [
      "Bahasa Inggris",
      "Analisis Sistem",
      "Basis Data",
      "Pemrograman Web",
      "Manajemen Proyek TI",
      "Keamanan Jaringan",
      "Sistem Informasi Manajemen",
      "Pengembangan Aplikasi Mobile",
      "Komputasi Awan",
      "Internet of Things (IoT)",
      "Kecerdasan Buatan",
      "Manajemen Basis Data",
      "Pemrograman Python",
      "Pengantar Big Data",
      "Etika Profesi TI",
      "Kewirausahaan Teknologi",
      "Desain Grafis",
      "Algoritma dan Struktur Data",
      "Jaringan Komputer",
      "Sistem Operasi",
    ],
    facilities: [
      "Studio Multimedia",
      "Lab Basis Data",
      "IoT Workshop",
      "Cloud Computing Lab",
      "Ruang Presentasi",
      "Kantor Karir",
      "Komunitas Developer",
      "Akses Platform Coursera",
      "Lab Kecerdasan Buatan",
      "Hackathon Rutin",
    ],
    organisasies: [
      "Badan Eksekutif Mahasiswa (BEM)",
      "Himpunan Mahasiswa Jurusan (HMJ)",
      "Unit Kegiatan Mahasiswa Penelitian (UKM Penelitian)",
      "Komunitas IT & Programming",
      "English Discussion Club (EDC)",
      "UKM Olahraga",
      "UKM Seni & Budaya",
      "Komunitas Robotika",
      "Islamic Student Association",
      "Social Community Service"
    ],
  },
  {
    title: "Teknik Informatika",
    price: "Rp 6.000.000",
    features: ["Mata Kuliah", "Sesi", "Fasilitas", "Organisasi"],
    courses: [
      "Algoritma dan Pemrograman",
      "Jaringan Komputer",
      "Keamanan Jaringan",
      "Pemrograman Web",
      "Basis Data",
      "Sistem Operasi",
      "Pengembangan Aplikasi Mobile",
      "Manajemen Proyek TI",
      "Keamanan Sistem Informasi",
      "Analisis Sistem",
      "Pemrograman Berorientasi Objek",
      "Komputasi Awan",
      "Internet of Things (IoT)",
      "Kecerdasan Buatan",
      "Manajemen Basis Data",
      "Pemrograman Python",
      "Pengantar Big Data",
      "Etika Profesi TI",
      "Kewirausahaan Teknologi",
      "Desain Grafis",
    ],
    facilities: [
      "Robotics Lab",
      "Cybersecurity Lab",
      "Game Development Studio",
      "Data Center Mini",
      "3D Printing Workshop",
      "Ruang Server",
      "Programming Bootcamp",
      "Competitive Programming Club",
      "Open Source Project",
      "Startup Incubator",
    ],
    organisasies: [
      "Badan Eksekutif Mahasiswa (BEM)",
      "Himpunan Mahasiswa Jurusan (HMJ)",
      "Unit Kegiatan Mahasiswa Penelitian (UKM Penelitian)",
      "Komunitas IT & Programming",
      "English Discussion Club (EDC)",
      "UKM Olahraga",
      "UKM Seni & Budaya",
      "Komunitas Robotika",
      "Islamic Student Association",
      "Social Community Service"
    ],
  },
];



export const stikomLinks = [
  { href: "#", text: "Jalan Jenderal Sudirman Blok A Nomor 1, 2, 3" },
  { href: "#", text: "Phone: (0622) 22431" },
  { href: "#", text: "Email: admin@stikomtunasbangsa.ac.id" },

];

export const tautanLinks = [
  { href: "#", text: "PDDIKTI" },
  { href: "#", text: "SINTA" },
  { href: "#", text: "ARJUNA" },
  { href: "#", text: "RAMA" },
  { href: "#", text: "GARUDA" },
  { href: "#", text: "ANJANI" },
  { href: "#", text: "KEMDIKBUD" },
  { href: "#", text: "DITJEN DIKTI" },
];

export const layananLinks = [
  { href: "#", text: "Portal Akademik" },
  { href: "#", text: "E-Learning" },
  { href: "#", text: "Perpustakaan Digital & Repository" },
];
