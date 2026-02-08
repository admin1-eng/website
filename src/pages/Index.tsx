import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestSermonsSpotlight from "@/components/LatestSermonsSpotlight";
import SermonsSection from "@/components/SermonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LatestSermonsSpotlight />
      <SermonsSection />
      <Footer />
    </div>
  );
};

export default Index;
