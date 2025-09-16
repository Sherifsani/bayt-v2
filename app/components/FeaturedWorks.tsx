"use client";

import React from "react";
import { Carousel } from "@/app/components/ui/apple-cards-carousel";
import { ProjectCard } from "@/app/components/ui/custom-project-card";
import Link from "next/link"
const FeaturedWorks = () => {
  const projects = [
    {
      src: "/featured/featured-img-1.png",
      title: "Audio Notes",
      company: "KonfirmTech inc 2025",
      content: <ProjectContent projectId={1} />,
    },
    {
      src: "/featured/featured-img-2.png",
      title: "E-Commerce Platform",
      company: "TechCorp 2024",
      content: <ProjectContent projectId={2} />,
    },
    {
      src: "/featured/featured-img-3.png",
      title: "Mobile App Design",
      company: "DesignStudio 2024",
      content: <ProjectContent projectId={3} />,
    },
    {
      src: "/featured/featured-img-4.png",
      title: "Dashboard Analytics",
      company: "DataViz Solutions 2024",
      content: <ProjectContent projectId={4} />,
    },
  ];

  const cards = projects.map((project, index) => (
    <ProjectCard key={project.src} card={project} index={index} />
  ));

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-10 border-t border-gray-600/20">
      <div className="w-full flex justify-between items-center  text-gray-300">
        <h3 className="md:text-lg font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
          Featured Works
        </h3>
        <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 border border-gray-600/40 hover:border-gray-500/60 px-4 py-2 rounded-lg backdrop-blur-sm bg-gray-700/20">
          All projects
        </Link>
      </div>

      {/* Apple Carousel */}
      <div className="w-full">
        <Carousel items={cards} />
      </div>
    </section>
  );
};

const ProjectContent = ({ projectId }: { projectId: number }) => {
  const projectDetails = {
    1: {
      description:
        "A serverless application that converts text from images to audio",
      technologies: ["React", "Textract", "Polly", "Lambda", "Api Gateway"],
      features: [
        "Online Booking",
        "Customer Portal",
        "Payment Integration",
        "Staff Management",
      ],
    },
    2: {
      description:
        "Full-featured e-commerce platform with inventory management, payment processing, and analytics.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Order Management",
        "Analytics Dashboard",
      ],
    },
    3: {
      description:
        "Beautiful mobile app design with intuitive user experience and modern interface patterns.",
      technologies: ["React Native", "Expo", "Firebase", "Figma"],
      features: [
        "Cross-platform",
        "Push Notifications",
        "Offline Support",
        "Social Login",
      ],
    },
    4: {
      description:
        "Comprehensive analytics dashboard for data visualization and business intelligence.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      features: [
        "Real-time Data",
        "Custom Charts",
        "Export Reports",
        "Team Collaboration",
      ],
    },
  };

  const project = projectDetails[projectId as keyof typeof projectDetails];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-3xl">
      <p className="text-white/90 text-base md:text-xl max-w-3xl mx-auto mb-8">
        {project.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-full text-sm hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-white/80 flex items-center">
                <span className="w-2 h-2 bg-blue-400/60 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
