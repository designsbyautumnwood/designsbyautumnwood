import { Monitor, Heart, FileText } from "lucide-react";

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      description: "Custom, responsive websites built to impress and convert. We create modern, user-friendly designs that work seamlessly across all devices.",
      features: [
        "Responsive Mobile Design",
        "Advanced SEO Optimization",
        "Performance Optimization",
        "Content Management"
      ]
    },
    {
      icon: Heart,
      title: "Logo Creation",
      description: "Unique logos that capture the essence of your brand. We design memorable marks that communicate your values and connect with your audience.",
      features: [
        "Custom Logo Design",
        "Brand Guidelines",
        "Multiple Format Delivery",
        "Unlimited Revisions"
      ]
    },
    {
      icon: FileText,
      title: "Brand Naming",
      description: "Memorable business names with market-ready appeal. We help you find the perfect name that resonates with your target audience and sets you apart.",
      features: [
        "Name Generation",
        "Domain Availability",
        "Trademark Research",
        "Brand Strategy"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-ice-blue/10 via-powder-blue/10 to-sky-blue/10 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Website Design, Logo & Brand Naming <span className="font-semibold text-ocean-blue">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional web design services, custom logo creation, and strategic brand naming for small businesses and startups. Get a free quote today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = [
              { bg: 'bg-gradient-ocean', icon: 'text-white', accent: 'bg-sky-blue' },
              { bg: 'bg-gradient-sky', icon: 'text-white', accent: 'bg-teal-blue' },
              { bg: 'bg-gradient-deep', icon: 'text-white', accent: 'bg-ocean-blue' }
            ];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                onClick={() => scrollToSection('contact')}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-2 border-transparent hover:border-ocean-blue/20 cursor-pointer"
              >
                <div className={`w-16 h-16 ${color.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className={`w-8 h-8 ${color.icon}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-charcoal group-hover:text-ocean-blue transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className={`w-2 h-2 ${color.accent} rounded-full mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
