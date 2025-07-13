import React from "react";
import {
  RiHomeLine,
  RiUser3Line,
  RiBriefcaseFill,
  RiMailLine,
} from "react-icons/ri";

interface NavItemsProps {
  className?: string;
  itemClassName?: string;
}

const NavItems: React.FC<NavItemsProps> = ({
  className = "space-y-1",
  itemClassName = "text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium",
}) => {
  const navItems = [
    { label: "Home", href: "/", icon: RiHomeLine },
    { label: "About", href: "/about", icon: RiUser3Line },
    { label: "Projects", href: "/projects", icon: RiBriefcaseFill },
    { label: "Contact", href: "/contact", icon: RiMailLine },
  ];

  return (
    <ul className={className}>
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <li key={item.label} className={itemClassName}>
            <div className="flex items-center gap-3">
              <IconComponent className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
