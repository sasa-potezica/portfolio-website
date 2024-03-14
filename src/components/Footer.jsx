import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full h-[50px] md:h-[150px] bg-[#0a192f] flex justify-center items-center p-4">
      <div className="flex -mt-[80px] sm:mt-[10px]">
        <a
          target="_blank"
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.linkedin.com/in/sasa-potezica-539727298"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          target="_blank"
          className="flex justify-between items-center w-full text-gray-300 ml-8"
          href="https://github.com/sasa-potezica"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <p className="text-gray-300 ml-8 -mt-[80px] sm:mt-[10px]">
        {" "}
        Sasa Potezica &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
