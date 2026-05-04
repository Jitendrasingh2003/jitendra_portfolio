import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Web Application",
      date: "October 2025",
      description: "Developed a full-stack Ecommerce web application enabling users to browse products, add items to the cart, and place orders with secure authentication.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      keyLearning: "Full-stack web development, REST API integration, user authentication, database design"
    },
    {
      title: "AI Resume Builder",
      date: "June 2025",
      description: "Developed a full-stack AI-powered resume builder web application that allows users to enter personal and professional details and generate professional resume content using AI.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
      keyLearning: "MERN stack, AI API integration, PDF generation, authentication"
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <motion.a href="#" className="icon-link" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}><FiGithub /></motion.a>
                    <motion.a href="#" className="icon-link" whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}><FiExternalLink /></motion.a>
                  </div>
                </div>
                <p className="project-date">{project.date}</p>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-learning">
                  <strong>Key Learning:</strong> {project.keyLearning}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
