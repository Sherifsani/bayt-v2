import React from 'react'

const ProjectCard = () => {
  return (
    
      <div className="flex flex-col gap-3 relative rounded-md w-full h-full">
        <img
          src="/featured/featured-img-1.png"
          alt="Featured Project 1"
          className="w-full h-[80%] rounded-md border border-gray-300/50 "
        />
        <div className="border border-gray-400 bg-gray-100 p-2 text-sm rounded h-[20%]">
          <p>Cashflow</p>
          <p className="text-gray-500">AI powered financial Insights</p>
        </div>
      </div>
    
  );
}

export default ProjectCard