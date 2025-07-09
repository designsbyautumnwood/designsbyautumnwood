export default function Hero() {
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
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cool opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-deep-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-royal-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-teal-blue rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex justify-center">
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-gradient-ocean bg-clip-text tracking-wider animate-pulse">
            AD
          </div>
        </div>
        <div className="animate-bounce-slow mb-0 flex justify-center">
          <img src="/logo-full.png" alt="Autumnwood Designs" className="w-[400px] sm:w-[480px] md:w-[520px] h-auto max-w-full" />
        </div>
        <h1 className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Professional Website Design, Logo Creation & Brand Naming Services
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
          Get a custom website design, professional logo, and memorable brand name for your business. Free consultation and competitive pricing for small businesses and startups.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection('contact')} className="bg-gradient-ocean text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-deep-blue transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get a Quote
          </button>
          <button onClick={() => scrollToSection('services')} className="bg-gradient-sky text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-ocean-blue transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Services
          </button>
        </div>
      </div>
    </header>
  );
}
