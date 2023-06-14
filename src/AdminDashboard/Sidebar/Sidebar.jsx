import React, { useState } from 'react';
import { AiFillFileText } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';


const Sidebar = ({ dashboardSwitch }) => {
  // dashboard open and closed switch
  const { dbSwitch, setDbSwitch } = dashboardSwitch;
  const [arrowSwitch, setArrowSwitch] = useState(false)

  // dashboard link style
  const dashboardLinkStyle = `my-2 text-gray-400 hover:text-gray-50 hover:bg-[#3a3f51] flex items-center rounded-lg ${dbSwitch ? 'p-3 text-base ' : 'p-1 text-2xl justify-center'
    } font-semibold cursor-pointer`;

  return (
    <div className='sticky top-0 '>
      <div className="px-2 relative ">
        {/* dashboard open and closed button  */}
        <button
          onClick={() => setDbSwitch(!dbSwitch)}
          className={`  text-2xl text-gray-600 border-2 bg-white border-white rounded-full absolute top-2 right-[-1rem] duration-300 ease-out outline-none `}
        >
          {dbSwitch ? <FaAngleLeft /> : <FaAngleRight />}
        </button>

        {/* dashboard Link */}
        <ul className="pt-9">
          <Link to="/dashboard">
            <li className={dashboardLinkStyle}>
              <AiFillFileText className="mr-2" />
              <span className={`${!dbSwitch && 'hidden py-2'}`}>Home</span>
            </li>
          </Link>

          <li onClick={() => setArrowSwitch(!arrowSwitch)} className={dashboardLinkStyle}>
            <AiFillFileText className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'} mx-2`}>Products</span>
            <span className={`${!dbSwitch && 'hidden'}`}>
              {
                arrowSwitch ? <FaAngleDown className="" /> : <FaAngleUp className="" />
              }
            </span>

          </li>

          <ul className={`${!arrowSwitch && ' hidden '},  w-[90%] `}>
            <Link to="aiSalesBot">
              <li className={dashboardLinkStyle}>
                <AiFillFileText className="mr-2" />
                <span className={`${!dbSwitch && 'hidden'}  text-[16px] `} >AI Sales Bot</span>
              </li>
            </Link>



          </ul>


          <Link to="add-member">
            <li className={dashboardLinkStyle}>
              <IoMdPersonAdd className="mr-2" />
              <span className={`${!dbSwitch && 'hidden'}`}> Add member</span>
            </li>
          </Link>







        </ul>

      </div >

    </div >
  );
};

export default Sidebar;