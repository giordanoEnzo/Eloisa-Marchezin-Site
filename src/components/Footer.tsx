import harewareLogo from "@/assets/hareware-logo.png";
import eloisalogo from "@/assets/eloisa-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-gradient border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Eloísa Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                  src={eloisalogo}
                  alt="Logo Eloísa"
                  className="w-8 h-8 rounded-full"
              />
              <span className="font-serif text-xl font-semibold text-foreground">
                Eloísa
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Terapeuta especializada em Aura Master e Fitoenergética, 
              promovendo equilíbrio energético e bem-estar através da energia das plantas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Links Rápidos</h3>
            <nav className="space-y-2">
              {[
                { name: 'Sobre', id: 'sobre' },
                { name: 'Formação', id: 'formacao' },
                { name: 'Missão', id: 'missao' },
                { name: 'Como Funciona', id: 'sessao' },
                { name: 'Depoimentos', id: 'depoimentos' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                Entre em contato para agendar sua sessão de Aura Master e iniciar sua jornada de cura e equilíbrio.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">WhatsApp: (19) 98194-4688</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">eloisamarchezin1969@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © {currentYear} Eloísa - Terapeuta Aura Master. Todos os direitos reservados.
            </div>

            {/* Desenvolvido por */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Desenvolvido por</span>
              <a 
                href="https://hareware.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group"
              >
                <img 
                  src={harewareLogo} 
                  alt="Hareware Logo" 
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-semibold">Hareware</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;