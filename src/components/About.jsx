const About = () => {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto py-16 px-4 z-10 animate-fade-in-up"
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center gap-12 backdrop-blur-md bg-[#00184b]/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-400/20 animate-glow-border">
        <div className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-yellow-400/20 blur-3xl z-0 transition-transform duration-500"></div>

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl z-10">
            <img
              src="/img/Profile.jpg"
              alt="Your Photo"
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            A Little About Me
          </h2>

          <p className="text-lg text-yellow-100 opacity-90 leading-relaxed">
            I'm a <strong>4th-year Computer Engineering student</strong> driven
            by a passion for the logical foundation of technology. My academic
            journey has provided me with a strong background in data structures
            and algorithms, which I apply to my true passion: backend
            development.
          </p>

          <p className="text-lg text-yellow-100 opacity-90 leading-relaxed">
            I specialize in building robust APIs, optimizing database
            performance, and architecting scalable backend systems. I thrive on
            solving intricate problems and enjoy the process of writing clean,
            maintainable code.
          </p>

          <div className="flex justify-center md:justify-start pt-4">
            <button className="bg-yellow-400 text-[#00184b] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1">
              View My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
