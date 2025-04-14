
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
