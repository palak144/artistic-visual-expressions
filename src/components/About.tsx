
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const skills = [
  'Python',
  'SQL',
  'Machine Learning',
  'Data Analysis',
  'Data Visualization',
  'Statistical Modeling',
  'Deep Learning',
  'TensorFlow',
  'NLP',
  'Tableau'
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
            
            <h3 className="text-xl md:text-2xl font-serif mb-6">Data Scientist with a passion for solving complex problems</h3>
            
            <p 
              ref={textRef}
              className="text-lg md:text-xl leading-relaxed opacity-0 translate-y-10 transition-all duration-700 delay-300"
            >
              I'm a Data Scientist at JDX Consulting with over 2 years of experience in machine learning, data analysis, and building intelligent systems. My expertise spans across statistical modeling, deep learning, and data visualization, enabling me to transform complex data into actionable insights.
              <br /><br />
              My work is driven by a passion for uncovering patterns in data and using those insights to drive business decisions. I believe in the power of data science to transform how we approach complex problems across industries.
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
                    <h4 className="text-lg font-medium">Data Scientist at JDX Consulting</h4>
                    <p className="text-muted-foreground">October 2023 — Present</p>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Developing machine learning models and implementing data-driven solutions</li>
                      <li>Analyzing complex datasets to extract actionable insights</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Data Scientist at Infosys</h4>
                    <p className="text-muted-foreground">June 2022 — September 2023</p>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Designed and implemented machine learning algorithms</li>
                      <li>Created dashboards and visualizations for business stakeholders</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Data Science Intern at Infosys</h4>
                    <p className="text-muted-foreground">January 2022 — June 2022</p>
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Assisted in data preparation and model training</li>
                      <li>Conducted exploratory data analysis and feature engineering</li>
                    </ul>
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
