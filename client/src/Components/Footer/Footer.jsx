import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-semibold">IT-SPRINT</h4>
            <p className="text-sm">© 2024 IT-SPRINT. All rights reserved.</p>
          </div>

          <div className="flex flex-row  md:space-y-0 mb-4 md:mb-0 space-x-3  text-center md:text-left">
            <a href="#" className="lg:text-3xl text-2xl hover:text-gray-400 transition duration-300"><FaFacebook/></a>
            <a href="#" className="lg:text-3xl text-2xl hover:text-gray-400 transition duration-300"><FaInstagram /></a>
            <a href="#" className="lg:text-3xl text-2xl hover:text-gray-400 transition duration-300"><FaGithub /></a>
            <a href="#" className="lg:text-3xl text-2xl hover:text-gray-400 transition duration-300"><FaLinkedin /></a>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">Terms of Service</a>
            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
