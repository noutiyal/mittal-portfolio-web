
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Jashan Mittal</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
          />
        </svg>
      </Button>
      
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-48">
          <div className="flex flex-col space-y-3">
            <a href="#about" onClick={toggleMenu} className="hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={toggleMenu} className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" onClick={toggleMenu} className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
