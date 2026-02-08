import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VisitUs = () => {
  return (
    <div className="min-h-screen">
      <Header variant="solid" />
      <main className="container mx-auto px-6 pt-12 pb-16">
        <h1 className="text-4xl font-bold mb-8">Visit Us</h1>
        <p className="text-lg text-muted-foreground">
          Find our location and service times.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default VisitUs;
