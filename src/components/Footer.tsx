
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 md:py-20 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight">PORTFOLIO</h2>
            <p className="text-muted-foreground mt-2">© {new Date().getFullYear()} — All Rights Reserved</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm group"
            aria-label="Scroll to top"
          >
            <span className="uppercase tracking-widest font-medium">Back to top</span>
            <span className="p-2 border border-input rounded-full group-hover:border-foreground transition-colors">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
