import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva um projeto típico?",
    answer: "Depende da complexidade, mas a maioria dos projetos vai do diagnóstico à produção em 12 a 20 semanas. O importante é que você terá visibilidade do cronograma desde o primeiro dia, com marcos claros e entregas parciais ao longo do caminho.",
  },
  {
    question: "Vocês trabalham com qual tecnologia?",
    answer: "Somos agnósticos de tecnologia e escolhemos a melhor stack para cada caso: Python, TensorFlow, PyTorch, cloud providers variados. O critério é sempre o que vai funcionar melhor em produção no seu contexto, não preferência pessoal.",
  },
  {
    question: "O que diferencia vocês de outras consultorias?",
    answer: "Foco obsessivo em entregar projetos que funcionam em produção, não apenas provas de conceito. Trabalhamos com governança clara desde o início e mantemos comunicação direta com stakeholders, sem intermediários.",
  },
  {
    question: "Minha equipe vai precisar manter o sistema depois?",
    answer: "Entregamos com documentação completa e treinamento. Oferecemos também opção de suporte continuado. Nosso objetivo é deixar vocês autônomos, mas estaremos disponíveis se precisarem.",
  },
  {
    question: "E se o projeto não entregar o resultado esperado?",
    answer: "Por isso começamos com diagnóstico: identificamos riscos antes de assumir compromissos. Se durante o projeto identificarmos que os resultados não serão satisfatórios, ajustamos o escopo ou interrompemos com transparência total.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As dúvidas mais comuns de executivos que consideram investir em IA.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
