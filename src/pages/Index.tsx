import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { NotasRegistradas } from "@/components/NotasRegistradas";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [currentView, setCurrentView] = useState("inicio");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onNavigate={setCurrentView} />
        {currentView === "notas" ? <NotasRegistradas /> : <MainContent />}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
