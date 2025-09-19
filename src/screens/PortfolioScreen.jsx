import React, { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  LucideGithub,
  LucideLinkedin,
  LucideMail,
  Menu, // Replaced FaBars
} from "lucide-react";
import * as THREE from "three";
import Lottie from "lottie-react";
import developerAnimation from "../assets/developer-animation.json";
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
// Custom hook to simulate the typewriter effect without an external library
const useTypewriterEffect = (
  words,
  loop = true,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), delaySpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  ]);

  return text;
};

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const text = useTypewriterEffect(["Hi! I'm JM, a Backend Developer."]);
  const containerRef = useRef();

  // Ref for the About Me card to add tilt effect
  const aboutRef = useRef();
  const skillsRef = useRef();

  const handleMouseMove = (event, ref) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    ref.current.style.transform = `rotateX(${-y * 10}deg) rotateY(${
      x * 10
    }deg)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  useEffect(() => {
    let renderer, camera, scene, particles, mouse;
    const isMobile = window.innerWidth < 768;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = isMobile ? 5 : 2;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Mouse tracking
      mouse = new THREE.Vector2(0, 0);

      // Particles
      const particleCount = isMobile ? 500 : 2000;
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const color1 = new THREE.Color(0x38bdf8);
      const color2 = new THREE.Color(0x60a5fa);

      for (let i = 0; i < particleCount; i++) {
        // Position
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        positions.push(x, y, z);

        // Color
        const color = color1.clone().lerp(color2, Math.random());
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      window.addEventListener("resize", onWindowResize);
      window.addEventListener("mousemove", onMouseMove);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0008;

      // Mouse movement interaction
      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    if (containerRef.current) {
      init();
      animate();
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 />, type: "Languages" },
    { name: "CSS3", icon: <FaCss3Alt />, type: "Languages" },
    { name: "JavaScript", icon: <FaJs />, type: "Languages" },
    { name: "Python", icon: <FaPython />, type: "Languages" },
    { name: "Django", icon: <SiDjango />, type: "Frameworks" },
    { name: "React", icon: <FaReact />, type: "Frameworks" },
    { name: "Node.js", icon: <FaNodeJs />, type: "Runtimes" },
    { name: "Express.js", icon: <SiExpress />, type: "Frameworks" },
    { name: "MongoDB", icon: <SiMongodb />, type: "Databases" },
  ];

  const groupedSkills = skillsData.reduce((acc, skill) => {
    (acc[skill.type] = acc[skill.type] || []).push(skill);
    return acc;
  }, {});

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center font-sans text-sky-400 bg-indigo-950 overflow-hidden">
      {/* Three.js Background Canvas */}
      <div ref={containerRef} className="fixed inset-0 z-0 opacity-80" />

      {/* Navbar */}
      <nav className="fixed top-4 z-50 w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-indigo-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-sky-400/20 mx-4">
        <motion.h1
          className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JM <span className="text-sky-400">Portfolio</span>
        </motion.h1>
        <ul className="hidden md:flex gap-8 font-semibold text-lg">
          {["Home", "About", "Skills", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              className="cursor-pointer hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className="py-2">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <button
          className="md:hidden text-sky-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-20 left-0 w-full z-40 bg-indigo-950/90 backdrop-blur-lg p-6 rounded-b-3xl shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6 text-center font-semibold text-xl">
              {["Home", "About", "Skills", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-24 sm:py-32 md:py-48 px-4 md:px-12"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column - Text and Buttons */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-10 md:mt-0"
          variants={fadeIn}
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
          >
            Backend Developer
          </motion.h2>
          <motion.h3
            variants={fadeIn}
            className="text-xl sm:text-2xl md:text-3xl text-sky-300 opacity-90 min-h-[3rem] font-medium"
          >
            <span className="font-semibold">{text}</span>
          </motion.h3>
          <motion.p
            variants={fadeIn}
            className="text-indigo-100 opacity-80 mt-2 max-w-lg text-lg"
          >
            Dedicated to building robust APIs, optimizing databases, and
            powering seamless digital experiences.
          </motion.p>
          <motion.div variants={fadeIn} className="flex gap-4 mt-6">
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full text-lg font-semibold bg-sky-400 text-indigo-950 shadow-lg hover:shadow-2xl hover:bg-sky-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div variants={fadeIn} className="flex gap-6 mt-8">
            <motion.a
              href="#"
              className="text-sky-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <LucideLinkedin size={28} />
            </motion.a>
            <motion.a
              href="#"
              className="text-sky-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <LucideMail size={28} />
            </motion.a>
            <motion.a
              href="#"
              className="text-sky-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <LucideGithub size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - SVG Animation */}
        <motion.div
          className="relative mt-10 md:mt-0 w-full md:w-1/2 lg:w-2/5 p-4 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Lottie
            animationData={developerAnimation}
            loop={true}
            className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <motion.div
          ref={aboutRef}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-indigo-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-sky-400/20"
          onMouseMove={(e) => handleMouseMove(e, aboutRef)}
          onMouseLeave={() => handleMouseLeave(aboutRef)}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Photo container */}
          <motion.div
            className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center"
            variants={fadeIn}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-sky-400 shadow-xl">
              <img
                src="img/Profile.jpg"
                alt="My profile"
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
              />
            </div>
          </motion.div>
          {/* About Me Content */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-4 md:space-y-6"
            variants={fadeIn}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              A Little About Me
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed opacity-90">
              I'm a <strong>4th-year Computer Engineering student</strong>{" "}
              driven by a passion for the logical foundation of technology. My
              academic journey has provided me with a strong background in
              **data structures and algorithms**, which I apply to my true
              passion: backend development. I'm fascinated by how the principles
              of logic and efficient system design can power complex
              applications.
            </p>
            <p className="text-lg text-indigo-100 leading-relaxed opacity-90">
              I specialize in building robust APIs, optimizing database
              performance, and architecting scalable backend systems. I thrive
              on solving intricate problems and enjoy the process of writing
              clean, maintainable code. As I near graduation, I'm eager to apply
              my skills to real-world challenges and contribute to innovative
              projects that make a tangible impact.
            </p>
            <div className="flex justify-center md:justify-start pt-4">
              <motion.button
                className="bg-sky-400 text-indigo-950 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-sky-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Resume
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* My Skills Section */}
      <motion.section
        id="skills"
        className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-12">
          My Skills
        </h2>
        <div
          ref={skillsRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          onMouseMove={(e) => handleMouseMove(e, skillsRef)}
          onMouseLeave={() => handleMouseLeave(skillsRef)}
          style={{ perspective: 1000, transition: "transform 0.5s ease-out" }}
        >
          {Object.entries(groupedSkills).map(([type, skills], index) => (
            <React.Fragment key={index}>
              <div className="col-span-full">
                <h3 className="text-3xl font-semibold text-white mt-4 mb-6 text-center">
                  {type}
                </h3>
              </div>
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
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
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="flex flex-col items-center gap-8 md:gap-12 bg-indigo-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-sky-400/20">
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-white leading-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-center text-indigo-100 leading-relaxed opacity-90 max-w-2xl">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out via email or connect with me on social media.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <motion.a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-full text-lg font-semibold bg-sky-400 text-indigo-950 shadow-lg hover:shadow-2xl hover:bg-sky-300 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <LucideMail size={24} /> Email Me
            </motion.a>
            <motion.a
              href="#"
              className="px-6 py-3 rounded-full text-lg font-semibold bg-indigo-950 text-sky-400 border border-sky-400 shadow-lg hover:shadow-2xl hover:bg-sky-400 hover:text-indigo-950 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <LucideLinkedin size={24} /> LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="px-6 py-3 rounded-full text-lg font-semibold bg-indigo-950 text-sky-400 border border-sky-400 shadow-lg hover:shadow-2xl hover:bg-sky-400 hover:text-indigo-950 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <LucideGithub size={24} /> GitHub
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-indigo-200 text-sm opacity-70">
        &copy; {new Date().getFullYear()} JM. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
