import { Briefcase, Calendar } from "lucide-react";
import { FrostedCard } from "./frosted-card";
import { ScrollAnimation } from "./scroll-animation";
import { TiltCard } from "./tilt-card";

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "TechCorp Solutions",
      period: "June 2024 - Present",
      description: "Developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features and improved application performance by 30%.",
      achievements: [
        "Built responsive UI components used across multiple projects",
        "Implemented RESTful APIs serving 10K+ daily requests",
        "Mentored 2 junior developers in modern web practices",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartupHub Inc",
      period: "Jan 2024 - May 2024",
      description: "Created engaging user interfaces for a SaaS platform serving over 5,000 users. Worked closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Reduced page load time by 40% through optimization",
        "Implemented dark mode feature used by 60% of users",
        "Contributed to design system documentation",
      ],
    },
    {
      title: "Web Development Volunteer",
      company: "Community Tech Initiative",
      period: "Sep 2023 - Dec 2023",
      description: "Volunteered to build websites for local non-profit organizations, helping them establish their online presence and reach more community members.",
      achievements: [
        "Developed 3 websites for non-profit organizations",
        "Trained volunteers in basic web maintenance",
        "Increased online engagement by 150%",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "University Computer Science Dept",
      period: "Jan 2023 - Aug 2023",
      description: "Assisted professors in teaching Introduction to Programming courses. Conducted lab sessions, graded assignments, and provided one-on-one tutoring to students.",
      achievements: [
        "Helped 50+ students improve their coding skills",
        "Created supplementary learning materials",
        "Achieved 4.8/5 student satisfaction rating",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Work <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                My professional journey and the roles that have shaped my career.
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-800/50 via-amber-900/20 to-transparent transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollAnimation key={index} delay={index * 150}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                      <div className="w-4 h-4 rounded-full bg-amber-700 border-4 border-black shadow-lg shadow-amber-900/50" />
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                        <TiltCard>
                          <FrostedCard>
                            <div className="flex items-center gap-2 text-amber-700 mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>

                            <h3 className="mb-1">{exp.title}</h3>
                            
                            <div className="flex items-center gap-2 mb-4">
                              <Briefcase className="w-4 h-4 text-white/60" />
                              <p className="text-white/80">{exp.company}</p>
                            </div>

                            <p className="text-white/70 mb-4">{exp.description}</p>

                            <div className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <div
                                  key={achievementIndex}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 flex-shrink-0" />
                                  <p className="text-sm text-white/60">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </FrostedCard>
                        </TiltCard>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute left-0 md:left-1/2 bottom-0 w-px h-20 bg-gradient-to-b from-transparent to-black transform md:-translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}