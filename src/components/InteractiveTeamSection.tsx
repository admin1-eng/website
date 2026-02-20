import React, { useState, useEffect, useRef } from "react";
import teamPhoto from "@/assets/team-photo.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  blurb: string;
  dataId: string;
  dotPosition: { top: string; left: string };
  nameBoxPosition: { top: string; left: string };
  blurbPosition: { top: string; left: string };
  lineToName: { height: string; direction: "up" | "down" };
  lineToBlurb: { height: string };
  // Mobile overlay clip path for each person in the group photo
  mobileOverlay: { top: string; left: string; width: string; height: string };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ps. Carlos Ramirez, MAT",
    role: "Senior Pastor",
    blurb: "Pizza is always the answer (and the question)",
    dataId: "carlos",
    dotPosition: { top: "58%", left: "8%" },
    nameBoxPosition: { top: "18%", left: "5%" },
    blurbPosition: { top: "68%", left: "2%" },
    lineToName: { height: "38%", direction: "up" },
    lineToBlurb: { height: "8%" },
    mobileOverlay: { top: "15%", left: "0%", width: "22%", height: "80%" },
  },
  {
    id: 2,
    name: "Ps. Cynthia Ramirez, M.Ed",
    role: "Connections",
    blurb: "Sunshine + sushi = my love language",
    dataId: "cynthia",
    dotPosition: { top: "78%", left: "26%" },
    nameBoxPosition: { top: "32%", left: "18%" },
    blurbPosition: { top: "88%", left: "18%" },
    lineToName: { height: "44%", direction: "up" },
    lineToBlurb: { height: "8%" },
    mobileOverlay: { top: "10%", left: "20%", width: "22%", height: "85%" },
  },
  {
    id: 3,
    name: "Ps. Lotus Graham, M.A.",
    role: "Youth / Young Adults",
    blurb: "You, me, and an oat cappuccino sounds perfect",
    dataId: "lotus",
    dotPosition: { top: "55%", left: "53%" },
    nameBoxPosition: { top: "24%", left: "40%" },
    blurbPosition: { top: "72%", left: "36%" },
    lineToName: { height: "36%", direction: "up" },
    lineToBlurb: { height: "8%" },
    mobileOverlay: { top: "5%", left: "38%", width: "22%", height: "90%" },
  },
  {
    id: 4,
    name: "Ps. Adolfo Pichardo Jr., M.B.A",
    role: "Associate Pastor, Spiritual Formation",
    blurb: "Will trade sermon notes for cookies",
    dataId: "adolfo",
    dotPosition: { top: "62%", left: "72%" },
    nameBoxPosition: { top: "12%", left: "58%" },
    blurbPosition: { top: "72%", left: "62%" },
    lineToName: { height: "48%", direction: "up" },
    lineToBlurb: { height: "8%" },
    mobileOverlay: { top: "10%", left: "58%", width: "22%", height: "85%" },
  },
  {
    id: 5,
    name: "Christopher Graham, M.A., M.Ed",
    role: "Youth / Young Adults",
    blurb: "Ask me for a pic of my pup and the answer is always yes",
    dataId: "christopher",
    dotPosition: { top: "50%", left: "92%" },
    nameBoxPosition: { top: "18%", left: "78%" },
    blurbPosition: { top: "60%", left: "72%" },
    lineToName: { height: "30%", direction: "up" },
    lineToBlurb: { height: "8%" },
    mobileOverlay: { top: "10%", left: "78%", width: "22%", height: "85%" },
  },
];

const InteractiveTeamSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveMember(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDotClick = (id: number) => {
    setActiveMember(activeMember === id ? null : id);
    // On mobile, scroll image into better view
    if (isMobile && imageRef.current && activeMember !== id) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleDotHover = (id: number | null) => {
    if (!isMobile) setActiveMember(id);
  };

  return (
    <div ref={containerRef} className="w-full mx-auto">
      {/* Glow keyframes */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 4px rgba(255,255,255,0.9), 0 0 25px rgba(212,175,55,0.6), 0 0 50px rgba(212,175,55,0.35); }
          50% { box-shadow: 0 0 0 6px rgba(255,255,255,0.95), 0 0 35px rgba(212,175,55,0.75), 0 0 60px rgba(212,175,55,0.45); }
        }
      `}</style>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Team Photo with overlay regions */}
        <div
          ref={imageRef}
          className="relative w-full rounded-lg overflow-hidden bg-[#3d4a4f]"
          style={{ aspectRatio: "16/10" }}
        >
          <img
            src={teamPhoto}
            alt="God's Voice Ministries Leadership Team"
            className="w-full h-full object-cover object-center transition-all duration-300"
            style={{
              objectPosition: "center 25%",
              filter: activeMember ? "brightness(0.7)" : "brightness(1)",
            }}
          />

          {/* Individual person overlay regions */}
          {teamMembers.map((member) => {
            const isActive = activeMember === member.id;
            return (
              <div
                key={member.dataId}
                data-id={member.dataId}
                className="absolute transition-all duration-300 rounded-lg pointer-events-none"
                style={{
                  top: member.mobileOverlay.top,
                  left: member.mobileOverlay.left,
                  width: member.mobileOverlay.width,
                  height: member.mobileOverlay.height,
                  background: isActive
                    ? "radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)"
                    : "transparent",
                  boxShadow: isActive
                    ? "0 0 0 4px rgba(255,255,255,0.9), 0 0 25px rgba(212,175,55,0.6), 0 0 50px rgba(212,175,55,0.35)"
                    : "none",
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                  animation: isActive ? "pulseGlow 1.8s infinite ease-in-out" : "none",
                  zIndex: isActive ? 10 : 1,
                }}
              />
            );
          })}
        </div>

        {/* Team Members List */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {teamMembers.map((member) => {
            const isActive = activeMember === member.id;
            return (
              <button
                key={member.id}
                onClick={() => handleDotClick(member.id)}
                className={`bg-white rounded-lg px-3 py-2 shadow-md text-left transition-all duration-300 ${
                  isActive ? "ring-2 ring-[#D4AF37]" : ""
                }`}
                style={{
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isActive
                    ? "0 8px 20px rgba(0,0,0,0.15)"
                    : "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <p className="text-black font-semibold text-xs leading-tight">
                  {member.name}
                </p>
                <p className="text-black/70 text-[10px] leading-tight mt-0.5">
                  {member.role}
                </p>
                {isActive && (
                  <p className="text-black/60 text-[10px] leading-snug mt-2 pt-2 border-t border-gray-200">
                    {member.blurb}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "21/10" }}
      >
        <div className="absolute inset-0 bg-[#3d4a4f] rounded-lg overflow-hidden">
          <img
            src={teamPhoto}
            alt="God's Voice Ministries Leadership Team"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 25%" }}
          />
        </div>

        {teamMembers.map((member) => (
          <React.Fragment key={member.id}>
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
