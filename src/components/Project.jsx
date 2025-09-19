const Projects = () => {
  const dummyProjects = [
    {
      title: "API Builder",
      stack: ["Node", "Express", "MongoDB"],
      img: "/img/project1.jpg",
    },
    {
      title: "Task Manager",
      stack: ["Django", "Postgres"],
      img: "/img/project2.jpg",
    },
    {
      title: "Realtime Chat",
      stack: ["React", "Socket.io"],
      img: "/img/project3.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full max-w-7xl mx-auto py-16 px-4 z-10"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-white mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dummyProjects.map((p, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden bg-[#00184b]/40 backdrop-blur-md shadow-2xl hover:scale-105 transition transform"
          >
            <div className="h-48 w-full bg-gray-800/20 flex items-center justify-center text-yellow-200">
              {/* placeholder image */}
              <img
                src={p.img}
                alt={p.title}
                className="object-cover h-48 w-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <div className="flex gap-2 mt-3 flex-wrap">
                {p.stack.map((s, si) => (
                  <span
                    key={si}
                    className="text-xs bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full text-yellow-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-yellow-400 text-[#00184b] rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects