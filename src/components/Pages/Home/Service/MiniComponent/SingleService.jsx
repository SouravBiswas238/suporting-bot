import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = () => {
    return (

        <div className=' shadow-lg  service-item  dark:bg-[#182133] transition-all duration-500'>
            <i className="fa-solid mb-[15px] fa-code-compare text-[75px] text-[#061835] dark:text-[#38BDF8]"></i>
            <div>
                <h1 className='text-[24px] heading-color font-semibold mb-[15px] dark:text-[#E2E8F0]'>Strategy</h1>
                <ul className='text-[18px] mb-4'>
                    <li className='dark:text-[#8C9BB6] text-[#505E6B]'><Link to="/" className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></Link>Product Management</li>
                    <li className='dark:text-[#8C9BB6] text-[#505E6B]'><Link to="/" className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></Link>MVP Definition</li>
                    <li className='dark:text-[#8C9BB6] text-[#505E6B]'><Link to="/" className="fa-solid mr-[12px] fa-arrow-right dark:text-[#38BDF8]"></Link>Product Strategy</li>
                </ul>
                <Link to="/" className='text-[#061835] dark:text-[#38BDF8] font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></Link>
            </div>
        </div>


    );
};

export default SingleService;