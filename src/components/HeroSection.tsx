import { Button } from "@/components/ui/button";
import eloisaPortrait from "@/assets/eloisa-portrait.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light leading-tight">
                Eloísa Marchezin
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto md:mx-0 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
                Terapeuta Aura Master & Fitoenergética
              </h2>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Transformando dor em propósito, ajudando você a encontrar equilíbrio 
              energético e bem-estar através da sabedoria das plantas e da energia curativa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection('sobre')}
                className="aura-button"
              >
                Conheça Minha História
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('sessao')}
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Como Funciona a Sessão
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
              <img
                src={eloisaPortrait}
                alt="Eloísa - Terapeuta Aura Master"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;