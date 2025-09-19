import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Lottie from "react-lottie";
const Hero = ({ text, defaultOptions }) => {
  return (
    <section
      id="home"
      className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0 md:ml-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white text-center md:text-left">
          Aspiring Backend Developer
        </h2>
        <h3 className="text-lg sm:text-xl md:text-3xl text-purple-300 opacity-90 drop-shadow-md min-h-[2rem] sm:min-h-[2.5rem] text-center md:text-left">
          {text}
        </h3>
        <p className="text-yellow-100 opacity-80 mt-3 max-w-sm sm:max-w-md text-base sm:text-lg text-center md:text-left">
          Dedicated to building robust APIs, optimizing databases, and powering
          smooth digital experiences.
        </p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 sm:px-7 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#00184b] transition shadow-xl text-base sm:text-lg"
          >
            Contact
          </a>
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

      <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end items-center w-full md:w-1/2 lg:w-2/5 p-2 sm:p-4">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          className="sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]"
        />
      </div>
    </section>
  );
};

export default Hero;
