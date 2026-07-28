import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiTool, FiDatabase, FiCpu, FiCheckCircle, FiShield, FiTerminal, FiGlobe } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'All Skills', icon: <FiGlobe /> },
    { id: 'QA & Automation', name: 'QA & Automation', icon: <FiShield /> },
    { id: 'Frontend & UI', name: 'Frontend & UI', icon: <FiLayers /> },
    { id: 'Backend & DB', name: 'Backend & DB', icon: <FiDatabase /> },
    { id: 'AI & Tools', name: 'AI & Tools', icon: <FiCpu /> }
  ];

  const skillData = [
    {
      category: "QA & Automation",
      icon: <FiShield />,
      title: "QA & Automation Engineering",
      description: "End-to-End Test Automation, API Validation, & Defect Management",
      skills: [
        { name: "Selenium WebDriver", level: "Expert", tag: "E2E Testing" },
        { name: "Postman API Testing", level: "Expert", tag: "REST Validation" },
        { name: "TestNG Framework", level: "Advanced", tag: "Java Testing" },
        { name: "JIRA & Bug Tracking", level: "Expert", tag: "Agile Management" },
        { name: "Cypress", level: "Proficient", tag: "Web Testing" },
        { name: "Ubuntu / Linux CLI", level: "Advanced", tag: "OS & Shell" },
        { name: "Chrome DevTools", level: "Expert", tag: "Inspection & Network" },
        { name: "Agile / Scrum", level: "Expert", tag: "Workflow" }
      ]
    },
    {
      category: "Frontend & UI",
      icon: <FiLayers />,
      title: "Frontend Engineering",
      description: "Building Ultra-Fast, Responsive & Accessible Modern Web UIs",
      skills: [
        { name: "React 19 / React.js", level: "Expert", tag: "Core UI" },
        { name: "TypeScript", level: "Advanced", tag: "Type Safety" },
        { name: "JavaScript (ES6+)", level: "Expert", tag: "Logic & Async" },
        { name: "Tailwind CSS v4", level: "Expert", tag: "Utility Styling" },
        { name: "HTML5 & CSS3", level: "Expert", tag: "Semantic Web" }
      ]
    },
    {
      category: "Backend & DB",
      icon: <FiDatabase />,
      title: "Backend & Database Infrastructure",
      description: "Robust RESTful APIs, Database Schemas, & Cloud Services",
      skills: [
        { name: "Node.js", level: "Advanced", tag: "Server Runtime" },
        { name: "Express.js", level: "Advanced", tag: "REST API" },
        { name: "Python", level: "Advanced", tag: "Scripting & Data" },
        { name: "C Language", level: "Proficient", tag: "Core Concepts" },
        { name: "PostgreSQL", level: "Advanced", tag: "Relational DB" },
        { name: "Supabase Cloud", level: "Advanced", tag: "BaaS & Auth" },
        { name: "Prisma ORM v7", level: "Advanced", tag: "Database Client" },
        { name: "MongoDB", level: "Advanced", tag: "NoSQL DB" },
        { name: "MySQL", level: "Proficient", tag: "SQL Querying" }
      ]
    },
    {
      category: "AI & Tools",
      icon: <FiCpu />,
      title: "AI Integrations & Developer Tools",
      description: "Leveraging State-of-the-Art LLMs & Development Environments",
      skills: [
        { name: "Google Gemini API", level: "Advanced", tag: "GenAI SDK" },
        { name: "Claude API (Anthropic)", level: "Advanced", tag: "Medical & Report Parsing" },
        { name: "OpenAI GPT API", level: "Advanced", tag: "Resume Generation" },
        { name: "Git & GitHub", level: "Expert", tag: "Version Control" },
        { name: "GitLab", level: "Proficient", tag: "CI/CD & Repos" },
        { name: "VS Code & Antigravity IDE", level: "Expert", tag: "Development" }
      ]
    }
  ];

  const filteredData = activeCategory === 'All' 
    ? skillData 
    : skillData.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">Technical <span className="highlight-amp">Skills</span> & Expertise</h2>
          <div className="heading-line-premium"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="pill-icon">{cat.icon}</span>
              <span>{cat.name}</span>
              {activeCategory === cat.id && (
                <motion.div 
                  className="active-skills-pill-bg"
                  layoutId="activeSkillsPill"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Skills Cards Grid */}
        <div className="skills-matrix-grid">
          <AnimatePresence mode="wait">
            {filteredData.map((catGroup, idx) => (
              <motion.div 
                key={catGroup.category}
                className="skills-category-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                layout
              >
                <div className="skills-card-header">
                  <div className="skills-icon-box">
                    {catGroup.icon}
                  </div>
                  <div>
                    <h3 className="skills-cat-title">{catGroup.title}</h3>
                    <p className="skills-cat-desc">{catGroup.description}</p>
                  </div>
                </div>

                <div className="skills-badges-list">
                  {catGroup.skills.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      className="skill-badge-item"
                      whileHover={{ scale: 1.04, translateY: -3 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <div className="skill-badge-top">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-badge-tag">
                        <FiCheckCircle className="tag-check" /> {skill.tag}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
