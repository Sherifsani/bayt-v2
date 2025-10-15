import React from "react";

const MyStack = () => {
  const tech = [
    { name: "JavaScript", icon: "/stack/javascript.png" },
    { name: "Java", icon: "/stack/java.png" },
    { name: "Python", icon: "/stack/python.png" },
    { name: "Azure", icon: "/stack/azure.png" },
    { name: "Jenkins", icon: "/stack/jenkins.png" },
    { name: "Docker", icon: "/stack/docker.png" },
    { name: "Kubernetes", icon: "/stack/kubernetes.png" },
    { name: "AWS", icon: "/stack/aws.png" },
  ];
  return (
    <section className="w-full max-w-[1200px] mx-auto my-10">
      <div>
        <h3 className="text-xl font-bold text-black mb-8">My Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tech.map((item) => (
            <div key={item.name} className="flex items-center mb-2">
              <img src={item.icon} alt={item.name} className="border border-dashed border-gray-400 p-1 rounded mr-2" />
              <span className="text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStack;
