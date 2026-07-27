import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiMoon, FiSun, FiLayers } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const getThemeInfo = () => {
    switch (theme) {
      case 'space':
        return { label: 'Cyber', icon: <FiZap className="theme-icon cyber" /> };
      case 'nebula':
        return { label: 'Nebula', icon: <FiMoon className="theme-icon nebula" /> };
      case 'emerald':
        return { label: 'Emerald', icon: <FiLayers className="theme-icon emerald" /> };
      default:
        return { label: 'Cyber', icon: <FiZap className="theme-icon cyber" /> };
    }
  };

  const current = getThemeInfo();

  return (
    <motion.button
      className={`theme-toggle-btn glass-card-premium ${theme}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      title={`Current Theme: ${current.label}. Click to change background aesthetic.`}
    >
      <div className="theme-toggle-inner">
        {current.icon}
        <span className="theme-label-text">{current.label}</span>
      </div>
      <div className="theme-glow-ring" />
    </motion.button>
  );
};

export default ThemeToggle;
