import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 255, 204, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Career Objective</h3>
            <p>
              Aspiring software engineer with a strong foundation in Full Stack Development and a growing interest in QA Testing. 
              Known for being a fast learner and adaptable team player. Passionate about building reliable, scalable web 
              applications and software quality, while continuously learning and growing in the tech industry.
            </p>
          </motion.div>

          <motion.div 
            className="education-timeline glass"
            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 255, 204, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><FaGraduationCap /> Education</h3>
            <div className="edu-item">
              <div className="edu-year">2022 - 2026</div>
              <div className="edu-details">
                <h4>B.Tech in Computer Science Engineering</h4>
                <p>JECRC University, Jaipur</p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-year">2021 - 2022</div>
              <div className="edu-details">
                <h4>Senior Secondary Education</h4>
                <p>Aditya Birla School, Renukoot (UP)</p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-year">2019 - 2020</div>
              <div className="edu-details">
                <h4>Secondary Education</h4>
                <p>Aditya Birla School, Renukoot (UP)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
