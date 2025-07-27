import React from "react";

const BookMarkCard = () => {
  return (
    <div className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col gap-2 cursor-pointer">
      <h4 className="text-[15px] leading-[1.5em]">Deploy a node.js application to AWS Elastic Container Service</h4>
      <p className="text-sm text-gray-400">Cloud Deployment</p>
    </div>
  );
};

export default BookMarkCard;
