import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsMatrix from './components/SkillsMatrix';
import FeaturedProjects from './components/FeaturedProjects';
import CodePlayground from './components/CodePlayground';
import SocialProof from './components/SocialProof';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const DynamicHomepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for navigation links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.getAttribute('href');
      if (target && target?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>
      {/* Skills Matrix Section */}
      <section id="skills">
        <SkillsMatrix />
      </section>
      {/* Featured Projects Section */}
      <section id="work">
        <FeaturedProjects />
      </section>
      {/* Interactive Code Playground */}
      <section id="lab">
        <CodePlayground />
      </section>
      {/* Social Proof & Testimonials */}
      <section id="testimonials">
        <SocialProof />
      </section>
      {/* Contact CTA Section */}
     
      {/* Footer */}
      <footer className="bg-code-bg text-code-text py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={18} color="white" strokeWidth={2.5} />
                </div>
                
                <span className="text-xl font-bold text-white"> Tej Portfolio </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Crafting exceptional digital experiences through innovative React development 
                and creative problem-solving.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">React Development</li>
                
                <li className="text-gray-400">UI/UX Implementation</li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://github.com/tejasvirajsingh" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/tejasvirajsingh/" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
               
                
              </div>
              <div className="text-sm text-gray-400">
                <p>Gujrat, India</p>
                <p>Available for remote work</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date()?.getFullYear()} Portfolio Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DynamicHomepage;