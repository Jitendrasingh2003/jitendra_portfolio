import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiTool, FiDatabase, FiCpu } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FiCode />,
      skills: ["C", "Python", "TypeScript", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FiLayers />,
      skills: ["Node.js", "Next.js", "React.js", "Tailwind CSS", "Express.js", "Bootstrap"]
    },
    {
      title: "Tools & Testing",
      icon: <FiTool />,
      skills: ["VS Code", "Git", "GitHub", "GitLab", "Postman", "Selenium WebDriver", "TestNG", "JIRA", "Chrome DevTools"]
    },
    {
      title: "Databases",
      icon: <FiDatabase />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "AI Tools",
      icon: <FiCpu />,
      skills: ["Claude AI", "ChatGPT", "Gemini", "Antigravity"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">Technical <span className="highlight-amp">Skills</span></h2>
          <div className="heading-line-premium"></div>
        </div>
        
        <div className="skills-container-premium">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category-premium"
              whileHover={{ y: -5 }}
            >
              <div className="skill-card-glow"></div>
              <div className="skill-content-premium">
                <div className="skill-header-premium">
                  <div className="skill-icon-premium">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <motion.div 
                  className="skill-tags-premium"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="skill-tag-premium"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 170, 0.15)', borderColor: 'rgba(0, 255, 170, 0.4)', color: '#00ffaa' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
