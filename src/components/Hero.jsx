import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import coder3d from '../assets/coder3d.gif?v=2';
import { Typewriter } from 'react-simple-typewriter';
import Magnetic from './Magnetic';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="greeting-badge-premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="pulse-dot"></span> Hi there, I'm
          </motion.div>
          
          <h1 className="name-premium">Jitendra <span className="highlight-amp">Singh</span></h1>
          
          <h2 className="title-premium">
            <span className="static-text">I build</span>
            <span className="highlight-premium">
              <Typewriter
                words={[' Scalable Web Apps', ' High-End UIs', ' Reliable QA Tests']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          
          <p className="description-premium">
            A dedicated <span className="highlight-text">Full Stack Developer</span> and <span className="highlight-text">QA Engineer</span> transforming ideas into highly reliable, premium digital experiences.
          </p>
          
          <div className="hero-buttons-premium">
            <Magnetic>
              <motion.a 
                href="#projects" 
                className="btn-hero-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <FiArrowRight className="btn-icon" />
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a 
                href="/Jitendra_Singh_Resume.svg" 
                target="_blank"
                download="Jitendra_Singh_Resume.svg"
                className="btn-hero-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume <FiDownload className="btn-icon" />
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div 
          className="hero-graphic-premium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
        >
          <div className="graphic-glow-backdrop"></div>
          <motion.img 
            src={coder3d}
            alt="Premium 3D Animated Coder"
            className="hero-3d-animation-premium"
            whileHover={{ y: -10, rotate: [0, -2, 2, 0] }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
