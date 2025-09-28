import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden fixed top-20 left-0 w-full z-40 bg-indigo-950/90 backdrop-blur-lg p-6 rounded-b-3xl shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-6 text-center font-semibold text-xl">
            {["About", "Skills", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
