
import React from 'react';
import { ArrowUp, FileDown } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 md:py-20 px-6 md:px-12 border-t border-border bg-[#E5DEFF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight">PALAK AGRAWAL</h2>
            <p className="text-muted-foreground mt-2">© {new Date().getFullYear()} — All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm group"
            >
              <span className="uppercase tracking-widest font-medium">Resume</span>
              <FileDown size={16} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/palak-agrawal-86bbaa141/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm group"
            >
              <span className="uppercase tracking-widest font-medium">LinkedIn</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a
              href="mailto:palakagrawal679@gmail.com"
              className="inline-flex items-center gap-2 text-sm group"
            >
              <span className="uppercase tracking-widest font-medium">Email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
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
      </div>
    </footer>
  );
};

export default Footer;
