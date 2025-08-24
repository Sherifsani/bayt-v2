import React from "react";

const ContactForm = () => {
  return (
    <section className="text-gray-200 bg-gradient-to-br from-[rgb(31,31,31)]/60 to-[rgb(25,25,25)]/40 backdrop-blur-md rounded-2xl p-5 border border-gray-500/20 shadow-2xl flex flex-col gap-8">
      <div className="flex flex-col md:flex-row w-full gap-6 text-sm">
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-200 tracking-wide"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[rgb(40,40,40)]/30 border border-gray-400/20 rounded-md px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-300/60 focus:bg-[rgb(45,45,45)]/40 focus:shadow-lg transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-200 tracking-wide"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-[rgb(40,40,40)]/30 border border-gray-400/20 rounded-md px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-300/60 focus:bg-[rgb(45,45,45)]/40 focus:shadow-lg transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-gray-200 tracking-wide"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full resize-none h-40 bg-[rgb(40,40,40)]/30 border border-gray-400/20 rounded-sm px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-300/60 focus:bg-[rgb(45,45,45)]/40 focus:shadow-lg transition-all duration-300"
          placeholder="Tell us what you're thinking..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-white to-gray-100 w-full border-none rounded-md text-gray-900 font-semibold px-6 py-4 hover:from-gray-100 hover:to-gray-200 hover:shadow-xl focus:outline-none focus:from-gray-50 focus:to-gray-150 focus:shadow-xl transform hover:scale-[1.02] focus:scale-[1.02] transition-all duration-300"
      >
        Send Message
      </button>
    </section>
  );
};

export default ContactForm;
