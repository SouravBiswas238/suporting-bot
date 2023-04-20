import React from "react";

//react icons link
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const About = () => {
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
    <section className="">
      {/* Basic info  */}
      <h3 className="user-title">Basic Information</h3>
      <div className="inline-block p-5">
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <AiFillHome className="mr-3" />
          Live In
          <span className="font-semibold text-gray-800 capitalize">
            {userInfo?.state}
          </span>
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <MdLocationOn className="mr-3" />
          <span className="font-semibold text-gray-800 capitalize">
            {userInfo?.country}
          </span>
        </p>
        <p className=" text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer lowercase">
          <FaEnvelope className="mr-3" />
          {userInfo?.contactsInfo?.email}
        </p>
        <p className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center cursor-pointer">
          <FaPhoneAlt className="mr-3" />
          {userInfo?.contactsInfo?.phone}
        </p>
        <a
          href={userInfo?.socialLink?.github}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaGithub className="mr-3" />
          github
        </a>
        <a
          href={userInfo?.socialLink?.linkdin}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaLinkedinIn className="mr-3" />
          linkdin
        </a>
        <a
          href={userInfo?.socialLink?.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaFacebook className="mr-3" />
          facebook
        </a>
        <a
          href={userInfo?.socialLink?.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize text-lg text-gray-500 font-medium mb-3 flex justify-start items-center hover:text-blue-600 duration-100 ease-in-out cursor-pointer"
        >
          <FaInstagram className="mr-3" />
          insatgram
        </a>
      </div>
    </section>
  );
};

export default About;
