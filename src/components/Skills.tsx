import React from 'react';
import { Code, Database, Settings } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: portfolioData.skills.frontend,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: portfolioData.skills.backend,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: portfolioData.skills.tools,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 mx-4 sm:mx-0"
            >
              <div className="text-center mb-6 sm:mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-xl sm:rounded-2xl mb-3 sm:mb-4`}>
                  <category.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `fillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;