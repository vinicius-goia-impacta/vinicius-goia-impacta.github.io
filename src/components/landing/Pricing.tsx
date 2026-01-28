import { Check } from "lucide-react";

const features = [
  "Diagnóstico executivo incluso",
  "Escopo documentado e aprovado",
  "Sprints quinzenais com demos",
  "Código-fonte e documentação",
  "Treinamento da equipe interna",
  "Suporte pós-deploy por 90 dias",
];

const Pricing = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Investimento transparente
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos sob medida com precificação clara desde o primeiro dia.
          </p>
        </div>
        
        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="pricing-card">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-2">
                Projeto Completo
              </h3>
              <p className="text-muted-foreground text-sm">
                Do diagnóstico à produção
              </p>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-light text-foreground mb-2">
                Sob consulta
              </div>
              <p className="text-sm text-muted-foreground">
                Precificação personalizada após diagnóstico
              </p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="#contato" className="btn-primary w-full">
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
