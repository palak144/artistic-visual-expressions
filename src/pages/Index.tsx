
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

const Index: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Handle cursor movement
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Handle hover state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Handle intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.fade-up-animation').forEach(el => {
      observer.observe(el);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center">
          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight mb-6 text-accent">P<span className="text-foreground">A</span></h1>
          <div className="inline-block w-16 h-px bg-accent animate-pulse"></div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className={`custom-cursor hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      ></div>

      <div className="min-h-screen flex flex-col">
        <Sidebar />
        <Navbar />
        <main className="flex-1 lg:pl-32">
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
