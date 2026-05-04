import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import coder3d from '../assets/coder3d.gif?v=2';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hi there, I'm</span>
          <h1 className="name">Jitendra Singh</h1>
          <h2 className="title">Aspiring Software Engineer & <span className="highlight">QA Tester</span></h2>
          <p className="description">
            I build highly reliable, scalable web applications with a strong foundation in Full Stack Development and a passion for software quality.
          </p>
          
          <div className="hero-buttons">
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <FiArrowRight />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me <FiDownload />
            </motion.a>
          </div>
        </motion.div>

        <div className="hero-graphic">
          <motion.img 
            src={coder3d}
            alt="Premium 3D Animated Coder"
            className="hero-3d-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0, 255, 204, 0.15)' }}
            whileHover={{ y: -10 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
