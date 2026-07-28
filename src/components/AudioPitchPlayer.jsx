import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiSquare } from 'react-icons/fi';
import './AudioPitchPlayer.css';

const pitchScript = "Hi there! I am Jitendra Singh, a Quality Assurance Automation Specialist and AI Full Stack Engineer. I build high-performance web applications with React 19, Node.js, and MySQL, while enforcing 100 percent software quality using Selenium WebDriver and Postman API automation. Feel free to explore my SmartShip logistics platform and healthcare AI projects!";

const AudioPitchPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
    }
  }, []);

  const toggleAudioPitch = () => {
    if (!speechSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // Stop any ongoing speech

      const utterance = new SpeechSynthesisUtterance(pitchScript);
      utterance.rate = 0.98; // Energetic natural pace
      utterance.pitch = 1.18; // Higher pitch for a younger, energetic male voice
      utterance.lang = 'en-IN'; // Indian English Accent

      // Select English (India) / en-IN young male voice
      const voices = window.speechSynthesis.getVoices();
      const youngVoice = voices.find(v => 
        (v.lang.toLowerCase().includes('en-in') || v.lang.toLowerCase().includes('en_in')) ||
        v.name.toLowerCase().includes('india') ||
        v.name.toLowerCase().includes('ravi') ||
        v.name.toLowerCase().includes('prabhat')
      );

      if (youngVoice) {
        utterance.voice = youngVoice;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  if (!speechSupported) return null;

  return (
    <motion.div 
      className="audio-pitch-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <button 
        className={`audio-pitch-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleAudioPitch}
        title={isPlaying ? "Stop Voice Intro" : "Listen to 30-Sec AI Voice Intro"}
      >
        <div className="audio-icon-wrapper">
          {isPlaying ? <FiSquare /> : <FiPlay className="play-icon" />}
        </div>

        <div className="audio-text-content">
          <span className="audio-btn-title">
            {isPlaying ? "Playing Voice Pitch..." : "Listen to 30-Sec Voice Pitch"}
          </span>
          <span className="audio-btn-subtitle">
            {isPlaying ? "Click to Stop Speech" : "AI Voice Pitch • English (India)"}
          </span>
        </div>

        {/* Animated Wave Equalizer Bars */}
        <div className={`audio-wave-visualizer ${isPlaying ? 'active' : ''}`}>
          <motion.span className="wave-bar bar-1" animate={{ height: isPlaying ? [6, 18, 8, 22, 6] : 6 }} transition={{ repeat: Infinity, duration: 0.8 }} />
          <motion.span className="wave-bar bar-2" animate={{ height: isPlaying ? [12, 6, 24, 10, 12] : 10 }} transition={{ repeat: Infinity, duration: 0.7 }} />
          <motion.span className="wave-bar bar-3" animate={{ height: isPlaying ? [18, 24, 10, 16, 18] : 14 }} transition={{ repeat: Infinity, duration: 0.9 }} />
          <motion.span className="wave-bar bar-4" animate={{ height: isPlaying ? [8, 16, 22, 6, 8] : 8 }} transition={{ repeat: Infinity, duration: 0.6 }} />
        </div>
      </button>
    </motion.div>
  );
};

export default AudioPitchPlayer;
