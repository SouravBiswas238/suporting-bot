import React from 'react';
import '../Home/Home.css';
import heroImg from '../../../../images/banner-ai.jpg';
import heroImgLogo from '../../../../images/cerLogo.png';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  // navigate for developer
  const navigateDeveloper = useNavigate();
  //navigate for recruiter

  const navigateRecruiter = useNavigate();
  return (
    <div className=" bg-[#F3F3F3] md:h-[110vh] h-full relative pb-[8rem] pt-[6rem] md:p-0 dark:bg-[#0b1120]">
      <div className=" h-full w-[95%] md:w-[75%] mx-auto ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2  h-full mx-auto ">
          <div className="flex justify-center mb-[3rem] md:hidden">
            <img
              src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png"
              alt=""
            />
          </div>
          <div className=" flex justify-center items-center">
            <div>
              <h1 className="md:text-[75px] text-[40px] leading-[60px] md:leading-[92px] font-bold text-[#1C2880] mb-[35px] dark:text-[#E2E8F0]">
                AI Sales{' '}
                <span className="dark:text-[#38BDF8] text-[#3878DF]">Teams</span>
              </h1>
              <h1 className="md:text-[50px] text-[40px] leading-[60px] md:leading-[62px] font-bold text-[#1C2880] mb-[35px] dark:text-[#E2E8F0]">
                Empowering Sales  <span className="dark:text-[#38BDF8] text-[#3878DF]">Teams</span> with Artificial Intelligence

              </h1>
              <p className=" para-color dark:text-[#8C9BB6] text-[18px] mb-[45px] md:pr-[7%]  font-semibold">
                Welcome to AI Sales teams. We believe in the power of artificial intelligence to revolutionize the way sales teams operate. Our cutting-edge technology and innovative solutions are designed to enhance sales performance, boost productivity, and drive revenue growth.
              </p>
              <div>
                <button
                  className=" btn-primary-blue dark:bg-[#0284C7] text-white "
                >
                  Stay Connected{' '}
                  <i className="fa-solid fa-angle-right ml-[6px]"></i>
                </button>


              </div>
            </div>
          </div>
          <div className="hidden  md:flex justify-center items-center">
            <img
              alt="nai"
              src={heroImg}
              className=" scale-90 rounded-[350px] pl-[8rem] relative"
            />
            <img
              src={heroImgLogo}
              className="absolute bottom-[8rem] right-[27.1rem]"
              alt=""
            />
          </div>
        </section>

        <div>
          <img
            className="absolute top-[3rem] left-[2rem] hidden  md:inline-block"
            src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
