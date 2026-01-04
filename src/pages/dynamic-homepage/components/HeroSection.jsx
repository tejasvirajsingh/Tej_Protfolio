import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Tejasvi Rajput";

  useEffect(() => {
    if (currentIndex < fullText?.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(prev => prev + fullText?.[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const codeLines = [
    "const Student = () => {",
    "  const [university] = useState('Parul University');",
    "  const skills = ['React', 'Java',  'Github','html','css','javascript'];",
    "  return <Innovation passionate={true} />;",
    "};"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>B.Tech Student at Parul University</span>
            </motion.div>

            {/* Main Headline with Typewriter Effect */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-gradient">{typewriterText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="text-accent"
                >
                  |
                </motion.span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate about technology and innovation. Currently pursuing my engineering degree while developing skills in software development.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                iconName="Eye"
                iconPosition="left"
                className="shadow-brand hover:shadow-brand-lg hover-lift"
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </Button>
              
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">9+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative flex justify-center">
              {/* Profile Image Container - Now Circular */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative bg-gradient-to-br from-primary to-accent p-1 rounded-full shadow-brand-lg"
              >
                <div className="bg-background rounded-full p-2">
                  <img 
                    src="public/assets/images/max.jpg
" 
                    alt="Tej..................." 
                    className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-full shadow-brand"
                  />
                </div>
              </motion.div>

              {/* Floating Code Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg"
              >
                React.js
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg"
              >
                C++
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-6 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg"
              >
               Javascript
              </motion.div>




              
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;