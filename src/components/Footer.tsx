
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 px-6 md:px-12 lg:pl-40 border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-mono text-xl md:text-2xl font-bold tracking-tight">PALAK AGRAWAL</h2>
            <p className="text-muted-foreground mt-2 text-sm">© {new Date().getFullYear()} — All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex gap-6 md:hidden">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/palak-agrawal-86bbaa141/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:palakagrawal679@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-mono group text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="uppercase">Resume</span>
              <ArrowUp size={16} className="transform rotate-45" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm font-mono group text-muted-foreground hover:text-accent transition-colors"
              aria-label="Scroll to top"
            >
              <span className="uppercase">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-muted-foreground font-mono md:hidden">
          <p>Designed & Built with 💜</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
