import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { serverLink } from '../../../../utilities/links';
import axios from 'axios';
import Switch from 'react-switch';


const ChatHeaderModel = ({ isOpen, onClose, currentChatId }) => {
    const [isOn, setIsOn] = useState(false);

    if (!isOpen) return false;
    const saveToken = sessionStorage.getItem("accessToken");

    const handleToggle = () => {
        setIsOn(!isOn);

        // Call API based on state
        if (!isOn) {
            // Call API for "Off" state
            callOffApi();
        } else {
            // Call API for "On" state
            callOnApi();
        }
    };

    const callOffApi = async () => {
        const data = { active_bot: true }
        const response = await axios({
            method: "PATCH",
            url: `${serverLink}/chat/chatroom/update/${currentChatId}`,
            data: data,
            headers: {
                'Authorization': 'Token ' + saveToken,
            }
        });
        const data1 = await response;

    };

    const callOnApi = async () => {
        const data = { active_bot: false }
        // try {
        //     const response = await axios.patch(`${serverLink}/chat/chatroom/${currentChatId}`, { data }, {
        //         headers: {
        //             'Authorization': 'Token ' + saveToken,
        //         },
        //     });
        //     console.log(response?.data?.results);
        // } catch (error) {
        //     console.error(error);
        // }
        const response = await axios({
            method: "PATCH",
            url: `${serverLink}/chat/chatroom/update/${currentChatId}`,
            data: data,
            headers: {
                'Authorization': 'Token ' + saveToken,
            }
        });
        const data2 = await response;
    };

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
                    <p className='mx-2 text-xl'>Enable Bot</p>
                    <button>
                        <Switch checked={isOn} onChange={handleToggle}
                            className={`${isOn ? 'bg-green-500' : 'bg-gray-300'
                                } relative inline-flex items-center h-5 rounded-full w-8`}
                        // handleDiameter={16}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatHeaderModel;