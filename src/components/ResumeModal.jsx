import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink, FiFileText, FiZoomIn, FiZoomOut, FiRotateCcw } from 'react-icons/fi';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setZoomLevel(1);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="resume-modal-overlay"
        data-lenis-prevent="true"
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(18px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        onClick={onClose}
      >
        <motion.div 
          className="resume-modal-container"
          data-lenis-prevent="true"
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ 
            scale: 1, 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 320, damping: 26 }
          }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Top Header */}
          <div className="resume-modal-header">
            <div className="resume-header-info">
              <div className="resume-icon-badge">
                <FiFileText />
              </div>
              <div>
                <h3 className="resume-modal-title">Jitendra Singh — Resume</h3>
                <p className="resume-modal-subtitle">QA Automation Specialist & AI Full Stack Engineer</p>
              </div>
            </div>

            <div className="resume-header-actions">
              {/* Zoom Controls */}
              <div className="resume-zoom-controls">
                <button className="resume-control-btn" onClick={handleZoomOut} title="Zoom Out">
                  <FiZoomOut />
                </button>
                <span className="zoom-level-text">{Math.round(zoomLevel * 100)}%</span>
                <button className="resume-control-btn" onClick={handleZoomIn} title="Zoom In">
                  <FiZoomIn />
                </button>
                {zoomLevel !== 1 && (
                  <button className="resume-control-btn" onClick={handleZoomReset} title="Reset Zoom">
                    <FiRotateCcw />
                  </button>
                )}
              </div>

              <a 
                href="/Jitendra_Singh_Resume.svg" 
                download="Jitendra_Singh_Resume.svg" 
                className="resume-download-btn"
              >
                <FiDownload /> Download Resume
              </a>
              <a 
                href="/Jitendra_Singh_Resume.svg" 
                target="_blank" 
                rel="noreferrer"
                className="resume-tab-btn"
                title="Open in new tab"
              >
                <FiExternalLink />
              </a>
              <button className="resume-close-btn" onClick={onClose} aria-label="Close Resume Modal">
                <FiX />
              </button>
            </div>
          </div>

          {/* Modal Body with Scrollable Interactive Viewer */}
          <div className="resume-modal-body" data-lenis-prevent="true">
            <div 
              className="resume-svg-container"
              style={{ 
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top center',
                transition: 'transform 0.25s ease'
              }}
            >
              <img 
                src="/Jitendra_Singh_Resume.svg" 
                alt="Jitendra Singh QA Automation & Full Stack Resume" 
                className="resume-svg-image"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
