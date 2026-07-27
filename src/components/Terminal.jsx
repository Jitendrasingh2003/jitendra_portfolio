import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Terminal.css';

const Terminal = () => {
  const codeLines = [
    `const developer = {
  name: 'Jitendra Singh',
  role: 'Full Stack Developer & QA Engineer',
  location: 'Jaipur, Rajasthan',
  skills: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Selenium', 'Postman', 'Claude API'],
  passion: 'Building ultra-scalable web apps & flaw-free software',
  status: 'Ready to collaborate & build next-gen web products!'
};

console.log(\`Developer \${developer.name} ready.\`);`
  ];

  return (
    <motion.div 
      className="terminal-container glass"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">jitendra.js - VS Code</div>
      </div>
      <div className="terminal-body">
        <pre className="code-block">
          <Typewriter
            words={codeLines}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={40}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </pre>
      </div>
    </motion.div>
  );
};

export default Terminal;
