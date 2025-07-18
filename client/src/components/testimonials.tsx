import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Bakery",
      text: "Autumnwood Designs transformed our online presence! Our website now ranks #1 on Google for 'bakery near me' and we've seen a 300% increase in online orders. Their SEO expertise is incredible.",
      rating: 5,
      location: "Austin, TX"
    },
    {
      name: "Michael Chen",
      business: "Chen Legal Services",
      text: "The professional logo and website design exceeded our expectations. Within 2 months, we started getting 5x more client inquiries. The advanced SEO optimization really works!",
      rating: 5,
      location: "San Francisco, CA"
    },
    {
      name: "Emma Rodriguez",
      business: "Fit Life Coaching",
      text: "From brand naming to website design, everything was perfect. My website loads super fast and looks amazing on mobile. I'm getting clients daily now thanks to their SEO work.",
      rating: 5,
      location: "Miami, FL"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sky-blue/5 via-ocean-blue/5 to-deep-blue/5 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Client <span className="font-semibold text-ocean-blue">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our advanced SEO optimization and professional design services have helped businesses grow their online presence and attract more customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-ocean-blue/20" />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-charcoal text-lg">{testimonial.name}</div>
                <div className="text-ocean-blue font-medium">{testimonial.business}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                <div className="text-gray-700">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-700">First Page Google Rankings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}