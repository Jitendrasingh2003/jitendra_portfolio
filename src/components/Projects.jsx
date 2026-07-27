import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiX, FiArrowUpRight, FiFolder, FiClock, FiStar, FiInfo, FiCode, FiBox } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
      className="project-card"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick}
    >
      <div className="project-card-glow"></div>
      <div style={{ transform: "translateZ(30px)" }} className="project-content">
        <div className="project-header">
          <div className="project-icon-wrapper">
            <FiFolder />
          </div>
          <div className="project-date-badge">
            <FiClock style={{ marginRight: '6px', marginBottom: '-2px' }} />
            {project.date}
          </div>
        </div>
        
        <div className="project-body">
          <h3>{project.title}</h3>
          <p className="project-desc">{project.shortDesc}</p>
          
          <div className="project-tech-mini">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
            {project.technologies.length > 3 && <span className="more-tech">+{project.technologies.length - 3}</span>}
          </div>
        </div>
        
        <div className="project-footer">
          <span className="view-btn-text">Explore Project</span>
          <div className="view-btn-icon">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Healthcare Analytics Dashboard",
      shortDesc: "Comprehensive AI healthcare platform for clinical analysis and hospital management.",
      date: "May 2026",
      technologies: ["Next.js 16", "React 19", "Claude API", "Prisma v7", "Supabase"],
      fullTitle: "AI HEALTHCARE DASHBOARD",
      subtitle: "AI Powered Hospital Management System",
      detailedStack: {
        "Frontend": "Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts, Lucide React, Next Themes",
        "Backend": "Next.js API Routes, Prisma ORM v7, PostgreSQL",
        "Database & Cloud": "Supabase, Prisma Client",
        "AI": "Claude API (claude-sonnet-4-20250514)"
      },
      points: [
        { label: "AI Medical Report Analyzer", desc: "Built a sophisticated tool using Claude API that parses medical lab reports, automatically highlights abnormal parameters, and provides clinical recommendations." },
        { label: "Intelligent Medical Assistant", desc: "Integrated an AI Chat Assistant (Claude-sonnet) capable of handling medical queries in Hinglish, providing doctors with instant clinical guidelines." },
        { label: "Advanced Full-Stack Infrastructure", desc: "Leveraged Next.js 16 and Prisma ORM v7 with a Supabase PostgreSQL backend to manage complex data for patients and hospital operations." },
        { label: "Hospital Operations Ecosystem", desc: "Designed a comprehensive management system covering OPD queues, bed management, and real-time KPI visualization." }
      ],
      purpose: "This project streamlines hospital management by automating clinical analysis and administrative tasks, reducing human error, and providing instant medical support via AI.",
      link: "https://github.com/Jitendrasingh2003/healthcare-dashboard"
    },
    {
      id: 2,
      title: "AI Resume Builder",
      shortDesc: "Generate professional resumes instantly using AI-powered content suggestions.",
      date: "June 2025",
      technologies: ["React.js", "OpenAI API", "Node.js", "MongoDB"],
      fullTitle: "RESUME GENIE",
      subtitle: "AI-Powered Career Tool — June 2025",
      techStack: "React.js, Node.js, Express.js, MongoDB, OpenAI API, JSPDF",
      points: [
        { label: "AI Content Generation", desc: "Utilized OpenAI's GPT models to dynamically generate professional summaries and experience descriptions based on user input." },
        { label: "Smart PDF Generation", desc: "Implemented client-side PDF generation allowing users to download their resumes in multiple professional templates instantly." },
        { label: "ATS Optimization", desc: "Engineered templates specifically designed to be highly readable by Applicant Tracking Systems (ATS), increasing interview chances." }
      ],
      purpose: "To help job seekers create professional, high-quality resumes without the hassle of formatting, leveraging AI to highlight their best professional skills.",
      link: "#"
    },
    {
      id: 3,
      title: "Ecommerce Web Application",
      shortDesc: "Full-stack online store with product browsing, cart system, and secure checkout.",
      date: "October 2025",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "CSS3"],
      fullTitle: "SHOP SPHERE",
      subtitle: "Full-Stack Shopping Experience — October 2025",
      techStack: "HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, MongoDB",
      points: [
        { label: "Dynamic Product Catalog", desc: "Developed a robust backend to handle thousands of products with features like filtering, searching, and category management." },
        { label: "Secure Authentication", desc: "Implemented JWT-based authentication to ensure secure user accounts, order history, and sensitive profile information." },
        { label: "Shopping Flow", desc: "Crafted a seamless end-to-end shopping experience from product discovery to a persistent cart and order placement." }
      ],
      purpose: "Designed to demonstrate the integration of complex database schemas with a clean, user-friendly frontend for a complete digital retail experience.",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

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
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay-premium"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content-premium"
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
                    <h4 className="modal-section-title"><FiStar /> Key Features</h4>
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

                    <h4 className="modal-section-title" style={{ marginTop: '30px' }}><FiInfo /> Project Purpose</h4>
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
