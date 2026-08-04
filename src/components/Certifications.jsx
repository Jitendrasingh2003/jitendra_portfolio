import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { FiX, FiAward, FiArrowRight, FiCalendar, FiCheckCircle, FiInfo, FiStar, FiArrowUpRight } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import './Certifications.css';

// Detect touch/mobile — 3D transforms break card layout on Android
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.innerWidth <= 768);

const CertCardExpanded = ({ cert, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="cert-card cert-card-long-expanded"
      style={isTouchDevice() ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={isTouchDevice() ? undefined : handleMouseMove}
      onMouseLeave={isTouchDevice() ? undefined : handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      layout
    >
      <div className="cert-card-glow"></div>
      <div style={isTouchDevice() ? {} : { transform: "translateZ(25px)" }} className="cert-card-inner-expanded">
        
        {/* Top Header */}
        <div className="cert-header">
          <div className="cert-header-left">
            <div className="cert-icon-wrapper">
              <FaCertificate />
            </div>
            <span className="cert-issuer-badge">{cert.issuer}</span>
          </div>
          <div className="cert-date">
            <FiCalendar style={{ marginRight: '6px', marginBottom: '-2px' }} />
            {cert.date}
          </div>
        </div>

        {/* Certificate Title & Code */}
        <div className="cert-body-expanded">
          <h3 className="cert-main-title">{cert.title}</h3>
          <p className="cert-code-sub">{cert.code}</p>

          {/* Certificate Image Preview Card */}
          <div className="cert-inline-image-box" onClick={onClick}>
            <img src={cert.fileUrl} alt={cert.title} className="cert-inline-img" />
            <div className="cert-image-overlay-hover">
              <span>Click to Enlarge Certificate <FiArrowUpRight /></span>
            </div>
          </div>

          <p className="cert-description-text">{cert.description}</p>
          
          {/* Key Competencies Bullet Points */}
          <div className="cert-highlights-box">
            <h4 className="highlights-header"><FiStar /> Core Competencies & Practical Tasks</h4>
            <ul className="highlights-list">
              {cert.highlights.map((pt, i) => (
                <li key={i}>
                  <FiCheckCircle className="highlight-check" />
                  <span><strong>{pt.label}:</strong> {pt.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Skills Badges */}
          <div className="cert-skills-full">
            {cert.skills.map((skill, i) => (
              <span key={i} className="cert-badge-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="cert-footer-actions">
          <button className="explore-cert-btn" onClick={onClick}>
            Inspect Full Verification <FiArrowUpRight />
          </button>
          <a 
            href={cert.fileUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="cert-direct-doc-link"
            title="Open Document"
          >
            <FaExternalLinkAlt /> Open High-Res
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const certifications = [
    {
      id: 1,
      title: "Software Testing with Generative AI",
      issuer: "Simplilearn / SkillUp",
      date: "May 7th, 2026",
      code: "Certificate Code: 10199904",
      description: "Mastered professional automated testing workflows powered by Generative AI. Focused on AI-driven test case generation, defect prediction, prompt engineering for QA, and validating web applications with LLMs.",
      highlights: [
        { label: "AI-Driven Test Automation", desc: "Generated automated unit test cases and end-to-end integration test scenarios using Generative AI models." },
        { label: "Defect Prediction & QA Prompts", desc: "Utilized LLMs for early software defect prediction, edge case identification, and crafting optimal testing prompts." },
        { label: "QA Engineering Best Practices", desc: "Automated regression suites, Postman API validation, and browser test execution workflows." }
      ],
      skills: ["Software Testing", "Generative AI", "Automation", "QA Engineering", "Prompt Engineering"],
      fileUrl: "/software_testing_cert.png"
    },
    {
      id: 2,
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage / TATA",
      date: "June 24th, 2025",
      code: "Verification: d7j4ugmjpOSL3Rand | TATA Virtual Internship",
      description: "Completed practical simulation tasks at TATA in Exploratory Data Analysis, Predicting Delinquency with AI, Business Storytelling, and implementing AI-driven collections strategy in a corporate environment.",
      highlights: [
        { label: "Exploratory Data Analysis & Risk Profiling", desc: "Parsed multi-dimensional financial datasets to identify customer risk profiles and delinquency patterns." },
        { label: "AI Delinquency Forecasting", desc: "Built predictive ML models to forecast payment defaults and optimize risk mitigation strategies." },
        { label: "AI-Driven Collections Strategy", desc: "Formulated data-backed executive business reports and storytelling presentations for TATA leadership." }
      ],
      skills: ["GenAI", "Data Analytics", "Risk Profiling", "AI Strategy", "Business Intelligence"],
      fileUrl: "/tata_genai_cert.png"
    }
  ];

  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">Certifications <span className="highlight-amp">&</span> Credentials</h2>
          <div className="heading-line-premium"></div>
        </div>

        <div className="cert-grid-expanded">
          {certifications.map((cert) => (
            <CertCardExpanded
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            data-lenis-prevent="true"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              data-lenis-prevent="true"
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
                    <h4 className="modal-section-title"><FiInfo /> Overview & Verification</h4>
                    <p className="cert-desc-text">{selectedCert.description}</p>

                    <h4 className="modal-section-title"><FiCheckCircle /> Key Competencies Acquired</h4>
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
                        Open Full High-Res Document <FaExternalLinkAlt style={{ fontSize: '0.85em' }} />
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
