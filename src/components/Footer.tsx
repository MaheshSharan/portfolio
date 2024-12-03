import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Brain, Terminal } from 'lucide-react';

export const Footer = () => {
  const links = [
    {
      title: 'Connect',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/MaheshSharan',
          icon: <Github className="w-4 h-4" />
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/mahesh-sharan/',
          icon: <Linkedin className="w-4 h-4" />
        },
        {
          label: 'Email',
          href: 'mailto:maheshsharan28@gmail.com',
          icon: <Mail className="w-4 h-4" />
        }
      ]
    },
    {
      title: 'Projects',
      items: [
        {
          label: 'LiveStreamer High',
          href: 'https://live-streamer-high.vercel.app'
        },
        {
          label: 'Universal File Converter',
          href: 'https://universal-file-converter.vercel.app'
        },
        {
          label: 'Badminton Detection',
          href: 'https://github.com/MaheshSharan/BadmintonShuttleCockDetection'
        }
      ]
    },
    {
      title: 'Quick Links',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Tech Stack', href: '#tech-stack' },
        { label: 'Projects', href: '#projects' },
        { label: 'Testimonials', href: '#testimonials' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((section, index) => (
            <motion.div 
              key={section.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                {index === 0 && <Terminal className="w-4 h-4 text-indigo-500" />}
                {index === 1 && <Code className="w-4 h-4 text-purple-500" />}
                {index === 2 && <Brain className="w-4 h-4 text-pink-500" />}
                <span>{section.title}</span>
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                      {...(item.href.startsWith('http') 
                        ? { target: '_blank', rel: 'noopener noreferrer' } 
                        : {})}
                    >
                      {/* Modify the icon rendering to handle items without icons */}
                      {item.icon && item.icon}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mahesh Sharan. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
              <Brain className="w-4 h-4 text-indigo-500" />
              <span>Built with</span>
              <span className="text-white">React</span>
              <span>&</span>
              <span className="text-white">Three.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};