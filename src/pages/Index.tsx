import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VisionMissionValues />
      <Products />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
