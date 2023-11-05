import React from "react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <div className="px-2 md:px-8  w-full min-h-[100vh] flex flex-col justify-center">
        <p className="text-orange-400 md:text-2xl">Hi, my name is</p>
        <h2 className="text-4xl md:text-6xl pt-4 font-extrabold">
          Cornelius Emase <br /> Lochipi
        </h2>
        <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-transparent pt-4">
          I&apos;m a Software Engineer
        </h2>
        <p className="pt-4 text-1.5xl">
          I am a student currently majoring in Software Engineering at Muranga
          University of Technology. I am in my final year of the program.
          <br />I am I am honored to have been elected as the{" "}
          <span className="text-orange-400">Web Lead</span> for the 2023/2024
          year in the{" "}
          <span className="text-orange-400">
            {" "}
            Google Developer Student Clubs
          </span>{" "}
          (DSC). I also got selected as a{" "}
          <span className="text-orange-400">
            Microsoft Learn Student Ambassador
          </span>
          . I am excited to take on this role and work closely with a talented
          team to develop and maintain web projects.I&apos;m always eager to
          learn new things, improve skills with my high curiosity of how
          something works.
        </p>

        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
