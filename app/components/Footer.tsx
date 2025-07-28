import React from "react";
import { HiMail, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/sherifsani",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/sherifsani",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/sherifsani",
    },
  ];

  return (
    <footer className="bg-[rgb(20,20,20)] w-full lg:w-[calc(100vw-260px)]  border-gray-200/10 flex items-center justify-between lg:ml-[260px] lg:mt-0 border-t">
      <div className="w-full py-4 px-6 lg:px-12 relative overflow-hidden flex items-center justify-between">
        <div className="flex gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm hidden md:block">{social.name}</span>
                <HiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="flex md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>built by sherif </span>
          </div>
          <p className="text-gray-500 text-sm">&copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
