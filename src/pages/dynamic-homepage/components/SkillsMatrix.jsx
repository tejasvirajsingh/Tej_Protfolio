import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const skills = [
    {
      id: 'react',
      name: 'React',
      level: 30,
      icon: 'Zap',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      projects: ['Portfolio Website', 'Dashboard App'],
      description: 'Building modern user interfaces with React hooks and components'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      level: 55,
      icon: 'Code',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
      projects: ['Interactive Websites', 'API Integration', 'DOM Manipulation'],
      description: 'Core programming language for web development and dynamic functionality'
    },
    {
      id: 'java',
      name: 'Java',
      level: 40,
      icon: 'Coffee',
      color: 'text-orange-600',
      bgColor: 'bg-orange-600',
      projects: ['Console Applications', 'OOP Projects', 'Data Structures'],
      description: 'Object-oriented programming with strong foundations in algorithms'
    },
    {
      id: 'python',
      name: 'Python',
      level: 20,
      icon: 'Terminal',
      color: 'text-green-600',
      bgColor: 'bg-green-600',
      projects: ['Automation Scripts',  'Web Scraping'],
      description: 'Versatile programming for automation, data science.'
    },
    {
      id: 'html',
      name: 'HTML',
      level: 85,
      icon: 'FileText',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      projects: ['Web Structure', 'Semantic Markup', 'Accessibility'],
      description: 'Building semantic and accessible web page structures'
    },
    {
      id: 'css',
      name: 'CSS',
      level: 70,
      icon: 'Palette',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600',
      projects: ['Responsive Design', 'Animations', 'Modern Layouts'],
      description: 'Styling and layout with modern CSS techniques and frameworks'
    },
   
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Skills
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill?.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill?.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="interactive-card group cursor-pointer"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${skill?.bgColor}/10`}>
                    <Icon 
                      name={skill?.icon} 
                      size={24} 
                      className={skill?.color}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {skill?.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  {skill?.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill?.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    className={`h-full ${skill?.bgColor} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>

              {/* Skill Description */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {skill?.description}
              </p>

              {/* Project Applications */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  hoveredSkill === skill?.id 
                    ? { opacity: 1, height: 'auto' } 
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border">
                  <h4 className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">
                    Applications
                  </h4>
                  <div className="space-y-1">
                    {skill?.projects?.map((project, projectIndex) => (
                      <div 
                        key={projectIndex}
                        className="flex items-center space-x-2 text-xs text-text-secondary"
                      >
                        <div className={`w-1 h-1 rounded-full ${skill?.bgColor}`}></div>
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Hover Effect Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={
                  hoveredSkill === skill?.id 
                    ? { scale: 1 } 
                    : { scale: 0 }
                }
                transition={{ duration: 0.2 }}
                className={`absolute top-4 right-4 w-2 h-2 rounded-full ${skill?.bgColor}`}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMatrix;