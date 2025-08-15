import React from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/src/components/Bawani Sandunika.pdf'; // Update this path if needed
    link.download = 'Bawani_Sandunika_CV.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-300 animate-fade-in-up delay-200">
                {portfolioData.personal.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0 animate-fade-in-up delay-400">
                {portfolioData.personal.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0 animate-fade-in-up delay-600">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-sm sm:text-base"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <button 
                onClick={handleDownloadCV}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-gray-700 text-sm sm:text-base"
              >
                <Download className="mr-2 group-hover:animate-bounce w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto lg:mx-0 order-1 lg:order-2 animate-fade-in-up delay-800">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="absolute inset-3 sm:inset-4 w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl -rotate-12 animate-float delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </section>
  );
};

export default Hero;