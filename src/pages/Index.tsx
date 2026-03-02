import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionsGrid from "@/components/SolutionsGrid";
import HowWeWork from "@/components/HowWeWork";
import FounderVision from "@/components/FounderVision";
import Industries from "@/components/Industries";
import WhyDigitallyU from "@/components/WhyDigitallyU";
import CTASection from "@/components/CTASection";
import StrategyForm from "@/components/StrategyForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionsGrid />
      <HowWeWork />
      <FounderVision />
      <Industries />
      <WhyDigitallyU />
      <CTASection />
      <StrategyForm />
      <Footer />
    </main>
  );
};

export default Index;
