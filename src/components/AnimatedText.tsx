
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  speed = 50,
  threshold = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          hasAnimated.current = true;
          animateText(textRef.current!);
        }
      },
      { threshold }
    );

    observer.observe(containerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  const animateText = (element: HTMLElement) => {
    const text = element.textContent || '';
    element.textContent = '';
    
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, delay);
  };

  return (
    <div ref={containerRef} className={cn("inline-block overflow-hidden", className)}>
      <span ref={textRef} className="inline-block">
        {text}
      </span>
    </div>
  );
};

export default AnimatedText;
