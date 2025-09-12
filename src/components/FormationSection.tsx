const FormationSection = () => {
  return (
    <section className="py-20 px-4 section-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Formação</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="healing-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary">Aura Master</h3>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary">Fitoenergética</h3>
              </div>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <strong className="text-primary">Eloísa</strong> é formada em <strong>Aura Master</strong> e <strong>Fitoenergética</strong>, especializações que aplica diariamente para auxiliar pessoas no equilíbrio energético e no manejo emocional.
              </p>
              
              <p>
                Por meio dessas técnicas terapêuticas, ela utiliza as propriedades energéticas das plantas como ferramentas naturais de harmonização e bem-estar, promovendo o alinhamento entre <strong className="text-primary">corpo, mente e espírito</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;