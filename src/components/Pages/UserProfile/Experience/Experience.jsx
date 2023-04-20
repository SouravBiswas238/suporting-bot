import React from "react";
import "./Experience.css";

const Experience = () => {
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
        experincePhoto: "adsfas",
        experinceTitle: "asdf",
        jobType: "full time",
        duration: "afdas",
        skills: ["asfd", "affdsa", "sdfs", "afdas"],
      },
      {
        experinceTitle: "gfdgf",
        jobType: "full time",
        duration: "dsfsafs",
        skills: ["kjah", "sdf", "", "adfa"],
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
      <h2 className="user-title">Our Experience</h2>
      <div className="px-5 pb-5">
        {/* all Experience box */}
        <div>
          {userInfo?.experince.map((singleExperince) => (
            <div className="max-w-[25rem] w-full px-2 py-2 user-card-shadow rounded mb-10 flex justify-start gap-3 align-top">
              <div>
                <img
                  className="w-12 h-12 object-cover border-2 border-gray-200"
                  src={singleExperince?.experincePhoto}
                  alt="Experience Images"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  {singleExperince?.experinceTitle}
                </h3>
                <p className="">{singleExperince?.jobType}</p>
                <p className="">{singleExperince?.duration}</p>
                <p className="font-medium text-gray-600 mt-1">
                  Skills:{" "}
                  {singleExperince?.skills.map((skill) => (
                    <span> {skill}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
