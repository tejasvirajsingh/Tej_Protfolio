import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '#hero', icon: 'Home' },
    { name: 'Projects', path: '#work', icon: 'FolderOpen' },
    { name: 'Skills', path: '#skills', icon: 'User' },
    { name: 'Github', path: '#testimonials', icon: 'FileText' },
    { name: 'Contact', path: '#contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    if (path?.startsWith('#')) {
      return false; // For anchor links, we'll handle active state differently
    }
    return location?.pathname === path;
  };

  const handleNavClick = (e, path) => {
    if (path?.startsWith('#')) {
      e?.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      closeMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-brand border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#hero" 
              className="flex items-center space-x-2 group"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon 
                    name="Code" 
                    size={18} 
                    color="white" 
                    strokeWidth={2.5}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                  Tejasvi Raj Singh
                </span>
                <div className="text-xs text-muted-foreground font-medium">
                  B.Tech Student
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.slice(0, 4)?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.path}
                  onClick={(e) => handleNavClick(e, item?.path)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group text-text-primary hover:text-accent hover:bg-hover`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={item?.icon} 
                      size={16} 
                      className="text-muted-foreground group-hover:text-accent transition-colors duration-200"
                    />
                    <span>{item?.name}</span>
                  </div>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Avaibable For Work</span>
              </div>
              <ThemeToggle />
             
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-text-primary hover:text-accent hover:bg-hover transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-spring ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.path}
                  onClick={(e) => handleNavClick(e, item?.path)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-text-primary hover:text-accent hover:bg-hover"
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className="text-muted-foreground"
                  />
                  <span>{item?.name}</span>
                </a>
              ))}
              
              <div className="pt-4 border-t border-border mt-4">
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Available for Work</span>
                  </div>
                </div>
                <div className="px-4 pt-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    fullWidth
                    className="shadow-brand"
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      closeMobileMenu();
                    }}
                  >
                    Dicuss
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;