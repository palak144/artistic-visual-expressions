
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'ReactJS',
  'Angular',
  'Redux',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Next.js',
  'Jira',
  'Angular 15'
];

const latestSkills = [
  'Microfrontend',
  'Vite',
  'OpenAPI',
  'Cosmos DB',
  'Azure',
  'DevOps'
];

const awards = [
  'Efficiency Badge',
  'Rising Star Award at Zensar',
  'Insta Award (2) at Infosys'
];

const interests = [
  'Tech Forums',
  'Quality Improvement',
  'Mentoring',
  'Traveling',
  'Music',
  'Sports',
  'Adventures'
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.fade-up-animation');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, 200 * i);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="numbered-heading mb-12 fade-up-animation">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div className="md:col-span-2 fade-up-animation">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Palak, a software engineer passionate about building exceptional digital experiences. 
                My journey in web development began back in 2018, and I've since had the privilege of working with diverse teams across multiple industries.
              </p>
              
              <p>
                I specialize in frontend technologies with expertise in <span className="text-accent">ReactJS</span>, <span className="text-accent">Angular</span>, 
                <span className="text-accent"> Redux</span>, <span className="text-accent">TypeScript</span>, and other modern frameworks.
                My focus is on creating efficient and elegant web applications, with a strong emphasis on best practices and user experience.
              </p>
              
              <p>
                Currently, I'm a Software Engineer at <a href="#" className="text-accent hover:underline">Swiss Re</a>, where I work on 
                developing and maintaining web applications using modern frameworks and collaborating with cross-functional teams to deliver high-quality software solutions.
              </p>
              
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            
            <div className="mt-6 fade-up-animation">
              <h4 className="text-sm font-mono mb-3 text-accent">Latest Expertise</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 mb-6">
                {latestSkills.map((skill, index) => (
                  <li key={`latest-${index}`} className="flex items-center font-mono text-sm">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      <span className="mr-2">▹</span> {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-sm font-mono mb-3 text-muted-foreground">Core Skills</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center font-mono text-sm text-muted-foreground">
                    <span className="text-accent mr-2">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 fade-up-animation">
              <h4 className="text-sm font-mono mb-3 text-accent">Awards & Achievements</h4>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-center font-mono text-sm text-muted-foreground">
                    <Badge variant="outline" className="border-accent/20">
                      <span className="text-accent mr-2">▹</span> {award}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 fade-up-animation">
              <h4 className="text-sm font-mono mb-3 text-accent">Personal Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary/50 text-muted-foreground">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="fade-up-animation">
            <div className="relative group">
              <div className="relative rounded border-2 border-accent w-full h-64 md:h-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <img 
                  src="/IMG_20230719_194916_023.jpg" 
                  alt="Palak Agrawal" 
                  className="w-full h-full object-cover rounded filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-all duration-300 rounded"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-accent rounded z-[-1]"></div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-mono mb-2">Education</h3>
              <div className="border border-border/30 rounded-md p-4">
                <h4 className="font-mono text-accent">Bachelor of Engineering</h4>
                <p className="text-sm font-medium">Computer Science</p>
                <p className="text-xs text-muted-foreground mt-1">Rajiv Gandhi Prodyogiki Vishwavidyalaya (2014-2018)</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-mono mb-2">Certifications</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">▹</span> Angular Certification
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">▹</span> React Certification
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">▹</span> Optimizely Certification
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">▹</span> Experience Perfectionist Level 1 (Optimizely)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
