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
    <section className="bg-light-background dark:bg-dark-background ">
      <div className="flex">
        <video
          src={BgVideo}
          autoPlay
          muted
          loop
          className="video-bg h-[400px] object-cover"
        />
        <button
         type="button" 
         onClick={() => darkModeHandler()}>
          {dark && <LuSunDim />}
          {!dark && <LuMoon />}
        </button>
      </div>
      <div>
        <h1>
          Arjun <br /> Rameshan
        </h1>
        <h2>Fullstack Developer</h2>
        <span className="flex">
          <FaLinkedin />
          <FaGithub />
        </span>
        <p >Passionate about fullstack development, I thrive on crafting dynamic frontends with React and robust backends with Spring Boot.</p>
        <button type="button">Resume</button>
      </div>
    </section>
  );
};

export default Intro;
