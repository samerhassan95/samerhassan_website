import React from "react";
import { motion } from "framer-motion";
import mountShoesVideo from "../assets/videos/mount-shoes-demo.mp4"; // Import the video directly

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BankSystem",
      description:
        "A bank system for users and their accounts, transactions and currencies.",
      techs: [
        "Docker",
        "Laravel",
        "Laravel Nova",
        "Laravel Bouncer",
        "JWT",
        "Vue.js",
        "MySQL",
      ],
      repo: "https://github.com/your-username/banksystem",
    },
    {
      id: 2,
      title: "Assiut University gates/security system",
      description:
        "A dashboard app that authenticates, records visits for staff-students.",
      techs: ["Laravel", "Javascript", "Ajax", "Xampp", "MySQL"],
      repo: "https://github.com/your-username/security-system",
    },
    {
      id: 3,
      title: "Developer Oasis",
      description:
        "A website to support and chat with developers (like stackoverflow).",
      techs: ["Laravel", "Vuejs", "chat", "MySQL"],
      repo: "https://github.com/your-username/developer-oasis",
    },
    {
      id: 4,
      title: "GoodReads Clone",
      description: "A website for readers to browse books.",
      techs: ["Angular", "Nodejs", "Expressjs", "Rest API", "MongoDB", "JWT"],
      links: {
        back: "https://github.com/your-username/goodreads-backend",
        admin: "https://github.com/your-username/goodreads-admin",
        front: "https://github.com/your-username/goodreads-frontend",
      },
    },
    {
      id: 5,
      title: "MountShoes E-commerce Website",
      description:
        "An e-commerce platform for shoe shopping with modern design and seamless user experience.",
      techs: ["React.js", "Django", "Bootstrap", "MySQL"],
      hasVideo: true,
      links: {
        front: "https://github.com/your-username/mountshoes-frontend",
        back: "https://github.com/your-username/mountshoes-backend",
      },
    },
  ];

  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Projects
          </motion.h2>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(
            ({ id, title, description, techs, repo, links, hasVideo }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
              >
                {hasVideo && (
                  <div className="relative aspect-video bg-gray-900">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={mountShoesVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techs.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {repo && (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md hover:scale-105 duration-200"
                      >
                        Code
                      </a>
                    )}
                    {links &&
                      Object.entries(links).map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md hover:scale-105 duration-200"
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </a>
                      ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
