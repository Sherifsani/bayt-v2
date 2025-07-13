"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Resources from "./Resources";
import DownloadCV from "./ui/DownloadCV";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden bg-[rgb(31,31,31)] border-b border-gray-700 px-4 py-3 fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bg-[rgb(31,31,31)] border-b border-gray-700 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700/50">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            aria-label="Close mobile menu"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="px-4 py-6 space-y-8">
          <NavItems
            className="space-y-2"
            itemClassName="text-gray-400 hover:text-white cursor-pointer px-4 py-3 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-base font-medium"
          />

          <Resources
            className="space-y-4"
            titleClassName="text-gray-500 text-xs font-semibold uppercase tracking-wider px-4"
            listClassName="space-y-2"
            itemClassName="text-gray-400 hover:text-white cursor-pointer px-4 py-3 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-base font-medium"
          />

          <div className="pt-6 border-t border-gray-700/50">
            <DownloadCV />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
