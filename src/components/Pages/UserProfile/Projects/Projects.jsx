import React from "react";

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const userInfo = {
    CoverPhoto:
      "https://i.pinimg.com/564x/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg",
    ProfilePhoto:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    name: "Tanvir Ahmed",
    userName: "tkljfld.232",
    developerType: "Front-End Web Developer",
    Bio: "Front-End Web Developer | Interested in React Js. and React Native | Passionate about Web Development | Dreaming to be a Professional Full Stack Web Developer",
    state: "barisal",
    country: "bangladesh",
    contactsInfo: { email: "", phone: "" },
    socialLink: { github: "", linkdin: "", facebook: "", instagram: "" },
    skills: [
      { skillName: "", skillTest: 100 },
      { skillName: "", skillTest: "" },
      { skillName: "", skillTest: "" },
    ],
    featured: [
      { featuredPhoto: "", featuredTitle: "", featuredDescription: "" },
      { featuredPhoto: "", featuredTitle: "", featuredDescription: "" },
      { featuredPhoto: "", featuredTitle: "", featuredDescription: "" },
    ],
    experince: [
      {
        experinceTitle: "",
        jobType: "full time",
        duration: "",
        skills: ["", "", "", ""],
      },
    ],
    courses: [
      { coursesPhoto: "", coursesTitle: "", coursesDescription: "" },
      { coursesPhoto: "", coursesTitle: "", coursesDescription: "" },
      { coursesPhoto: "", coursesTitle: "", coursesDescription: "" },
    ],
    projects: [
      {
        projectsPhoto: "",
        projectsTitle: "",
        projectsDescription: "",
        projectsLink: { githubServer: "", githubClint: "", liveSite: "" },
      },

      {
        projectsPhoto: "",
        projectsTitle: "",
        projectsDescription: "",
        projectsLink: { githubServer: "", githubClint: "", liveSite: "" },
      },

      {
        projectsPhoto: "",
        projectsTitle: "",
        projectsDescription: "",
        projectsLink: { githubServer: "", githubClint: "", liveSite: "" },
      },
    ],
  };
  return (
    <section>
      {/* section title  */}
      <h2 className="user-title">Our Bests Projects</h2>

      {/* Section content */}
      <div className="px-5 pb-5">
        {userInfo?.projects.map((project) => (
          <div className="md:flex user-card-shadow rounded-lg mb-10">
            {/* Projects left  */}
            <div className="md:w-1/2 min-w-[18.7rem]">
              <img
                className="p-5 w-full h-full object-cover object-center rounded-lg overflow-hidden"
                src={project?.projectsPhoto}
                alt="Projects Images"
              />
            </div>

            {/* Projects right  */}
            <div className="md:w-1/2 min-w-[18.7rem] p-5">
              <h3 className="text-xl text-gray-700 font-medium text-left capitalize">
                {project?.projectsTitle}
              </h3>
              <span className="inline-block text-lg text-gray-600 font-medium text-left mt-2">
                Description
              </span>
              <p className="text-justify">{project?.projectsDescription}</p>
              {/* Projects link  */}
              <ul className="flex items-center justify-start mt-6">
                <a
                  href={project?.projectsLink?.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-start text-lg text-blue-600 hover:text-gray-700 duration-150 ease-in-out mr-8">
                    <TbWorld className="mr-1" />
                    Live Site
                  </li>
                </a>

                <a
                  href={project?.projectsLink?.githubClint}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-start text-lg text-blue-600 hover:text-gray-700 duration-150 ease-in-out mr-8">
                    <FaGithub className="mr-1" />
                    Client Site
                  </li>
                </a>
                <a
                  href={project?.projectsLink?.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-start text-lg text-blue-600 hover:text-gray-700 duration-150 ease-in-out mr-8">
                    <FaGithub className="mr-1" />
                    Server Site
                  </li>
                </a>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
