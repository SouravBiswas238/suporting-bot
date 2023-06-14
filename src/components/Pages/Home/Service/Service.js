import React from 'react';
import './Service.css'
import SingleService from './MiniComponent/SingleService';

const Service = () => {

    return (
        <div className='container mx-auto py-1 bg-[#f3f3f3]  dark:bg-[#0b1120]'>
            {/* heading */}
            <div className='justify-center flex-wrap pt-6'>
                <div className='text-center'>
                    <h1 className='section-tittle relative text-[#061835] font-semibold inline-block dark:text-[#38BDF8] '>Service</h1>
                    <h1 className='text-[37px] md:text-[55px] leading-[45px]  md:leading-[60px] mb-[15px] font-semibold text-[#1C2880] dark:text-[#E2E8F0]'>AI Sales Teams</h1>
                    <p className='mb-[20px] para-color text-[22px] font-semibold dark:text-[#38BDF8]'>Professional Chat bot product  provide solutions</p>
                </div>


            </div>
            {/* service */}
            <div className='md:w-[100%] w-[95%] mx-auto mt-8'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 '>
                    <SingleService />
                    <SingleService />
                    <SingleService />
                    <SingleService />
                    <SingleService />
                    <SingleService />
                </div>
            </div>
        </div>
    );
};

export default Service;