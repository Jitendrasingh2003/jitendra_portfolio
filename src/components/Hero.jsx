import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import coder3d from '../assets/coder3d.gif?v=2';
import { Typewriter } from 'react-simple-typewriter';
import Magnetic from './Magnetic';
import AudioPitchPlayer from './AudioPitchPlayer';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="greeting-badge-premium glass-card-premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="pulse-dot-radar"></span>
            <span className="badge-text">Available for QA & Full Stack Engineering Roles</span>
          </motion.div>
          
          <h1 className="name-premium">
            Jitendra <span className="highlight-amp">Singh</span>
          </h1>

          <div className="hero-main-role-badge">
            <span className="role-main-text">QA Automation Specialist & AI Full Stack Developer</span>
          </div>
          
          <h2 className="title-premium">
            <span className="static-text">Architecting </span>
            <span className="highlight-premium">
              <Typewriter
                words={[' Automated QA Test Suites', ' Full Stack Web Apps', ' AI-Driven Products', ' Selenium & Postman Workflows']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </span>
          </h2>
          
          <p className="description-premium">
            Quality Assurance Automation Specialist & Full Stack Software Engineer crafting high-performance, fault-tolerant web applications. Focused on automated E2E testing, Selenium WebDriver, Postman API validation, React 19, and AI API integrations.
          </p>

          <div className="hero-highlights-pills">
            <span className="highlight-pill"><FiCheckCircle /> QA & Automation Specialist</span>
            <span className="highlight-pill"><FiCheckCircle /> React 19 & Node.js</span>
            <span className="highlight-pill"><FiCheckCircle /> Python & TypeScript</span>
          </div>

          {/* Interactive AI Voice Elevator Pitch Player */}
          <AudioPitchPlayer />
          
          <div className="hero-buttons-premium">
            <Magnetic>
              <motion.a 
                href="#projects" 
                className="btn-hero-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Work <FiArrowRight className="btn-icon" />
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a 
                href="/Jitendra_Singh_Resume.svg" 
                target="_blank"
                download="Jitendra_Singh_Resume.svg"
                className="btn-hero-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Download Resume <FiDownload className="btn-icon" />
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div 
          className="hero-graphic-container"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3, delay: 0.25 }}
        >
          <div className="holographic-aura-ring"></div>
          <div className="graphic-glass-frame">
            <div className="frame-top-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="frame-title">jitendra_dev.app</span>
            </div>
            <motion.img 
              src={coder3d}
              alt="Jitendra 3D Animated Developer"
              className="hero-3d-graphic"
              whileHover={{ y: -8, rotate: [0, -1, 1, 0] }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
