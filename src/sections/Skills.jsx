import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import SkillCard from "../common/SkillCard";

const Skills = () => {
  return (
    <section className="bg-light-background text-center py-8 min-h-screen h-auto sm:h-screen">
      <h1 className="text-2xl font-bold mb-6">Skills</h1>
      <div className="skillList flex justify-evenly self-center flex-wrap gap-y-10 max-w-[26ch] md:max-w-fit md:gap-7 mx-auto">
        <SkillCard icon={FaJava} label="Java" color="#007396" />
        <SkillCard
          icon={BiLogoSpringBoot}
          label="Spring Boot"
          color="#6DB33F"
        />
      </div>
      <hr className="w-96 h-[1px] border-none bg-black my-7 mx-auto md:w-75" />
      <div className="skillList flex justify-evenly self-center flex-wrap gap-y-10 max-w-[26ch] md:max-w-fit md:gap-7 mx-auto">
        <SkillCard icon={FaHtml5} label="HTML5" color="#E34F26" />
        <SkillCard icon={FaCss3Alt} label="CSS3" color="#1572B6" />
        <SkillCard
          icon={TbBrandJavascript}
          label="JavaScript"
          color="#F7DF1E"
        />
        <SkillCard icon={FaReact} label="React" color="#61DAFB" />
        <SkillCard
          icon={RiTailwindCssFill}
          label="Tailwind CSS"
          color="#38B2AC"
        />
        <SkillCard icon={FaBootstrap} label="Bootstrap" color="#7952B3" />
      </div>
      <hr className="w-96 h-[1px] border-none bg-black my-7 mx-auto md:w-75" />
      <div className="skillList flex justify-evenly self-center flex-wrap gap-y-10 max-w-[26ch] md:max-w-fit md:gap-7 mx-auto">
        <SkillCard icon={GrMysql} label="MySQL" color="#4479A1" />
        <SkillCard icon={SiMongodb} label="MongoDB" color="#47A248" />
      </div>
      <hr className="w-96 h-[1px] border-none bg-black my-7 mx-auto md:w-75" />
      <div className="skillList flex justify-evenly self-center flex-wrap gap-y-10 max-w-[26ch] md:max-w-fit md:gap-7 mx-auto">
        <SkillCard icon={SiVisualstudiocode} label="VS Code" color="#007ACC" />
        <SkillCard
          icon={SiIntellijidea}
          label="IntelliJ IDEA"
          color="#000000"
        />
        <SkillCard icon={SiPostman} label="Postman" color="#FF6C37" />
        <SkillCard icon={FaGithub} label="GitHub" color="#181717" />
      </div>
    </section>
  );
};

export default Skills;
