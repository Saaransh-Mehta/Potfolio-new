const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "FRONTEND INTERN",
      company: "Shubpy Solutions PVT LTD",
      duration: "6 MONTHS",
      dark: true
    },
    {
      id: 2,
      title: "FULL STACK ENGINEER",
      company: "UNIFIED MENTOR PVT LTD",
      duration: "1 MONTH",
      dark: false
    },
    {
      id: 3,
      title: "FULL STACK DEVELOPER",
      company: "JOURNIM GLOBAL PVT LTD - INDIA",
      duration: "Current",
      dark: false
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Decorative Elements */}
        {/* Animated pulsing dot at top center */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="h-3 w-3 bg-black rounded-full animate-pulse"></div>
            <div className="absolute inset-0 h-3 w-3 bg-black rounded-full animate-ping opacity-30"></div>
          </div>
        </div>

        {/* Diagonal lines top right */}
        <div className="absolute top-24 right-32 w-24 h-24">
          <div className="absolute rotate-45 w-20 h-0.5 bg-black"></div>
          <div className="absolute rotate-45 w-20 h-0.5 bg-black top-2 left-1"></div>
          <div className="absolute rotate-45 w-20 h-0.5 bg-black top-4 left-2"></div>
          <div className="absolute rotate-45 w-20 h-0.5 bg-black top-6 left-3"></div>
        </div>

        {/* Circular rings bottom left */}
        <div className="absolute bottom-32 left-16">
          <div className="w-20 h-20 border-2 border-black rounded-full opacity-20"></div>
          <div className="absolute top-2 left-2 w-16 h-16 border-2 border-black rounded-full opacity-30"></div>
          <div className="absolute top-4 left-4 w-12 h-12 border-2 border-black rounded-full opacity-40"></div>
        </div>

        {/* Floating dots pattern - top left */}
        <div className="absolute top-40 left-20 grid grid-cols-3 gap-3 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
          ))}
        </div>

        {/* Abstract curved line - bottom right */}
        <div className="absolute bottom-20 right-24">
          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
            <path
              d="M10 50 Q 30 10, 50 30 T 90 50"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Zigzag pattern - middle left */}
        <div className="absolute top-1/2 left-8 opacity-20">
          <svg width="60" height="80" viewBox="0 0 60 80">
            <polyline
              points="10,10 30,30 10,50 30,70"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-6xl font-bold mb-6 bbh-bartle-regular">EXPERIENCE</h2>
          <p className="text-gray-600 max-w-2xl outfit mx-auto">
My experience lies at the intersection of engineering and product thinking. I don’t just build features — I design systems that scale, prioritize user experience, and align technical decisions with long-term product vision.          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-5 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`${
                exp.dark
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-200'
              } p-8 flex items-center justify-between hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center gap-6">
                {/* Number Badge */}
                <div className={`${
                  exp.dark ? 'bg-white text-black' : 'bg-black text-white'
                } w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                  {exp.id}
                </div>

                {/* Job Details */}
                <div>
                  <h3 className="text-2xl font-bold outfit mb-1">{exp.title}</h3>
                  <p className={`text-sm outfit ${exp.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-4">
                <div className={`h-12 w-px ${exp.dark ? 'bg-white' : 'bg-gray-300'}`}></div>
                <div className="text-sm outfit font-medium uppercase tracking-wide">
                  JOB DURATION - <span className="font-bold outfit">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
