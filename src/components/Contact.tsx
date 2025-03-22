
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 max-w-xl mx-auto">Let's create something amazing together</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border-b border-input px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border-b border-input px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary border-b border-input px-4 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "inline-flex items-center gap-2 border border-foreground px-6 py-3 text-foreground rounded-full transition-all",
                  "hover:bg-foreground hover:text-background",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                <span className="text-sm font-medium tracking-wider uppercase">
                  {isSubmitting ? 'Sending...' : submitted ? 'Sent!' : 'Send Message'}
                </span>
                <ArrowRight size={16} />
              </button>
              
              {submitted && (
                <p className="text-sm text-green-600 mt-4">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
          
          <div className="md:pl-10">
            <h3 className="text-xl font-medium mb-8">Let's connect</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <Mail size={24} className="mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:hello@portfolio.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    hello@portfolio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={24} className="mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin size={24} className="mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">Follow me</h3>
              <div className="flex gap-6">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
