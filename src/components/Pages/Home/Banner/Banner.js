import React, { useEffect, useRef } from 'react';
import '../Home/Home.css';
// import heroImg from '../../../../images/banner-img.jpg';
// import heroImgLogo from '../../../../images/cerLogo.png';
import aiBanner from './Ai-banner.json'
import './Banner.css';
import Lottie from 'lottie-web';

const Banner = () => {
  // const heroImg = 'https://i.ibb.co/LJTqTzj/ai-robot-frame-technology-abstract-futuristic-tech-design-with-blank-space.jpg'

  // for lottie
  const anime = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: aiBanner,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
    // More logic goes here
  }, []);
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
          <div className="hidden w-full  md:flex justify-center items-center">
            <div
              className=" md:h-[300px] lg:h-[420px]"
              style={{
                // height: '300px',
                width: '100%',
                overflow: 'hidden',
                outline: 'none',
                margin: '0 auto',
              }}
              ref={anime}
            ></div>
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
