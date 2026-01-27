import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaExternalLinkAlt, FaFilePdf, FaAward } from 'react-icons/fa';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import completionCertPdf from '../assets/images/completion-certificate.pdf';
import planning from '../assets/images/planning-and-designing.pdf';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Python Basics',
      provider: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/e7b9357e8f18',
      type: 'external',
      icon: <FaCertificate />,
      color: '#00bcd4'
    },
    {
      title: 'SQL Basics',
      provider: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/7cd8e4c225f5',
      type: 'external',
      icon: <FaAward />,
      color: '#00ff88'
    },
    {
      title: 'CCNA Completion Certificate',
      provider: 'Cisco Systems', 
      link: completionCertPdf,
      type: 'pdf',
      icon: <HiOutlineBadgeCheck />,
      color: '#667eea'
    },
    {
      title: 'Planning and Designing UI',
      provider: 'Simplilearn',
      link: planning,
      type: 'pdf',
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