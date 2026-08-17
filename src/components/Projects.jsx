import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Notes & Reminder App',
      location: 'Personal Project',
      duration: '2026',
      tags: ['React', 'Vite', 'Firebase', 'Flask', 'Azure OpenAI', 'LiteLLM', 'GitHub Actions'],
      points: [
        'Built and deployed a full-stack reminder application using React, Firebase Authentication, Firestore, and a Flask backend.',
        'Integrated Azure OpenAI through LiteLLM to generate weekly AI-powered productivity insights with fallback handling.',
        'Created CI/CD workflows using GitHub Actions and deployed the frontend and backend independently.',
      ],
      link: 'https://note-reamainder-app.web.app/',
      linkText: 'View Live Demo',
    },
    {
      title: 'Malicious URLs Detection Using Data Analytics',
      location: 'Final Year Project, Tirupati',
      duration: 'Jan 2024 - May 2024',
      tags: ['Python', 'Machine Learning', 'Data Analytics', 'SVM', 'Classification'],
      points: [
        'Resolved changing cyberthreats with a method to identify rogue URLs.',
        'Used One-vs-All classification strategy to improve detection accuracy.',
        'Tested SVM, Decision Trees, and Logistic Regression models.',
        'Applied feature engineering for better prediction and noise reduction.',
      ],
    },
    {
      title: 'Personal Portfolio Website – HTML, CSS & JavaScript and React JS Project',
      location: 'Personal Project',
      duration: 'Apr 2025',
      tags: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Framer Motion'],
      points: [
        'Developed a fully responsive portfolio website using HTML, CSS, and JavaScript.',
        'Showcases profile, skills, education, and projects with an interactive UI.',
        'Implemented typing animation, dynamic contact form, and smooth scrolling.',
        'Ensures cross-browser compatibility and mobile responsiveness.',
      ],
    },
    {
      title: 'Webex JS SDK & Widgets Version Comparison Tool',
      location: 'Cisco Systems, Inc.',
      duration: 'August 2025 - August 2026',
      tags: ['JavaScript', 'HTML', 'CSS', 'Handlebars.js', 'Fetch API', 'Bootstrap'],
      points: [
        'Built a version-comparison tool for the Webex JS SDK changelog, contributing three merged pull requests and approximately 1,900 lines of code.',
        'Compared packages across SDK releases and classified them as Added, Removed, Version Changed, or Unchanged.',
        'Created reusable data-layer functions for package comparison, pre-release resolution, and change statistics.',
        'Added shareable URLs, clipboard support, commit-history links, and improved semantic-version sorting.',
        'Developed a GitHub Actions CI/CD workflow that automatically comments on pull requests and sends status notifications through a Webex bot using Webex APIs.'
      ],
    },
    {
      title: 'Sales and Customer Insights Analysis for Blinkit',
      location: 'Personal Project',
      duration: 'Mar 2025 – Apr 2025',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Visualization'],
      points: [
        'Analyzed sales and customer rating data from Blinkit using real-world datasets.',
        'Used Python libraries like pandas, matplotlib, and seaborn for data cleaning and visualization.',
        'Computed key metrics such as total sales, average sales, item count, and average ratings.',
        'Visualized top-selling products and customer trends to support data-driven decisions.',
      ],
      link: 'http://localhost:8888/notebooks/OneDrive/Desktop/Blinkit_Analysis_project.ipynb',
    },
  ];

  return (
    <section className="projects" id="projects" ref={ref}>
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span>Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3>{project.title}</h3>
            <p className="project-meta">
              <strong>{project.location}</strong>
              <br />
              {project.duration}
            </p>

            {project.tags && (
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            )}

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.linkText || 'View Analysis'} <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

