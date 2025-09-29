import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const projectsRef = useRef();

  const projectsData = [
    {
      title: "Porthub",
      description:
        "Porthub is a portfolio-making website that helps you design and showcase your work with ease. Create stunning layouts using shapes, icons, and customizable templates to make your portfolio truly unique.",
      images: [
        "/img/Porthub/Porthub1.png",
        "/img/Porthub/Porthub2.png",
        "/img/Porthub/Porthub3.png",
        "/img/Porthub/Porthub4.png",
        "/img/Porthub/Porthub5.png",
        "/img/Porthub/Porthub6.png",
        "/img/Porthub/Porthub7.png",
        "/img/Porthub/Porthub8.png",
      ],
      tech: ["React", "Firebase"],
    },
    {
      title: "Record",
      description:
        "This note-taking website allows users to quickly create, organize, and manage their notes in one place. With a simple and modern interface, users can add titles and content, keep track of important ideas, and stay productive anytime.",
      images: [
        "/img/Record/Record1.png",
        "/img/Record/Record2.png",
        "/img/Record/Record3.png",
      ],
      tech: ["MongoDB", "Express", "React", "Node", "Tailwind", "DaisyUI"],
    },
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
      projectsRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    projectsRef.current.style.transform = `rotateX(${-y * 5}deg) rotateY(${
      x * 5
    }deg)`;
  };

  const handleMouseLeave = () => {
    projectsRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.section
      id="projects"
      className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-12">
        My Projects
      </h2>

      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000, transition: "transform 0.5s ease-out" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            cardVariants={cardVariants}
          />
        ))}
      </div>
    </motion.section>
  );
};

// 🖼️ Project Card with Carousel
const ProjectCard = ({ project, cardVariants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      className="bg-indigo-900/50 backdrop-blur-md rounded-2xl p-6 text-sky-400 flex flex-col space-y-4 shadow-lg border border-sky-400/20"
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: "0 10px 20px -3px rgb(56 189 248 / 0.3)",
      }}
      transition={{ duration: 0.2 }}
      variants={cardVariants}
    >
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="text-indigo-100 opacity-80">{project.description}</p>

      {/* Carousel */}
      <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden border border-sky-400/30 shadow-md">
        <motion.img
          key={currentIndex}
          src={project.images[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-indigo-950/70 text-white p-2 rounded-full hover:bg-sky-400 hover:text-indigo-950 transition"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-indigo-950/70 text-white p-2 rounded-full hover:bg-sky-400 hover:text-indigo-950 transition"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech.map((t, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-sm font-semibold bg-sky-400/20 text-sky-300 border border-sky-400/30"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
