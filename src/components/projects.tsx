import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { FrostedCard } from "./frosted-card";
import { ScrollAnimation } from "./scroll-animation";
import { TiltCard } from "./tilt-card";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1648260296318-e91c8eb336f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2MzcwNzAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNjk0ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Generator",
      description: "An AI-powered portfolio builder that helps developers create stunning portfolio websites in minutes.",
      image: "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNzYwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "OpenAI", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Featured <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A selection of my recent work showcasing my skills and creativity.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <TiltCard>
                  <FrostedCard className="p-0 overflow-hidden h-full">
                    <div className="relative overflow-hidden aspect-video">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2">{project.title}</h3>
                      <p className="text-white/60 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-amber-900/20 border border-amber-900/30 rounded text-xs text-amber-300 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 border-amber-900/30 hover:bg-amber-900/20 bg-white/5 backdrop-blur-sm"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-700 hover:to-amber-800"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </FrostedCard>
                </TiltCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}