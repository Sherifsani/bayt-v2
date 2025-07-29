import React from "react";

const Heading = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full min-h-[40vh]">
      <div className="hidden lg:block"></div>
      <div className="w-full flex items-center justify-center px-6 lg:px-12 md:border-x border-gray-200/20 border-dashed">
        <div className="max-w-4xl mx-auto text-center space-y-6 py-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-700/50">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            Portfolio
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
              Projects
            </h1>

            <h2 className="text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              A curated selection of projects spanning
              <span className="text-white font-medium"> frontend</span>,
              <span className="text-white font-medium"> backend</span>, and
              <span className="text-white font-medium"> cloud development</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
        </div>
      </div>
      <div className="hidden lg:block"></div>
    </section>
  );
};

export default Heading;
