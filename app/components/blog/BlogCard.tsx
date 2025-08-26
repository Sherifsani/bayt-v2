import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  date: string;
}

const BlogCard = ({ id, title, date }: BlogCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <article className="group cursor-pointer bg-[rgb(31,31,31)]  rounded-sm overflow-hidden shadow-sm hover:scale-105 transition-all duration-300 ease-out border border-gray-200/5">

        {/* Content */}
        <div className="p-6">
          {/* Tags - You can make this dynamic later */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors tracking-wide">
              Blog
            </span>
          </div>

          {/* Title */}
          <h3 className="text-gray-300 text-xl font-semibold leading-tight mb-4 line-clamp-2  transition-colors tracking-tight">
            {title}
          </h3>

          {/* Meta info */}
          <div className="flex items-center text-sm text-gray-400 font-medium">
            <time dateTime={date} className="tracking-wide">
              5 min read
            </time>
            <span className="mx-3 text-gray-400">•</span>
            <span className="tracking-wide">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
