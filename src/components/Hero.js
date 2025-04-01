import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import HeroImage from "../assets/samer photo.jpg"; // Make sure to add your photo with this name

const Hero = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/samer-hassan",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/samerhassan",
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Software Engineer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Full Stack Web Developer with experience in building and maintaining
            web applications. Skilled in React, Laravel, Django, and various
            other modern technologies.
          </p>

          <div className="flex gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <div className="flex gap-2">
              {socialLinks.map(({ id, child, href, style }) => (
                <a
                  key={id}
                  href={href}
                  className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ${style}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-lg shadow-xl shadow-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
