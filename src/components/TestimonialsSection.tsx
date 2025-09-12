const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fábio",
      text: "Meu nome é Fábio e quero expressar minha profunda gratidão pelos benefícios que recebi ao praticar a meditação guiada Aura Master. Essa experiência tem me proporcionado momentos de equilíbrio genuíno, clareza mental e serenidade interior. A cada prática, sinto minha energia renovada e meu coração mais confiante. Esta jornada tem sido verdadeiramente transformadora, me ajudando a lidar melhor com os desafios do cotidiano, cultivar minha paz interior e fortalecer a conexão comigo mesmo. Recomendo a todos que buscam mais equilíbrio, harmonia e plenitude em suas vidas."
    },
    {
      name: "Caroline",
      text: "Olá, meu nome é Caroline. Depois de tanto ouvir sobre o Aura Master e os benefícios que traz para o corpo e a alma, decidi fazer duas sessões com a Eloísa. Senti uma diferença significativa na minha vida - não apenas física, mas principalmente mental. O trabalho me deu mais forças e clareza. Antes, eu não conseguia me concentrar nem terminar aquilo que me propunha fazer. Agora me sinto mais leve e consigo realizar minhas tarefas sem me sentir sobrecarregada. O Aura Master mudou e continua transformando minha vida de forma positiva."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Depoimentos</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">
            Experiências reais de transformação e cura
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="healing-card group">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {testimonial.name}
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute top-0 left-0 text-4xl text-primary/30 leading-none">
                    "
                  </div>
                  <blockquote className="pl-8 pr-4 pt-2 text-base leading-relaxed italic">
                    {testimonial.text}
                  </blockquote>
                  <div className="absolute bottom-0 right-0 text-4xl text-primary/30 leading-none transform rotate-180">
                    "
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary rounded-full opacity-80"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
              href="https://wa.me/5519981944688"
              target="_blank"
              rel="noopener noreferrer"
              className="healing-card inline-block cursor-pointer transition-transform hover:scale-105"
          >
            <p className="text-lg font-light">
              Pronto para sua própria transformação?
            </p>
            <p className="text-primary font-semibold mt-2">
              Entre em contato e inicie sua jornada de cura
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;