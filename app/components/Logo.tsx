import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden grid place-items-center">
        <Image src="/avatar.png" alt="logo avatar" width={50} height={50} className="w-4/5 h-4/5"/>
      </div>
      <div>
        <span className="font-quicksand">Sherif sani</span>
        <span>engineer</span>
      </div>
    </div>
  );
};

export default Logo;
