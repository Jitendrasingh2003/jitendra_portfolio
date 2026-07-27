import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import QATestDashboard from './QATestDashboard';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Quality Assurance Automation Intern",
      company: "NOI Technologies LLC",
      date: "May 2026 - Present",
      location: "Jaipur, Rajasthan, India (On-site)",
      description: [
        "Working on Automation Testing for web applications to ensure software quality, performance, and reliability.",
        "Creating and executing automated test cases for functional, integration, and regression testing suites.",
        "Hands-on API validation using Postman, test automation frameworks, and QA release workflows.",
        "Identifying, documenting, and tracking bugs via JIRA to optimize application stability.",
        "Working with Linux/Ubuntu terminal environment, shell scripts, and browser DevTools.",
        "Collaborating with cross-functional development teams during Agile/Scrum sprint cycles."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">Professional <span className="highlight-amp">Experience</span></h2>
          <div className="heading-line-premium"></div>
        </div>
        
        <div className="experience-container-premium">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="exp-card-premium"
              whileHover={{ y: -5 }}
            >
              <div className="exp-card-glow"></div>
              <div className="exp-content-premium">
                <div className="exp-header-premium">
                  <div className="exp-icon-wrapper-premium">
                    <FaBriefcase />
                  </div>
                  <div className="exp-header-info">
                    <div className="exp-title-row">
                      <h3>{exp.title}</h3>
                      <div className="exp-date-badge-premium">
                        <FaCalendarAlt /> {exp.date}
                      </div>
                    </div>
                    <div className="exp-meta-row">
                      <h4 className="exp-company-premium">
                        <FaBuilding /> {exp.company}
                      </h4>
                      <span className="exp-location-premium">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="exp-details-container">
                  <ul className="exp-details-premium">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + (i * 0.08) }}
                      >
                        <span className="bullet-icon"><FaCheckCircle /></span>
                        <span className="bullet-text">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Interactive Live QA Automation Testing Terminal */}
          <QATestDashboard />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
