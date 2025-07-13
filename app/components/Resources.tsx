import React from "react";
import { HiDocument, HiCode, HiGlobeAlt } from "react-icons/hi";

interface ResourcesProps {
  className?: string;
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
}

const Resources: React.FC<ResourcesProps> = ({
  className = "space-y-3",
  titleClassName = "text-gray-500 text-xs font-semibold uppercase tracking-wider px-3",
  listClassName = "space-y-1",
  itemClassName = "text-gray-400 hover:text-white cursor-pointer px-3 py-2 rounded-lg hover:bg-[rgb(45,45,45)] transition-all duration-200 text-sm font-medium",
}) => {
  const resources = [
    { label: "Blog", href: "/blog", icon: HiDocument },
    { label: "Stack", href: "/stack", icon: HiCode },
    { label: "Social", href: "/social", icon: HiGlobeAlt },
  ];

  return (
    <div className={className}>
      <p className={titleClassName}>Resources</p>
      <ul className={listClassName}>
        {resources.map((resource) => {
          const IconComponent = resource.icon;
          return (
            <li key={resource.label} className={itemClassName}>
              <div className="flex items-center gap-3">
                <IconComponent className="w-4 h-4" />
                <span>{resource.label}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Resources;
