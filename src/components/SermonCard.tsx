import React from "react";
import { Play } from "lucide-react";

interface SermonCardProps {
  title: string;
  image: string;
}

const SermonCard = ({ title, image }: SermonCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-sermon-card shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center">
            <Play className="h-8 w-8 text-primary fill-primary ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SermonCard;
