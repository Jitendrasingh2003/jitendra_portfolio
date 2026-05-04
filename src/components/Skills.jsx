import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Python", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Express.js", "Node.js", "Bootstrap"]
    },
    {
      title: "Tools & Testing",
      skills: ["VS Code", "Git", "GitHub", "GitLab", "Postman", "Selenium WebDriver", "TestNG", "JIRA", "Chrome DevTools"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass"
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(99, 102, 241, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{category.title}</h3>
              <motion.div 
                className="skill-tags"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
