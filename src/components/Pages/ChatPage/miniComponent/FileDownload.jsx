import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { FaFileImage, FaFilePdf } from 'react-icons/fa';
import { serverLink } from '../../../../utilities/links';




const FileDownload = ({ fileName, fileType, mediaId }) => {
    const [clicked, setClicked] = useState(false);
    const [url, setUrl] = useState();
    const token = 'EAACwirKypwsBAGZBHQhfnzXlPUuTjEXfPXA3y2pq1RZAp4ZCbDvBwIXpkQRANZBsQbwi gQ5OW0JgIKOxOeZBT79nqNqonZAK7vO1QERkUxDvAqbNov5ZB4IRM37z2Fzh6i5zEVViz mYRZBSYAlJjoIfjZASDONU14UyXJIZAfM9cRaWNILcPsVeAhXOwsiUaphK8lifalQVZCvGXFs WubIcq58GQhVSBfLL3EEZD'

    console.log(url)
    useEffect(() => {
        if (url) {
            axios
                .get(url, {
                    responseType: 'blob', // Set the response type to 'blob' to receive the file as binary data
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then((response) => {
                    // Determine the file type based on the "fileType" prop

                    console.log(response)

                    // Create a temporary URL object from the response data
                    const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: response?.data?.type }));

                    // Create an <a> element to trigger the file download
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.download = fileName;
                    link.click();

                    // Clean up the temporary URL object
                    window.URL.revokeObjectURL(fileURL);
                })
                .catch((error) => {
                    // Handle the error
                    console.error(error);
                });
        }
    }, [url, token, fileName, fileType]);



    const handleClick = () => {
        setClicked(true);
        // console.log(mediaId);
        axios.get(`https://graph.facebook.com/v17.0/${mediaId}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            // Handle the response data
            setUrl(response.data?.url);
        })
            .catch(error => {
                // Handle the error
                console.error(error);
            });


        setTimeout(() => {
            setClicked(false);
        }, 4000);
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex">
                {fileType === 'image' ? <FaFileImage size={24} /> : <FaFilePdf size={24} />}
                <span className="mx-2">{fileName}</span>
            </div>
            <div className={`rounded-full   border-2 p-1 transition-all duration-500`}>
                <div className="flex items-center ">
                    <div
                        className={`${clicked ? 'text-gray-500 animate-pulse' : ''} flex items-center justify-center rounded-full w-12 h-12 cursor-pointer`}
                        onClick={handleClick}
                    >
                        <span className='px-2'>
                            {clicked ? 'Downloading...' : 'Download'}
                        </span>
                        <BsDownload size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileDownload;
