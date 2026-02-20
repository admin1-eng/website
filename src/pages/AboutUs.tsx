import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveTeamSection from "@/components/InteractiveTeamSection";
import pastorsFamily from "@/assets/pastors-family-new.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#E5DDD5]">
      <Header variant="solid" />
      
      {/* Meet Our Pastors Section */}
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
              <span className="font-normal">MEET</span>{" "}
              <span className="font-normal">OUR PASTORS</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Pastors Carlos and Cynthia Ramirez are passionate about making God's truth accessible to everyone, and have a heart for educating people to embrace God's love.
            </p>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              They're serving in ministry with their family – Jose, Jarius, and Sajhara – proving that love, truth, community, and justice aren't just Sunday values, they're everyday ones. Their mission for GVM? Welcoming you exactly as you are, creating genuine community, and loving people the way Jesus did – radically and without hesitation.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold">
              You belong here.
            </p>
          </div>
          
          <div>
            <img 
              src={pastorsFamily} 
              alt="Pastors Carlos and Cynthia Ramirez with their family" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Building Together Section */}
      <section className="bg-[#E5DDD5] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-14 md:mb-16">
            BUILDING TOGETHER
          </h2>
          
          <div className="mb-20 md:mb-24">
            <InteractiveTeamSection />
          </div>

          <h3 className="text-4xl md:text-5xl font-normal mb-14 md:mb-16">
            WITH THIS CALL
          </h3>

          <div className="grid md:grid-cols-4 gap-10 md:gap-12">
            {/* Mission */}
            <div>
              <h4 className="text-xl font-bold mb-5 pb-3 border-b-2 border-black">
                MISSION
              </h4>
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                EDUCATE PEOPLE TO EMBRACE AND SHARE GOD'S LOVE
              </p>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-xl font-bold mb-5 pb-3 border-b-2 border-black">
                VALUES
              </h4>
              <p className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                LOVE.
              </p>
              <p className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                TRUTH.
              </p>
              <p className="text-2xl md:text-3xl font-bold leading-tight text-[#D4AF37] mb-3">
                COMMUNITY.
              </p>
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                JUSTICE.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h4 className="text-xl font-bold mb-5 pb-3 border-b-2 border-black">
                VISION
              </h4>
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                TO HELP YOU BUILD AN UNWAVERING RELATIONSHIP WITH GOD, AND ONE ANOTHER.
              </p>
            </div>

            {/* Beliefs */}
            <div>
              <h4 className="text-xl font-bold mb-5 pb-3 border-b-2 border-black">
                BELIEFS
              </h4>
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                TRINITY<br />
                SALVATION<br />
                RESURRECTION<br />
                SECOND COMING<br />
                SANCTIFICATION<br />
                BAPTISM IN WATER<br />
                COMMUNION<br />
                HOLY SPIRIT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Through This Vision Section */}
      <section className="bg-[#E5DDD5] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-normal mb-12">
            THROUGH THIS VISION
          </h2>
          
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/kEOC4Nb38VY"
                title="Through This Vision - Build Different 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-xl md:text-2xl mt-8 text-muted-foreground">
              Interested in inviting our ministry team?{" "}
              <a 
                href="https://godsvoiceministries.ccbchurch.com/goto/forms/36/responses/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/50 hover:decoration-primary transition-all duration-200 cursor-pointer"
              >
                Submit your request here.
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
