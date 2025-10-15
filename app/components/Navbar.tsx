import React from "react";
import Logo from "./Logo";
import DownloadCV from "./ui/DownloadCV";
import NavItems from "./NavItems";
import Resources from "./Resources";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 h-screen w-[260px] bg-gray-100 border-r border-gray-700/40 py-4 lg:flex lg:flex-col hidden z-50">
      <div className="flex-1">
        <Logo />
        <nav className="mt8 flex">
          <NavItems />
          {/* <Resources /> */}
        </nav>
      </div>
      <div className="mt-auto pt-6 ">
        <DownloadCV />
      </div>
    </header>
  );
};

export default Navbar;
