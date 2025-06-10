
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
            Senior Software Engineer | PHP & Laravel Developer
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl animate-fade-in animate-delay-200">
            Building reliable, scalable web apps with expertise in PHP, Laravel, MYSQL, JavaScript, React, MongoDB and NodeJS.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
            {/* <Button className="bg-primary hover:bg-primary/80">
              <a
                href="https://drive.google.com/file/d/1aKEruIEygXwgyDIE9lxq5S3F-fPAoDCP/view?usp=sharing"
                download
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button> */}
            <a
              href="https://linkedin.com/in/jashan-mittal-9b056b160"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                viewBox="0 0 34 34"
                fill="#0A66C2"
              >
                <path d="M34,2.4v29.2c0,1.3-1.1,2.4-2.4,2.4H2.4C1.1,34,0,32.9,0,31.6V2.4C0,1.1,1.1,0,2.4,0h29.2C32.9,0,34,1.1,34,2.4z" />
                <path
                  fill="#FFFFFF"
                  d="M10.1 27.3V13.5H5.1v13.8h5zm-2.5-15.7c1.7 0 2.7-1.1 2.7-2.5-.1-1.5-1-2.5-2.6-2.5S5 7.6 5 8.9c0 1.4 1 2.5 2.5 2.5h.1zM28.8 27.3V19c0-4.4-2.4-6.4-5.5-6.4-2.5 0-3.6 1.4-4.2 2.4v-2h-5.1c.1 1.3 0 13.8 0 13.8h5.1v-7.7c0-.4 0-.7.1-1 .3-.7 1-1.4 2.1-1.4 1.5 0 2.1 1.1 2.1 2.7v7.4h5.1z"
                />
              </svg>
            </a>
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
