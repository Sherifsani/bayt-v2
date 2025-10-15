import React from "react";
import { GoDownload } from "react-icons/go";
import { BsLinkedin, BsTwitterX, BsFacebook, BsDownload } from "react-icons/bs";

const DownloadCV = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="text-[#707070] flex flex-col gap-2 px-4">
      <p className="text-sm">Follow Me</p>
      <div className="flex items-center gap-5 text-lg border-t border-gray-700/50 border-dashed py-3">
        <BsLinkedin />
        <BsTwitterX />
        <BsFacebook />
        <BsDownload />
      </div>
      {/* Date/Location Card */}
      {/* <div className="p-5 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 border-dashed flex flex-col gap-2">
        <p className="text-lg font-medium text-white">{formattedDate}</p>
        <p className="text-sm text-gray-400 mt-1">Lagos, Nigeria</p>
      </div> */}

      {/* Download Button */}
      {/* <button className="group flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-rgb[43,43,43] to-rgb[20,20,20] border border-gray-600/30 border-dashed hover:border-gray-200/50 hover:from-gray-400/80 hover:to-gray-100/70 transition-all duration-300 backdrop-blur-sm ">
        <GoDownload className="w-4 h-4 text-gray-500 group-hover:text-blue-300 transition-colors duration-300" />
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
          Download CV
        </span>
      </button> */}
    </div>
  );
};

export default DownloadCV;
