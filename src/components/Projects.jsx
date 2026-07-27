import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiX, FiArrowUpRight, FiFolder, FiClock, FiStar, FiInfo, FiCode, FiBox, FiCheckCircle } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      layout
    >
      <div className="project-card-glow"></div>
      <div style={{ transform: "translateZ(25px)" }} className="project-content">
        
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
      id: 1,
      title: "Hospital Management System",
      category: "AI Applications",
      shortDesc: "Next-generation Hospital Management and AI-Assisted Clinical Support Dashboard powered by Google Gemini API (@google/genai), Prisma v7, Supabase PostgreSQL, and Next.js.",
      date: "May 2026",
      technologies: ["Google Gemini API", "Next.js 16", "React 19", "TypeScript", "Prisma v7", "Supabase", "Twilio", "Tailwind CSS"],
      fullTitle: "HOSPITAL MANAGEMENT SYSTEM",
      subtitle: "AI-Assisted Clinical Support & Multi-Role Hospital Ecosystem",
      detailedStack: {
        "Framework & Core": "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Recharts",
        "AI Engine": "Google Gen AI SDK (@google/genai) — Gemini 3.1 & 2.5 Flash/Pro",
        "Database & ORM": "PostgreSQL hosted on Supabase, Prisma ORM v7",
        "Integrations": "Twilio (SMS Alerts), SMTP (Email Notifications), SVG Maps"
      },
      points: [
        { label: "Doctor Workspace & AI Copilot", desc: "Real-time differential diagnosis generator using Google Gemini API, symptom 'Red Flags', multi-modal scans (X-rays/MRIs), and Rx Drug Safety Matrix." },
        { label: "Admin & Receptionist Dashboard", desc: "Unified patient onboarding, OPD/IPD queueing, ward bed allocation, and automated AI Triage classification based on symptom severity." },
        { label: "Pharmacist Portal & Expiry Optimizer", desc: "Smart medicine inventory logging, AI Expiry Optimizer to minimize wastage, and pharmaceutical allergy parameter alerts." },
        { label: "Nurse & OT Manager Workspace", desc: "Vitals logging tracker, structured patient shift handovers, surgery scheduling, and Operational Theatre (OT) availability manager." },
        { label: "Super Admin Suite & Analytics", desc: "Global multi-hospital CMS, interactive billing summaries, subscriptions, and AI support ticket auto-categorization." }
      ],
      purpose: "This dashboard serves as an intelligent clinical decision support tool and comprehensive hospital management system, automating workflows for doctors, nurses, pharmacists, admins, and OT managers.",
      link: "https://github.com/Jitendrasingh2003/healthcare-dashboard"
    },
    {
      id: 2,
      title: "AI Resume Builder (Resume Genie)",
      category: "AI Applications",
      shortDesc: "AI-driven career tool that generates ATS-optimized professional resume content, bullet points, and dynamic PDFs in seconds.",
      date: "June 2025",
      technologies: ["React.js", "OpenAI API", "Node.js", "Express.js", "MongoDB", "JSPDF"],
      fullTitle: "RESUME GENIE",
      subtitle: "AI-Powered Career & ATS Resume Suite — June 2025",
      techStack: "React.js, Node.js, Express.js, MongoDB, OpenAI API, JSPDF",
      points: [
        { label: "AI Content Suggestion", desc: "Leverages GPT models to craft tailored professional summaries, key technical achievements, and role bullet points." },
        { label: "Instant Multi-Format PDF Export", desc: "Client-side PDF rendering allowing users to switch between multiple clean corporate resume templates." },
        { label: "ATS Scanner Optimization", desc: "Formats resume layout and keywords specifically to score highly on Applicant Tracking Systems (ATS)." }
      ],
      purpose: "Helps job seekers produce high-impact, professional resumes instantly without formatting headaches, leveraging AI for maximum interview callbacks.",
      link: "#"
    },
    {
      id: 3,
      title: "Ecommerce Web Application (Shop Sphere)",
      category: "Full Stack",
      shortDesc: "End-to-end full-stack e-commerce web platform featuring dynamic catalog management, secure user authentication, persistent cart, and order processing.",
      date: "October 2025",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3"],
      fullTitle: "SHOP SPHERE",
      subtitle: "Full-Stack E-Commerce Shopping Engine — October 2025",
      techStack: "HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, MongoDB, REST APIs",
      points: [
        { label: "Dynamic Product Catalog", desc: "Backend API handling multi-category product filtering, searching, price sorting, and inventory state." },
        { label: "JWT Secure Authentication", desc: "Token-based user sign-up, login, order history tracking, and encrypted password storage." },
        { label: "Seamless Checkout Workflow", desc: "Complete digital retail experience from product discovery to persistent cart management and order receipt generation." }
      ],
      purpose: "Demonstrates production-ready database schema design, RESTful API architecture, and state management for scalable digital retail.",
      link: "#"
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
