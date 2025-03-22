
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const skills = [
  'UX/UI Design',
  'Web Development',
  'Brand Strategy',
  'Visual Design',
  'Frontend Engineering',
  'Art Direction',
  'Interaction Design',
  'Motion Graphics',
  'Typography'
];

const About: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">About</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-8">I create meaningful digital experiences that connect with people</h2>
            
            <p 
              ref={textRef}
              className="text-lg md:text-xl leading-relaxed opacity-0 translate-y-10 transition-all duration-700 delay-300"
            >
              I'm a designer and developer with over 8 years of experience creating digital products for clients across various industries. My approach combines aesthetic sensibility with technical expertise, allowing me to bridge the gap between design and implementation.
              <br /><br />
              My work is driven by a passion for crafting intuitive, meaningful experiences that resonate with users and help businesses achieve their goals. I believe in the power of thoughtful design to transform how we interact with technology.
            </p>
          </div>
          
          <div className="md:pt-16">
            <div 
              ref={skillsRef}
              className="opacity-0 translate-y-10 transition-all duration-700 delay-500"
            >
              <h3 className="text-xl font-medium mb-6">Skills & Expertise</h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 md:mt-20">
                <h3 className="text-xl font-medium mb-6">Experience</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium">Senior Designer at Studio Minimalist</h4>
                    <p className="text-muted-foreground">2019 — Present</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">UI Developer at Digital Crafts</h4>
                    <p className="text-muted-foreground">2016 — 2019</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Junior Designer at Creative Agency</h4>
                    <p className="text-muted-foreground">2014 — 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
