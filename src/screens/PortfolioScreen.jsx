import React, { useState } from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
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
      {/* 🔥 Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00184b] via-[#002b6f] to-[#00184b] animate-gradient-x"></div>
      <div className="absolute w-[700px] h-[700px] bg-yellow-400/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-yellow-300/10 rounded-full blur-3xl bottom-[-150px] right-[-150px] animate-bounce-slow"></div>

      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 backdrop-blur-md bg-[#00184b]/40 border border-yellow-400/30 rounded-2xl shadow-lg mt-4 relative z-10">
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
      <section className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left mt-16 md:mt-24 px-4 relative z-10 max-w-7xl mx-auto py-8">
        {/* Left Column - Text and Buttons */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/2 lg:w-3/5 p-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-white">
            Aspiring Backend Developer
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-purple-300 opacity-90 drop-shadow-md">
            {text}
          </h3>
          <p className="text-yellow-100 opacity-80 mt-3 md:max-w-md text-lg">
            Dedicated to building robust APIs, optimizing databases, and
            powering smooth digital experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-7 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#00184b] transition shadow-xl text-lg">
              Contact
            </button>
          </div>
          <div className="flex gap-6 mt-8">
            <a
              href="#"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="#"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right Column - Lottie Animation */}
        <div className="relative mt-12 md:mt-0 flex justify-center items-center md:w-1/2 lg:w-2/5 p-4">
          <Lottie
            options={defaultOptions}
            height={400} // Adjust height as needed
            width={400} // Adjust width as needed
          />
        </div>
      </section>

      {/* --- About Me Section --- */}
      <section className="relative w-full max-w-7xl mx-auto py-16 px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 backdrop-blur-md bg-[#00184b]/40 border border-yellow-400/30 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up">
          {/* Left side: Your Photo */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg group">
              <img
                src="/img/Profile.jpg" // Placeholder image for your photo
                alt="My Photo"
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right side: About Me Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              A Little About Me
            </h2>
            <p className="text-lg text-yellow-100 opacity-90 leading-relaxed">
              I'm a <strong>4th-year Computer Engineering student</strong>{" "}
              driven by a passion for the logical foundation of technology. My
              academic journey has provided me with a strong background in
              data structures and algorithms, which I apply to my true
              passion: backend development. I'm fascinated by how the principles
              of logic and efficient system design can power complex
              applications.
            </p>
            {/* <p className="text-lg text-yellow-100 opacity-90 leading-relaxed">
              I specialize in building robust APIs, optimizing database
              performance, and architecting scalable backend systems. I thrive
              on solving intricate problems and enjoy the process of writing
              clean, maintainable code. As I near graduation, I'm eager to apply
              my skills to real-world challenges and contribute to innovative
              projects that make a tangible impact.
            </p> */}
            <div className="flex justify-center md:justify-start pt-4">
              <button className="bg-yellow-400 text-[#00184b] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1">
                View My Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioScreen;
