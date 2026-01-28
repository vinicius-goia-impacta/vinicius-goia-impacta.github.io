import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Guarantee from "@/components/landing/Guarantee";
import ContactForm from "@/components/landing/ContactForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <HowItWorks />
        <Services />
        <Pricing />
        <FAQ />
        <Guarantee />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
