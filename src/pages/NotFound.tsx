
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl md:text-9xl font-serif font-bold mb-6">404</h1>
        <p className="text-xl md:text-2xl font-light mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-foreground rounded-full transition-all hover:bg-foreground hover:text-background"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium tracking-wider uppercase">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
