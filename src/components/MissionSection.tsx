const MissionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Missão</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="healing-card text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-6xl mb-8 text-primary/30">❋</div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic space-y-6">
              <p>
                "Minha missão é cultivar o <strong className="text-primary not-italic">autocuidado</strong> e o <strong className="text-primary not-italic">olhar compassivo</strong> para minha própria interioridade - acolhendo medos, ansiedades, tristezas, mágoas e até mesmo a arrogância."
              </p>
              
              <p>
                "Acredito que a <strong className="text-primary not-italic">verdadeira luz</strong> emerge quando nos permitimos lapidar com amor e paciência."
              </p>
              
              <p>
                "Meu trabalho como terapeuta <strong className="text-primary not-italic">Aura Master</strong> e <strong className="text-primary not-italic">Fitoenergética</strong> é uma extensão natural dessa jornada de autoconhecimento, pois somente quando caminhamos em direção ao nosso próprio equilíbrio podemos genuinamente acompanhar outros nessa mesma transformação."
              </p>
            </blockquote>

            <div className="pt-8">
              <div className="h-px w-32 bg-primary/50 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;