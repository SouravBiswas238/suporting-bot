import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import ChatHeaderModel from './ChatHeaderModel';

const ChatContainerHeader = ({ currentChatName, currentChatId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div className="relative ">
            <div className='flex justify-between bg-sky-500 py-4 px-5  rounded items-center'>
                <h3 className="text-white text-xl px-2 py-5 uppercase">{currentChatName}</h3>
                <button
                    className="text-white mr-2 transition-all duration-150 hover:text-gray-300"
                    onClick={openModal}
                >
                    <FaEllipsisV className="w-5 h-5" />
                </button>
            </div>
            <ChatHeaderModel currentChatId={currentChatId} isOpen={isModalOpen} onClose={closeModal} />

        </div>
    );
};

export default ChatContainerHeader;