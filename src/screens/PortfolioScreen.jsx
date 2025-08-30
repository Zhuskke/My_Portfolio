import React, { useState } from "react";

import {
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiMongodb,
} from "react-icons/si";

import { useTypewriter } from "react-simple-typewriter";
import Lottie from "react-lottie"; // Import Lottie
import animationData from "../assets/developer-animation.json"; // Adjust this path to your downloaded Lottie JSON

const PortfolioScreen = () => {
  const [text] = useTypewriter({
    words: ["Hi! I'm JM"],

    loop: true,

    typeSpeed: 100,

    deleteSpeed: 100,
  });

  const [isOpen, setIsOpen] = useState(false);

  const skillsData = [
    { name: "HTML", icon: <SiHtml5 />, type: "Language" },
    { name: "CSS", icon: <SiCss3 />, type: "Language" },
    { name: "JavaScript", icon: <SiJavascript />, type: "Language" },
    { name: "Python", icon: <SiPython />, type: "Language" },
    { name: "Django", icon: <SiDjango />, type: "Framework" },
    { name: "Node.js", icon: <SiNodedotjs />, type: "Runtime" },
    { name: "Express.js", icon: <SiExpress />, type: "Framework" },
    { name: "React", icon: <SiReact />, type: "Framework" },
    { name: "MongoDB", icon: <SiMongodb />, type: "Database" },
  ];

  // Lottie animation options

  const defaultOptions = {
    loop: true,

    autoplay: true,

    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden text-yellow-400">
      {/* Include Font Awesome for real icons */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* 🔥 Moving Gradient Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#00184b] via-[#002b6f] to-[#00184b] animate-gradient-x"></div>

      <div className="absolute w-[700px] h-[700px] bg-yellow-400/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] bg-yellow-300/10 rounded-full blur-3xl bottom-[-150px] right-[-150px] animate-bounce-slow"></div>

      {/* Navbar */}

      <nav className="fixed top-0 z-50 w-full max-w-7xl flex justify-between items-center py-4 px-6 backdrop-blur-md bg-[#00184b]/40 border border-yellow-400/30 rounded-2xl shadow-lg mt-4">
        <h1 className="text-yellow-400 font-extrabold text-2xl">
          My Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 font-semibold">
          <li className="cursor-pointer hover:text-white transition">Home</li>
          <li className="cursor-pointer hover:text-white transition">About</li>
          <li className="cursor-pointer hover:text-white transition">Skills</li>
          <li className="cursor-pointer hover:text-white transition">
            Projects
          </li>
        </ul>

        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#00184b]/90 backdrop-blur-md p-6 rounded-lg z-20">
          <ul className="flex flex-col gap-6 text-center font-semibold">
            <li className="cursor-pointer hover:text-white transition">Home</li>

            <li className="cursor-pointer hover:text-white transition">
              About
            </li>

            <li className="cursor-pointer hover:text-white transition">
              Skills
            </li>

            <li className="cursor-pointer hover:text-white transition">
              Projects
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row items-center md:justify-between py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12">
        {/* Left Column - Text and Buttons */}
        <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/2 lg:w-3/5 mt-8 sm:mt-10 md:mt-0 md:ml-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white text-center md:text-left">
            Aspiring Backend Developer
          </h2>
          <h3 className="text-lg sm:text-xl md:text-3xl text-purple-300 opacity-90 drop-shadow-md min-h-[2rem] sm:min-h-[2.5rem] text-center md:text-left">
            {text}
          </h3>
          <p className="text-yellow-100 opacity-80 mt-3 max-w-sm sm:max-w-md text-base sm:text-lg text-center md:text-left">
            Dedicated to building robust APIs, optimizing databases, and
            powering smooth digital experiences.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 sm:px-7 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#00184b] transition shadow-xl text-base sm:text-lg">
              Contact
            </button>
          </div>
          <div className="flex gap-6 mt-6 sm:mt-8 justify-center md:justify-start">
            <a
              href="#"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="#"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Column - Lottie Animation */}
        <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end items-center w-full md:w-1/2 lg:w-2/5 p-2 sm:p-4">
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            className="sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]"
          />
        </div>
      </section>
      {/* --- About Me Section --- */}

      <section className="relative w-full max-w-7xl mx-auto py-16 px-4 z-10 animate-fade-in-up">
        {/* New floating design with subtle glow animation */}

        <div className="w-full h-full flex flex-col md:flex-row items-center gap-12 backdrop-blur-md bg-[#00184b]/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-400/20 animate-glow-border">
          {/* Left side: Your Photo with new dynamic design */}

          <div className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center">
            {/* Layer 1: Blurred glowing circle */}

            <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-yellow-400/20 blur-3xl z-0 transition-transform duration-500"></div>

            {/* Layer 2: Main photo container with border and shadow */}

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl z-10">
              <img
                src="/img/Profile.jpg" // Placeholder image for your photo
                alt="Your Photo"
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
              />

              <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right side: About Me Content */}

          <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              A Little About Me
            </h2>

            <p className="text-lg text-yellow-100 opacity-90 leading-relaxed">
              I'm a <strong>4th-year Computer Engineering student</strong>{" "}
              driven by a passion for the logical foundation of technology. My
              academic journey has provided me with a strong background in
              **data structures and algorithms**, which I apply to my true
              passion: backend development. I'm fascinated by how the principles
              of logic and efficient system design can power complex
              applications.
            </p>

            <p className="text-lg text-yellow-100 opacity-90 leading-relaxed">
              I specialize in building robust APIs, optimizing database
              performance, and architecting scalable backend systems. I thrive
              on solving intricate problems and enjoy the process of writing
              clean, maintainable code. As I near graduation, I'm eager to apply
              my skills to real-world challenges and contribute to innovative
              projects that make a tangible impact.
            </p>

            <div className="flex justify-center md:justify-start pt-4">
              <button className="bg-yellow-400 text-[#00184b] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1">
                View My Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full max-w-7xl mx-auto py-16 px-4 z-10 animate-fade-in-up">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-white mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#00184b]/50 backdrop-blur-md rounded-2xl p-6 text-center text-yellow-400 flex flex-col items-center justify-center space-y-3 transform transition-transform duration-300 hover:scale-105 hover:bg-[#002b6f] shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <div className="w-16 h-16 flex items-center justify-center p-2 rounded-full border-2 border-yellow-400 text-4xl">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold mt-2">{skill.name}</h3>

              <p className="text-xs text-yellow-100 opacity-80">{skill.type}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioScreen;
