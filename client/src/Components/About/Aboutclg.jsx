import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from '../../assets/img/instructor-1.jpg';

function Aboutclg() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex md:flex-row flex-col lg:space-x-10 space-y-4 p-4 lg:mx-20 mx-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='lg:w-1/2 w-full'
        >
          <img src={image} alt="About us" className=" shadow-lg  w-full" />
        </motion.div>
        <div className='flex flex-col  lg:w-1/2 w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col"
        >
          <h1 className="text-2xl font-bold mb-2 text-orange-400">About us</h1>
          <h2 className="text-xl text-gray-700 mb-4">Innovative way To Learn</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam sequi quibusdam veritatis, vero commodi in temporibus. Neque architecto illum iure rem aut voluptatibus ex placeat non, veritatis doloremque illo quam nostrum voluptates id esse ipsam, officia eveniet? Magnam blanditiis sit dolor tempora earum. Voluptas et eveniet in. Error, qui?
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-start mt-10"
      >
        <button className="bg-orange-400 hover:text-orange-400 hover:border-orange-400 hover:bg-transparent text-white px-4 py-2  border-2 border-transparent transition duration-300">
          About us
        </button>
      </motion.div>
        </div>
        
      </motion.div>
   
    </>
  );
}

export default Aboutclg;
