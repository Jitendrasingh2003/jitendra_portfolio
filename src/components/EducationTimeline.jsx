import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import './EducationTimeline.css';

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      degree: "B. Tech in Computer Science Engineering",
      institution: "JECRC University",
      location: "Jaipur, Rajasthan",
      period: "2022 – 2026",
      type: "University / Degree",
      icon: <FaGraduationCap />,
      details: ["Full Stack Development & Data Structures", "Software Engineering & QA Testing", "AI Application Architectures"]
    },
    {
      id: 2,
      degree: "Senior Secondary Education (12th)",
      institution: "Aditya Birla School",
      location: "Renukoot, Uttar Pradesh",
      period: "2021 – 2022",
      type: "High School (PCM)",
      icon: <FaUniversity />,
      details: ["Physics, Chemistry & Mathematics", "Computer Science Foundations", "Academic Excellence"]
    },
    {
      id: 3,
      degree: "Secondary Education (10th)",
      institution: "Aditya Birla School",
      location: "Renukoot, Uttar Pradesh",
      period: "2019 – 2020",
      type: "Secondary School",
      icon: <FaSchool />,
      details: ["Science & Mathematics Core", "Computer Literacy", "Foundation Curriculum"]
    }
  ];

  return (
    <div className="education-container-wide glass-card-premium">
      <div className="edu-header-wide">
        <div className="edu-header-title">
          <FiBookOpen className="edu-pulse-icon" />
          <span>Academic Journey & Education</span>
        </div>
        <div className="edu-status-badge">
          <FiAward />
          <span>JECRC University & Aditya Birla School</span>
        </div>
      </div>

      <div className="edu-cards-grid">
        {educationData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="edu-card-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -5 }}
          >
            <div className="edu-card-top">
              <div className="edu-icon-badge">
                {item.icon}
              </div>
              <span className="edu-type-tag">{item.type}</span>
            </div>

            <h4 className="edu-degree-heading">{item.degree}</h4>
            <h5 className="edu-school-heading">{item.institution}</h5>
            
            <div className="edu-meta-info">
              <span><FiMapPin /> {item.location}</span>
              <span className="edu-year-pill"><FiCalendar /> {item.period}</span>
            </div>

            <ul className="edu-bullets">
              {item.details.map((detail, i) => (
                <li key={i}>
                  <FiCheckCircle /> {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
