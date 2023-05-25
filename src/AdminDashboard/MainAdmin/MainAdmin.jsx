import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './MainAdmin.css';

const MainAdmin = () => {
  // dashboard open and closed switch
  const [dbSwitch, setDbSwitch] = useState(false);
  const dashboardSwitch = { dbSwitch, setDbSwitch };

  // use Location


  return (
    //main admin dashboard section
    <section className="flex">
      {/* admin sidebar */}
      <div
        className={` bg-[#f3f3f3]  dark:bg-[#0b1120] shadow-lg border-r-2  min-h-screen duration-300 ease-in-out ${dbSwitch ? 'w-[17%] min-w-[15rem]' : 'w-[5rem]'
          }`}
      >
        <Sidebar dashboardSwitch={dashboardSwitch} />
      </div>

      {/* admin component render */}
      <div className={`bg-[#f3f3f3]  dark:bg-[#0b1120] min-w-[83%] w-full lg:p-5 p-2`}>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default MainAdmin;
