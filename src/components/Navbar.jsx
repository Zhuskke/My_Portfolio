import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="fixed top-4 z-50 w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-indigo-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-sky-400/20 mx-4">
      <motion.h1
        className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl font-inter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="#home">
          JM <span className="text-sky-400">Portfolio</span>
        </a>
      </motion.h1>
      <ul className="hidden md:flex gap-8 font-semibold text-lg">
        {["About", "Skills", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            className="cursor-pointer hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <a href={`#${item.toLowerCase()}`} className="py-2">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      <button
        className="md:hidden text-sky-400 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
