const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "WEB DESIGN",
      title: "Innovative designer for a digital age",
      image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxNb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwbW9ja3VwJTIwc2hvd2luZyUyMGRlc2lnbmVyJTIwcHJvZmlsZSUyMHdpdGglMjBjbGVhbiUyMGxheW91dCUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwwfDB8fHwxNzY2ODQ1ODA3fDA&ixlib=rb-4.1.0&q=85",
      attribution: "Pankaj Patel on Unsplash"
    },
    {
      id: 2,
      category: "WEB DESIGN",
      title: "Web Design for fintech payment solutions.",
      image: "https://images.unsplash.com/photo-1726066012801-14d892021339?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxOHx8RmludGVjaCUyMHBheW1lbnQlMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXAlMjB3aXRoJTIwbW9kZXJuJTIwVUklMjBkZXNpZ24lMjBtb2JpbGUlMjBpbnRlcmZhY2UlMjBmaW50ZWNofGVufDB8MXx8fDE3NjY4NDU4MDZ8MA&ixlib=rb-4.1.0&q=85",
      attribution: "SumUp on Unsplash"
    },
    {
      id: 3,
      category: "WEB DESIGN",
      title: "Minimal Agency website for startups business.",
      image: "https://images.pexels.com/photos/4134791/pexels-photo-4134791.jpeg",
      attribution: "Andrew Neel on Pexels"
    }
  ];

  return (
    <section className="py-20 px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Elements */}
        {/* Dot grid pattern top left */}
        <div className="absolute top-16 left-20 grid grid-cols-5 gap-2 opacity-40">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
          ))}
        </div>

        {/* Animated icon top center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="h-3 w-3 bg-black rounded-full animate-pulse"></div>
            <div className="absolute inset-0 h-3 w-3 bg-black rounded-full animate-ping opacity-30"></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-7xl font-bold mb-6 bbh-bartle-regular">PROJECTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I build projects that solve real problems and reflect production-level thinking — from system design and data modeling to performance, scalability, and user experience. Each project is treated as a product, not a demo, with deliberate technical trade-offs and continuous iteration.
        </p>
        </div>

        {/* Projects Horizontal Cards */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              <div className={`grid gap-12 items-center ${
                index % 2 === 1 ? 'direction-rtl' : ''
              }`} style={{ gridTemplateColumns: index % 2 === 1 ? '2fr 1fr' : '1fr 2fr' }}>
                {/* Project Image */}
                <div className={`aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg ${
                  index % 2 === 1 ? 'order-2' : 'order-1'
                }`}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.attribution}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className={`p-8 flex flex-col justify-center ${
                  index % 2 === 1 ? 'order-1' : 'order-2'
                }`}>
                  {/* Category Badge */}
                  <div className="bg-black outfit text-white px-6 py-2 rounded-full text-xs font-medium inline-block mb-6 w-fit">
                    {project.category}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-4xl outfit mb-8 leading-tight">
                    {project.title}
                  </h3>

                  {/* See Details Link */}
                  <a 
                    href="#" 
                    className="inline-flex outfit items-center gap-2 text-lg font-medium border-b-2 border-black pb-1 hover:gap-4 transition-all w-fit"
                  >
                    <span>See Details</span>
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;