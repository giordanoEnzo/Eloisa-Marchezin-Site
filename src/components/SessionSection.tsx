const SessionSection = () => {
  return (
    <section id="sessao" className="py-20 px-4 section-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Como Funciona a Sessão</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="healing-card">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-primary rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Sessão de Aura Master</h3>
            </div>

            <div className="text-lg leading-relaxed space-y-6">
              <p>
                A sessão de <strong className="text-primary">Aura Master</strong> é um mergulho profundo na energia da pessoa, onde identifico e trabalho a limpeza de bloqueios energéticos, traumas emocionais, estados depressivos, distúrbios do sono e desequilíbrios que podem afetar até mesmo o apetite.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-secondary/20 rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Limpeza Energética</h4>
                  <p className="text-sm">Identificação e remoção de bloqueios energéticos</p>
                </div>

                <div className="text-center p-6 bg-secondary/20 rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Equilíbrio Mental</h4>
                  <p className="text-sm">Clareza mental e harmonia emocional</p>
                </div>

                <div className="text-center p-6 bg-secondary/20 rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Renovação</h4>
                  <p className="text-sm">Sensação renovada de bem-estar</p>
                </div>
              </div>

              <div className="text-center bg-primary/10 p-8 rounded-xl mt-8">
                <p className="text-xl font-light">
                  Através desse processo terapêutico, promovo maior <strong className="text-primary">equilíbrio energético</strong>, <strong className="text-primary">clareza mental</strong> e uma <strong className="text-primary">sensação renovada de bem-estar</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionSection;