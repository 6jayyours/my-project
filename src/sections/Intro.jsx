import React, { useState } from "react";
import BgVideo from "../assets/motion.mp4";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuSunDim, LuMoon } from "react-icons/lu";

const Intro = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <section className="flex flex-col justify-center items-center gap-6 text-center h-screen min-h-[500px] max-w-full mx-auto px-4 md:flex-row md:justify-evenly md:items-center md:px-8 lg:px-16">
      <div className="relative flex justify-center items-center">
        <video
          src={BgVideo}
          autoPlay
          muted
          loop
          className="max-w-[200px] md:max-w-[350px] lg:max-w-[400px] h-auto"
        />
        <button
          type="button"
          onClick={darkModeHandler}
          className="absolute top-4 right-4 w-8 h-8 text-dark-background dark:text-light-background"
        >
          {dark ? <LuSunDim /> : <LuMoon />}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-rubik uppercase text-dark-background dark:text-light-background">
          ARJUN <br /> RAMESHAN
        </h1>
        <h2 className="text-xl font-mono uppercase text-dark-background dark:text-light-background">
          FULLSTACK DEVELOPER
        </h2>
        <div className="flex gap-6">
          <FaLinkedin className="w-8 h-8 cursor-pointer text-dark-background dark:text-light-background" />
          <FaGithub className="w-8 h-8 cursor-pointer text-dark-background dark:text-light-background" />
        </div>
        <p className="text-base font-normal text-dark-background dark:text-light-background max-w-[24ch]">
          Passionate about fullstack development, I thrive on crafting dynamic
          frontends with React and robust backends with Spring Boot.
        </p>
        <a href="/path/to/cv.pdf" download>
          <button className="mt-4 px-6 py-3 w-[126px] font-bold bg-primary text-light-background rounded-2xl shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
