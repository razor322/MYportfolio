import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type SectionProps = {
  language: "en" | "id";
};

// Data pengalaman diatur berdasarkan bahasa
const experiencesData = {
  en: [
    {
      company: "PT. Bejana Investidata Globalindo (Bigio)",
      position: "Intern Mobile Engineer",
      period: "Aug 2024 - Dec 2024",
      description: [
        "Collaborated with product managers and designers to translate requirements into technical specifications, ensuring timely and successful project deliveries.",
        "Participated in code reviews and provided valuable feedback, leading to a 30% reduction in bugs and enhanced code quality.",
        "Improved team collaboration and knowledge sharing by introducing collaborative tools and conducting regular knowledge-sharing sessions.",
        "Developed and launched a new mobile app, increasing user engagement by 30% within the first three months.",
      ],
    },
    {
      company: "PT. Kabau Sirah Semen Padang",
      position: "Intern Full Stack Developer",
      period: "Sept 2023 - Jun 2024",
      description: [
        " Developed a meeting room reservation system for Wisma Semen Padang using Laravel, focusing on system reliability and user experience.",
        "Applied web application development best practices in Laravel, covering design, implementation, and testing phases.",
        " Participated in the full software development lifecycle, delivering a functional, user-friendly, and visually appealing product adopted by 50+ employees.",
        " Implemented API integration for an online ticket booking system, ensuring seamless data flow and real-time updates.",
        "Collaborated with UI/UX and Backend teams to ensure smooth integration of design, functionality, and user experience.",
      ],
    },
  ],
  id: [
    {
      company: "PT. Bejana Investidata Globalindo (Bigio)",
      position: "Intern Mobile Engineer",
      period: "Agu 2024 - Des 2024",
      description: [
        "Berkolaborasi dengan product manager dan desainer untuk menerjemahkan kebutuhan menjadi spesifikasi teknis, memastikan proyek selesai tepat waktu dan berhasil.",
        "Berpartisipasi dalam code review dan memberikan masukan berharga, sehingga mengurangi bug sebesar 30% dan meningkatkan kualitas kode.",
        "Meningkatkan kolaborasi tim serta berbagi pengetahuan dengan memperkenalkan tools kolaboratif dan mengadakan sesi berbagi rutin.",
        "Mengembangkan dan meluncurkan aplikasi mobile baru yang meningkatkan keterlibatan pengguna sebesar 30% dalam tiga bulan pertama.",
      ],
    },
    {
      company: "PT. Kabau Sirah Semen Padang",
      position: "Intern Full Stack Developer",
      period: "Sep 2023 - Jun 2024",
      description: [
        "Mengembangkan sistem reservasi ruang rapat untuk Wisma Semen Padang menggunakan Laravel dengan fokus pada keandalan sistem dan pengalaman pengguna.",
        "Menerapkan praktik terbaik pengembangan aplikasi web di Laravel, meliputi desain, implementasi, dan tahap pengujian.",
        "Berpartisipasi dalam seluruh siklus pengembangan perangkat lunak, menghasilkan produk yang fungsional, ramah pengguna, dan menarik secara visual, serta diadopsi oleh lebih dari 50 karyawan.",
        "Mengimplementasikan integrasi API untuk sistem pemesanan tiket online, memastikan aliran data lancar dan pembaruan real-time.",
        "Berkolaborasi dengan tim UI/UX dan Backend untuk memastikan integrasi desain, fungsionalitas, serta pengalaman pengguna berjalan mulus.",
      ],
    },
  ],
};

const BulletIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-1 h-5 w-5 text-primary"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ExperienceSection({ language }: SectionProps) {
  const currentExperiences = experiencesData[language];
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            {language === "en" ? "Experience" : "Pengalaman"}
          </h2>

          <div className="space-y-6">
            {currentExperiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Perubahan di sini: Merender deskripsi sebagai list */}
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <BulletIcon />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
