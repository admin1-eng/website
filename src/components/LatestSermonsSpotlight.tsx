import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sermonImage from "@/assets/sermon-series-pressure-point.png";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

const LatestSermonsSpotlight = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log("Fetching YouTube videos...");
        const { data, error } = await supabase.functions.invoke("youtube-videos", {
          body: {},
        });

        if (error) {
          console.error("Error invoking function:", error);
          setError("Failed to load videos");
          return;
        }

        if (data?.videos && data.videos.length > 0) {
          console.log("Videos fetched:", data.videos.length);
          setVideos(data.videos);
        } else {
          console.log("No videos returned, using fallback");
          setError("No videos found");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const renderVideoCard = (video: YouTubeVideo, isMain: boolean = false) => (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] ${isMain ? "" : "opacity-90 hover:opacity-100"}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-auto object-cover aspect-video"
        />
      </div>
    </a>
  );

  const renderFallbackCard = () => (
    <Link to="/watch-online" className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
        <img
          src={sermonImage}
          alt="The Pressure Point Sermon Series"
          className="w-full h-auto object-cover"
        />
      </div>
    </Link>
  );

  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-10 bg-background">
      <div className="container mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="order-2 md:order-1 text-center flex flex-col md:justify-center md:min-h-[280px] lg:min-h-[320px]">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "'LEMONMILK', sans-serif" }}>
              LATEST SERMONS
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Tell us in the comments
              <br />
              how the sermon impacted you
            </p>
          </div>

          {/* Right Column - Sermon Carousel */}
          <div className="order-1 md:order-2">
            {loading ? (
              <div className="flex gap-4">
                <Skeleton className="w-full aspect-video rounded-lg" />
                <Skeleton className="w-1/3 aspect-video rounded-lg hidden lg:block" />
              </div>
            ) : error || videos.length === 0 ? (
              renderFallbackCard()
            ) : videos.length === 1 ? (
              renderVideoCard(videos[0], true)
            ) : (
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {videos.map((video, index) => (
                      <CarouselItem
                        key={video.id}
                        className="pl-2 md:pl-4 basis-[85%] md:basis-[75%] lg:basis-[70%]"
                      >
                        {renderVideoCard(video, index === 0)}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 md:-left-4 h-10 w-10 bg-background/80 hover:bg-background border-muted-foreground/20" />
                  <CarouselNext className="right-2 md:-right-4 h-10 w-10 bg-background/80 hover:bg-background border-muted-foreground/20" />
                </Carousel>
              </div>
            )}
          </div>
        </div>

        {/* Footer Line */}
        <div className="mt-12 md:mt-14 text-center">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Accepted Jesus?{" "}
            <a
              href="/next-steps-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/50 hover:decoration-primary transition-all duration-200 cursor-pointer"
            >
              We're here for you.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestSermonsSpotlight;
