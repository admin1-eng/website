import * as React from "react";
import latestSermonsImage from "@/assets/latest-sermons-section.png";

const LatestSermonsImage = () => {
  return (
    <section className="bg-background">
      <img 
        src={latestSermonsImage} 
        alt="Latest Sermons - The Pressure Point series. Tell us in the comments how the sermon impacted you"
        className="w-full h-auto"
      />
    </section>
  );
};

export default LatestSermonsImage;
