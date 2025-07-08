import { Monitor, Heart, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      description: "Custom, responsive websites built to impress and convert. We create modern, user-friendly designs that work seamlessly across all devices.",
      features: [
        "Responsive Mobile Design",
        "SEO Optimization",
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
    <section id="services" className="py-24 bg-gray-50 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design solutions to help your business stand out and succeed in today's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-warm-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-warm-blue/20 transition-colors">
                <service.icon className="w-8 h-8 text-warm-blue" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-charcoal">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
