import React from "react";
import meetCoffee from "@/assets/meet-us-coffee.jpg";
import smallGroup from "@/assets/small-group.jpg";
import readScripture from "@/assets/read-scripture.jpg";
import instagram from "@/assets/instagram.jpg";
import serveCommunity from "@/assets/serve-community-grilling.png";
import worshipMusic from "@/assets/worship-music.jpg";

const SermonsSection = () => {
  const cards = [
    {
      id: 1,
      title: "CONNECT WITH US",
      image: meetCoffee,
      link: "https://godsvoiceministries.ccbchurch.com/goto/forms/6/responses/new",
      external: true,
    },
    {
      id: 2,
      title: "JOIN A CIRCLE",
      image: smallGroup,
      link: "/get-the-app",
    },
    {
      id: 3,
      title: "READ SCRIPTURE WITH US",
      image: readScripture,
      link: "https://www.bible.com/organizations/8a527f1b-08ce-4cea-828a-5c1004d4d77e?utm_source=yvapp&utm_medium=share&utm_content=partner-page",
      external: true,
    },
    {
      id: 4,
      title: "SEE WHAT WE'RE UP TO ON INSTAGRAM",
      image: instagram,
      link: "https://www.instagram.com/godsvoiceministries/",
      external: true,
    },
    {
      id: 5,
      title: "SEE HOW WE SERVE OUR COMMUNITY",
      image: serveCommunity,
      link: "/partner",
    },
    {
      id: 6,
      title: "SONGS FOR YOUR QUIET TIME",
      image: worshipMusic,
      link: "https://open.spotify.com/playlist/5KoNmEXL2H0s3asbf5yXmC",
      external: true,
    },
  ];

  return (
    <section className="pt-10 pb-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-16 w-full max-w-full px-5 md:px-6 box-border" style={{ fontFamily: "'LEMONMILK', sans-serif", overflowWrap: 'anywhere', wordBreak: 'normal', whiteSpace: 'normal' }}>
          WALKING ALONGSIDE YOU IN THE PURSUIT OF HOLINESS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center px-6 drop-shadow-lg" style={{ fontFamily: "'LEMONMILK', sans-serif" }}>
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;
