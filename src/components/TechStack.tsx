import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiJavascript,
  SiPython,
  SiCsharp,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiAmazon,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiAndroidstudio,
  SiFlutter
} from 'react-icons/si';
import { DiJava } from "react-icons/di";
import { BiGitBranch } from 'react-icons/bi';

const technologies = {
  languages: {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Java", icon: DiJava, color: "text-red-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
      { name: "C#", icon: SiCsharp, color: "text-green-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" }
    ]
  },
  frontend: {
    title: "Frontend Development",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Angular", icon: SiAngular, color: "text-red-500" },
      { name: "Vue", icon: SiVuedotjs, color: "text-emerald-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
      { name: "Material UI", icon: SiMaterialdesign, color: "text-blue-500" }
    ]
  },
  backend: {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" }
    ]
  },
  ai_ml: {
    title: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-blue-500" }
    ]
  },
  databases: {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" }
    ]
  },
  gamedev: {
    title: "Game Development",
    items: [
      { name: "Unity", icon: SiUnity, color: "text-gray-300" },
      { name: "Unreal Engine", icon: SiUnrealengine, color: "text-white" },
      { name: "Blender", icon: SiBlender, color: "text-orange-500" }
    ]
  },
  cloud: {
    title: "Cloud Services",
    items: [
      { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
      { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-500" },
      { name: "GCP", icon: SiGooglecloud, color: "text-blue-400" }
    ]
  },
  devops: {
    title: "DevOps & CI/CD",
    items: [
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-400" },
      { name: "Git", icon: BiGitBranch, color: "text-orange-500" }
    ]
  },
  mobile: {
    title: "Mobile Development",
    items: [
      { name: "Android", icon: SiAndroidstudio, color: "text-green-500" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" }
    ]
  }
};

export const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-800" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([key, category]) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="bg-gray-800 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="group relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex flex-col items-center p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-300">
                        <tech.icon className={`w-8 h-8 ${tech.color} mb-2 transition-transform duration-300 group-hover:scale-110`} />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"
                        initial={false}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 0.5 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};