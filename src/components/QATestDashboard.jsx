import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPlay, FiRefreshCw, FiShield, FiActivity } from 'react-icons/fi';
import './QATestDashboard.css';

const QATestDashboard = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(4);
  const [lastRunTime, setLastRunTime] = useState('Just Now');

  const testCases = [
    { id: 1, name: 'GET /api/v1/healthcheck - REST API Validation', duration: '14ms', status: 'PASSED' },
    { id: 2, name: 'Selenium E2E Auth & User Session Flow', duration: '1.2s', status: 'PASSED' },
    { id: 3, name: 'Postman Integration & JWT Security Audit', duration: '38ms', status: 'PASSED' },
    { id: 4, name: 'Cross-Browser UI & Mobile Responsiveness Test', duration: '450ms', status: 'PASSED' }
  ];

  const handleRunTests = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setActiveStep(current);
      if (current >= testCases.length) {
        clearInterval(interval);
        setIsRunning(false);
        setLastRunTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      }
    }, 600);
  };

  return (
    <div className="qa-dashboard-container glass-card-premium">
      <div className="qa-header">
        <div className="qa-header-title">
          <FiActivity className="qa-pulse-icon" />
          <span>Live QA & Build Health Monitor</span>
        </div>
        <div className="qa-status-badge">
          <span className="live-dot"></span>
          <span>100% Operational</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="qa-metrics-grid">
        <div className="qa-metric-card">
          <span className="metric-label">Pass Rate</span>
          <span className="metric-value green">99.8%</span>
        </div>
        <div className="qa-metric-card">
          <span className="metric-label">Tests Passed</span>
          <span className="metric-value cyan">142 / 142</span>
        </div>
        <div className="qa-metric-card">
          <span className="metric-label">API Latency</span>
          <span className="metric-value purple">28ms</span>
        </div>
        <div className="qa-metric-card">
          <span className="metric-label">Security Audit</span>
          <span className="metric-value green">Passed</span>
        </div>
      </div>

      {/* Interactive Live Test Terminal Suite */}
      <div className="qa-terminal-body">
        <div className="qa-terminal-top">
          <span className="terminal-prompt">jitendra@qa-ubuntu:~$ ./run_automation_suite.sh</span>
          <button 
            className={`run-test-btn ${isRunning ? 'running' : ''}`}
            onClick={handleRunTests}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <FiRefreshCw className="spin-icon" /> Running Suite...
              </>
            ) : (
              <>
                <FiPlay /> Run Automation Suite
              </>
            )}
          </button>
        </div>

        <div className="qa-test-list">
          {testCases.map((test, index) => {
            const isDone = index < activeStep;
            const isCurrent = index === activeStep && isRunning;
            return (
              <motion.div 
                key={test.id}
                className={`qa-test-row ${isDone ? 'passed' : ''} ${isCurrent ? 'testing' : ''}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="test-name-col">
                  {isDone ? (
                    <FiCheckCircle className="check-icon" />
                  ) : isCurrent ? (
                    <FiRefreshCw className="spin-icon text-cyan" />
                  ) : (
                    <span className="pending-dot"></span>
                  )}
                  <span className="test-name">{test.name}</span>
                </div>
                <div className="test-meta-col">
                  <span className="test-time">{test.duration}</span>
                  <span className={`test-status-tag ${isDone ? 'tag-passed' : 'tag-pending'}`}>
                    {isDone ? 'PASSED' : isCurrent ? 'RUNNING' : 'QUEUED'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="qa-footer-info">
        <span><FiShield /> Environment: Ubuntu 24.04 LTS / Selenium / Postman</span>
        <span className="last-run">Last Run: {lastRunTime}</span>
      </div>
    </div>
  );
};

export default QATestDashboard;
