import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-primary-foreground mb-8 max-w-full mx-auto leading-tight whitespace-normal md:whitespace-nowrap px-5 md:px-0 break-words md:break-normal" style={{ fontFamily: "'LEMONMILK', sans-serif" }}>
          <span className="block">WHAT IF MY PURSUIT OF PURPOSE WAS</span>
          <span className="block">REALLY THE PURSUIT OF HIM?</span>
        </h1>
        
        <Button 
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 py-6 rounded-sm"
          onClick={() => {
            window.open('https://www.youtube.com/watch?v=Y5itSBiclVo', '_blank');
          }}
        >
          Meet Jesus
        </Button>
      </div>
      
    </section>
  );
};

export default Hero;
