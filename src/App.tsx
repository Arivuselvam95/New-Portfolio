import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Connect from './components/Connect';
import { ScrollProvider } from './contexts/ScrollContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-all duration-500">
          <Navbar />
          <Hero />
          <Skills />
          <Achievements />
          <Experience />
          <Projects />
          <Contact />
          <Connect />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;