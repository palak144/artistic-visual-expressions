
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

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
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-[#F2FCE2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">About</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4">Palak Agrawal</h2>
            <div className="mb-8 overflow-hidden rounded-lg shadow-md w-48 h-48">
              <img 
                src="https://media.licdn.com/dms/image/C5603AQFTOcww8wOkuA/profile-displayphoto-shrink_800_800/0/1650894901044?e=1716422400&v=beta&t=nQDUvTi3TUK0lRJT8ZVWP_QlUWKJ1y5MwJ9SfQ4xIrI" 
                alt="Palak Agrawal" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif mb-6">Software Engineer with expertise in modern web technologies</h3>
            
            <p 
              ref={textRef}
              className="text-lg md:text-xl leading-relaxed opacity-0 translate-y-10 transition-all duration-700 delay-300"
            >
              I'm a Software Engineer at Swiss Re with expertise in ReactJS, Angular, Redux, TypeScript, JavaScript, HTML5, and CSS3. My background includes working with diverse teams across multiple industries, delivering high-quality solutions and excellent user experiences.
              <br /><br />
              I'm passionate about creating efficient and elegant web applications, with a strong focus on modern frameworks and best practices. My ambition drives me to continuously improve and expand my skills in the ever-evolving tech landscape.
            </p>
            
            <div className="mt-8">
              <a href="https://www.linkedin.com/in/palak-agrawal-86bbaa141/" target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <LinkedInLogoIcon className="w-4 h-4" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:pt-16">
            <div 
              ref={skillsRef}
              className="opacity-0 translate-y-10 transition-all duration-700 delay-500"
            >
              <h3 className="text-xl font-medium mb-6">Skills & Certifications</h3>
              
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
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Certifications</h4>
                <ul className="list-disc pl-5 text-sm space-y-2">
                  <li>Angular Certification</li>
                  <li>React Certification</li>
                  <li>Optimizely Certification</li>
                  <li>Employability Skills Development Certification</li>
                </ul>
              </div>
              
              <div className="mt-12 md:mt-20">
                <h3 className="text-xl font-medium mb-6">Experience</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium">Software Engineer at Swiss Re</h4>
                    <p className="text-muted-foreground">October 2023 — Present</p>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Developing and maintaining web applications using modern frameworks</li>
                      <li>Collaborating with cross-functional teams to deliver high-quality software solutions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Software Engineer at Infosys</h4>
                    <p className="text-muted-foreground">January 2022 — September 2023</p>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Worked on My Connection (Angular 15 portal)</li>
                      <li>Implemented Optimizely experiments for improved user experiences</li>
                      <li>Collaborated with TalkTalk on web application development</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Earlier Experience</h4>
                    <p className="text-muted-foreground">2018 — 2021</p>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Lumiere32: Frontend development and UI implementation</li>
                      <li>Zensar Technologies: Web application development</li>
                      <li>WIPO: Contributed to WIPO Match project</li>
                      <li>FAO: Web development and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">Education</h3>
                <div>
                  <h4 className="text-lg font-medium">Bachelor of Engineering in Computer Science</h4>
                  <p className="text-muted-foreground">Rajiv Gandhi Prodyogiki Vishwavidyalaya (2014-2018)</p>
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
