import React from "react";

const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full border-t border-gray-200/10">
      <div></div>
      <div className="w-full h-full flex flex-col justify-center gap-12 items-start border-x border-gray-200/20 border-dashed py-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Grid background pattern */}
        <div className="pointer-events-none absolute inset-0 select-none opacity-20 [background-size:40px_40px] [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

        {/* Header Section */}
        <div className="w-full flex justify-between items-center relative z-10">
          <h2 className="text-lg font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
            Who I am
          </h2>
          <button className="group text-sm text-gray-400 hover:text-white transition-all duration-300 border border-gray-600/40 hover:border-gray-500/60 px-4 py-2 rounded-lg backdrop-blur-sm bg-gray-700/20 hover:bg-gray-600/30">
            <span className="group-hover:mr-2 transition-all duration-300">
              see more
            </span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        {/* About Content */}
        <div className="flex flex-col gap-6 text-gray-300 leading-relaxed relative z-10">
          <p className="">
            Hey, I'm <span className="text-white font-medium">Sherif</span>, a
            cloud and backend developer passionate about building practical,
            scalable solutions. Right now, I'm focused on creating smart
            applications using{" "}
            <span className="text-blue-400 font-medium">AWS</span>,{" "}
            <span className="text-blue-400 font-medium">Docker</span>, and{" "}
            <span className="text-blue-400 font-medium">Spring Boot</span>.
          </p>
          <p>
            Before diving deep into backend systems, I worked on a range of
            full-stack projects—from deploying WordPress on AWS to building
            secure APIs with Node.js and Express. I've also explored the world
            of serverless with{" "}
            <span className="text-orange-400 font-medium">Lambda</span> and
            event-driven apps using{" "}
            <span className="text-orange-400 font-medium">SNS</span> and{" "}
            <span className="text-orange-400 font-medium">Step Functions</span>.
          </p>
          <p>
            My journey started with a love for clean design and structured
            thinking. Over time, I've combined that with hands-on cloud
            engineering to deliver solutions that are both{" "}
            <span className="text-emerald-400 font-medium">efficient</span> and
            <span className="text-emerald-400 font-medium"> user-focused</span>.
            Let's build something impactful.
          </p>
        </div>

        {/* Experience Section */}
        <div className="w-full relative z-10">
          <h3 className=" font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            Experience
          </h3>
          <div className="space-y-4">
            <div className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <span className="text-white font-medium">KPMG</span>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                  <span className="text-gray-300">
                    Software engineer intern
                  </span>
                  <span className="text-blue-400 font-medium bg-blue-400/10 px-2 py-1 rounded-md w-fit">
                    2025
                  </span>
                </div>
              </div>
            </div>

            <div className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <span className="text-white font-medium">AWS cloud club</span>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                  <span className="text-gray-300">Technical lead</span>
                  <span className="text-orange-400 font-medium bg-orange-400/10 px-2 py-1 rounded-md w-fit">
                    2025
                  </span>
                </div>
              </div>
            </div>

            <div className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <span className="text-white font-medium">Konfirmtech inc.</span>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                  <span className="text-gray-300">Cloud engineer intern</span>
                  <span className="text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded-md w-fit">
                    2025
                  </span>
                </div>
              </div>
            </div>

            <div className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <span className="text-white font-medium">Mindville</span>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                  <span className="text-gray-300">Frontend developer</span>
                  <span className="text-purple-400 font-medium bg-purple-400/10 px-2 py-1 rounded-md w-fit">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-8 opacity-5 pointer-events-none">
          <div className="w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-1/4 left-8 opacity-5 pointer-events-none">
          <div className="w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default AboutSection;
