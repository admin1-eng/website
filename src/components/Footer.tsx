import React from "react";
import gvmLogo from "@/assets/gvm-heartbeat-logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#2c3334] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-16">
          {/* LEFT BLOCK - Title at top, address at bottom */}
          <div className="min-w-0 flex flex-col md:max-w-xs">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-auto leading-tight break-words" style={{ fontFamily: "'LEMONMILK', sans-serif" }}>
              HEAR HIS VOICE<br />AND RESPOND.
            </h2>
            <div className="text-base text-white space-y-1 mt-16">
              <p>Sundays @ 11am</p>
              <p>1370 Plainfield Street</p>
              <p>Cranston, RI 02920</p>
            </div>
          </div>

          {/* RIGHT BLOCK - Three columns grouped together */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-[60px]" style={{ justifyContent: 'center' }}>
            {/* Contact Us */}
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-6 break-words">Contact Us</h3>
              <div className="space-y-3 flex flex-col items-start text-base">
                <a 
                  href="tel:+14014001463" 
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Call us at 401-400-1463"
                >
                  Phone
                </a>
                <a 
                  href="mailto:connect@gvmin.org" 
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Email us at connect@gvmin.org"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Partner With Us */}
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-6 break-words">Partner With Us</h3>
              <div className="space-y-3 flex flex-col items-start text-base">
                <a 
                  href="https://pushpay.com/g/gvmincranston" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Give
                </a>
                <a 
                  href="https://godsvoiceministries.ccbchurch.com/goto/forms/36/responses/new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Invite Our Team
                </a>
                <a 
                  href="https://godsvoiceministries.ccbchurch.com/goto/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  CCB Login
                </a>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-6 break-words">Stay Connected</h3>
              <div className="space-y-3 flex flex-col items-start text-base">
                <a 
                  href="https://godsvoiceministries.ccbchurch.com/goto/forms/6/responses/new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Connection Card
                </a>
                <a 
                  href="/get-the-app" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Get The App
                </a>
                <a 
                  href="https://instagram.com/godsvoiceministries" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.youtube.com/@godsvoiceministries0114" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Youtube
                </a>
                <a 
                  href="https://www.bible.com/organizations/8a527f1b-08ce-4cea-828a-5c1004d4d77e?utm_source=yvapp&utm_medium=share&utm_content=partner-page" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  YouVersion
                </a>
                <a 
                  href="https://facebook.com/godsvoiceministries" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-gray-600 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-white">
            © 2026 God's Voice Ministries | All rights reserved.
          </p>
          {/* Heartbeat logo */}
          <img 
            src={gvmLogo} 
            alt="Gods Voice Ministries" 
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
