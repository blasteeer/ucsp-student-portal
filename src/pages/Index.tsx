import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { QuickActions } from "@/components/QuickActions";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Portal de Servicios | Universidad Católica San Pablo</title>
        <meta
          name="description"
          content="Portal de servicios estudiantiles de la Universidad Católica San Pablo. Accede a trámites académicos, inscripción a eventos, consulta de notas y más."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <QuickActions />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
