import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img src="/logo-full.png" alt="Autumnwood Designs" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-4">
              Professional website design, logo creation, and brand naming services with advanced SEO optimization for small businesses and startups.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-ocean-blue transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-blue">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-ocean-blue transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-deep-blue transition-colors">Logo Creation</a></li>
              <li><a href="#services" className="hover:text-teal-blue transition-colors">Brand Naming</a></li>
              <li><a href="#services" className="hover:text-cyan-blue transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-royal-blue transition-colors">Website Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-powder-blue">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:designsbyautumnwood@gmail.com" className="hover:text-ocean-blue transition-colors">
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
