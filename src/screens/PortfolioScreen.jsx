import { useState } from "react";
import BackgroundCanvas from "../components/BackgroundCanvas";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center font-sans text-sky-400 bg-indigo-950 overflow-hidden">
      <BackgroundCanvas />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
