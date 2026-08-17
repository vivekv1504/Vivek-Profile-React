import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceData = [
    {
      role: 'Software Engineer',
      company: 'Cisco Systems, Inc.',
      location: 'Bengaluru, India',
      period: 'August 2025 – Present',
      points: [
        'Enhanced changelog portal with package version comparison features.',
        'Developed reusable AI agent skills by directly integrating and prompting Large Language Models (LLMs).',
        'Created feature-intake documents and translated requirements into effective LLM prompts to accelerate AI-assisted feature development.',
        'Migrated Webex-JS SDK and widgets packages AI docs to the org-wide Spec-Driven Development (SDLC-Skills) standard docs.',
        'Generated machine-readable specs and coverage manifest enabling automated documentation-drift and coverage checks.',
        'Working on E2E automation testing for Calling SDK features using Playwright.',
        'Enhanced Webex Contact Center SDK for MakeMyTrip\u2019s third-party desktop integration, adding in-app Webex call answer, reject, mute, and unmute capabilities using REST APIs and real-time WebSocket events.',
        'Performed packet trace analysis and debugging for WebRTC based WxCalling workflows.',
        'Recognized for quality delivery and proactive communication.',
      ],
    },
  ];

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span>Experience</span>
      </motion.h2>

      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          >
            <div className="experience-card-header">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>

            <div className="experience-card-body">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">
                {exp.company}
                <span className="experience-location">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </p>

              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
