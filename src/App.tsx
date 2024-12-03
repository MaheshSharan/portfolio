import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { MouseTrail } from './components/MouseTrail';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Background3D } from './components/Background3D';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen onComplete={() => setShowSplash(false)} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Background3D />
              <MouseTrail />
  
              <Header />
              <main>
                <Hero />
                <TechStack />
                <Projects />
                <Testimonials />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}

export default App;