import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img src="/logo-full.png" alt="Autumnwood Designs" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-4">
              Autumnwood Designs - Creating beautiful brands and digital experiences for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-warm-blue transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-blue transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-blue transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-warm-blue transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-warm-blue transition-colors">Logo Creation</a></li>
              <li><a href="#services" className="hover:text-warm-blue transition-colors">Brand Naming</a></li>
              <li><a href="#services" className="hover:text-warm-blue transition-colors">Brand Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:designsbyautumnwood@gmail.com" className="hover:text-warm-blue transition-colors">
                  designsbyautumnwood@gmail.com
                </a>
              </li>
              <li>United States</li>
              <li>Response within 24 hours</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Autumnwood Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
