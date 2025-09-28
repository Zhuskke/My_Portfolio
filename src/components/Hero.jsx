import { motion } from "framer-motion";
import { LucideLinkedin, LucideMail, LucideGithub } from "lucide-react";
import Lottie from "lottie-react";
import developerAnimation from "../assets/developer-animation.json";
import useTypewriterEffect from "../hooks/useTypewriterEffect";

const Hero = () => {
  const text = useTypewriterEffect(["Hi! I'm JM, a Backend Developer."]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      id="home"
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-24 sm:py-32 md:py-48 px-4 md:px-12"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column */}
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
          Dedicated to building robust APIs, optimizing databases, and powering
          seamless digital experiences.
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
            className="text-sky-400 hover:text-white"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <LucideLinkedin size={28} />
          </motion.a>
          <motion.a
            href="#"
            className="text-sky-400 hover:text-white"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <LucideMail size={28} />
          </motion.a>
          <motion.a
            href="#"
            className="text-sky-400 hover:text-white"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <LucideGithub size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Column */}
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
  );
};

export default Hero;
