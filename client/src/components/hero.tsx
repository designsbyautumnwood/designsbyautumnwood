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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-bounce-slow mb-8 flex justify-center">
          <img src="/attached_assets/image_1752016256180.png" alt="Autumnwood Designs" className="h-32 w-auto" />
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-light text-charcoal mb-6">
          Autumnwood<br />
          <span className="font-semibold">Designs</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your Brand, Beautifully Built.
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
          Freelance creative studio specializing in website design, logo creation, and brand naming that brings your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection('contact')} className="bg-warm-blue text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105">
            Get a Quote
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-lg text-lg font-medium hover:bg-charcoal hover:text-white transition-all">
            View Portfolio
          </button>
        </div>
      </div>
    </header>
  );
}
