import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mt-10 space-y-6"
        >
          <p>
            I am a Software Engineer with a strong foundation in web
            development, having completed comprehensive training at the
            Information Technology Institute (ITI). My expertise spans both
            front-end and back-end development, with experience in modern
            frameworks and technologies.
          </p>

          <p>
            With a B.Sc in Interior Design from Assiut University and multiple
            web development diplomas, I bring a unique blend of creative design
            thinking and technical expertise to my work. I've worked on various
            projects ranging from banking systems to e-commerce platforms,
            consistently delivering robust and user-friendly solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <p className="text-xl text-gray-300">
                Web Development (Open Source 9 Months Track)
              </p>
              <p className="text-gray-400 mt-2">
                Information Technology Institute (ITI)
              </p>
              <p className="text-gray-400 mt-1">Oct. 2022 – June. 2023</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <p className="text-xl text-gray-300">
                Full Stack Web Development (Python)
              </p>
              <p className="text-gray-400 mt-2">
                Information Technology Institute (ITI)
              </p>
              <p className="text-gray-400 mt-1">Oct. 2021 – Jan. 2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
