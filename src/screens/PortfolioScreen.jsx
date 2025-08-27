// Home.jsx
import React, { useState } from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const PortfolioScreen = () => {
  const [text] = useTypewriter({
    words: ["John Michael De Jesus|Aspiring Web Developer"], // use "|" as separator
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  const [name, title] = text.split("|");

  // State for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#00184b] flex flex-col items-center p-4 md:p-6">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-2 sm:px-3 md:px-4 border border-yellow-400 rounded-md bg-[#00184b] relative">
        {/* Logo */}
        <h1 className="text-yellow-400 font-bold text-2xl">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-yellow-400 font-semibold">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About me</li>
          <li className="cursor-pointer hover:underline">Skills</li>
          <li className="cursor-pointer hover:underline">Projects</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-[#00184b] transition text-sm md:text-base">
          Get in Touch
        </button>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-yellow-400 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#00184b] border-t border-yellow-400 flex flex-col items-center gap-4 py-6 md:hidden z-50">
            <ul className="flex flex-col gap-4 text-yellow-400 font-semibold text-center">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">About me</li>
              <li className="cursor-pointer hover:underline">Skills</li>
              <li className="cursor-pointer hover:underline">Projects</li>
            </ul>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-[#00184b] transition">
              Get in Touch
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center mt-10 md:mt-16 px-2 sm:px-3 md:px-4 gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left text-yellow-400 space-y-3 max-w-lg">
          <p className="text-base md:text-lg">Hi I am</p>

          {/* Typing Effect for Name */}
          <h2 className="text-2xl md:text-4xl font-bold">{name}</h2>
          <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>

          <p className="text-sm md:text-base">
            Welcome to my personal portfolio
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              className="bg-yellow-400 text-[#00184b] p-3 rounded-full hover:scale-110 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-[#00184b] p-3 rounded-full hover:scale-110 transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-[#00184b] p-3 rounded-full hover:scale-110 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="bg-white w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default PortfolioScreen;
