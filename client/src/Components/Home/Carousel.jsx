import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import carousel1 from "../../assets/img/carousel-1.jpg";
import carousel2 from "../../assets/img/carousel-2.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      image: carousel1,
      title: "We invest in the world’s potential",
      description: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    },
    {
      image: carousel2,
      title: "We invest in the world’s potential",
      description: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    }
  ];

  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div id="animation-carousel" className="relative w-full">
        <div className="relative overflow-hidden h-[95vh]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`duration-200 ease-linear h-full ${activeIndex === index ? 'block' : 'hidden'}`}
              data-carousel-item=""
            >
              <img
                src={item.image}
                className="absolute h-full object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div className='absolute top-0 h-full w-full bg-[#0606069d] flex items-center'>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">{item.title}</h1>
                  <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{item.description}</p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mx-24 sm:mx-0">
                    <Link to="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 transition duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-orange-400">
                      Get started
                    </Link>
                    <Link to="#" className="py-3 px-5 sm:ml-4 text-sm font-medium focus:outline-none text-white rounded-lg bg-orange-400 transition duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-orange-400 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='absolute z-30 top-10 w-full flex justify-center'>
          <div className='flex'>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              type="button"
              className="flex items-center justify-center h-fit px-4 cursor-pointer group"
              onClick={prevSlide}
            >
              <span
                className="inline-flex items-center justify-center w-12 h-12 transition duration-300 bg-[#f48231e4] group-hover:bg-transparent group-hover:border-2 group-hover:border-orange-400 group-hover:text-orange-400 border-2 border-transparent dark:group-hover:bg-gray-800/60"
              >
                <svg
                  className="md:w-5 w-3 transition duration-300 group-hover:text-orange-400 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              type="button"
              className="flex items-center justify-center h-fit px-4 cursor-pointer group"
              onClick={nextSlide}
            >
              <span
                className="inline-flex items-center justify-center w-12 h-12 transition duration-300 bg-[#f48231e4] group-hover:bg-transparent group-hover:border-2 group-hover:border-orange-400 group-hover:text-orange-400 border-2 border-transparent dark:group-hover:bg-gray-800/60"
              >
                <svg
                  className="md:w-5 w-3 transition duration-300 group-hover:text-orange-400 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
