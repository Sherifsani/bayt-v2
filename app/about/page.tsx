import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[rgb(20,20,20)]">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full min-h-[50vh]">
        <div className="hidden lg:block"></div>
        <div className="w-full flex items-center justify-center px-6 lg:px-12 md:border-x border-gray-200/20 border-dashed">
          <div className="max-w-4xl mx-auto text-center space-y-6 py-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-700/50">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              About Me
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                Sherif Sani
              </h1>

              <h2 className="text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Cloud and backend developer passionate about building scalable,
                practical solutions
              </h2>
            </div>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </section>

      {/* About Content */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full border-t border-gray-200/10">
        <div className="hidden lg:block"></div>
        <div className="w-full px-6 lg:px-12 md:border-x border-gray-200/20 border-dashed py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider">
                Background
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hey, I'm{" "}
                  <span className="text-white font-medium">Sherif</span>, a
                  cloud and backend developer passionate about building
                  practical, scalable solutions. Right now, I'm focused on
                  creating smart applications using{" "}
                  <span className="text-blue-400 font-medium">AWS</span>,{" "}
                  <span className="text-blue-400 font-medium">Docker</span>, and{" "}
                  <span className="text-blue-400 font-medium">Spring Boot</span>
                  .
                </p>
                <p>
                  Before diving deep into backend systems, I worked on a range
                  of full-stack projects—from deploying WordPress on AWS to
                  building secure APIs with Node.js and Express. I've also
                  explored the world of serverless with{" "}
                  <span className="text-orange-400 font-medium">Lambda</span>{" "}
                  and event-driven apps using{" "}
                  <span className="text-orange-400 font-medium">SNS</span> and{" "}
                  <span className="text-orange-400 font-medium">
                    Step Functions
                  </span>
                  .
                </p>
                <p>
                  My journey started with a love for clean design and structured
                  thinking. Over time, I've combined that with hands-on cloud
                  engineering to deliver solutions that are both{" "}
                  <span className="text-emerald-400 font-medium">
                    efficient
                  </span>{" "}
                  and{" "}
                  <span className="text-emerald-400 font-medium">
                    user-focused
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider">
                Experience
              </h3>
              <div className="space-y-4">
                <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <span className="text-white font-medium text-lg">KPMG</span>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                      <span className="text-gray-300">
                        Software Engineer Intern
                      </span>
                      <span className="text-blue-400 font-medium bg-blue-400/10 px-3 py-1 rounded-md w-fit">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <span className="text-white font-medium text-lg">
                      AWS Cloud Club
                    </span>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                      <span className="text-gray-300">Technical Lead</span>
                      <span className="text-orange-400 font-medium bg-orange-400/10 px-3 py-1 rounded-md w-fit">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <span className="text-white font-medium text-lg">
                      Konfirmtech Inc.
                    </span>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                      <span className="text-gray-300">
                        Cloud Engineer Intern
                      </span>
                      <span className="text-emerald-400 font-medium bg-emerald-400/10 px-3 py-1 rounded-md w-fit">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <span className="text-white font-medium text-lg">
                      Mindville
                    </span>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                      <span className="text-gray-300">Frontend Developer</span>
                      <span className="text-purple-400 font-medium bg-purple-400/10 px-3 py-1 rounded-md w-fit">
                        2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-blue-400 font-medium">Cloud</div>
                  <div className="text-sm text-gray-400 mt-1">AWS, Docker</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-green-400 font-medium">Backend</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Spring Boot, Node.js
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-purple-400 font-medium">Frontend</div>
                  <div className="text-sm text-gray-400 mt-1">
                    React, Next.js
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-orange-400 font-medium">DevOps</div>
                  <div className="text-sm text-gray-400 mt-1">
                    CI/CD, Lambda
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </section>
    </main>
  );
};

export default AboutPage;
