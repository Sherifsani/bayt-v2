import React from "react";
import Logo from "./Logo";
import DownloadCV from "./ui/DownloadCV";

const Navbar = () => {
  return (
    <header className="h-screen w-full bg-[rgb(31,31,31)] border-r border-gray-700 py-4 lg:flex lg:flex-col hidden">
      <div className="flex-1">
        <Logo />
        <nav className="mt-8 space-y-8 px-4 border-t border-gray-700/50 border-dashed">
          <ul className="space-y-1">
            <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
              Home
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
              About
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
              Projects
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
              Contact
            </li>
          </ul>

          <div className="space-y-3">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider px-3">
              Resources
            </p>
            <ul className="space-y-1">
              <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
                Blog
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
                Stack
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium">
                Social
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mt-auto pt-6 border-t border-gray-700/50 border-dashed">
        <DownloadCV />
      </div>
    </header>
  );
};

export default Navbar;
