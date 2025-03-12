import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import chemical from '../assets/chemical-logo.jpg'

const Banner = () => {
  return (
    <div>
      <div className="hero w-full min-h-screen">
        <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
          <img
            src={chemical}
            className=" chemical w-[400px] h-[400px] rounded-lg mt-12 shadow-2xl" />
          <div>
            <h1 className="text-6xl leading-16 font-bold">Optimizing <br /> <span className='text-yellow-500 underline'>Chemical</span> Efficacy <br /> & Safety Standards </h1>
            <p className="py-6">
              Ensuring compliance and safety through advanced analytics <br /> and expert consultation
            </p>
            <button className="bg-[#188C99] py-3 px-6 mt-7 hover:py-4 hover:px-6 hover:text-xl flex items-center gap-4 rounded-full text-white">DISCOVER OUR APPROACH <FaArrowRightLong className='text-xl' /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;