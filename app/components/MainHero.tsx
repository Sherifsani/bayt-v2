import React from "react";
import { HiMail, HiClock } from "react-icons/hi";
import { BackgroundBeams } from "./ui/background-beams";

const MainHero = () => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] w-full min-h-screen lg:min-h-0">
      <div className="hidden lg:block w-full h-full"></div>
      <div className="hero w-full h-full flex flex-col justify-center gap-8 items-start border-x border-gray-600/20 border-dashed py-12 px-6 lg:px-12 relative overflow-hidden">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 text-xs text-gray-300 bg-gray-700/20 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-600/30">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          Currently available for work
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-white text-4xl font-quicksand font-bold leading-tight">
            I'm <span className="text-gray-100 font-twinkle-star">Sherif</span>
            , turning ideas into <br className="hidden sm:block" />
            <span className="relative">
              real-world
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-500/40 rounded-full"></div>
            </span>{" "}
            solutions.
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg  leading-relaxed max-w-2xl">
          I focus on building{" "}
          <span className="text-white font-medium">
            cloud and backend solutions
          </span>{" "}
          that just work—clearly and efficiently.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
          <button className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/40 hover:border-gray-500/60 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <HiMail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Contact Me
          </button>

          {/* Time Display */}
          <div className="flex items-center gap-2 text-gray-400 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600/20">
            <HiClock className="w-4 h-4" />
            <span className="text-sm font-mono">{currentTime}</span>
          </div>
        </div>

        {/* Background Beams - contained within hero section */}
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundBeams />
        </div>

        {/* Subtle decorative element */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-5 pointer-events-none">
          <div className="w-64 h-64 bg-gray-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="w-full h-full hidden lg:block"></div>
    </section>
  );
};

export default MainHero;
