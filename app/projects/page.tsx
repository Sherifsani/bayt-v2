import React from "react";
import Heading from "../components/projects/Heading";
import ProjectGrid from "../components/projects/ProjectGrid";

const page = () => {
  return (
    <main className="min-h-screen bg-[rgb(20,20,20)]">
      <Heading />
      <ProjectGrid />
    </main>
  );
};

export default page;
