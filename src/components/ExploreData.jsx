import React from 'react';
import { SiDatabricks } from 'react-icons/si';

const ExploreData = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-3xl text-white md:text-black md:text-4xl text-center font-black py-5'>Explore Our Data Services</h2>
      <p className='py-2 text-center text-gray-500'>Data services refer to a set of tools, technologies, and processes that enable businesses to collect, <br /> manage, store, process, analyze, and utilize data efficiently. These services ensure that data is available, <br /> secure, and structured for effective decision-making and operational efficiency.
      </p>
      <div className='grid md:grid-cols-3 py-10 grid-cols-1 gap-5'>
        <div className='flex justify-center hover:bg-blue-200 rounded-2xl p-5 shadow-2xl gap-4 items-center'>
          <p className='text-2xl text-blue-500 border-8 border-[#188C99] hover:bg-blue-400 hover:text-white rounded-full p-2'><SiDatabricks /></p>
          <div>
            <h2 className='text-xl font-bold text-white md:text-black py-2'>Big Data Consulting</h2>
            <p className='text-gray-500'>Big Data consulting services focus on helping organizations harness large datasets to improve decision-making, operational efficiency, and business intelligence. Consultants design and implement data architectures, integrate analytics tools, and provide predictive modeling solutions.</p>
          </div>
        </div>
        <div className='flex justify-center hover:bg-blue-200 rounded-2xl p-5 shadow-2xl gap-4 items-center'>
          <p className='text-2xl text-blue-500 border-8 border-[#188C99] hover:bg-blue-400 hover:text-white rounded-full p-2'><SiDatabricks /></p>
          <div>
            <h2 className='text-xl text-white md:text-black font-bold py-2'>Big Data Consulting</h2>
            <p className='text-gray-500'>Big Data consulting services focus on helping organizations harness large datasets to improve decision-making, operational efficiency, and business intelligence. Consultants design and implement data architectures, integrate analytics tools, and provide predictive modeling solutions.</p>
          </div>
        </div>

        <div className='flex justify-center hover:bg-blue-200 rounded-2xl p-5 shadow-2xl gap-4 items-center'>
          <p className='text-2xl text-blue-500 border-8 border-[#188C99] hover:bg-blue-400 hover:text-white rounded-full p-2'><SiDatabricks /></p>
          <div>
            <h2 className='text-xl text-white md:text-black font-bold py-2'>Big Data Consulting</h2>
            <p className='text-gray-500'>Big Data consulting services focus on helping organizations harness large datasets to improve decision-making, operational efficiency, and business intelligence. Consultants design and implement data architectures, integrate analytics tools, and provide predictive modeling solutions.</p>
          </div>
        </div>

        <div className='flex justify-center hover:bg-blue-200 rounded-2xl p-5 shadow-2xl gap-4 items-center'>
          <p className='text-2xl text-blue-500 border-8 border-[#188C99] hover:bg-blue-400 hover:text-white rounded-full p-2'><SiDatabricks /></p>
          <div>
            <h2 className='text-xl text-white md:text-black font-bold py-2'>Big Data Consulting</h2>
            <p className='text-gray-500'>Big Data consulting services focus on helping organizations harness large datasets to improve decision-making, operational efficiency, and business intelligence. Consultants design and implement data architectures, integrate analytics tools, and provide predictive modeling solutions.</p>
          </div>
        </div>

        <div className='flex justify-center hover:bg-blue-200 rounded-2xl p-5 shadow-2xl gap-4 items-center'>
          <p className='text-2xl text-blue-500 border-8 border-[#188C99] hover:bg-blue-400 hover:text-white rounded-full p-2'><SiDatabricks /></p>
          <div>
            <h2 className='text-xl text-white md:text-black font-bold py-2'>Big Data Consulting</h2>
            <p className='text-gray-500'>Big Data consulting services focus on helping organizations harness large datasets to improve decision-making, operational efficiency, and business intelligence. Consultants design and implement data architectures, integrate analytics tools, and provide predictive modeling solutions.</p>
          </div>
        </div>

        <div className='flex justify-center hover:bg-blue-300 rounded-2xl p-5 shadow-2xl gap-4 items-center'>
          <p className='text-2xl text-blue-500 border-8 border-[#188C99] hover:bg-blue-400 hover:text-white rounded-full p-2'><SiDatabricks /></p>
          <div>
            <h2 className='text-xl text-white md:text-black font-bold py-2'>Big Data Consulting</h2>
            <p className='text-gray-500'>Big Data consulting services focus on helping organizations harness large datasets to improve decision-making, operational efficiency, and business intelligence. Consultants design and implement data architectures, integrate analytics tools, and provide predictive modeling solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreData;