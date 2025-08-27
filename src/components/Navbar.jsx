// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 px-2 sm:px-3 md:px-4 border border-yellow-400 rounded-md bg-[#00184b] relative">
      {/* Logo */}
      <h1 className="text-yellow-400 font-bold text-xl">My Portfolio</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-yellow-400 font-semibold">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">About me</li>
        <li className="cursor-pointer hover:underline">Skills</li>
        <li className="cursor-pointer hover:underline">Projects</li>
      </ul>

      {/* Contact button (desktop only) */}
      <button className="hidden md:block border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-[#00184b] transition">
        Contact me
      </button>

      {/* Hamburger Menu (mobile only) */}
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
  );
}

export default Navbar;
