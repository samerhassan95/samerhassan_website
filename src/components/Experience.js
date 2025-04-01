import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Backend Developer",
      company: "Femto Trade",
      location: "Cairo",
      period: "November 2023 - present",
      type: "fulltime",
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "PATH2LIVE",
      location: "London",
      period: "Feb 2023 - November 2023",
      type: "fulltime (Remote)",
    },
    {
      id: 3,
      role: "Software Developer",
      company: "Yodawy",
      location: "Cairo",
      period: "Jan 2022 - oct 2022",
      type: "fulltime",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {experiences.map(({ id, role, company, location, period, type }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500"
            >
              <h3 className="text-2xl font-bold">{role}</h3>
              <p className="text-xl text-gray-300">{company}</p>
              <p className="text-gray-400">{location}</p>
              <p className="text-gray-400">{period}</p>
              <p className="text-gray-400 italic">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
