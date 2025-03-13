import React from 'react';
import footerLogo from '../assets/tree-logo.jpg'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <aside>
          <div className='flex items-center gap-5 pb-5'>
            <img className='w-10 h-10 rounded-full' src={footerLogo} alt="" />
            <h2 className='text-3xl font-black'>Detox</h2>
          </div>
          <p className='text-xl'>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Link</h6>
          <a className="link link-hover">Company History</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Private</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <a className="link link-hover">Flat 20, Reynolds Neek, North Hele</a>
          <a className="link link-hover">naville, FV77 8WS</a>
          <a className="link link-hover">+2(305) 587-3407</a>
          <div className='flex items-center gap-8 mt-4'>
            <p className='text-3xl bg-blue-600 rounded-full'><FaFacebook /></p>
            <p className='bg-white text-blue-500 text-xl p-1  rounded-full'> <FaTwitter /></p>
            <p className='bg-white text-red-700 text-xl rounded-full p-1'> <FaYoutube /></p>
            <p className='bg-white text-blue-600 text-xl rounded-full p-1'><FaLinkedinIn /></p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;