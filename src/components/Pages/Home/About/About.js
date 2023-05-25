import React from 'react';
import aboutimg from '../../../../images/about-img.jpg';
import './About.css'
const About = () => {
    return (
        <div className=' pt-[10rem] bg-[#ffff] dark:bg-[#0F172A]'>
            <div className='w-[85%] mx-auto'>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                    <div className='flex justify-center'>
                        <img className=' scale-100 rounded-[350px] w-2/3 ' src={aboutimg} alt="" />
                    </div>
                    <div className='mt-[3rem] md:m-0'>
                        <h1 className='section-tittle relative color-blue-dark font-semibold inline-block dark:text-[#38BDF8]'>About Us</h1>
                        <h1 className='text-[37px] md:text-[50px] leading-[45px]  md:leading-[60px] mb-[15px] font-semibold text-[#1C2880] dark:text-[#E2E8F0]'>We’re Ai Sales Teams Since 2020</h1>
                        <p className='text-[22px] font-semibold mb-[20px] text-[#3878DF] dark:text-[#38BDF8]'>Hire Best AI sales company all over the world</p>
                        <p className='mb-[20px] para-color text-[18px] dark:text-[#8C9BB6]'>
                            Welcome to AI Sales teams, your trusted partner in revolutionizing sales teams through artificial intelligence. At AI Sales teams, we are passionate about leveraging cutting-edge technology to empower sales teams and drive unprecedented growth.</p>

                        <ul className='heading-color font-semibold text-[20px]'>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Intelligent Sales Automation</li>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Predictive Analytics</li>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Personalized Sales Enablement</li>
                            <li className='mb-[15px] dark:text-[#8C9BB6]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark dark:text-[#38BDF8]"></i>Real-time Sales Insights</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;