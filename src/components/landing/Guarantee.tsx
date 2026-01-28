import { Shield } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Garantia de Transparência
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Se após o diagnóstico executivo você não estiver convencido do valor e viabilidade do projeto, não há nenhum compromisso. O diagnóstico é gratuito e você decide se quer prosseguir com total clareza sobre escopo, cronograma e investimento.
            </p>
            
            <div className="inline-flex items-center gap-2 text-sm text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Diagnóstico sem custo e sem compromisso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
