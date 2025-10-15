import React from "react";

const MainHero = () => {
  return (
    <section className="grid w-full">
      <div className="w-full flex px-3 lg:px-0 mx-auto max-w-[1200px] pt-20 pb-6 border-b border-gray-700/50 border-dashed">
        <div className="w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 text-sm text-black bg-gray-200 p-2 rounded-lg border border-gray-200">
            <span
              className="w-2 h-2 bg-green-500 rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="font-medium text-sm">Available for Work</span>
          </div>

          {/* Main Content */}
          <div className="mt-8 max-w-4xl">
            {/* Two-line big heading */}
            <h1 className="text-[32px] sm:text-[48px] leading-[0.95] font-extrabold tracking-tight text-black">
              Hey, I'm Sherif Sani.
              <br />
              <span className="block mt-3">
                I build software & cloud systems.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-gray-400 text- max-w-2xl">
              I build scalable cloud and backend solutions that work efficiently
              and reliably.
            </p>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold bg-black text-white rounded-md shadow-md hover:opacity-95 transition"
              >
                Get In Touch
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold border rounded-md border-gray-300 text-black bg-white hover:bg-gray-50 transition"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
