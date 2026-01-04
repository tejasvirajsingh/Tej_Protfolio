import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage?.getItem('hasVisited');
    
    if (!hasVisited) {
      // Show welcome animation for first-time visitors
      setShowWelcome(true);
      sessionStorage?.setItem('hasVisited', 'true');

      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowWelcome(false);
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-primary/95 to-accent/95 backdrop-blur-sm flex items-center justify-center"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: -50 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-center max-w-2xl mx-auto px-8"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Animated Logo */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Icon 
                    name="Code" 
                    size={40} 
                    color="#3182ce" 
                    strokeWidth={2.5}
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center"
                >
                  <Icon name="Sparkles" size={14} color="white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
              >
                Welcome to 
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="block text-transparent bg-gradient-to-r from-white to-white/70 bg-clip-text"
                >
                  my space
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xl text-white/80 max-w-lg mx-auto"
              >
                Make a Website for Presenting My Skills.
              </motion.p>
            </motion.div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)]?.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: 1.5 + i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                >
                  <div className="w-2 h-2 bg-white/30 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* Skip Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white text-sm flex items-center space-x-2 transition-colors duration-200"
              >
                <span>Skip intro</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;