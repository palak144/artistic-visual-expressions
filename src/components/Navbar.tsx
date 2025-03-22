
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, FileDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  number: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', number: '01.' },
  { label: 'Experience', href: '#experience', number: '02.' },
  { label: 'Projects', href: '#portfolio', number: '03.' },
  { label: 'Contact', href: '#contact', number: '04.' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY;
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      
      const currentSection = sections.filter(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      })[0];
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 lg:pl-40',
        scrolled 
          ? 'py-3 backdrop-blur-md bg-background/95 shadow-sm' 
          : 'py-6 bg-background/80'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-xl md:text-2xl font-bold tracking-tight text-accent transition-colors lg:hidden"
          onClick={closeMenu}
        >
          PA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={`link-underline text-sm font-mono transition-colors flex items-center ${
                  activeSection === item.href.substring(1) ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                <span className="mr-1 text-accent">{item.number}</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent/10 px-4 py-2 rounded-md font-mono text-sm transition-all duration-300"
        >
          <span>Resume</span>
          <FileDown size={16} />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-40',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-2xl transition-colors flex items-center"
              onClick={closeMenu}
            >
              <span className="mr-2 text-accent">{item.number}</span> {item.label}
            </a>
          ))}
          
          {/* Mobile Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-md font-mono"
            onClick={closeMenu}
          >
            <span>Resume</span>
            <FileDown size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
