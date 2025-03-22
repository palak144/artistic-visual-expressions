
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Plus } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    category: "Branding",
    description: "A clean, modern brand identity for a luxury fashion label, focusing on typography and minimalist design principles.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Web Design",
    description: "A fully responsive e-commerce platform with a focus on user experience, clean interfaces, and seamless checkout flow.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    category: "Development",
    description: "An interactive dashboard that displays complex data in visually appealing and easy-to-understand formats.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Editorial Photography",
    category: "Photography",
    description: "A series of editorial photographs for a high-fashion magazine, emphasizing composition and storytelling.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "Mobile App Design",
    category: "UI/UX",
    description: "A sleek mobile application designed for optimal user experience with intuitive navigation and clean interfaces.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    id: 6,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "A comprehensive digital marketing strategy across multiple platforms, focusing on cohesive messaging and brand consistency.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    link: "#",
  },
];

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full group cursor-pointer overflow-hidden"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${project.image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/40 flex flex-col justify-end p-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className={cn("transform transition-transform duration-500", isHovered ? "translate-y-0" : "translate-y-8")}>
            <span className="text-white/70 text-xs uppercase tracking-widest">{project.category}</span>
            <h3 className="text-white text-xl md:text-2xl font-serif mt-2">{project.title}</h3>
          </div>
        </div>
      </div>
      
      <div className="pt-4 pb-10">
        <h3 className="text-lg md:text-xl font-serif">{project.title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{project.category}</p>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        ref={modalRef}
        className={cn(
          "bg-background max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-500",
          isOpen ? "scale-100" : "scale-95"
        )}
      >
        <div className="relative">
          <div
            className="w-full aspect-[16/9] bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center transition-colors hover:bg-black/70"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:w-2/3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{project.category}</span>
              <h2 className="text-2xl md:text-4xl font-serif mt-2 mb-4">{project.title}</h2>
              <p className="text-base md:text-lg leading-relaxed">{project.description}</p>
              <p className="mt-8 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in vestibulum tortor, vitae venenatis lectus. Praesent gravida dapibus neque sit amet molestie. Morbi blandit eu dolor a luctus. Vestibulum sollicitudin elit ac nunc scelerisque rhoncus. Nulla felis sapien, condimentum ut imperdiet vel, aliquet id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>

            <div className="md:w-1/3 space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Services</h3>
                <ul className="space-y-1">
                  <li>Visual Design</li>
                  <li>UX Research</li>
                  <li>Development</li>
                  <li>Branding</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Timeline</h3>
                <p>8 weeks</p>
              </div>
              
              <a
                href={project.link}
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-foreground rounded-full transition-all hover:bg-foreground hover:text-background mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium tracking-wider uppercase">View Live</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 500);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 max-w-xl mx-auto">A curated selection of my creative work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Portfolio;
