import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Brain, Sparkles, Code } from 'lucide-react';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      setTimeout(onComplete, 3000);
    };
    sequence();
  }, [controls, onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const nameVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" }
    }
  };

  const iconContainerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            times: [0, 0.5, 1],
            repeat: 0
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 border-2 border-indigo-500/30 rounded-full pulse-ring pulse-ring-${i}`}
              style={{
                transform: `scale(${1 + i * 0.2})`
              }}
            />
          ))}
        </motion.div>

        <motion.div
          variants={iconContainerVariants}
          className="relative flex flex-col items-center"
        >
          <motion.div variants={iconVariants} className="mb-8 transform scale-75 sm:scale-100">
            <Brain className="w-24 h-24 text-indigo-500" />
          </motion.div>

          <motion.h1
            variants={nameVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center px-4"
          >
            Mahesh Sharan
          </motion.h1>

          <motion.div
            variants={titleVariants}
            className="text-lg sm:text-xl md:text-2xl text-indigo-400 font-medium mb-6 flex items-center space-x-2 px-4"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Deep Learning Architect</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>

          <motion.div 
            className="flex items-center space-x-4 text-gray-400 px-4"
            variants={titleVariants}
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-base sm:text-lg">AI & Full Stack Expert</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};