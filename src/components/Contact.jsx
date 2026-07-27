import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import Magnetic from './Magnetic';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "635e4d93-2a63-4a01-84fd-b5162677ee3b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('Message Sent Successfully!');
        e.target.reset();
      } else {
        setFormStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-container-premium">
          <h2 className="section-title">Get In <span className="highlight-amp">Touch</span></h2>
          <div className="heading-line-premium"></div>
        </div>
        
        <div className="contact-container-premium">
          <motion.div 
            className="contact-info-premium"
            whileHover={{ y: -5 }}
          >
            <div className="contact-card-glow"></div>
            <div className="contact-content-premium">
              <h3>Let's Connect</h3>
              <p className="contact-desc-premium">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="info-items-premium">
                <div className="info-item-premium">
                  <div className="info-icon-premium"><FiMail /></div>
                  <div className="info-text-wrapper">
                    <h4>Email</h4>
                    <a href="mailto:jiteandra318@gmail.com">jiteandra318@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item-premium">
                  <div className="info-icon-premium"><FiPhone /></div>
                  <div className="info-text-wrapper">
                    <h4>Phone</h4>
                    <a href="tel:+919636943318">+91-9636943318</a>
                  </div>
                </div>
                
                <div className="info-item-premium">
                  <div className="info-icon-premium"><FiMapPin /></div>
                  <div className="info-text-wrapper">
                    <h4>Location</h4>
                    <p>Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

              <div className="social-links-premium">
                <Magnetic>
                  <motion.a href="https://github.com/Jitendrasingh2003" target="_blank" rel="noreferrer" className="social-icon-premium" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                    <FiGithub />
                  </motion.a>
                </Magnetic>
                <Magnetic>
                  <motion.a href="https://www.linkedin.com/in/jitendra-singh-6b7a0824b/" target="_blank" rel="noreferrer" className="social-icon-premium" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                    <FiLinkedin />
                  </motion.a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form-premium" 
            onSubmit={handleSubmit}
            whileHover={{ y: -5 }}
          >
            <div className="contact-card-glow"></div>
            <div className="contact-content-premium">
              <div className="form-group-premium">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group-premium">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group-premium">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <Magnetic>
                <motion.button type="submit" className="submit-btn-premium" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Send Message
                </motion.button>
              </Magnetic>
              {formStatus && <p className="form-status-premium">{formStatus}</p>}
            </div>
          </motion.form>
        </div>
      </motion.div>
      
      <footer className="footer-premium">
        <p>&copy; {new Date().getFullYear()} Jitendra Singh. Built with React & Framer Motion.</p>
      </footer>
    </section>
  );
};

export default Contact;
