import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import EditModal from '../../components/Pages/Home/Service/MiniComponent/EditModal';
import Modal from '../../components/Pages/Home/Service/MiniComponent/Modal';
import SingleService from '../../components/Pages/Home/Service/MiniComponent/SingleService';
import { useCompanyStore } from '../../stateManagement/CompanyStore';
import { serverLink } from '../../utilities/links';


const AiSalesBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [singleCompany, setSingleCompany] = useState({});


    const company = useContext(useCompanyStore)?.company;
    const { saveToken, setEditID, updatedData } = useContext(useCompanyStore);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const handleCloseEditModal = () => {
        setIsOpenEdit(false);
    };
    const handleOpenEditModal = async (id) => {
        setIsOpenEdit(true);
        setEditID(id);
        // fetching single company details
        try {
            const response = await axios.get(`${serverLink}/company/get/${id}`, {
                headers: {
                    'Authorization': 'Token ' + saveToken,
                }
            });
            // Handle the response data
            setSingleCompany(response.data);
        } catch (error) {
            // Handle the error
            console.error(error);
        }
    };

    // console.log(updatedData)
    // if (updatedData) {
    //     toast.success("data edited successfully");
    // }

    return (
        <div className=''>
            <div className='flex md:items-center absolute right-0 justify-end mr-5'>
                <button onClick={handleOpenModal} className='btn-primary-blue dark:bg-[#0284C7] text-white flex items-center'>Create New <span className='space-x-2 ps-2'><AiOutlinePlus className='text-white' /></span> </button>
            </div>
            {/* show modal when open */}
            <div className='relative w-full container mx-auto float-right'>
                <Modal isOpen={isOpen} onClose={handleCloseModal} />
            </div>

            <div className='relative top-10'>
                <EditModal singleCompany={singleCompany} isOpen={isOpenEdit} onClose={handleCloseEditModal} />
            </div>
            {/* show single curd */}
            <div className=' flex flex-wrap justify-start'>
                {
                    company?.map((single) =>
                        <SingleService key={single.id}
                            id={single?.id}
                            name={single?.name}
                            handleOpenEditModal={handleOpenEditModal}
                            whatsapp_number={single?.whatsapp_number} />
                    )
                }

            </div>

        </div>
    );
};

export default AiSalesBot;