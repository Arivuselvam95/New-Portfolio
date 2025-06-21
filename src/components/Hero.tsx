import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const floatingAnimation = useSpring({
    loop: true,
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 3000 }
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-300/20 dark:text-gray-600/20 text-2xl font-mono"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
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
          >
            {['<>', '{}', '[]', '/>', '()', '&&', '||', '=>'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}

        {/* Interactive Gradient Orbs */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
        
        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border-2 border-gray-300/30 dark:border-gray-600/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, delay: i * 0.5 }
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Animated Avatar */}
          <motion.div
            className="relative mb-8 inline-block"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <animated.div style={floatingAnimation}>
              <motion.div 
                className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 via-black to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-200 rounded-full flex items-center justify-center text-white dark:text-black text-4xl font-bold shadow-2xl relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 50px rgba(0,0,0,0.3)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
                AS
              </motion.div>
            </animated.div>
            
            {/* Floating Icons */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4"
              animate={{
                y: [10, -10, 10],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Zap className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.div>

          {/* Animated Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Hi,
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                I'm
              </motion.span>{' '}
              <motion.span
                className="bg-gradient-to-r from-gray-800 via-black to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgba(0,0,0,0.3)"
                }}
              >
                Arivuselvam
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block"
              >
                👋
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Full Stack Developer & Problem Solver
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              Computer Science Engineering student passionate about creating innovative solutions. 
              Quick to adapt to new technologies with strong problem-solving and collaborative skills.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.button
              className="group relative flex items-center gap-2 bg-gradient-to-r from-gray-800 via-black to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-200 text-white dark:text-black px-8 py-4 rounded-full font-semibold shadow-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
              onClick={() => window.open(`${process.env.PUBLIC_URL}/Arivuselvam_S.pdf`, "_blank")}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.button>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Arivuselvam95", delay: 0 },
                { icon: Linkedin, href: "https://www.linkedin.com/in/arivuselvam-s-478765280", delay: 0.1 },
                { icon: Mail, href: "mailto:arivuselvam439@gmail.com", delay: 0.2 }
              ].map(({ icon: Icon, href, delay }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 12,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + delay, duration: 0.5 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToSkills}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown size={32} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;