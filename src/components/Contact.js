import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/samer-hassan",
      color: "bg-blue-600",
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      text: "GitHub",
      href: "https://github.com/samerhassan",
      color: "bg-gray-700",
    },
    {
      id: 3,
      icon: <HiMail size={30} />,
      text: "arch.samerhassan@gmail.com",
      href: "mailto:arch.samerhassan@gmail.com",
      color: "bg-red-600",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below or reach out through my social profiles
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Contact Form */}
          <div className="flex-1">
            <form
              action="https://getform.io/f/[your-form-id]"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center gap-4">
            {contacts.map(({ id, icon, text, href, color }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 ${color} px-6 py-4 rounded-md hover:scale-105 duration-200`}
              >
                {icon}
                <span>{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
