
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, FileDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12',
        scrolled 
          ? 'py-3 backdrop-blur-md bg-background/95 shadow-sm' 
          : 'py-6 bg-background/80'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors"
          onClick={closeMenu}
        >
          PORTFOLIO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline text-sm uppercase tracking-widest font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-foreground/80 transition-colors"
          >
            <span>Resume</span>
            <FileDown size={16} />
          </a>
        </nav>

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
          'fixed inset-0 bg-background flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-40',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="font-serif text-4xl font-medium transition-colors"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm uppercase tracking-widest font-medium mt-4"
            onClick={closeMenu}
          >
            <span>Download Resume</span>
            <FileDown size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
