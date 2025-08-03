import React from "react";

const ContactForm = () => {
  return (
    <section className="text-gray-200 bg-[rgb(31,31,31)]/50 backdrop-blur-sm rounded-lg p-5 border border-gray-600/20 flex flex-col gap-5">
      <div className="flex w-full gap-4">
        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[rgb(40,40,40)]/40 border border-gray-200/10 rounded-md p-2 focus:outline-none focus:border-gray-400 focus:bg-[rgb(45,45,45)]/50 transition-all duration-200"
            placeholder="Your Name"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-[rgb(40,40,40)]/40 border border-gray-200/10 rounded-md p-2 focus:outline-none focus:border-gray-400 focus:bg-[rgb(45,45,45)]/50 transition-all duration-200"
            placeholder="your email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full resize-none h-48 bg-[rgb(40,40,40)]/40 border border-gray-200/10 rounded-md p-2 focus:outline-none focus:border-gray-400 focus:bg-[rgb(45,45,45)]/50 transition-all duration-200"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-white w-full border-none rounded-lg text-black px-4 py-3 hover:bg-gray-200 focus:outline-none focus:bg-gray-100 transition-all duration-300"
      >
        Submit
      </button>
    </section>
  );
};

export default ContactForm;
