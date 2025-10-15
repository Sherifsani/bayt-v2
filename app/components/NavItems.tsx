import React from "react";
import Link from "next/link";
import {
  RiHomeLine,
  RiUser3Line,
  RiBriefcaseFill,
  RiMailLine,
} from "react-icons/ri";
import { HiDocument } from "react-icons/hi";

interface NavItemsProps {
  className?: string;
  itemClassName?: string;
}

const NavItems: React.FC<NavItemsProps> = ({
  className = "flex-col flex w-full px-2",
  itemClassName = "hover:text-white cursor-pointer py-5 rounde hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium border-b border-dashed border-gray-700/10 w-full px-2",
}) => {
  const navItems = [
    { label: "Home", href: "/", icon: RiHomeLine },
    { label: "About", href: "/about", icon: RiUser3Line },
    { label: "Projects", href: "/projects", icon: RiBriefcaseFill },
    { label: "Contact", href: "/contact", icon: RiMailLine },
    { label: "Blog", href: "/blog", icon: HiDocument },
  ];

  return (
    <ul className={className}>
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <li key={item.label} className={itemClassName}>
            <Link href={item.href} className="flex items-center gap-3">
              <IconComponent className="w-4 h-4" />
              <p>{item.label}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
