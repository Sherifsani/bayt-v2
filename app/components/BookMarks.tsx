import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import BookMarkCard from "./BookMarkCard";

const BookMarks = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full border-t border-gray-200/10 text-gray-200">
      <div></div>
      <div className="w-full h-full flex flex-col justify-center gap-12 items-start border-x border-gray-200/20 border-dashed py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <p>Bookmarks</p>{" "}
          <button className="group text-sm text-gray-400 hover:text-white transition-all duration-300 border border-gray-600/40 hover:border-gray-500/60 px-4 py-2 rounded-lg backdrop-blur-sm bg-gray-700/20 hover:bg-gray-600/30">
            <span className="group-hover:mr-2 transition-all duration-300">
              see more
            </span>
            <MdOutlineArrowOutward className="inline-block group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BookMarkCard />
          <BookMarkCard />
          <BookMarkCard />
          <BookMarkCard />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default BookMarks;
