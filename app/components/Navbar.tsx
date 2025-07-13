import React from "react";
import Logo from "./Logo";
import DownloadCV from "./ui/DownloadCV";
import NavItems from "./NavItems";
import Resources from "./Resources";

const Navbar = () => {
  return (
    <header className="h-screen w-full bg-[rgb(31,31,31)] border-r border-gray-700 py-4 lg:flex lg:flex-col hidden z-50">
      <div className="flex-1">
        <Logo />
        <nav className="mt-8 space-y-8 px-4 border-t border-gray-700/50 border-dashed">
          <NavItems />
          <Resources />
        </nav>
      </div>
      <div className="mt-auto pt-6 border-t border-gray-700/50 border-dashed">
        <DownloadCV />
      </div>
    </header>
  );
};

export default Navbar;
