import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Target, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-gradient absolute inset-0" />
      </div>
      
      {/* Glow Effects */}
      <div className="glow-orb w-96 h-96 -top-48 -right-48" />
      <div className="glow-orb w-64 h-64 bottom-20 -left-32" />
      
      {/* Content */}
      <div className="relative z-10 section-container text-center pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 bg-primary/10 border border-primary/20 text-primary animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>Consultoria Sênior em IA & Data Science</span>
          </div>
          
          {/* Headline */}
          <h1 className="heading-display text-foreground mb-6 animate-slide-up text-balance">
            Escopo claro, governança e entrega real.{" "}
            <span className="text-gradient">
              Para quem precisa inovar sem colocar a própria reputação em risco.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up text-balance" style={{ animationDelay: "0.1s" }}>
            Tecnologia, entrega e responsabilidade. Transformamos demandas vagas de IA em produtos robustos em produção.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="#contato" className="btn-primary">
              <Target className="w-5 h-5 mr-2" />
              Reduzir risco com IA agora
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Ver como funciona
            </a>
          </div>
          
          {/* Quick Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Projetos que saem do piloto</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Escopo bem definido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Governança clara</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
