// Home.jsx
import React from "react";
import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Typed } from "react-typed";
import { Typewriter } from "react-simple-typewriter";

const PortfolioScreen = () => {
  return (
    <div className="min-h-screen bg-[#00184b] flex flex-col items-center justify-start p-6">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 border border-yellow-400 rounded-md bg-[#00184b]">
        <h1 className="text-yellow-400 font-bold text-xl">My Portfolio</h1>
        <ul className="flex gap-6 text-yellow-400 font-semibold">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About me</li>
          <li className="cursor-pointer hover:underline">Skills</li>
          <li className="cursor-pointer hover:underline">Projects</li>
        </ul>
        <button className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-[#00184b] transition">
          Contact me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-6xl flex justify-between items-center mt-16 px-6">
        {/* Text Content */}
        <div className="text-left text-yellow-400 space-y-3">
          <p>Hi I am</p>

          {/* Typing Effect for Name */}
          <h2 className="text-3xl font-bold">
            <Typewriter
              words={["John Michael De Jesus"]}
              loop={1}
              typeSpeed={70}
              deleteSpeed={50}
              cursor
              cursorStyle="|"
            />
          </h2>

          {/* Typing Effect for Title */}
          <h3 className="text-xl font-semibold">
            <Typewriter
              words={["Aspiring Web Developer"]}
              loop={1}
              typeSpeed={70}
              deleteSpeed={50}
              cursor
              cursorStyle="|"
            />
          </h3>

          <p>Welcome to my personal portfolio</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-yellow-400 text-[#00184b] p-3 rounded-full"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-[#00184b] p-3 rounded-full"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-[#00184b] p-3 rounded-full"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="bg-white w-40 h-40 rounded-full flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full"
          />
        </div>
      </section>
    </div>
  );
};

export default PortfolioScreen;
