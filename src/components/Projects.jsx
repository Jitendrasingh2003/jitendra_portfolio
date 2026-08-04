import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiX, FiArrowUpRight, FiFolder, FiClock, FiStar, FiInfo, FiCode, FiBox, FiCheckCircle } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

// Detect touch/mobile — 3D transforms break card layout on Android
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.innerWidth <= 768);

const ProjectCard = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
      className="project-card long-card-expanded"
      style={isTouchDevice() ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={isTouchDevice() ? undefined : handleMouseMove}
      onMouseLeave={isTouchDevice() ? undefined : handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      layout
    >
      <div className="project-card-glow"></div>
      <div style={isTouchDevice() ? {} : { transform: "translateZ(25px)" }} className="project-content">
        
        {/* Top Header */}
        <div className="project-header">
          <div className="project-header-left">
            <div className="project-icon-wrapper">
              <FiFolder />
            </div>
            <span className="project-cat-badge">{project.category}</span>
          </div>
          <div className="project-date-badge">
            <FiClock style={{ marginRight: '6px', marginBottom: '-2px' }} />
            {project.date}
          </div>
        </div>
        
        {/* Title & Description */}
        <div className="project-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-subtitle-card">{project.subtitle}</p>
          <p className="project-desc">{project.shortDesc}</p>
          
          {/* Key Feature Highlights directly on card */}
          <div className="project-card-highlights">
            <h4 className="highlights-header"><FiStar /> Key Features & Modules</h4>
            <ul className="highlights-list">
              {project.points.slice(0, 4).map((pt, i) => (
                <li key={i}>
                  <FiCheckCircle className="highlight-check" />
                  <span><strong>{pt.label}:</strong> {pt.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Tech Stack */}
          <div className="project-tech-full">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
        
        {/* Action Footer */}
        <div className="project-footer-actions">
          <button className="explore-details-btn" onClick={onClick}>
            Explore Architecture & Workspaces <FiArrowUpRight />
          </button>
          
          {project.link !== "#" && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="github-direct-link"
              title="View GitHub Repository"
            >
              <FaGithub /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const categories = ['All', 'AI Applications', 'Full Stack'];

  const projects = [
    {
      id: 4,
      title: "SmartShip — Enterprise Logistics Platform",
      category: "Full Stack",
      shortDesc: "Production-grade role-based shipping, logistics, and fleet tracking platform with parcel booking, dynamic tariffs, Razorpay simulation, automatic PDF invoices, live Leaflet tracking, and automated AI client support.",
      date: "July 2026",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.io", "PDFKit", "Leaflet Maps", "Recharts", "JWT", "Tailwind CSS"],
      fullTitle: "SMARTSHIP (MARINE BYTES)",
      subtitle: "Enterprise Role-Based Logistics & Fleet Management System",
      detailedStack: {
        "Frontend & UI": "React.js (Vite), Tailwind CSS & Vanilla CSS, Recharts, Leaflet Maps, Lucide React, Socket.io-client",
        "Backend & Real-time": "Node.js & Express.js, Socket.io (WebSockets), JWT Authentication, Bcryptjs, PDFKit (Invoices), Helmet, Morgan",
        "Database Engine": "MySQL (mysql2/promise pool) with auto-creation & automatic seeder (seeder.js)",
        "Integrations & Alerts": "Simulated SMS (Twilio), Email (Nodemailer), Mock Razorpay Payment Gateway, RBAC Protection"
      },
      points: [
        { label: "Customer Portal (Book & Track)", desc: "Instant transit duration estimator, draft consignment booking, initial depot selection, mock Razorpay payment workflow generating PDFKit invoices, live Leaflet tracking stepper with coordinates, and AI Chatbot support." },
        { label: "Staff Carrier Portal", desc: "Assigned daily task checklist pipeline (Booked ➔ Picked up ➔ In Transit ➔ Out for Delivery ➔ Delivered), 6-digit delivery OTP validation, canvas recipient signature capture, and proof-of-delivery photo upload." },
        { label: "Executive Control Desk (Admin)", desc: "Gross revenue & active cargo analytics, fulfillment desk for cargo-staff assignment, dynamic tariff rate controls (Base Fare, GST, per KG, Express/Air/Ocean), warehouse capacity manager, and transport fleet vehicle registration." },
        { label: "Real-time Telemetry & WebSockets", desc: "Socket.io room architecture driving dynamic real-time status tracker steppers with transit velocity, GPS coordinates, timeline history log sync, and live staff-customer support chat." },
        { label: "RBAC Security & Auto-Seeding", desc: "Multi-portal role-based access control (Admin, Staff, Customer), JWT authentication with Bcryptjs password hashing, Helmet headers, and auto-seeding default users, warehouses, and fleet vehicles on startup." }
      ],
      purpose: "Serves as an enterprise-grade role-based shipping, logistics, and fleet tracking platform managing the complete end-to-end lifecycle of cargo transit from booking to final delivery.",
      link: "https://github.com/Jitendrasingh2003/shipping-system"
    },
    {
      id: 1,
      title: "Hospital Management System",
      category: "AI Applications",
      shortDesc: "Next-generation multi-role Hospital Management and AI-Assisted Clinical Support ecosystem powered by Next.js 16, Google Gemini 3.1 AI (@google/genai), Prisma v7 ORM, Supabase PostgreSQL, and real-time medical triage analytics.",
      date: "May 2026",
      technologies: ["Google Gemini API", "Next.js 16", "React 19", "TypeScript", "Prisma v7", "Supabase", "Twilio", "Tailwind CSS", "Recharts"],
      fullTitle: "HOSPITAL MANAGEMENT SYSTEM",
      subtitle: "AI-Assisted Clinical Support & Multi-Role Hospital Ecosystem",
      detailedStack: {
        "Framework & UI": "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Recharts Analytics",
        "AI Engine & Scans": "Google Gen AI SDK (@google/genai) — Gemini 3.1 Flash/Pro Multi-Modal Vision",
        "Database & ORM": "PostgreSQL hosted on Supabase, Prisma ORM v7 Schema Migrations",
        "Integrations & Alerts": "Twilio (SMS Patient Alerts), SMTP (Email Receipts & Shift Handovers), SVG Ward Maps"
      },
      points: [
        { label: "Doctor Workspace & AI Copilot", desc: "Real-time differential diagnosis generator powered by Google Gemini 3.1 AI, symptom 'Red Flag' alerts, multi-modal medical scan analyzer (X-rays/MRIs), and automated Rx Drug Interaction Matrix." },
        { label: "Admin & Receptionist Dashboard", desc: "Unified patient onboarding desk, OPD/IPD queue management, interactive ward bed allocation matrix, and automated AI Triage classification based on symptom severity." },
        { label: "Pharmacist Portal & Expiry Optimizer", desc: "Smart medicine inventory tracking, AI Expiry Optimizer to minimize drug wastage, real-time dosage calculations, and pharmaceutical allergy parameter warnings." },
        { label: "Nurse & OT Manager Workspace", desc: "Digital vitals logging tracker, structured patient shift handovers, surgery schedule planner, and Operation Theatre (OT) live availability status manager." },
        { label: "Super Admin Suite & Analytics", desc: "Global multi-hospital CMS, interactive billing summaries, subscription controls, audit logs, and AI support ticket auto-categorization." }
      ],
      purpose: "Serves as an intelligent clinical decision support tool and comprehensive multi-role hospital management system, automating healthcare workflows across doctors, nurses, pharmacists, admins, and OT managers.",
      link: "https://github.com/Jitendrasingh2003/healthcare-dashboard"
    },
    {
      id: 2,
      title: "AI Resume Builder (Resume Genie)",
      category: "AI Applications",
      shortDesc: "Enterprise-grade AI-powered career platform and ATS optimization suite that crafts tailored professional resume content, generates dynamic multi-template PDFs, and analyzes ATS scoring match rates.",
      date: "June 2025",
      technologies: ["React.js", "OpenAI API", "Node.js", "Express.js", "MongoDB", "JSPDF", "Tailwind CSS", "JWT Token"],
      fullTitle: "RESUME GENIE",
      subtitle: "AI-Powered Career Suite & Dynamic ATS Resume Optimizer",
      detailedStack: {
        "Frontend & UI": "React.js (Vite), Tailwind CSS, Lucide React Icons, Dynamic JSPDF Engine",
        "AI Engine & Parsing": "OpenAI GPT-4o API, NLP Resume Parsing, Dynamic Bullet Point Generator",
        "Backend & API": "Node.js, Express.js REST API, JWT Token Authentication, Bcryptjs Password Hashing",
        "Database & Storage": "MongoDB Atlas, Mongoose Schema Models, GridFS Document Storage"
      },
      points: [
        { label: "AI Content & Bullet Generator", desc: "Leverages GPT models to craft role-specific executive summaries, quantifiable technical achievements, and optimized ATS bullet points tailored to target job descriptions." },
        { label: "Real-Time ATS Score & Matcher", desc: "Instant Applicant Tracking System (ATS) scanner that analyzes job description keywords, identifies missing technical skills, and provides actionable match score recommendations." },
        { label: "Multi-Template Dynamic PDF Export", desc: "Client-side high-precision PDF generator with customizable typography, spacing, color schemes, and seamless 1-click multi-format resume exports." },
        { label: "Cover Letter & Portfolio Copilot", desc: "AI assistant that drafts tailored cover letters for candidate applications and generates structured portfolio project summaries automatically." },
        { label: "User Account & Resume Versioning", desc: "Secure JWT user profiles allowing candidates to save, edit, version-control, and duplicate multiple target resume variations for different job roles." }
      ],
      purpose: "Empowers job seekers to produce high-impact, ATS-optimized professional resumes instantly without formatting headaches, leveraging AI for maximum interview callbacks.",
      link: "https://github.com/Jitendrasingh2003/resume-genie"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">Featured <span className="highlight-amp">Projects</span></h2>
          <div className="heading-line-premium"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="project-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div 
                  className="active-pill-bg"
                  layoutId="activeFilterPill"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="projects-grid-expanded"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay-premium"
            data-lenis-prevent="true"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content-premium"
              data-lenis-prevent="true"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ 
                scale: 1, 
                y: 0,
                opacity: 1, 
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-premium" 
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>

              <div className="modal-inner-premium">
                <div className="modal-header-premium">
                  <div className="project-icon-wrapper modal-icon-lg-premium">
                    <FiBox />
                  </div>
                  <div className="modal-header-text-premium">
                    <motion.h3 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="project-main-title"
                    >
                      {selectedProject.fullTitle}
                    </motion.h3>
                    <motion.div 
                      className="modal-subtitle-premium"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="subtitle-badge">{selectedProject.subtitle}</span>
                      <div className="modal-date"><FiClock /> {selectedProject.date}</div>
                    </motion.div>
                  </div>
                </div>

                <div className="modal-content-split-premium">
                  <motion.div 
                    className="modal-body-left-premium"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="modal-section-title"><FiStar /> Key Workspaces & Modules</h4>
                    <div className="project-points-list-premium">
                      {selectedProject.points.map((point, i) => (
                        <motion.div 
                          key={i} 
                          className="point-item-premium"
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                          <div className="point-indicator"></div>
                          <div className="point-content-wrapper">
                            <span className="point-label-premium">{point.label}</span>
                            <span className="point-desc-premium">{point.desc}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="modal-section-title" style={{ marginTop: '30px' }}><FiInfo /> Project Overview & System Purpose</h4>
                    <div className="project-purpose-box-premium">
                      {selectedProject.purpose}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="modal-body-right-premium"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="tech-stack-card-premium">
                      <h4 className="modal-section-title"><FiCode /> Technical Stack</h4>
                      <div className="tech-stack-container-premium">
                        {selectedProject.detailedStack ? (
                          Object.entries(selectedProject.detailedStack).map(([category, skills]) => (
                            <div key={category} className="tech-stack-row-premium">
                              <span className="stack-label-premium">{category}</span>
                              <span className="stack-values-premium">{skills}</span>
                            </div>
                          ))
                        ) : (
                          <div className="tech-stack-row-premium">
                            <span className="stack-label-premium">Technologies</span>
                            <span className="stack-values-premium">{selectedProject.techStack}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="modal-actions-premium">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="live-project-link-premium"
                      >
                        {selectedProject.link === "#" ? "Project Link (Private/WIP)" : "View Live Source"} <FiExternalLink />
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

export default Projects;
