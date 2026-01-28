const steps = [
  {
    number: "01",
    title: "Diagnóstico Executivo",
    description: "Sessão estratégica para entender seu contexto, mapeando oportunidades reais de IA e eliminando projetos que não entregariam valor.",
    duration: "1-2 semanas",
  },
  {
    number: "02",
    title: "Escopo Blindado",
    description: "Definição precisa de entregas, cronograma e métricas de sucesso. Você sabe exatamente o que vai receber antes de começar.",
    duration: "1 semana",
  },
  {
    number: "03",
    title: "Desenvolvimento Ágil",
    description: "Sprints quinzenais com demonstrações executivas. Visibilidade total do progresso e ajustes rápidos de rota quando necessário.",
    duration: "8-16 semanas",
  },
  {
    number: "04",
    title: "Deploy & Governança",
    description: "Implantação em produção com documentação completa, treinamento da equipe e plano de manutenção para operação contínua.",
    duration: "2-4 semanas",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Do conceito à produção, sem surpresas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado que elimina incertezas e garante entregas no prazo acordado.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              
              <div className="glass-card p-6 ml-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-primary font-mono text-sm">{step.number}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
