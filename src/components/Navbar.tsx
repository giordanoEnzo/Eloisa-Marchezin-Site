import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import eloisalogo from "@/assets/eloisa-logo.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Início', action: scrollToTop },
    { name: 'Sobre', action: () => scrollToSection('sobre') },
    { name: 'Formação', action: () => scrollToSection('formacao') },
    { name: 'Missão', action: () => scrollToSection('missao') },
    { name: 'Sessão', action: () => scrollToSection('sessao') },
    { name: 'Depoimentos', action: () => scrollToSection('depoimentos') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 group"
          >
            <img
                src={eloisalogo}
                alt="Logo Eloísa Marchezin"
                className="w-8 h-8 rounded-full group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Eloísa Marchezin
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={handleContact}
              className="aura-button ml-4"
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-medium w-full text-left rounded-md"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 pt-2">
              <Button 
                onClick={handleContact}
                className="aura-button w-full"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;