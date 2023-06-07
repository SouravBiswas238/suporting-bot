import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ChatHeaderModel = ({ isOpen, onClose }) => {
    const [isOn, setIsOn] = useState(true);

    if (!isOpen) return null;

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="absolute right-2 top-2 mt-10 mr-5 inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white p-4 max-w-sm">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <FaTimes className="w-5 h-5" />
                </button>
                <div className="mt-4 flex  items-center justify-between ">
                    <p className='mr-5'>Enable Bot</p>
                    <button
                        className={` flex items-center justify-center w-8 h-4 rounded-full transition-colors ${isOn ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                        onClick={handleToggle}

                    >
                        <span
                            className={`w-3 h-3 rounded-full transition-transform transform ${isOn ? 'translate-x-2' : '-translate-x-2'
                                } ${isOn ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatHeaderModel;