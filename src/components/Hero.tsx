
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const scrollY = window.scrollY;
      const parallaxValue = scrollY * 0.4;
      
      imageRef.current.style.transform = `translateY(${parallaxValue}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8) contrast(1.1)',
          transformOrigin: 'center'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative h-full w-full flex flex-col justify-center items-center px-6 md:px-20">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-4 md:mb-6">
            <AnimatedText 
              text="Creative Design & Development" 
              className="block" 
              speed={40}
            />
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-8 md:mb-10 max-w-2xl mx-auto">
            <AnimatedText 
              text="Crafting digital experiences through thoughtful design and innovative development." 
              delay={1200} 
              speed={20}
            />
          </p>
          
          <a 
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-white/30 backdrop-blur-sm px-6 py-3 text-white rounded-full transition-all hover:bg-white/20 hover:px-8"
          >
            <span className="text-sm font-medium tracking-wider uppercase">Explore Works</span>
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#portfolio" className="text-white flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
