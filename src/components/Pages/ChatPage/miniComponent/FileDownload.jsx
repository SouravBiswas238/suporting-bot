import React, { useState } from 'react';
import { BsDownload } from 'react-icons/bs';

const FileDownload = ({ fileName }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 4000);
    };

    return (
        <div className="flex items-center">
            <div
                className={`${clicked ? 'rounded-full border-green-500 border-2 p-1' : ''
                    } transition-all duration-500`}
            >
                <div className="flex items-center">
                    <div className="rounded-full w-12 h-12">
                        {/* File Icon */}
                        <div className="bg-gray-300 rounded-full w-full h-full" />
                    </div>
                    <div
                        className={`${clicked ? 'text-white' : ''
                            } flex items-center justify-center rounded-full w-12 h-12 cursor-pointer`}
                        onClick={handleClick}
                    >
                        {/* Download Icon */}
                        <BsDownload size={24} />
                    </div>
                </div>
            </div>
            <span className="ml-2">{fileName}</span>
        </div>
    );
};

export default FileDownload;