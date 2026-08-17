import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          &copy; 2026 Vintha Vivekananda. Made with <FaHeart className="heart-icon" /> using React
        </p>
        <div className="social-icons">
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
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

