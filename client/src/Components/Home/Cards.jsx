import React from 'react'
import { motion } from 'framer-motion';
import brain from "../../assets/svg/brain.svg"
import education from "../../assets/svg/education.svg"
import money from "../../assets/svg/money.svg"
import certificate from "../../assets/svg/certificate.svg"
function Cards() {
  return (
   <>
   <div className='space-y-3 mt-5 mx-5 mb-8'>
    <div className='lg:text-5xl text-4xl font-semibold text-orange-400 text-center'>Invest in your professional goals with Secret Coder</div>
    <div className='lg:text-lg text-md text-center text-black '>Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on Coursera, taught by top instructors.</div>
   </div>
 <br />
     <div className='lg:mx-32 mx-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
 
     <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-sm group mx-auto bg-white "
        >
          <div className="flex flex-col items-center p-6 transition-all duration-500 shadow-lg  group-hover:bg-orange-400 group-hover:-translate-y-2">
            <div className="mb-4">
              <div className="text-4xl text-blue-500">
                <img className="w-20" src={education} alt="" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">title</h2>
            <p className="text-gray-600 text-center group-hover:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, animi? Corporis deserunt alias nulla vitae provident, unde quibusdam tempore mollitia!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5,delay:0.2 }}
          className="max-w-sm group mx-auto bg-white "
        >
          <div className="flex flex-col items-center p-6 transition-all duration-500 shadow-lg  group-hover:bg-orange-400 group-hover:-translate-y-2">
            <div className="mb-4">
              <div className="text-4xl text-blue-500">
                <img className="w-20" src={brain} alt="" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">title</h2>
            <p className="text-gray-600 text-center group-hover:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, animi? Corporis deserunt alias nulla vitae provident, unde quibusdam tempore mollitia!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5,delay:0.4 }}
          className="max-w-sm group mx-auto bg-white "
        >
          <div className="flex flex-col items-center p-6 transition-all duration-500 shadow-lg  group-hover:bg-orange-400 group-hover:-translate-y-2">
            <div className="mb-4">
              <div className="text-4xl text-blue-500">
                <img className="w-20" src={money} alt="" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">title</h2>
            <p className="text-gray-600 text-center group-hover:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, animi? Corporis deserunt alias nulla vitae provident, unde quibusdam tempore mollitia!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 ,delay:0.6}}
          className="max-w-sm group mx-auto bg-white "
        >
          <div className="flex flex-col items-center p-6 transition-all duration-500 shadow-lg  group-hover:bg-orange-400 group-hover:-translate-y-2">
            <div className="mb-4">
              <div className="text-4xl text-blue-500">
                <img className="w-20" src={certificate} alt="" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">title</h2>
            <p className="text-gray-600 text-center group-hover:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, animi? Corporis deserunt alias nulla vitae provident, unde quibusdam tempore mollitia!</p>
          </div>
        </motion.div>
     </div>
   </>
  )
}

export default Cards
