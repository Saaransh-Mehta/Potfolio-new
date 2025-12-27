import { Sparkle } from "lucide-react";

const SkillsMarquee = () => {
  const skills = [
    "FRONTEND",
    "BACKEND", 
    "PRODUCT DESIGN",
    "SYSTEM ARCHIETECTURE",
    "BRANDING"
  ];

  return (
    <div className="bg-black text-white py-6 overflow-hidden">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {/* Render skills multiple times for continuous scroll */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {skills.map((skill, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center px-8">
                <span className="text-2xl bbh-bartle-regular font-bold tracking-wider">{skill}</span>
                {/* <svg 
                  className="w-6 h-6 mx-8" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg> */}
                <Sparkle className="w-6 h-6 mx-8" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
