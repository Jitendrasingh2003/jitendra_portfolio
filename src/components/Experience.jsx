import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card glass">
              <div className="exp-header">
                <div className="exp-icon">
                  <FaBriefcase />
                </div>
                <div className="exp-title">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
              <ul className="exp-details">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
