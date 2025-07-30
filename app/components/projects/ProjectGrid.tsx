"use client";

import React from "react";
import { motion } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaCalendar } from "react-icons/fa6";


interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  link?: string;
}

const ProjectRow = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col items-center justify-between pb-6 border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-md rounded-xl mb-8 overflow-hidden shadow-lg shadow-black/20"
    >
      <div className="project-image w-full">
        <img src="/featured/featured-img-1.png" className="w-full" alt="" />
      </div>
      {/* Project Info */}
      <div className="flex-1 flex flex-col items-start w-full px-4 pt-4 gap-2">
        <div className="flex items-center gap-4 justify-between w-full">
          <h3 className="font-medium text-white group-hover:text-gray-200 transition-colors">
            {project.title}
          </h3>
          <MdOutlineArrowOutward className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-500 flex items-center"><FaCalendar className="mr-2"/>{project.year}</span>
          {/* <span className="text-sm text-gray-400">{project.category}</span> */}
          <p className="text-sm text-gray-400 max-w-md">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGrid = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "TaskFlow",
      category: "AI Platform",
      year: "2024",
      description:
        "AI-driven keyword research platform for content optimization",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Full-Stack Web",
      year: "2024",
      description: "Complete e-commerce solution with payment processing",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      year: "2024",
      description: "Secure banking app with biometric authentication",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      year: "2024",
      description: "Real-time business metrics with interactive charts",
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Healthcare Tech",
      year: "2023",
      description: "Patient management with telemedicine capabilities",
    },
    {
      id: 6,
      title: "Cloud Infrastructure",
      category: "DevOps",
      year: "2023",
      description: "Scalable AWS infrastructure with CI/CD pipelines",
    },
    {
      id: 7,
      title: "Social Media App",
      category: "Mobile & Web",
      year: "2023",
      description: "Cross-platform social networking application",
    },
    {
      id: 8,
      title: "Inventory Management",
      category: "Enterprise Software",
      year: "2023",
      description: "Real-time inventory tracking and management system",
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] w-full">
      <div className="hidden lg:block"></div>
      <div className="w-full px-6 lg:px-12 md:border-x border-gray-200/10 border-dashed">
        <div className="max-w-4xl mx-auto py-8">
          {/* Section Header */}
          <div className="mb-8">
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">
              All Projects
            </h3>
          </div>

          {/* Projects List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800/50">
            <p className="text-sm text-gray-500 text-center">
              More projects available on{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block"></div>
    </section>
  );
};

export default ProjectGrid;
