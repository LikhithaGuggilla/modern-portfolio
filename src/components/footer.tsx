import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-black via-zinc-900 to-black border-t border-amber-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-2xl bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-2">
                  Alex Johnson
                </p>
                <p className="text-white/60">
                  Computer Science Student & Developer
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="mt-8 pt-8 border-t border-amber-900/10 text-center text-white/60">
              <p>© {currentYear} Alex Johnson. All rights reserved.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  );
}