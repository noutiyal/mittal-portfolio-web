
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkblue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Jashan Mittal</h3>
            <p className="text-white/70 mb-4">Software Engineer | PHP & Laravel Developer</p>
            <div className="flex space-x-4">
              {/* <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a> */}
              <a
                href="https://linkedin.com/in/jashan-mittal-9b056b160"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
          <div className="text-right">
            <nav className="mb-4">
              <ul className="flex justify-end space-x-6">
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="text-white/70 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </nav>
            <p className="text-white/50 text-sm">
              &copy; {currentYear} Jashan Mittal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
