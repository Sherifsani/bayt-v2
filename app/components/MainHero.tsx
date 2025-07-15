import React from "react";
import { HiMail, HiClock } from "react-icons/hi";
import { Spotlight } from "./ui/Spotlight";

const MainHero = () => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full min-h-screen lg:min-h-0">
      <div className="hidden lg:block w-full h-full"></div>
      <div className="hero w-full h-full flex flex-col justify-center gap-8 items-start border-x border-gray-200/20 border-dashed py-12 px-6 lg:px-12 relative overflow-hidden">
        {/* Grid background pattern */}
        <div className="pointer-events-none absolute inset-0 select-none [background-size:40px_40px] [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

        {/* Spotlight effect */}
        <Spotlight
          className="top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 text-xs text-gray-300 bg-gray-700/20 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-600/30 relative z-10">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          Currently available for work
        </div>

        {/* Main Heading */}
        <div className="space-y-4 relative z-10">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-bold text-transparent leading-tight">
            I'm <span className="font-twinkle-star">Sherif</span>
            ,<br /> turning ideas into <br className="hidden sm:block" />
            <span className="relative">
              real-world
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-500/40 rounded-full"></div>
            </span>{" "}
            solutions.
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl relative z-10">
          I focus on building{" "}
          <span className="text-white font-medium">
            cloud and backend solutions
          </span>{" "}
          that just work—clearly and efficiently.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full relative z-10">
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

        {/* Subtle decorative element - keeping your original */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-5 pointer-events-none">
          <div className="w-64 h-64 bg-gray-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="w-full h-full hidden lg:block"></div>
    </section>
  );
};

export default MainHero;
