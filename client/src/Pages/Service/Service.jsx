import React from 'react'
import carousel1 from "../../assets/img/carousel-1.jpg"
import carousel2 from "../../assets/img/carousel-2.jpg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from '../../assets/img/instructor-1.jpg';
import Footer from '../../Components/Footer/Footer';
function Service() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
  });

  return (
   <>
    <section className={`bg-center bg-no-repeat bg-cover  bg-gray-700 bg-blend-multiply `} style={{ backgroundImage: `url(${carousel1})`}}>
  <div className="px-4 mx-auto max-w-screen-xl text-center py-14">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
Service
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Here at Flowbite we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.
    </p>
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mx-24 sm:mx-0">
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 translate duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-orange-400 ">
              Get started
             
          </a>
          <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium focus:outline-none text-white rounded-lg bg-orange-400 translate duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-orange-400  focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
              Learn more
          </a>  
      </div>
  </div>
</section>
<br />
<br />
<motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
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
        <div className='flex flex-col lg:w-1/2 w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col  "
        >
          <h1 className="text-2xl font-bold mb-2 text-orange-400">Service</h1>
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
          Service
        </button>
      </motion.div>
        </div>
        
      </motion.div>

      <Footer/>
   </>
  
  )
}

export default Service
