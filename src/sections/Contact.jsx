import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col text-center bg-light-background min-h-screen h-auto sm:h-screen">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <form className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2">
          <label className="text-left">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="h-12 pl-4 w-64 md:w-96 lg:w-[800px] rounded-2xl border border-gray-400 bg-[var(--background-color)] text-[var(--form-text-color)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-left">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="h-12 pl-4 w-64 md:w-96 lg:w-[800px] rounded-2xl border border-gray-400 bg-[var(--background-color)] text-[var(--form-text-color)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-left">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="pt-4 pl-4 w-64 md:w-96 lg:w-[800px] h-64 rounded-2xl border border-gray-400 bg-[var(--background-color)] text-[var(--form-text-color)] resize-none"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-primary text-light-background border-none rounded-2xl w-32 h-12 text-xl font-bold shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105 active:translate-y-1 active:shadow-sm"
        />
      </form>
    </section>
  );
};

export default Contact;
