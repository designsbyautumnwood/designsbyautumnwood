export default function Navigation() {
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
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo-symbol.png" alt="Autumnwood Designs" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-ocean-blue transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-deep-blue transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-blue transition-colors font-medium">Contact</button>
          </div>
          <button onClick={() => scrollToSection('contact')} className="bg-gradient-ocean text-white px-4 py-2 rounded-lg hover:bg-deep-blue transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
