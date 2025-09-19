const Skills = ({ skills }) => {
  return (
    <section
      id="skills"
      className="relative w-full max-w-7xl mx-auto py-16 px-4 z-10 animate-fade-in-up"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-white mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#00184b]/50 backdrop-blur-md rounded-2xl p-6 text-center text-yellow-400 flex flex-col items-center justify-center space-y-3 transform transition-transform duration-300 hover:scale-105 hover:bg-[#002b6f] shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20"
          >
            <div className="skill-badge w-16 h-16 flex items-center justify-center rounded-full border-2 border-yellow-400 text-3xl">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mt-2">{skill.name}</h3>
            <p className="text-xs text-yellow-100 opacity-80">{skill.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills