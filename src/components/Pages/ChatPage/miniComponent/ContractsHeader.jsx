import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';

const ContractsHeader = () => {
    return (
        <div className="flex items-center justify-between py-4 px-2  bg-[#F3F3F3]">
            <div className="avatar p-2 ">
                <div className="w-[40px] rounded-full">
                    <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center">
                <RiChat1Line className="text-2xl text-[#C3CACF] mx-4" />
                <BsThreeDots className="text-2xl text-[#C3CACF]" />
            </div>
        </div>
    );
};

export default ContractsHeader;
