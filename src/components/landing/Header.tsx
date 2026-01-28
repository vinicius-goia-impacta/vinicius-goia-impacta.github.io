import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Natural Engines - Consultoria em Machine Learning" 
              className="h-8 md:h-10 w-auto"
              width={200}
              height={40}
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="btn-ghost">Benefícios</a>
            <a href="#como-funciona" className="btn-ghost">Processo</a>
            <a href="#faq" className="btn-ghost">FAQ</a>
          </nav>
          
          <a href="#contato" className="btn-primary text-sm py-3 px-6">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
