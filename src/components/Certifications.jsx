import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Deloitte Technology Job Simulation Certificate",
      issuer: "Forage / Deloitte",
      description: "Completed a simulated project focusing on technology consulting and implementation strategies.",
      link: "#"
    },
    {
      title: "Generative AI-Powered Data Analytics Job Simulation",
      issuer: "Forage",
      description: "Explored AI-driven data analysis techniques and their application in business environments.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Certifications</h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="cert-card glass"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px var(--accent-glow)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>
                <motion.a href={cert.link} className="cert-link" whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                  View Certificate <FaExternalLinkAlt />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
