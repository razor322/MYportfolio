import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center md:py-2 py-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          {/* Desktop Layout - hidden on mobile */}
          <div className="hidden md:block">
            <div className="absolute top-0 right-0 z-10">
              <Image
                src="/images/foto.jpg"
                alt="Gybran Nauval Yuhandika"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-lg"
                width={320}
                height={320}
              />
            </div>

            <div className="pt-15 lg:pt-15 pr-72 lg:pr-88">
              <h1 className="text-xl lg:text-2xl xl:text-9xl 2xl:text-[8rem] font-bold leading-none tracking-tight">
                Web &<br />
                Mobile
                <br />
                <span className="text-primary">Developer</span>
              </h1>
            </div>

            <div className="absolute top-72 lg:top-96 xl:top-[28rem] right-0 max-w-xs text-right space-y-2">
              <p className="text-lg text-muted-foreground">
                Hello! I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Gybran Nauval Yuhandika
                </span>
              </p>
              <p className="text-base text-muted-foreground">
                3+ years of crafting innovative projects 🔥
              </p>
            </div>

            <div className="bottom-0 left-0 flex items-center gap-4 mb-4 mt-2">
              <Link
                href="https://github.com/razor322"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="GitHub"
                target="_blank"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gybrannauval1309/"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:nauvalgybran@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="Email"
                target="_blank"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/gybranz_32/"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Layout - visible only on mobile */}
          <div className="block md:hidden space-y-8">
            {/* Title and Social Icons at top */}
            <div className="space-y-6 px-6">
              <h1 className="text-5xl sm:text-7xl font-bold  leading-none tracking-tight">
                Web &<br />
                Mobile
                <br />
                <span className="text-primary">Developer</span>
              </h1>

              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="mailto:gybran@example.com"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Photo and greeting text below */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/images/foto.jpg"
                alt="Gybran Nauval Yuhandika"
                className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                width={192}
                height={192}
              />

              <div className="text-center space-y-2">
                <p className="text-base text-muted-foreground">
                  Hello! I&apos;m{" "}
                  <span className="font-semibold text-foreground">
                    Gybran Nauval Yuhandika
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  4+ years of crafting innovative projects 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
