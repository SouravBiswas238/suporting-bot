import React, { useContext } from "react";
import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { UserStore } from "../../../stateManagement/UserContext/UserContextStore";
import "./UserProfile.css";

const UserProfile = () => {
  const [userInfo, serUserInfo] = useState();

  const userStore = useContext(UserStore);
  serUserInfo(userStore.user);

  return (
    <>
      <section className=" bg-white">
        <div className="user-profile-shadow pb-1">
          {/* User Hero section  */}
          <section className="container border-b-2 border-gray-200 pb-5">
            {/* user cover photo and profile photo  */}
            <div className="w-full mb-[6rem]">
              <div className="w-full h-[15rem] md:h-[20rem] relative">
                <img
                  className="w-full h-full object-cover object-center"
                  src={userInfo?.CoverPhoto}
                  alt="User-cover-images"
                />
                <div className="w-[10rem] h-[10rem] absolute left-[3rem] bottom-0 translate-y-2/4">
                  <img
                    className="w-full h-full object-contain object-center overflow-hidden rounded-full border-[.3rem] border-gray-200"
                    src={userInfo?.ProfilePhoto}
                    alt="User-profile-images"
                  />
                </div>
              </div>
            </div>

            {/* User basic information */}
            <div className="flex justify-between ">
              <div className="ml-3 text-left md:w-1/2 md:max-w-[30rem] ">
                <h2 className="text-3xl font-[700] text-[#050505] uppercase font-segoeUi">
                  {userInfo?.name}
                </h2>

                <p className="w-full text-base md:text-lg font-normal mt-3 ">
                  {userInfo?.Bio}
                </p>
                <p className="w-full text-base md:text-lg font-normal text-gray-500 mt-3 capitalize ">
                  {userInfo?.state + ", " + userInfo?.country}
                </p>
              </div>
              <div className="mr-10">
                <Link
                  to="/chat"
                  className="px-5 py-2 rounded-3xl outline-none font-bold bg-[#287eff] text-white ml-3"
                >
                  Message
                </Link>

                <Link
                  to="/user-dashboard"
                  className="px-5 py-2 rounded-3xl outline-none font-bold bg-[#3a4d6a] text-white ml-3"
                >
                  Edit
                </Link>
              </div>
            </div>
          </section>
          {/* Nested Routes menu */}
          <div className="container">
            <div className="py-2 ">
              <ul className="flex">
                <NavLink
                  to="/user-profile/"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    About
                  </li>
                </NavLink>
                <NavLink
                  to="/user-profile/skills"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Skills
                  </li>
                </NavLink>

                <NavLink
                  to="/user-profile/featured"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Featured
                  </li>
                </NavLink>

                <NavLink
                  to="/user-profile/experience"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Experience
                  </li>
                </NavLink>

                <NavLink
                  to="/user-profile/courses"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  {" "}
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Courses
                  </li>
                </NavLink>

                <NavLink
                  to="/user-profile/projects"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  {" "}
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    Projects
                  </li>
                </NavLink>

                <NavLink
                  to="/user-profile/more"
                  className={({ isActive }) =>
                    isActive && "border-b-2 border-blue-600"
                  }
                >
                  <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                    More
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F2F5] pt-6">
        <div className="container">
          <div className="bg-white rounded-lg">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
