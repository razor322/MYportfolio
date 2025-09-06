import { Card } from "@/components/ui/card";
import { FaPhp, FaReact, FaHtml5, FaCss3Alt, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import {
  SiDart,
  SiJavascript,
  SiFlutter,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "TypeScript", icon: SiTypescript, color: "#007396" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#808080" },
];

export function SkillsSection() {
  return (
    <section className="py-4 px-4 bg-muted/30 sm:py-4 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={skill.name}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <IconComponent
                    className="w-12 h-12 mx-auto transition-transform duration-300 group-hover:scale-110"
                    // Terapkan warna dari array di sini
                    style={{ color: skill.color }}
                  />
                  <p className="font-medium text-sm">{skill.name}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
