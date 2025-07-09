export default function About() {
  return (
    <section id="about" className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
              Professional Web Design & Brand Identity Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Autumnwood Designs is a professional freelance web design studio offering custom website design, logo creation, and brand naming services for small businesses and startups across the United States.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We specialize in creating responsive, SEO-optimized websites, memorable logo designs, and strategic brand naming that helps your business stand out online and attract more customers.
            </p>
            <div className="bg-gradient-to-r from-ocean-blue/10 to-deep-blue/10 border-l-4 border-ocean-blue p-6 rounded-lg mb-8">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-ocean-blue rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-charcoal">Live Example</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>You're currently viewing a live example of our web development skills!</strong> This website showcases our ability to create:
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Modern React-based architecture with TypeScript</li>
                <li>• Responsive design that works on all devices</li>
                <li>• Interactive pricing calculator with promotional campaigns</li>
                <li>• Working contact form with email integration</li>
                <li>• SEO-optimized structure for better search rankings</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-warm-blue mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-warm-blue mb-2">3</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-warm-blue mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800" 
              alt="Modern design workspace with computer and creative tools" 
              className="rounded-2xl shadow-2xl" 
            />
            <div className="absolute -bottom-6 -right-6 bg-warm-blue text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Ready to start?</div>
              <div className="text-blue-100">Let's create something amazing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
