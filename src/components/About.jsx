import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiCpu, FiMonitor, FiDatabase, FiCheckCircle, FiShield, FiZap } from 'react-icons/fi';
import EducationTimeline from './EducationTimeline';
import './About.css';

const About = () => {
  const specialties = [
    {
      icon: <FiShield />,
      title: "Software Tester & QA Automation",
      desc: "Specialized in E2E automation testing, writing robust test cases, Selenium WebDriver, Postman API validation, defect tracking in JIRA, and regression testing."
    },
    {
      icon: <FiZap />,
      title: "AI & Full Stack Developer",
      desc: "Architecting scalable web applications using Next.js 16, React 19, TypeScript, Node.js, Express, MongoDB, Supabase, and integrating Claude & OpenAI APIs."
    }
  ];

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
          {/* Main Bio Block: Software Tester & AI Full Stack Developer */}
          <motion.div 
            className="bento-item-premium main-intro-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <div className="bento-content-premium">
              <div className="bento-icon-premium"><FiUser /></div>
              <h3>Who I Am</h3>
              <div className="bio-subtitle-pill">
                <span className="role-tag QA">Software Tester</span>
                <span className="role-tag-divider">&</span>
                <span className="role-tag AI">AI Full Stack Developer</span>
              </div>
              <p className="bio-paragraph">
                Hi, I'm <strong>Jitendra Singh</strong>. I specialize in bridging the gap between building high-end web applications and guaranteeing 100% software quality. As a <strong>Software Tester & AI Full Stack Developer</strong>, I build modern web platforms with <strong>React 19 & Next.js 16</strong> while enforcing rigorous <strong>QA Automation & E2E Testing</strong> standards.
              </p>
              
              <div className="bio-skills-tags">
                <span className="bio-tag"><FiCheckCircle /> QA Automation & Bug Tracking</span>
                <span className="bio-tag"><FiCheckCircle /> Selenium & Postman API Testing</span>
                <span className="bio-tag"><FiCheckCircle /> Next.js 16 & React 19</span>
                <span className="bio-tag"><FiCheckCircle /> AI API Integrations</span>
              </div>
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
                <span className="stat-num-premium">QA</span>
                <span className="stat-label-premium">Automation Tester</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-row-premium">
                <span className="stat-num-premium">AI</span>
                <span className="stat-label-premium">Full Stack Dev</span>
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
                <div className="tech-icon-wrapper" title="Frontend Dev"><FiCode /></div>
                <div className="tech-icon-wrapper" title="Backend DB"><FiDatabase /></div>
                <div className="tech-icon-wrapper" title="AI Engineering"><FiCpu /></div>
                <div className="tech-icon-wrapper" title="QA & Testing"><FiMonitor /></div>
              </div>
            </div>
          </motion.div>

          {/* Specialties / Core Pillars Block */}
          <div className="specialties-grid-container">
            {specialties.map((spec, i) => (
              <motion.div 
                key={i}
                className="bento-item-premium specialty-card-premium"
                whileHover={{ y: -5 }}
              >
                <div className="bento-card-glow"></div>
                <div className="bento-content-premium">
                  <div className="specialty-icon">{spec.icon}</div>
                  <h4>{spec.title}</h4>
                  <p>{spec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Journey & Education Showcase Card (Replacing Live QA) */}
          <motion.div 
            className="bento-item-premium terminal-block-premium"
            whileHover={{ y: -5 }}
          >
            <div className="bento-card-glow"></div>
            <EducationTimeline />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
