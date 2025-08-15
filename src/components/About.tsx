import React, { useEffect, useState } from 'react';
import { CheckCircle, Award, Users, Coffee } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    clients: 0,
    coffee: 0,
    experience: 0
  });

  const stats = [
    { icon: Award, value: animatedValues.projects, label: 'Projects Completed' },
    { icon: Users, value: animatedValues.clients, label: 'Happy Clients' },
    { icon: Coffee, value: animatedValues.coffee, label: 'Cups of Coffee' },
    { icon: CheckCircle, value: animatedValues.experience, label: 'Years Experience' },
  ];

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();

    const animateValue = (start: number, end: number, property: keyof typeof animatedValues) => {
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        current += increment;
        setAnimatedValues(prev => ({
          ...prev,
          [property]: current
        }));
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue(0, 50, 'projects');
    animateValue(0, 10, 'clients');
    animateValue(0, 10, 'coffee');
    animateValue(0, 2, 'experience');

    return () => {
      // Cleanup any running intervals if component unmounts
      // (not strictly necessary here but good practice)
    };
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-4 lg:px-0">
              {portfolioData.about.description}
            </p>
            
            <div className="space-y-3 sm:space-y-4 px-4 lg:px-0">
              {portfolioData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 px-4 lg:px-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                  <stat.icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12 px-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h3>
          
          <div className="relative px-4 lg:px-0">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
            
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-16 sm:pl-20 pb-8 sm:pb-12">
                <div className="absolute left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-purple-600 rounded-full border-2 sm:border-4 border-gray-900"></div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 lg:mb-0">{exp.position}</h4>
                    <span className="text-purple-400 font-medium text-sm sm:text-base">{exp.duration}</span>
                  </div>
                  <h5 className="text-base sm:text-lg text-gray-300 mb-2 sm:mb-3">{exp.company}</h5>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;