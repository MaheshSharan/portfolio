import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import { Toast } from './Toast';

export const Hero = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadCV = () => {
    setShowToast(true);
    // Add actual download logic here when CV is ready
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 pb-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 sm:mb-6">
              Deep Learning Architect
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-400 mb-4 sm:mb-6">
              Building the Future with AI
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
          >
            With expertise in AI and Deep Learning, I specialize in
            transforming complex challenges into elegant, intelligent solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/mahesh-sharan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Hire Me</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="w-full sm:w-auto px-8 py-3 border border-indigo-500 text-indigo-400 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-indigo-500/10 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16 px-4 sm:px-0"
          >
            <StatsCard number="5+" text="Years of Experience" />
            <StatsCard number="20+" text="Projects Completed" />
            <StatsCard number="10+" text="AI Models Deployed" />
          </motion.div>
        </div>
      </div>
      <Toast 
        message="CV is being updated. Check back soon!" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </section>
  );
};

const StatsCard = ({ number, text }: { number: string; text: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl"
  >
    <h3 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">{number}</h3>
    <p className="text-gray-400">{text}</p>
  </motion.div>
);