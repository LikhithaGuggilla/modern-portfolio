import { Code2, Database, Layout, Server, Smartphone, Globe } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "REST APIs"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      skills: ["Figma", "Responsive Design", "Accessibility", "Prototyping"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "iOS", "Android", "Cross-platform"],
    },
    {
      icon: Globe,
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Technical <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise and the tools I work with.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="p-6 bg-gradient-to-br from-white/5 to-white/0 border border-amber-900/20 rounded-xl hover:border-amber-900/40 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center mb-4 group-hover:bg-amber-900/30 transition-colors">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <h3 className="mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-amber-900/10 border border-amber-900/20 rounded-full text-sm text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}