import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import passPhoto from '../assets/images/passphoto1.jpeg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Vivekananda';

  useEffect(() => {
    let timeout;
    
    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section className="home" id="home">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Hello!</h3>
        <h1>
          I'm <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>, a Fresher
        </h1>
        <p>
          I am Vintha Vivekananda from Andhra Pradesh. I recently joined as a Software Engineer at cisco systems as a part of Apprenticeship program.
        </p>
        <p>
          I have basic knowledge in technical skills like Python, Pandas, Numpy, Matplotlib, 
          HTML, CSS, JavaScript,Reactjs,Angular, SQL/MySQL, MS Excel, Power BI.
        </p>
        <div className="btn-box">
          <a 
            href="mailto:vinthavivek19@gmail.com?subject=Hiring%20Inquiry" 
            className="btn1"
          >
            Hire Me
          </a>
          <a 
            href="/resumes/VINTHAVIVEKANANDA-UPDATE-RESUME.pdf" 
            className="btn2" 
            download
          >
            Download CV
          </a>
        </div>
        
        <div className="social-links-hero">
          <a 
            href="https://www.linkedin.com/in/vintha-vivekananda-a2478526a/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/vivekv1504" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:vinthavivek19@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="imgbox"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={passPhoto} alt="Vivekananda Photo" />
      </motion.div>
    </section>
  );
};

export default Hero;

