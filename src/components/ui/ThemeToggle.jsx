import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import Button from './Button';
import Icon from '../AppIcon';

const ThemeToggle = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-200 hover:bg-hover ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon
        name={theme === 'light' ? 'Moon' : 'Sun'}
        size={18}
        className="transition-transform duration-200 hover:rotate-12"
      />
    </Button>
  );
};

export default ThemeToggle;