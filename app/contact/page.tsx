import React from "react";
import Heading from "../components/contact/Heading";
import ContactForm from "../components/contact/ContactForm";

const page = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] bg-[rgb(20,20,20)] min-h-screen">
      <div className="hidden lg:block"></div>
      <div className="lg:border-x border-gray-200/10 border-dashed w-full px-6 lg:px-12 py-16 flex flex-col gap-8">
        <Heading />
        <ContactForm />
      </div>
      <div className="hidden lg:block"></div>
    </main>
  );
};

export default page;
