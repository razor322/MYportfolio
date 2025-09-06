import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/constants/projects";
type SectionProps = {
  language: "en" | "id";
};

export function ProjectsSection({ language }: SectionProps) {
  const currentProjects = projectsData[language];
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            {language === "en" ? "Featured Projects" : "Proyek Unggulan"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <Card
                key={project.name}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    width={500}
                    height={300}
                  />
                </div>
                <CardHeader>
                  {/* Menggunakan div untuk menampung link dan ikon */}
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">
                      {/* Link untuk nama proyek */}
                      <Link
                        href={
                          project.url ? project.url : "/project-in-progress"
                        }
                        target={
                          project.url ? "_blank" : "/_project-in-progress"
                        }
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {project.name}
                        {/* Tampilkan ikon hanya jika ada URL eksternal */}
                        {project.url && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 h-4 w-4"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        )}
                      </Link>
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
