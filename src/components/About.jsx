import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      aboutRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    aboutRef.current.style.transform = `rotateX(${-y * 10}deg) rotateY(${
      x * 10
    }deg)`;
  };

  const handleMouseLeave = () => {
    aboutRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Profile Pic */}
        <motion.div className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-sky-400 shadow-xl">
            <img
              src="img/Profile.jpg"
              alt="My profile"
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
            />
          </div>
        </motion.div>
        {/* About Me Content */}
        <motion.div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            A Little About Me
          </h2>
          <p className="text-lg text-indigo-100 leading-relaxed opacity-90">
            I'm a <strong>4th-year Computer Engineering student</strong> driven
            by a passion for the logical foundation of technology. My academic
            journey has provided me with a strong background in{" "}
            <b>data structures and algorithms</b>, which I apply to my true
            passion: backend development.
          </p>
          <p className="text-lg text-indigo-100 leading-relaxed opacity-90">
            I specialize in building robust APIs, optimizing database
            performance, and architecting scalable backend systems. I thrive on
            solving intricate problems and enjoy the process of writing clean,
            maintainable code.
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
  );
};

export default About;
