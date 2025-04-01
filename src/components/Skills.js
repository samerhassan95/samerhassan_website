import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Main Languages",
      skills: ["PHP", "Python", "JavaScript/ES6"],
    },
    {
      id: 2,
      title: "Web Tech and Frameworks",
      skills: [
        "Laravel",
        "Expressjs",
        "Django",
        "Reactjs",
        "Angular",
        "Vue.js",
        "JWT",
        "Rest API",
        "Nodejs",
        "Docker",
        "Bootstrap",
        "Apache web server",
      ],
    },
    {
      id: 3,
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ id, title, skills }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-gray-700 px-3 py-2 rounded-md text-sm hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
