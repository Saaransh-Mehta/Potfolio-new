const Services = () => {
  const services = [
    {
      id: 1,
      title: "CREATIVE\nFRONTEND\nDEVELOPMENT",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      dark: true
    },
    {
      id: 2,
      title: "SCALABLE\nBACKEND\nSYSTEMS",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l-3 3-3-3" />
        </svg>
      ),
      dark: false
    },
    {
      id: 3,
      title: "PRODUCT\nDESIGN &\nSTRATEGY",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      dark: false
    }
  ];

  return (
    <section className="min-h-screen py-16 px-8 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-20">
          {/* Social Links */}
          <div className="flex items-center gap-8">
            <div className="h-px bg-gray-300 w-20"></div>
            <a href="#" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
            <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.922.43.37.815 1.096.815 2.21 0 1.594-.014 2.878-.014 3.27 0 .323.216.7.825.58C20.565 22.295 24 17.796 24 12.5 24 5.87 18.63.5 12 .5z"
                        />
            </svg>

              <span className="uppercase bbh-bartle-regular tracking-wide">Github</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.11h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.73 2.63 4.73 6.05V24h-4v-7.7c0-1.84-.03-4.21-2.57-4.21-2.57 0-2.97 2-2.97 4.07V24h-4V8.5z"/>
            </svg>

              <span className="uppercase bbh-bartle-regular tracking-wide">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
            <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>

              <span className="uppercase bbh-bartle-regular tracking-wide">Instagram</span>
            </a>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Email */}
          <a href="mailto:infomadhur786@gmail.com" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="uppercase outfit tracking-wide">saaransh1621m@gmail.com</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Scroll Down Indicator */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
            <div className="writing-mode-vertical text-xs tracking-[0.3em] uppercase">
              Scroll Down
            </div>
            <button className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          <div className="ml-24">
            {/* Header Section */}
            <div className="mb-16">
                    <span className="text-sm uppercase tracking-wide font-semibold">My Services ?</span>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-px bg-black"></div>
                  </div>
                  <h2 className="text-4xl bbh-bartle-regular font-bold leading-tight">
                    WHAT I'M<br />OFFERING
                  </h2>
                </div>
              <p className="text-gray-600 outfit max-w-md">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </p>
                <button className="bg-black outfit  text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
                  All Service
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-3 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`${
                    service.dark 
                      ? 'bg-black text-white' 
                      : 'bg-white border-2 border-black text-black'
                  } p-10 aspect-square flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="mb-auto">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold outfit mb-6 whitespace-pre-line leading-tight">
                      {service.title}
                    </h3>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-sm uppercase tracking-wide hover:gap-3 transition-all"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
