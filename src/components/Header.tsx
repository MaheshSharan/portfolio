import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'tech-stack', 'testimonials'];
      let currentSection = 'about'; // default

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-xs sm:text-sm md:text-base font-medium transition-colors ${
                  activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-indigo-500 bottom-[-4px]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://github.com/MaheshSharan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-sharan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('maheshsharan28@gmail.com');
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};