import { useState } from 'react';

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Mobile App']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const services = [
    'Mobile App',
    'Website Design',
    'Branding',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, services: selectedServices });
  };

  return (
    <section className="py-20 px-8 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 right-0 grid grid-cols-5 gap-2 opacity-40">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-6xl font-light mb-6">
            <span className="text-gray-400 outfit">Say Hi!</span>{' '}
            <span className="font-bold outfit">and tell me about</span>
          </h2>
          
          {/* Arrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <svg className="w-32 h-12" viewBox="0 0 120 40" fill="none">
              <path 
                d="M10 20 Q 40 10, 90 20" 
                stroke="black" 
                strokeWidth="2" 
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="black" />
                </marker>
              </defs>
            </svg>
            <h3 className="text-6xl font-bold outfit">your idea</h3>
          </div>

          <p className="text-gray-600 text-lg outfit">
            Have a nice works? reach out and let's chat.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name and Email Row */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm outfit font-medium mb-3">
                Name:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Hello..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b-2 outfit border-gray-300 pb-3 focus:border-black outline-none transition-colors text-gray-600 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm outfit font-medium mb-3">
                Email:<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Where can I reply"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b-2 border-gray-300 outfit pb-3 focus:border-black outline-none transition-colors text-gray-600 placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm  outfit font-medium mb-3">
              Company name
            </label>
            <input
              type="text"
              placeholder="Your company or website?"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full border-b-2 outfit border-gray-300 pb-3 focus:border-black outline-none transition-colors text-gray-600 placeholder-gray-400"
            />
          </div>

          {/* Services Selection */}
          <div>
            <label className="block outfit text-sm font-medium mb-4">
              What's in your mind?<span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    selectedServices.includes(service)
                      ? 'border-black bg-white text-black'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-end pt-6 relative">
            {/* Decorative arrow */}
            <div className="absolute -top-4 right-16">
              <svg className="w-16 h-16" viewBox="0 0 60 60">
                <path d="M10 50 L50 10" stroke="black" strokeWidth="2" />
                <path d="M15 48 L48 15" stroke="black" strokeWidth="2" />
              </svg>
            </div>

            <button
              type="submit"
              className="bg-black outfit text-white px-10 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Send Me
            </button>
            <p className="text-gray-500 outfit text-sm mt-4">
              I'll must get back to you within 24 hours
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
