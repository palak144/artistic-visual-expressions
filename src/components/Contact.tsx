
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-[#D3E4FD]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-6">Let's start a conversation</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Have a project in mind or want to discuss potential collaborations? Feel free to reach out. I'm always open to discussing new projects, innovative ideas, or opportunities to apply my web development expertise to solve real-world problems.
            </p>
            
            <div className="space-y-4 mt-12">
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a href="mailto:palakagrawal679@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  palakagrawal679@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-1">Based in</h3>
                <p className="text-muted-foreground">London, United Kingdom</p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-lg font-medium mb-3">Social</h3>
                <div className="flex space-x-6">
                  <a href="https://www.linkedin.com/in/palak-agrawal-86bbaa141/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors">
                    <LinkedInLogoIcon className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors">
                    <GitHubLogoIcon className="w-5 h-5" />
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors">
                    <TwitterLogoIcon className="w-5 h-5" />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="bg-background border-input"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="bg-background border-input h-40"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
