import React from "react";

const Courses = () => {
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
      {
        coursesPhoto: "kldsjfjslkfjflkdsj",
        coursesTitle: "sdfsafsdfs",
        coursesDescription: "fdsaeqwgsa",
      },
      {
        coursesPhoto: "kldsjfjslkfjflkdsj",
        coursesTitle: "sdfsafsdfs",
        coursesDescription: "fdsaeqwgsa",
      },
      {
        coursesPhoto: "kldsjfjslkfjflkdsj",
        coursesTitle: "sdfsafsdfs",
        coursesDescription: "fdsaeqwgsa",
      },
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
    <section className="pb-6">
      {/* section title  */}
      <h2 className="user-title">Courses</h2>

      {/* Section content */}
      <div className="px-5 pb-5">
        {userInfo?.courses.map((course) => (
          <div className="md:flex user-card-shadow rounded-lg mb-10">
            {/* Courses left  */}
            <div className="md:w-1/2 min-w-[18.7rem]">
              <img
                className="p-5 w-full h-full object-cover object-center rounded-lg overflow-hidden"
                src={course?.coursesPhoto}
                alt="Courses Images"
              />
            </div>

            {/* Courses right  */}
            <div className="md:w-1/2 min-w-[18.7rem] p-5">
              <h3 className="text-xl text-gray-700 font-medium text-left capitalize">
                {course?.coursesTitle}
              </h3>
              <span className="inline-block text-lg text-gray-600 font-medium text-left mt-2">
                Description
              </span>
              <p className="text-justify">{course?.coursesDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
