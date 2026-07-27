import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { FiX, FiAward, FiArrowRight, FiCalendar, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage / TATA",
      date: "June 24th, 2025",
      description: "Successfully completed practical tasks in Exploratory Data Analysis, Predicting Delinquency with AI, and Implementing AI-driven collections strategy in a simulated professional environment.",
      skills: ["GenAI", "Data Analytics", "Risk Profiling", "AI Strategy"],
      fileUrl: "/genai_cert.svg"
    },
    {
      id: 2,
      title: "Software Testing with Generative AI",
      issuer: "Simplilearn / SkillUp",
      date: "May 7th, 2026",
      description: "Mastered automated testing workflows using Generative AI tools. Focused on AI-driven test case generation, defect prediction, and enhancing software quality through large language models.",
      skills: ["Software Testing", "Generative AI", "Automation", "QA Engineering", "Prompt Engineering"],
      fileUrl: "/software_testing_ai_cert.svg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-cert">
          <h2 className="section-title">Certifications <span className="highlight-amp">&</span> Achievements</h2>
          <div className="heading-line-cert"></div>
        </div>

        <motion.div 
          className="cert-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              variants={cardVariants}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-date">
                  <FiCalendar style={{ marginRight: '6px', marginBottom: '-2px' }} />
                  {cert.date.split(',')[0]}
                </div>
              </div>

              <div className="cert-content">
                <h3>{cert.title}</h3>
                <div className="cert-issuer">
                  <BsBuilding /> {cert.issuer}
                </div>
                
                <div className="cert-skills-mini">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                  {cert.skills.length > 3 && <span className="more-skills">+{cert.skills.length - 3}</span>}
                </div>
              </div>

              <div className="cert-footer">
                <span className="view-btn-text">
                  View Credential
                </span>
                <div className="view-btn-icon">
                  <FiArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-cert" onClick={() => setSelectedCert(null)}>
                <FiX />
              </button>

              <div className="modal-inner-cert">
                <div className="modal-header-cert">
                  <div className="cert-icon-wrapper modal-icon-lg">
                    <FiAward />
                  </div>
                  <div className="modal-header-text">
                    <h3>{selectedCert.title}</h3>
                    <div className="modal-issuer-cert">
                      <span className="issuer-badge">{selectedCert.issuer}</span> 
                      <div className="modal-date"><FiCalendar /> {selectedCert.date}</div>
                    </div>
                  </div>
                </div>

                <div className="modal-content-split">
                  <motion.div 
                    className="cert-preview-container"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="cert-glow-effect"></div>
                    <img src={selectedCert.fileUrl} alt={selectedCert.title} className="cert-image-preview" />
                  </motion.div>

                  <motion.div 
                    className="modal-body-cert"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="modal-section-title"><FiInfo /> Description</h4>
                    <p className="cert-desc-text">{selectedCert.description}</p>

                    <h4 className="modal-section-title"><FiCheckCircle /> Skills Acquired</h4>
                    <div className="cert-skills-tags">
                      {selectedCert.skills.map((skill, i) => (
                        <motion.span 
                          key={i} 
                          className="cert-skill-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="modal-footer-cert">
                      <a href={selectedCert.fileUrl} target="_blank" rel="noreferrer" className="view-doc-btn">
                        Open Official Certificate <FaExternalLinkAlt style={{ fontSize: '0.85em' }} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
