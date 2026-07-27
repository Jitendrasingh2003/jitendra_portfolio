import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SocialDock from './components/SocialDock';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('space'); // 'space' (dark) or 'sky' (vibrant)
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleTheme = () => {
    setTheme(prev => prev === 'space' ? 'sky' : 'space');
  };

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`App ${theme}-theme`}>
      {/* Moving Mesh Background */}
      <div className="mesh-bg">
        <div className={`mesh-circle circle-1 ${theme}`}></div>
        <div className={`mesh-circle circle-2 ${theme}`}></div>
        <div className={`mesh-circle circle-3 ${theme}`}></div>
      </div>

      {/* Mouse Spotlight (Flashlight) Effect */}
      <motion.div 
        className="mouse-spotlight"
        animate={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 170, 0.12), transparent 80%)`
        }}
      />

      {/* Custom Glowing Cursor */}
      <motion.div 
        className={`custom-cursor ${theme}`}
        animate={{
          x: mousePos.x - 10,
          y: mousePos.y - 10
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div 
        className={`cursor-follower ${theme}`}
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <SocialDock />
    </div>
  );
}

export default App;
