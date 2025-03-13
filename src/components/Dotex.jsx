import React from 'react';

const Dotex = () => {
  return (
    <div>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/0pGsCykX/file-20231010-21-ljmz9o.jpg"
            className="w-[350px] h-[300px] md:max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl md:text-5xl text-black font-bold">How Dotex Works?</h1>
            <p className="py-6 text-gray-500">
              Dolor sit amet consectetur elit sed eiusmod tempor incide dunt labone dolore magna aliqua enim add minim veniam quis nostrud.
            </p>
            <div>
              <ul className="steps steps-vertical">
                <li className="step step-primary">
                  <div className='justify-start text-start'>
                    <h2 className='text-2xl font-black text-black py-3'> Data for All Your People
                    </h2>
                    <p className='text-gray-500'>Dolor sit amet consectetur elit eiusmod tempor incide dunt labore dolone magna aliqua enim.</p></div></li>
                <li className="step step-primary">
                  <div className='justify-start text-start'>
                    <h2 className='text-2xl font-black text-black py-3'>A New Breed of AI</h2>
                    <p className='text-gray-500'>Dolor sit amet consectetur elit eiusmod tempor incide dunt labore dolone magna aliqua enim.</p>
                  </div>
                </li>
                <li className="step step-primary">
                  <div className='justify-start text-start'>
                    <h3 className='text-2xl text-black font-black py-3'>Analytics Chemical</h3>
                    <p className='text-gray-500'>Dolor sit amet consectetur elit eiusmod tempor incide dunt labore dolone magna aliqua enim.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dotex;