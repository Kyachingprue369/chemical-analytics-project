import React from 'react';
import chemicalAnalytics from '../assets/chemical-analytics.jpg'

const Analytics = () => {
  return (
    <div >
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/scjQyNR/banner-logo.jpg)",
        }}>
        <section className='flex items-center justify-around'>
          <div>
            <img className='w-[500px] h-[450px] border-t-4 border-l-2 rounded-4xl' src={chemicalAnalytics} alt="" />
          </div>
          <div className="hero-content text-start ml-10">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-[#188C99] font-bold">Who We Are?</h1>
              <p className="mb-5 text-2xl font-bold">
                We provide precise analytics to ensure chemical efficacy and uphold top regulatory and safety standards across industries.
              </p>
              <p className='my-3'>We specialize in delivering accurate and reliable analytical services that help businesses optimize chemical performance while ensuring compliance with the highest regulatory and safety standards. Our solutions are designed to meet the unique needs of various industries, providing data-driven insights that drive informed decision-making and improve overall efficiency.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analytics;