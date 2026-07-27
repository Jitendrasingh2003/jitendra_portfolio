import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "QA Intern",
      company: "i4Consulting Pvt. Ltd.",
      date: "April 2026 - Present",
      description: [
        "Performed manual testing of web applications including functional, regression, smoke, and sanity testing.",
        "Wrote detailed test cases, test plans, and test scenarios from functional specifications and user stories.",
        "Executed end-to-end functional testing of web modules, verifying UI behavior, form validations, and data.",
        "Developed basic automation scripts for login flows, form submissions, and navigation.",
        "Performed API testing using Postman — validated REST APIs for correct status codes.",
        "Identified, documented, and tracked defects in JIRA with clear steps to reproduce.",
        "Participated in Agile/Scrum ceremonies including daily standups and sprint planning."
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
                    <h4 className="exp-company-premium">
                      <FaBuilding /> {exp.company}
                    </h4>
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
                        transition={{ delay: 0.2 + (i * 0.1) }}
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
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
