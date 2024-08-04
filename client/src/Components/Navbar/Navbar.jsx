import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { AuthContext } from '../../Context/Authcontext';
function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation()
  console.log(location)
  const [menu,setmenu] = useState(false)
  const {token, login, logout} = useContext(AuthContext)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <nav className={`bg-white px-5 border-gray-200 dark:bg-gray-900 z-50 ${isScroll ? "fixed w-full animate":""}`}>
  <div className="max-w-[100vw]-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="https://flowbite.com/" className='flex space-x-2'>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
        TECH-SPRINT
      </span>
    </Link>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      onClick={()=>setmenu(!menu)}
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className={`hidden w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium lg:space-y-0 space-y-3 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link className = {`${location.pathname === "/"?"text-orange-400":"text-black"}`} to={"/"} aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link className = {`${location.pathname === "/about"?"text-orange-400":"text-black"}`} to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className = {`${location.pathname === "/service"?"text-orange-400":"text-black"}`} to={"/service"}>
            Services
          </Link>
        </li>
        <li>
        <Link
          to={"/course"}
          className={` dark:hover:bg-gray-600 text-black dark:hover:text-white ${location.pathname === "/course"?"text-orange-400":"text-black"}`}
        >
          Courses
        </Link>
      </li>
        <li className='group'>
        
  <div
    id="dropdownDelayButton"
    data-dropdown-toggle="dropdownDelay"
    data-dropdown-placement="bottom"
    data-dropdown-delay={100}
    data-dropdown-trigger="hover"
    className=" font-medium  text-black text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
   
  >
    Practice{" "}
    <svg
      className="w-2.5 h-2.5 ms-3 transition-all duration-300 group-hover:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 4 4 4-4"
      />
    </svg>
  </div>
  
  <div
    id="dropdownDelay"
    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDelayButton"
    >
 
      <li>
        <Link
             to={"/contest"}
          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${location.pathname === "/contest"?"text-orange-400":"text-black"}`}
        >
          Contest
        </Link>
      </li>
      <li>
        <Link
           to={"/compiler"}
          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${location.pathname === "/compiler"?"text-orange-400":"text-black"}`}
        >
          Compiler
        </Link>
      </li>

    </ul>
  </div>


        </li>
        <li>
          <Link className = {`text-black ${location.pathname === "/contact"?"text-orange-400":"text-black"}`} to={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          {token?<button
            onClick={()=>{logout()}}
  
  className="block text-white bg-orange-400 border-2 transition duration-300 border-transparent hover:text-orange-400 hover:border-orange-400  hover:bg-transparent  font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
>
  Logout
</button>: <button
  data-modal-target="authentication-modal"
  data-modal-toggle="authentication-modal"
  className="block text-white bg-orange-400 border-2 transition duration-300 border-transparent hover:text-orange-400 hover:border-orange-400  hover:bg-transparent  font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
>
  Login
</button>}


        </li>
      </ul>
    </div>
  </div>
</nav>

<Login/>
<Signup/>

    </>
  );
}

export default Navbar;