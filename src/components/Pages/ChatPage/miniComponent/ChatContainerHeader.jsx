import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaEllipsisV, FaUserCircle } from 'react-icons/fa';
import ChatHeaderModel from './ChatHeaderModel';

const ChatContainerHeader = ({ currentChatName, currentChatId, activeBot }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        setIsModalOpen(false); // Close the modal when currentChatId changes
    }, [currentChatId]);
    return (

        <div className="relative ml-1 ">
            <div className='flex py-2 justify-between bg-[#F3F3F3] px-2 items-center'>
                <div className="avatar flex items-center ">
                    <div className="w-[40px] ml-2 rounded-full">
                        <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
                    </div>
                    <h3 className="text-[#C3CACF] text-xl uppercase">{currentChatName}</h3>
                </div>
                <div className='mr-2'>
                    <button
                        className="text-[#C3CACF] mr-3 transition-all duration-150 hover:text-gray-300"

                    >
                        <BsSearch className="w-5 h-5" />
                    </button>
                    <button
                        className="text-[#C3CACF] mr-2 transition-all duration-150 hover:text-gray-300"
                        onClick={openModal}
                    >
                        <FaEllipsisV className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <ChatHeaderModel activeBot={activeBot} currentChatId={currentChatId} isOpen={isModalOpen} onClose={closeModal} />

        </div>
    );
};

export default ChatContainerHeader;