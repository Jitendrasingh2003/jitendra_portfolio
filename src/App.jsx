import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

// Detect touch/mobile devices
const checkMobile = () =>
  typeof window !== 'undefined' &&
  (window.innerWidth <= 768 ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.matchMedia('(hover: none) and (pointer: coarse)').matches);
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
import BackgroundCanvas from './components/BackgroundCanvas';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [theme, setTheme] = useState('space');
  const [isMobile] = useState(() => checkMobile());
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const cycleTheme = () => {
    setTheme(prev => {
      if (prev === 'space') return 'nebula';
      if (prev === 'nebula') return 'emerald';
      return 'space';
    });
  };

  useEffect(() => {
    // Skip Lenis on mobile — it causes scroll lag on Android
    if (isMobile) return;

    // Initialize Lenis Smooth Scroll (desktop only)
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

      // Detect hover over interactive elements
      const target = e.target;
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.closest('.project-card') || target.closest('.bento-item-premium'))) {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };
  }, [isMobile]);;

  return (
    <div className={`App ${theme}-theme`}>
      {/* Dynamic Interactive Background Engine */}
      <BackgroundCanvas theme={theme} />

      {/* Sleek Magnetic Precision Custom Cursor — desktop only */}
      {!isMobile && (
        <>
          <motion.div 
            className={`custom-cursor-dot ${theme} ${cursorHovered ? 'hovered' : ''}`}
            animate={{
              x: mousePos.x - (cursorHovered ? 8 : 4),
              y: mousePos.y - (cursorHovered ? 8 : 4),
              scale: cursorHovered ? 1.8 : 1
            }}
            transition={{ type: 'spring', stiffness: 700, damping: 35, mass: 0.1 }}
          />
          <motion.div 
            className={`cursor-ring-follower ${theme} ${cursorHovered ? 'hovered' : ''}`}
            animate={{
              x: mousePos.x - (cursorHovered ? 28 : 18),
              y: mousePos.y - (cursorHovered ? 28 : 18),
              width: cursorHovered ? 56 : 36,
              height: cursorHovered ? 56 : 36
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.5 }}
          />
        </>
      )}

      {/* Top Scroll Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={cycleTheme} />
      
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
