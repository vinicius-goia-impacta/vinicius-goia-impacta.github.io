const clients = [
  { name: "Empresa A", sector: "Indústria" },
  { name: "Empresa B", sector: "Varejo" },
  { name: "Empresa C", sector: "Financeiro" },
  { name: "Empresa D", sector: "Saúde" },
  { name: "Empresa E", sector: "Logística" },
];

const stats = [
  { value: "47+", label: "Projetos em Produção" },
  { value: "98%", label: "Taxa de Sucesso" },
  { value: "12", label: "Anos de Experiência" },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-light text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Clients Section */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Empresas que confiam na Natural Engines
          </p>
          
          <div className="logo-grid">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="glass-card px-6 py-4 flex flex-col items-center"
              >
                <span className="text-foreground font-medium">{client.name}</span>
                <span className="text-xs text-muted-foreground">{client.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
