"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CarouselContext } from "./apple-cards-carousel";
import { useOutsideClick } from "@/hooks/outside-click";

type ProjectCard = {
  src: string;
  title: string;
  company: string;
  content: React.ReactNode;
};

export const ProjectCard = ({
  card,
  index,
  layout = false,
}: {
  card: ProjectCard;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-4 font-sans md:p-10 shadow-2xl"
            >
              {/* Glass reflection effect for modal */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 pointer-events-none rounded-3xl" />

              <button
                className="sticky top-4 right-0 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={handleClose}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <motion.p
                layoutId={layout ? `company-${card.title}` : undefined}
                className="text-base font-medium text-white/90"
              >
                {card.company}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-white md:text-5xl"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative z-10 flex h-96 w-80 flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] md:h-[28rem] md:w-96"
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Image container with background design */}
        <div className="relative p-4 rounded-2xl overflow-hidden grid place-items-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 h-64 md:h-72">
          {/* Background UI elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-emerald-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10 [background-size:20px_20px] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping delay-500" />
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-1500" />
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping delay-2000" />
          </div>

          {/* Image with enhanced styling */}
          <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-700/30 to-slate-800/30">
            <img
              src={card.src}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content section with glass effect */}
        <div className="relative p-6 md:p-7 flex-1 bg-gradient-to-b from-white/5 to-white/[0.02]">
          {/* Subtle separator line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <motion.h4
            layoutId={layout ? `title-${card.title}` : undefined}
            className="font-semibold mb-3 text-white text-xl group-hover:text-blue-100 transition-colors duration-300"
          >
            {card.title}
          </motion.h4>
          <motion.p
            layoutId={layout ? `company-${card.company}` : undefined}
            className="text-gray-300/80 text-sm pl-4 relative"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-gradient-to-r from-blue-400/60 to-transparent" />
            {card.company}
          </motion.p>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.button>
    </>
  );
};
