import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!lgpdAccepted) {
      toast.error("Por favor, aceite os termos de privacidade.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Solicitação enviada! Entraremos em contato em até 24h.");
      setFormData({ name: "", email: "", phone: "" });
      setLgpdAccepted(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="max-w-lg mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="heading-section text-foreground mb-4">
              Solicite seu diagnóstico
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário e um consultor sênior entrará em contato em até 24 horas.
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="form-label">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="form-input"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  E-mail corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="form-input"
                  placeholder="seu@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="lgpd"
                  checked={lgpdAccepted}
                  onChange={(e) => setLgpdAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-border bg-muted accent-primary cursor-pointer"
                />
                <label htmlFor="lgpd" className="text-sm text-muted-foreground cursor-pointer">
                  Concordo com o tratamento dos meus dados conforme a LGPD para fins de contato comercial.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
