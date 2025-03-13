import React from 'react';
import logoTree from '../assets/tree-logo.jpg'
import { TiShoppingCart } from 'react-icons/ti';

const Navbar = () => {

  const links = <div className='flex items-center gap-3'>
    <li><a>Home</a></li>
    <li><a>Services</a></li>
    <li><a>Insight Navigator</a></li>
    <li><a>About Us</a></li>
    <li><a>Contact Us</a></li>
    <button className='bg-[#188C99] p-2 rounded-full'><TiShoppingCart className='text-white text-xl' /></button>
  </div>
  return (
    <div className='relative'>
      <div className="navbar fixed top-5 right-0 left-0 bg-white border-2 border-[#188C99] w-11/12 mx-auto rounded-2xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-10 h-10 border p-1 rounded-full' src={logoTree} alt="" />
            <a className="btn btn-ghost text-xl">LOGO HERE</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;