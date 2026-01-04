import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodePlayground = () => {
  const [activeTab, setActiveTab] = useState('component');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  const codeExamples = {
    component: {
      title: 'React Component',
      code: `const InteractiveCard = ({ title, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {children}
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-blue-600"
        >
          ✨ Interactive element activated!
        </motion.div>
      )}
    </motion.div>
  );
};`,
      output: 'Interactive card component with hover animations'
    },
    hook: {
      title: 'Custom Hook',
      code: `const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};`,
      output: 'Custom hook for localStorage management'
    },
    animation: {
      title: 'Framer Motion',
      code: `const AnimatedList = ({ items }) => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          whileHover={{ x: 10 }}
          className="p-3 border-b"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};`,
      output: 'Staggered list animation with hover effects'
    }
  };

  const tabs = [
    { id: 'component', label: 'Component', icon: 'Zap' },
    { id: 'hook', label: 'Custom Hook', icon: 'Settings' },
    { id: 'animation', label: 'Animation', icon: 'Sparkles' }
  ];

  const runCode = () => {
    setIsRunning(true);
    setOutput('');
    
    setTimeout(() => {
      setOutput(codeExamples?.[activeTab]?.output);
      setIsRunning(false);
    }, 1500);
  };

  useEffect(() => {
    setOutput('');
  }, [activeTab]);

  return (
    <section className="py-1 ">
     
    </section>
  );
};

export default CodePlayground;