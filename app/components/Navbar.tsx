import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="h-screen w-full bg-gray-800 border-r border-gray-700 p-4 lg:block hidden">
      <Logo />
      <nav className="mt-8 space-y-6">
        <ul className="space-y-2">
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            Home
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            About
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            Projects
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            Contact
          </li>
        </ul>
        <ul className="space-y-2 pt-4 border-t border-gray-700">
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            Blog
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            Stack
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer p-2 rounded hover:bg-gray-700 transition-colors">
            Social
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
