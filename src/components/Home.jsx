import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "./Typewriter";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] -mb-[150px] md:-mb-[240px]"
    >
      <div className="max-w-[1000px] mx-auto pl-4 pr-8 flex flex-col justify-center h-full">
        <p className="text-teal-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Saša Potežica
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
              "JavaScript",
              "Node",
              "MongoDB",
              "Firebase",
            ]}
          />
        </h2>
        <p className="text-[#8892b0] pt-4 pb-4 max-w-[700px]">
          I'm a front-end developer specializing in building and designing
          exceptional digital experiences. Currently, I'm focused on building
          responsive MERN-stack web applications.
        </p>
        <div className="flex items-center flex-row">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white mr-8 md:mr-0 group border-2 px-4 py-2 md:px-6 md:py-3.5 my-2 flex items-center hover:bg-teal-700 hover:border-teal-700">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <a target="_blank" href="/Resume.pdf">
            <button className="text-white w-[140px] justify-center group border-2 px-2 py-1.5 md:px-6 md:py-3 my-2 flex items-center hover:bg-teal-700 hover:border-teal-700 sm:ml-8">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
