import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
  return (
    <div className='bg-[#81ddd0]'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;