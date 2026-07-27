import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi';
import './SocialDock.css';

const DockIcon = ({ icon: Icon, href, label }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="dock-icon-wrapper"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      whileHover={{ y: -15, scale: 1.4 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="dock-icon" />
      <span className="dock-label">{label}</span>
    </motion.a>
  );
};

const SocialDock = () => {
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Jitendrasingh2003", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/jitendra-singh-6b7a0824b/", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:jiteandra318@gmail.com", label: "Email" },
  ];

  return (
    <div className="dock-container">
      <div className="dock-main glass">
        {socialLinks.map((link, i) => (
          <DockIcon key={i} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SocialDock;
