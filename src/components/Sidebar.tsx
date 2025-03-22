
import React, { useState, useEffect } from 'react';
import { GitHub, Linkedin, Mail, FileDown } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <GitHub size={18} />,
    url: '#'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={18} />,
    url: 'https://www.linkedin.com/in/palak-agrawal-86bbaa141/'
  },
  {
    name: 'Email',
    icon: <Mail size={18} />,
    url: 'mailto:palakagrawal679@gmail.com'
  }
];

const navItems = [
  { name: 'About', id: 'about', number: '01' },
  { name: 'Experience', id: 'experience', number: '02' },
  { name: 'Projects', id: 'portfolio', number: '03' },
  { name: 'Contact', id: 'contact', number: '04' }
];

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently active based on scroll position
      const scrollPosition = window.scrollY;
      const sections = navItems.map(item => document.getElementById(item.id));
      
      // Find the currently visible section
      const currentSection = sections.filter(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      })[0];
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      // Check if page is scrolled for visual adjustments
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-24 md:w-32 hidden lg:flex flex-col justify-between items-center py-10 z-40 border-r border-border/30">
      <div className="flex flex-col items-center gap-2">
        <a 
          href="#home" 
          className="text-3xl font-mono font-bold text-accent transition-colors duration-200 hover:text-foreground"
        >
          PA
        </a>
      </div>

      <nav className="flex flex-col items-center gap-6">
        <ul className="flex flex-col items-center gap-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`sidebar-link flex flex-col items-center ${
                  activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                }`}
                aria-label={`Navigate to ${item.name} section`}
              >
                <span className="text-accent mb-1">{item.number}.</span>
                <span className="font-mono text-xs writing-vertical-rl transform rotate-0">
                  {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
        <div className="h-24 w-px bg-border/30 mt-2"></div>
      </div>
    </div>
  );
};

export default Sidebar;
