import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skillsRef = useRef();

  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      skillsRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    skillsRef.current.style.transform = `rotateX(${-y * 10}deg) rotateY(${
      x * 10
    }deg)`;
  };

  const handleMouseLeave = () => {
    skillsRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.section
      id="skills"
      className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-12">
        My Skills
      </h2>

      <div
        ref={skillsRef}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000, transition: "transform 0.5s ease-out" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-indigo-900/50 backdrop-blur-md rounded-2xl p-6 text-center text-sky-400 flex flex-col items-center justify-center space-y-3 shadow-lg border border-sky-400/20"
            whileHover={{
              y: -5,
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgb(56 189 248 / 0.3)",
            }}
            transition={{ duration: 0.2 }}
            variants={cardVariants}
          >
            <motion.div
              className="w-16 h-16 flex items-center justify-center text-5xl"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              }}
            >
              {skill.icon}
            </motion.div>
            <h4 className="text-xl font-bold text-white">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
