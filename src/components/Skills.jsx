import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaLightbulb,
  FaClock,
  FaUsers,
  FaHeart,
  FaRocket,
  FaSmile,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaInfinity,
  FaLinux,
  FaTheaterMasks,
  FaComments,
  FaRobot,
  FaPlug,
  FaFileCode,
  FaChartLine,
  FaCode,
  FaMousePointer,
  FaBrain,
  FaTerminal
} from 'react-icons/fa';
import { SiPandas, SiNumpy, SiGithubactions, SiJira } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'MSSQL', icon: <DiMsqlServer /> },
    { name: 'PowerBI', icon: <FaDatabase /> },
    { name: 'MS-Excel', icon: <BsFileEarmarkSpreadsheet /> },
  ];

  const testingDevOps = [
    { name: 'Playwright', icon: <FaTheaterMasks /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'GitHub Actions', icon: <SiGithubactions /> },
    { name: 'CI/CD', icon: <FaInfinity /> },
    { name: 'Linux', icon: <FaLinux /> },
  ];

  const aiDevelopment = [
    { name: 'LLM Prompting', icon: <FaComments /> },
    { name: 'AI Agent Skill Development', icon: <FaRobot /> },
    { name: 'GenAI', icon: <FaBrain /> },
    { name: 'RAG', icon: <FaBrain /> },
    { name: 'Model Context Protocol', icon: <FaPlug /> },
    { name: 'Spec-Driven Development', icon: <FaFileCode /> },
  ];

  const dataAndTools = [
    { name: 'pandas', icon: <SiPandas /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Matplotlib', icon: <FaChartLine /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'VS Code', icon: <FaCode /> },
    { name: 'Cursor', icon: <FaMousePointer /> },
    { name: 'Claude', icon: <FaBrain /> },
    { name: 'Codex', icon: <FaTerminal /> },
  ];

  const softSkills = [
    { name: 'Communication', icon: <FaUsers /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Team Player', icon: <FaUsers /> },
    { name: 'Hardworking', icon: <FaHeart /> },
    { name: 'Quick Learner', icon: <FaRocket /> },
    { name: 'Positive Attitude', icon: <FaSmile /> },
  ];

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Technical <span>Skills</span>
      </motion.h2>

      <motion.ul
        className="skill-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {technicalSkills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Testing &amp; <span>DevOps</span>
      </motion.h2>

      <motion.ul
        className="skill-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {testingDevOps.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        AI <span>Development</span>
      </motion.h2>

      <motion.ul
        className="skill-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {aiDevelopment.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.75 + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Data &amp; <span>Tools</span>
      </motion.h2>

      <motion.ul
        className="skill-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {dataAndTools.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.95 + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Soft <span>Skills</span>
      </motion.h2>

      <motion.ul
        className="skill-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {softSkills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;

