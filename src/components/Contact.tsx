
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 fade-up-animation"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-accent mb-4">04. What's Next?</p>
        <h2 className="text-3xl md:text-5xl font-mono mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question, project idea, 
          or just want to say hello, my inbox is always open. I'll do my best to get back to you as soon as possible!
        </p>
        
        <div className="bg-secondary/30 rounded-md p-8 backdrop-blur-sm border border-border/30">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono mb-2 text-muted-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-border/30 focus-visible:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono mb-2 text-muted-foreground">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-background/50 border-border/30 focus-visible:ring-accent"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mono mb-2 text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
                className="bg-background/50 border-border/30 min-h-[150px] focus-visible:ring-accent"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="border border-accent bg-transparent text-accent hover:bg-accent/10 font-mono"
            >
              {isSubmitting ? 'Sending...' : (
                <span className="flex items-center gap-2">
                  Send Message <ArrowRight size={16} />
                </span>
              )}
            </Button>
          </form>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <p className="font-mono text-muted-foreground mb-4">Or reach out directly</p>
          
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors flex flex-col items-center gap-1"
            >
              <Github size={24} />
              <span className="text-xs font-mono">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/palak-agrawal-86bbaa141/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors flex flex-col items-center gap-1"
            >
              <Linkedin size={24} />
              <span className="text-xs font-mono">LinkedIn</span>
            </a>
            <a
              href="mailto:palakagrawal679@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors flex flex-col items-center gap-1"
            >
              <Mail size={24} />
              <span className="text-xs font-mono">Email</span>
            </a>
          </div>
        </div>
        
        <p className="mt-20 font-mono text-muted-foreground text-sm">
          Designed & Built with ❤️
        </p>
      </div>
    </section>
  );
};

export default Contact;
