import { useState } from "react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      src: "/logo-full.png",
      alt: "Autumnwood Designs - Live Website Example",
      title: "Autumnwood Designs (Current Site)",
      description: "Full-stack React website with promotional campaigns, calculator, and email integration - Example of our web development skills",
      isCurrentSite: true
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Modern e-commerce website design",
      title: "E-commerce Platform",
      description: "Modern online store design"
    },
    {
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Creative agency portfolio website",
      title: "Creative Agency",
      description: "Portfolio showcase website"
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Restaurant brand identity design",
      title: "Restaurant Branding",
      description: "Complete brand identity"
    },
    {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Tech startup mobile app UI design",
      title: "Mobile App Design",
      description: "User interface design"
    },
    {
      src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Wellness brand logo and packaging design",
      title: "Wellness Brand",
      description: "Logo and packaging design"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      alt: "Professional services website",
      title: "Professional Services",
      description: "Corporate website design"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Our <span className="font-semibold">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses create stunning digital experiences and memorable brand identities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`group cursor-pointer ${item.isCurrentSite ? 'md:col-span-2 lg:col-span-1' : ''}`} onClick={() => setSelectedImage(item.src)}>
              <div className={`relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 ${item.isCurrentSite ? 'ring-2 ring-ocean-blue shadow-ocean-blue/20' : ''}`}>
                {item.isCurrentSite && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-ocean-blue to-deep-blue text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      🌟 Live Example
                    </div>
                  </div>
                )}
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${item.isCurrentSite ? 'h-80 object-contain bg-gradient-to-br from-powder-blue/20 to-sky-blue/20' : 'h-64 object-cover'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                    {item.isCurrentSite && (
                      <div className="mt-2 text-xs text-cyan-300">
                        ✓ You're experiencing this live website right now
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple inline lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] mx-4">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-warm-blue transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="" 
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
