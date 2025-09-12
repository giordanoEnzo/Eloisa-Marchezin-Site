const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Sobre a Profissional</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="healing-card space-y-8 text-lg leading-relaxed">
          <div className="space-y-6">
            <p>
              Sou <strong className="text-primary">Eloísa Marchezin</strong>, e durante 28 anos dediquei minha vida ao cuidado e bem-estar das pessoas no salão de beleza e estética Maria Bonita, onde atuei como manicure, esteticista, depiladora e cabeleireira.
            </p>

            <div className="border-l-4 border-primary pl-6 bg-secondary/30 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Minha Transformação</h3>
              <p>
                Após quase três décadas de trabalho, desenvolvi diversas dores crônicas que impactavam significativamente minha qualidade de vida: dedos e joelhos inchados, dores intensas na planta dos pés que pareciam agulhas, lombalgia e enxaquecas constantes.
              </p>
              <p className="mt-4">
                Foi então que <strong>Bruno Gimenez</strong> e <strong>Patricia Cândido</strong>, da escola Luz da Serra em Nova Petrópolis (região sul), me convidaram para uma jornada que transformaria completamente minha vida: o estudo da energia das plantas.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 bg-secondary/30 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">O Despertar para a Cura Natural</h3>
              <p>
                Comecei a aplicar os métodos da <strong>Fitoenergética</strong> em todas as minhas dores. O resultado foi surpreendente: em apenas 10 meses, obtive uma melhora de quase 100%. Hoje vivo completamente livre das dores que me acompanhavam há anos.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 bg-secondary/30 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Expandindo os Horizontes</h3>
              <p>
                Posteriormente, fui convidada para o curso de <strong>Aura Master</strong>, uma técnica que trabalha com energia através dos sentimentos, pensamentos e emoções. O resultado foi transformador: alcançei 100% de saúde e bem-estar.
              </p>
            </div>

            <div className="text-center bg-primary/10 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Minha Missão Atual</h3>
              <p className="text-xl">
                Hoje trabalho com <strong>Aura Master</strong> e <strong>Fitoenergética</strong>, pois compreendi que posso ajudar outras pessoas a encontrarem o mesmo caminho de cura e equilíbrio que encontrei. Minha experiência pessoal me mostrou o poder dessas terapias, e agora dedico minha vida a compartilhar esses conhecimentos com quem busca uma vida mais saudável e harmoniosa.
              </p>
              <p className="text-2xl font-light mt-6 text-primary italic">
                "Transformei minha dor em propósito, e meu propósito é ajudar você a transformar sua vida."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;