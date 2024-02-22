import React from "react";
import realEstate from "../assets/projects/realestate.jpg";
import netflixImg from "../assets/projects/netflix.jpg";
import cryptoImg from "../assets/projects/CryptoBase.jpg";
import HooBank from "../assets/projects/HooBank.jpg";
import Fitness from "../assets/projects/Fitness.jpg";
import ecom from "../assets/projects/ecom.jpg";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-400">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${netflixImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix Clone
                <p className="text-sm -mb-10 p-4">
                  Dive into seamless streaming with this project, featuring
                  dynamic UI design and real-time data management.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sp-netflix-clone.web.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sasa-potezica/netflix-clone"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cryptoImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CryptoBase
                <p className="text-sm -mb-10 p-4">
                  Your go-to app for exploring and analyzing crypto coin data,
                  with the added convenience of saving preferences to your
                  account.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://sp-crypto-project.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sasa-potezica/crypto-project"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${HooBank})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HooBank
                <p className="text-sm -mb-10 p-4">
                  Experience the future of banking with HooBank, the
                  next-generation payment method offering seamless transactions
                  and advanced financial management features.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sp-bank-app.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sasa-potezica/bank-app"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HomeLand
                <p className="text-sm -mb-10 p-4">
                  Discover your dream property with HomeLand, a user-friendly
                  website offering comprehensive real estate listings and
                  intuitive search tools for finding your perfect home.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sp-real-estate.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sasa-potezica/real-estate"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ecom})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Notice!
                <p className="text-sm -mb-10 p-4">
                  Still under Construction...
                </p>
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" rel="noopener noreferrer" href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Fitness})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                EvoGym
                <p className="text-sm -mb-10 p-4">
                  Explore dynamic gym membership options on EvoGym's website,
                  designed to help you reach your fitness goals with ease and
                  convenience.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sp-gym-app.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sasa-potezica/evo-gym"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
