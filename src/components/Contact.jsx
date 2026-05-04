import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info glass">
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:jiteandra318@gmail.com">jiteandra318@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><FiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919636943318">+91-9636943318</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a href="https://github.com/JitendraSingh" target="_blank" rel="noreferrer" className="social-icon" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <FiGithub />
              </motion.a>
              <motion.a href="YOUR_GITHUB_PROFILE_URL_HERE" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn Tap goes to GitHub" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <FiLinkedin />
              </motion.a>
            </div>
          </div>
          
          <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <motion.button type="submit" className="btn btn-primary submit-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Send Message</motion.button>
          </form>
        </div>
      </motion.div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Jitendra Singh. Built with React.</p>
      </footer>
    </section>
  );
};

export default Contact;
