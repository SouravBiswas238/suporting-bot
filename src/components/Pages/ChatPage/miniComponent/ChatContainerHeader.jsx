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

        <div className="relative flex justify-between bg-sky-500 py-4 px-5 my-border rounded items-center">


            <div className="text-white px-2 uppercase">
                <h3 className="lg:text-2xl text-sm">{currentChatName}</h3>
            </div>
            <button
                className="text-white transition-all duration-150 hover:text-gray-300"
                onClick={openModal}
            >
                <FaEllipsisV className="w-5 h-5" />
            </button>
            <ChatHeaderModel isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default ChatContainerHeader;