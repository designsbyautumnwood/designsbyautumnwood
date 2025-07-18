import { ArrowRight, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Ready to <span className="font-semibold text-ocean-blue">Dominate Google</span> and Grow Your Business?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join 50+ successful businesses that have transformed their online presence with our advanced SEO optimization and professional design services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-charcoal">What You Get:</h3>
            <div className="space-y-4">
              {[
                "Advanced SEO optimization to rank #1 on Google",
                "Mobile-first responsive design that converts",
                "Professional logo and complete brand identity",
                "Google Analytics and conversion tracking setup",
                "Fast loading speeds for better user experience",
                "Ongoing support and maintenance options"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-ocean-blue/10 rounded-lg border border-ocean-blue/20">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-lg text-charcoal">Proven Results:</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-500">300%</div>
                  <div className="text-sm text-gray-600">Traffic Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">95%</div>
                  <div className="text-sm text-gray-600">Page 1 Rankings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-ocean-blue to-deep-blue text-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl font-bold mb-4 text-yellow-300">
                30%
              </div>
              <div className="text-2xl font-bold mb-2 text-white">OFF</div>
              <div className="text-lg text-blue-100 mb-6">
                Limited Time Offer<br/>
                First 5 Website Customers Only
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="text-yellow-300 font-medium">Don't miss out - Act now!</span>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
              >
                <span>Claim Your 30% Discount</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-blue-100 mt-4">
                No commitment required. Free consultation included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}