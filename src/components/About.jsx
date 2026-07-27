import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiCpu, FiMonitor, FiDatabase, FiLayers, FiTerminal } from 'react-icons/fi';
import Terminal from './Terminal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">About <span className="highlight-amp">Me</span></h2>
          <div className="heading-line-premium"></div>
        </div>
        
        <div className="bento-grid-premium">
          {/* Main Intro Block */}
          <motion.div 
            className="bento-item-premium main-intro-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <div className="bento-content-premium">
              <div className="bento-icon-premium"><FiUser /></div>
              <h3>Who I Am</h3>
              <p>
                I'm Jitendra Singh, a dedicated Full Stack Developer and QA Engineer. I bridge the gap between building scalable web applications and ensuring flawless software quality. With expertise in modern tech stacks and a deep focus on AI-driven testing, I deliver robust solutions that are high-performing, secure, and meticulously validated.
              </p>
            </div>
          </motion.div>

          {/* Stats Block */}
          <motion.div 
            className="bento-item-premium stats-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <div className="bento-content-premium center-content">
              <div className="stat-row-premium">
                <span className="stat-num-premium">3+</span>
                <span className="stat-label-premium">Major Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-row-premium">
                <span className="stat-num-premium">AI</span>
                <span className="stat-label-premium">Driven Work</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Mini Block */}
          <motion.div 
            className="bento-item-premium tech-icons-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <div className="bento-content-premium center-content">
              <div className="tech-icons-row-premium">
                <div className="tech-icon-wrapper"><FiCode title="Frontend" /></div>
                <div className="tech-icon-wrapper"><FiDatabase title="Backend" /></div>
                <div className="tech-icon-wrapper"><FiCpu title="AI" /></div>
                <div className="tech-icon-wrapper"><FiMonitor title="Testing" /></div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Developer Terminal Block */}
          <motion.div 
            className="bento-item-premium terminal-block-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <Terminal />
          </motion.div>

          {/* Education Block */}
          <motion.div 
            className="bento-item-premium education-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <div className="bento-content-premium">
              <div className="bento-icon-small"><FiLayers /></div>
              <h3>Education</h3>
              <p className="edu-degree-premium">Bachelor of Technology</p>
              <p className="edu-spec-premium">Computer Science Engineering</p>
            </div>
            <div className="edu-bg-icon"><FiLayers /></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
