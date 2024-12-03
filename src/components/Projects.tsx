import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Badminton Shuttle Detection",
      description: "Advanced computer vision system for real-time detection and tracking of badminton shuttlecocks using deep learning. Implements state-of-the-art object detection with custom-trained models.",
      tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "OpenCV"],
      github: "https://github.com/MaheshSharan/BadmintonShuttleCockDetection",
      demo: "",
      isPrivate: false
    },
    {
      title: "Intelligent Document Analysis",
      description: "Deep learning-based document analysis system for automated information extraction and classification. Uses transformer models for text understanding and custom CNN for layout analysis.",
      tags: ["Python", "PyTorch", "NLP", "Computer Vision", "Transformers"],
      github: "https://github.com/MaheshSharan/IntelligentDocAnalysis",
      demo: "",
      isPrivate: false
    },
    {
      title: "LiveStreamer High",
      description: "A high-performance live streaming platform with advanced features and real-time interaction capabilities.",
      tags: ["React", "WebRTC", "Node.js", "Real-time", "Streaming"],
      github: "https://github.com/MaheshSharan/LiveStreamer-High",
      demo: "https://live-streamer-high.vercel.app",
      isPrivate: false
    },
    {
      title: "FriendlyCompute",
      description: "A peer-to-peer resource sharing system for distributed computing, enabling students to pool computing resources.",
      tags: ["WebRTC", "React", "Node.js", "P2P", "Distributed Computing"],
      github: "https://github.com/MaheshSharan/FriendlyCompute",
      demo: "",
      isPrivate: false
    },
    {
      title: "Volume Booster",
      description: "Advanced audio processing tool for enhancing and controlling system audio levels beyond standard limits.",
      tags: ["C++", "Audio Processing", "Windows API", "DSP"],
      github: "https://github.com/MaheshSharan/Volume_Booster",
      demo: "",
      isPrivate: false
    },
    {
      title: "Universal File Converter",
      description: "Web-based file conversion tool supporting multiple formats with an intuitive interface.",
      tags: ["React", "Node.js", "File Processing", "API Integration"],
      github: "https://github.com/MaheshSharan/Universal_File_Converter",
      demo: "https://universal-file-converter.vercel.app",
      isPrivate: false
    }
  ];

  return (
    <section className="py-20 bg-gray-800 dark:bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
              {project.title}
            </h3>
            {project.isPrivate && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded-full">
                Private
              </span>
            )}
          </div>
          
          <p className="text-gray-400 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-gray-800 dark:bg-gray-700 text-indigo-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </motion.a>
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </div>
    </motion.div>
  );
};