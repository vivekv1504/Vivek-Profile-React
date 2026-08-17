import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaFilePdf,
  FaBrain,
  FaGithub,
  FaNetworkWired,
  FaPython,
  FaDatabase,
  FaRegCalendarAlt
} from 'react-icons/fa';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import planning from '../assets/images/planning-and-designing.pdf';
import aitechPdf from '../assets/images/Cisco Certified AI Technical Practitioner certificate.pdf';
import copilotPdf from '../assets/images/Credentials - vinthavivekananda-2384 _ Microsoft Learn.pdf';
import ciscoNetworkPdf from '../assets/images/Cisco Certified Network Associate certificate.pdf';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Cisco AI Technical Practitioner (AITECH)',
      provider: 'Cisco',
      link: aitechPdf,
      type: 'pdf',
      date: '',
      icon: <FaBrain />,
      color: '#667eea'
    },
    {
      title: 'GitHub Copilot (GH-300)',
      provider: 'Microsoft',
      link: copilotPdf,
      type: 'pdf',
      date: '',
      icon: <FaGithub />,
      color: '#4facfe'
    },
    {
      title: 'Cisco Certified Network Associate',
      provider: 'Cisco',
      link: ciscoNetworkPdf,
      type: 'pdf',
      date: '',
      icon: <FaNetworkWired />,
      color: '#00bcd4'
    },
    {
      title: 'Python (Basic)',
      provider: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/e7b9357e8f18',
      type: 'external',
      date: '',
      icon: <FaPython />,
      color: '#00ff88'
    },
    {
      title: 'SQL (Basic)',
      provider: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/7cd8e4c225f5',
      type: 'external',
      date: '',
      icon: <FaDatabase />,
      color: '#30cfd0'
    },
    {
      title: 'Planning and Designing UI',
      provider: 'Simplilearn',
      link: planning,
      type: 'pdf',
      date: '',
      icon: <FaCertificate />,
      color: '#f093fb'
    },
  ];

  return (
    <section className="certifications" id="certifications" ref={ref}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span>Certifications</span>
      </motion.h2>

      <motion.div 
        className="cert-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 + index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -15, 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            <div className="cert-card-corner"></div>
            
            <div className="cert-card-icon-wrapper" style={{ '--cert-color': cert.color }}>
              <div className="cert-icon-bg"></div>
              <div className="cert-icon">
                {cert.icon}
              </div>
            </div>
            
            <div className="cert-card-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-provider">
                <span className="cert-badge">
                  <HiOutlineBadgeCheck /> {cert.provider}
                </span>
              </p>

              {cert.date && (
                <p className="cert-date">
                  <FaRegCalendarAlt /> {cert.date}
                </p>
              )}
              
              <div className="cert-card-divider"></div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-btn"
                style={{ '--btn-color': cert.color }}
              >
                {cert.type === 'pdf' ? (
                  <>
                    <FaFilePdf className="btn-icon" />
                    <span>View PDF</span>
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt className="btn-icon" />
                    <span>View Certificate</span>
                  </>
                )}
                <div className="btn-shine"></div>
              </a>
            </div>

            <div className="cert-card-glow" style={{ '--glow-color': cert.color }}></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;