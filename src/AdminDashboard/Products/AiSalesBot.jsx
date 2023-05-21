import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../../components/Pages/Home/Service/MiniComponent/Modal';
import SingleService from '../../components/Pages/Home/Service/MiniComponent/SingleService';
import { useCompanyStore } from '../../stateManagement/CompanyStore';


const AiSalesBot = () => {
    const [isOpen, setIsOpen] = useState(false);


    const company = useContext(useCompanyStore)?.company;
    // console.log(company)


    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div className=''>
            <div className='flex md:items-center md:pl- justify-end mr-5'>
                <button onClick={handleOpenModal} className='btn-primary-blue dark:bg-[#0284C7] text-white flex items-center'>Create New <span className='space-x-2 ps-2'><AiOutlinePlus className='text-white' /></span> </button>
            </div>

            <div className='relative w-full container mx-auto float-right'>

                <Modal isOpen={isOpen} onClose={handleCloseModal} />
            </div>

            <div className=' flex flex-wrap justify-start'>
                {
                    company?.map((single) =>
                        <SingleService key={single.id}
                            id={single?.id}
                            name={single?.name}
                            whatsapp_number={single?.whatsapp_number} />
                    )
                }

            </div>

        </div>
    );
};

export default AiSalesBot;