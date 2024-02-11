import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "./Typewriter";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-teal-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sasa Potezica
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <h2 className="text-2xl lg:text-5xl text-gray-400 mt-4">
          I use{" "}
          <Typewriter
            speed={100}
            words={[
              "React",
              "Tailwind",
              "TypeScript",
              "Node",
              "MongoDB",
              "Firebase",
            ]}
          />
        </h2>
        <p className="text-[#8892b0] p-4 max-w-[700px]">
          I'm a front-end developer specializing in building and designing
          exceptional digital experiences. Currently, I'm focused on building
          responsive full-stack web applications.
        </p>
        <div className="flex flex-col sm:flex-row">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-700 hover:border-teal-700">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1MSVO_mglSwR0yhMIe3i2QcJlCA1_LNv9/view?usp=sharing"
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-700 hover:border-teal-700 sm:ml-8">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
