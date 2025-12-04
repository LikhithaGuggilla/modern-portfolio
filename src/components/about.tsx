import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Code2, Award } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                About <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Learn more about my background, education, and what drives my passion for technology.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={100}>
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-amber-900/20 rounded-full blur-2xl" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2MzczODE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student coding"
                  className="relative rounded-full border border-amber-900/20 w-full h-auto aspect-square object-cover"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={200}>
                <p className="text-white/80">
                  I'm a third-year Computer Science student with a passion for building elegant solutions to complex problems. My journey in tech started with curiosity and has evolved into a commitment to continuous learning and innovation.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation delay={300}>
                <p className="text-white/80">
                  When I'm not coding, you can find me contributing to open-source projects, exploring new technologies, or participating in hackathons.
                </p>
              </ScrollAnimation>

              <div className="grid gap-4 mt-8">
                <ScrollAnimation delay={400}>
                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-amber-900/20 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3>Education</h3>
                      <p className="text-white/60">BS in Computer Science, Expected 2025</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={500}>
                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-amber-900/20 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3>Experience</h3>
                      <p className="text-white/60">2+ years of development experience</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={600}>
                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-amber-900/20 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3>Achievements</h3>
                      <p className="text-white/60">Hackathon winner, Dean's List</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}