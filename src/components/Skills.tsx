import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, Database, Globe, Cpu, Brain, Users, Sparkles, Zap } from 'lucide-react';
import { useSpring, animated } from 'react-spring';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-gray-700 via-black to-gray-800 dark:from-gray-200 dark:via-white dark:to-gray-100',
      bgColor: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'MongoDB', 'SQL', 'REST API'],
      color: 'from-gray-800 via-black to-gray-700 dark:from-gray-100 dark:via-white dark:to-gray-200',
      bgColor: 'from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'SQL'],
      color: 'from-black via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-200',
      bgColor: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Power BI'],
      color: 'from-gray-900 via-black to-gray-800 dark:from-gray-200 dark:via-white dark:to-gray-100',
      bgColor: 'from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Core Concepts',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving'],
      color: 'from-gray-800 via-black to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-200',
      bgColor: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Soft Skills',
      skills: ['Collaboration', 'Adaptability', 'Team Work'],
      color: 'from-black via-gray-900 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-100',
      bgColor: 'from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-300/30 dark:bg-gray-600/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">My Expertise</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technical{' '}
            <motion.span
              className="bg-gradient-to-r from-gray-800 via-black to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Skills
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A comprehensive toolkit of technologies and skills I've mastered through hands-on experience and continuous learning.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-50`}
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `conic-gradient(from 0deg, transparent, rgba(0,0,0,0.1), transparent)`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white dark:text-black mb-6 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                
                <motion.h3
                  className="text-xl font-bold text-gray-800 dark:text-white mb-6"
                  whileHover={{
                    scale: 1.05,
                    color: "#000"
                  }}
                >
                  {category.title}
                </motion.h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#000",
                        color: "#fff",
                        borderColor: "#000"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Section */}
        <motion.div
          className="mt-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="text-center mb-10">
            <motion.h3
              className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              Proficiency{' '}
              <span className="bg-gradient-to-r from-gray-800 via-black to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
                Levels
              </span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">
              My expertise across different technologies and domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'React & JavaScript', level: 90, color: 'from-gray-700 to-black dark:from-gray-200 dark:to-white' },
              { name: 'Node.js & MongoDB', level: 85, color: 'from-gray-800 to-black dark:from-gray-100 dark:to-white' },
              { name: 'Python & Django', level: 80, color: 'from-black to-gray-800 dark:from-white dark:to-gray-200' },
              { name: 'Data Structures & Algorithms', level: 95, color: 'from-gray-900 to-black dark:from-gray-200 dark:to-white' },
              { name: 'Problem Solving', level: 90, color: 'from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200' },
              { name: 'Full Stack Development', level: 85, color: 'from-black to-gray-700 dark:from-white dark:to-gray-100' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1 }}
                data-aos="fade-right"
                data-aos-delay={1400 + index * 100}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                  <motion.span
                    className="text-gray-900 dark:text-white font-bold text-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.6 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: 1.8 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2 + index * 0.2
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;