import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollAnimation } from "./scroll-animation";
import { AnimatedGrid } from "./animated-grid";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
import profileImage from "figma:asset/6979c851c400538d703aa37c6135db17ed774d3a.png";
import heroGif from "figma:asset/96e3d083843543f1903311aa69392bf871dbf383.png";
import heroStatic from "figma:asset/13843e2059fbb0a678ed9e19f440cbcf9ca92843.png";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi there! I'm Likhitha";
  const [showCursor, setShowCursor] = useState(true);
  const [isWaving, setIsWaving] = useState(true); // Start with waving on load
  const heroRef = useRef<HTMLDivElement>(null);
  const hasInitialWaveCompleted = useRef(false);
  const hasScrolledAway = useRef(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Handle initial wave on page load
  useEffect(() => {
    // Wave for 3 seconds on initial load, then switch to static
    const initialWaveTimer = setTimeout(() => {
      setIsWaving(false);
      hasInitialWaveCompleted.current = true;
    }, 3000);

    return () => clearTimeout(initialWaveTimer);
  }, []);

  // Handle waving when scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger wave on scroll if initial wave has completed AND user has scrolled away first
          if (hasInitialWaveCompleted.current) {
            if (!entry.isIntersecting) {
              // User scrolled away from hero section
              hasScrolledAway.current = true;
            } else if (entry.isIntersecting && hasScrolledAway.current) {
              // Scrolled back into view after scrolling away - start waving
              setIsWaving(true);
              
              // Wave for 3 seconds then stop
              setTimeout(() => {
                setIsWaving(false);
              }, 3000);
              
              // Reset the flag so it can trigger again next time
              hasScrolledAway.current = false;
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of hero section is visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 md:px-0">
      {/* Black background with brown floating particles */}
      <div className="absolute inset-0">
        {/* Solid black background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Brown floating particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute top-20 right-32 w-2 h-2 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-amber-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-orange-800 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '8s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 right-20 w-2 h-2 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '7s', animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-amber-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-orange-900 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '7s', animationDelay: '3.5s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-orange-800 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '0.8s' }} />
        <div className="absolute top-32 right-1/2 w-4 h-4 bg-amber-900 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '1.2s' }} />
        <div className="absolute bottom-32 right-40 w-3 h-3 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '7s', animationDelay: '2.8s' }} />
        <div className="absolute top-1/4 left-40 w-2 h-2 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '1.8s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-orange-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '3.2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Frosted glass card wrapper */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-black/50 via-amber-950/40 to-black/50 hover:from-amber-900/60 hover:via-amber-950/50 hover:to-amber-900/60 rounded-2xl md:rounded-3xl border-2 border-amber-700/50 hover:border-amber-600/80 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.06),0_0_50px_rgba(255,255,255,0.03)] p-6 md:p-12 transition-all duration-700 hover:scale-[1.02] group cursor-pointer">
            {/* Subtle gradient border highlight */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-600/30 via-transparent to-amber-800/30 group-hover:from-amber-500/50 group-hover:via-amber-600/30 group-hover:to-amber-700/50 pointer-events-none transition-all duration-700" />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl shadow-inner shadow-amber-700/40 group-hover:shadow-amber-500/60 transition-all duration-700" />
            
            {/* Content with two-column layout */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Left side - Image */}
              <ScrollAnimation delay={0}>
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-full max-w-sm md:max-w-none">
                    {/* Chat bubble */}
                    <div className="absolute top-4 md:top-8 -right-2 md:right-0 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                      <div className="relative bg-gradient-to-br from-amber-800/90 to-amber-900/90 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl rounded-bl-none border border-amber-600/50 shadow-lg shadow-amber-900/50">
                        <p className="text-white text-sm md:text-base whitespace-nowrap">
                          {typedText}
                          <span className={`inline-block w-0.5 h-3 md:h-4 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 via-amber-950/40 to-black/50 p-4 md:p-6">
                      <img
                        src={isWaving ? heroGif : heroStatic}
                        alt="Alex Johnson"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right side - Text content */}
              <div className="text-center md:text-left">
                <ScrollAnimation delay={200}>
                  <p className="text-base md:text-xl text-white/70 mb-6 md:mb-8">
                    Computer Science Student & Full-Stack Developer passionate about creating innovative web applications and solving complex problems through code.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={250}>
                  <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                    <Button asChild size="lg" className="bg-gradient-to-r from-black/90 to-amber-950/90 hover:from-amber-800 hover:to-amber-700 text-amber-100 hover:text-white border border-amber-800/60 hover:border-amber-500 shadow-lg shadow-black/50 hover:shadow-[0_0_20px_rgba(217,119,6,0.6)] hover:scale-105 transition-all duration-300 text-xs md:text-base px-4 md:px-6">
                      <a href="#projects">
                        View My Work
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-amber-800/60 bg-black/40 text-amber-100 hover:text-white hover:bg-amber-900/60 hover:border-amber-500 shadow-lg shadow-black/40 hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:scale-105 transition-all duration-300 text-xs md:text-base px-4 md:px-6">
                      <a href="#contact">Get In Touch</a>
                    </Button>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                  <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                    >
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a
                      href="mailto:contact@example.com"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-900/30 transition-all"
                    >
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
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