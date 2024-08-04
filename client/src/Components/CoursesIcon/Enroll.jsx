import React, { useEffect, useState } from 'react';

import image from "../../assets/img/course-1.jpg";
import List from './List';
import { useParams } from 'react-router-dom';

function Enroll() {
 const params = useParams()

    return (
        <div className='flex h-[100vh] md:flex-row flex-col'>
            <div className='md:w-1/3 w-full px-20 flex justify-center items-start mt-14 rounded-lg'>
                <div className='shadow-lg group overflow-hidden transition duration-300 hover:-translate-y-2'>
                    <div className='relative'>
                        <img src={image} alt="" className='transition w-full duration-300 group-hover:scale-105 h-52 overflow-hidden' />
                    </div>
                    <div className='p-4 transition duration-300 group-hover:bg-orange-400'>
                        <h1 className='font-bold text-black text-xl transition duration-300 group-hover:text-white'>
                          {params.name}
                        </h1>

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

                        <div className='transition duration-300 z-30 group-hover:text-white text-gray-500 my-5'>
             
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-2/3 md:mx-10 m-10'>
               <List/>
            </div>
        </div>
    );
}

export default Enroll;
