import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'B.Tech - Computer Science Engineering',
      institution: 'Chadalawada Ramanamma Engineering College',
      year: '2020 - 2024',
      grade: '7.93 CGPA',
    },
    {
      degree: 'Intermediate - M.P.C',
      institution: 'Sri Chaitanya Junior College',
      year: '2018 - 2020',
      grade: '8.43 CGPA',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Sri Saraswathi E.M High School',
      year: '2017 - 2018',
      grade: '9.2 GPA',
    },
  ];

  return (
    <section className="education" id="education" ref={ref}>
      <motion.h2 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span>Education</span>
      </motion.h2>
      
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          >
            <div className="education-card-header">
              <div className="education-icon">
                <i className='bx bxs-graduation'></i>
              </div>
              <div className="education-year">{edu.year}</div>
            </div>
            
            <div className="education-card-body">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <div className="education-grade">
                <i className='bx bxs-star'></i>
                <span>{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

