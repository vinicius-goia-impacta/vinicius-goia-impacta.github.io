import { Zap, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Projetos que saem do piloto",
    description: "Metodologia comprovada para levar iniciativas de IA do conceito à produção, com marcos claros e entregáveis mensuráveis.",
  },
  {
    icon: Shield,
    title: "Redução de risco político",
    description: "Governança transparente e documentação robusta que protegem sua reputação e facilitam a comunicação com stakeholders.",
  },
  {
    icon: Users,
    title: "Parceria sênior de verdade",
    description: "Consultores experientes que entendem o contexto corporativo e falam a linguagem do negócio, não apenas tecnologia.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Por que líderes escolhem a Natural Engines
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entregamos previsibilidade e clareza para quem não tem tempo a perder com experimentação sem compromisso.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
