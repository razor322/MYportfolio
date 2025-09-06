// Definisikan tipe untuk setiap objek proyek
export interface Project {
  name: string;
  description: string;
  stack: string[];
  image: string;
  url: string;
}

// Definisikan tipe untuk data proyek yang mengandung dua bahasa
export interface ProjectsData {
  en: Project[];
  id: Project[];
}
export const projectsData: ProjectsData = {
  en: [
    {
      name: "Emonesia",
      description:
        "A social media emotion detection application built using the IndoBERT model. Designed to analyze emotions in texts from social media X (Twitter) based on user-defined keywords and time ranges. The system provides detailed emotion classification results and generates downloadable PDF reports, offering valuable insights for research and sentiment analysis.",
      stack: ["Flutter", "Dart", "Firebase", "GetX", "Rest API"],
      image: "/projects/emonesia.png",
      url: "https://github.com/razor322/emonesia",
    },
    {
      name: "Dzikra",
      description:
        "An application specifically designed to help you build good habits in the midst of high mobility to remain consistent in fulfilling your daily worship needs",
      stack: ["Flutter", "Dart", "Firebase", "GetX"],
      image: "/projects/dzikra.png",
      url: "https://play.google.com/store/apps/details?id=id.bigio.dzikra&hl=en",
    },
    {
      name: "Raisehand",
      description:
        "An internal employee attendance app by Inovasi360 and Bigio. This app simplifies digital attendance with features such as location-based check-in/check-out, automatic notifications, and leave requests.",
      stack: ["Flutter", "Dart", "Firebase", "GetX"],
      image: "/projects/raisehand.png",
      url: "https://play.google.com/store/apps/details?id=id.inovasi360.attendapp&hl=en&pli=1",
    },
    {
      name: "Trolley Petani",
      description:
        "A simple e-commerce app built with Flutter, designed to provide essential grocery products directly from farmers and ranchers, making it easier for customers to purchase their daily kitchen needs. Awarded the Rising Star title at the UNIMAS University competition.",
      stack: ["Flutter", "Dart"],
      image: "/projects/trolley.png",
      url: "https://github.com/razor322/trolley-v2",
    },
    {
      name: "Catering Management System",
      description:
        "A comprehensive catering management system with order tracking, inventory management, and customer relationship features.",
      stack: ["Next Js", "ShadCN UI", "TypeScript", "Node.js", "Express"],
      image: "/projects/cat2.png",
      url: "https://github.com/razor322/sea-catering",
    },
    {
      name: "Eztix.id",
      description:
        "A web-based ticket booking system that enables users to browse available events, view ticket details, and make reservations seamlessly. The platform includes user profiles, authentication, and login features powered by Firebase. It also provides administrators with tools for managing tickets, reservations, and user data efficiently.",
      stack: [
        "Next Js",
        "firebase ",
        "Tailwind",
        "TypeScript",
        "Node.js",
        "REST API",
      ],
      image: "/projects/ez2.png",
      url: "https://eztix.id/",
    },
    {
      name: "Room and Space Booking Website",
      description:
        "A comprehensive booking system equipped with user management, authentication, and full CRUD functionality. The platform allows users to view available rooms, manage booking lists, and provides administrators with tools to oversee room and user activities efficiently.",
      stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
      image: "/projects/sir2.png",
      url: "",
    },
  ],
  id: [
    {
      name: "Emonesia",
      description:
        "Aplikasi deteksi emosi pada media sosial yang dibangun menggunakan model IndoBERT. Dirancang untuk menganalisis emosi pada teks dari media sosial X (Twitter) berdasarkan kata kunci dan rentang waktu yang ditentukan pengguna. Sistem ini menyajikan hasil klasifikasi emosi secara detail dan menghasilkan laporan PDF yang dapat diunduh, memberikan wawasan berharga untuk penelitian dan analisis sentimen",
      stack: ["Flutter", "Dart", "Firebase", "GetX", "Rest API"],
      image: "/projects/emonesia.png",
      url: "https://github.com/razor322/emonesia",
    },
    {
      name: "Dzikra",
      description:
        "Aplikasi yang dirancang khusus untuk membantu membangun kebiasaan baik di tengah mobilitas tinggi agar tetap konsisten dalam memenuhi kebutuhan ibadah harian.",
      stack: ["Flutter", "Dart", "Firebase", "GetX"],
      image: "/projects/dzikra.png",
      url: "https://play.google.com/store/apps/details?id=id.bigio.dzikra&hl=en",
    },
    {
      name: "Raisehand",
      description:
        "Aplikasi absensi karyawan internal oleh Inovasi360 dan Bigio. Aplikasi ini mempermudah proses absensi digital dengan fitur check-in/check-out berbasis lokasi, notifikasi otomatis, serta pengajuan izin.",
      stack: ["Flutter", "Dart", "Firebase", "GetX"],
      image: "/projects/raisehand.png",
      url: "https://play.google.com/store/apps/details?id=id.inovasi360.attendapp&hl=en&pli=1",
    },
    {
      name: "Trolley Petani",
      description:
        "Aplikasi e-commerce sederhana berbasis Flutter yang menyediakan produk bahan pokok langsung dari petani dan peternak, sehingga memudahkan pelanggan dalam memenuhi kebutuhan dapur sehari-hari. Meraih penghargaan Rising Star pada kompetisi di Universitas UNIMAS",
      stack: ["Flutter", "Dart"],
      image: "/projects/trolley.png",
      url: "https://github.com/razor322/trolley-v2",
    },
    {
      name: "Sistem Manajemen Katering",
      description:
        "Sistem manajemen katering terpadu dengan fitur pelacakan pesanan, manajemen inventori, dan pengelolaan hubungan pelanggan.",
      stack: ["Next Js", "ShadCN UI", "TypeScript", "Node.js", "Express"],
      image: "/projects/cat2.png",
      url: "https://github.com/razor322/sea-catering",
    },
    {
      name: "Eztix.id",
      description:
        "Sistem pemesanan tiket berbasis web yang memungkinkan pengguna menelusuri acara yang tersedia, melihat detail tiket, dan melakukan reservasi dengan mudah. Platform ini dilengkapi dengan profil pengguna, autentikasi, serta fitur login berbasis Firebase. Selain itu, sistem juga menyediakan alat bagi administrator untuk mengelola tiket, reservasi, dan data pengguna secara efisien.",
      stack: [
        "Next Js",
        "firebase ",
        "Tailwind",
        "TypeScript",
        "Node.js",
        "REST API",
      ],
      image: "/projects/ez2.png",
      url: "https://eztix.id/",
    },
    {
      name: "Situs Web Pemesanan Ruang",
      description:
        "Sistem pemesanan terpadu dengan manajemen pengguna, autentikasi, dan fungsi CRUD lengkap. Platform ini memungkinkan pengguna melihat ketersediaan ruangan, mengelola daftar pemesanan, serta menyediakan alat bagi administrator untuk memantau aktivitas ruangan dan pengguna secara efisien.",
      stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
      image: "/projects/sir2.png",
      url: "",
    },
  ],
};
