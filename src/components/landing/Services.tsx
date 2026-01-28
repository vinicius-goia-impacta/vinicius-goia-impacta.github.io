import visionImg from "@/assets/vision-computacional.jpg";
import mlImg from "@/assets/machine-learning.jpg";
import dataImg from "@/assets/data-science.jpg";

const services = [
  {
    image: visionImg,
    title: "Visão Computacional",
    description: "Inspeção de qualidade, contagem automatizada, detecção de anomalias. Modelos treinados para seu contexto industrial específico.",
    features: ["Detecção de defeitos", "OCR industrial", "Rastreamento de objetos"],
  },
  {
    image: mlImg,
    title: "Machine Learning",
    description: "Modelos preditivos e prescritivos que transformam dados históricos em decisões automatizadas e insights acionáveis.",
    features: ["Previsão de demanda", "Manutenção preditiva", "Scoring de risco"],
  },
  {
    image: dataImg,
    title: "Data Science",
    description: "Análise avançada de dados, dashboards executivos e pipelines robustos para operação de modelos em escala.",
    features: ["BI avançado", "MLOps", "Data governance"],
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Especialidades que geram resultado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Três décadas combinadas de experiência em projetos reais, não apenas pesquisa acadêmica.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
