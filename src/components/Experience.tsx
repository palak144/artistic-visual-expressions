
import React, { useState, useEffect, useRef } from 'react';

interface JobExperience {
  company: string;
  title: string;
  period: string;
  url: string;
  description: string[];
  technologies: string[];
}

const experiences: JobExperience[] = [
  {
    company: "Swiss Re",
    title: "Software Engineer",
    period: "October 2023 - Present",
    url: "#",
    description: [
      "Developing and maintaining web applications using modern frameworks",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Working with React, TypeScript, and other modern web technologies"
    ],
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    company: "Infosys",
    title: "Software Engineer",
    period: "January 2022 - September 2023",
    url: "#",
    description: [
      "Worked on My Connection (Angular 15 portal)",
      "Implemented Optimizely experiments for improved user experiences",
      "Collaborated with TalkTalk on web application development"
    ],
    technologies: ["Angular", "TypeScript", "Optimizely", "JavaScript"]
  },
  {
    company: "Lumiere32",
    title: "Frontend Developer",
    period: "2020 - 2021",
    url: "#",
    description: [
      "Responsible for frontend development and UI implementation",
      "Collaborated with design team to create responsive and user-friendly interfaces"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3"]
  },
  {
    company: "WIPO",
    title: "Web Developer",
    period: "2019 - 2020",
    url: "#",
    description: [
      "Contributed to WIPO Match project",
      "Developed responsive and accessible web components"
    ],
    technologies: ["JavaScript", "Angular", "HTML5", "CSS3"]
  }
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the highlighter position
    if (tabsRef.current && highlighterRef.current) {
      const activeTabElement = tabsRef.current.children[activeTab] as HTMLElement;
      
      if (activeTabElement) {
        highlighterRef.current.style.top = `${activeTabElement.offsetTop}px`;
        highlighterRef.current.style.height = `${activeTabElement.offsetHeight}px`;
      }
    }
  }, [activeTab]);

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="numbered-heading mb-12 fade-up-animation">Where I've Worked</h2>
        
        <div className="flex flex-col md:flex-row gap-8 fade-up-animation">
          <div className="relative md:w-32 flex md:block overflow-x-auto scrollbar-hide md:overflow-visible">
            <div 
              ref={tabsRef}
              className="flex md:flex-col border-b md:border-b-0 md:border-l border-border/30"
            >
              {experiences.map((job, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 font-mono text-sm whitespace-nowrap ${
                    activeTab === index ? 'text-accent' : 'text-muted-foreground'
                  } hover:bg-secondary/20 hover:text-accent text-left transition-colors`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>
            
            <div 
              ref={highlighterRef}
              className="absolute left-0 top-0 w-1 bg-accent transition-all duration-300 hidden md:block"
            ></div>
          </div>
          
          <div className="flex-1">
            {experiences.map((job, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <h3 className="text-xl font-mono mb-1">
                  <span className="text-foreground">{job.title}</span>
                  {" "}
                  <span className="text-accent">@</span>
                  {" "}
                  <a 
                    href={job.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {job.company}
                  </a>
                </h3>
                
                <p className="text-muted-foreground font-mono text-sm mb-4">
                  {job.period}
                </p>
                
                <ul className="mb-6 space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2 mt-1.5">▹</span>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
