import React from "react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <article className="group cursor-pointer bg-[rgb(31,31,31)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out  hover:border-gray-200">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <Image
          src="/featured/img.png"
          alt="blog image"
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          quality={95}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors tracking-wide">
            AWS
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors tracking-wide">
            S3
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors tracking-wide">
            Bash
          </span>
        </div>

        {/* Title */}
        <h3 className="text-gray-200 text-xl font-semibold leading-tight mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors tracking-tight">
          Efficiently Copy Files Between AWS S3 Buckets with a Simple Bash
          Script
        </h3>

        {/* Meta info */}
        <div className="flex items-center text-sm text-gray-200 font-medium">
          <time dateTime="2024-01-15" className="tracking-wide">
            5 min read
          </time>
          <span className="mx-3 text-gray-400">•</span>
          <span className="tracking-wide">Jan 15, 2024</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
