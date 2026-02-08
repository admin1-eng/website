import React, { useState, useEffect, useRef } from "react";
import teamPhoto from "@/assets/team-photo.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  blurb: string;
  dotPosition: { top: string; left: string };
  nameBoxPosition: { top: string; left: string };
  blurbPosition: { top: string; left: string };
  lineToName: { height: string; direction: "up" | "down" };
  lineToBlurb: { height: string };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ps. Carlos Ramirez, MAT",
    role: "Senior Pastor",
    blurb: "Pizza is always the answer (and the question)",
    dotPosition: { top: "58%", left: "8%" },
    nameBoxPosition: { top: "18%", left: "5%" },
    blurbPosition: { top: "68%", left: "2%" },
    lineToName: { height: "38%", direction: "up" },
    lineToBlurb: { height: "8%" },
  },
  {
    id: 2,
    name: "Ps. Cynthia Ramirez, M.Ed",
    role: "Connections",
    blurb: "Sunshine + sushi = my love language",
    dotPosition: { top: "78%", left: "26%" },
    nameBoxPosition: { top: "32%", left: "18%" },
    blurbPosition: { top: "88%", left: "18%" },
    lineToName: { height: "44%", direction: "up" },
    lineToBlurb: { height: "8%" },
  },
  {
    id: 3,
    name: "Ps. Lotus Graham, M.A.",
    role: "Youth / Young Adults",
    blurb: "You, me, and an oat cappuccino sounds perfect",
    dotPosition: { top: "62%", left: "48%" },
    nameBoxPosition: { top: "24%", left: "40%" },
    blurbPosition: { top: "72%", left: "36%" },
    lineToName: { height: "36%", direction: "up" },
    lineToBlurb: { height: "8%" },
  },
  {
    id: 4,
    name: "Ps. Adolfo Pichardo Jr., M.B.A",
    role: "Associate Pastor, Spiritual Formation",
    blurb: "Will trade sermon notes for cookies",
    dotPosition: { top: "62%", left: "72%" },
    nameBoxPosition: { top: "12%", left: "58%" },
    blurbPosition: { top: "72%", left: "62%" },
    lineToName: { height: "48%", direction: "up" },
    lineToBlurb: { height: "8%" },
  },
  {
    id: 5,
    name: "Christopher Graham, M.A., M.Ed",
    role: "Youth / Young Adults",
    blurb: "Ask me for a pic of my pup and the answer is always yes",
    dotPosition: { top: "50%", left: "92%" },
    nameBoxPosition: { top: "18%", left: "78%" },
    blurbPosition: { top: "60%", left: "72%" },
    lineToName: { height: "30%", direction: "up" },
    lineToBlurb: { height: "8%" },
  },
];

const InteractiveTeamSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveMember(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDotClick = (id: number) => {
    setActiveMember(activeMember === id ? null : id);
  };

  const handleDotHover = (id: number | null) => {
    if (!isMobile) {
      setActiveMember(id);
    }
  };

  return (
    <div ref={containerRef} className="w-full mx-auto">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Team Photo */}
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <img
            src={teamPhoto}
            alt="God's Voice Ministries Leadership Team"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 25%" }}
          />
        </div>
        
        {/* Team Members List */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => handleDotClick(member.id)}
              className={`bg-white rounded-lg px-3 py-2 shadow-md text-left transition-all duration-200 ${
                activeMember === member.id ? "ring-2 ring-black" : ""
              }`}
            >
              <p className="text-black font-semibold text-xs leading-tight">
                {member.name}
              </p>
              <p className="text-black/70 text-[10px] leading-tight mt-0.5">
                {member.role}
              </p>
              {activeMember === member.id && (
                <p className="text-black/60 text-[10px] leading-snug mt-2 pt-2 border-t border-gray-200">
                  {member.blurb}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "21/10" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#3d4a4f] rounded-lg overflow-hidden">
          <img
            src={teamPhoto}
            alt="God's Voice Ministries Leadership Team"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 25%" }}
          />
        </div>

        {/* Interactive Dots and Info Boxes */}
        {teamMembers.map((member) => (
          <React.Fragment key={member.id}>
            {/* Name Box - Always Visible */}
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                top: member.nameBoxPosition.top,
                left: member.nameBoxPosition.left,
              }}
            >
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg text-center whitespace-nowrap">
                <p className="text-black font-semibold text-sm md:text-base">
                  {member.name}
                </p>
                <p className="text-black text-xs md:text-sm">{member.role}</p>
              </div>
            </div>

            {/* Interactive Dot */}
            <button
              onClick={() => handleDotClick(member.id)}
              onMouseEnter={() => handleDotHover(member.id)}
              onMouseLeave={() => handleDotHover(null)}
              className={`absolute z-30 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-white/30 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                activeMember === member.id ? "bg-white/60 scale-110" : ""
              }`}
              style={{
                top: member.dotPosition.top,
                left: member.dotPosition.left,
                transform: "translate(-50%, -50%)",
              }}
              aria-label={`Learn more about ${member.name}`}
              aria-expanded={activeMember === member.id}
            >
              <span className="sr-only">
                Click to learn about {member.name}, {member.role}
              </span>
            </button>

            {/* Connector Line to Blurb Box (going down only) */}
            <div
              className={`absolute z-10 pointer-events-none transition-all duration-300 ease-out ${
                activeMember === member.id
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0"
              }`}
              style={{
                top: member.dotPosition.top,
                left: member.dotPosition.left,
                width: "2px",
                height: member.lineToBlurb.height,
                transformOrigin: "top center",
                transform: "translateX(-50%)",
              }}
            >
              <div className="w-full h-full bg-white rounded-full" />
            </div>

            {/* Blurb Box - Hover Only */}
            <div
              className={`absolute z-20 transition-all duration-300 ease-out pointer-events-none ${
                activeMember === member.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{
                top: member.blurbPosition.top,
                left: member.blurbPosition.left,
              }}
            >
              <div className="bg-white rounded-lg px-4 py-3 shadow-lg max-w-[200px] md:max-w-[240px]">
                <p className="text-black text-xs md:text-sm text-center leading-relaxed">
                  {member.blurb}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTeamSection;
