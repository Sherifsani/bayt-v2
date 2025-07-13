import React from "react";
import Image from "next/image";
import { Twinkle_Star } from "next/font/google";

const twinkleStar = Twinkle_Star({
  variable: "--font-twinkle-star",
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <div className="flex gap-4 items-center px-4">
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden grid place-items-center">
        <Image src="/avatar.png" alt="logo avatar" width={50} height={50} className="w-full object-cover"/>
      </div>
      <div className="flex flex-col text-gray-300 text-sm">
        <span className={`${twinkleStar.variable}}`}>Sherif sani</span>
        <span>Cloud Engineer</span>
      </div>
    </div>
  );
};

export default Logo;
