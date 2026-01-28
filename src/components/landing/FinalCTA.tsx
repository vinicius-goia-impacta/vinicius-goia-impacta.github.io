import { Target } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-display text-foreground mb-6 text-balance">
            Pare de arriscar sua reputação com projetos que não saem do piloto.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Converse com um consultor sênior e descubra se a Natural Engines é a parceria certa para transformar suas iniciativas de IA em resultados concretos.
          </p>
          
          <a href="#contato" className="btn-primary text-lg px-10 py-5">
            <Target className="w-5 h-5 mr-2" />
            Reduzir risco com IA agora
          </a>
          
          <p className="text-sm text-muted-foreground mt-6">
            Diagnóstico gratuito • Resposta em 24h • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
