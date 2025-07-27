import React from "react";
import { HiMail, HiClock } from "react-icons/hi";

const MainHero = () => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-700/50">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          Available for work
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <p className="text-gray-400 text-lg font-light tracking-wide uppercase">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none">
            Sherif
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            I build scalable cloud and backend solutions that work efficiently
            and reliably.
          </h2>
        </div>

        {/* Action Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group flex items-center gap-2 text-white border border-gray-600 hover:border-gray-400 px-8 py-3 rounded transition-all duration-300 hover:bg-white hover:text-black">
            <HiMail className="w-4 h-4" />
            <span>Get in touch</span>
          </button>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <HiClock className="w-4 h-4" />
            <span className="font-mono">{currentTime}</span>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="pt-16">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
