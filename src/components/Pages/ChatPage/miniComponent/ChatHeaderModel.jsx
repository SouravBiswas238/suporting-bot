import React, { useContext, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { serverLink } from '../../../../utilities/links';
import axios from 'axios';
import Switch from 'react-switch';
import { useCompanyStore } from '../../../../stateManagement/CompanyStore';

const ChatHeader = ({ isOpen, onClose, currentChatId }) => {
    const saveToken = sessionStorage.getItem('accessToken');
    const { activeBot, setActiveBot } = useContext(useCompanyStore);


    const handleToggle = async () => {
        const updatedValue = !activeBot;

        const data = { active_bot: updatedValue };
        const response = await axios({
            method: 'PATCH',
            url: `${serverLink}/chat/chatroom/update/${currentChatId}`,
            data: data,
            headers: {
                'Authorization': 'Token ' + saveToken,
            },
        });

        setActiveBot(response?.data?.active_bot);

        console.log(response?.data);

    };

    // console.log("current chat header=>", currentChatId, activeBot)

    if (!isOpen) {
        return null;
    }

    return (
        <div className="absolute right-2 top-2 mt-10 inset-0  flex items-center justify-center">
            <div className="relative w-full bg-white  p-4 ">
                <button
                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <FaTimes className="w-5 h-5" />
                </button>
                <div className="flex space-x-1 mt-4">
                    <p className="mx-2 text-xl">Enable Bot</p>
                    <button>
                        <Switch
                            checked={activeBot}
                            onChange={handleToggle}
                            className={`${activeBot ? 'bg-green-500' : 'bg-gray-300'
                                } relative inline-flex items-center h-5 rounded-full w-8`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
