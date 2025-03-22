
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = () => {
      const fadeElements = containerRef.current?.querySelectorAll('.fade-up-animation');
      fadeElements?.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, 300 * i);
      });
    };

    initAnimation();
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12"
    >
      <div className="max-w-5xl">
        <p className="font-mono text-accent mb-5 fade-up-animation">Hi, my name is</p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono text-foreground font-bold mb-4 fade-up-animation">
          Palak Agrawal.
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-mono text-muted-foreground font-bold mb-8 fade-up-animation">
          I build exceptional web experiences.
        </h2>
        
        <p className="text-muted-foreground max-w-xl text-lg mb-12 fade-up-animation">
          I'm a software engineer specializing in building modern web applications. 
          Currently, I'm focused on creating accessible, human-centered digital experiences at <a href="#" className="text-accent hover:underline">Swiss Re</a>.
        </p>
        
        <div className="fade-up-animation">
          <a 
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-4 border border-accent rounded text-accent font-mono hover:bg-accent/10 transition-all duration-300"
          >
            <span>Check out my work</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
