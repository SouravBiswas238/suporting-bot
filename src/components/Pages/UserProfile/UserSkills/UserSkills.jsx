import React from "react";
import "./UserSkills.css";

import { FaHtml5 } from "react-icons/fa";
import { BiMessageSquareError } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserSkills = () => {
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
      { skillName: "HTMl 5", skillTest: 100 },
      { skillName: "CSS 3", skillTest: 80 },
      { skillName: "Javascript", skillTest: 79 },
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
      <h2 className="user-title">Programing Learning Skills</h2>
      <div className="px-5 pb-5">
        {/* all skills box */}
        <div>
          {userInfo?.skills.map((skill) => (
            <div className="max-w-[25rem] w-full px-8 py-6 user-card-shadow rounded mb-10">
              <p className="text-xl font-bold text-gray-600 flex justify-start items-center">
                <FaHtml5 className="mr-2" />
                {skill?.skillName}
              </p>
              {parseInt(skill?.skillTest) >= 80 ? (
                <p className="text-base font-medium text-green-600 flex justify-start items-center pt-2">
                  <BsCheckCircle className="mr-2" />
                  VERIFY BY RECRUIT HUB
                </p>
              ) : (
                <>
                  <p className="text-base font-medium text-yellow-500 flex justify-start items-center pt-2 mb-3">
                    <BiMessageSquareError className="mr-2" /> NO VERIFY
                  </p>
                  <Link
                    to="#"
                    className="px-3 py-[3px] rounded-3xl outline-none font-medium bg-yellow-500 text-white ml-3"
                  >
                    TEST NOW
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSkills;
