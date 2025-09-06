import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Tipe untuk props
type SectionProps = {
  language: "en" | "id";
};
// Objek untuk menyimpan semua teks terjemahan
const translations = {
  en: {
    paragraph: `I am a software engineer with a passion for web development and mobile development. I have experience in building web applications using modern technologies and frameworks. I am always eager to learn new things and improve my skills.`,
    cvButton: "Curriculum Vitae (CV)",
    resumeButton: "Resume",
    portfolioButton: "View Portfolio",
    cvLink: "/documents/CV_ENG.pdf",
    resumeLink: "/documents/RSM_ENG.pdf",
  },
  id: {
    paragraph: `Saya seorang Software Engineer dengan minat besar pada pengembangan web dan mobile. Berpengalaman dalam membangun aplikasi web menggunakan teknologi dan framework modern. Selalu bersemangat untuk mempelajari hal baru dan terus meningkatkan keterampilan.`,
    cvButton: "Curriculum Vitae (CV)",
    resumeButton: "Resume",
    portfolioButton: "Lihat Portofolio",
    cvLink: "/documents/CV_IND.pdf",
    resumeLink: "/documents/RSM_IND.pdf",
  },
};
export function AboutSection({ language }: SectionProps) {
  const content = translations[language];
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/developer-working.png"
                alt="About Gybran"
                className="w-80 h-80 rounded-2xl object-cover shadow-lg"
                width={320}
                height={320}
              />
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground sm:px-4">
                {content.paragraph}
              </p>

              {/* --- PERUBAHAN DI SINI --- */}
              <div className="flex flex-wrap items-center gap-4 px-4">
                {/* Tombol Download CV */}
                <Link
                  href={content.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    {content.cvButton}
                  </Button>
                </Link>

                {/* Tombol Download Resume BARU */}
                <Link
                  href={content.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    {content.resumeButton}
                  </Button>
                </Link>

                {/* Tombol View Portfolio */}
                <Link
                  href="https://bit.ly/portofolio_gybran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 bg-transparent w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {content.portfolioButton}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
