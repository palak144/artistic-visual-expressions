
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Folder, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github: string;
  featured: boolean;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    category: "Branding",
    description: "A clean, modern brand identity for a luxury fashion label, focusing on typography and minimalist design principles. This project showcases innovative design approaches while maintaining elegant simplicity.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    link: "#",
    github: "#",
    featured: true,
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Web Design",
    description: "A fully responsive e-commerce platform with a focus on user experience, clean interfaces, and seamless checkout flow. Implemented authentication, payment processing, and product management features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    link: "#",
    github: "#",
    featured: true,
    tech: ["Angular", "TypeScript", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    category: "Development",
    description: "An interactive dashboard that displays complex data in visually appealing and easy-to-understand formats. Utilized modern visualization libraries to create insightful analytics dashboards.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    link: "#",
    github: "#",
    featured: true,
    tech: ["D3.js", "React", "TypeScript", "REST API"]
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "UI/UX",
    description: "A sleek mobile application designed for optimal user experience with intuitive navigation and clean interfaces.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    link: "#",
    github: "#",
    featured: false,
    tech: ["React Native", "JavaScript", "Styled Components"]
  },
  {
    id: 5,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "A comprehensive digital marketing strategy across multiple platforms.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    link: "#",
    github: "#",
    featured: false,
    tech: ["Google Analytics", "SEO", "Social Media API"]
  },
  {
    id: 6,
    title: "Weather App",
    category: "Development",
    description: "A simple weather application providing real-time updates based on location.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80",
    link: "#",
    github: "#",
    featured: false,
    tech: ["React", "Weather API", "CSS"]
  }
];

interface FeaturedProjectProps {
  project: Project;
  isReversed?: boolean;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, isReversed = true }) => {
  return (
    <div className={`relative grid grid-cols-12 gap-4 items-center fade-up-animation mb-16 md:mb-24`}>
      <div className={`col-span-12 md:col-span-7 ${isReversed ? 'md:col-start-6' : ''} row-start-1 row-end-[-1]`}>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
          <div className="relative rounded overflow-hidden">
            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent z-10 transition-all duration-300"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </a>
      </div>
      
      <div className={`col-span-12 md:col-span-6 ${isReversed ? 'md:col-start-1' : 'md:col-start-7'} row-start-1 row-end-[-1] z-10`}>
        <div className={`flex flex-col ${isReversed ? 'md:items-start' : 'md:items-end'} bg-secondary/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none p-4 md:p-0 rounded-md`}>
          <p className="font-mono text-accent text-sm mb-1">{project.featured ? 'Featured Project' : 'Project'}</p>
          <h3 className="text-xl md:text-2xl font-mono mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              {project.title}
            </a>
          </h3>
          
          <div className={`${isReversed ? 'md:text-left' : 'md:text-right'} mb-4 md:bg-secondary/80 md:p-6 md:rounded-md md:backdrop-blur-sm md:shadow-xl`}>
            <p className="text-muted-foreground">
              {project.description}
            </p>
          </div>
          
          <ul className={`flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-4 ${isReversed ? 'md:justify-start' : 'md:justify-end'}`}>
            {project.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          
          <div className={`flex gap-4 ${isReversed ? 'md:justify-start' : 'md:justify-end'}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label={`External link to ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const OtherProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary/30 rounded-md p-6 flex flex-col h-full hover:translate-y-[-5px] transition-all duration-300 border border-transparent hover:border-accent/30 fade-up-animation">
      <div className="flex justify-between items-start mb-6">
        <Folder size={40} className="text-accent" />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label={`External link to ${project.title}`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <h3 className="text-xl font-mono mb-2 hover:text-accent transition-colors">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>
      
      <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
      
      <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground mt-auto">
        {project.tech.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

const Portfolio: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="numbered-heading mb-12 fade-up-animation">Some Things I've Built</h2>
        
        <div className="mb-20">
          {featuredProjects.map((project) => (
            <FeaturedProject 
              key={project.id} 
              project={project} 
              isReversed={true} 
            />
          ))}
        </div>
        
        <h3 className="text-2xl font-mono text-center mb-12 fade-up-animation">Other Noteworthy Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map(project => (
            <OtherProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
