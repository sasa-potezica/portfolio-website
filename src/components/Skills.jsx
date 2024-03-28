import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import TypeScript from "../assets/typescript.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-400">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I've worked with
            <br />
            // Certifications
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
              <p className="my-4">HTML</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
              <p className="my-4">CSS</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={JavaScript} alt="JS Icon" />
              <p className="my-4">JAVASCRIPT</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={TypeScript} alt="TS Icon" />
              <p className="my-4">TYPESCRIPT</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
              <p className="my-4">REACT</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
              <p className="my-4">NODE</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
              <p className="my-4">GIT</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <a target="_blank" href="/Certifications.pdf">
              <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB Icon" />
              <p className="my-4">MONGODB</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
