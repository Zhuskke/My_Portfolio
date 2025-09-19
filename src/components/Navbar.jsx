import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="fixed top-4 z-50 w-[92%] max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl bg-[#00184b]/30 backdrop-blur-lg border border-yellow-400/20 shadow-lg">
      <h1 className="text-yellow-400 font-extrabold text-xl sm:text-2xl">
        JM.dev
      </h1>
      <ul className="hidden md:flex gap-8 text-yellow-100 font-medium">
        <li>
          <a className="hover:text-yellow-400 transition" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-yellow-400 transition" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-yellow-400 transition" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-yellow-400 transition" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-yellow-400 transition" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <button
        className="md:hidden text-yellow-400 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
