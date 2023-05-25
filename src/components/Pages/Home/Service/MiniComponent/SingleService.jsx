import React from 'react';
import { Link } from 'react-router-dom';
import ThreeDotComponent from '../../../../../AdminDashboard/Products/MiniComponent/ThreeDotComponent';
import { FaComment } from 'react-icons/fa';

const SingleService = ({ id, name, whatsapp_number }) => {
    return (
        <div className='m-2 p-5 py-6 shadow-lg w-1/4  relative service-item dark:bg-[#182133] transition-all duration-500'>
            <div className='mb-[1rem] absolute top-3 right-2 text-[#061835] dark:text-[#38BDF8]'>
                <ThreeDotComponent id={id} />
            </div>
            <div>
                <h1 className='text-3xl heading-color font-semibold mb-[15px] dark:text-[#E2E8F0]'>{name}</h1>
                <ul className='text-[18px] mb-4'>
                    <li className='dark:text-[#8C9BB6] text-[#505E6B] uppercase'>{whatsapp_number}</li>
                </ul>
                <Link to={`/chat/${id}`} className='text-[#061835] dark:text-[#38BDF8] font-semibold text-[18px] flex items-center'>
                    <span className='px-2'>Chat</span> <FaComment />
                </Link>
            </div>
        </div>
    );
};

export default SingleService;
