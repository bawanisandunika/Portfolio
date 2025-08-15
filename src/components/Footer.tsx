import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;