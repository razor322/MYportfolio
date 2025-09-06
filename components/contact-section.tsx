import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-background/80">
              Ready to work together? Get in touch!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-background/10 border-background/20 hover:bg-background/20 transition-colors">
              <div className="space-y-3 text-center">
                <Link href="mailto:nauvalgybran@gmail.com" target="_blank">
                  <Mail className="w-8 h-8 mx-auto text-background" />
                  <div>
                    <p className="font-medium text-background mt-2">Email</p>
                    <p className="text-sm text-background/80">
                      nauvalgybran@gmail.com
                    </p>
                  </div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-background/10 border-background/20 hover:bg-background/20 transition-colors">
              <div className="space-y-3 text-center">
                <MessageCircle className="w-8 h-8 mx-auto text-background" />
                <div>
                  <p className="font-medium text-background">WhatsApp</p>
                  <p className="text-sm text-background/80">
                    +62 813-7186-1309
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/10 border-background/20 hover:bg-background/20 transition-colors">
              <div className="space-y-3 text-center">
                <Link
                  href="https://www.linkedin.com/in/gybran/"
                  target="_blank"
                >
                  <Linkedin className="w-8 h-8 mx-auto text-background" />
                  <div>
                    <p className="font-medium text-background mt-2">LinkedIn</p>
                    <p className="text-sm text-background/80">
                      gybrannauval1309
                    </p>
                  </div>
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-background/10 border-background/20 hover:bg-background/20 transition-colors">
              <div className="space-y-3 text-center">
                <Link href="https://github.com/razor322" target="_blank">
                  <Github className="w-8 h-8 mx-auto text-background" />
                  <div>
                    <p className="font-medium text-background mt-2">GitHub</p>
                    <p className="text-sm text-background/80">
                      github.com/razor322
                    </p>
                  </div>
                </Link>
              </div>
            </Card>
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
