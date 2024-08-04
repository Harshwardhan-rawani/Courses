import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import carousel1 from "../../assets/img/carousel-1.jpg";
import image from "../../assets/img/course-1.jpg";
import Footer from '../../Components/Footer/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <section className={`bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover`} style={{ backgroundImage: `url(${carousel1})` }}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-14">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Course
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mx-24 sm:mx-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 transition duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-orange-400">
              Get started
            </a>
            <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium focus:outline-none text-white rounded-lg bg-orange-400 transition duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-orange-400 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <div className='lg:mx-32 mx-20 grid md:grid-cols-4 grid-cols-1 gap-4'>
        {["HTML", "CSS", "C", "PYTHON"].map((item, index) => (
          <div className='shadow-lg group overflow-hidden transition duration-300 hover:-translate-y-2' key={index}>
            <div className='relative'>
              <img src={image} alt="" className='transition duration-300 group-hover:scale-105 h-52 overflow-hidden' />
            </div>
            <div className='p-4 transition duration-300 group-hover:bg-orange-400'>
              <h1 className='font-bold text-black text-xl transition duration-300 group-hover:text-white'>{item}</h1>

              <div className="flex items-center">
                {Array(4).fill(0).map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
              </div>

              <div className='transition duration-300 z-30 group-hover:text-white text-gray-500 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam</div>

              <Link to={`/enroll/${item}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-orange-400 z-40 hover:text-white group-hover:border-white group-hover:bg-transparent text-white px-4 py-2 border-2 border-transparent transition duration-300"
              >
                Enroll
              </motion.button>
              </Link>
            
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Course;
