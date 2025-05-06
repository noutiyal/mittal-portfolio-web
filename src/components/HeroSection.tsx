
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Jashan Mittal
          </h1>
          <h2 className="text-white/90 text-xl md:text-2xl font-medium mb-6 animate-fade-in animate-delay-100">
            Software Engineer | PHP & Laravel Developer
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl animate-fade-in animate-delay-200">
            Building reliable, scalable web apps with expertise in PHP, Laravel, and full-stack development.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
            <Button className="bg-primary hover:bg-primary/80">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/jashan-mittal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
