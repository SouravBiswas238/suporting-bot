import React, { useState } from 'react';
import { RiSearchLine, RiArrowDropDownLine, RiFilter3Line } from 'react-icons/ri';

const SearchNewChat = () => {
    const [inputValue, setInputValue] = useState('');
    const [showSearchIcon, setShowSearchIcon] = useState(true);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Toggle the search icon based on input value
        setShowSearchIcon(value === '');
    };

    return (
        <div className="flex items-center text-[14px]  b-2 border-b-2">
            <div className="flex items-center justify-center  shadow-md mx-4 w-[95%] my-2 px-2 bg-[#F0F2F5]">
                {showSearchIcon ? (
                    <RiSearchLine className="h-5 w-5  text-[#C3CACF] cursor-pointer" />
                ) : (
                    <RiArrowDropDownLine className="h-6 w-6 text-[#C3CACF] cursor-pointer" />
                )}
                <p className='w-[90%]'>
                    <input
                        type="text"
                        placeholder="Search contracts.."
                        value={inputValue}
                        onChange={handleInputChange}
                        className="bg-[#F0F2F5] flex-1 w-full px-2 py-2 outline-none rounded text-[13px] text-[#C3CACF] "
                    />
                </p>

            </div>

            <div className="flex items-center mx-2">
                <RiFilter3Line className="h-6 w-6 text-[#C3CACF] cursor-pointer" />
            </div>
        </div>
    );
};

export default SearchNewChat;
