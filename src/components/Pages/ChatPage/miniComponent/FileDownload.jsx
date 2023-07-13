import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaFileImage, FaFilePdf } from 'react-icons/fa';

const FileDownload = ({ fileName, fileType, imageUrl }) => {
    const handleClick = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = imageUrl;
        downloadLink.download = fileName;
        downloadLink.click();
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex">
                {fileType === 'image' ? <FaFileImage size={24} /> : <FaFilePdf size={24} />}
                <span className="mx-2">{fileName}</span>
            </div>
            <a href={imageUrl} download={fileName} onClick={handleClick}>
                <img src={imageUrl} alt={fileName} style={{ width: '100%', height: 'auto' }} />
            </a>
            <div className={`rounded-full border-2 p-1 transition-all duration-500`}>
                <div className="flex items-center ">
                    <div className="flex items-center justify-center rounded-full w-12 h-12 cursor-pointer" onClick={handleClick}>
                        <span className="px-2">Download</span>
                        <BsDownload size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileDownload;
