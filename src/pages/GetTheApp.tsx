import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appQrCode from "@/assets/app-qr-code.png";
import appPhoneMockup from "@/assets/app-phone-mockup.png";

const GetTheApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="solid" />
      
      <main className="flex-1 bg-[#E5DDD5] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 max-w-7xl mx-auto">
            {/* Phone Mockup - Left Side */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={appPhoneMockup} 
                alt="God's Voice Ministries App" 
                className="h-[400px] md:h-[480px] lg:h-[560px] w-auto object-contain"
              />
            </div>

            {/* Arrow */}
            <div className="hidden md:block flex-shrink-0">
              <svg className="w-32 h-12" viewBox="0 0 120 40" fill="none">
                <path d="M5 20 H95 M95 20 L80 10 M95 20 L80 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* QR Code and Text - Right Side */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">
                Stay Connected By<br />Downloading Our App
              </h1>
              
              <div className="mb-6">
                <img 
                  src={appQrCode} 
                  alt="Download App QR Code" 
                  className="h-[280px] md:h-[320px] lg:h-[340px] w-auto border-4 border-black"
                />
              </div>
              
              <p className="text-lg text-gray-700">
                Available in iOS and Android
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetTheApp;
